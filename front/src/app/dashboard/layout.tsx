import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full flex flex-row items-center justify-end">
        <div className="flex flex-row items-center gap-4 w-[24.7%]">
          <Link href="/dashboard/orders">Orders</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
      {children}
    </>
  );
}
