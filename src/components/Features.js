// import React, { useState } from "react";
import imgFeatureEINS from "../imgFeatureEINS.png";
import imgFeatureZWEI from "../imgFeatureZWEI.png";
import imgFeatureDREI from "../imgFeatureDREI.png";
import imgFeatureVIER from "../imgFeatureVIER.png";

export default function Features({ isUKR }) {
  // const [featureEINS, setFeatureEINS] = useState(true);
  // const [featureZWEI, setFeatureZWEI] = useState(true);
  // const [featureDREI, setFeatureDREI] = useState(true);
  // const [featureVIER, setFeatureVIER] = useState(true);

  // function functionEINS() {
  //   setFeatureEINS((prev) => !prev);
  // }
  // function functionZWEI() {
  //   setFeatureZWEI((prev) => !prev);
  // }
  // function functionDREI() {
  //   setFeatureDREI((prev) => !prev);
  // }
  // function functionVIER() {
  //   setFeatureVIER((prev) => !prev);
  // }

  return (
    <div
      className="container px-4 py-5 mb-6"
      id="custom-cards"
    >
      <h2 className="pb-2 border-bottom" id="ABOUTUS">
        {!isUKR && `Why choose Vetrebenky?`}
        {isUKR && `Чому варто вибрати Ветребенький?`}
      </h2>

      <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${imgFeatureEINS})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-4 mt-1 mb-1 display-6 lh-1 fw-bold">
                {!isUKR && `Curriculum directed in Spoken English`}
                {isUKR && `Навчальний план розмовної англійської мови`}
              </h3>
              <h4 className="pt-2 mt-2 mb-4 h5 lh-1 fw-bold">
                {!isUKR &&
                  `Only the necessary grammar and lexicals. Nothing extra.`}
                {isUKR &&
                  `Тільки необхідна граматика та лексика. Нічого зайвого.`}
              </h4>
              {/* <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                  ></svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                  ></svg>
                  <small>3d</small>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${imgFeatureZWEI})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-black text-shadow-1">
              <h3 className="pt-4 mt-1 mb-1 display-6 lh-1 fw-bold">
                {!isUKR && `Interactive programme`}
                {isUKR && `Інтерактивна програма`}
              </h3>
              <h4 className="pt-2 mt-2 mb-4 h5 lh-1 fw-bold">
                {!isUKR &&
                  `Everything is interactive - homework, classwork, we learn
                through activities.`}
                {isUKR &&
                  `Все інтерактивно - домашні завдання, уроки, ми вчимося через діяльність.`}
              </h4>
              {/* <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                  ></svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                  ></svg>
                  <small>3d</small>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${imgFeatureVIER})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-black text-shadow-1">
              <h3 className="pt-4 mt-1 mb-1 display-6 lh-1 fw-bold">
                {!isUKR && `Our Teachers, our Mentors`}
                {isUKR && `Наші вчителі, наші наставники`}
              </h3>
              <h4 className="pt-2 mt-2 mb-4 h5 lh-1 fw-bold">
                {!isUKR &&
                  `Our experienced mentors are motivated by your results, as we
                learn together.`}
                {isUKR &&
                  `Наші досвідчені наставники мотивовані вашими результатами, оскільки ми вчимося разом.`}
              </h4>
              {/* <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                  ></svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                  ></svg>
                  <small>3d</small>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${imgFeatureDREI})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-4 mt-1 mb-1 display-6 lh-1 fw-bold">
                {!isUKR && `Individual approach`}
                {isUKR && `Індивідуальний підхід`}
              </h3>
              <h4 className="pt-2 mt-2 mb-4 h5 lh-1 fw-bold">
                {!isUKR &&
                  `We look for gaps in your knowledge, and improve them, so you
                speak confidently.`}
                {isUKR &&
                  `Ми шукаємо прогалини у ваших знаннях і вдосконалюємо їх, щоб ви говорили впевнено.`}
              </h4>
              {/* <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                  ></svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                  ></svg>
                  <small>3d</small>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// {  !isUKR && ``}
// {  isUKR && ``}
