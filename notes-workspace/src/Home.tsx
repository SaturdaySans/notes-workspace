import Sidebar from "./Sidebar.tsx";

const Home: React.FC = () => {
    return (
    <div className="flex bg-[#191919] text-[#e5e5e5] font-sans min-h-screen">
      <Sidebar />
      <main className="lex-1 ml-55 flex justify-center p-5">
        <div className="container max-w-175 w-full p-5">
            <h1 className = "text-4xl font-bold text-left mb-10">Dashboard</h1>
            <p className="leading-relaxed mt-4"> Welcome to your dashboard! </p>
        </div>
      </main>
    </div>
    );
};

export default Home;