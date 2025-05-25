'use client';

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function UserStatus() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="flex items-center gap-4">
        <span className="text-sm font-medium">
          {session.user?.name}
        </span>
                <button
                    onClick={() => signOut()}
                    className="login-button bg-red-500 hover:bg-red-600"
                >
                    Выйти
                </button>
            </div>
        );
    }

    return (
        <Link
            href="/login"
            className="login-button"
        >
            Войти
        </Link>
    );
}