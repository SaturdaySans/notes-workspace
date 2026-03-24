import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { FileText, Search, Inbox, Home as HomeIcon } from "lucide-react";

const Home: React.FC = () => {
  const pages = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Search", path: "/search", icon: Search },
    { name: "Inbox", path: "/inbox", icon: Inbox },
    { name: "Physics", path: "/physics", icon: FileText },
    { name: "Math", path: "/math", icon: FileText },
    { name: "Econs", path: "/econs", icon: FileText },
    { name: "General Paper", path: "/gp", icon: FileText },
  ];

  return (
    <div className="flex bg-[#191919] text-[#e5e5e5] font-sans min-h-screen">
      <Sidebar/>
      <main className="flex-1 ml-64 flex justify-center p-6">
        <div className="w-full max-w-5xl">
          {/*Header*/}
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
          <p className="text-gray-400 mb-10">
            Welcome back! :D
          </p>
          {/*Cards*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#222] p-5 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-2">Status</h2>
              <p className="text-gray-400 text-sm">operational</p>
            </div>
            <div className="bg-[#222] p-5 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-2">Tasks</h2>
              <p className="text-gray-400 text-sm">tasks</p>
            </div>
            <div className="bg-[#222] p-5 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-2">Activity</h2>
              <p className="text-gray-400 text-sm">Last updated just now</p>
            </div>
          </div>

          {/* Pages List */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Pages</h2>
            <ul className="space-y-2">
              {pages.map((page) => {
                const Icon = page.icon;
                return (
                  <li key={page.name}>
                    <Link
                      to={page.path}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2a] transition"
                    >
                      <Icon size={18} className="text-gray-400" />
                      <span>{page.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;