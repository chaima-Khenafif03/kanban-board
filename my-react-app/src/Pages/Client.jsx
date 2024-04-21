import { Header } from "../Components/Header";
import './Client.css';

 export default function Client() {
    return (
        <bodyClient>
            <div>
            <Header />   
            <div className="wrapper">
                <span className="bg-animate"></span>
                <span className="bg-animate2"></span>
                <div className="form-box login">
                    <h2 className="animation" style={{ "--i": 0, "--j": 21 }}>Login</h2>    
                    <form action="#">
                        <div className="input-box animation" style={{ "--i": 2, "--j": 23 }}>
                            <input type="password" required />
                            <label>ID</label>
                            <i className='bx bx-id-card'></i>
                        </div>
                        <button type="submit" className="btn animation" style={{ "--i": 3, "--j": 24 }}>Login</button>
                        <div className="logreg-link animation" style={{ "--i": 4, "--j": 25 }}>
                            <p>Did you forget your id ? <a href="#" className="register-link">Forgot ID</a> </p>
                        </div>
                    </form>
                </div>
                <div className="info-text login">
                    <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>HELLO Customer!</h2>
                    <p className="animation" style={{ "--i": 1, "--j": 21 }}></p>
                </div>
            </div>
        </div>
        </bodyClient>
        
    
    );
 }    
