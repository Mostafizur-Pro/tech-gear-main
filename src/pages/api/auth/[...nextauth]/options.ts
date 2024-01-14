import type { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",
    // TODO::  replace this with custom form
      credentials: {
        email: {
          label: "Username:",
          type: "email",
          placeholder: "Enter-your-email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter-your-Password",
        },
      },
      async authorize(credentials) {

        //TODO:: replace users with backend user data
        const users = [
          { id: "12", email: "mdasik0@gmail.com", password: "helloWorld" },
          { id: "02", email: "amazon@gmail.com", password: "00001111" },
        ];
        if (!credentials || !credentials?.email || !credentials?.password) {
          return null;
        }
        const user = users.find(
          (singleUser) => singleUser.email === credentials.email
        );

        if (user?.password === credentials?.password) {
          return user;
        } else return null;
      },
    }),
  ],
};
