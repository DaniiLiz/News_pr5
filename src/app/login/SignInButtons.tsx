// app/login/SignInButtons.tsx
'use client';

import { signIn } from "next-auth/react";
import type { ClientSafeProvider } from "next-auth/react";

interface SignInButtonsProps {
    providers: Record<string, ClientSafeProvider>;
}

export default function SignInButtons({ providers }: SignInButtonsProps) {
    return (
        <div className="auth-providers">
            {Object.values(providers).map((provider) => (
                <button
                    key={provider.id}
                    onClick={() => signIn(provider.id)}
                    className={`provider-button provider-${provider.id}`}
                >
                    Войти через {provider.name}
                </button>
            ))}
        </div>
    );
}