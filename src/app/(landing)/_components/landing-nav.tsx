import { signIn } from "@/auth";
import { Button } from "@/components/ui/button"
import { FaGithub} from 'react-icons/fa'

export const LandingNav = () => {
    return (
        <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
            <div className="flex items-center space-x-4">
                <img src="/logo.svg" alt="logo" className="w-10 h-10" />
                <h1 className="text-xl font-semibold">Expense Tracker</h1>
            </div>
            <div>
                <form action={async ()=>{
                    'use server';
                    await signIn('github')
                }}>
                    <Button id="GithubSignIn">Sign In <FaGithub/></Button>
                </form>
            </div>
    </nav>  
    )
}