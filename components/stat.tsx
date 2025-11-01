  
  
  "use client";
  
   import { usePathname } from "next/navigation";
   import { Search, Bell, User, TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react";

 
 type StatCard = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  iconBg: string;
};
  
  export default function Stats() {
    const pathname = usePathname();
  
     
     const stats: StatCard[] = [
    {
      title: "Today's Money",
      value: "$53,000",
      change: "+55%",
      isPositive: true,
      icon: <DollarSign className="w-5 h-5" />,
      iconBg: "bg-teal-500",
    },
    {
      title: "Today's Users",
      value: "2,300",
      change: "+3%",
      isPositive: true,
      icon: <Users className="w-5 h-5" />,
      iconBg: "bg-blue-500",
    },
    {
      title: "New Clients",
      value: "+3,052",
      change: "-2%",
      isPositive: false,
      icon: <ShoppingCart className="w-5 h-5" />,
      iconBg: "bg-emerald-500",
    },
    {
      title: "Total Sales",
      value: "$173,000",
      change: "+5%",
      isPositive: true,
      icon: <TrendingUp className="w-5 h-5" />,
      iconBg: "bg-orange-500",
    },
  ];
    return (
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-between bg-white rounded-2xl p-6 shadow-sm">
               
               <div> 
                <p className="text-sm text-gray-500 ">{stat.title}</p>
                <div className="flex  gap-2  ">
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <span className={`text-xl mt-1 font-semibold ${stat.isPositive ? "text-green-500" : "text-red-500"}`}>
                    {stat.change}
                  </span>
                </div>
                </div>


                 <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center text-white`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
    );
  }