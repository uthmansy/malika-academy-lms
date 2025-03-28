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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-primary text-white rounded-3xl p-8">
            <FaBookOpen className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Nigerian/British Curriculum
            </h3>
            <p className="opacity-90">
              Dual curriculum approach combining Nigerian educational standards
              with British A-Level programs
            </p>
          </div>
          <div className="bg-secondary text-white rounded-3xl p-8">
            <FaChalkboardTeacher className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Expert Faculty</h3>
            <p className="opacity-90">
              85% of our teachers hold advanced degrees with an average of 10
              years experience
            </p>
          </div>
          <div className="bg-tertiary text-white rounded-3xl p-8">
            <FaAward className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Exam Success</h3>
            <p className="opacity-90">
              98% pass rate in WAEC/NECO exams over the last 5 years
            </p>
          </div>
        </div>

        {/* Academic Pathways */}
        <div className="mb-16 px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Academic Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaRegCalendarCheck,
                title: "Early Years",
                text: "Ages 3-5",
                color: "bg-primary",
              },
              {
                icon: FaUsersCog,
                title: "Primary",
                text: "Ages 6-11",
                color: "bg-secondary",
              },
              {
                icon: FaChartLine,
                title: "Secondary",
                text: "Ages 12-16",
                color: "bg-tertiary",
              },
              {
                icon: FaAward,
                title: "Pre-University",
                text: "Ages 16-18",
                color: "bg-accent",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.color} text-white p-6 rounded-2xl hover:scale-105 transition-transform`}
              >
                <item.icon className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="opacity-90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Spotlight */}
        <div className="bg-gray-50 py-16 rounded-3xl mb-16 px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Meet Our Educators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={`https://randomuser.me/api/portraits/women/${
                      idx + 20
                    }.jpg`}
                    alt="Teacher"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Mrs. Adaobi Nwachukwu
                </h4>
                <p className="text-gray-600 mb-3">Head of Science Department</p>
                <div className="flex gap-4 mt-4">
                  <FaBookOpen className="text-primary" />
                  <FaAward className="text-secondary" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16 px-4">
          <h3 className="flex items-center gap-4 text-2xl font-bold mb-6">
            <FaRegCalendarCheck className="text-primary" />
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
              <div key={idx} className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold">{item.date}</span>
                </div>
                <div>
                  <h4 className="font-medium">{item.event}</h4>
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
