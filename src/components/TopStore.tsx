import React from "react";

export default function TopStore() {
  // Example data. You could fetch or pass in as props.
  const storeData = [
    {
      name: "Solaris Sparkle",
      location: "Miami, Florida",
      sell: "102 Quantity",
      amount: "12.50K",
    },
    {
      name: "Crimson Dusk",
      location: "Denver, Colorado",
      sell: "214 Quantity",
      amount: "07.85K",
    },
    {
      name: "Indigo Zephyr",
      location: "Orlando, Florida",
      sell: "143 Quantity",
      amount: "16.40K",
    },
    {
      name: "Roseate Crest",
      location: "Las Vegas, Nevada",
      sell: "185 Quantity",
      amount: "23.64K",
    },
  ];

  return (
    <div className="bg-white rounded-md shadow p-6 flex-grow">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Top Store</h2>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-lime-500 
                     hover:bg-lime-600 rounded-md focus:outline-none focus:ring-2 
                     focus:ring-offset-2 focus:ring-lime-400"
        >
          Share
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 text-sm uppercase tracking-wide border-b">
              <th className="py-2">Store Name</th>
              <th className="py-2">Location</th>
              <th className="py-2">Sell</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {storeData.map((store, idx) => (
              <tr
                key={idx}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="py-3">{store.name}</td>
                <td className="py-3">{store.location}</td>
                <td className="py-3">{store.sell}</td>
                <td className="py-3">{store.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
