import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card className="h-[240px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Total Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-7 w-44" />
        <Skeleton className="mt-1 h-3 w-20" />
        <div className="mt-2 h-[80px]">
          <Skeleton className="size-full" />
        </div>
      </CardContent>
    </Card>
  );
}
