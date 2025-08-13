import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: Props) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step) => (
        <div key={step.id} className="flex flex-1 items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full font-medium text-sm transition-all duration-300",
                currentStep > step.id
                  ? "bg-primary text-primary-foreground"
                  : currentStep === step.id
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-muted text-muted-foreground",
              )}
            >
              {currentStep > step.id ? <Check className="h-5 w-5" /> : step.id}
            </div>
            <div className="mt-2 text-center">
              <div
                className={cn(
                  "font-medium text-sm transition-colors duration-300",
                  currentStep >= step.id
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {step.title}
              </div>
              <div className="hidden text-muted-foreground text-xs sm:block">
                {step.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
