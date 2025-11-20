"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import { DollarSign, Star, Sparkles, Users } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="default"
      sizing="default"
      background="default"
      cardStyle="default"
      primaryButtonStyle="default"
      secondaryButtonStyle="default"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="ITSchool"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Learning Path"
          description="Flexible pricing options to fit your learning goals and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          buttons={[
            {
              text: "Compare Plans",
              href: "pricing"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Best Value",
              badgeIcon: Star,
              price: "$49/month",
              subtitle: "Perfect for beginners starting their tech journey",
              features: [
                "Access to 20+ courses",
                "Basic project templates",
                "Community support",
                "Course completion certificates"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$99/month",
              subtitle: "Ideal for serious learners and career switchers",
              features: [
                "Access to 50+ courses",
                "Advanced projects portfolio",
                "1-on-1 mentor sessions",
                "Career placement assistance",
                "Industry certifications"
              ]
            },
            {
              id: "enterprise",
              badge: "For Teams",
              badgeIcon: Users,
              price: "$199/month",
              subtitle: "Complete solution for organizations and teams",
              features: [
                "Unlimited course access",
                "Custom learning paths",
                "Team management tools",
                "Priority support",
                "Analytics dashboard"
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}