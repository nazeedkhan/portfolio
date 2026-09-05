import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import  ai_interview from "../assets/project_images/ai_interview.png";
import  music from "../assets/project_images/music.png";
import  notes_app from "../assets/project_images/notes_app.png";
import  news_app from "../assets/project_images/news_app.png";
import  weather from "../assets/project_images/weather.png";
import  github_finder from "../assets/project_images/github_finder.png";
import  expense_tracker from "../assets/project_images/expense_tracker.png";
import  book from "../assets/project_images/book.png";
import  landing_page from "../assets/project_images/landing_page.png";
import  quiz from "../assets/project_images/quiz.png";
import  color from "../assets/project_images/color.png";
import  password from "../assets/project_images/password.png";
import  currency from "../assets/project_images/currency.png";
import  clock from "../assets/project_images/clock.png";
import  calculator from "../assets/project_images/calculator.png";

const Projects = () => {
  const scrollRef = useRef(null);

  const infiniteProjects = [
    {
      id: 1,
      image: ai_interview,
      title: "InterviewPilot.AI",
      desc: "An AI-powered interview practice platform that helps users prepare for HR and technical interviews with AI-generated questions, resume analysis, interview sessions, and performance feedback.",
      tags: [
        "React JS",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Google Gemini API",
      ],
      githubUrl: "https://github.com/nazeedkhan/InterviewPilotAI",
      liveUrl: "https://interviewpilotai-eight.vercel.app/",
    },
    {
      id: 2,
      image: music,
      title: "Music App",
      desc: "A music application built with React using Context API and Redux Toolkit for managing application state and providing a smooth music browsing experience.",
      tags: ["React JS", "Context API", "Redux Toolkit"],
      githubUrl: "https://github.com/nazeedkhan/music-app",
      liveUrl: "https://music-app-nu-dusky.vercel.app/",
    },
    {
      id: 3,
      image: notes_app,
      title: "Notes Application",
      desc: "A personal notes application built with React.js and LocalStorage that allows users to create, manage, search, and organize their notes.",
      tags: ["React JS", "LocalStorage", "CSS", "Tailwind CSS"],
      githubUrl: "https://github.com/nazeedkhan/personal-notes-app",
      liveUrl: "https://personal-notes-app-ebon.vercel.app/",
    },
    {
      id: 4,
      image: news_app,
      title: "News App",
      desc: "A news application developed with React that fetches and displays news articles through an API with a responsive user interface.",
      tags: ["React JS", "Tailwind CSS", "DaisyUI", "News API"],
      githubUrl: "https://github.com/nazeedkhan/News-App",
      liveUrl: "#",
    },
    {
      id: 5,
      image: weather,
      title: "Weather Application",
      desc: "A weather application that allows users to search for locations and view current weather information using a weather API.",
      tags: ["React JS", "Tailwind CSS", "Weather API"],
      githubUrl: "https://github.com/nazeedkhan/weather-application",
      liveUrl: "https://weather-application-xi-pied.vercel.app/",
    },
    {
      id: 6,
      image: github_finder,
      title: "GitHub Finder",
      desc: "A GitHub profile finder application that allows users to search for GitHub developers and view their profile information using the GitHub API.",
      tags: ["React JS", "API", "GitHub API", "CSS", "Tailwind CSS"],
      githubUrl: "https://github.com/nazeedkhan/GithubDev-finder",
      liveUrl: "https://github-finder-application-umber.vercel.app/",
    },
    {
      id: 7,
      image: expense_tracker,
      title: "Expense Tracker",
      desc: "An expense tracking application that helps users manage and monitor their income and expenses through an easy-to-use interface.",
      tags: ["React JS", "JavaScript", "Tailwind CSS", "Responsive"],
      githubUrl: "https://github.com/nazeedkhan/ExpenseTracker",
      liveUrl: "https://expense-tracker-five-sigma-40.vercel.app/",
    },
    {
      id: 8,
      image: book,
      title: "Book Recommendations",
      desc: "A book recommendation application with pagination and loading states that allows users to browse and discover books.",
      tags: ["React JS", "API", "Pagination"],
      githubUrl: "https://github.com/nazeedkhan/book-recommendations",
      liveUrl: "https://book-recommendations-nine.vercel.app/",
    },
    {
      id: 9,
      image: landing_page,
      title: "Responsive Landing Page",
      desc: "A modern and responsive landing page developed with React and Tailwind CSS, designed to provide a clean user experience across different screen sizes.",
      tags: ["React JS", "Tailwind CSS", "Responsiveness"],
      githubUrl:
        "https://github.com/nazeedkhan/React_tailwind_Learning_landing_page",
      liveUrl: "https://responsive-landing-page-frontend.netlify.app/",
    },
    {
      id: 10,
      image: quiz,
      title: "Quiz App with Timeout",
      desc: "An interactive quiz application with a countdown timer, built using React.js and Tailwind CSS to provide an engaging quiz experience.",
      tags: ["React JS", "Tailwind CSS", "Javascript"],
      githubUrl: "https://github.com/nazeedkhan/Quiz_with_timeout",
      liveUrl: "https://quiz-with-timeout.netlify.app/",
    },
    {
      id: 11,
      image: color,
      title: "Color Palette Changer",
      desc: "An interactive color palette application built with React.js and Tailwind CSS that allows users to generate and change colors dynamically.",
      tags: ["React JS", "Tailwind CSS", "Hooks"],
      githubUrl: "https://github.com/nazeedkhan/color-palette-changer",
      liveUrl: "https://color-palette-changer.netlify.app/",
    },
    {
      id: 12,
      image: password,
      title: "Password Generator",
      desc: "A password generator application built with React and Tailwind CSS that allows users to generate customizable and secure passwords.",
      tags: ["React JS", "Tailwind CSS"],
      githubUrl: "https://github.com/nazeedkhan/password_generator",
      liveUrl: "https://advanced-passwords-generator.netlify.app/",
    },
    {
      id: 13,
      image: currency,
      title: "Currency Converter",
      desc: "A responsive currency converter built with HTML, CSS, and JavaScript that allows users to convert values between different currencies.",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      githubUrl: "https://github.com/nazeedkhan/CurrencyConverter",
      liveUrl: "https://currency-converter-responsible.netlify.app/",
    },
    {
      id: 14,
      image: clock,
      title: "Digital Clock",
      desc: "A responsive digital clock built with HTML, CSS, and JavaScript that displays the current time with a clean and simple interface.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/nazeedkhan/My-Digital-Clock-01",
      liveUrl: "https://my-digital-clock-01.netlify.app/",
    },
    {
      id: 15,
      image: calculator,
      title: "Calculator",
      desc: "A responsive calculator application developed with HTML, CSS, and JavaScript for performing basic mathematical calculations.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/nazeedkhan/calculator",
      liveUrl: "https://calculator-just.netlify.app/",
    },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth;
      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (scrollRef.current) {
          const maxScroll = scrollRef.current.scrollWidth / 3;
          if (scrollRef.current.scrollLeft >= maxScroll * 2) {
            scrollRef.current.scrollLeft = maxScroll;
          } else if (scrollRef.current.scrollLeft <= 0) {
            scrollRef.current.scrollLeft = maxScroll;
          }
        }
      }, 400);
    }
  };

  return (
    <>
      <section
        id="projects"
        className="min-h-screen py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold dark:text-white text-gray-900">
                My{" "}
                <span className="text-red-500 dark:text-red-400">Projects</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <button
                className="p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200 border-gray-800 dark:text-white text-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500/10 dark:hover:bg-red-500/10"
                onClick={() => handleScroll("left")}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200 border-gray-800 dark:text-white text-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500/10 dark:hover:bg-red-500/10"
                onClick={() => handleScroll("right")}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 scrollbar-none snap-mandatory overflow-hidden w-full px-4"
          >
            {infiniteProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] shrink-0 snap-start group rounded-3xl overflow-hidden border-2 transition-all duration-300 dark:border-zinc-800/60 border-gray-100 dark:bg-zinc-900/40 bg-white hover:border-red-500/50 dark:hover:border-red-500/50 hover:shadow-[0_20px_40px_rgba(220,38,38,0.15)] flex flex-col "
              >
                <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col justify-between grow min-h-50">
                  <div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white text-gray-900 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 dark:text-gray-400 text-gray-600 line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded-full font-mono dark:bg-red-500/10 bg-red-500/5 dark:text-red-300 text-red-600 "
                        key={i}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-10 pt-2 border-t dark:border-zinc-800/80 border-gray-100 mt-4 w-full justify-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-md font-medium transition-colors duration-300 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black"
                    >
                      <FaGithub size={22} />
                      Github Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-md font-medium transition-colors duration-300 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black"
                    >
                      <ExternalLink size={22} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
