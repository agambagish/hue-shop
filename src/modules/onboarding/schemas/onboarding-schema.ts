import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

import { shops } from "@/db/schema";

export const onboardingSchema = createInsertSchema(shops, {
  name: (s) =>
    s
      .min(3, "Must be at least 3 characters")
      .max(50, "Maximum 50 characters allowed"),
  slug: (s) =>
    s
      .min(3, "Must be at least 3 characters")
      .max(50, "Maximum 50 characters allowed")
      .regex(
        /^[a-z0-9-]+$/,
        "URL can only contain lowercase letters, numbers, and hyphens",
      )
      .refine(
        (value) => !value.startsWith("-") && !value.endsWith("-"),
        "URL cannot start or end with a hyphen",
      ),
  description: (s) =>
    s
      .min(10, "Must be at least 10 characters")
      .max(120, "Maximum 120 characters allowed"),
  category: (s) => s,
  website: (s) => s.url({ message: "Must be valid URL" }),
  address: (s) => s.min(7, "Must be at least 7 characters"),
  city: (s) => s.min(2, "Must be at least 2 characters"),
  state: (s) => s.min(2, "Must be at least 2 characters"),
  zipCode: (s) => s.min(5, "Must be at least 5 characters"),
  country: (s) => s.min(1, "Please select a country"),
  businessType: (s) => s.min(1, "Please select a business type"),
  taxId: (s) => s.optional(),
  businessLicense: (s) => s.optional(),
  yearsInBusiness: (s) => s.min(1, "Please select years in business"),
  theme: (s) => s,
  features: () =>
    z.array(z.string()).min(1, "Please select at least one feature"),
  marketingConsent: (s) => s,
  newsletterSubscription: (s) => s,
}).omit({
  createdAt: true,
  updatedAt: true,
  status: true,
  userId: true,
});

export type OnboardingSchema = z.infer<typeof onboardingSchema>;

export const shopInformationSchema = onboardingSchema.pick({
  name: true,
  slug: true,
  description: true,
  category: true,
  website: true,
});

export type ShopInformationSchema = z.infer<typeof shopInformationSchema>;

export const contactDetailsSchema = onboardingSchema.pick({
  address: true,
  city: true,
  state: true,
  zipCode: true,
  country: true,
});

export type ContactDetailsSchema = z.infer<typeof contactDetailsSchema>;

export const businessDetailsSchema = onboardingSchema.pick({
  businessType: true,
  taxId: true,
  businessLicense: true,
  yearsInBusiness: true,
});

export type BusinessDetailsSchema = z.infer<typeof businessDetailsSchema>;

export const preferencesSchema = onboardingSchema.pick({
  theme: true,
  features: true,
  marketingConsent: true,
  newsletterSubscription: true,
});

export type PreferencesSchema = z.infer<typeof preferencesSchema>;
