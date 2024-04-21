import { useEffect } from 'react';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import './Contact.css';
import phoneIcon from '../../public/Images/phone.png';
import locationIcon from '../../public/Images/location.png';
import emailIcon from '../../public/Images/email.png';

export default function Contact() {
    useEffect(() => {
        const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if (this.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);

            return () => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            };
        });
    }, []); // Empty dependency array to run this effect only once

    return (
        <div>
            <Header />
            <div className="container">
                <span className="big-circle1"></span>
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">  Let is get in touch </h3>
                        <p className="text">Contact us to learn more about our services and how we can help you.</p>
                        <div className="info">
                            <div className="information">
                                <img src={locationIcon} className="icon" alt="" />
                                <p>95 cherry drive unifze;YS 1538</p>
                            </div>
                            <div className="information">
                                <img src={emailIcon} className="icon" alt="" />
                                <p>chaimakhenafif2003@gmail.com</p>
                            </div>
                            <div className="information">
                                <img src={phoneIcon} className="icon" alt="" />
                                <p>0758648568</p>
                            </div>
                        </div>
                        <div className="social-media">
                            <p>Connect With Us</p>
                            <div className="social-icons">
                                <a href="#">
                                    <i className='bx bxl-facebook'></i>
                                </a>
                                <a href="#">
                                    <i className='bx bxl-instagram'></i>
                                </a>
                                <a href="#">
                                    <i className='bx bxl-twitter'></i>
                                </a>
                                <a href="#">
                                    <i className='bx bxl-linkedin'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>
                        <form action="contact.html">
                            <h3 className="title">Contact Us :</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" />
                                <label htmlFor="">FullName</label>
                                <span>FullName</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" />
                                <label htmlFor="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" />
                                <label htmlFor="">Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input"></textarea>
                                <label htmlFor="">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" className="btnContact" />
                        </form>
                    </div>
                </div>
            </div>    
            <Footer />
        </div>
    );
}           