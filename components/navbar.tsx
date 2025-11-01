"use client";

import { usePathname } from "next/navigation";
import { Search, Bell, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  const getPageName = () => {
    const path = pathname.split("/").filter(Boolean).pop() || "dashboard";
    
    const pageNames: { [key: string]: string } = {
      dashboard: "Dashboard",
      table: "Tables",
      tables: "Tables",
      billing: "Billing",
      profile: "Profile",
      signin: "Sign In",
      signup: "Sign Up",
      transactions: "Transactions",
    };

    return pageNames[path.toLowerCase()] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-8 py-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-400 dark:text-gray-500">Pages</span>
          <span className="text-gray-400 dark:text-gray-500">/</span>
          <span className="text-gray-900 dark:text-white font-medium">{getPageName()}</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Type here..."
              className="pl-10 pr-4 py-2 w-64 border-gray-200 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Sign In Button */}
          <Button variant="ghost" className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </Button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}