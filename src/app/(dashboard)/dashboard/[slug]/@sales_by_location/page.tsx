import { delay } from "@/lib/utils";
import { SalesByLocation } from "@/modules/dashboard/components";

export default async function Page() {
  await await delay(2000);

  return <SalesByLocation />;
}
