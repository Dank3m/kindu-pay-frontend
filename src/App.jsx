import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div
          className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90"
          id="sidebarBackdrop"
        ></div>

        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
