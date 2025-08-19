"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { customers: 45 },
  { customers: 60 },
  { customers: 38 },
  { customers: 50 },
  { customers: 42 },
  { customers: 55 },
  { customers: 58 },
  { customers: 75 },
];

export function CustomersCard() {
  return (
    <Card className="h-[240px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="font-bold text-2xl">423</div>
        <p className="mt-1 text-muted-foreground text-xs">
          <span className="text-green-600">+29.31%</span> from last month
        </p>
        <div className="mt-2 h-[80px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="customers"
                activeDot={{
                  r: 6,
                  style: { fill: "var(--theme-primary)", opacity: 0.25 },
                }}
                style={
                  {
                    stroke: "var(--theme-primary)",
                    "--theme-primary": "var(--chart-1)",
                  } as React.CSSProperties
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
