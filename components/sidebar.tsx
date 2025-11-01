"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ArrowLeftRight, DollarSign, User, LogIn, UserPlus,ChartNoAxesColumn,MessageCircle } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  section?: "pages" | "account";
};

export default function Sidebar() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Dashboard", href: "/routes/dashboard", icon: <Home className="w-5 h-5" />, section: "pages" },
    { name: "Tables", href: "/routes/table", icon: <ChartNoAxesColumn className="w-5 h-5" />, section: "pages" },
    { name: "Billing", href: "#", icon: <DollarSign className="w-5 h-5" />, section: "pages" },
    { name: "Profile", href: "#", icon: <User className="w-5 h-5" />, section: "account" },
    { name: "Sign In", href: "/routes/login", icon: <LogIn className="w-5 h-5" />, section: "account" },
    { name: "Sign Up", href: "/routes/register", icon: <UserPlus className="w-5 h-5" />, section: "account" },
  ];

  const pageItems = navItems.filter((item) => item.section === "pages");
  const accountItems = navItems.filter((item) => item.section === "account");

  return (
    <aside className="fix w-64 bg-white border-r border-gray-200 min-h-screen p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-10">
        <Link href="#" className="flex items-center space-x-2">
          
          <span className="text-xl font-bold text-gray-800">DEXCHANGE SAAS</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-8">
        {/* Pages Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Pages
          </h3>
          <ul className="space-y-1">
            {pageItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-teal-50 text-teal-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className={isActive ? "text-teal-600" : "text-gray-400"}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Account Pages Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Account Pages
          </h3>
          <ul className="space-y-1">
            {accountItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-teal-50 text-teal-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className={isActive ? "text-teal-600" : "text-gray-400"}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Documentation Card */}
      <div className="mt-auto">
        <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl p-5 text-white">
          <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-3">
            <MessageCircle className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-base mb-1">Need help?</h4>
          <p className="text-sm text-white/90 mb-4">Please check our docs</p>
          <button className="w-full bg-white text-teal-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition text-sm">
            Documentation
          </button>
        </div>
      </div>
    </aside>
  );
}