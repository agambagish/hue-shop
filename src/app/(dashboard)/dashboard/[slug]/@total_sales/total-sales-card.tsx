"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { sales: 120 },
  { sales: 150 },
  { sales: 90 },
  { sales: 110 },
  { sales: 85 },
  { sales: 130 },
  { sales: 145 },
  { sales: 200 },
];

export function TotalSalesCard() {
  return (
    <Card className="h-[240px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Total Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="font-bold text-2xl">1030</div>
        <p className="mt-1 text-muted-foreground text-xs">
          <span className="text-green-600">+37.93%</span> from last month
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
                dataKey="sales"
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
