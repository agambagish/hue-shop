"use client";

import { useEffect, useState } from "react";

import { toast } from "sonner";

import { Card, CardContent } from "@/components/ui/card";
import type { shopStatusEnum } from "@/db/schema";
import {
  BusinessDetailsStep,
  ContactDetailsStep,
  PreferencesStep,
  ReviewStep,
  ShopInformationStep,
  StepIndicator,
  SuccessStep,
} from "@/modules/onboarding/components";
import type { OnboardingSchema } from "@/modules/onboarding/schemas/onboarding-schema";
import { createShop } from "@/modules/onboarding/server/create-shop";

const steps = [
  { id: 1, title: "Shop Information", description: "Tell us about your shop" },
  { id: 2, title: "Contact Details", description: "How can we reach you?" },
  { id: 3, title: "Business Details", description: "Legal and business info" },
  { id: 4, title: "Preferences", description: "Customize your experience" },
  { id: 5, title: "Review", description: "Review and submit" },
];

interface Props {
  status?: (typeof shopStatusEnum.enumValues)[number];
}

export function ClientSidePage({ status }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [onboardingData, setOnboardingData] = useState<
    Partial<OnboardingSchema>
  >({});

  useEffect(() => {
    if (status === "pending") {
      setIsSubmitted(true);
    }
  }, [status]);

  function updateData(stepData: Partial<OnboardingSchema>) {
    setOnboardingData((prev) => ({ ...prev, ...stepData }));
  }

  function nextStep() {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  function handleSubmit() {
    setIsLoading(true);

    toast.promise(createShop(onboardingData as OnboardingSchema), {
      loading: "Submitting application...",
      success: () => {
        setIsSubmitted(true);
        return "Application Submitted";
      },
      error: ({ message }: { message: string }) => message,
      finally: () => setIsLoading(false),
    });
  }

  function renderStep() {
    if (isSubmitted) {
      return <SuccessStep />;
    }

    switch (currentStep) {
      case 1:
        return (
          <ShopInformationStep
            data={onboardingData}
            onNext={nextStep}
            onUpdate={updateData}
          />
        );
      case 2:
        return (
          <ContactDetailsStep
            data={onboardingData}
            onNext={nextStep}
            onPrev={prevStep}
            onUpdate={updateData}
          />
        );
      case 3:
        return (
          <BusinessDetailsStep
            data={onboardingData}
            onNext={nextStep}
            onPrev={prevStep}
            onUpdate={updateData}
          />
        );
      case 4:
        return (
          <PreferencesStep
            data={onboardingData}
            onNext={nextStep}
            onPrev={prevStep}
            onUpdate={updateData}
          />
        );
      case 5:
        return (
          <ReviewStep
            data={onboardingData as OnboardingSchema}
            onPrev={prevStep}
            onSubmit={handleSubmit}
            disabled={isLoading}
          />
        );
      default:
        return null;
    }
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl">Welcome to HUE</h1>
          <p className="text-lg text-muted-foreground">
            Let's get your shop set up in just a few simple steps
          </p>
        </div>
        {!isSubmitted && (
          <div className="mb-8 ml-[6rem]">
            <StepIndicator steps={steps} currentStep={currentStep} />
          </div>
        )}
        <Card className="border-0 bg-background/80 shadow-xl backdrop-blur-sm">
          <CardContent className="p-8">
            <div
              key={isSubmitted ? "success" : currentStep}
              className="transition-all duration-300"
            >
              {renderStep()}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
