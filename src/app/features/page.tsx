"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import { Zap } from "lucide-react";

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
      
      <div id="features" data-section="features">
        <FeatureCardOne
          title="Comprehensive Learning Experience"
          description="Everything you need to master modern technology skills"
          tag="Features"
          tagIcon={Zap}
          buttons={[
            {
              text: "Explore All",
              href: "features"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Programming Fundamentals",
              description: "Master core programming concepts with Python, JavaScript, and modern development practices",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653281736-1vbo6nox.jpg",
              imageAlt: "Programming code interface",
              button: {
                text: "Learn More",
                href: "programming"
              }
            },
            {
              title: "Web Development",
              description: "Build responsive websites and web applications using HTML, CSS, React, and Node.js",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653282848-q0278dks.jpg",
              imageAlt: "Web development workspace",
              button: {
                text: "Learn More",
                href: "web-dev"
              }
            },
            {
              title: "Data Science",
              description: "Analyze data, create visualizations, and build machine learning models with Python",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653283946-41gwda2l.jpg",
              imageAlt: "Data science analytics",
              button: {
                text: "Learn More",
                href: "data-science"
              }
            },
            {
              title: "Mobile Development",
              description: "Create native mobile apps for iOS and Android using React Native and Flutter",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653285030-8p3562g9.jpg",
              imageAlt: "Mobile app development",
              button: {
                text: "Learn More",
                href: "mobile-dev"
              }
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}