import { signInWithEmail } from "@/utils/auth";
import { useState } from "react";

export default function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <p>Sign In</p>
            <form>
                <input type="email" name="email" id="email" placeholder="example@example.com" onChange={e => setEmail(e.target.value)}/>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={(e) => {
                    e.preventDefault();
                    if(email == '' || password == "") {
                        alert('must complete form');
                        return;
                    }
                    signInWithEmail(email, password)
                }}>Sign In</button>
            </form>
        </div>
    )
}