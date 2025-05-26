// app/login/page.tsx
import { getProviders } from "next-auth/react";
import SignInButtons from "./SignInButtons";
import Link from "next/link";

export default async function LoginPage() {
    const providers = await getProviders();

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">Вход в систему</h1>
                {providers && <SignInButtons providers={providers} />}
                <div className="auth-links">
                    <Link href="/">Вернуться на главную</Link>
                </div>
            </div>
        </div>
    );
}