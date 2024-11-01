import React from "react";

const CareerGuidance = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-center min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Career Guidance and Placement Cell</p>
      </div>
      <div className="flex justify-center p-5 text-justify desk:p-10">
        <div className="w-full desk:w-3/4 dark:text-white">
          <div>
            <p className="pb-3 ">
              The Career Guidance and Placement Cell of the college is
              instrumental in providing guidance and counseling to students of
              the college with regard to the various career opportunities and
              options available for them. In specific, the cell has the
              following objectives and follow-up actions:-
            </p>
            <ol className="pb-3 list-disc list-inside">
              <li className="pb-2">
                To conduct a survey among the students on their career options.
              </li>
              <li className="pb-2">
                To identify potential students suitable for varied professions.
              </li>
              <li className="pb-2">
                The cell organise programmes to create awareness about the
                importance of higher education.
              </li>
              <li className="pb-2">
                The cell organise special free coaching classes for competitive
                examinations like UPSC & NPSC for our students
              </li>
              <li className="pb-2">
                The cell conduct programmes on personality development, soft
                skills and communication skills for our students
              </li>
            </ol>
            <p className="pb-3 font-bold ">
              The following are members of the Career Guidance and Counselling
              Cell:
            </p>
            <ol className="pb-3 list-disc list-inside">
              <li>
                Ms. Rupa Dutta, Asst. Prof. , Department of English, Convenor
              </li>
              <li>
                Dr. Sanjukta Bhattacharjee, Head of Department, Department of
                English, Assistant Convenor
              </li>
              <li>
                Mrs. Rina Anal, Asst. Prof., Department of Education, Member
              </li>
              <li>
                Mr. Seiboy Khongsai, Asst. Prof., Department of Sociology,
                Member
              </li>
            </ol>
          </div>
          <div className=" h-[260px] desk:h-[600px] flex justify-center">
            {" "}
            <iframe
              className="w-full h-full desk:w-2/3"
              src="https://drive.google.com/file/d/1KYf4QyE8E2c7cAWbTkopFpV4K8csreMY/preview"
              type="application/pdf"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerGuidance;
