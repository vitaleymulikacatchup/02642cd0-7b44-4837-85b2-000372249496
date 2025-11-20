"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { GraduationCap, Sparkles, Zap, BookOpen, DollarSign, Star, Users, TrendingUp, MessageSquare, Building, HelpCircle, Mail, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
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
              onQuantityChange: () => {}
            },
            {
              id: "data-science-course",
              name: "Data Science with Python",
              price: "$399",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653287434-dgmge5s2.jpg",
              imageAlt: "Data science course materials",
              initialQuantity: 1,
              onQuantityChange: () => {}
            },
            {
              id: "mobile-app-course",
              name: "Mobile App Development",
              price: "$349",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763653288574-08ebbj6w.jpg",
              imageAlt: "Mobile app development course",
              initialQuantity: 1,
              onQuantityChange: () => {}
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Learning Path"
          description="Flexible pricing options to fit your learning goals and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          buttons={[
            {
              text: "Compare Plans",
              href: "pricing"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Best Value",
              badgeIcon: Star,
              price: "$49/month",
              subtitle: "Perfect for beginners starting their tech journey",
              features: [
                "Access to 20+ courses",
                "Basic project templates",
                "Community support",
                "Course completion certificates"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$99/month",
              subtitle: "Ideal for serious learners and career switchers",
              features: [
                "Access to 50+ courses",
                "Advanced projects portfolio",
                "1-on-1 mentor sessions",
                "Career placement assistance",
                "Industry certifications"
              ]
            },
            {
              id: "enterprise",
              badge: "For Teams",
              badgeIcon: Users,
              price: "$199/month",
              subtitle: "Complete solution for organizations and teams",
              features: [
                "Unlimited course access",
                "Custom learning paths",
                "Team management tools",
                "Priority support",
                "Analytics dashboard"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Impact in Numbers"
          description="See how we're transforming tech education worldwide"
          tag="Success"
          tagIcon={TrendingUp}
          buttons={[
            {
              text: "Success Stories",
              href: "testimonials"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "10,000+",
              description: "Students Graduated Successfully"
            },
            {
              id: "2",
              value: "95%",
              description: "Job Placement Rate"
            },
            {
              id: "3",
              value: "500+",
              description: "Industry Partner Companies"
            },
            {
              id: "4",
              value: "4.9/5",
              description: "Average Student Rating"
            }
          ]}
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

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="ITSchool"
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
              icon: Twitter,
              href: "https://twitter.com/itschool",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/itschool",
              ariaLabel: "Connect on LinkedIn"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/itschool",
              ariaLabel: "Subscribe to our YouTube"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/itschool",
              ariaLabel: "Follow us on Instagram"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}