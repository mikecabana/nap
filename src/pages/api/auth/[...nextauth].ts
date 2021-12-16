import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import EmailProvider from 'next-auth/providers/email';
// import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        EmailProvider({
            from: process.env.EMAIL_FROM,
            server: {
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            }
        })
        // GoogleProvider({
        //     clientId: `${process.env.GOOGLE_CLIENT_ID}`,
        //     clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`
        // })
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET
});
