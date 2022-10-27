import { Footer } from 'flowbite-react';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Home = () => {
    const courses = useLoaderData();

    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    courses.map(course => <SingleCourse course={course}></SingleCourse>)
                }
            </div>
            <div>
                <Footer bgDark={true}>
                    <div className="w-full">
                        <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                            <div>
                                <Footer.Title title="Company" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        About
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Careers
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Brand Center
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Blog
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="help center" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Discord Server
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Twitter
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Facebook
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Contact Us
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Licensing
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="download" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        iOS
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Android
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Windows
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        MacOS
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                        <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
                            <Footer.Copyright
                                href="#"
                                by="Flowbite™"
                                year={2022}
                            />
                            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                                <Footer
                                    href="#"

                                />
                                <Footer
                                    href="#"

                                />
                                <Footer
                                    href="#"

                                />
                                <Footer
                                    href="#"

                                />
                                <Footer
                                    href="#"
                                    icon={<FaFacebook></FaFacebook>}
                                />
                            </div>
                        </div>
                    </div>
                </Footer>
            </div>
        </div>
    );
};

export default Home;