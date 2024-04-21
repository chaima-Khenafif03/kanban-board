import { Header } from "../Components/Header";
import { Link } from'react-router-dom';
import './Home.css'

export  default function Home() {
    return (
        <div>
            <Header/>
            <section className="home">
                <div className="home-content">
                    <h1>Visualize, Organize<span className="animate" style={{ '--i': 4 }}></span></h1>
                    <h1>Optimize Kanban Board -<span className="animate" style={{ '--i': 5 }}></span></h1>
                    <h1>Your Pathway to Productivity!<span className="animate" style={{ '--i': 6 }}></span></h1>
                    <p>A Kanban board is a visual tool for managing your work tasks. It uses columns and cards to 
                        represent different stages of a workflow, providing a clear view of work progress.
                        <span className="animate" style={{ '--i': 7 }}></span></p>
                    <div className="btn-box">
                        <Link to="/Client" className="btn1">Client</Link>
                        <Link to="/Login" className="btn1">Member</Link>
                        <span className="animate" style={{ '--i': 8 }}></span>
                    </div>
                </div>
            </section>
            
    <div className="big-circle"></div>
            <div className="small-circle"></div>
        </div>
    );
}

