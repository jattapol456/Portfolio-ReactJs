import React from "react";
import profile from "../../assets/images/Profile.jpg";
import "./aboutme.css";

export default function Aboutme() {
  return (
    <div className="selection px-20 py-20 rounded-lg shadow-lg mb-52 bg-white">
      <div className="flex sm:justify-between sm:items-center flex-col sm:flex-row">
        <div className="sm:w-1/2 w-full sm:order-first order-last mt-12 sm:mt-0">
          <div className="jattapol font-bold uppercase space-y-1 text-center">
            <h1 className="">Hi, I am Jattapol.</h1>
            <h1 className="">Hi, I am Jattapol.</h1>
          </div>
          <div className="mt-2">
            <p>
               — I'm a front-end developer who loves building clean, user-friendly
              websites. I’ve worked on internal tools, landing pages, and Web3
              features using frameworks like React, Vue, and Next.js. I enjoy
              solving real problems with simple, effective UIs.
            </p>
          </div>
          <div className="icons pt-12 justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=100009528041096"
              target="_blank"
              className="icon icon--facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>

            <a
              href="https://github.com/jattapol456"
              target="_blank"
              className="icon icon--github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>

            <a
              href="https://gitlab.com/jattapol456"
              target="_blank"
              className="icon icon--gitlab"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-gitlab"
                viewBox="0 0 512 512"
              >
                <path d="M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-6 justify-center">
          <img
            src={profile}
            alt="profile"
            className="object-cover h-80 w-80 rounded-full"
          />
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold">Jattapol Suayoosay</p>
            <p className="text-date text-sm font-bold">February 27th, 2000</p>
            <p className="text-developer text-lg font-bold">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
