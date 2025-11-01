"use client";

 
 
type Author = {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    
    function: string;
    role: string;
    status: "Online" | "Offline";
    employed: string;
};

 

export default function TablesPage() {
    const authors: Author[] = [
        {
            id: 1,
            name: "Esthera Jackson",
            email: "esthera@simmmple.com",
             avatar: "/authors/user1.png",  
            function: "Manager",
            role: "Organization",
            status: "Online",
            employed: "14/06/21",
        },
        {
            id: 2,
            name: "Alexa Liras",
            email: "alexa@simmmple.com",
             avatar: "/authors/user2.png",  
            function: "Programmer",
            role: "Developer",
            status: "Offline",
            employed: "14/06/21",
        },
        {
            id: 3,
            name: "Laurent Michael",
            email: "laurent@simmmple.com",
             avatar: "/authors/uszr3.png",  
            function: "Executive",
            role: "Projects",
            status: "Online",
            employed: "14/06/21",
        },
        {
            id: 4,
            name: "Freduardo Hill",
            email: "freduardo@simmmple.com",
             avatar: "/authors/user1.png",  
            function: "Manager",
            role: "Organization",
            status: "Online",
            employed: "14/06/21",
        },
        {
            id: 5,
            name: "Daniel Thomas",
            email: "daniel@simmmple.com",
             avatar: "/authors/user2.png",  
            function: "Programmer",
            role: "Developer",
            status: "Offline",
            employed: "14/06/21",
        }
    ];

 
  return (
 <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Authors Table</h2>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left text-xs text-gray-500 uppercase border-b border-gray-200">
                                            <th className="pb-4 font-semibold">Author</th>
                                            <th className="pb-4 font-semibold">Function</th>
                                            <th className="pb-4 font-semibold">Status</th>
                                            <th className="pb-4 font-semibold">Employed</th>
                                            <th className="pb-4 font-semibold"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {authors.map((author) => (
                                            <tr key={author.id} className="border-b border-gray-100">
                                                <td className="py-5">
                                                    <div className="flex items-center space-x-3">
                                                        <div >
  <img
                          src={author.avatar}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400  flex items-center justify-center text-white text-lg"
                           
                         />                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-900 text-sm">{author.name}</p>
                                                            <p className="text-xs text-gray-500">{author.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-5">
                                                    <div>
                                                        <p className="font-semibold text-gray-900 text-sm">{author.function}</p>
                                                        <p className="text-xs text-gray-500">{author.role}</p>
                                                    </div>
                                                </td>
                                                <td className="py-5">
                                                    <span
                                                        className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold ${author.status === "Online"
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-gray-200 text-gray-600"
                                                            }`}
                                                    >
                                                        {author.status}
                                                    </span>
                                                </td>
                                                <td className="py-5 text-sm text-gray-900 font-medium">
                                                    {author.employed}
                                                </td>
                                                <td className="py-5 text-right">
                                                    <button className="text-gray-400 hover:text-gray-600 text-sm font-semibold">
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

 
  );
}