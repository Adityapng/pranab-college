import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { Library } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar({ onLinkClick }) {
  const boxRef = useRef(null);
  const [currentNav, setCurrentNav] = useState(null);

  const routedOption = (option) => {
    if (option === "Mission & Vision") {
      return "/home/missionVision";
    }
    if (option === "Principal's Desk") {
      return "/home/principalsDesk";
    }
    if (option === "Governing Body") {
      return "/home/governingBody";
    }
    if (option === "Administration") {
      return "/home/administration";
    }
    if (option === "Procedure and Policies") {
      return "/home/procedureNpolicies";
    }
    if (option === "Association") {
      return "/home/association";
    }
    if (option === "Courses Offered") {
      return "/home/coursesOffered";
    }
    if (option === "Code of Conduct & Dress Code") {
      return "/home/codeOfConduct";
    }
    if (option === "About The Sponsoring Society") {
      return "/about/aboutTheSponsoringSociety";
    }
    if (option === "Teaching Faculty") {
      return "/about/teachingEmployees";
    }
    if (option === "Non-teaching Staff") {
      return "/about/nonTeachingEmployees";
    }
    if (option === "Contact") {
      return "/about/contact";
    }
    if (option === "Online Admissions (under construction)") {
      return "/onlineAdmissions/onlineAdmissions";
    }
    if (option === "Pay Your Fees (under construction)") {
      return "/onlineAdmissions/underConstruction";
    }
    if (option === "Pay Your Bus Fees (under construction)") {
      return "/onlineAdmissions/underConstruction";
    }
    if (option === "View Application Status (under construction)") {
      return "/onlineAdmissions/underConstruction";
    }
    if (option === "Admission Procedure") {
      return "/onlineAdmissions/admissionProcedure";
    }
    if (option === "Fee Structure") {
      return "/onlineAdmissions/feeStructure";
    }
    if (option === "Pranab College Students Union (PCSU)") {
      return "/studentServices/PCSU";
    }
    if (option === "Scholarship & Freeship") {
      return "/studentServices/scholarshipFreeship";
    }
    if (option === "Bus Service") {
      return "/studentServices/busService";
    }
    if (option === "SSR") {
      return "/NAAC/SSR";
    }
    if (option === "IQAC Meeting and ATR") {
      return "/NAAC/iqacAtr";
    }
    if (option === "Student Satisfaction Survey") {
      return "/NAAC/StudentSatisfactionSurvey";
    }
    if (option === "Course Outcomes") {
      return "/NAAC/courseOutcomes";
    }
    if (option === "NAAC Status") {
      return "/NAAC/naacStatus";
    }
    if (option === "Feedback") {
      return "/NAAC/feedback";
    }
    if (option === "Best Practices") {
      return "/NAAC/bestPractices";
    }
    if (option === "Academic Audit") {
      return "/NAAC/academicAudit";
    }
    if (option === "Academic Calender") {
      return "/calender/academicCalender";
    }
    if (option === "Holiday List") {
      return "/calender/holidayList";
    }
    if (option === "Academic Record (Rank Holders)") {
      return "/resources/academicRecord";
    }
    if (option === "Magazines") {
      return "/resources/magazines";
    }
    if (option === "Journal") {
      return "/resources/journal";
    }
    if (option === "Prospectus") {
      return "/resources/prospectus";
    }
    if (option === "Results") {
      return "/resources/results";
    }
    if (option === "Commerce") {
      return "/department/commerce";
    }
    if (option === "Economics") {
      return "/department/economics";
    }
    if (option === "Education") {
      return "/department/education";
    }
    if (option === "English") {
      return "/department/english";
    }
    if (option === "History") {
      return "/department/history";
    }
    if (option === "Political Science") {
      return "/department/polSci";
    }
    if (option === "Sociology") {
      return "/department/sociology";
    }
    if (option === "Syllabus") {
      return "https://nagalanduniversity.ac.in/English/node/69";
    }
    if (option === "Question Bank") {
      return "/library/questionBank";
    }
    if (option === "ILMS") {
      return "/library/ILMS";
    }
    if (option === "List of Committees and its Members") {
      return "/committees/list";
    }
    if (option === "NSS") {
      return "/committees/NSS";
    }
    if (option === "IQAC") {
      return "/committees/IQAC";
    }
    if (option === "Anti-Ragging Committee") {
      return "/committees/antiRagging";
    }
    if (option === "Career Guidance and Placement Cell") {
      return "/committees/careerGuidancePlacement";
    }
    if (option === "Anti-Sexual Harassment Committee") {
      return "/committees/antiSexualHarassment";
    }
    if (option === "Sports Committee") {
      return "/committees/sports";
    }
    if (option === "Eco Club") {
      return "/committees/eco";
    }
    if (option === "Library Advisory Committee") {
      return "/committees/libraryAdvisory";
    }
    if (option === "Red Ribbon Club") {
      return "/committees/redRibbon";
    }
    if (option === "Women Empowerment Cell") {
      return "/committees/womenEmpowerment";
    }
    if (option === "Admission Committee") {
      return "/committees/admission";
    }
    if (option === "Examination Committee") {
      return "/committees/examination";
    }
    if (option === "Research Committee") {
      return "/committees/research";
    }
    if (option === "Cultural Committee") {
      return "/committees/cultural";
    }
    if (option === "Alumni Association") {
      return "/committees/alumniAssociation";
    }
    if (option === "Grievance Redressal Committee") {
      return "/committees/grievanceRedressal";
    }
    if (option === "Cyber Cell") {
      return "/committees/cyber";
    }
    if (option === "Entrepreneurship Cell") {
      return "/committees/entrepreneurship";
    }
    if (option === "Innovation and Development Cell") {
      return "/committees/innovationDevelopement";
    }
    if (option === "Literary Club") {
      return "/committees/literary";
    }
    if (option === "Magazine Committee") {
      return "/committees/magazine";
    }
    if (option === "Mentor - Mentee Cell") {
      return "/committees/mentorMentee";
    }
    if (option === "Parents - Teachers Association") {
      return "/committees/parentsTeachers";
    }
    if (option === "Publicity and Media Cell") {
      return "/committees/publicityMedia";
    }
    if (option === "Sports") {
      return "/gallery/sports";
    }
    if (option === "Classroom & Computer Laboratory") {
      return "/gallery/classroom";
    }
    if (option === "Health Seminar") {
      return "/gallery/healthSeminar";
    }
    if (option === "Cultural Day") {
      return "/gallery/culturalDay";
    }
    if (option === "NSS & RRC") {
      return "/gallery/NSSandRRC";
    }
    if (option === "Study Tours") {
      return "/gallery/studyTours";
    }
    if (option === "Charity Drive") {
      return "/gallery/charityDrive";
    }
    if (option === "Cleanliness Drive") {
      return "/gallery/cleanlinessDrive";
    }
    if (option === "Freshers Social") {
      return "/gallery/freshersSocial";
    }
  };

  const navItems = {
    Home: [
      "Mission & Vision",
      "Principal's Desk",
      "Governing Body",
      "Administration",
      "Procedure and Policies",
      "Association",
      "Courses Offered",
      "Code of Conduct & Dress Code",
    ],
    About: [
      "About The Sponsoring Society",
      "Teaching Faculty",
      "Non-teaching Staff",
      "Contact",
    ],
    Online_Admissions: [
      "Online Admissions (under construction)",
      "Pay Your Fees (under construction)",
      "Pay Your Bus Fees (under construction)",
      "View Application Status (under construction)",
      "Admission Procedure",
      "Fee Structure",
    ],
    Student_Services: [
      "Pranab College Students Union (PCSU)",
      "Scholarship & Freeship",
      "Bus Service",
    ],
    NAAC: [
      "SSR",
      "IQAC Meeting and ATR",
      "Student Satisfaction Survey",
      "Course Outcomes",
      "NAAC Status",
      "Feedback",
      "Best Practices",
      "Academic Audit",
    ],
    Calender: ["Academic Calender", "Holiday List"],
    Resources: [
      "Academic Record (Rank Holders)",
      "Magazines",
      "Journal",
      "Prospectus",
      "Results",
    ],
    Department: [
      "Commerce",
      "Economics",
      "Education",
      "English",
      "History",
      "Political Science",
      "Sociology",
    ],
    Library: ["Syllabus", "Question Bank", "ILMS"],
    Committees: [
      "List of Committees and its Members",
      "Admission Committee",
      "Alumni Association",
      "Anti-Ragging Committee",
      "Anti-Sexual Harassment Committee",
      "Career Guidance and Placement Cell",
      "Cultural Committee",
      "Cyber Cell",
      "Eco Club",
      "Entrepreneurship Cell",
      "Examination Committee",
      "Grievance Redressal Committee",
      "Innovation and Development Cell",
      "Library Advisory Committee",
      "Literary Club",
      "Magazine Committee",
      "Mentor - Mentee Cell",
      "NSS",
      "IQAC",
      "Parents - Teachers Association",
      "Publicity and Media Cell",
      "Red Ribbon Club",
      "Research Committee",
      "Sports Committee",
      "Women Empowerment Cell",
    ],
    Gallery: [
      "Sports",
      "Classroom & Computer Laboratory",
      "Health Seminar",
      "Cultural Day",
      "NSS & RRC",
      "Study Tours",
      "Charity Drive",
      "Cleanliness Drive",
      "Freshers Social",
    ],
  };

  const handleNavClick = (nav) => {
    if (nav === currentNav) {
      // If the current nav item is clicked again, close it
      setCurrentNav(null);
      gsap.to(boxRef.current, {
        duration: 0.5,
        opacity: 0,
        height: 0,
        paddingBottom: 0,
        paddingTop: 0,
        ease: "power1.inOut",
        display: "none",
      });
    } else {
      // Open the clicked nav item
      setCurrentNav(nav);
      gsap.to(boxRef.current, {
        duration: 0.5,
        opacity: 1,
        height: "auto",
        paddingBottom: "20px",
        paddingTop: "20px",
        ease: "power1.inOut",
        display: "block",
      });
    }
  };

  return (
    <div className="z-[9999] absolute w-80 h-screen right-0 p-4 overflow-y-auto text-black dark:text-white bg-[#ffffff1a] bg-opacity-50 backdrop-blur-md dark:bg-[#4948481a]">
      <div className="relative z-50">
        {Object.keys(navItems).map((nav) => (
          <div key={nav} className="z-50 ">
            <div
              id={nav}
              onClick={() => handleNavClick(nav)}
              className="z-50 p-4 text-xl font-semibold cursor-pointer font-inter"
            >
              {nav.replace(/_/g, " ")}
            </div>
            {currentNav === nav && (
              <div
                ref={boxRef}
                id="options"
                className="z-50 p-4 font-medium text-black rounded-md dark:text-white text-md"
              >
                {navItems[currentNav].map((option, index) => (
                  <Link to={routedOption(option)}>
                    <div
                      key={index}
                      className="z-50 p-2 pl-5 rounded-md "
                      // onClick={onLinkClick}
                    >
                      {option}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
