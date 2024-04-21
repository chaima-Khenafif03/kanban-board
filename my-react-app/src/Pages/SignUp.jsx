import { Header } from "../Components/Header";
import { Link } from'react-router-dom';
import './SignUp.css';


 export default function Client() {
    return (
        <bodySignUp>
            <div>
            <Header />   
            <div className="wrapper">
                <span className="bg-animate"></span>
                <span className="bg-animate2"></span>
                <div className="form-box login">
                    <h2 className="animation" style={{ "--i": 0, "--j": 21 }}>Sign Up</h2>    
                    <form action="#">
                        <div className="input-box animation" style={{ "--i": 2, "--j": 23 }}>
                            <input type="text" required />
                            <label>User Name</label>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box animation" style={{ "--i": 2, "--j": 24 }}>
                            <input type="email" required />
                            <label>Email</label>
                            <i className='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box animation" style={{ "--i": 2, "--j": 24 }}>
                            <input type="password" required />
                            <label>Password</label>
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <button type="submit" className="btn animation" style={{ "--i": 3, "--j": 24 }}>Sign Up</button>
                        <div className="logreg-link animation" style={{ "--i": 4, "--j": 25 }}>
                            <p>Already have an account ? <Link to="/Login" className="register-link">Login</Link> </p>
                        </div>
                    </form>
                </div>
                <div className="info-text login">
                    <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>HELLO Member!</h2>
                    <p className="animation" style={{ "--i": 1, "--j": 21 }}></p>
                </div>
            </div>
        </div>
        </bodySignUp>
        
    
    );
 }    
