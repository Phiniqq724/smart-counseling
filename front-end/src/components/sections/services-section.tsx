import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Heart,
  Users,
  Zap,
  Target,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description:
      "One-on-one sessions focused on your personal mental health journey and goals.",
    features: [
      "Personalized treatment plans",
      "Flexible scheduling",
      "Various therapeutic approaches",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Couples Counseling",
    description:
      "Strengthen relationships through guided communication and conflict resolution.",
    features: [
      "Relationship building",
      "Communication skills",
      "Conflict resolution",
    ],
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Heart,
    title: "Family Therapy",
    description:
      "Heal family dynamics and create healthier relationships within your family unit.",
    features: [
      "Family dynamics",
      "Multi-generational healing",
      "Systemic approaches",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Target,
    title: "Specialized Programs",
    description:
      "Targeted support for specific challenges like anxiety, depression, trauma, and more.",
    features: [
      "Trauma-informed care",
      "Anxiety & depression",
      "Addiction support",
    ],
    color: "from-purple-500 to-violet-600",
  },
];

const therapeuticApproaches = [
  "Cognitive Behavioral Therapy (CBT)",
  "Dialectical Behavior Therapy (DBT)",
  "Eye Movement Desensitization (EMDR)",
  "Mindfulness-Based Therapy",
  "Solution-Focused Brief Therapy",
  "Acceptance and Commitment Therapy",
];

export function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-indigo-200 text-indigo-600"
          >
            Our Services
          </Badge>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Comprehensive Mental Health
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Care That Works
            </span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Whether you're dealing with anxiety, depression, relationship
            issues, or simply want to improve your mental wellness, we have
            specialized programs and expert therapists ready to support you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 transition-opacity group-hover:opacity-10`}
                ></div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="mb-4 flex items-center gap-4">
                    <div
                      className={`rounded-2xl bg-gradient-to-br p-4 ${service.color} transform text-white shadow-lg transition-shadow duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-indigo-700">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <CardDescription className="text-lg leading-relaxed text-gray-600">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full transition-colors group-hover:border-indigo-300 group-hover:bg-indigo-50"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Therapeutic Approaches */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-indigo-50 p-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <Badge
                variant="outline"
                className="mb-4 border-indigo-200 text-indigo-600"
              >
                Evidence-Based Treatment
              </Badge>
              <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Therapeutic Approaches We Use
              </h3>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Our licensed therapists are trained in various evidence-based
                therapeutic modalities to provide you with the most effective
                treatment for your unique needs.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {therapeuticApproaches.map((approach, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-indigo-100 bg-white p-6 shadow-md transition-shadow hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-indigo-100 p-2 transition-colors group-hover:bg-indigo-200">
                      <Star className="h-4 w-4 text-indigo-600" />
                    </div>
                    <span className="font-medium text-gray-900 transition-colors group-hover:text-indigo-700">
                      {approach}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-6 rounded-2xl bg-white p-6 shadow-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Sessions available 24/7
                  </span>
                </div>
                <div className="h-6 w-px bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">
                    HIPAA Compliant
                  </span>
                </div>
                <div className="h-6 w-px bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Licensed Professionals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
