import React from "react";
import "./experienc.css";

export default function Experienc() {
  return (
    <div className="selection px-20 py-20 rounded-lg shadow-lg mb-52 bg-white">
      <div className="font-bold uppercase">
        <h1 className="text-5xl text-center"> Experience </h1>
        <div className="pt-[50px]">
          <div className="flex justify-around first-letter:pt-12">
            <div className="space-y-20 border- border-b-4 pb-[50px]">
              <div className="flex">
                <div className="border- border-r-4 pr-10 pt-3">
                  <p className="unactive-box">04 - 05/2021</p>
                </div>
                <div className="pl-10">
                  <p className="text-2xl">Fullstack Developer (Internship)</p>
                  <p className="text-2xl text-sub-title">
                    OneDee Solution Co., Ltd.,
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="border- border-r-4 pr-10 pt-3">
                  <p className="unactive-box">03/2021</p>
                </div>
                <div className="pl-10">
                  <p className="text-2xl">Hackathon Boot Camp (Attend)</p>
                  <p className="text-2xl text-sub-title">
                    20Scoops CNX Co., Ltd.,
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="border- border-r-4 pr-10 pt-3">
                  <p className="unactive-box">04/2022 - current</p>
                </div>
                <div className="pl-10">
                  <p className="text-2xl">Front-end Developer (Internship)</p>
                  <p className="text-2xl text-sub-title">
                    OneDee Solution Co., Ltd.,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
