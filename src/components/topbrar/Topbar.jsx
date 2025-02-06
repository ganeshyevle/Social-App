import "./Topbar.css";
import { Search, Person, Chat, Notifications, Logout, Settings } from "@mui/icons-material";
import { useState } from "react";

export default function Topbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="topbarContainer">
      {/* Left Section */}
      <div className="topbarLeft">
        <span className="logo">SocialFriends</span>
      </div>

      {/* Center Section - Search Bar */}
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
      </div>

      {/* Right Section - Icons & Profile */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>

        {/* Profile Image with Dropdown Menu */}
        <div className="topbarProfile" onClick={() => setShowDropdown(!showDropdown)}>
          <img src="/assets/person/1.jpeg" alt="Profile" className="topbarImg" />
          {showDropdown && (
            <div className="dropdownMenu">
              <span className="dropdownItem">
                <Settings className="dropdownIcon" /> Settings
              </span>
              <span className="dropdownItem">
                <Logout className="dropdownIcon" /> Logout
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
