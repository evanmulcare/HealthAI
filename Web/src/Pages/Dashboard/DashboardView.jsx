import React from "react";
import { withTranslation } from "react-i18next";
import Calender from "../../Components/Calender";
import DefaultProfile from "../../Assets/DefaultProfile.png";
import { useTranslation } from "react-i18next";
import HeartImage from "../../Assets/HeartImage.webp";
import LungImage from "../../Assets/LungImage.png";
import ColonImage from "../../Assets/ColonImage.png";
import DashboardTile from "../../Components/DashboardTile";
import {
  downloadHeartDiseaseAccuracy,
  downloadLungCancerAccuracy,
  downloadDiabetesAccuracy,
  downloadHeartDiseaseReport,
  downloadLungCancerReport,
  downloadDiabetesReport,
} from "../../Hooks/usePredictionDataReport";
const DashboardView = ({
  currentUserData,
  selectedLanguage,
  handleLanguageChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className="pb-10 pl-10 pr-10 mt-2">
      <div className="flex flex-col items-center justify-center mb-5 md:flex-row md:justify-between">
        <h1 className="text-4xl font-semibold text-gray-800 md:ml-2">
          {t("dashboard.greeting", { name: currentUserData?.firstName })}
        </h1>
        <div className="mt-5 space-x-2 space-y-2 sm">
          <button
            className={`rounded-md px-4 py-2 text-sm font-normal ${
              selectedLanguage === "english"
                ? "bg-blue-500 text-white"
                : "text-blue-500 bg-white"
            }`}
            onClick={() => handleLanguageChange("english")}
          >
            {t("dashboard.languages.english")}
          </button>
          <button
            className={`rounded-md px-4 py-2 text-sm font-normal ${
              selectedLanguage === "french"
                ? "bg-blue-500 text-white"
                : "text-blue-500 bg-white"
            }`}
            onClick={() => handleLanguageChange("french")}
          >
            {t("dashboard.languages.french")}
          </button>
          <button
            className={`rounded-md px-4 py-2 text-sm font-normal ${
              selectedLanguage === "spanish"
                ? "bg-blue-500 text-white"
                : "text-blue-500 bg-white"
            }`}
            onClick={() => handleLanguageChange("spanish")}
          >
            {t("dashboard.languages.spanish")}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
        <div className="col-span-2 space-y-4">
          <DashboardTile
            image={HeartImage}
            title={"Heart Disease"}
            datasetDownload={downloadHeartDiseaseReport}
            accuracyDownload={downloadHeartDiseaseAccuracy}
            type={"heart"}
          />
          <DashboardTile
            image={LungImage}
            title={"Lung Cancer"}
            datasetDownload={downloadLungCancerReport}
            accuracyDownload={downloadLungCancerAccuracy}
            type={"lung"}
          />
          <DashboardTile
            image={ColonImage}
            title={"Diabetes"}
            datasetDownload={downloadDiabetesReport}
            accuracyDownload={downloadDiabetesAccuracy}
            type={"diabetes"}
          />
        </div>

        <div className="col-span-1">
          <div className="flex items-center p-4 mb-2 bg-white border rounded-2xl">
            <div className="w-32 h-32 overflow-hidden rounded-full">
              <img
                src={currentUserData?.profileimg || DefaultProfile}
                alt="Profile"
                className="object-cover w-full h-full bg-black rounded-full opacity-90"
              />
            </div>
            <div className="mt-3 ml-5">
              <h2 className="text-xl font-semibold text-left text-gray-800 md:text-2xl">
                {currentUserData?.firstName} {currentUserData?.lastName}
              </h2>
              <div className="md:mt-2">
                <h3 className="text-sm text-gray-500 md:text-gray-400">
                  {currentUserData?.email}
                </h3>
              </div>
            </div>
          </div>
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(DashboardView);
