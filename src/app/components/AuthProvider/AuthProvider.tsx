"use client";
import { SessionProvider } from "next-auth/react";
type Props = {
  children: React.ReactNode;
};
export const NextAuthProviderr = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
