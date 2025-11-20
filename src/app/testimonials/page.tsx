"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { MessageSquare } from "lucide-react";

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
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Students Say"
          description="Real feedback from graduates who transformed their careers"
          tag="Testimonials"
          tagIcon={MessageSquare}
          buttons={[
            {
              text: "Read More Stories",
              href: "success-stories"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alex Thompson",
              role: "Software Developer",
              company: "Google",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653294651-2pu7q75r.jpg",
              imageAlt: "Alex Thompson, Google Software Developer"
            },
            {
              id: "2",
              name: "Maria Garcia",
              role: "Full-Stack Engineer",
              company: "Microsoft",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653295763-p95qif4j.jpg",
              imageAlt: "Maria Garcia, Microsoft Engineer"
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Data Analyst",
              company: "Amazon",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653297167-fsw1ixcm.jpg",
              imageAlt: "James Wilson, Amazon Data Analyst"
            },
            {
              id: "4",
              name: "Lisa Chen",
              role: "Mobile Developer",
              company: "Apple",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653298042-8omfyvub.jpg",
              imageAlt: "Lisa Chen, Apple Mobile Developer"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}