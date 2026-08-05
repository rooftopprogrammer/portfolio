"use client";

import { resume } from "@/config/site";
import { DownloadIcon } from "@/components/icons";
import { trackResumeDownload } from "@/lib/analytics";

/**
 * Semantic download anchor. Kept as its own client component so the sections
 * that render it can stay server components.
 */
export function ResumeDownloadLink({ className }: { className?: string }) {
    return (
        <a
            href={resume.href}
            download={resume.fileName}
            onClick={() => trackResumeDownload()}
            className={className}
        >
            <DownloadIcon className="w-4 h-4" />
            {resume.label}
        </a>
    );
}
