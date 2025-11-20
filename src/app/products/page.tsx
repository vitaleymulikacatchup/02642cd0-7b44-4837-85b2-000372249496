"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import { BookOpen } from "lucide-react";

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
      
      <div id="products" data-section="products">
        <ProductCardThree
          title="Popular Courses"
          description="Enroll in our most demanded technology courses"
          tag="Courses"
          tagIcon={BookOpen}
          buttons={[
            {
              text: "View All Courses",
              href: "courses"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "web-dev-course",
              name: "Full-Stack Web Development",
              price: "$299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653286175-e2kyqn5e.png",
              imageAlt: "Web development course materials",
              initialQuantity: 1,
              onQuantityChange: null
            },
            {
              id: "data-science-course",
              name: "Data Science with Python",
              price: "$399",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653287434-dgmge5s2.jpg",
              imageAlt: "Data science course materials",
              initialQuantity: 1,
              onQuantityChange: null
            },
            {
              id: "mobile-app-course",
              name: "Mobile App Development",
              price: "$349",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653288574-08ebbj6w.jpg",
              imageAlt: "Mobile app development course",
              initialQuantity: 1,
              onQuantityChange: null
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}