import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import HeartImage from "../../Assets/HeartImage.webp";
import LungImage from "../../Assets/LungImage.png";
import ColonImage from "../../Assets/ColonImage.png";
import { useTranslation } from "react-i18next";

const ReportTile = ({ report }) => {
  const { t } = useTranslation();

  function renderField(label, value) {
    return (
      <div className="px-3 mb-4 md:w-1/2">
        <label
          htmlFor={label}
          className="block text-sm font-medium text-gray-600"
        >
          {t(label)}
        </label>
        <span className="text-gray-600 text-md">{value}</span>
      </div>
    );
  }

  return (
    <div className="m-10 bg-white border rounded-md shadow-md">
      <div className="flex justify-center mt-2 md:justify-between ">
        <h1 className="ml-4 text-2xl font-semibold text-gray-800">
          {report?.type === "heart"
            ? t("reportTile.heartDiseasePredictionReport")
            : report?.type === "lung"
            ? t("reportTile.lungCancerPredictionReport")
            : report?.type === "diabetes"
            ? t("reportTile.diabetesPredictionReport")
            : ""}
        </h1>

        <div className="mb-2 mr-4 text-center">
          <h1 className="mr-2 text-xs font-semibold text-gray-600">
            {t("reportTile.issueDate")}
          </h1>
          <h1 className="mr-2 text-sm font-semibold text-gray-800">
            {report?.date}
          </h1>
        </div>
      </div>
      <hr className="mx-2" />
      <div className="grid sm:grid-cols-1 md:grid-cols-4">
        <div className="grid col-span-1 md:border place-items-center">
          <h2 className="mt-2 text-lg font-semibold text-center text-gray-600">
            {t("reportTile.result")}
          </h2>
          <>
            <div className="flex space-x-2">
              {report?.result === "0" ? (
                <AiOutlineCheckCircle
                  className="text-center text-green-600 text-8xl"
                  style={{ display: "block", margin: "0 auto" }}
                />
              ) : (
                <AiOutlineCloseCircle
                  className="text-center text-red-600 text-8xl"
                  style={{ display: "block", margin: "0 auto" }}
                />
              )}

              <div
                className="w-24 h-24 bg-center bg-cover border rounded-full"
                style={{
                  backgroundImage: `url(${
                    report?.type === "heart"
                      ? HeartImage
                      : report?.type === "lung"
                      ? LungImage
                      : report?.type === "diabetes"
                      ? ColonImage
                      : ""
                  })`,
                }}
              ></div>
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              {report?.type === "heart"
                ? report?.result === "1"
                  ? t("reportTile.heartDiseaseLikely")
                  : t("reportTile.heartDiseaseUnlikely")
                : report?.type === "lung"
                ? report?.result === "1"
                  ? t("reportTile.lungCancerLikely")
                  : t("reportTile.lungCancerUnlikely")
                : report?.type === "diabetes"
                ? report?.result === "1"
                  ? t("reportTile.diabetesLikely")
                  : t("reportTile.diabetesUnlikely")
                : ""}
            </h2>

            {report?.result === "0" ? (
              <p className="text-sm font-normal text-center text-gray-600">
                {report?.type === "heart"
                  ? t("reportTile.heartDiseaseSafe")
                  : report?.type === "lung"
                  ? t("reportTile.lungCancerSafe")
                  : report?.type === "diabetes"
                  ? t("reportTile.diabetesSafe")
                  : t("reportTile.patientSafe")}
              </p>
            ) : (
              <p className="text-sm font-normal text-center text-gray-600">
                {report?.type === "heart"
                  ? t("reportTile.heartDiseaseAtRisk")
                  : report?.type === "lung"
                  ? t("reportTile.lungCancerAtRisk")
                  : report?.type === "diabetes"
                  ? t("reportTile.diabetesAtRisk")
                  : t("reportTile.patientAtRisk")}
              </p>
            )}
          </>
        </div>

        <div className="col-span-3 p-4 border">
          {report?.type === "heart" ? (
            <div className="flex-wrap md:flex">
              {renderField(t("reportTile.patientAge"), report?.age)}
              {renderField(t("reportTile.patientSex"), report?.sex)}
              {renderField(t("reportTile.bloodPressure"), report?.BP)}
              {renderField(
                t("reportTile.chestPainTypeLevel"),
                report?.ChestPainType
              )}
              {renderField(
                t("reportTile.cholesterolLevel"),
                report?.Cholesterol
              )}
              {renderField(
                t("reportTile.fastingBloodSugarOver120"),
                report?.FBSOver120
              )}
              {renderField(t("reportTile.ekgResults"), report?.EKGResults)}
              {renderField(t("reportTile.maxHeartRate"), report?.MaxHR)}
              {renderField(
                t("reportTile.exerciseInducedAngina"),
                report?.ExerciseAngina
              )}
              {renderField(t("reportTile.stDepression"), report?.STdepression)}
              {renderField(
                t("reportTile.slopeOfPeakExerciseSTSegment"),
                report?.SlopeOfST
              )}
              {renderField(
                t("reportTile.numberOfMajorVesselsColoredByFlourosopy"),
                report?.NumberOfVesselsFluro
              )}
              {renderField(
                t("reportTile.thalliumStressTestResult"),
                report?.Thallium
              )}
            </div>
          ) : report?.type === "lung" ? (
            <div className="flex-wrap md:flex">
              {renderField(t("reportTile.patientGender"), report?.GENDER)}
              {renderField(t("reportTile.patientAge"), report?.AGE)}
              {renderField(t("reportTile.patientSmokes"), report?.SMOKING)}
              {renderField(
                t("reportTile.patientYellowFingers"),
                report?.YELLOW_FINGERS
              )}
              {renderField(t("reportTile.patientHasAnxiety"), report?.ANXIETY)}
              {renderField(t("reportTile.peerPressure"), report?.PEER_PRESSURE)}
              {renderField(
                t("reportTile.chronicDisease"),
                report?.CHRONIC_DISEASE
              )}
              {renderField(t("reportTile.fatigue"), report?.FATIGUE)}
              {renderField(t("reportTile.allergy"), report?.ALLERGY)}
              {renderField(t("reportTile.wheezing"), report?.WHEEZING)}
              {renderField(
                t("reportTile.alcoholConsuming"),
                report?.ALCOHOL_CONSUMING
              )}
              {renderField(t("reportTile.coughing"), report?.COUGHING)}
              {renderField(
                t("reportTile.shortnessOfBreath"),
                report?.SHORTNESS_OF_BREATH
              )}
              {renderField(
                t("reportTile.swallowingDifficulty"),
                report?.SWALLOWING_DIFFICULTY
              )}
              {renderField(t("reportTile.chestPain"), report?.CHEST_PAIN)}
            </div>
          ) : report?.type === "diabetes" ? (
            <div className="flex-wrap md:flex">
              {renderField(t("reportTile.patientAge"), report?.Age)}
              {renderField(t("reportTile.BMI"), report?.BMI)}
              {renderField(
                t("reportTile.bloodPressure"),
                report?.BloodPressure
              )}
              {renderField(
                t("reportTile.DiabetesPedigreeFunction"),
                report?.DiabetesPedigreeFunction
              )}
              {renderField(t("reportTile.Glucose"), report?.Glucose)}
              {renderField(t("reportTile.Insulin"), report?.Insulin)}
              {renderField(t("reportTile.Pregnancies"), report?.Pregnancies)}
              {renderField(
                t("reportTile.SkinThickness"),
                report?.SkinThickness
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportTile;
