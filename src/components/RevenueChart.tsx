import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


export const RevenueChart = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

 useEffect(() => {
  async function fetchTransactions() {
    try {
      const res = await fetch("https://fe-task-api.mainstack.io/transactions");
      const data = await res.json();
      const chartData = data.map((tx: any) => ({
        date: new Date(tx.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        value: tx.amount,
      }));

      setTransactions(chartData);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }

  fetchTransactions();
}, []);


  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={transactions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="0" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#999", fontSize: 12 }}
            dy={10}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
              padding: "8px 12px",
            }}
            formatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: "hsl(var(--chart-1))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
