"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import { GraduationCap } from "lucide-react";

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
      
      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Master Technology Skills"
          description="Learn programming, web development, data science, and mobile development with hands-on projects and expert instructors"
          tag="IT Education"
          tagIcon={GraduationCap}
          buttons={[
            {
              text: "Start Learning",
              href: "courses"
            },
            {
              text: "View Courses",
              href: "courses"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653279119-jl23a7ig.jpg",
              imageAlt: "Students learning programming"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653281736-1vbo6nox.jpg",
              imageAlt: "Programming code on screen"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653282848-q0278dks.jpg",
              imageAlt: "Web development workspace"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653283946-41gwda2l.jpg",
              imageAlt: "Data analytics dashboard"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653285030-8p3562g9.jpg",
              imageAlt: "Mobile app development"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}