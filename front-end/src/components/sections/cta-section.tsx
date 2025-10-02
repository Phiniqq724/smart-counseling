"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Star,
  Shield,
  Clock,
  Heart,
  CheckCircle,
} from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Marketing Manager",
    content:
      "SmartCounseling changed my life. The therapists are incredibly supportive and the platform makes it so easy to get help when I need it.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Software Engineer",
    content:
      "I was skeptical about online therapy, but this platform exceeded all my expectations. My therapist understands me and I've seen real progress.",
    rating: 5,
  },
  {
    name: "Maria K.",
    role: "Teacher",
    content:
      "The flexibility to schedule sessions around my busy life has been a game-changer. Highly recommend to anyone looking for quality mental health care.",
    rating: 5,
  },
];

export function CTASection() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC4xIj4KPHBhdGggZD0iTTMwIDI1QzMyLjc2MTQgMjUgMzUgMjIuNzYxNCAzNSAyMEMzNSAxNy4yMzg2IDMyLjc2MTQgMTUgMzAgMTVDMjcuMjM4NiAxNSAyNSAxNy4yMzg2IDI1IDIwQzI1IDIyLjc2MTQgMjcuMjM4NiAyNSAzMCAyNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMCA0NUMzMi43NjE0IDQ1IDM1IDQyLjc2MTQgMzUgNDBDMzUgMzcuMjM4NiAzMi43NjE0IDM1IDMwIDM1QzI3LjIzODYgMzUgMjUgMzcuMjM4NiAyNSA0MEMyNSA0Mi43NjE0IDI3LjIzODYgNDUgMzAgNDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo=')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Main CTA */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-6 border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <Heart className="mr-1 h-3 w-3" />
            Take the First Step Today
          </Badge>

          <h2 className="mb-8 text-4xl leading-tight font-bold text-white md:text-6xl">
            Ready to Transform
            <span className="mt-2 block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
              Your Mental Health?
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-purple-100">
            Join thousands of people who have found peace, healing, and growth
            through our platform. Your journey to better mental health starts
            with a single click.
          </p>

          {/* Quick Benefits */}
          <div className="mb-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-sm text-white">Match in 24 hours</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-white">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-white">Flexible scheduling</span>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="hover:shadow-3xl transform border-0 bg-gradient-to-r from-pink-500 to-purple-500 px-12 py-8 text-xl font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-purple-600"
              onClick={() => signIn("google", { callbackUrl: "/consult" })}
            >
              Start Your Healing Journey
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 px-12 py-8 text-xl text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book Free Consultation
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="mb-12 text-center text-3xl font-bold text-white">
            What Our Community Says
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed text-purple-100 italic">
                    {testimonial.content}
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-purple-200">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mx-auto max-w-2xl">
          <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="mb-6 text-center">
                <MessageCircle className="mx-auto mb-4 h-12 w-12 text-pink-400" />
                <h4 className="mb-2 text-2xl font-bold text-white">
                  Stay Connected
                </h4>
                <p className="text-purple-100">
                  Get mental health tips, resources, and updates delivered to
                  your inbox.
                </p>
              </div>

              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-white/30 bg-white/20 text-white transition-colors placeholder:text-purple-200 focus:bg-white/30"
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 transition-all duration-300 hover:from-pink-600 hover:to-purple-600"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <p className="mt-4 text-center text-xs text-purple-200">
                No spam. Unsubscribe at any time. Your privacy is important to
                us.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-pulse">
        <div className="h-8 w-8 rounded-full bg-pink-400/30"></div>
      </div>
      <div className="absolute right-20 bottom-20 animate-bounce">
        <div className="h-6 w-6 rounded-full bg-purple-400/30"></div>
      </div>
      <div className="absolute top-1/2 left-10 animate-pulse delay-1000">
        <div className="h-4 w-4 rounded-full bg-indigo-400/30"></div>
      </div>
    </section>
  );
}
