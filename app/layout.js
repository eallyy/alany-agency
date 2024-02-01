import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alany Agency",
  description: "Alany Agency - Powerful Ideas, Effective Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    </html>
  );
}
