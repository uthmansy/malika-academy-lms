import React from "react";
import Container from "../../Container";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaAward,
  FaChartLine,
  FaUsersCog,
  FaRegCalendarCheck,
} from "react-icons/fa";

const Academics: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Academic Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our rigorous curriculum prepares students for success in a rapidly
            changing world
          </p>
        </div>

        {/* Curriculum Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-3xl p-10 shadow-lg transform transition hover:scale-105">
            <FaBookOpen className="w-16 h-16 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Nigerian/British Curriculum
            </h3>
            <p className="opacity-90">
              Dual curriculum approach combining Nigerian educational standards
              with British A-Level programs.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-3xl p-10 shadow-lg transform transition hover:scale-105">
            <FaChalkboardTeacher className="w-16 h-16 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-4">Expert Faculty</h3>
            <p className="opacity-90">
              85% of our teachers hold advanced degrees with an average of 10
              years experience.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-3xl p-10 shadow-lg transform transition hover:scale-105">
            <FaAward className="w-16 h-16 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-4">Exam Success</h3>
            <p className="opacity-90">
              98% pass rate in WAEC/NECO exams over the last 5 years.
            </p>
          </div>
        </div>

        {/* Faculty Spotlight */}
        {/* <div className="bg-gradient-to-r from-gray-100 to-gray-50 py-20 rounded-3xl mb-20 px-6">
          <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">
            Meet Our Educators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 group">
                  <img
                    src={`https://randomuser.me/api/portraits/women/${
                      idx + 20
                    }.jpg`}
                    alt="Teacher"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Mrs. Adaobi Nwachukwu
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Head of Science Department
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Passionate about inspiring the next generation of scientists
                  through hands-on learning and innovation.
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Academic Calendar */}
        <div className=" rounded-3xl shadow-lg px-5 md:px-12 py-24 mb-16 bg-primary">
          <h3 className="flex items-center gap-4 text-2xl font-bold mb-6 text-white">
            <FaRegCalendarCheck className="text-white" />
            Academic Calendar 2024/2025
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { date: "Sep 12", event: "Term 1 Begins" },
              { date: "Oct 28", event: "Mid-Term Break" },
              { date: "Dec 15", event: "Term 1 Ends" },
              { date: "Jan 10", event: "Term 2 Begins" },
              { date: "Mar 21", event: "Annual Exams" },
              { date: "May 30", event: "Graduation Day" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-center rounded-xl hover:bg-white/5 transition-colors duration-300 border border-white/40"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-white/80 to-white rounded-xl flex items-center justify-center shadow">
                  <span className="font-semibold text-primary">
                    {item.date}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-white">{item.event}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Academics;
