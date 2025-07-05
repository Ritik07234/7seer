// src/components/SidebarNavigation.jsx
import React from 'react';
import { FiHome, FiBox, FiUsers, FiTrendingUp, FiBarChart2, FiSettings, FiHelpCircle } from "react-icons/fi";
import './SidebarNavigation.css';

function SidebarNavigation() {
  return (
    <nav className="sidebar-nav">
      <div className="sidebar-logo-square" />
      <div className="sidebar-search">
        <input type="text" placeholder="Search" />
      </div>
      <ul className="sidebar-links">
        <li><FiHome className="sidebar-icon" /> Dashboard</li>
        <li><FiBox className="sidebar-icon" /> Product</li>
        <li><FiUsers className="sidebar-icon" /> Customer</li>
        <li><FiTrendingUp className="sidebar-icon" /> Marketing</li>
        <li><FiBarChart2 className="sidebar-icon" /> Reporting</li>
      </ul>
      <div className="sidebar-bottom">
        <div className="sidebar-settings"><FiSettings className="sidebar-icon" /> Settings</div>
        <div className="sidebar-support"><FiHelpCircle className="sidebar-icon" /> Support <span className="sidebar-online">● Online</span></div>
        <div className="sidebar-usage-card">
          <div>Used space</div>
          <div>Your team has used 80% of your available space. Need more?</div>
          <button className="sidebar-dismiss">Dismiss</button>
          <button className="sidebar-upgrade">Upgrade plan</button>
        </div>
        <div className="sidebar-user-card">
          <div className="sidebar-user-avatar">C</div>
          <div>
            <div>Clara Smith</div>
            <div className="sidebar-user-email">clara@bizclues.com</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SidebarNavigation;
