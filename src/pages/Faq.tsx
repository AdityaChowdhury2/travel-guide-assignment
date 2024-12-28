import Navbar from "../components/Navbar";
import Telegram from "../assets/images/telegram.png";
import WhatsApp from "../assets/images/whatsapp.png";
import LiveChat from "../assets/images/live-chat.png";
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import LinkedIn from "../assets/images/linkedin.png";
import FaqImage from "../assets/images/faq.png";
import TravelGuideImage from "../assets/images/travel-guide.png";
import ChatImage from "../assets/images/chat.png";
import SocialImage from "../assets/images/social.png";
import SendQueryImage from "../assets/images/send-query.png";

import Image from "../Image";

const Faq: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Content Section */}
      <div className="bg-[url('/src/assets/images/bg-image.png')] bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px] lg:h-[500px] z-10 flex flex-col justify-center text-center">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
          Hello, how can we help you?
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mt-2">
          Find Travel guide, Faq, chat with us
        </p>
      </div>

      <div className="container mx-auto h-screen px-4 md:px-8">
        {/* FAQ and Travel Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full  mt-[6rem]">
          <div className="p-4 bg-white rounded-lg shadow cursor-pointer">
            <div className="flex justify-start items-center">
              <Image src={FaqImage} className="w-[50px] h-[50px]" alt="FAQ" />
              <div className="flex flex-col ml-5">
                <span>FAQ</span>
                <p className="mt-4">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow cursor-pointer">
            <div className="flex justify-start items-center">
              <Image
                src={TravelGuideImage}
                className="w-[45px] h-[50px]"
                alt="Travel Guide"
              />
              <div className="flex flex-col ml-5">
                <span>Travel Guide</span>
                <p className="mt-4">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-white rounded-lg shadow py-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex items-center gap-8">
              <Image src={ChatImage} className="w-[40px] h-[40px]" alt="Chat" />
              <div className="flex flex-col mr-auto">
                <span>Chat</span>
                <span className="text-sm font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <div className="collapse-content">
              <div className="mt-4 flex space-x-4 justify-center gap-4">
                <a href="#">
                  <Image src={Telegram} alt="Telegram" />
                </a>
                <a href="#">
                  <Image src={WhatsApp} alt="WhatsApp" />
                </a>
                <a href="#">
                  <Image src={LiveChat} alt="Live Chat" />
                </a>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white rounded-lg shadow py-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex items-center gap-8">
              <Image
                src={SocialImage}
                className="w-[40px] h-[40px]"
                alt="Social"
              />
              <div className="flex flex-col mr-auto">
                <span>Social</span>
                <span className="text-sm font-normal">
                  Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
            <div className="collapse-content">
              <div className="mt-4 flex space-x-4 justify-center gap-4">
                <a href="#">
                  <Image src={Facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <Image src={Instagram} alt="Instagram" />
                </a>
                <a href="#">
                  <Image src={Twitter} alt="Twitter" />
                </a>
                <a href="#">
                  <Image src={LinkedIn} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white rounded-lg shadow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex items-center gap-8">
              <Image
                src={SendQueryImage}
                className="w-[40px] h-[40px]"
                alt="Send Query"
              />
              <div className="flex flex-col mr-auto">
                <span>Send Query</span>
                <span className="text-sm font-normal">
                  Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
            <div className="collapse-content">
              <form className="mt-4 flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full max-w-[600px]">
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-700">Name</label>
                    <input
                      className="p-2 border rounded bg-[#F7F7F7]"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-700">Email</label>
                    <input
                      className="p-2 border rounded bg-[#F7F7F7]"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full max-w-[600px]">
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-700">
                      Subject
                    </label>
                    <input
                      className="p-2 border rounded bg-[#F7F7F7]"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-700">
                      Order no.
                    </label>
                    <input
                      className="p-2 border rounded bg-[#F7F7F7]"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full max-w-[600px]">
                  <label className="mb-1 text-sm text-gray-700">
                    Your Query
                  </label>
                  <textarea
                    className="p-2 border rounded bg-[#F7F7F7] w-full"
                    rows={4}
                  ></textarea>
                </div>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
