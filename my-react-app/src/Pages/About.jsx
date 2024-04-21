import { Header } from "../Components/Header";
import './About.css';
import { Footer } from "../Components/Footer";

export default function About() {
    return (
        <div>
            <Header />
            
            <main>
                <section id="mission">
                    <h2 >Our Mission</h2>
                    <p>Our mission is to provide developers with a comprehensive and user-friendly environment that enhances productivity, collaboration, and innovation.</p>
                </section>
                <section id="features">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Code Editor</li>
                        <li>Version Control</li>
                        <li>Project Management</li>
                        <li>Testing and Deployment</li>
                        <li>Community Support</li>
                    </ul>
                </section>
                <section id="why-choose-us">
                    <h2>Why Choose Our App</h2>
                    <ul>
                        <li>User-Friendly Interface</li>
                        <li>Advanced Tools</li>
                        <li>Continuous Updates</li>
                        <li>Dedicated Support</li>
                    </ul>
                </section>
                <section id="get-started">
                    <h2>Get Started Today</h2>
                    <p>Join thousands of developers who rely on our web development environment app to build amazing web applications. Start your free trial today and experience the difference!</p>
                </section>
            </main>

            <Footer />
            
        </div>
    );
}        