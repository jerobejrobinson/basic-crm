import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    firstName: string,
    lastName: string,
    email: string,
    website: string,
    phone: string,
    revenue: string,
    budget: string,
    role: string
}

export default function AddNewProspect(){
    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful} } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)
    
    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true })} placeholder=" Prospect's First Name"/>
            <input {...register("lastName", { required: true })} placeholder=" Prospect's last Name"/>
            <input {...register("email", { required: true })} placeholder=" Prospect's Email"/>
            <input {...register("website")} placeholder=" Prospect's Website Url"/>
            <input {...register("phone", { required: true })} placeholder=" Prospect's Phone Number"/>
            <input {...register("revenue")} placeholder=" Prospect's Revenue"/>
            <input {...register("budget")} placeholder=" Prospect's Budget"/>
            <input {...register("role", { required: true })} placeholder=" Prospect's Role"/>
            <button type="submit">Submit</button>
        </form>
    )
}