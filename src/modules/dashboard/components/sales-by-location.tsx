"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const salesData = [
  { country: "Canada", percentage: 85, change: "+5.2%", positive: true },
  { country: "Greenland", percentage: 80, change: "+7.8%", positive: true },
  { country: "Russia", percentage: 63, change: "-2.1%", positive: false },
  { country: "China", percentage: 60, change: "+3.4%", positive: true },
  { country: "Australia", percentage: 45, change: "+1.2%", positive: true },
  { country: "Greece", percentage: 40, change: "+1%", positive: true },
];

export function SalesByLocation() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="font-semibold text-lg">
            Sales by Location
          </CardTitle>
          <p className="mt-1 text-muted-foreground text-sm">
            Income in the last 28 days
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {salesData.map((item, index) => (
          <div key={index.toString()} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <span className="min-w-[80px] font-medium">{item.country}</span>
                <span
                  className={`rounded px-2 py-1 text-xs ${
                    item.positive
                      ? "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400"
                      : "bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400"
                  }`}
                >
                  {item.change}
                </span>
              </div>
              <span className="font-semibold">{item.percentage}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted">
              <div
                className="h-2 rounded-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
