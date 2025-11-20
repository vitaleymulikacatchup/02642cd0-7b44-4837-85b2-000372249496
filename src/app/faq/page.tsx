"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import { HelpCircle } from "lucide-react";

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
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our IT courses and programs"
          tag="Help"
          tagIcon={HelpCircle}
          buttons={[
            {
              text: "Contact Support",
              href: "contact"
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What programming languages do you teach?",
              content: "We teach Python, JavaScript, HTML/CSS, React, Node.js, Java, Swift, and Kotlin depending on your chosen specialization track."
            },
            {
              id: "2",
              title: "How long does it take to complete a course?",
              content: "Most courses take 12-16 weeks to complete with 10-15 hours of study per week. Self-paced options are also available."
            },
            {
              id: "3",
              title: "Do you provide job placement assistance?",
              content: "Yes, our Pro and Enterprise plans include career coaching, resume review, interview preparation, and direct connections to hiring partners."
            },
            {
              id: "4",
              title: "Are there any prerequisites for enrollment?",
              content: "Basic computer literacy is required. Some advanced courses may require completion of foundational courses or equivalent experience."
            },
            {
              id: "5",
              title: "What kind of projects will I build?",
              content: "You'll build real-world projects including web applications, mobile apps, data analysis dashboards, and machine learning models for your portfolio."
            },
            {
              id: "6",
              title: "Is there a money-back guarantee?",
              content: "We offer a 30-day money-back guarantee if you're not satisfied with your course experience within the first month."
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}