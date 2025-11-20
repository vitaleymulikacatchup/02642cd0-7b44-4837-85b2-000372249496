"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import { Sparkles } from "lucide-react";

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
      
      <div id="about" data-section="about">
        <AboutPhoneTimeline
          title="Where Education Meets Automation"
          description="Experience our revolutionary learning platform with automated attendance tracking, smart resource management, and AI-powered performance analysis tools that help you succeed."
          tag="Innovation"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "Try Demo",
              href: "demo"
            }
          ]}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653280445-edpklpsf.jpg",
            imageAlt: "Automated learning dashboard"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653281736-1vbo6nox.jpg",
            imageAlt: "Smart coding interface"
          }}
        />
      </div>
    </ThemeProvider>
  );
}