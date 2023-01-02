import { useState } from "react";
import { signUpNewUser } from "@/utils/auth";
import { compareString } from "@/utils/app";

export default function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <div>
          sign up
          <form>
            <input type="email" name="email" id="email" placeholder=' Enter Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" id="password" placeholder=' Enter Password'  onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder=' Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)}/>
            <button onClick={(e) => {
              e.preventDefault();
              if(!compareString(password, confirmPassword)) {
                alert('passwords must be the same');
                return;
              }
              signUpNewUser(email, password)
            }}>
              Sign Up
            </button>
          </form>
        </div>
    )
}