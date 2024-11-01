import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Testimonial.css";

import Slider from "react-slick";

const itokaStudent = "/assets/testimonials/students/itoka.JPG";
const loangamStudent = "/assets/testimonials/students/loangam.JPG";
const ngunnonStudent = "/assets/testimonials/students/ngunnon.JPG";
const somStudent = "/assets/testimonials/students/som.JPG";
const kedaraiStudent = "/assets/testimonials/students/kedarai.jpeg";
const veronicaStudent = "/assets/testimonials/students/veronica.jpeg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const testimonial = {
  Alumni: [
    {
      image: `https://picsum.photos/500?random=1`,
      name: "DEF",
      course: { course: "B.A. English", batch: "2011-14" },
      testimonial: "Comming Soon...",
    },
    {
      image: "https://picsum.photos/500?random=2",
      name: "UVW",
      course: { course: "B.A. English", batch: "2024-28" },
      testimonial: "Comming Soon...",
    },
  ],
  Parents: [
    {
      image: "https://picsum.photos/500?random=3",
      name: "Mr. ABC",
      parentof: "DEF",
      relation: "Father",
      testimonial: "Comming Soon...",
    },
    {
      image: "https://picsum.photos/500?random=4",
      name: "Mrs. XYZ",
      parentof: "UVW",
      relation: "Mother",
      testimonial: "Comming Soon...",
    },
  ],
  Students: [
    {
      image: itokaStudent,
      name: "Mr. Itoka Tuccu",
      course: { course: "B.A. 1st Semester", batch: "2024-27" },
      testimonial:
        "The college campus is spacious, clean and well maintained. The library is well stocked and the computer lab is equipped with mordern facilities.",
    },
    {
      image: kedaraiStudent,
      name: "Ms. Kedarai Chewang",
      course: { course: "B.A. 3rd Semester", batch: "2023-26" },
      testimonial:
        "Pranab College has given me the greatest opportunity to bring out the best in me, with the most supportive lecturers. I will always choose Pranab College again if I ever get a chance to reexperience my college life.",
    },
    {
      image: veronicaStudent,
      name: "Ms. Veronica K Yeptho",
      course: { course: "B.A. 3rd Semester", batch: "2023-26" },
      testimonial:
        "Pranab College has been an incredible place for my academic and personal growth. The approachable and supportive lectures make a significant role in our learning experiences. One of the standard features of Pranab college is it's reasonable fee structure, making quality education accessible to many.",
    },
    {
      image: ngunnonStudent,
      name: "Ms. Ngunnon Konyak",
      course: { course: "B.A. 1st Semester", batch: "2024-27" },
      testimonial:
        "Experienced and suportive faculty, good infrastructure and facilities vibrant campus life, excellent support services.",
    },
    {
      image: somStudent,
      name: "Mr. Som Kumar",
      course: { course: "B.A. 1st Semester", batch: "2024-27" },
      testimonial:
        "Pranab College is an excellent institution that provides a supportive and stimulating environment for students to grow and learn.",
    },
    {
      image: loangamStudent,
      name: "Ms. Loangam Konyak",
      course: { course: "B.A. 5th Semester", batch: "2022-25" },
      testimonial:
        "The college provides a perfect blend of academics, extra curricular activities, and personal development opportunities.",
    },
  ],
};

const alumniContent = () =>
  testimonial.Alumni.map((t) => (
    <div className="dark:text-white ">
      <div className="grid grid-cols-3 ">
        <div className=" flex items-center desk:justify-start justify-center col-span-1 row-span-3 min-[200px]:max-[480px]:order-1 min-[200px]:max-[480px]:col-span-1 ">
          <img
            className="wide:h-[350px] wide:w-[350px] desk:w-[270px] desk:h-[270px] min-[480px]:max-[1180px]:h-full min-[200px]:max-[480px]:rounded-full min-[200px]:max-[480px]:h-[100px] min-[200px]:max-[480px]:w-[100px]"
            src={t.image}
            alt=""
          />
        </div>
        <div className=" col-span-2 col-start-2 h-[160px] flex justify-center items-center min-[200px]:max-[480px]:order-4 min-[200px]:max-[480px]:col-start-1 min-[200px]:max-[480px]:col-span-3">
          <p className=" text-center font-inter font-light text-2xl min-[200px]:max-[480px]:text-lg min-[200px]:max-[480px]:text-left">
            {t.testimonial}
          </p>
        </div>
        <div className=" col-span-4 col-start-2 min-[200px]:max-[480px]:order-2 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:mt-4">
          <p className=" font-inter font-medium text-xl text-center min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:text-base ">
            {t.name}
          </p>
        </div>
        <div className=" text-center font-inter font-medium text-base col-span-4 min-[200px]:max-[480px]:order-3 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:pt-1 min-[200px]:max-[480px]:text-sm">
          <p>{t.course.course}</p>
          <p>Batch: {t.course.batch}</p>
        </div>
      </div>
    </div>
  ));

