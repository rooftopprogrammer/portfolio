import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="on-night bg-night text-night-ink-2 border-t border-night-line">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
                <p>
                    © {new Date().getFullYear()} {siteConfig.name}
                </p>
                <a href="#top" className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 hover:text-night-ink">
                    Back to top <span aria-hidden="true">↑</span>
                </a>
            </div>
        </footer>
    );
}
