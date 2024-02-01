import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alany Agency",
  description: "Alany Agency - Powerful Ideas, Effective Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    </html>
  );
}
