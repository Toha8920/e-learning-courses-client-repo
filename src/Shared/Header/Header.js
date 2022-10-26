import { Navbar } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dark, setDark] = useState(false)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))

    }

    return (
        <Navbar className='bg-red-700'
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://img.freepik.com/premium-vector/e-learning-concept-logo-learning-online-center-graduation-vector-illustration-flat-design-abstract-background-education-logo-template-online-education-internet-teaching-distance-training_153097-834.jpg?w=2000"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className={`font-bold text-inherit ${dark ? 'text-black' : 'text-red-700'}`}>
                    E learning Website
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link
                    to="/"
                    active={true}
                >
                    Home
                </Link>
                <Navbar.Link>
                    {
                        user?.uid ?
                            <>
                                <span>   {user?.displayName}</span>

                                <button className='ml-3' onClick={handleLogOut}>Log Out</button>
                            </>
                            :
                            <div className='flex'>
                                <Link className='mr-3' to="/login">
                                    Login
                                </Link>

                                <Link to="/register">
                                    Registration
                                </Link>
                            </div>
                    }

                </Navbar.Link>
                <Navbar.Link>
                    {user?.photoURL ?
                        <>

                            <img style={{ height: '30px', borderRadius: '20px' }} src={user.photoURL} alt="" title={user.displayName} />

                        </>

                        :
                        <FaUser></FaUser>
                    }
                </Navbar.Link>
                <Link to="/courses">
                    Courses
                </Link>
                <Link to="/blog">
                    Blog
                </Link>

            </Navbar.Collapse>
            <ReactTooltip />
            <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                <input onClick={() => setDark(!dark)} type="checkbox" value="" id="default-toggle" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
            </label>
        </Navbar>
    );
};

export default Header;


//  data-tip="hello world"