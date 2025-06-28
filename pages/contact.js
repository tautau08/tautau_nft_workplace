import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Banner } from '../components';
import images from '../assets';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full flex justify-start items-center flex-col sm:min-h-screen">
      <div className="w-full flexCenter flex-col">
        <Banner
          name="Contact CrypTau"
          childStyle="text-center mb-4"
          parentStyles="h-80 justify-center"
        />
      </div>

      <div className="sm:px-4 p-10 w-full minmd:w-4/5 flexCenter flex-col">
        <div className="w-full flex flex-col max-w-4xl">

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="font-poppins dark:text-white text-nft-black-1 text-lg leading-8">
              Have questions about CrypTau? Need help with your NFT transactions? We're here to help!
              Reach out to us through our contact information below.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">

              <div className="flex items-start space-x-4">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:tauhid062018@gmail.com"
                    className="font-poppins dark:text-white text-nft-black-1 text-base "
                  >
                    tauhid062018@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+8801301802206"
                    className="font-poppins dark:text-white text-nft-black-1 text-base "
                  >
                    +880 1301 802 206
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-2">Address</h3>
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base">
                    Block-E, Banasree, Rampura<br />
                    Dhaka-1219, Bangladesh
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Social Media */}
          <div className="">
            <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Follow Us</h2>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/tauhidur_rahman_tauhid?igsh=MTE0NDIzNmdqdWw0Mw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={images.instagram}
                  objectFit="contain"
                  width={30}
                  height={30}
                  alt="Instagram"
                  className={theme === 'light' ? 'filter invert' : undefined}
                />
              </a>
              <a
                href="https://x.com/TauhidRahm64498"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={images.twitter}
                  objectFit="contain"
                  width={30}
                  height={30}
                  alt="Twitter/X"
                  className={theme === 'light' ? 'filter invert' : undefined}
                />
              </a>
              <a
                href="https://t.me/tautau08"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={images.telegram}
                  objectFit="contain"
                  width={30}
                  height={30}
                  alt="Telegram"
                  className={theme === 'light' ? 'filter invert' : undefined}
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
