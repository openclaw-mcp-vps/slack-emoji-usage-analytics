import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EmojiPulse – Track Team Mood via Slack Emoji Analytics",
  description: "Analyze Slack emoji patterns to gauge team sentiment and identify communication trends. Built for HR managers, team leads, and remote executives."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="65e0fe69-89c0-4345-afa6-0488e74ed4ca"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
