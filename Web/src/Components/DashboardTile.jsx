import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import AggregateModal from "./Modals/Aggregation/AggregateModal";
import { useTranslation } from "react-i18next";

const DashboardTile = ({
  image,
  title,
  datasetDownload,
  accuracyDownload,
  type,
}) => {
  const [showAggregateModal, setShowAggregateModal] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="lg:flex">
      {showAggregateModal && (
        <AggregateModal
          setShowAggregateModal={setShowAggregateModal}
          showAggregateModal={showAggregateModal}
          title={title}
          type={type}
        />
      )}
      <div
        className="flex h-auto p-2 overflow-hidden text-white transition-transform duration-300 transform bg-gray-800 shadow-lg cursor-pointer lg:w-3/4 md:w-full rounded-2xl lg:h-32 hover:scale-105"
        onClick={() => setShowAggregateModal(true)}
      >
        <div className="flex items-center justify-center text-white rounded-l-2xl lg:w-1/4 md:w-1/3">
          <div
            className="w-16 h-16 bg-center bg-cover border rounded-full md:w-24 md:h-24 lg:w-24 lg:h-24"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="flex-1 p-4">
          <div className="text-lg font-semibold">
            {title} {t("dashboardTile.DataAggregation")}
          </div>
          <h3 className="text-sm text-gray-300">
            {t("dashboardTile.subtextone")} {title}{" "}
            {t("dashboardTile.subtexttwo")}
          </h3>
        </div>
      </div>
      <div className="flex w-full space-x-4 lg:pl-2 lg:w-1/2">
        <div
          className="flex flex-col items-center justify-center w-32 h-32 p-2 transition-transform transform bg-white border rounded-full shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl"
          onClick={datasetDownload}
        >
          <FaDownload className="mb-2 text-4xl text-gray-800" />
          <span className="text-sm font-semibold text-center text-gray-800">
            {title} {t("dashboardTile.dataset")}
          </span>
        </div>
        <div
          className="flex flex-col items-center justify-center w-32 h-32 p-2 transition-transform transform bg-white border rounded-full shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl"
          onClick={accuracyDownload}
        >
          <FaDownload className="mb-2 text-4xl text-gray-800" />
          <span className="text-sm font-semibold text-center text-gray-800">
            {title} {t("dashboardTile.accuracy")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardTile;
