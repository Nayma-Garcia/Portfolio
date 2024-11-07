import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Code,
  Briefcase,
  Terminal,
  Coffee,
  Smartphone,
  Car,
  Heart,
} from "lucide-react";

const Portfolio = () => {
  // Initialize state for section visibility
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    experience: false,
    projects: false,
    skills: false,
  });

  // Initialize state for active card
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Set up intersection observer for section visibility
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries: any[]) => {
      entries.forEach(
        (entry: {
          isIntersecting: any;
          target: { dataset: { section: any } };
        }) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        }
      );
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe sections
    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    // Show hero section immediately
    setVisibleSections((prev) => ({
      ...prev,
      hero: true,
    }));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Principal Financial Group",
      date: "May - August 2024",
      icon: <Code className="w-6 h-6" />,
      points: [
        "Designed and developed a NSK app with a login and chat interface using AWS Lambda and Llama3",
        "Built online applications using Unqork platform",
        "Automated testing processes using Selenium and Java Robot",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Farmers Mutual Hail",
      date: "May - August 2023",
      icon: <Terminal className="w-6 h-6" />,
      points: [
        "Modernized outdated company systems by refactoring legacy code",
        "Utilized SQL and Java to create a document transmission control program",
      ],
    },
    {
      title: "Software Engineer Peer Mentor",
      company: "Iowa State University",
      date: "April 2022 - Current",
      icon: <Coffee className="w-6 h-6" />,
      points: [
        "Mentored students through challenging coding assignments",
        "Led Git course teaching version control skills",
        "Offered career guidance to mentees",
      ],
    },
  ];

  const projects = [
    {
      title: "Spinder",
      description:
        "Mobile app integrating Spotify API for personalized song recommendations with swipe functionality",
      tech: ["Java", "Spotify API", "Spring Boot"],
      color: "from-emerald-500 to-teal-700",
      icon: <Smartphone className="w-6 h-6" />,
      points: [
        "Implemented swipe-based user interface for song discovery",
        "Integrated Spotify API for personalized recommendations",
        "Built user profile customization features",
      ],
    },
    {
      title: "AWS DeepRacer",
      description:
        "Developed and trained an autonomous racing model using reinforcement learning",
      tech: ["Python", "AWS", "Machine Learning"],
      color: "from-purple-500 to-indigo-700",
      icon: <Car className="w-6 h-6" />,
      points: [
        "Developed reinforcement learning model for autonomous racing",
        "Optimized model performance through iterative improvements",
        "Achieved significant reduction in lap times",
      ],
    },
    {
      title: "Devs Do Good Hackathon",
      description:
        "Led development of events page for non-profit organization website",
      tech: ["React", "JavaScript", "Bootstrap"],
      color: "from-rose-500 to-pink-700",
      icon: <Heart className="w-6 h-6" />,
      points: [
        "Led frontend development for events page",
        "Implemented responsive design using Bootstrap",
        "Completed fully functional site within 24 hours",
      ],
    },
  ];

  const skills = {
    programming: [
      "Java",
      "Python",
      "JavaScript",
      "C",
      "C++",
      "HTML/CSS",
      "SQL",
      "TypeScript",
      "React",
    ],
    technologies: [
      "SpringBoot",
      "JUnit",
      "Mockito",
      "Android",
      "Node.js",
      "MongoDB",
    ],
    devops: ["CI/CD", "Maven", "Gradle", "AWS", "Docker"],
    tools: ["IntelliJ IDEA", "Git/GitHub", "JIRA", "Postman", "AGILE", "SCRUM"],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section
        data-section="hero"
        className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 p-8 transition-all duration-1000 ${
          visibleSections.hero ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20"></div>
          <h1 className="text-6xl font-bold mb-4 leading-tight relative animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Nayma Garcia Virgen
          </h1>

          <h2 className="text-2xl mb-8 text-gray-300">Software Engineer</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:nayma.garciav@gmail.com"
              className="transform hover:scale-110 hover:rotate-6 transition-all duration-300 text-teal-400 hover:text-teal-300"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/naymagarcia"
              className="transform hover:scale-110 hover:-rotate-6 transition-all duration-300 text-purple-400 hover:text-purple-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Nayma-Garcia"
              className="transform hover:scale-110 hover:rotate-6 transition-all duration-300 text-pink-400 hover:text-pink-300"
            >
              <Github size={24} />
            </a>
          </div>
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        data-section="experience"
        className={`py-20 px-8 transition-all duration-1000 ${
          visibleSections.experience
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                onMouseEnter={() => setActiveCard(`exp-${index}`)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center gap-4">
                  <div className="p-2 bg-gray-700 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400">
                      {exp.company} | {exp.date}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-300 pl-4 border-l-2 border-purple-500 transform transition-all duration-300"
                      style={{
                        transform:
                          activeCard === `exp-${index}`
                            ? "translateX(8px)"
                            : "none",
                        transitionDelay: `${i * 100}ms`,
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        data-section="projects"
        className={`py-20 px-8 transition-all duration-1000 ${
          visibleSections.projects
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                onMouseEnter={() => setActiveCard(`project-${index}`)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
                ></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-gray-700 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                        {project.title}
                      </h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 mb-6">
                    {project.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-300 pl-4 border-l-2 border-purple-500 transform transition-all duration-300"
                        style={{
                          transform:
                            activeCard === `project-${index}`
                              ? "translateX(8px)"
                              : "none",
                          transitionDelay: `${i * 100}ms`,
                        }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 px-3 py-1 rounded-full text-sm transform transition-all duration-300 hover:scale-110 hover:rotate-3"
                        style={{
                          transitionDelay: `${i * 50}ms`,
                          transform:
                            activeCard === `project-${index}`
                              ? "translateX(4px)"
                              : "none",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        data-section="skills"
        className={`py-20 px-8 transition-all duration-1000 ${
          visibleSections.skills
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="group bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm transform transition-all duration-300 hover:scale-110 hover:bg-gray-600"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
