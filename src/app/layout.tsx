import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import { Providers } from "./providers";
import UserStatus from "@/components/UserStatus";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Новостной портал",
    description: "Самые свежие новости",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Providers>
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-between items-center h-16">
                        <Link
                            href="/"
                            className="logo text-xl font-bold hover:text-primary transition-colors"
                        >
                            Новостной портал
                        </Link>
                        <UserStatus />
                    </nav>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="bg-secondary py-6 border-t border-border">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Новостной портал. Все права защищены.
                </div>
            </footer>
        </Providers>
        </body>
        </html>
    );
}