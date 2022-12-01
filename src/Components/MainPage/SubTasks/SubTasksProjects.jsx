import React from "react";
import "./SubTasksProjects.css";
import ProgressBar from "@ramonak/react-progress-bar";
import StagesComponents from "./StagesComponents";
import data from "./SubTask.json";

function SubTasksProjects() {
  return (
    <div className="subtask_projects">
      <div className="subprojects_sec1">
        <div className="subprojects_sec1left">
          <p className="subprojects_sec1left_heading">Udaan Project 1</p>
          <p className="subprojects_sec1left_subheading">
            460 Pages I 6 Sub-Tasks I Deadline: 2nd December, 2021
          </p>
          <ProgressBar
            baseBgColor="#E4E4E4"
            bgColor="#fb5517"
            height="15px"
            completed={60}
          />
          <p className="subprojects_sec1left_subheading2">
            Create sub-tasks to get started
          </p>
        </div>
        <div className="subprojects_sec1right">
          <svg
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="47.2912" cy="47.3058" r="46.383" fill="#365175" />
            <path
              d="M63.291 43.3057V66.3057C63.291 66.9623 63.1617 67.6125 62.9104 68.2191C62.6591 68.8257 62.2908 69.3769 61.8265 69.8412C61.3623 70.3055 60.8111 70.6738 60.2044 70.9251C59.5978 71.1763 58.9476 71.3057 58.291 71.3057H28.291C26.9649 71.3057 25.6932 70.7789 24.7555 69.8412C23.8178 68.9035 23.291 67.6317 23.291 66.3057V36.3057C23.291 34.9796 23.8178 33.7078 24.7555 32.7701C25.6932 31.8324 26.9649 31.3057 28.291 31.3057H49.226"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M72.7837 21.962C72.601 21.7613 72.3796 21.5997 72.1327 21.487C71.8858 21.3743 71.6187 21.3128 71.3474 21.3062C71.0761 21.2997 70.8063 21.3482 70.5543 21.4489C70.3023 21.5496 70.0733 21.7003 69.8812 21.892L68.3349 23.4307C68.1475 23.6182 68.0423 23.8725 68.0423 24.1376C68.0423 24.4027 68.1475 24.6569 68.3349 24.8445L69.7524 26.2595C69.8453 26.3528 69.9558 26.4269 70.0774 26.4774C70.199 26.528 70.3295 26.554 70.4612 26.554C70.5929 26.554 70.7233 26.528 70.8449 26.4774C70.9666 26.4269 71.077 26.3528 71.1699 26.2595L72.6774 24.7595C73.4399 23.9982 73.5112 22.7582 72.7837 21.962ZM65.2087 26.5557L42.6437 49.0807C42.5069 49.217 42.4074 49.3861 42.3549 49.572L41.3112 52.6807C41.2862 52.7651 41.2844 52.8546 41.306 52.9399C41.3277 53.0251 41.372 53.103 41.4342 53.1652C41.4964 53.2274 41.5742 53.2717 41.6595 53.2933C41.7448 53.315 41.8343 53.3132 41.9187 53.2882L45.0249 52.2445C45.2107 52.192 45.3799 52.0925 45.5162 51.9557L68.0412 29.3882C68.2496 29.1776 68.3665 28.8932 68.3665 28.597C68.3665 28.3007 68.2496 28.0163 68.0412 27.8057L66.7974 26.5557C66.5865 26.3454 66.3009 26.2273 66.003 26.2273C65.7052 26.2273 65.4196 26.3454 65.2087 26.5557Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="subprojects_sec2">
        <div className="subprojects_lines"></div>
        <div className="subprojects_sec2_left">
          {data.Stages.map(() => (
            <StagesComponents />
          ))}
        </div>
        <div className="subprojects_sec2_right"></div>
      </div>
    </div>
  );
}

export default SubTasksProjects;
