import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                alert('Please verify your email address.')

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4  login-form">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Full Name"
                        />
                    </div>
                    <TextInput
                        name='name'
                        id="email1"
                        type="text"
                        placeholder="full name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        name='photoURL'
                        id="email1"
                        type="text"
                        placeholder="photo url"
                        required={true}
                    />
                </div>
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
                        placeholder="your email"
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
                    Register
                </Button>
                <p className='text-yellow-500'>
                    {error}

                </p>
            </form>
            <p className='text-center'>Already have an account <Link className='text-blue-700 underline' to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;