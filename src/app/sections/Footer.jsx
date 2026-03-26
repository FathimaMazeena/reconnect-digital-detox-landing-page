import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-gradient-to-t from-mossgreen via-lightgreen to-white font-montserrat w-full min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-center text-gray1 w-1/2 headline">
          <span className="text-black">Stay Updated!</span> Don’t miss future
          events like this — join our insider list.
        </h1>
        <div className="relative bg-highlight w-2/3 h-15 max-w-md p-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-full text-end flex items-center justify-end">
          <input
            type="email"
            placeholder="youremail@gmail.com"
            className="absolute top-0 left-3 bg-[#F4FFE9] w-3/4 h-15 p-2 rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] focus:outline-none text-center text-black"
          />
          <span className="text-black font-medium cursor-pointer mr-2">subscribe</span>
        </div>
      </div>

      <div>
        <div className="grid md:grid-cols-2 gap-12 p-8 m-10 place-items-center">
          <div className="flex flex-col gap-8">
            <h3>Hosted by <br/>
            <span className="text-teal text-3xl font-montserrat-2 font-semibold">BloomWell</span></h3>
            <p>
              At BloomWell, we help you nurture mental health, emotional
              balance, and self-growth through meaningful experiences. From
              mindfulness workshops to challenges like Reconnect: A Digital
              Detox, our events help you slow down, breathe, and rediscover
              inner calm — online or in nature.
            </p>

            <div className="flex gap-4 flex-row">
            <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <FaFacebookF className="text-white w-4 h-4" />
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <FaInstagram className="text-white w-4 h-4" />
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <FaLinkedinIn className="text-white w-4 h-4" />
              </div>
            </div>
            
            <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <FaXTwitter className="text-white w-4 h-4" />
              </div>
            </div>
            

          </div>

          </div>
          


        <div className="flex flex-col gap-8">
            <div>
                <h3>Contact Us</h3>
                <p>+1 (604) 555-2184</p>
                <p>hello@bloomwell.org</p>
            </div>
            <div>
                <h3>Locations</h3>
                <p>BloomWell Studio, 28 Willow Street,Greenfield Park, Vancouver, BC, Canada</p>
            </div>
            <div>
                <h3>Quick Links</h3>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
                <p>About Us</p>
                <p>Contact</p>
                <p>Sign Up</p>
                <p>Subscribe</p>
                </div>
               
            </div>
            
            
        
        </div>

        </div>

        <p className="text-center m-6">© 2025 BloomWell. All rights reserved.</p>

       
      </div>
    </div>
  );
}
