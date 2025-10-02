"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Users, Shield } from "lucide-react";
import { signIn } from "next-auth/react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzN18yKSI+CjxwYXRoIGQ9Ik0yMCAwQzMxLjA0NTcgMCA0MCA4Ljk1NDMgNDAgMjBDNDAgMzEuMDQ1NyAzMS4wNDU3IDQwIDIwIDQwQzguOTU0MyA0MCAwIDMxLjA0NTcgMCAyMEMwIDguOTU0MyA4Ljk1NDMgMCAyMCAwWiIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzEzN18yKSIvPgo8L2c+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfMTM3XzIiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjApIHJvdGF0ZSg5MCkgc2NhbGUoMjApIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzc5OERGOCIgc3RvcC1vcGFjaXR5PSIwLjIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzk4REY4IiBzdG9wLW9wYWNpdHk9IjAuMDUiLz4KPC9yYWRpYWxHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMzdfMiI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-6 border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <Heart className="mr-1 h-3 w-3" />
            Professional Mental Health Support
          </Badge>

          {/* Main Headline */}
          <h1 className="mb-8 text-5xl leading-tight font-bold text-white md:text-7xl">
            Your Journey to
            <span className="mt-2 block bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
              Mental Wellness
            </span>
            Starts Here
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-purple-100 md:text-2xl">
            Connect with certified counselors and therapists who understand your
            journey. Get personalized support, proven strategies, and
            compassionate care—all in a safe, confidential environment.
          </p>

          {/* Stats */}
          <div className="mb-12 flex flex-col items-center justify-center gap-8 sm:flex-row">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-purple-200">Lives Changed</div>
            </div>
            <div className="hidden h-12 w-px bg-purple-300/30 sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-purple-200">Expert Counselors</div>
            </div>
            <div className="hidden h-12 w-px bg-purple-300/30 sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-purple-200">Available Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="hover:shadow-3xl transform border-0 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-6 text-lg text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-purple-600"
              onClick={() => signIn("google", { callbackUrl: "/consult" })}
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 px-8 py-6 text-lg text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <Users className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex items-center justify-center gap-6 text-purple-200">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">HIPAA Compliant</span>
            </div>
            <div className="h-4 w-px bg-purple-300/30"></div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Licensed Professionals</span>
            </div>
            <div className="h-4 w-px bg-purple-300/30"></div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Confidential & Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="h-4 w-4 rounded-full bg-pink-400 opacity-60"></div>
      </div>
      <div className="absolute right-16 bottom-32 animate-pulse">
        <div className="h-6 w-6 rounded-full bg-purple-400 opacity-40"></div>
      </div>
      <div className="absolute top-1/3 right-8 animate-bounce delay-1000">
        <div className="h-3 w-3 rounded-full bg-indigo-400 opacity-50"></div>
      </div>
    </section>
  );
}
