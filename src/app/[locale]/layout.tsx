import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "@/assets/scss/globals.css";
import Providers from "@/providers/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jobify",
};

export default async function RootLayout({
       children,
       params: { locale }
   }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages(locale);

    return (
        <NextIntlClientProvider locale={locale}>
            <html lang={locale}>
                <body>
                    <Providers
                        messages={messages}
                        locale={locale}
                    >
                        {children}
                    </Providers>
                </body>
            </html>
        </NextIntlClientProvider>
    );
}
