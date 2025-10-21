import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface FilterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FilterModal = ({ open, onOpenChange }: FilterModalProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState("last7days");

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background blur overlay */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 "
            onClick={() => onOpenChange(false)}
          />

          {/* Sliding panel */}
          <motion.div
            key="filter-modal"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 overflow-y-auto p-4 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Filter</h2>
              <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)}>
                ✕
              </Button>
            </div>

            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedPeriod === "today" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod("today")}
                >
                  Today
                </Button>
                <Button
                  variant={selectedPeriod === "last7days" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod("last7days")}
                >
                  Last 7 days
                </Button>
                <Button
                  variant={selectedPeriod === "thismonth" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod("thismonth")}
                >
                  This month
                </Button>
                <Button
                  variant={selectedPeriod === "last3months" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod("last3months")}
                >
                  Last 3 months
                </Button>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Date Range</label>
                <div className="grid grid-cols-2 gap-3">
                  <Input type="date" defaultValue="2023-04-17" />
                  <Input type="date" defaultValue="2023-08-17" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Transaction Type</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Transactions</SelectItem>
                    <SelectItem value="store">Store Transactions</SelectItem>
                    <SelectItem value="tips">Get Tipped</SelectItem>
                    <SelectItem value="withdrawals">Withdrawals</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Transaction Status</label>
                <Select defaultValue="successful">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="successful">Successful</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center items-center pt-32">
                <div className="flex justify-between">
                  <Button className="rounded-full px-12" variant="outline" onClick={() => onOpenChange(false)}>
                    Clear
                  </Button>
                  <Button className="rounded-full px-12" onClick={() => onOpenChange(false)}>Apply</Button>
                </div>
              </div>

             
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
