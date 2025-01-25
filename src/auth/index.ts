import db from '@/db';
import { accounts, sessions, users, verificationTokens } from '@/db/schema';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  return {
    adapter: DrizzleAdapter(db, {
      usersTable: users,
      accountsTable: accounts,
      sessionsTable: sessions,
      verificationTokensTable: verificationTokens,
    }),
    providers: [
      GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    ],
    session:{
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        jwt: true,

    },
    callbacks: {
        jwt({token, user}){
            if(user){
                token.id = user.id;
            }
            return token;
        }
    },
    debug: process.env.NODE_ENV === 'development',
  };
});
