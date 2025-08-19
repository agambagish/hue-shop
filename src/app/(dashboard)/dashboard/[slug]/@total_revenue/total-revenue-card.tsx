"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    revenue: 10400,
  },
  {
    revenue: 14405,
  },
  {
    revenue: 9400,
  },
  {
    revenue: 8200,
  },
  {
    revenue: 7000,
  },
  {
    revenue: 9600,
  },
  {
    revenue: 11244,
  },
  {
    revenue: 26475,
  },
];

export function TotalRevenueCard() {
  return (
    <Card className="h-[240px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="font-bold text-2xl">$15,231.89</div>
        <p className="mt-1 text-muted-foreground text-xs">
          <span className="text-green-600">+20.1%</span> from last month
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
                dataKey="revenue"
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
