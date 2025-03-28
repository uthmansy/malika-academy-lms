import React from "react";
import Container from "../../Container";
import {
  FaChalkboardTeacher,
  FaBasketballBall,
  FaTheaterMasks,
  FaCode,
  FaPaintBrush,
  FaMicrophone,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const CampusLife: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center py-10">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Vibrant <span className="text-primary">Campus Life</span>
          </h2>
          <p className="text-xl text-gray-600">
            Where learning extends beyond classrooms and friendships turn into
            lifelong bonds
          </p>
        </div>

        {/* Activity Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: FaChalkboardTeacher, label: "Academic Clubs" },
            { icon: FaBasketballBall, label: "Sports Teams" },
            { icon: FaTheaterMasks, label: "Drama Society" },
            { icon: FaCode, label: "Coding Club" },
            { icon: FaPaintBrush, label: "Art Studio" },
            { icon: FaMicrophone, label: "Debate Team" },
            { icon: MdSchool, label: "Science Olympiad" },
            { icon: FaCalendarAlt, label: "Cultural Events" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <item.icon className="w-8 h-8" />
                </div>
                <span className="font-semibold text-gray-900 text-center">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Activities */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Featured Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Science Fair 2024",
                image:
                  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&w=800",
                color: "bg-primary",
              },
              {
                title: "Annual Play Production",
                image:
                  "https://images.unsplash.com/photo-1588681458111-9fd0a0e3d26d?auto=format&w=800",
                color: "bg-secondary",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
                <div
                  className={`absolute bottom-6 left-6 ${item.color} px-6 py-3 rounded-full`}
                >
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Calendar */}
        <div className="bg-white rounded-3xl p-10 shadow-xl mb-16 border border-gray-100">
          <h3 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-8">
            <FaCalendarAlt className="text-primary w-8 h-8" />
            Upcoming Events
          </h3>
          <div className="space-y-6">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 p-4 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">25</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    Annual Sports Day
                  </h4>
                  <p className="text-gray-600">October 25, 2024 | 9:00 AM</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="bg-primary/5 py-20 rounded-3xl mb-16">
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Student Voices
            </h3>
            <p className="text-xl text-gray-600">
              Hear directly from our vibrant student community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary/20"
              >
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "The robotics club helped me discover my passion for
                    engineering and problem-solving!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-lg">AM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Amina Mohammed
                      </p>
                      <p className="text-gray-500">Secondary 3 Student</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Campus Moments
            </h3>
            <p className="text-xl text-gray-600">
              Capturing memories that last a lifetime
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <img
                  src={`https://picsum.photos/600/600?random=${idx}`}
                  alt={`Campus moment ${idx + 1}`}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium">
                    Event Photo {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CampusLife;
