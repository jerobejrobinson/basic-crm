import { signInWithEmail } from "@/utils/auth";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button'

type Inputs = {
    email: string,
    password: string
}
export default function SignInForm() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful }} = useForm<Inputs>();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit: SubmitHandler<Inputs> = async data => {
        setIsLoading(true);
        try {
            await signInWithEmail(data.email, data.password)
        } catch(error) {
            let message = 'unkown error';
            if(error instanceof Error) message = error.message
            setErrorMessage(message);
        }
    };

    useEffect(() => {
        reset()
    }, [isSubmitSuccessful])
   
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                placeholder=" Email" 
                {...register("email", {required: true, pattern: /^\S+@\S+$/i })} />
            <input {...register("email", { required: true })} placeholder=" Password" type="password"/>
            <button type="submit">Sign In</button>
            <Button >Sign In</Button>
        </form>
    )
}