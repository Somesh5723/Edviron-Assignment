import React from "react";

export default function RecentTransaction() {
  const data = [
    {
      user: {
        name: "Mariyam",
        avtar: "https://randomuser.me/api/portraits/women/37.jpg",
      },
      sales: "55k+ sales",
      revenue: "$1.4m revenue",
    },
    {
      user: {
        name: "Kartik",
        avtar: "https://randomuser.me/api/portraits/men/25.jpg",
      },
      sales: "40k+ sales",
      revenue: "$1.4m revenue",
    },
    {
      user: {
        name: "Shivam",
        avtar: "https://randomuser.me/api/portraits/men/15.jpg",
      },
      sales: "40k+ sales",
      revenue: "$1.4m revenue",
    },
  ];
  return (
    <div className="w-full bg-[#FCFCFC] h-auto pt-8 rounded ">
      <h2 className="text-center text-lg font-semibold">Recent Transactions</h2>
      <div className="p-4 w-full space-y-2">
        {data.map((item, i) => (
          <div className="flex justify-between space-x-8  items-center" key={i}>
            <div className=" flex items-center w-30 h-10">
              <img
                className="w-full h-full rounded-full"
                src={item.user.avtar}
                alt={item.user.name}
              />
              <div className="ml-3">
                <p className="text-custom-gray font-normal capitalize text-xs whitespace-no-wrap">
                  {item.user.name}
                </p>
              </div>
            </div>
            <div className="">
              <p className="text-custom-gray-light capitalize text-xs whitespace-no-wrap">
                {item.sales}
              </p>
            </div>
            <div className="">
              <p className="text-custom-gray-light capitalize text-xs whitespace-no-wrap">
                {item.revenue}
              </p>
            </div>
          </div>
        ))}
        <div className="w-full flex justify-center items-center">
          <button className="p-2 bg-custom-green rounded">
            View all users
          </button>
        </div>
      </div>
    </div>
  );
}
