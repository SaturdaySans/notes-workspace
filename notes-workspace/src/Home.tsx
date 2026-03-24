import Sidebar from "./Sidebar.tsx";

const Home: React.FC = () => {
    return (
    <div className="flex bg-[#191919] text-[#e5e5e5] font-sans min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 flex justify-center p-6">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
          <p className="text-gray-400 mb-10">
            Welcome back. Here’s a quick overview
          </p>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#222] p-5 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-2">Status</h2>
              <p className="text-gray-400 text-sm">
                systems operational
              </p>
            </div>
            <div className="bg-[#222] p-5 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-2">Tasks</h2>
              <p className="text-gray-400 text-sm">
                You
              </p>
            </div>
            <div className="bg-[#222] p-5 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-2">Activity</h2>
              <p className="text-gray-400 text-sm">
                Last u
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
};

export default Home;