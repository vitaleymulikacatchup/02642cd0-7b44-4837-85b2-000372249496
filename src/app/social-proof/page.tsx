"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Building } from "lucide-react";

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
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Our graduates work at the world's most innovative technology companies"
          tag="Partners"
          tagIcon={Building}
          buttons={[
            {
              text: "View Partnerships",
              href: "partners"
            }
          ]}
          textboxLayout="default"
          speed={40}
          showCard={true}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653299252-bt6tqh62.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653300391-8ra6bjck.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653301393-283dyape.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653302568-owkw229p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653303557-6h43nuf2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653304688-3hisl2jn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653305611-bxr09656.jpg"
          ]}
        />
      </div>
    </ThemeProvider>
  );
}