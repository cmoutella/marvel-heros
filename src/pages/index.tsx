import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-dark ${inter.className}`}>
      <Navbar />
      <div className="w-full flex flex-col items-center pt-[80px] px-24">
        <h1 className="text-white text-[98px] mb-[48px]">
          Who is your <span className="text-primary">hero</span>?
        </h1>
        <SearchBar />
      </div>
    </main>
  );
}
