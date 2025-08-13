import Link from "next/link";

import { CheckCircle, Home, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function SuccessStep() {
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="font-bold text-3xl text-green-600">
          Application Submitted!
        </h2>
        <p className="mx-auto max-w-md text-lg text-muted-foreground">
          Thank you for joining LUXE! We've received your application and will
          review it shortly.
        </p>
      </div>
      <Card className="mx-auto max-w-md">
        <CardContent className="space-y-4 p-6">
          <h3 className="font-semibold">What's Next?</h3>
          <div className="space-y-3 text-left text-sm">
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="font-medium text-primary text-xs">1</span>
              </div>
              <div>
                <div className="font-medium">Application Review</div>
                <div className="text-muted-foreground">
                  We'll review your application within 24-48 hours
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="font-medium text-primary text-xs">2</span>
              </div>
              <div>
                <div className="font-medium">Email Confirmation</div>
                <div className="text-muted-foreground">
                  You'll receive approval notification via email
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="font-medium text-primary text-xs">3</span>
              </div>
              <div>
                <div className="font-medium">Shop Setup</div>
                <div className="text-muted-foreground">
                  Your shop will be created with your preferences
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Button asChild size="lg" className="px-8">
          <Link href="/">
            <Home className="h-4 w-4" />
            Return Home
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="bg-transparent px-8">
          <Mail className="h-4 w-4" />
          Contact Support
        </Button>
      </div>
      <div className="text-muted-foreground text-sm">
        Application ID:{" "}
        <span className="font-mono">
          #ONB-{Date.now().toString().slice(-6)}
        </span>
      </div>
    </div>
  );
}
