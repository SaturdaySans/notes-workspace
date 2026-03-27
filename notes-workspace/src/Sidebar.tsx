import { Home, Search, Inbox, FileText } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-55 h-screen fixed overflow-y-auto bg-[#202020] text-[#bcbab6] p-5 box-border">
      <p className="mb-2 text-sm tracking-wide text-gray-400">General</p>
      <ul className="space-y-1 mb-6">
        <li>
          <a href="index.html" className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2a] transition">
            <Home size={16} /><span>Home</span>
          </a>
        </li>
        <li>
          <a href="pages/search.html" className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2a] transition">
            <Search size={16} /><span>Search</span>
          </a>
        </li>
        <li>
          <a href="pages/inbox.html" className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2a] transition">
            <Inbox size={16}/><span>Inbox</span>
          </a>
        </li>
      </ul>
      <p className="mb-2 text-sm tracking-wide text-gray-400">Pages</p>
      <ul className="space-y-1">
        <li>
          <a href="pages/physics.html" className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2a] transition">
            <FileText size={16}/><span>Physics</span>
          </a>
        </li>
        <li>
          <a href="pages/math.html" className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2a] transition">
            <FileText size={16}/><span>Math</span>
          </a>
        </li>
        <li>
          <a href="pages/econs.html" className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2a] transition">
            <FileText size={16} /><span>Econs</span>
          </a>
        </li>
        <li>
          <a href="pages/gp.html" className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2a2a] transition">
            <FileText size={16} /><span>General Paper</span>
          </a>
        </li>
      </ul>

    </aside>
  );
}