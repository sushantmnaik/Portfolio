import type { NextAuthConfig } from "next-auth";

const authConfig = {
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin/login",
  },

  providers: [],
} satisfies NextAuthConfig;

export default authConfig;