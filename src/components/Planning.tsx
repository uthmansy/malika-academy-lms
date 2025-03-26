import { VscArchive } from "react-icons/vsc";

export default function Planning() {
  const planningData = [
    {
      title: "Reading - Beginner Topic 1",
      time: "8:00 AM - 10:00 AM",
      icon: <VscArchive className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Listening - Intermediate Topic 1",
      time: "3:00 PM - 4:00 PM",
      icon: <VscArchive className="w-6 h-6 text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Speaking - Beginner Topic 1",
      time: "8:00 AM - 12:00 PM",
      icon: <VscArchive className="w-6 h-6 text-orange-500" />,
      bgColor: "bg-orange-50",
    },
    {
      title: "Grammar - Intermediate Topic 2",
      time: "8:00 AM - 10:00 AM",
      icon: <VscArchive className="w-6 h-6 text-pink-500" />,
      bgColor: "bg-pink-50",
    },
    {
      title: "Reading - Beginner Topic 1",
      time: "8:00 PM - 9:00 PM",
      icon: <VscArchive className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Speaking - Advanced Topic 1",
      time: "7:00 PM - 8:00 PM",
      icon: <VscArchive className="w-6 h-6 text-orange-500" />,
      bgColor: "bg-orange-50",
    },
    {
      title: "Listening - Beginner Topic 5",
      time: "8:00 AM - 9:00 AM",
      icon: <VscArchive className="w-6 h-6 text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Reading - Advanced Topic 1",
      time: "6:00 PM - 7:00 PM",
      icon: <VscArchive className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div className="bg-white rounded-md shadow p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-800">Planning</h1>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            View All
          </a>
        </div>
        <div className="mt-2 sm:mt-0 flex items-center space-x-2 text-gray-600">
          <VscArchive className="w-5 h-5" />
          <span className="text-sm">20 March 2020</span>
        </div>
      </div>

      {/* Planning Cards: 2 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {planningData.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between rounded-md p-4 ${item.bgColor}`}
          >
            <div className="flex items-center space-x-3">
              {/* Icon */}
              <div>{item.icon}</div>
              {/* Texts */}
              <div>
                <h2 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h2>
                <p className="text-xs text-gray-500">{item.time}</p>
              </div>
            </div>
            {/* Ellipsis Icon on the right */}
            <VscArchive className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
