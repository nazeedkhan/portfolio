import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Certificate = () => {
const myCertificates = [
  {
    id: 1,
    title: "Class 10th Passing Certificate",
    issuer: "Dehradun Public School",
    date: "2018",
    url: "https://drive.google.com/file/d/1C6G-N607CV7Z8_6r56A8so7z9tWpXPLR/view?usp=sharing",
  },
  {
    id: 2,
    title: "Class 12th Passing Certificate",
    issuer: "Dehradun Public School",
    date: "2020",
    url: "https://drive.google.com/file/d/1XWoNugUA9crOPCNRrv_geoPYOJ0944EL/view?usp=sharing",
  },
  {
    id: 3,
    title: "B.Tech 8th Semester Certificate",
    issuer: "Jamia Millia Islamia",
    date: "2024",
    url: "https://drive.google.com/file/d/1hXQq8lYk7B7ZYRKN8ZaC1nHYJs1WzG8F/view?usp=sharing",
  },
  {
    id: 4,
    title: "Japanese Language Proficiency Test (JLPT) N3",
    issuer: "Japan Foundation",
    date: "2025",
    url: "https://drive.google.com/file/d/1AEC_iFJbRplN_5tM0QZ295j0dk_yJzb3/view?usp=drive_link",
  },
  {
    id: 5,
    title: "HTML, CSS & JavaScript Course Completion",
    issuer: "Course Certificate",
    date: "2023",
    url: "https://drive.google.com/file/d/184-XwhDxMUHh8BZlCJ1RjUaYsv7Lo6fd/view?usp=sharing",
  },
  {
    id: 6,
    title: "HackJMI Hackathon - Top 10 Finalist",
    issuer: "Jamia Millia Islamia",
    date: "2023",
    url: "https://drive.google.com/file/d/1XOoMnGDxyGygwsqd4lP2XH-w09xPE_d-/view?usp=drive_link",
  },
  {
    id: 7,
    title: "Software Engineer Experience Certificate",
    issuer: "Wincode India Pvt. Ltd.",
    date: "2026",
    url: "https://drive.google.com/file/d/19T_w2Ts1xH_yFHngPMxqaP0lGO_ll2Zc/view?usp=sharing",
  },
  {
    id: 8,
    title: "SAE JMI Certificate",
    issuer: "Jamia Millia Islamia",
    date: "2022",
    url: "https://drive.google.com/file/d/191wn6MT2I7slv-dtMKjPWMwKgH2bMBEb/view?usp=sharing",
  },
  {
    id: 9,
    title: "Internship Certificate",
    issuer: "Coretechtive",
    date: "2022",
    url: "https://drive.google.com/file/d/1yNrg0VGReHwPvl0T6ywG_eckiEwaWjaY/view?usp=sharing",
  },
];

  return (
    <>
      <section
        id="certificates"
        className="min-h-screen flex items-start overflow-hidden relative py-20"
      >
        <div className="container mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex flex-col lg:flex-row items-center">
            <div
              className="w-full flex justify-center items-center flex-col"
              data-aos="fade-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
                  Certifications
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold dark:text-white text-gray-900">
                My{" "}
                <span className="text-red-500 dark:text-red-400">
                  Certificates
                </span>
              </h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 border-t border-b border-gray-200/50 dark:border-zinc-800/50 w-full"
              >
                {myCertificates.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`p-3 sm:p-4 flex flex-col justify-between group relative transition-colors duration-300 hover:bg-red-500/5 dark:hover:bg-red-500/10 ${index < myCertificates.length - 1 ? "border-b" : ""} border-gray-200/50 dark:border-zinc-800/50`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                            <Award size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                              {item.title}
                            </h3>
                            <span className="text-sm font-medium text-gray-600 dark:text-zinc-400 block mt-0.5">
                              {item.issuer}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1.5 shrink-0 max-sm:border-t max-sm:border-gray-100/50 max-sm:dark:border-zinc-800/30">
                          <div className="flex items-center gap-1.5 text-md font-mono text-gray-500 dark:text-zinc-400">
                            <Calendar size={16} />
                            <span>{item.date}</span>
                          </div>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-md font-semibold text-green-600 dark:text-green-400 hover:underline"
                          >
                            See More <ExternalLink size={18} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificate;
