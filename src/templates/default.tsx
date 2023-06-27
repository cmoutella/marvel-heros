import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

const DefaultTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <main className={`min-h-screen bg-dark ${inter.className}`}>
      <Navbar />
      <div className="w-full flex flex-col items-center pt-[80px] px-24 pb-24">
        {children}
      </div>
    </main>
  );
};

export default DefaultTemplate;
