import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Shield,
  Award,
  Users,
} from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Individual Therapy", href: "/services/individual" },
      { label: "Couples Counseling", href: "/services/couples" },
      { label: "Family Therapy", href: "/services/family" },
      { label: "Group Therapy", href: "/services/group" },
      { label: "Specialized Programs", href: "/services/specialized" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Mental Health Blog", href: "/blog" },
      { label: "Self-Help Tools", href: "/tools" },
      { label: "Crisis Resources", href: "/crisis" },
      { label: "Insurance & Pricing", href: "/pricing" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Therapists", href: "/therapists" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Security", href: "/security" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const certifications = [
  { icon: Shield, text: "HIPAA Compliant" },
  { icon: Award, text: "Licensed Professionals" },
  { icon: Users, text: "Verified Reviews" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Top Section */}
        <div className="mb-12 grid gap-12 lg:grid-cols-6">
          {/* Brand & Contact */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-2">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SmartCounseling</span>
              </div>
              <p className="mb-6 leading-relaxed text-slate-300">
                Empowering your mental health journey with professional support,
                innovative technology, and compassionate care. Available 24/7
                for your convenience.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="mb-3 text-lg font-semibold">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-purple-400" />
                  <span className="text-slate-300">
                    1-800-COUNSEL (1-800-268-6735)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 flex-shrink-0 text-purple-400" />
                  <span className="text-slate-300">
                    support@smartcounseling.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 flex-shrink-0 text-purple-400" />
                  <span className="text-slate-300">
                    24/7 Crisis Support Available
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-purple-400" />
                  <span className="text-slate-300">
                    Serving clients nationwide
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 text-lg font-semibold text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 transition-colors duration-200 hover:text-purple-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-8 bg-slate-700" />

        {/* Emergency Notice */}
        <div className="mb-8 rounded-xl border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-lg bg-red-500 p-2">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-white">Crisis Support</h4>
              <p className="mb-3 text-sm text-slate-200">
                If you're experiencing a mental health emergency, please reach
                out immediately:
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-400 text-red-300 hover:bg-red-500/10"
                >
                  Call 988 - Suicide & Crisis Lifeline
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-400 text-red-300 hover:bg-red-500/10"
                >
                  Text "HOME" to 741741
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Social */}
        <div className="mb-8 flex flex-col items-center justify-between gap-6 lg:flex-row">
          {/* Certifications */}
          <div className="flex flex-wrap gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <IconComponent className="h-5 w-5 text-purple-400" />
                  <span className="text-sm text-slate-300">{cert.text}</span>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="mr-2 text-sm text-slate-400">Follow us:</span>
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group rounded-lg bg-slate-800 p-2 transition-colors duration-200 hover:bg-purple-600"
                  aria-label={social.label}
                >
                  <IconComponent className="h-4 w-4 text-slate-300 group-hover:text-white" />
                </Link>
              );
            })}
          </div>
        </div>

        <Separator className="mb-6 bg-slate-700" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 lg:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <p>© 2024 SmartCounseling. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="transition-colors hover:text-purple-400"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-600">•</span>
              <Link
                href="/terms"
                className="transition-colors hover:text-purple-400"
              >
                Terms of Service
              </Link>
              <span className="text-slate-600">•</span>
              <Link
                href="/cookies"
                className="transition-colors hover:text-purple-400"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="text-xs text-slate-500">
            Made with ❤️ for better mental health
          </div>
        </div>
      </div>
    </footer>
  );
}
