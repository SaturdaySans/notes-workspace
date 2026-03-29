import Sidebar from "./Sidebar";
import type { ReactNode } from "react";

type TemplateProps = {
  children: ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <div className="flex bg-[#191919] text-[#e5e5e5] font-sans min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 flex justify-center p-6">
        <div className="w-full max-w-5xl">
          {children}
        </div>
      </main>
    </div>
  );
}