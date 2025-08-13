"use client";

import { useClerk } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
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
  ContactDetailsSchema,
  OnboardingSchema,
} from "@/modules/onboarding/schemas/onboarding-schema";
import { contactDetailsSchema } from "@/modules/onboarding/schemas/onboarding-schema";

interface Props {
  data?: Partial<OnboardingSchema>;
  onNext: () => void;
  onPrev: () => void;
  onUpdate: (data: Partial<OnboardingSchema>) => void;
}

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Other",
];

export function ContactDetailsStep({ data, onNext, onPrev, onUpdate }: Props) {
  const { user } = useClerk();

  const form = useForm<ContactDetailsSchema>({
    mode: "onChange",
    resolver: zodResolver(contactDetailsSchema),
    defaultValues: {
      address: data?.address || "",
      city: data?.city || "",
      state: data?.state || "",
      zipCode: data?.zipCode || "",
      country: data?.country || "",
    },
  });

  function onSubmit(values: ContactDetailsSchema) {
    onUpdate(values);
    onNext();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-bold text-2xl">Contact Information</h2>
        <p className="text-muted-foreground">
          We need your contact details to set up your account and communicate
          with you
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormItem>
            <FormLabel>
              Email Address
              <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="your@email.com"
                className="read-only:bg-muted"
                readOnly
                defaultValue={user?.primaryEmailAddress?.emailAddress}
              />
            </FormControl>
            <FormDescription>This will be your login email</FormDescription>
            <FormMessage />
          </FormItem>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Street Address
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="123 Main Street" autoFocus {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    City
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="New York" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    State/Province
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="NY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    ZIP/Postal Code
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="10001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Country
                  <span className="text-destructive">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-56">
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
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
