import React from "react";
import "./skill.css";

import Html from "../../assets/icons/html";
import Javascrip from "../../assets/icons/javascrip";
import Typescrip from "../../assets/icons/typescrip";
import Css from "../../assets/icons/css";
import Sass from "../../assets/icons/sass";
import Python from "../../assets/icons/python";
import Nuxtjs from "../../assets/icons/nuxtjs";
import Vuejs from "../../assets/icons/vuejs";
import Flutter from "../../assets/icons/flutter";
import Nestjs from "../../assets/icons/nestjs";
import Reacrjs from "../../assets/icons/reactjs";
import Mongodb from "../../assets/icons/mongodb";
import Mysql from "../../assets/icons/mysql";
import Firebase from "../../assets/icons/firebase";
import Figma from "../../assets/icons/figma";
import Photoshop from "../../assets/icons/photoshop";
import Postman from "../../assets/icons/postman";
import Dbeaver from "../../assets/icons/dbeaver";

const skillData = [
  {
    category: "Programming Languages",
    items: [
      { icon: Html, name: "HTML" },
      { icon: Javascrip, name: "Javascrip" },
      {
        icon: Typescrip,
        name: "Typescrip",
        props: { className: "w-[75px] h-[75px]" },
      },
      { icon: Css, name: "Css" },
      { icon: Sass, name: "Sass" },
      { icon: Python, name: "Python" },
    ],
  },
  {
    category: "Framework",
    items: [
      { icon: Vuejs, name: "Vue.js" },
      { icon: Nuxtjs, name: "Nuxt.js" },
      { icon: Reacrjs, name: "Reacr.js" },
      { icon: Flutter, name: "Flutter" },
      { icon: Nestjs, name: "Nest.js" },
    ],
  },
  {
    category: "Databases",
    items: [
      // { icon: Mongodb, name: "MongoDB" },
      { icon: Mysql, name: "MySQL" },
      { icon: Firebase, name: "Firebase" },
      { icon: Dbeaver, name: "Dbeaver" },
    ],
  },
  {
    category: "Tools",
    items: [
      { icon: Figma, name: "Figma" },
      { icon: Photoshop, name: "PhotoShop" },
      { icon: Postman, name: "Postman" },
    ],
  },
];

export default function Skill() {
  return (
    <div className="selection px-20 py-20 rounded-lg shadow-lg mb-52 bg-white">
      <div className="font-bold uppercase">
        <h1 className="text-5xl text-center"> Technical Skill </h1>
        <div className="pt-[50px]">
          <div className="space-y-16">
            {skillData.map((group, idx) => (
              <div className="flex justify-around" key={idx}>
                <div className="text-center space-y-8">
                  <p>{group.category}</p>
                  <div className={`grid grid-cols-2 items-center gap-10 md:grid-cols-3 lg:flex `}>
                    {group.items.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          className="skill flex flex-col items-center text-center space-y-3 hover:scale-125"
                          key={i}
                        >
                          {item.props ? <Icon {...item.props} /> : <Icon />}
                          <p>{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
