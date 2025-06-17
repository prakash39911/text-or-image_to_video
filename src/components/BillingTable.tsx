"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { payment_status } from "@/generated/prisma";

interface Package {
  id: string;
  packageName: string;
  amount: number;
  credits: number;
  purchaseDate: Date;
  status: payment_status;
}

const BillingTable = ({ billingData }: { billingData: Package[] }) => {
  const columns: ColumnDef<Package>[] = [
    {
      accessorKey: "packageName",
      header: "Package Name",
      cell: ({ row }) => (
        <div className="font-semibold text-cyan-100">
          {row.getValue("packageName")}
        </div>
      ),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        }).format(amount);
        return <div className="text-teal-300 font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "credits",
      header: "Credits",
      cell: ({ row }) => (
        <div className="text-cyan-200">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-teal-900/30 text-teal-300 border border-teal-700/50">
            {row.getValue("credits")}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Payment Status",
      cell: ({ row }) => (
        <div className="font-semibold text-cyan-100">
          {row.getValue("status")}
        </div>
      ),
    },
    {
      accessorKey: "purchaseDate",
      header: "Purchase Date",
      cell: ({ row }) => {
        const date = new Date(row.getValue("purchaseDate"));
        const formatted = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        return <div className="text-gray-300">{formatted}</div>;
      },
    },
  ];

  const table = useReactTable({
    data: billingData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-6 py-20">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2 text-teal-500">Billing</h2>
        <p className="text-gray-400">Manage and view your purchased packages</p>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-teal-900/20 to-cyan-900/20 border-b border-gray-700/50">
                {table.getHeaderGroups().map((headerGroup) =>
                  headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-4 text-left text-sm font-semibold text-teal-200 uppercase tracking-wider"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {table.getRowModel().rows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`hover:bg-gradient-to-r hover:from-teal-900/10 hover:to-cyan-900/10 transition-all duration-200 ${
                    index % 2 === 0 ? "bg-gray-900/20" : "bg-gray-800/20"
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {billingData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No data found...</div>
            <div className="text-gray-500 text-sm mt-2">
              Your purchased packages will appear here
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
        <div>
          Showing {table.getRowModel().rows.length} of {billingData.length}
        </div>
      </div>
    </div>
  );
};

export default BillingTable;