const studentContent = () =>
  testimonial.Students.map((t) => (
    <div className="dark:text-white ">
      <div className="grid grid-cols-3 ">
        <div className=" flex items-center desk:justify-start justify-center col-span-1 row-span-3 min-[200px]:max-[480px]:order-1 min-[200px]:max-[480px]:col-span-1 ">
          <img
            className="wide:h-[350px]  wide:w-[350px] desk:w-[270px] desk:h-[270px] min-[480px]:max-[1180px]:h-full min-[200px]:max-[480px]:rounded-full min-[200px]:max-[480px]:h-[100px] min-[200px]:max-[480px]:w-[100px]"
            src={t.image}
            alt=""
          />
        </div>
        <div className=" col-span-2 col-start-2 h-[160px] flex justify-center items-center min-[200px]:max-[480px]:order-4 min-[200px]:max-[480px]:col-start-1 min-[200px]:max-[480px]:col-span-3">
          <p className=" text-center font-inter font-light text-2xl min-[200px]:max-[480px]:text-lg min-[200px]:max-[480px]:text-left">
            {t.testimonial}
          </p>
        </div>
        <div className=" col-span-4 col-start-2 min-[200px]:max-[480px]:order-2 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:mt-4">
          <p className=" font-inter font-medium text-xl text-center min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:text-base ">
            {t.name}
          </p>
        </div>
        <div className=" text-center font-inter font-medium text-base col-span-4 min-[200px]:max-[480px]:order-3 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:pt-1 min-[200px]:max-[480px]:text-sm">
          <p>{t.course.course}</p>
          <p>Batch: {t.course.batch}</p>
        </div>
      </div>
    </div>
  ));

const parentsContent = () =>
  testimonial.Parents.map((t) => (
    <div className="dark:text-white ">
      <div className="grid grid-cols-3 ">
        <div className=" flex items-center desk:justify-start justify-center col-span-1 row-span-3 min-[200px]:max-[480px]:order-1 min-[200px]:max-[480px]:col-span-1 ">
          <img
            className="wide:h-[350px] wide:w-[350px] desk:w-[270px] desk:h-[270px] min-[480px]:max-[1180px]:h-full min-[200px]:max-[480px]:rounded-full min-[200px]:max-[480px]:h-[100px] min-[200px]:max-[480px]:w-[100px]"
            src={t.image}
            alt=""
          />
        </div>
        <div className=" col-span-2 col-start-2 h-[160px] flex justify-center items-center min-[200px]:max-[480px]:order-4 min-[200px]:max-[480px]:col-start-1 min-[200px]:max-[480px]:col-span-3">
          <p className=" text-center font-inter font-light text-2xl min-[200px]:max-[480px]:text-lg min-[200px]:max-[480px]:text-left">
            {t.testimonial}
          </p>
        </div>
        <div className=" col-span-4 col-start-2 min-[200px]:max-[480px]:order-2 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:mt-4">
          <p className=" font-inter font-medium text-xl text-center min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:text-base ">
            {t.name}
          </p>
        </div>
        <div className=" text-center font-inter font-medium text-base col-span-4 min-[200px]:max-[480px]:order-3 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:pt-1 min-[200px]:max-[480px]:text-sm">
          <p>
            {t.relation} of {t.parentof}
          </p>
        </div>
      </div>
    </div>
  ));

const Testimonials = () => {
  const [review, setReview] = useState("Students");

  function updateTestimonial(reviewType) {
    setReview(reviewType);
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container p-10 flex flex-row min-[200px]:max-[1180px]:flex-col justify-center items-start ">
      <div className="  min-[200px]:max-[1180px]:w-full flex flex-col min-[200px]:max-[1180px]:flex-row ">
        <div className=" flex flex-row min-[200px]:max-[1180px]:flex-col min-[200px]:max-[1180px]:w-full">
          <button
            className={`desk:w-[140px] h-12 font-inter font-medium text-base ${review === "Alumni" ? "testGradient" : "dark:text-white"}`}
            onClick={() => {
              updateTestimonial("Alumni");
            }}
          >
            ALUMNI
          </button>
          <div
            className={`w-1 min-[200px]:max-[1180px]:h-1 desk:rounded-t-full min-[200px]:max-[1180px]:rounded-l-full ${review === "Alumni" ? "bg-[#003eb9]" : "bg-[#C8C3C3] dark:bg-[#373737]"} min-[200px]:max-[1180px]:w-full`}
          ></div>
        </div>
        <div className=" flex flex-row min-[200px]:max-[1180px]:flex-col min-[200px]:max-[1180px]:w-full">
          <button
            className={`desk:w-[140px] h-12 font-inter font-medium text-base ${review === "Students" ? "testGradient" : "dark:text-white"}`}
            onClick={() => updateTestimonial("Students")}
          >
            STUDENTS
          </button>
          <div
            className={`w-1 min-[200px]:max-[1180px]:h-1 ${review === "Students" ? "bg-[#003eb9]" : "bg-[#C8C3C3] dark:bg-[#373737]"} min-[200px]:max-[1180px]:w-full`}
          ></div>
        </div>
        <div className=" flex flex-row min-[200px]:max-[1180px]:flex-col min-[200px]:max-[1180px]:w-full">
          <button
            className={`desk:w-[140px] h-12 font-inter font-medium text-base ${review === "Parents" ? "testGradient" : "dark:text-white"}`}
            onClick={() => updateTestimonial("Parents")}
          >
            PARENTS
          </button>
          <div
            className={`w-1 min-[200px]:max-[1180px]:h-1 desk:rounded-b-full min-[200px]:max-[1180px]:rounded-r-full ${review === "Parents" ? "bg-[#003eb9]" : "bg-[#C8C3C3] dark:bg-[#373737]"} min-[200px]:max-[1180px]:w-full`}
          ></div>
        </div>
      </div>
      <Slider
        {...settings}
        className="wide:w-3/5 desk:w-3/4 min-[200px]:max-[1180px]:w-full min-[200px]:max-[1180px]:mt-8"
      >
        {review === "Students" && studentContent()}
        {review === "Alumni" && alumniContent()}
        {review === "Parents" && parentsContent()}
      </Slider>
      <div className="w-[144px] h-10 min-[200px]:max-[480px]:hidden min-[200px]:max-[480px]:w-full"></div>
    </div>
  );
};

export default Testimonials;
