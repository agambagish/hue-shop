"use client";

import { useClerk } from "@clerk/nextjs";
import {
  ArrowLeft,
  Building2,
  CheckCircle,
  Loader2,
  Mail,
  Send,
  Settings,
  Store,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { OnboardingSchema } from "@/modules/onboarding/schemas/onboarding-schema";

interface Props {
  data: OnboardingSchema;
  onPrev: () => void;
  onSubmit: () => void;
  disabled: boolean;
}

export function ReviewStep({ data, onPrev, onSubmit, disabled }: Props) {
  const { user } = useClerk();

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-bold text-2xl">Review Your Information</h2>
        <p className="text-muted-foreground">
          Please review your details before submitting your application
        </p>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Store className="h-5 w-5 text-primary" />
              <span>Shop Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="font-medium text-muted-foreground text-sm">
                  Shop Name
                </div>
                <div className="font-medium">{data.name}</div>
              </div>
              <div>
                <div className="font-medium text-muted-foreground text-sm">
                  Category
                </div>
                <Badge variant="secondary">{data.category}</Badge>
              </div>
            </div>
            <div>
              <div className="font-medium text-muted-foreground text-sm">
                Description
              </div>
              <div className="text-sm">{data.description}</div>
            </div>
            {data.website && (
              <div>
                <div className="font-medium text-muted-foreground text-sm">
                  Website
                </div>
                <div className="text-primary text-sm">{data.website}</div>
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Mail className="h-5 w-5 text-primary" />
              <span>Contact Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="font-medium text-muted-foreground text-sm">
                  Email
                </div>
                <div className="font-medium">
                  {user?.primaryEmailAddress?.emailAddress}
                </div>
              </div>
            </div>
            <div>
              <div className="font-medium text-muted-foreground text-sm">
                Address
              </div>
              <div className="text-sm">
                {data.address}
                <br />
                {data.city}, {data.state} {data.zipCode}
                <br />
                {data.country}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Building2 className="h-5 w-5 text-primary" />
              <span>Business Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="font-medium text-muted-foreground text-sm">
                  Business Type
                </div>
                <div className="font-medium">{data.businessType}</div>
              </div>
              <div>
                <div className="font-medium text-muted-foreground text-sm">
                  Years in Business
                </div>
                <div className="font-medium">{data.yearsInBusiness}</div>
              </div>
            </div>
            {(data.taxId || data.businessLicense) && (
              <div className="grid gap-4 md:grid-cols-2">
                {data.taxId && (
                  <div>
                    <div className="font-medium text-muted-foreground text-sm">
                      Tax ID
                    </div>
                    <div className="font-medium">{data.taxId}</div>
                  </div>
                )}
                {data.businessLicense && (
                  <div>
                    <div className="font-medium text-muted-foreground text-sm">
                      Business License
                    </div>
                    <div className="font-medium">{data.businessLicense}</div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Settings className="h-5 w-5 text-primary" />
              <span>Preferences</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="font-medium text-muted-foreground text-sm">
                Theme
              </div>
              <Badge variant="outline" className="capitalize">
                {data.theme}
              </Badge>
            </div>
            <div>
              <div className="font-medium text-muted-foreground text-sm">
                Selected Features
              </div>
              <div className="mt-1 flex flex-wrap gap-2">
                {data.features?.map((feature) => (
                  <Badge
                    key={feature}
                    variant="secondary"
                    className="capitalize"
                  >
                    {feature.replace(/([A-Z])/g, " $1").trim()}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="font-medium text-muted-foreground text-sm">
                  Marketing Communications:
                </div>
                <Badge
                  variant={data.marketingConsent ? "default" : "secondary"}
                >
                  {data.marketingConsent ? "Yes" : "No"}
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <div className="font-medium text-muted-foreground text-sm">
                  Newsletter Subscription:
                </div>
                <Badge
                  variant={
                    data.newsletterSubscription ? "default" : "secondary"
                  }
                >
                  {data.newsletterSubscription ? "Yes" : "No"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Separator />
      <div className="rounded-lg bg-muted/50 p-6">
        <h3 className="mb-2 font-semibold">What happens next?</h3>
        <ul className="space-y-1 text-muted-foreground text-sm">
          <li>• We'll review your application within 24-48 hours</li>
          <li>• You'll receive an email confirmation once approved</li>
          <li>• Your shop will be set up with your chosen preferences</li>
          <li>
            • You can start adding products and customizing your storefront
          </li>
        </ul>
      </div>
      <div className="flex justify-between pt-6">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onPrev}
          className="bg-transparent px-8"
          disabled={disabled}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button
          size="lg"
          onClick={onSubmit}
          className="px-8"
          disabled={disabled}
        >
          {disabled && <Loader2 className="animate-spin" />}
          Submit Application
          {!disabled && <Send className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
