"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Building2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  BusinessDetailsSchema,
  OnboardingSchema,
} from "@/modules/onboarding/schemas/onboarding-schema";
import { businessDetailsSchema } from "@/modules/onboarding/schemas/onboarding-schema";

interface Props {
  data?: Partial<OnboardingSchema>;
  onNext: () => void;
  onPrev: () => void;
  onUpdate: (data: Partial<OnboardingSchema>) => void;
}

const businessTypes = [
  "Sole Proprietorship",
  "Partnership",
  "LLC",
  "Corporation",
  "Non-profit",
  "Other",
];

const yearsOptions = [
  "Less than 1 year",
  "1-2 years",
  "3-5 years",
  "6-10 years",
  "More than 10 years",
];

export function BusinessDetailsStep({ data, onNext, onPrev, onUpdate }: Props) {
  const form = useForm<BusinessDetailsSchema>({
    mode: "onChange",
    resolver: zodResolver(businessDetailsSchema),
    defaultValues: {
      businessType: data?.businessType || "",
      taxId: data?.taxId || undefined,
      businessLicense: data?.businessLicense || undefined,
      yearsInBusiness: data?.yearsInBusiness || "",
    },
  });

  function onSubmit(values: BusinessDetailsSchema) {
    onUpdate(values);
    onNext();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Building2 className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-bold text-2xl">Business Information</h2>
        <p className="text-muted-foreground">
          Help us understand your business structure and experience
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Business Type
                  <span className="text-destructive">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-56">
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  This helps us provide appropriate tax and legal guidance
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearsInBusiness"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Years in Business
                  <span className="text-destructive">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-56">
                    <SelectTrigger>
                      <SelectValue placeholder="How long have you been in business?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {yearsOptions.map((years) => (
                      <SelectItem key={years} value={years}>
                        {years}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  This helps us understand your experience level
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="taxId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Tax ID / EIN
                    <span className="text-muted-foreground text-sm">
                      (Optional)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="12-3456789"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormDescription>For tax reporting purposes</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessLicense"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Business License #
                    <span className="text-muted-foreground text-sm">
                      (Optional)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="BL123456789"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormDescription>
                    If you have a business license
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="rounded-lg bg-muted/50 p-4">
            <h3 className="mb-2 font-medium">
              Why do we need this information?
            </h3>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• To ensure compliance with tax regulations</li>
              <li>• To provide appropriate business tools and features</li>
              <li>• To offer relevant support and guidance</li>
              <li>• To protect both you and our platform</li>
            </ul>
          </div>
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={onPrev}
              className="bg-transparent px-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <Button
              type="submit"
              size="lg"
              className="px-8"
              disabled={!form.formState.isValid}
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
