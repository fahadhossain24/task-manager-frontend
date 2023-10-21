import { useForm } from 'react-hook-form';
import loginImg from '../../../images/login.png'
import UserInput from '../../components/UserInput';
import Button from '../../components/Button';
import { useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState(true);
    const [registration, setRegistration] = useState(false);
    const { handleSubmit, register, formState, reset} = useForm();


    const onSubmit = (data) => {
        console.log(data)

        reset()
    }

    return (
        <div className="h-[100vh] w-[80%] mx-auto flex items-center justify-center">
            <div className='w-[50%] sm:hidden lg:block'>
                <img src={loginImg} alt="" className='w-[100%] mx-auto' />
            </div>
            <div className='w-[40%] bg-blue-200 p-6 rounded-lg mt-8 shadow-xl'>
                <h2
                    className='xl:w-[50%] sm:w-full lg:w-[70%] mx-auto flex justify-evenly text-xl py-1 rounded-full border-2 border-blue-500 font-semibold'
                >
                    <span onClick={() => {setLogin(true); setRegistration(false)}} className={`border-[1px] border-blue-600 px-3 rounded-full hover:bg-blue-400 hover:text-white cursor-pointer ${login ? 'bg-blue-400 text-white' : ''}`}>Login</span>{" "}
                    <span onClick={() => {setLogin(false); setRegistration(true)}} className={`border-[1px] border-blue-600 px-3 rounded-full hover:bg-blue-400 hover:text-white cursor-pointer ${registration ? 'bg-blue-400 text-white' : ''}`}>Sign Up</span>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {registration && <UserInput
                        label="User Name"
                        name="name"
                        inputType="text"
                        // defaultValue={name}
                        required="required"
                        register={register}
                        formState={formState}
                        customInputStyle= 'w-full'
                    />}
                    <UserInput
                        label="User Email"
                        name="email"
                        inputType="email"
                        // defaultValue={name}
                        required="required"
                        register={register}
                        formState={formState}
                        customInputStyle= 'w-full'
                    />
                    <UserInput
                        label="Password"
                        name="password"
                        inputType="password"
                        // defaultValue={name}
                        required="required"
                        register={register}
                        formState={formState}
                        customInputStyle= 'w-full'
                    />
                    {registration && <UserInput
                        label="Confirm Password"
                        name="password"
                        inputType="password"
                        // defaultValue={name}
                        required="required"
                        register={register}
                        formState={formState}
                        customInputStyle= 'w-full'
                    />}
                    <Button buttonText={`${!registration? 'Login' : 'Sign Up'}`} customStyle='px-3 bg-blue-300 w-full mt-3 hover:bg-blue-500' />
                </form>
            </div>
        </div>
    );
};

export default Login;