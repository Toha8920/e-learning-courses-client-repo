import React from 'react';

const Faq = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Does my site need to be updated to HTTPS instead of HTTP?</h1>
            <p className='text-2xl'>Yes!

                In 2018, there is no reason – no good excuse – not to upgrade any site to HTTPS by acquiring an SSL certificate. Starting in August 2018, the most popular web browser on the planet, Google Chrome, will give a big red warning to your visitors if your site is not fully secure. Firefox is already doing this, and Microsoft’s Edge and Apple’s Safari are sure to follow. So make sure you get an SSL certificate and keep it up to date. This will protect your content from being covertly altered and prevent your customers’ information from being monitored or stolen.</p>
            <h1 className='text-2xl font-bold mt-4'>What happens if my site breaks?</h1>
            <p className='text-2xl'>We’re always here to help! We can cover emergencies and non-emergencies alike. Just be sure to give us as many details as possible about the problem: the browser you were using when you noticed the problem, your computer’s operating system, time of day, what actions you were performing, what device you were using when you saw the problem, etc.</p>
            <h1 className='text-2xl font-bold mt-4'>What is the difference between my CMS, hosting?</h1>
            <p className='text-2xl'><span className='text-2xl'>CMS:</span> Short for “Content Management System,” this is the platform you use to administrate and edit the content on your website. There are many different software solutions that bear this name. Though we prefer WordPress and are wizards on this platform, we also work with Drupal, Magento, Joomla, Sitecore and any number of others.

                <span className='text-2xl'>Hosting:</span> All websites live on computers somewhere. A hosting service is a company that has computers built especially for storing and accessing websites. These types of computers are often referred to as “web servers.” Hosting companies give clients a username and password so they can access things like billing and contact information, make technology updates, control the websites on the account, and so on. Some common examples of hosting companies are GoDaddy, DreamHost, Amazon Web Services (AWS), and WP Engine.</p>
        </div>
    );
};

export default Faq;