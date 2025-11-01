"use client";

import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import ListProjet from "../../components/listprojet";
import AuthorList from "../../components/AuthorList";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

 
 

export default function TablesPage() {

    return (
        <div className="flex h-screen   overflow-y overflow-hidden bg-gray-50">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                 <Navbar />

                {/* Contenu scrollable */}
                <main className="flex-1 overflow-y-auto">

                    {/* Tables Content */}
                    <div className="p-8">

                        {/* Authors Table */}
                        
                         <AuthorList/>

                        {/* Projects Table */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm">
                         <ListProjet/>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}