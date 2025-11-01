"use client";

import Sidebar from "../../components/sidebar";
import Stats from "../../components/stat";
import Navbar from "../../components/navbar";
import ListProjet from "../../components/listprojet";
import { TrendingUp, Users, Zap, MoreVertical } from "lucide-react";


type Order = {
    id: string;
    title: string;
    date: string;
    time: string;
};

export default function Dashboard() {


    const orders: Order[] = [
        { id: "1", title: "$2400, Design changes", date: "22 DEC 7:20 PM", time: "" },
        { id: "2", title: "New order #4219423", date: "21 DEC 11:21 PM", time: "" },
        { id: "3", title: "Server Payments for April", date: "21 DEC 9:28 PM", time: "" },
        { id: "4", title: "New card added for order #3210145", date: "20 DEC 3:52 PM", time: "" },
        { id: "5", title: "Unlock packages for Development", date: "19 DEC 11:35 PM", time: "" },
        { id: "6", title: "New order #9851258", date: "18 DEC 4:41 PM", time: "" },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Sidebar fixe */}
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <Navbar />

                <main className="flex-1 overflow-y-auto">
                    <div className="p-8">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>

                        <Stats />

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8 mt-8">
                            <div className="flex justify-around bg-white rounded-3xl h-48 p-6">
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
                                        <p className="text-black text-sm mb-3">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit
                                        </p>
                                    </div>
                                    <button className="text-sm font-medium text-left">Read more →</button>
                                </div>
                                <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-3xl w-80 relative text-white">
                                    <div className="flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Zap className="bg-white border-b rounded-2xl  text-gray-300" />
                                        <h2 className="font-bold text-2xl">chakra</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 rounded-3xl overflow-hidden relative h-48">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
                                    <p className="text-white/80 text-sm mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit
                                    </p>
                                    <button className="text-sm font-medium">Read more →</button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                            <ListProjet />

                            <div className="space-y-6">
                                <div className="bg-white rounded-3xl p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-6">Orders overview</h3>
                                    <p className="text-green-500 text-sm font-medium mb-6 flex items-center">
                                        <TrendingUp className="w-4 h-4 mr-1" />
                                        <span className="font-bold">+30%</span>
                                        <span className="text-gray-500 ml-1">this month</span>
                                    </p>
                                    <div className="space-y-6">
                                        {orders.map((order, index) => (
                                            <div key={order.id} className="flex items-start space-x-4">
                                                <div className="relative">
                                                    <div className={`w-2 h-2 rounded-full ${index === 0 ? "bg-green-500" :
                                                        index === 1 ? "bg-red-500" :
                                                            index === 2 ? "bg-blue-500" : "bg-purple-500"
                                                        }`}></div>
                                                    {index < orders.length - 1 && (
                                                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-gray-200"></div>
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{order.title}</h4>
                                                    <p className="text-xs text-gray-500">{order.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}