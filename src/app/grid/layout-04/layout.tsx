import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grid Layout",
  description: "Generated by create next app",
};

export default function FlexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <>{children}</>
    </>
  );
}
