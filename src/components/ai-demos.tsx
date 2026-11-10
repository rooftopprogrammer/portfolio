"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "@/components/icons";

/**
 * Two small looping illustrations of the independent AI projects. They are
 * decorative (aria-hidden) — the project cards carry the real description —
 * only run while on screen, and show a finished still frame under reduced
 * motion.
 */

function useRunner(run: (api: RunnerApi) => Promise<void>, still: () => void) {
    const ref = useRef<HTMLDivElement>(null);
    const runRef = useRef(run);
    const stillRef = useRef(still);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            stillRef.current();
            return;
        }

        let cancelled = false;
        let visible = false;
        let wake: (() => void) | null = null;

        const observer = new IntersectionObserver(
            ([entry]) => {
                visible = entry.isIntersecting;
                if (visible && wake) {
                    wake();
                    wake = null;
                }
            },
            { threshold: 0.25 }
        );
        observer.observe(node);

        const onVisibility = () => {
            if (!document.hidden && visible && wake) {
                wake();
                wake = null;
            }
        };
        document.addEventListener("visibilitychange", onVisibility);

        const api: RunnerApi = {
            sleep: (ms) =>
                new Promise<void>((resolve, reject) => {
                    const tick = () => {
                        if (cancelled) return reject(new Error("cancelled"));
                        if (!visible || document.hidden) {
                            wake = tick;
                            return;
                        }
                        window.setTimeout(() => (cancelled ? reject(new Error("cancelled")) : resolve()), ms);
                    };
                    tick();
                }),
        };

        (async () => {
            try {
                for (;;) await runRef.current(api);
            } catch {
                // Cancelled on unmount.
            }
        })();

        return () => {
            cancelled = true;
            observer.disconnect();
            document.removeEventListener("visibilitychange", onVisibility);
            wake?.();
        };
    }, []);

    return ref;
}

interface RunnerApi {
    sleep: (ms: number) => Promise<void>;
}

/* ------------------------------------------------------------------ */

const conversations = [
    {
        question: "Which risks does the filing list first?",
        answer:
            "It lists supplier concentration, currency exposure and changing regulation as its first three risk factors.",
        sources: ["10-K · p.18 ¶2", "10-K · p.19 ¶1"],
        found: true,
    },
    {
        question: "What bonus did the CFO get last year?",
        answer: "Not found. None of the indexed documents mention a CFO bonus, so I won’t guess.",
        sources: [],
        found: false,
    },
];

type ChatState = {
    convo: number;
    typed: number;
    phase: "typing" | "searching" | "answering" | "done";
    words: number;
};

