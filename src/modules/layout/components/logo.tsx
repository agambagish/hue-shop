import Link from "next/link";

import { FerrisWheel } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
        <FerrisWheel className="size-5 text-white" />
      </div>
      <span className="font-extrabold text-xl">Hue Shop</span>
    </Link>
  );
}
