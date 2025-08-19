import { delay } from "@/lib/utils";

import { CustomersCard } from "./customers-card";

export default async function Page() {
  await await delay(3000);

  return <CustomersCard />;
}
