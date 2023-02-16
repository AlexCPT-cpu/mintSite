import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsTable from "@/components/StatsTable";

const stats = () => {
  return (
    <div className="bg-[#0C1616] min-h-screen mt-20 mb-20">
      <Header stats="bg-gradient-to-r" />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mb-20">
        <StatsTable />
      </div>
      <Footer />
    </div>
  );
};

export default stats;
