import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 text-white">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3 text-white">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="text-zinc-300 leading-relaxed mb-4">{children}</p>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside text-zinc-300 mb-4 space-y-2">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside text-zinc-300 mb-4 space-y-2">
                {children}
            </ol>
        ),
        li: ({ children }) => <li className="text-zinc-300">{children}</li>,
        a: ({ href, children }) => (
            <a
                href={href}
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
        code: ({ children }) => (
            <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono text-zinc-200">
                {children}
            </code>
        ),
        pre: ({ children }) => (
            <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto mb-4">
                {children}
            </pre>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-zinc-400 my-4">
                {children}
            </blockquote>
        ),
        hr: () => <hr className="border-zinc-800 my-8" />,
        table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
                <table className="w-full text-left border-collapse">{children}</table>
            </div>
        ),
        th: ({ children }) => (
            <th className="border-b border-zinc-700 p-3 text-zinc-200 font-semibold">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="border-b border-zinc-800 p-3 text-zinc-300">{children}</td>
        ),
        ...components,
    };
}
