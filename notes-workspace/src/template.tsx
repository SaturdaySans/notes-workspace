import Sidebar from "./Sidebar.tsx";
// import { Link } from "react-router-dom";
// import { FileText, Search, Inbox, Home as HomeIcon } from "lucide-react";

// const Home: React.FC = () => {
//   const pages = [
//     { name: "Home", path: "/", icon: HomeIcon },
//     { name: "Search", path: "/search", icon: Search },
//     { name: "Inbox", path: "/inbox", icon: Inbox },
//     { name: "Physics", path: "/physics", icon: FileText },
//     { name: "Math", path: "/math", icon: FileText },
//     { name: "Econs", path: "/econs", icon: FileText },
//     { name: "General Paper", path: "/gp", icon: FileText },
//   ];
 
export default function Template() {
    return (
        <>

        <Sidebar />
        <main className="flex-1 ml-64 flex justify-center p-6">
            <div className="w-full max-w-5xl">
            <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
            </div>
        </main>
        </>
    );
};