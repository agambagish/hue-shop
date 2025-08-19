import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card className="h-[500px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="font-semibold text-lg">
            <Skeleton className="h-5 w-40" />
          </CardTitle>
          <Skeleton className="mt-2 h-4 w-60" />
        </div>
        <Button variant="ghost" size="sm" disabled>
          <Skeleton className="h-4 w-16" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-8 p-6 md:grid-cols-2">
          <div className="space-y-4 text-center">
            <Skeleton className="mx-auto h-10 w-16" />
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i.toString()} className="h-5 w-5 rounded-full" />
              ))}
            </div>
            <Skeleton className="mx-auto h-4 w-40" />
          </div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i.toString()} className="flex items-center space-x-3">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-3 flex-1" />
                <Skeleton className="h-4 w-6" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 border-t pt-4">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i.toString()} className="h-4 w-4 rounded-full" />
              ))}
            </div>
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-5 w-64" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
