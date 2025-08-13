"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  MessageSquare,
  Palette,
  Settings,
  Zap,
} from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { themeEnum } from "@/db/schema";
import type {
  OnboardingSchema,
  PreferencesSchema,
} from "@/modules/onboarding/schemas/onboarding-schema";
import { preferencesSchema } from "@/modules/onboarding/schemas/onboarding-schema";

interface Props {
  data?: Partial<OnboardingSchema>;
  onNext: () => void;
  onPrev: () => void;
  onUpdate: (data: Partial<OnboardingSchema>) => void;
}

const themes = [
  {
    value: themeEnum.enumValues["0"],
    label: "Modern",
    description: "Clean and contemporary design",
  },
  {
    value: themeEnum.enumValues["1"],
    label: "Classic",
    description: "Timeless and elegant",
  },
  {
    value: themeEnum.enumValues["2"],
    label: "Minimal",
    description: "Simple and focused",
  },
  {
    value: themeEnum.enumValues["3"],
    label: "Bold",
    description: "Vibrant and eye-catching",
  },
];

const features = [
  {
    id: "analytics",
    label: "Advanced Analytics",
    description: "Detailed insights into your sales and customers",
    icon: BarChart3,
  },
  {
    id: "marketing",
    label: "Marketing Tools",
    description: "Email campaigns and promotional features",
    icon: Zap,
  },
  {
    id: "customization",
    label: "Store Customization",
    description: "Advanced design and layout options",
    icon: Palette,
  },
  {
    id: "support",
    label: "Priority Support",
    description: "Get help when you need it most",
    icon: MessageSquare,
  },
];

export function PreferencesStep({ data, onNext, onPrev, onUpdate }: Props) {
  const form = useForm<PreferencesSchema>({
    mode: "onChange",
    resolver: zodResolver(preferencesSchema),
    defaultValues: {
      theme: data?.theme || undefined,
      features: data?.features || [],
      marketingConsent: data?.marketingConsent || false,
      newsletterSubscription: data?.newsletterSubscription || false,
    },
  });

  function onSubmit(values: PreferencesSchema) {
    onUpdate(values);
    onNext();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Settings className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-bold text-2xl">Customize Your Experience</h2>
        <p className="text-muted-foreground">
          Let's personalize your shop to match your style and needs
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Choose Your Theme
                  <span className="text-destructive">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-56">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a theme for your shop" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {themes.map((theme) => (
                      <SelectItem key={theme.value} value={theme.value}>
                        <div>
                          <div className="font-medium">{theme.label}</div>
                          <div className="text-muted-foreground text-sm">
                            {theme.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can change this later in your shop settings
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="features"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">
                    Select Features
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormDescription>
                    Choose the features you'd like to enable for your shop
                  </FormDescription>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {features.map((feature) => (
                    <FormField
                      key={feature.id}
                      control={form.control}
                      name="features"
                      render={({ field }) => {
                        const Icon = feature.icon;
                        return (
                          <FormItem
                            key={feature.id}
                            className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(feature.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        feature.id,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== feature.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <div className="flex items-center space-x-2">
                                <Icon className="h-4 w-4 text-primary" />
                                <FormLabel className="font-medium">
                                  {feature.label}
                                </FormLabel>
                              </div>
                              <FormDescription>
                                {feature.description}
                              </FormDescription>
                            </div>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="marketingConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Marketing Communications</FormLabel>
                    <FormDescription>
                      Receive tips, best practices, and promotional offers to
                      help grow your business
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newsletterSubscription"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Newsletter Subscription</FormLabel>
                    <FormDescription>
                      Stay updated with platform news, feature updates, and
                      industry insights
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
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
