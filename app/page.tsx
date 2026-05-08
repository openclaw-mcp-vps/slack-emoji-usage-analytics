export default function Home() {
  const faqs = [
    {
      q: "How does EmojiPulse connect to Slack?",
      a: "EmojiPulse uses Slack OAuth to securely connect to your workspace. We only request read access to emoji reactions — no message content is ever stored."
    },
    {
      q: "What kind of insights will I get?",
      a: "You'll see sentiment trends over time, top emojis by channel and team member, mood heatmaps by day/hour, and alerts when sentiment drops significantly."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel anytime from your billing dashboard. Your data is retained for 30 days after cancellation so you can export it."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Slack Emoji Analytics
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Track your team&apos;s mood through{" "}
          <span className="text-[#58a6ff]">Slack emoji patterns</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          EmojiPulse analyzes how your team reacts in Slack to surface sentiment trends, spot burnout early, and keep remote culture healthy — all without reading a single message.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $7 / month
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            ["😄", "Sentiment Trends", "Daily mood scores across channels"],
            ["📊", "Emoji Heatmaps", "See when energy peaks and dips"],
            ["🔔", "Burnout Alerts", "Get notified before morale drops"]
          ].map(([icon, title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-3xl mb-2">{icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{title}</div>
              <div className="text-xs text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$7<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Per workspace. Unlimited users.</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect unlimited Slack channels",
              "Real-time emoji sentiment tracking",
              "Weekly mood digest emails",
              "Burnout early-warning alerts",
              "CSV data export",
              "7-day free trial"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get started free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} EmojiPulse. All rights reserved.
      </footer>
    </main>
  );
}
