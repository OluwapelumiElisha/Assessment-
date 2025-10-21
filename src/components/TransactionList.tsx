import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import successTrans from '../assets/Success.svg'
import pendingTrans from '../assets/Pending.svg'
import { Skeleton } from "./ui/skeleton";


export const TransactionList = () => {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const res = await fetch("https://fe-task-api.mainstack.io/transactions");
        const data = await res.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTransactions();
  }, []);

    if (loading) {
    // Skeleton loader while fetching
    return (
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 bg-transaction-bg rounded-xl"
          >
            <div className="flex items-center gap-4">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="w-32 h-3" />
                <Skeleton className="w-24 h-3" />
              </div>
            </div>
            <div className="text-right space-y-2">
              <Skeleton className="w-16 h-3 ml-auto" />
              <Skeleton className="w-12 h-3 ml-auto" />
            </div>
          </div>
        ))}
      </div>
    )
  }


  return (
    <div className="space-y-3">
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-transaction-bg rounded-xl hover:bg-opacity-80 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
              {
                transaction?.status ? <img src={successTrans} alt={transaction?.status} /> : <img src={pendingTrans} alt={transaction?.status} />
              }

            </div>
            <div>
              <p className="font-medium text-sm">{transaction?.metadata?.name}</p>
              <p className="text-xs text-muted-foreground">{transaction?.metadata?.product_name}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-sm">USD {transaction.amount}</p>
            <p className="text-xs text-muted-foreground">
              {transaction.date
                ? new Date(transaction.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                : "—"}
            </p>

          </div>
        </div>
      ))}
    </div>
  );
};
