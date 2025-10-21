import { useState } from "react";
import { Button } from "./ui/button";
import { UserMenu } from "./UserMenu";
import { AppsMenu } from "./AppsMenu";
import Logo from "../assets/mainstack-logo.svg";
import Home from "../assets/Home.svg";
import Analytics from "../assets/Analytics.svg";
import Revenue from "../assets/Revenue.svg";
import CRM from "../assets/CRM.svg";
import notification from "../assets/notifications.svg";
import comment from "../assets/comment.svg";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("revenue");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border py-3 px-4 sm:px-6 w-[95%] md:w-[90%] rounded-full fixed top-2 left-1/2 transform -translate-x-1/2 shadow-md z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Mainstack Logo" className="w-10 md:w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {[
            { key: "home", label: "Home", icon: Home },
            { key: "analytics", label: "Analytics", icon: Analytics },
            { key: "revenue", label: "Revenue", icon: Revenue },
            { key: "crm", label: "CRM", icon: CRM },
          ].map(({ key, label, icon }) => (
            <Button
              key={key}
              variant={activeTab === key ? (key === "revenue" ? "default" : "outline") : "ghost"}
              size="sm"
              className={`flex items-center gap-1 ${
                activeTab === key && key !== "revenue" ? "bg-muted" : ""
              }`}
              onClick={() => setActiveTab(key)}
            >
              <img src={icon} alt={label} className="w-4 h-4" />
              <p
                className={`text-[15px] pt-1 font-semibold ${
                  activeTab === key && key === "revenue"
                    ? "text-white"
                    : "text-[#56616B]"
                }`}
              >
                {label}
              </p>
            </Button>
          ))}
          <AppsMenu />
        </nav>

        {/* Right section */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <img src={notification} alt="notification" className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <img src={comment} alt="comment" className="w-9 h-9" />
          </Button>
          <UserMenu />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-3 flex flex-col gap-2 md:hidden bg-white shadow-lg rounded-2xl p-4">
          {[
            { key: "home", label: "Home", icon: Home },
            { key: "analytics", label: "Analytics", icon: Analytics },
            { key: "revenue", label: "Revenue", icon: Revenue },
            { key: "crm", label: "CRM", icon: CRM },
          ].map(({ key, label, icon }) => (
            <Button
              key={key}
              variant={activeTab === key ? "default" : "ghost"}
              size="sm"
              className="flex items-center justify-start gap-2"
              onClick={() => {
                setActiveTab(key);
                setMenuOpen(false);
              }}
            >
              <img src={icon} alt={label} className="w-4 h-4" />
              <span
                className={`font-medium ${
                  activeTab === key ? "text-white" : "text-[#56616B]"
                }`}
              >
                {label}
              </span>
            </Button>
          ))}

          <div className="flex justify-between items-center pt-3 border-t border-gray-200">
            <Button variant="ghost" size="icon">
              <img src={notification} alt="notification" className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <img src={comment} alt="comment" className="w-8 h-8" />
            </Button>
            <UserMenu />
          </div>
        </div>
      )}
    </header>
  );
};