export function FinDocsDemo() {
    const [state, setState] = useState<ChatState>({ convo: 0, typed: 0, phase: "typing", words: 0 });

    const ref = useRunner(
        async ({ sleep }) => {
            for (let c = 0; c < conversations.length; c++) {
                const convo = conversations[c];
                setState({ convo: c, typed: 0, phase: "typing", words: 0 });
                await sleep(500);
                for (let i = 1; i <= convo.question.length; i++) {
                    setState((s) => ({ ...s, typed: i }));
                    await sleep(32);
                }
                setState((s) => ({ ...s, phase: "searching" }));
                await sleep(1300);
                setState((s) => ({ ...s, phase: "answering" }));
                const total = convo.answer.split(" ").length;
                for (let w = 1; w <= total; w++) {
                    setState((s) => ({ ...s, words: w }));
                    await sleep(70);
                }
                setState((s) => ({ ...s, phase: "done" }));
                await sleep(3600);
            }
        },
        () =>
            setState({
                convo: 0,
                typed: conversations[0].question.length,
                phase: "done",
                words: conversations[0].answer.split(" ").length,
            })
    );

    const convo = conversations[state.convo];
    const answerWords = convo.answer.split(" ").slice(0, state.words).join(" ");

    return (
        <div ref={ref} aria-hidden="true" className="rounded-2xl border border-night-line bg-night p-4 font-mono text-[13px] h-[360px] sm:h-[290px] lg:h-[330px] xl:h-[300px] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between text-[11px] text-night-ink-2">
                <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-good" /> findocs · 3 filings indexed
                </span>
                <span>illustration</span>
            </div>

            <div className="mt-4 self-end max-w-[85%] rounded-2xl rounded-br-md bg-night-line px-3.5 py-2.5 text-night-ink">
                <span className={state.phase === "typing" ? "caret" : ""}>
                    {convo.question.slice(0, state.typed)}
                </span>
            </div>

            {state.phase === "searching" && (
                <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-night-ink-2">
                    <span>searching</span>
                    {["keyword", "semantic", "vector"].map((mode, i) => (
                        <span
                            key={mode}
                            className="pop rounded-full border border-night-line px-2 py-0.5"
                            style={{ animationDelay: `${i * 220}ms` }}
                        >
                            {mode}
                        </span>
                    ))}
                </div>
            )}

            {(state.phase === "answering" || state.phase === "done") && (
                <div className="mt-3 max-w-[92%] rounded-2xl rounded-bl-md border border-night-line bg-white/[0.03] px-3.5 py-2.5 text-night-ink leading-relaxed">
                    <span className={state.phase === "answering" ? "caret" : ""}>{answerWords}</span>
                    {state.phase === "done" && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {convo.found ? (
                                convo.sources.map((source, i) => (
                                    <span
                                        key={source}
                                        className="pop rounded-md bg-signal/15 text-signal px-2 py-0.5 text-[11px]"
                                        style={{ animationDelay: `${i * 150}ms` }}
                                    >
                                        ↗ {source}
                                    </span>
                                ))
                            ) : (
                                <span className="pop rounded-md bg-white/10 text-night-ink-2 px-2 py-0.5 text-[11px]">
                                    0 sources · no answer invented
                                </span>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

/* ------------------------------------------------------------------ */

const steps = [
    { label: "Extract claim fields", detail: "member, procedure, amount" },
    { label: "Retrieve coverage policy", detail: "via FinDocs · 2 citations" },
    { label: "Check member record", detail: "synthetic database" },
    { label: "Recommend", detail: "needs more information · draft letter" },
];

export function ClaimPilotDemo() {
    const [step, setStep] = useState(0); // index of the running step; steps.length = awaiting human
    const [approved, setApproved] = useState(false);

    const ref = useRunner(
        async ({ sleep }) => {
            setApproved(false);
            for (let i = 0; i <= steps.length; i++) {
                setStep(i);
                await sleep(i === steps.length ? 1900 : 1050);
            }
            setApproved(true);
            await sleep(2600);
        },
        () => {
            setStep(steps.length);
            setApproved(false);
        }
    );

    return (
        <div ref={ref} aria-hidden="true" className="rounded-2xl border border-night-line bg-night p-4 font-mono text-[13px] h-[360px] sm:h-[290px] lg:h-[330px] xl:h-[300px] overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-night-ink-2">
                <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-signal" /> claimpilot · synthetic claim #0427
                </span>
                <span>illustration</span>
            </div>

            <ol className="mt-4 space-y-2">
                {steps.map((s, i) => {
                    const status = i < step ? "done" : i === step ? "running" : "waiting";
                    return (
                        <li key={s.label} className="flex items-center gap-3">
                            <span
                                className={`grid place-items-center w-5 h-5 shrink-0 rounded-full border transition-colors duration-300 ${
                                    status === "done"
                                        ? "bg-good border-good text-night"
                                        : status === "running"
                                          ? "border-signal"
                                          : "border-night-line"
                                }`}
                            >
                                {status === "done" && <CheckIcon className="w-3 h-3" />}
                                {status === "running" && (
                                    <span className="w-2.5 h-2.5 rounded-full border-2 border-signal border-t-transparent animate-spin" />
                                )}
                            </span>
                            <span className={status === "waiting" ? "text-night-ink-2/75" : "text-night-ink"}>
                                {s.label}
                                <span className="text-night-ink-2"> — {s.detail}</span>
                            </span>
                        </li>
                    );
                })}
            </ol>

            <div
                className={`mt-4 rounded-xl border px-3.5 py-3 transition-colors duration-500 ${
                    step >= steps.length ? "border-signal/60 bg-signal/10" : "border-night-line"
                }`}
            >
                <p className="text-[11px] uppercase tracking-wider text-night-ink-2">Human review · required</p>
                <div className="mt-2 flex items-center justify-between gap-3">
                    <span className="text-night-ink">
                        {approved ? "Approved by reviewer" : step >= steps.length ? "Waiting for a person…" : "—"}
                    </span>
                    <span className="flex gap-1.5">
                        <span
                            className={`rounded-md px-2.5 py-1 text-[11px] transition-all ${
                                approved ? "bg-good text-night scale-105" : "bg-white/10 text-night-ink-2"
                            }`}
                        >
                            Approve
                        </span>
                        <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] text-night-ink-2">Edit</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
