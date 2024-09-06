import React from 'react';
import './Sidebar.css';
import { FaChurch, FaSchool } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: "/Board ",
            name: "Dashboard",
            icon: <FaChurch />
        },
        {
            path: "/FetchData",
            name: "Student",
            icon: <FaSchool />
        }
    ];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 sidebar">
                    <div className="top_section">
                        <img src="./react.png" alt="logo" className="logo" />
                    </div>
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;
