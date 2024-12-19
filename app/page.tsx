"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WhyUsSection } from "@/components/sections/why-us";
import { ProcessSection } from "@/components/sections/process";
import { ContactSection } from "@/components/sections/contact";
import { LogosSection } from "@/components/sections/logos-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { IdeaForm } from "@/components/forms/idea-form";

export default function Home() {
  const [formType, setFormType] = useState<"idea" | "started" | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header onGetStarted={() => setFormType("started")} />
      <main>
        <HeroSection onBuildIdea={() => setFormType("idea")} />
        <ProcessSection />
        <LogosSection />
        <ServicesSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <IdeaForm
        isOpen={formType !== null}
        onClose={() => setFormType(null)}
        type={formType || "idea"}
      />
    </div>
  );
}