"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidProps {
    chart: string;
    className?: string;
}

export function Mermaid({ chart, className = "" }: MermaidProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: "dark",
            themeVariables: {
                primaryColor: "#3b82f6",
                primaryTextColor: "#fff",
                primaryBorderColor: "#60a5fa",
                lineColor: "#71717a",
                secondaryColor: "#27272a",
                tertiaryColor: "#18181b",
                background: "#09090b",
                mainBkg: "#18181b",
                secondBkg: "#27272a",
                nodeBorder: "#52525b",
                clusterBkg: "#27272a",
                clusterBorder: "#3f3f46",
                titleColor: "#fafafa",
                edgeLabelBackground: "#27272a",
            },
            fontFamily: "inherit",
        });

        const renderChart = async () => {
            if (!containerRef.current) return;

            try {
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to render diagram");
                console.error("Mermaid rendering error:", err);
            }
        };

        renderChart();
    }, [chart]);

    if (error) {
        return (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 text-red-400">
                <p className="font-medium">Diagram Error</p>
                <p className="text-sm">{error}</p>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className={`flex justify-center items-center overflow-x-auto bg-zinc-900/50 rounded-lg p-4 ${className}`}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}
