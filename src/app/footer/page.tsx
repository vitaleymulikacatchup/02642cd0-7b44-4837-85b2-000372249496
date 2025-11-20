"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import FooterSocial from '@/components/sections/footer/FooterSocial';

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
      
      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="ITSchool"
          copyrightText="© 2025 ITSchool. All rights reserved."
          columns={[
            {
              title: "Courses",
              items: [
                {
                  label: "Web Development",
                  href: "web-development"
                },
                {
                  label: "Data Science",
                  href: "data-science"
                },
                {
                  label: "Mobile Development",
                  href: "mobile-development"
                },
                {
                  label: "Programming Basics",
                  href: "programming"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Instructors",
                  href: "instructors"
                },
                {
                  label: "Success Stories",
                  href: "testimonials"
                },
                {
                  label: "Partners",
                  href: "partners"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "help"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Community",
                  href: "community"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: "Twitter",
              href: "https://twitter.com/itschool",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: "Linkedin",
              href: "https://linkedin.com/company/itschool",
              ariaLabel: "Connect on LinkedIn"
            },
            {
              icon: "Youtube",
              href: "https://youtube.com/itschool",
              ariaLabel: "Subscribe to our YouTube"
            },
            {
              icon: "Instagram",
              href: "https://instagram.com/itschool",
              ariaLabel: "Follow us on Instagram"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}