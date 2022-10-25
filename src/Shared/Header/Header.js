import { Navbar } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
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
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    {user?.displayName}
                </Navbar.Link>
                <Navbar.Link href="/">
                    {user?.photoURL ?
                        <img style={{ height: '30px', borderRadius: '20px' }} src={user.photoURL} alt="" />
                        :
                        <FaUser></FaUser>
                    }
                </Navbar.Link>
                <Navbar.Link href="/courses">
                    Courses
                </Navbar.Link>
                <Navbar.Link href="/login">
                    Login
                </Navbar.Link>

                <Navbar.Link href="/Registration">
                    Registration
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;