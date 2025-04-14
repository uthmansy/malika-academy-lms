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
                src="https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Students in classroom"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </Container>
      </div>

      {/* Mission / Vision / Values */}
      <div className="bg-primary">
        <Container className="py-20 md:py-28">
          <div className="space-y-6 mb-20 text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Shaping Bright Futures
              <br />
              <span className="text-white/65 mt-2 inline-block">
                From Nursery to Secondary
              </span>
            </h2>
          </div>
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
                className="p-12 py-16 border-white/50 rounded-lg shadow-xl hover:shadow-2xl transition-all 
                        border text-white"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-white/30 text-white rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ">{item.title}</h3>
                  <p className=" leading-relaxed text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Modern Academic Journey Section */}
      <div className=" py-20 md:py-28 bg-primary text-white">
        <Container>
          <div className="bg-white/20 p-12 md:p-20 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12">
            <header className=" flex items-center">
              <div className="text-white space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                    Shaping Bright Futures
                    <br />
                    <span className=" mt-2 inline-block">
                      From Nursery to Secondary
                    </span>
                  </h2>
                  <p className="text-lg leading-relaxed max-w-2xl">
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
                    className="bg-white text-primary px-8 py-4 rounded-full hover:bg-secondary-dark transition-all
                                 font-semibold text-lg shadow-lg hover:shadow-xl"
                  >
                    Admissions
                  </button>
                </div>
              </div>
            </header>

            {/* Academic Stage Cards */}
            <div className="grid grid-cols-2 gap-10">
              {[
                {
                  icon: FaBook,
                  title: "Nursery",
                  text: "Play-based learning for ages 3-5",
                  bgColor: "bg-indigo-600",
                },
                {
                  icon: FaPuzzlePiece,
                  title: "Primary",
                  text: "Foundational education for ages 6-11",
                  bgColor: "bg-green-600",
                },
                {
                  icon: IoSparkles,
                  title: "Secondary",
                  text: "Advanced curriculum for ages 12-17",
                  bgColor: "bg-blue-600",
                },
                {
                  icon: FaPuzzlePiece,
                  title: "Islamiyya",
                  text: "Islamic education for ages 6-11",
                  bgColor: "bg-green-600",
                },
              ].map(({ icon: Icon, title, text, bgColor }, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 aspect-square p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex justify-center items-center"
                  role="article"
                  aria-labelledby={`academic-title-${idx}`}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-center mb-6">
                      <div className={`${bgColor} rounded-full p-8`}>
                        <Icon
                          className="w-12 h-12 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <h3
                      id={`academic-title-${idx}`}
                      className="text-2xl font-semibold text-gray-800 mb-2 text-center"
                    >
                      {title}
                    </h3>
                    <p className="text-base text-gray-600 text-center">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Section Header */}
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
              className="p-12 bg-primary rounded-2xl hover:bg-primary/95 transition-colors
                        border border-gray-100 hover:border-primary/20 shadow-lg hover:shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-14 h-14  text-primary bg-white/30 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Testimonials */}
      <div
        className="py-20 md:py-28 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.8), rgba(99, 102, 241, 0.5)), url('https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Voices of Our Community
            </h2>
            <p className="text-xl text-gray-200">
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
                      <p className="font-semibold text-lg">Shuaibu Usman</p>
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
