import { delay } from "@/lib/utils";

import { TotalRevenueCard } from "./total-revenue-card";

export default async function Page() {
  await await delay(2000);
  return <TotalRevenueCard />;
}
