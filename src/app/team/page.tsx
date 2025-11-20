"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import { Users } from "lucide-react";

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
      
      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Instructors"
          description="Learn from industry professionals with real-world experience"
          tag="Instructors"
          tagIcon={Users}
          buttons={[
            {
              text: "View All Instructors",
              href: "instructors"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Senior Full-Stack Developer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653289818-idtv6r1x.jpg",
              imageAlt: "Sarah Johnson, Full-Stack Developer"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Lead Software Architect",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653291089-kluoeek0.jpg",
              imageAlt: "Michael Chen, Software Architect"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Data Science Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653292017-ylch4ysd.jpg",
              imageAlt: "Emily Rodriguez, Data Scientist"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Mobile Development Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653293322-gmzikhhf.jpg",
              imageAlt: "David Kim, Mobile Developer"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}