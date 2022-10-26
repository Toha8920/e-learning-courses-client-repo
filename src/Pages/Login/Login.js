import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Login.css'

const Login = () => {
    const [error, setError] = useState('')
    const [githubUser, setGithubUser] = useState(null);
    const { providerLogin, signIn, githubSignIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setGithubUser(githubUser)
                console.log(user);

            })
            .catch(error => console.error(error));
    }

    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setGithubUser(githubUser)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className=''>
            <form onSubmit={handleLogin} className="flex flex-col gap-4  login-form">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        name='email'
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        name='password'
                        id="password1"
                        type="password"
                        required={true}
                    />
                </div>

                <Button type="submit" className='btn-submit'>
                    Login
                </Button>
                <p className='text-yellow-500'>
                    {error}

                </p>
            </form>
            <div className='flex justify-center'>
                <div className=' mt-3 '>
                    <button onClick={handleGoogleSignIn} type="button" className="flex justify-center items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><FaGoogle className='mr-2'></FaGoogle>Login with google</button>
                </div>
                <div className=' mt-3'>
                    <button onClick={handleGithubSignIn} type="button" className="flex justify-center items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><FaGithub className='mr-2'></FaGithub>Login with Github</button>
                </div>
            </div>
            <p className=' text-center'>Do not have an account Please <Link className='underline text-blue-700' to='/register'>Register</Link></p>
        </div>

    );
};

export default Login;