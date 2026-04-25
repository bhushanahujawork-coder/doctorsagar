import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nijanand Dental Care & Implant Centre | Best Dentist in Jamnagar",
  description: "Precision Dentistry. Trusted Care. Confident Smiles. Dr. Sagar Bumtaria provides advanced root canal and implant care in Jamnagar with over 30,000 successful treatments.",
  keywords: "dentist in Jamnagar, root canal Jamnagar, dental implants Jamnagar, Dr. Sagar Bumtaria, Nijanand Dental Care",
};

import FloatingActions from "../components/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
