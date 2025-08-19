import { delay } from "@/lib/utils";

import { TotalSalesCard } from "./total-sales-card";

export default async function Page() {
  await await delay(1000);

  return <TotalSalesCard />;
}
