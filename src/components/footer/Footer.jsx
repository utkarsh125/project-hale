// import { logo } from "../../assets/index"

const listitem = "text-md py-1"
const Footer = () => {
    return (
        <div className="bg-teal-900 text-white bottom-0 font-outfit">
            <div className="mx-auto md:w-5/6 flex flex-col justify-between p-5">
                <div id="contact" className="flex flex-row my-3  justify-between">
                    <h1 className="text-5xl">Hale</h1>
                    <div className="w-1/4 lg:flex justify-evenly sm:hidden">
                        <span>Twitter</span>
                        <span>Linkedin</span>
                        <span>facebook</span>
                    </div>
                </div>
                <div className="w-full max-w-full flex md:flex-row justify-between sm:flex-col max-md:space-y-5">
                    <div id="about" className="md:w-1/4 flex flex-col">
                        <h3 className="pb-2 my-3 text-2xl">About Hale</h3>
                        <p>Hale is a cross-border care USA platform bridging
                            the gap in speciality care by connecting patients around the
                            world from their homes to the top hospitals and specialists
                            in USA.
                        </p>
                    </div>
                    <div id="links" className="md:w-1/6 flex flex-col">
                        <h3 className="pb-2 my-3 text-2xl">Links</h3>
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
                    <div id="contact info" className="md:w-1/4 flex flex-col md:mx-4">
                        <h3 className="pb-2 my-3 text-2xl">Contact Info</h3>
                        <p>Subscribe to get the latest news from us</p>
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                    <div id="legal" className="md:w-1/6 flex flex-col">
                        <h3 className="pb-2 my-3 text-2xl">Legal</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>License</li>
                            <li>Resources</li>
                            <li>Downloads</li>
                        </ul>
                    </div>
                </div>
                <div className="my-4 pt-3 flex flex-row justify-start align-middle">
                    <span>
                        Copyright Hale 2023 | All Rights Reserved
                    </span>
                    <div>
                        <span>Privacy Policy</span>
                        <span>Terms and Conditions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;