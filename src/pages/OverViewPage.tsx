import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverViewChart from "../components/overview/SalesOverViewChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";

const OverViewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Over View" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="34567"
            color="#6366f1"
          />
          <StatCard name="New User" icon={Users} value="1234" color="#6366f1" />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="123"
            color="#6366f1"
          />
          <StatCard
            name="Conversion Rate"
            icon={Zap}
            value="12.5%"
            color="#10B981"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverViewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverViewPage;
