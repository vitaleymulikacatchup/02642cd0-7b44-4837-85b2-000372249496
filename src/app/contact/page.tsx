"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import { Mail } from "lucide-react";

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
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated with Tech Trends"
          description="Get the latest updates on new courses, industry insights, and exclusive learning resources delivered to your inbox weekly."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter and can unsubscribe at any time."
        />
      </div>
    </ThemeProvider>
  );
}