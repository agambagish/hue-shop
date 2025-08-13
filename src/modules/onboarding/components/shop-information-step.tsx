"use client";

import { useCallback, useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Loader2, Store, X } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { categoryEnum } from "@/db/schema";
import { slugify } from "@/lib/utils";
import type {
  OnboardingSchema,
  ShopInformationSchema,
} from "@/modules/onboarding/schemas/onboarding-schema";
import { shopInformationSchema } from "@/modules/onboarding/schemas/onboarding-schema";
import { checkSlugAvailability } from "@/modules/onboarding/server/check-slug-availability";

interface Props {
  data?: Partial<OnboardingSchema>;
  onNext: () => void;
  onUpdate: (data: Partial<OnboardingSchema>) => void;
}

export function ShopInformationStep({ data, onNext, onUpdate }: Props) {
  const [slugStatus, setSlugStatus] = useState<{
    checking: boolean;
    available?: boolean;
    message?: string;
  }>({ checking: false });

  const form = useForm<ShopInformationSchema>({
    mode: "onChange",
    resolver: zodResolver(shopInformationSchema),
    defaultValues: {
      name: data?.name || "",
      slug: data?.slug || "",
      description: data?.description || "",
      category: data?.category || undefined,
      website: data?.website || undefined,
    },
  });

  const debouncedCheckSlug = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (slug: string) => {
        clearTimeout(timeoutId);
        if (!slug || slug.length < 3) {
          setSlugStatus({ checking: false });
          return;
        }

        setSlugStatus({ checking: true });
        timeoutId = setTimeout(async () => {
          try {
            const result = await checkSlugAvailability(slug);
            setSlugStatus({
              checking: false,
              available: result.available,
              message: result.message,
            });
          } catch {
            setSlugStatus({
              checking: false,
              available: false,
              message: "Error checking availability",
            });
          }
        }, 800);
      };
    })(),
    [],
  );

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "name" && value.name) {
        const newSlug = slugify(value.name);
        form.setValue("slug", newSlug);
        debouncedCheckSlug(newSlug);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, debouncedCheckSlug]);

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "slug" && value.slug) {
        debouncedCheckSlug(value.slug);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, debouncedCheckSlug]);

  function onSubmit(values: ShopInformationSchema) {
    onUpdate(values);
    onNext();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Store className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-bold text-2xl">Tell us about your shop</h2>
        <p className="text-muted-foreground">
          Help us understand your business so we can provide the best experience
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Shop Name
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your shop name"
                    autoFocus
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This will be displayed to customers on your storefront
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Shop URL
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="flex">
                    <span className="inline-flex w-[10.5rem] items-center rounded-l-md border border-input border-r-0 bg-muted px-3 text-muted-foreground text-sm">
                      hue-shop.vercel.app/
                    </span>
                    <Input
                      placeholder="my-shop"
                      className="rounded-r-none rounded-l-none border-r-0"
                      {...field}
                      onChange={(e) => {
                        const value = slugify(e.target.value);
                        field.onChange(value);
                      }}
                    />
                    <div className="inline-flex items-center rounded-r-md border border-input border-l-0 bg-background px-3">
                      {slugStatus.checking && (
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      )}
                      {!slugStatus.checking &&
                        slugStatus.available === true && (
                          <Check className="h-4 w-4 text-green-600" />
                        )}
                      {!slugStatus.checking &&
                        slugStatus.available === false && (
                          <X className="h-4 w-4 text-red-600" />
                        )}
                    </div>
                  </div>
                </FormControl>
                <FormDescription>
                  {slugStatus.message && (
                    <span
                      className={
                        slugStatus.available ? "text-green-600" : "text-red-600"
                      }
                    >
                      {slugStatus.message}
                    </span>
                  )}
                  {!slugStatus.message &&
                    "Your unique shop URL - customers will visit \'hue-shop.vercel.app/your-shop\'"}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Shop Description
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your shop and what makes it unique..."
                    className="min-h-[100px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  A compelling description helps customers understand your brand
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Primary Category
                  <span className="text-destructive">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-56">
                    <SelectTrigger className="capitalize">
                      <SelectValue placeholder="Select your main category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="capitalize">
                    {categoryEnum.enumValues.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose the category that best represents your products
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Website
                  <span className="text-muted-foreground text-sm">
                    (Optional)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://yourwebsite.com"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormDescription>
                  Link to your existing website or social media
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end pt-6">
            <Button
              type="submit"
              size="lg"
              className="px-8"
              disabled={!slugStatus.available || !form.formState.isValid}
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
