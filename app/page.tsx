"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  Clock,
  Compass,
  Star,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { HeroCanvas } from "@/components/hero-canvas";

const benefits = [
  {
    icon: Building2,
    title: "A business that runs without you",
    body: "Every decision, process, and responsibility that lives in your head gets mapped, documented, and delegated. You build the system — your team runs it.",
  },
  {
    icon: Clock,
    title: "Your time back, on your terms",
    body: "We audit exactly where your hours are going and systematically reclaim them. You decide how you spend your energy — and where you stop entirely.",
  },
  {
    icon: Compass,
    title: "Clarity on what to do next",
    body: "No more reactive noise. You finish with a clear 90-day plan, locked priorities, and the confidence to lead without second-guessing every move.",
  },
];

const testimonials = [
  {
    quote:
      "I was working 60-hour weeks and still felt behind. After 12 weeks I took my first proper holiday in four years — and the business didn't miss a beat.",
    name: "Sarah M.",
    role: "Founder, 8-figure e-commerce brand",
  },
  {
    quote:
      "The programme paid for itself in the first month. Not just in money — in headspace. I finally feel like an owner, not a glorified employee of my own company.",
    name: "James R.",
    role: "MD, Construction & Property Group",
  },
  {
    quote:
      "I'd tried coaches before. This was different — practical, direct, completely tailored. The clarity I have now is worth 10x what I paid.",
    name: "Priya K.",
    role: "CEO, SaaS Startup (Series A)",
  },
];

const BRAND = "#5BF4AE";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">BOP Coaching</span>
          <a href="#signup">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs gap-1"
              style={{ color: BRAND }}
            >
              Apply Now <ChevronRight className="w-3 h-3" />
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-1">

        {/* HERO */}
        <section className="relative overflow-hidden bg-black text-white text-center px-6 py-28 md:py-40">
          <HeroCanvas />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 55% at 50% 0%, rgba(91,244,174,0.18) 0%, transparent 70%)`,
            }}
          />
          <div className="relative max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 border-white/20 text-white/50 text-xs tracking-widest uppercase"
            >
              12-Week Private Coaching
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
              Buy back<br />
              <span style={{ color: BRAND }}>your time.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
              For business owners ready to stop being the bottleneck — and start
              building a company that runs without them.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center mb-14">
              <a href="#signup">
                <Button
                  size="lg"
                  className="rounded-full font-semibold px-8 text-sm"
                  style={{ backgroundColor: BRAND, color: "#0f0f0f" }}
                >
                  Reserve your spot
                </Button>
              </a>
              <a href="#benefits">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full text-sm gap-1"
                  style={{ color: BRAND }}
                >
                  Learn more <ChevronRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <p className="text-white/40 text-sm">
              Investment
              <span
                className="block text-3xl font-semibold tracking-tight mt-1"
                style={{ color: "white" }}
              >
                £5,000
              </span>
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: BRAND }}
              >
                The Programme
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-4">
                Everything changes<br />in 12 weeks.
              </h2>
              <p className="text-muted-foreground text-base max-w-md mx-auto">
                Three core shifts that move you from operator to owner — for good.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {benefits.map(({ icon: Icon, title, body }) => (
                <Card key={title} className="rounded-none border-0 bg-card">
                  <CardContent className="p-8">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-brand-bg"
                    >
                      <Icon className="w-5 h-5" style={{ color: BRAND }} />
                    </div>
                    <h3 className="font-semibold text-base tracking-tight mb-3">
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">
          <Separator />
        </div>

        {/* TESTIMONIALS */}
        <section className="px-6 py-24 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: BRAND }}
              >
                Client Stories
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-4">
                They got their time back.<br />So can you.
              </h2>
              <p className="text-muted-foreground text-base max-w-md mx-auto">
                Founders and MDs who completed the programme share what changed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map(({ quote, name, role }) => (
                <Card key={name} className="bg-card border-border/60">
                  <CardContent className="p-8">
                    <div className="flex gap-0.5 mb-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-sm leading-relaxed mb-6 text-foreground/85">
                      &ldquo;{quote}&rdquo;
                    </blockquote>
                    <div>
                      <p className="text-sm font-semibold">{name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SIGNUP */}
        <section id="signup" className="px-6 py-24 text-center">
          <div className="max-w-xl mx-auto">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: BRAND }}
            >
              Limited Availability
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-4">
              Ready to own<br />your time again?
            </h2>
            <p className="text-muted-foreground text-base mb-10">
              Enter your email and we&apos;ll send you the full programme details —
              including how to apply for one of the spots available this quarter.
            </p>

            {submitted ? (
              <div
                className="flex items-center justify-center gap-2 text-sm font-medium"
                style={{ color: BRAND }}
              >
                <CheckCircle2 className="w-5 h-5" />
                Done — talk soon.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-wrap gap-3 justify-center mb-4"
              >
                <Input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-[200px] rounded-full bg-card border-border/60 px-5"
                />
                <Button
                  type="submit"
                  className="rounded-full px-6 font-semibold text-sm"
                  style={{ backgroundColor: BRAND, color: "#0f0f0f" }}
                >
                  Send me details
                </Button>
              </form>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-8 px-6 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 BOP Coaching. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
