"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import { TrendingUp } from "lucide-react";

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
      
      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Impact in Numbers"
          description="See how we're transforming tech education worldwide"
          tag="Success"
          tagIcon={TrendingUp}
          buttons={[
            {
              text: "Success Stories",
              href: "testimonials"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "10,000+",
              description: "Students Graduated Successfully"
            },
            {
              id: "2",
              value: "95%",
              description: "Job Placement Rate"
            },
            {
              id: "3",
              value: "500+",
              description: "Industry Partner Companies"
            },
            {
              id: "4",
              value: "4.9/5",
              description: "Average Student Rating"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}