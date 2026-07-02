import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-32 md:pb-40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-8 text-center md:text-left">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Now on the App Store
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                LURKE
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl max-w-lg mx-auto md:mx-0">
                See exactly who unfollowed you on Instagram — instantly.
              </p>
              <p className="text-base text-muted-foreground max-w-md mx-auto md:mx-0">
                The fastest, cleanest unfollower tracker built for creators, influencers, and anyone serious about their Instagram growth.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                <a
                  href="https://apps.apple.com/ca/app/lurke-unfollowers-tracker/id6759174957"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="h-14 px-8 text-base rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.08-3.11-1.05.05-2.31.7-3.06 1.53-.68.76-1.27 1.98-1.11 3.11 1.18.09 2.38-.6 3.09-1.53z" />
                    </svg>
                    Download on the App Store
                  </Button>
                </a>
                <span className="text-sm text-muted-foreground">iPhone & iPad · United States</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/hero-phone.png"
                alt="LURKE app running on iPhone showing unfollower tracker dashboard"
                width={512}
                height={512}
                className="w-full max-w-sm md:max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything you need to know</h2>
            <p className="mt-4 text-lg text-muted-foreground">Stop guessing. Start knowing.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Unfollower Tracking"
              description="Instantly see who stopped following you on Instagram — no delays, no guesswork."
            />
            <FeatureCard
              title="New Follower Alerts"
              description="Know the moment you gain a new fan or follower with real-time notifications."
            />
            <FeatureCard
              title="Not Following Back"
              description="Discover who you follow that doesn't follow you back. Clean up your list."
            />
            <FeatureCard
              title="Ghost Followers"
              description="Identify inactive accounts dragging down your engagement rate."
            />
            <FeatureCard
              title="Growth Analytics"
              description="Track your Instagram growth trends over time with clear, visual insights."
            />
            <FeatureCard
              title="No Ads, No Clutter"
              description="Just a premium, minimal dashboard built for speed and clarity."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to take control?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join creators and influencers who use LURKE to stay on top of their Instagram growth.
          </p>
          <div className="mt-10">
            <a
              href="https://apps.apple.com/ca/app/lurke-unfollowers-tracker/id6759174957"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="h-14 px-8 text-base rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.08-3.11-1.05.05-2.31.7-3.06 1.53-.68.76-1.27 1.98-1.11 3.11 1.18.09 2.38-.6 3.09-1.53z" />
                </svg>
                Get LURKE on the App Store
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            LURKE Pro subscriptions available for unlimited tracking.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Softgenics LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://apps.apple.com/ca/app/lurke-unfollowers-tracker/id6759174957" className="hover:text-foreground transition-colors">
              App Store
            </a>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
