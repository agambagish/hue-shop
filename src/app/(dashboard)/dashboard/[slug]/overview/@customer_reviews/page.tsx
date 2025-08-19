import { delay } from "@/lib/utils";

import { CustomerReviews } from "./customer-reviews";

export default async function Page() {
  await await delay(2000);

  return <CustomerReviews />;
}
