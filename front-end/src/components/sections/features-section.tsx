import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Clock,
  Shield,
  Users,
  Heart,
  MessageCircle,
  Video,
  Calendar,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Expert Therapists",
    description:
      "Connect with licensed mental health professionals specialized in various therapeutic approaches.",
    badge: "Licensed",
    color: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Book sessions that fit your schedule with 24/7 availability and same-day appointments.",
    badge: "24/7",
    color: "text-green-600",
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description:
      "Your conversations are protected by end-to-end encryption and HIPAA compliance.",
    badge: "HIPAA",
    color: "text-purple-600",
  },
  {
    icon: MessageCircle,
    title: "Multiple Formats",
    description:
      "Choose from video calls, phone sessions, or secure messaging based on your comfort level.",
    badge: "Flexible",
    color: "text-pink-600",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description:
      "Get matched with therapists who understand your unique background and challenges.",
    badge: "Custom",
    color: "text-indigo-600",
  },
  {
    icon: Heart,
    title: "Ongoing Support",
    description:
      "Access resources, tools, and continued support between sessions for lasting progress.",
    badge: "24/7",
    color: "text-red-600",
  },
];

const stats = [
  {
    icon: CheckCircle,
    number: "95%",
    label: "Success Rate",
    description: "of clients report significant improvement",
  },
  {
    icon: Users,
    number: "10k+",
    label: "Happy Clients",
    description: "transformed lives through our platform",
  },
  {
    icon: Clock,
    number: "< 24hrs",
    label: "Quick Match",
    description: "average time to connect with a therapist",
  },
  {
    icon: Shield,
    number: "100%",
    label: "Secure",
    description: "encrypted and HIPAA compliant",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-purple-200 text-purple-600"
          >
            Why Choose SmartCounseling
          </Badge>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Mental Health Support
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Designed for You
            </span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Experience therapy that adapts to your needs, schedule, and
            preferences. Our platform combines cutting-edge technology with
            human compassion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardHeader className="pb-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div
                      className={`rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-3 transition-colors group-hover:from-purple-50 group-hover:to-pink-50`}
                    >
                      <IconComponent
                        className={`h-6 w-6 ${feature.color} transition-transform group-hover:scale-110`}
                      />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-purple-700">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-white">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              Trusted by Thousands
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-purple-100">
              Join a community of people who have found healing, growth, and
              peace of mind through our platform.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mb-2 text-3xl font-bold md:text-4xl">
                    {stat.number}
                  </div>
                  <div className="mb-1 text-lg font-semibold text-purple-100">
                    {stat.label}
                  </div>
                  <div className="text-sm text-purple-200">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
