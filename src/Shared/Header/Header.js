import { Navbar } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))

    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
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
        </Navbar>
    );
};

export default Header;


//  data-tip="hello world"