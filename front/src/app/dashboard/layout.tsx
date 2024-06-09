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
      <div className="w-full flex flex-row items-center justify-end p-4 bg-gray-800 text-white sm:flex-col sm:items-center sm:gap-2">
        <div className="flex flex-row items-center gap-4 sm:flex-col sm:gap-2">
          <Link href="/dashboard/orders" className="hover:text-red-400">
            Compras anteriores
          </Link>
          <Link href="/cart" className="hover:text-red-400">
            Carrito
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="rounded-lg shadow-lg p-6 max-w-4xl mx-auto bg-white text-center">
          {children}
        </div>
      </div>
    </>
  );
}
