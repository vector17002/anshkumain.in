"use client"
import Link from "next/link";
import { useState } from "react";
import { BsArrowUp, BsPatchCheckFill } from "react-icons/bs";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }: { title: string, children ?: React.ReactNode }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <BsPatchCheckFill className="text-blue-500 mr-2" />

        <p className="font-medium text-gray-900 dark:text-gray-100 text-lg">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-300 ml-6 text-base">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2022</Year>
    <ul>
      <Step title="First physical semester 💣">
        Started my first physical semester at college. Was fun to visit college, got to know about societies and meet new people.
      </Step>
      <Step title="Started learning DSA">
        Started learning DSA from youtube and started solving problems on Leetcode.
      </Step>
      <Step title="Started learning MERN Stack">
        Joined a bootcamp to learn MERN Stack and started making simple projects.
      </Step>
    </ul>
    <Divider />
    <Year>2021</Year>
    <ul>
    <Step title="C and C++ 🙌🏻">
        Started learning logics and basic programming fundamentals with Object
        Oriented Programming. C was intimidating, C++ was fun.
      </Step>
      <Step title="HTML, CSS and JavaScript">
        Got to know about HTML,CSS and JavaScript from youtube. Started making simple websites.
      </Step>
    </ul>
    <Divider />
    <Year>2020</Year>
    <ul>
      <Step title="Completed 12th Grade 🔥">
         Completed 12th grade with 94.6% Marks. Got awarded from school and Delhi commissioner of police for the same.
      </Step>
      <Step title="Covid-19 and JEE 🤒">
        Lockdown started while I was having my JEE exam. Secured 93 percentile in JEE Mains.
      </Step>
      <Step title="College counselling">
        Counselled for  B.Tech in <span className="font-bold dark:text-white">Information Technology</span> from <span className="font-bold dark:text-white"> Bharati Vidyapeeth College of Engineering, affiliated to Guru Gobind Singh Indraprastha University, Delhi</span>.
      </Step>
    </ul>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Completed 10th Grade 📜">
        Completed 10th grade with 84.6% Marks.
      </Step>
      <Step title="My first step towards Engineering 🚀">
        Took Science Stream for further continuation of my education.
      </Step>
      <Step title="My second step towards Engineering 🚀">
        Got to know about JEE and started preparing for it along with managing my school studies.
      </Step>
    </ul>
    <Divider />
    <Year>2002</Year>
    <ul>
      <Step title="An Enginner was Born in India 👶🏼 🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 id="about" className="font-bold text-2xl md:text-5xl tracking-tight mb-4 mt-20 text-black dark:text-white">
        Personal Timeline
      </h3>
      <Year>2024</Year>
      <ul>
      <Step title="First offer - Successfully Placed ✨">
          After facing several challenges in securing opportunities due to circumstances out of my control, finally got my first offer from 
          <span className="font-bold dark:text-white"> <Link href="https://www.hashedin.com" target="__blank"> HashedIn by Deloitte.</Link> </span>
        </Step>
        <Step title="Multiple offers after many rejections. ✨">
          Received 2 offers in Hand. Both Off-Campus in the Software
          Developer roles. Chose  <span className="font-bold dark:text-white"> <Link href="https://www.tcs.com" target="__blank"> Tata Consultancy Services </Link> </span> to start my career.
        </Step>
        <Step title="Joining the company 🚀">
          Excited for joining TCS and starting my career as a Software Developer.
        </Step>
      </ul>
      <Divider />
      <Year>2023</Year>
      <ul>
        <Step title="Placements season started">
          Faced several rejections in on-campus placements due to circumstances out of my control. But I never gave up and kept on learning and improving.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <>
        <FullTimeline />
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(false)}
        >
          See Less
          <BsArrowUp className="h-4 w-4 ml-1" />
        </button>
        </>
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}