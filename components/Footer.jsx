import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

import images from '../assets';
import Button from './Button';

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start item-start ">
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">{heading}</h3>
    {items.map((item, index) => (<p key={index} className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">{item}</p>))}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      setIsLoading(true);

      const templateParams = {
        email,
        to_email: email,
        user_email: email,
        user_name: email.split('@')[0],
        name: email.split('@')[0],
        from_name: 'CrypTau Team',
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      toast.success('🎉 Successfully subscribed! Check your email for confirmation.');
      setEmail('');
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 sm:py-10 px-16 mt-6">
        <div className="flexStart flex-1 flex-col">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg">CrypTau</p>
          </div>
          <div>
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">Get the latest updates</p>
            <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSubscribe()}
                disabled={isLoading}
                className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white py-1 px-4 rounded-md dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none disabled:opacity-50"
              />
              <div className="flex-initial">
                <Button
                  btnName={isLoading ? 'Sending...' : 'Email me'}
                  classStyle="rounded-md"
                  handleClick={handleSubscribe}
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks heading="CrypTau" items={['Explore', 'How it Works', 'Contact Us']} />
          <FooterLinks heading="Support" items={['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy']} />
        </div>
      </div>

      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className=" font-poppins dark:text-white text-nft-black-1 font-semibold text-base ">
            CrypTau, Inc. All Rights Reserved.
          </p>
          <div className="flex flex-row sm:mt-4">
            {[images.instagram, images.twitter, images.telegram, images.discord].map((image, index) => (
              <div className="mx-2 cursor-pointer" key={index}>
                <Image
                  src={image}
                  objectFit="contain"
                  width={24}
                  height={24}
                  alt="social"
                  className={theme === 'light' ? 'filter invert' : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
