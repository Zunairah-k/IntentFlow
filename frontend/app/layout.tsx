import "./globals.css";
import { Inter } from "next/font/google";
import { TamboProvider } from "@tambo-ai/react";
import { components } from "@/tambo/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IntentFlow ⚡",
  description: "AI powered product workflow visualizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <TamboProvider
          apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
          components={components}
        >
          {children}
        </TamboProvider>
      </body>
    </html>
  );
}
