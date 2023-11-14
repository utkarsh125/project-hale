// import { logo } from "../../assets/index"

const Footer = () => {
    return (
        <div className="w-5/6 flex flex-col fixed bottom-0 justify-center">
            <div className="w-full flex flex-row">
                <div id="contact" className="flex flex-col">
                    <span>Medicine</span>
                    <span>1429 Somethin Bridge, LA 4281</span>
                    <span>Call: (321) 428 321 3902</span>
                    <div>
                        <span>Twitter</span>
                        <span>Linkedin</span>
                        <span>facebook</span>
                    </div>
                </div>
                <div id="explore" className="flex flex-col">
                    <h3>Explore</h3>
                    <ul>
                        <li>Feature</li>
                        <li>About us</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div id="legal" className="flex flex-col">
                    <h3>Legal</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Services</li>
                        <li>Documentation</li>
                        <li>Help center</li>
                    </ul>
                </div>
                <div id="subscribe" className="flex flex-col">
                    <h3>Subscribe</h3>
                    <p>Subscribe to get the latest news from us</p>
                    <input type="text" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div>
                <span>
                    Copyright 2023 | Medical, All Rights Reserved
                </span>
                <div>
                    <span>Privacy Policy</span>
                    <span>Terms of services</span>
                    <span>Accessibility</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;