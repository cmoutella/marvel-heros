import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

const ShowTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <main className={`min-h-screen bg-dark ${inter.className}`}>
      <Navbar />
      <div className="w-full">{children}</div>
    </main>
  );
};

export default ShowTemplate;
