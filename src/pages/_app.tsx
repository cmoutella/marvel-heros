import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SearchProvider } from "@/providers/SearchProvider";
import { UIProvider } from "@/providers/UIProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </UIProvider>
  );
}
