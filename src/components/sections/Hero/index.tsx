import React from "react";
import Container from "../../Container";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[80vh] flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-blend-overlay bg-black/40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
      </div>

      {/* Main Content */}
      <Container className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base md:text-lg text-white/80 mb-4 tracking-wider">
            Need Guidance? We're Here to Help
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Welcome to <span className="text-primary">Malika Academy</span>
          </h1>
          <button className="bg-primary hover:bg-primary-dark transition-colors px-8 py-4 rounded-full text-white font-medium shadow-lg">
            Explore Programs
          </button>
        </div>
      </Container>

      {/* Course Categories */}
      <div className="relative z-20 bg-gradient-to-t from-black/90 to-transparent py-8 md:py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Child's Pillar", link: "#" },
              { title: "Future Hope", link: "#" },
              { title: "Building Leaders", link: "#" },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-black/80 rounded-2xl transition-all hover:bg-primary/20"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
