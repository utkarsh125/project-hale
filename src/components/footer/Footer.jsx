// import { logo } from "../../assets/index"
import { MdOutlineMail } from "react-icons/md";

const listitem = "text-md py-1"
const Footer = () => {
    return (
        <div className="bg-teal-900 text-white bottom-0 font-outfit">
            <div className="mx-auto w-5/6 lg:w-3/4 flex flex-col justify-between p-5 divide-y-0 divide-green-600 divide-solid">
                <div id="contact" className="flex flex-col lg:flex-row my-4 pb-2 justify-between">
                    <h1 className="text-5xl">Hale</h1>
                    <div className="w-1/4 lg:flex justify-evenly sm:hidden">
                        <span>Twitter</span>
                        <span>Linkedin</span>
                        <span>facebook</span>
                    </div>
                </div>
                <div className="w-full max-w-full py-5 flex md:flex-row justify-between sm:flex-col max-md:space-y-5">
                    <div id="about" className="md:w-1/4 items-center lg:items-start flex flex-col">
                        <h3 className="pb-2 my-3 text-2xl font-medium">About Hale</h3>
                        <p className="w-4/5">Hale is a cross-border care USA platform bridging
                            the gap in speciality care by connecting patients around the
                            world from their homes to the top hospitals and specialists
                            in USA.
                        </p>
                    </div>
                    <div id="links" className="md:w-1/6 items-center lg:items-start flex flex-col">
                        <h3 className="pb-2 my-3 text-2xl font-medium">Links</h3>
                        <ul>
                            <li className={listitem}>Home</li>
                            <li className={listitem}>Second Opinion</li>
                            <li className={listitem}>Treatment in USA</li>
                            <li className={listitem}>Clinical Trial</li>
                            <li className={listitem}>About Us</li>
                            <li className={listitem}>Blog</li>
                            <li className={listitem}>Contact Us</li>
                            <li className={listitem}>Medical Intake Form</li>
                        </ul>
                    </div>
                    <div id="contact info" className="w-full lg:w-1/4 items-center lg:items-start flex flex-col md:mx-4">
                        <h3 className="pb-2 my-3 text-2xl font-medium">Contact Info</h3>
                        <div className="pb-4">
                            <p className="pb-1">India Office:</p>
                            <p className="font-light text-sm text-gray-300">Gurugram, Haryana</p>
                        </div>
                        <p className="pt-1 pb-4">Email to us at</p>
                        <button type="button" className="px-6 py-3.5 text-base font-normal text-white inline-flex items-center justify-center bg-white/10 hover:bg-white/25 focus:ring-2 focus:outline-none focus:ring-gray-300 rounded-lg text-center">
                            <MdOutlineMail size={24}/>    
                            <span className="ml-2 ">health@hale.com</span>
                        </button>
                    </div>
                    <div id="legal" className="w-full lg:w-1/6 items-center lg:items-start flex flex-col">
                        <h3 className="pb-2 my-3 text-2xl font-medium">Legal</h3>
                        <ul>
                            <li className={listitem}>Privacy Policy</li>
                            <li className={listitem}>Terms & Conditions</li>
                            <li className={listitem}>License</li>
                            <li className={listitem}>Resources</li>
                            <li className={listitem}>Downloads</li>
                        </ul>
                    </div>
                </div>
                <div className="my-4 pt-7 flex flex-col lg:flex-row justify-start align-middle">
                    <span className="py-2 mx-auto">
                        Copyright Hale 2023 | All Rights Reserved
                    </span>
                    <div className="mx-auto">
                        <span className="px-3">Privacy Policy</span>
                        <span className="px-3">Terms and Conditions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;