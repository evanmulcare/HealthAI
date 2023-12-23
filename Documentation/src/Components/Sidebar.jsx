import React from "react";
import { BiHealth } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const sections = [
    { title: "Welcome", links: ["Getting Started"] },
    {
      title: "HealthAI-Web",
      links: [
        "Registration",
        "Access restrictions",
        "HealthAI-predict Interface",
        "User Profiling",
        "Aggregation of Patient Data",
      ],
    },
    {
      title: "HealthAI-Predict",
      links: ["API", "Datasets", "Accuracy Reports"],
    },
    {
      title: "HealthAI-LLM",
      links: [
        "Open AI integration",
        "Machine Translation",
        "Doc-Bot",
        "System help",
        "Few shot learning",
      ],
    },
    {
      title: "HealthAI-App",
      links: [
        "Register-login",
        "Patients GP",
        "Insurance company",
        "Payment of subscription",
        "Request Professional",
        "Support",
        "HealthAI-Predict Interface",
        "Ratings-reviews",
      ],
    },
  ];
  const location = useLocation();

  return (
    <div className={`fixed bg-gray-800 h-screen overflow-y-scroll`}>
      <div className="flex flex-col">
        <div className="w-full border-b-2 border-gray-200"></div>
        <div className="flex overflow-x-hidden">
          <div className="p-4 text-white lg:w-64 lg:flex-shrink-0 md:w-56 md:flex-col">
            <div className="flex items-center mb-4">
              <BiHealth className="mr-2 text-3xl text-blue-500" />
              <span className="text-2xl font-semibold text-white">
                HealthAI<span className="text-gray-600"> Docs</span>
              </span>
            </div>

            {sections.map((section, index) => (
              <section key={index}>
                <h3 className="m-1 text-gray-600 text-md">{section.title}</h3>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={`/${section.title.toLowerCase()}/${link
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className={`${
                      location.pathname ===
                      `/${section.title.toLowerCase()}/${link
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                        ? "bg-gray-200 text-gray-800"
                        : "hover:bg-gray-200 hover:text-gray-800"
                    } font-medium text-sm items-center rounded-lg px-2 py-2.5 block md:px-4 transition-all duration-200 cursor-pointer`}
                  >
                    <span>{link}</span>
                  </Link>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
