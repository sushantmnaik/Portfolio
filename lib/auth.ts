import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import authConfig from "@/auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,

  providers: [
    Credentials({
      name: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      authorize: async (credentials) => {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        if (!email || !password) {
          console.log("Missing email or password");
          return null;
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const passwordHash = process.env.ADMIN_PASSWORD_HASH;

        console.log("Login attempt:", email);
        console.log("Expected admin:", adminEmail);
        console.log("Password hash exists:", !!passwordHash);

        if (!adminEmail || !passwordHash) {
          throw new Error("Admin credentials are not configured");
        }

        if (email.trim().toLowerCase() !== adminEmail.trim().toLowerCase()) {
          console.log("Email does not match");
          return null;
        }

        const valid = await bcrypt.compare(password, passwordHash);

        console.log("Password valid:", valid);

        if (!valid) {
          return null;
        }

        return {
          id: "admin",
          email: adminEmail,
        };
      },
    }),
  ],
});