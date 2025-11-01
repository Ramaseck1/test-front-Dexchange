"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TrendingUp, Users, Zap, MoreVertical } from "lucide-react";
import Image from "next/image";

type Project = {
    id: number;
    name: string;
    team: string[];
    budget: string;
    completion: number;
    logo?: string;
};

 

export default function Navbar() {
  const pathname = usePathname();

   
 const projects: Project[] = [
        {
            id: 1,
            name: "Chakra Soft UI Version",
            team: ["👤", "👤", "👤", "👤"],
            budget: "$14,000",
            completion: 60,
             logo: "/xd.png", // Image dans public/logos/

        },
        {
            id: 2,
            name: "Add Progress Track",
            team: ["👤", "👤"],
            budget: "$3,000",
            completion: 10,
 
        },
        {
            id: 3,
            name: "Fix Platform Errors",
            team: ["👤", "👤"],
            budget: "Not set",
            completion: 100,
             logo: "/slack.png", // Image dans public/logos/

        },
        {
            id: 4,
            name: "Launch our Mobile App",
            team: ["👤", "👤", "👤", "👤"],
            budget: "$32,000",
            completion: 100,
         },
        {
            id: 5,
            name: "Add the New Pricing Page",
            team: ["👤", "👤", "👤", "👤"],
            budget: "$400",
            completion: 25,
         },
        {
            id: 6,
            name: "Redesign New Online Shop",
            team: ["👤", "👤"],
            budget: "$7,600",
            completion: 40,
            logo: "/in.png", 
        },
    ];

 
  return (
     <div className="xl:col-span-2 space-y-8">
                                <div className="bg-white rounded-3xl p-6 shadow-sm">

                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">Projects</h3>
                                            <h2> 30 done this month
                                            </h2>
                                        </div>

                                        <button className="text-teal-500 text-sm font-medium flex items-center">
                                            <MoreVertical className="mr-1" />
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="text-left text-xs text-gray-500 uppercase">
                                                    <th className="pb-3 font-semibold">Companies</th>
                                                    <th className="pb-3 font-semibold">Members</th>
                                                    <th className="pb-3 font-semibold">Budget</th>
                                                    <th className="pb-3 font-semibold">Completion</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {projects.map((project) => (
                                                    <tr key={project.id} className="border-t border-gray-100">
                                                        <td className="py-4">
                                                            <div className="flex items-center space-x-3">
                                                               <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                          src={project.logo}
                          alt={project.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                                                                <span className="font-medium text-gray-900">{project.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-4">
                                                            <div className="flex -space-x-2">
                                                                {project.team.map((member, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                                                                    >
                                                                        {member}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </td>
                                                        <td className="py-4 text-gray-900 font-medium">{project.budget}</td>
                                                        <td className="py-4">
                                                            <div className="flex items-center space-x-3">
                                                                <span className="text-sm font-medium text-teal-600">{project.completion}%</span>
                                                                <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                                    <div
                                                                        className="h-full bg-teal-500 rounded-full"
                                                                        style={{ width: `${project.completion}%` }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

 
  );
}