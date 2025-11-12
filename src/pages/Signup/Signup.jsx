import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormButton from '../../components/FormButton/FormButton';
import Container from '../../components/Container/Container';
import s from "./Signup.module.sass";
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';
import React from 'react';
import z from 'zod';
import { useSignUpMutation } from '../../features/auth/authApi';
import { useNavigate } from 'react-router';

const schema = z.object({
    username: z.string().max(10, "Maximum 10 symbols"),
    email: z.string().min(5, "Minimum 5 symbols").email(),
    password: z.string().min(8, "Minimum 8 symbol").max(36, "Maximum 36 symbols"),
})

const Signup = () => {
    const navigate = useNavigate()
    const [signUp, {isLoading, error}] = useSignUpMutation()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    })
    const onSubmit = async (data) => {
        try {
            await signUp({
                username: data.username,
                email: data.email,
                password: data.password
            }).unwrap()  
            reset() 
            navigate("/login")
        }
        catch(error){
            console.log("Registration failed", error)
        }
    }
    return (
        <div className={s.main}>
            <Container>
                <div className={s.wrap}>
                    <Logo mode='light' />
                    <h2 className={s.title}>Create an account</h2>
                    <form className={s.inputs} onSubmit={handleSubmit(onSubmit)}>
                        <Input type="text" label='Username' config={{ ...register("username") }} errors={errors} />
                        <Input type="email" label='Email Address' config={{ ...register("email") }} errors={errors} />
                        <Input type="password" label='Password' config={{ ...register("password") }} errors={errors} />
                        <span className={s.info}>By continuing, you agree to our <abbr className={s.info1}>terms of service</abbr></span>
                        <FormButton text="Sign Up"/>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Signup