import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="font-semibold text-lg">
            <Skeleton className="h-5 w-40" />
          </CardTitle>
          <Skeleton className="mt-2 h-4 w-48" />
        </div>
        <Button variant="outline" size="sm" disabled className="gap-2">
          <Skeleton className="h-4 w-20" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-5">
        {[...Array(6)].map((_, i) => (
          <div key={i.toString()} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-5 w-14 rounded-md" />
              </div>
              <Skeleton className="h-4 w-10" />
            </div>
            <Skeleton className="h-2 w-full rounded-full" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
