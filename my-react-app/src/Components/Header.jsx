import { Link } from'react-router-dom';
import './Header.css';

export function Header() {
    return (
        <div>
            <header className="header">
                <a  className="logo"> <i>Plumo Pixel</i></a>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Pricing">Pricing</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/Contact">Contact</Link>
                   
                </nav>
            </header>
        </div>
    );
}