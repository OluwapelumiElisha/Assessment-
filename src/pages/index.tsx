import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { RevenueChart } from "../components/RevenueChart";
import { TransactionList } from "../components/TransactionList";
import { FilterModal } from "../components/FilterModal";
import { Download } from "lucide-react";
import { useState } from "react";
import destails from '../assets/info.svg'
import filter from '../assets/drop.svg'
const Index = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 py-8 mt-28">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-6">
            <div className="bg-card p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-2 text-[#56616B]">Available Balance</p>
                  <h1 className="text-4xl font-bold text-[#131316]">USD 120,500.00</h1>
                </div>
                <Button size="lg" className="px-8">
                  Withdraw
                </Button>
              </div>

              <RevenueChart />

              <div className="flex items-center justify-between text-xs text-muted-foreground mt-4">
                <span>Apr 1, 2022</span>
                <span>Apr 30, 2022</span>
              </div>
            </div>

            
          </div>

          <div className="space-y-0">
            <div className="bg-card p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Ledger Balance</p>
                <img src={destails} alt="destails" />
              </div>
              <p className="text-2xl font-bold">USD 0.00</p>
            </div>

            <div className="bg-card p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Total Payout</p>
                <img src={destails} alt="destails" />
              </div>
              <p className="text-2xl font-bold">USD 55,080.00</p>
            </div>

            <div className="bg-card p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <img src={destails} alt="destails" />
              </div>
              <p className="text-2xl font-bold">USD 175,580.00</p>
            </div>

            <div className="bg-card p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Pending Payout</p>
                <img src={destails} alt="destails" />
              </div>
              <p className="text-2xl font-bold">USD 0.00</p>
            </div>
          </div>
        </div>
      </main>

      <FilterModal open={filterOpen} onOpenChange={setFilterOpen} />
      <div className="bg-card rounded-2xl p-8 shadow-sm w-[85%] m-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">24 Transactions</h2>
                  <p className="text-sm text-muted-foreground">
                    Your transactions for the last 7 days
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full bg-[#EFF1F6]"
                    onClick={() => setFilterOpen(true)}
                  >
                    Filter
                    <img src={filter} alt="filter" />
                  </Button>
                  <Button className="rounded-full bg-[#EFF1F6]" variant="outline" size="sm">
                    Export list
                    <Download className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </div>

              <TransactionList />
            </div>
    </div>
  );
};

export default Index;
