import { signOut } from "@/auth";

export default function DashboardPage() {
    return (
        <div>
            DashboardPage
            <form action={async () => {
                'use server';
                await signOut();
            }}>
                <button>Sign Out</button>
            </form>
        </div>
    )
}