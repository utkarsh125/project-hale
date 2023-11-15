// import { logo } from "../../assets/index"

const Footer = () => {
    return (
        <div className="bg-teal-900 text-white bottom-0 font-outfit">
            <div className="mx-auto w-5/6 flex flex-col justify-between p-5">
                <div id="contact" className="flex flex-row my-3 p-3 justify-between">
                    <h1 className="text-4xl">Omnicure</h1>
                    <div className="flex justify-evenly">
                        <span>Twitter</span>
                        <span>Linkedin</span>
                        <span>facebook</span>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                    <div id="about" className="w-1/4 flex flex-col">
                        <h3 className="pb-2 my-3 text-2xl">About Omnicure</h3>
                        <p>Omnicure is a cross-border care USA platform bridging
                            the gap in speciality care by connecting patients around the
                            world from their homes to the top hospitals and specialists
                            in USA.
                        </p>
                    </div>
                    <div id="links" className="w-1/6 flex flex-col">
                        <h3 className="pb-2 my-3 text-2xl">Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Second Opinion</li>
                            <li>Treatment in USA</li>
                            <li>Clinical Trial</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Medical Intake Form</li>
                        </ul>
                    </div>
                    <div id="contact info" className="w-1/4 flex flex-col mx-4">
                        <h3 className="pb-2 my-3 text-2xl">Contact Info</h3>
                        <p>Subscribe to get the latest news from us</p>
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                    <div id="legal" className="w-1/6 flex flex-col">
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
                <div className="m-4 pt-3 flex flex-row justify-start align-middle">
                    <span>
                        Copyright Omnicure 2023 | All Rights Reserved
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