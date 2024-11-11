import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Terminal,
  Coffee,
  Smartphone,
  Car,
  Heart,
} from "lucide-react";

// Background Animation Component from 1st Version
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-emerald-950 to-green-950" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl animate-float" />
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
};

const Portfolio = () => {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    experience: false,
    projects: false,
    skills: false,
  });

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Principal Financial Group",
      date: "May - August 2024",
      tech: ["Java", "Python", "AWS"],
      icon: <Code className="w-6 h-6" />,
      points: [
        "Implemented a React website, featuring secure login and chat capabilities, where user queries were processed by AWS Lambda functions written in Python, leveraging the Llama3 LLM for accurate, context-aware responses.",
        "Developed dynamic online applications on the Unqork platform, streamlining workflows and enhancing user experience for life and disability insurance clients through optimized interfaces.",
        "Automated critical testing processes using Selenium and Java Robot, significantly boosting testing speed and accuracy, resulting in improved overall software quality and stability",
        "Optimized AWS Lambda functions written in Python by actively monitoring CloudWatch metrics to reduce invocation frequency and minimize runtime, achieving cost efficiency in serverless operations.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Farmers Mutual Hail",
      date: "May - August 2023",
      tech: ["Java", "SQL", "HTML/CSS"],
      icon: <Terminal className="w-6 h-6" />,
      points: [
        "Engineered a fully automated system in Java to streamline the IT department’s annual user audit process, extending functionality to include non-AD employees (e.g., contractors), significantly improving audit efficiency and accuracy.",
        "Developed a  Java ”flagging” mechanism, empowering users to mark policies for printing, enhancing workflow control and reducing document processing errors.",
        "Implemented a document transmission management system using SQL and Java, allowing precise control over customer document dispatch with built-in safeguards to prevent accidental transmissions.",
        "Redesigned the customer-facing policy information page using HTML and CSS, delivering an optimized, user-friendly experience that significantly enhanced accessibility and engagement.",
      ],
    },
    {
      title: "Software Engineer Peer Mentor",
      company: "Iowa State University",
      date: "April 2022 - Current",
      tech: ["C", "Git", "React"],
      icon: <Coffee className="w-6 h-6" />,
      points: [
        "Supported the growth of first-year software engineering students by offering guidance, resources, and help with core concepts, making the transition to college smoother.",
        "Planned and led hands-on workshops and group study sessions, building a collaborative learning environment and helping foster a supportive community among peers in the program.",
      ],
    },
  ];

  const projects = [
    {
      title: "Spinder",
      description:
        "Mobile app integrating Spotify API for personalized song recommendations with swipe functionality",
      tech: ["Java", "Spotify API", "SpringBoot"],
      color: "from-emerald-500 to-green-700",
      icon: <Smartphone className="w-6 h-6" />,
      points: [
        "Developed a music discovery app using Java and Spring Boot, integrating Spotify API for personalized song recommendations and playlist creation based on user input.",
        "Built a user profile system with SQL, enabling users to track top songs, connect with friends, and interact via a chat feature, all deployed with CI/CD.",
      ],
    },
    {
      title: "AWS DeepRacer",
      description:
        "Developed and trained an autonomous racing model using reinforcement learning",
      tech: ["Python", "AWS", "Machine Learning"],
      color: "from-green-500 to-emerald-700",
      icon: <Car className="w-6 h-6" />,
      points: [
        "Trained and fine-tuned an AWS DeepRacer model using Python and Reinforcement Learning, optimizing the autonomous vehicle’s decision-making for improved racing performance in a simulated environment.",
        "Utilized a range of AWS services, including S3 for data storage and Reinforcement Learning for model training, enabling continuous improvement through real-time data feedback and performance metrics.",
      ],
    },
    {
      title: "Devs Do Good Hackathon",
      description:
        "Led development of events page for non-profit organization website",
      tech: ["React", "JavaScript", "Bootstrap"],
      color: "from-emerald-600 to-green-800",
      icon: <Heart className="w-6 h-6" />,
      points: [
        "Directed the frontend development of the events page, ensuring a seamless user experience.",
        "Applied responsive design techniques using Bootstrap to optimize accessibility across devices.",
        "Delivered a fully functional site within 24 hours, meeting tight deadlines with efficiency.",
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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [target.dataset.section as string]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    setVisibleSections((prev) => ({
      ...prev,
      hero: true,
    }));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-emerald-50">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          data-section="hero"
          className={`min-h-screen flex flex-col items-center justify-center p-8 transition-all duration-1000 ${
            visibleSections.hero
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-green-800 blur-3xl opacity-10"></div>
            <h1 className="text-6xl font-bold mb-4 leading-tight relative animate-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Nayma Garcia Virgen
            </h1>
            <h2 className="text-2xl mb-8 text-emerald-200">
              Software Engineer
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:nayma.garciav@gmail.com"
                className="transform hover:scale-110 hover:rotate-6 transition-all duration-300 text-emerald-400 hover:text-emerald-300"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/naymagarcia"
                className="transform hover:scale-110 hover:-rotate-6 transition-all duration-300 text-green-400 hover:text-green-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Nayma-Garcia"
                className="transform hover:scale-110 hover:rotate-6 transition-all duration-300 text-teal-400 hover:text-teal-300"
              >
                <Github size={24} />
              </a>
            </div>
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-emerald-400" />
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
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  onMouseEnter={() => setActiveCard(`exp-${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-700 to-green-700 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="p-2 bg-gray-800 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                        {exp.title}
                      </h3>
                      <p className="text-emerald-200">
                        {exp.company} | {exp.date}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-emerald-100 pl-4 border-l-2 border-emerald-600 transform transition-all duration-300"
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
                  {/* Render tech stack icons */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {(exp.tech || []).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 px-3 py-1 rounded-full text-sm transform transition-all duration-300 hover:scale-110 hover:rotate-3 text-emerald-200"
                        style={{
                          transitionDelay: `${i * 50}ms`,
                          transform:
                            activeCard === `exp-${index}`
                              ? "translateX(4px)"
                              : "none",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  onMouseEnter={() => setActiveCard(`project-${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-700 to-green-700 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-gray-800 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                          {project.title}
                        </h3>
                        <p className="text-emerald-200">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 mb-6">
                      {project.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-emerald-100 pl-4 border-l-2 border-emerald-600 transform transition-all duration-300"
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
                          className="bg-gray-800 px-3 py-1 rounded-full text-sm transform transition-all duration-300 hover:scale-110 hover:rotate-3 text-emerald-200"
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
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div
                  key={category}
                  className="group bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 px-3 py-1 rounded-full text-sm transform transition-all duration-300 hover:scale-110 hover:bg-gray-700 text-emerald-200"
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
    </div>
  );
};

export default Portfolio;
