import React from "react";
import "./experienc.css";

const experienceData = [
  {
    date: "04/2023 - Present",
    job: "Front-end Developer (Full-time)",
    company: "Circle A Co., Ltd.",
    description: (
      <div className="mt-3 text-base">
        <ul className="list-disc pl-5">
          <li>Responsible for developing and maintaining systems related to employee data management.</li>
          <li>Developed functions for employee data management, job applications, and membership systems.</li>
          <li>Built profile management and customization systems for users.</li>
          <li>Developed systems for connecting with Web3 and Smart Contracts.</li>
        </ul>
      </div>
    )
  },
  {
    date: "04/2022 - 10/2022",
    job: "Front-end Developer (Internship)",
    company: "OneDee Solution Co., Ltd.",
    description: (
      <div className="mt-3 text-base">
        <ul className="list-disc pl-5">
          <li>Created workflows for employee data management.</li>
        </ul>
      </div>
    )
  },
  {
    date: "03/2021",
    job: "Hackathon Boot Camp (Attend)",
    company: "20Scoops CNX Co., Ltd.",
    description: (
      <div className="mt-3 text-base">
        <ul className="list-disc pl-5">
          <li>Participated in Hackathon Boot Camp to learn teamwork and enhance technical problem-solving skills.</li>
          <li>Practiced presentation skills and developed new ideas to create projects within a limited timeframe.</li>
        </ul>
      </div>
    )
  },
  {
    date: "04/2021 - 05/2021",
    job: "Full-stack Developer (Internship)",
    company: "OneDee Solution Co., Ltd.",
    description: (
      <div className="mt-3 text-base">
        <ul className="list-disc pl-5">
          <li>Developed a real estate listing management system with an efficient search functionality.</li>
        </ul>
      </div>
    )
  }
];

export default function Experienc() {
  return (
    <div className="selection px-20 py-20 rounded-lg shadow-lg mb-52 bg-white">
      <div className="font-bold uppercase">
        <h1 className="text-5xl text-center"> Experience </h1>
        <div className="pt-[50px]">
          <div className="flex justify-around first-letter:pt-12">
            <div className="space-y-20 border- border-b-4 pb-[50px]">
              {experienceData.map((exp, idx) => (
                <div className="flex" key={idx}>
                  <div className="border- border-r-4 pr-10 pt-3 w-[150px]">
                    <p className="unactive-box">{exp.date}</p>
                  </div>
                  <div className="pl-10">
                    <p className="text-2xl">{exp.job}</p>
                    <p className="text-2xl text-sub-title">{exp.company}</p>
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}