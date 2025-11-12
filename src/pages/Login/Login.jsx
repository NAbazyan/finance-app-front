import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import FormButton from '../../components/FormButton/FormButton';
import Container from '../../components/Container/Container';
import s from "./Login.module.sass";
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';
import React from 'react';
import z from 'zod';
import { useLoginMutation } from '../../features/auth/authApi';
import { setCreadentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const schema = z.object({
  username: z.string().min(5, "Minimum 5 symbols"),
  password: z.string().min(5, "Minimum 8 symbol").max(36, "Maximum 36 symbols"),
})

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, {isLoading, error}] = useLoginMutation()
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
      const res = await login(data).unwrap()
      dispatch(setCreadentials({user: data.username, token: res.access}))
      reset()
      navigate("/overview")
    }
    catch(error) {
      console.log("Login is not found", error);
    }
  }
  return (
    <div className={s.main}>
      <Container>
        <div className={s.wrap}>
          <Logo mode='light' />
          <form className={s.inputs} onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" label='Username' config={{...register("username")}} errors={errors}/>
            <Input type="password" label='Password' config={{...register("password")}} errors={errors}/>
            <div className={s.signed}>
              <input id='login_check' className={s.signed_input} type="checkbox" />
              <label className={s.label} htmlFor='login_check'>Keep me signed in</label>
            </div>
            <FormButton text="Login" />
            <Link to="/signup" className={s.signup}>Create an account</Link>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Login