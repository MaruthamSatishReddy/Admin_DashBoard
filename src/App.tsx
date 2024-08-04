import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import SideBar from "./components/common/SideBar";
import OverViewPage from "./pages/OverViewPage";
import SalesPage from "./pages/SalesPage";
import SettingsPage from "./pages/SettingsPage";
import UsersPage from "./pages/UsersPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
      </div>
      <SideBar />
      <Routes>
        <Route path="/" element={<OverViewPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/sales" element={<SalesPage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/analytics" element={<AnalyticsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
