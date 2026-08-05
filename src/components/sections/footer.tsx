import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-[#FFE8E0] bg-white">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 text-center">
                <p className="text-sm text-[#4B5563]">
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
