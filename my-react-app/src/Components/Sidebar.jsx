import { useState } from "react";
import "./Sidebar.css"; // Import your CSS file for styling

export default function Sidebar() {
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const closeSidebar = () => {
        setSidebarActive(false);
    };

    return (
        <div className="sidebarbg">
            <div className="menu-btn" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </div>
            <div className={`side-bar ${sidebarActive ? 'active' : ''}`}>
                <div className="close-btn" onClick={closeSidebar}>
                    <i className="fas fa-times"></i>
                </div>
                <div className="menu">
                    <div className="item"> <a href="#"> <i className="fas fa-desktop"></i> Dashboard</a> </div>
                    <div className="item"> 
                        <a className="sub-btn"> <i className="fas fa-table"></i> Table<i className="fas fa-angle-right dropdown"></i></a>
                        <div className="sub-menu">
                            <a href="#" className="sub-item">sub item 1</a>
                            <a href="#" className="sub-item">sub item 2</a>
                            <a href="#" className="sub-item">sub item 3</a>
                        </div>
                    </div>
                    <div className="item"> <a href="#"> <i className="fas fa-th"></i> Forms  </a> </div>
                    <div className="item">
                        <a className="sub-btn"> <i className="fas fa-cogs"></i> Settings<i className="fas fa-angle-right dropdown"></i></a>
                        <div className="sub-menu">
                            <a href="#" className="sub-item">sub item 1</a>
                            <a href="#" className="sub-item">sub item 2</a>
                        </div>
                    </div>
                    <div className="item"> <a href="#"> <i className="fas fa-info-circle"></i> About</a> </div>
                </div>
            </div>
        </div>
    );
}
