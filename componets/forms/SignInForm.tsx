import { signInWithEmail } from "@/utils/auth";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    email: string,
    password: string
}
export default function SignInForm() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful }} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => signInWithEmail(data.email, data.password);

    useEffect(() => {
        reset()
    }, [isSubmitSuccessful])
   
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email", { required: true })} placeholder=" Email" type="email"/>
            <input {...register("email", { required: true })} placeholder=" Password" type="password"/>
            <button type="submit">Sign In</button>
        </form>
    )
}