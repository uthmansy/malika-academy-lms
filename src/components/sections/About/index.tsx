import React from "react";
import Container from "../../Container";
import {
  FaGraduationCap,
  FaUserFriends,
  FaGlobe,
  FaBook,
  FaPuzzlePiece,
  FaFlask,
  FaRunning,
  FaPaintBrush,
  FaLaptopCode,
  FaMusic,
  FaUserCircle,
} from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

const About: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Welcome Section */}
      <div className="relative py-16 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="text-primary space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                  Shaping Bright Futures
                  <br />
                  <span className="text-secondary mt-2 inline-block">
                    From Nursery to Secondary
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  At Malika Academy, we nurture young minds through a holistic
                  education system that combines academic excellence with
                  character development. Our 15-year journey has produced
                  leaders who excel both nationally and internationally.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-dark transition-all 
                                 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Our Story
                </button>
                <button
                  className="bg-secondary text-white px-8 py-4 rounded-full hover:bg-secondary-dark transition-all
                                 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Admissions
                </button>
              </div>
            </div>

            {/* Image */}
            <div
              className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl 
                          transform hover:scale-[1.01] transition-transform duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1588681664899-f1423a7c365a?auto=format&w=1080"
                alt="Students in classroom"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </Container>
      </div>

      {/* Mission / Vision / Values */}
      <Container className="py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: FaGraduationCap,
              title: "Mission",
              text: "To provide world-class education that fosters academic excellence and moral integrity",
            },
            {
              icon: FaGlobe,
              title: "Vision",
              text: "To be the leading educational institution producing globally competitive graduates",
            },
            {
              icon: FaUserFriends,
              title: "Values",
              text: "Excellence, Integrity, Innovation, and Community Service",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all 
                        border border-gray-100 hover:border-primary/10"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Academic Journey */}
      <div className="bg-primary/5 py-20 md:py-28">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Academic Journey
            </h2>
            <p className="text-xl text-gray-600">
              A progressive learning path designed for lifelong success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: FaBook,
                title: "Nursery",
                text: "Play-based learning for ages 3-5",
                color: "bg-secondary",
              },
              {
                icon: FaPuzzlePiece,
                title: "Primary",
                text: "Foundational education for ages 6-11",
                color: "bg-tertiary",
              },
              {
                icon: IoSparkles,
                title: "Secondary",
                text: "Advanced curriculum for ages 12-17",
                color: "bg-accent",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.color} p-10 rounded-3xl text-white transform hover:scale-[1.02] 
                          transition-all duration-300 shadow-2xl hover:shadow-3xl`}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <p className="text-lg leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Facilities */}
      <Container className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600">
            State-of-the-art infrastructure supporting holistic development
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FaBook, text: "Modern Library" },
            { icon: FaFlask, text: "Science Labs" },
            { icon: FaRunning, text: "Sports Complex" },
            { icon: FaPaintBrush, text: "Creative Arts Studio" },
            { icon: FaLaptopCode, text: "Computer Labs" },
            { icon: FaMusic, text: "Music Rooms" },
            { icon: FaUserFriends, text: "Counseling Center" },
            { icon: FaGraduationCap, text: "Auditorium" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl hover:bg-gray-50 transition-colors
                        border border-gray-100 hover:border-primary/20 shadow-lg hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Testimonials */}
      <div className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Voices of Our Community
            </h2>
            <p className="text-xl text-gray-600">
              Hear from those who've experienced the Malika difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all
                          border border-gray-100 hover:border-primary/10"
              >
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    “Malika Academy transformed my child's approach to learning.
                    The teachers are exceptional!”
                  </p>
                  <div className="flex items-center gap-4">
                    <FaUserCircle className="w-14 h-14 text-primary/80" />
                    <div className="text-left">
                      <p className="font-semibold text-lg">Adebayo Oluwaseun</p>
                      <p className="text-gray-500">Parent of Graduate</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
