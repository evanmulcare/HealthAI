import React, { useState, useEffect, useRef } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import DefaultProfile from "../../Assets/DefaultProfile.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import RemovePatientModal from "../../Components/Modals/RemovePatientModal";

const PatientTile = ({ patient }) => {
  const { t } = useTranslation();
  const [showRemoveModal, setShowRemoveModal] = useState(null);

  const selectReportsByPatientId = (state, recieverId) => {
    return state.reports.reports.filter(
      (report) => report.patient === recieverId
    );
  };

  const reports = useSelector((state) =>
    selectReportsByPatientId(state, patient?.docId)
  );
  reports.sort((a, b) => a.created - b.created);

  const navigate = useNavigate();

  const [showEditMenu, setShowEditMenu] = useState(false);
  const tileRef = useRef(null);

  const handleDocumentClick = (event) => {
    if (tileRef.current && !tileRef.current.contains(event.target)) {
      setShowEditMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div
      className="w-full h-full p-4 mb-4 bg-white border rounded-lg shadow-lg"
      ref={tileRef}
    >
      {showRemoveModal && (
        <RemovePatientModal
          setShowRemoveModal={setShowRemoveModal}
          patient={patient}
        />
      )}

      <div className="flex flex-col items-center justify-between mb-4 md:flex-row">
        <div className="flex items-center mt-2">
          <div className="mb-4 text-xl font-semibold text-gray-800">
            <div className="text-left">
              <h2 className="text-xl font-semibold text-left text-gray-800 md:text-2xl">
                {patient?.firstName} {patient?.lastName}
              </h2>
              <h3 className="text-sm text-gray-500 md:text-gray-400">
                {patient?.email}
              </h3>
            </div>
          </div>
        </div>
        <div className="space-x-2">
          <button
            className="px-5 py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={() => navigate(`/Patients/${patient?.docId}`)}
          >
            <h3 className="text-sm">{t("patientTile.view")}</h3>
          </button>
          <button
            className="inline-flex px-1 py-2 transition duration-300 rounded-md hover:bg-gray-100"
            onClick={() => setShowEditMenu(!showEditMenu)}
          >
            <BsThreeDotsVertical className="mb-1" />
          </button>
          {showEditMenu && (
            <div className="relative">
              <div className="absolute z-10 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-md top-full w-44 left-5">
                <ul>
                  <li
                    className="inline-flex w-full px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => setShowRemoveModal(true)}
                  >
                    <FaTimesCircle className="mr-2 text-red-500 text-md" />
                    <span className="inline mb-2 text-xs">
                      {t("patientTile.delete")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2 md:mr-4">
          <div className="w-32 h-32 overflow-hidden rounded-full">
            <img
              src={patient.profileimg || DefaultProfile}
              alt="Profile"
              className="object-cover w-full h-full bg-black rounded-full opacity-90"
            />
          </div>
        </div>
        <h2 className="mt-10 text-lg font-semibold text-center text-gray-600">
          {reports.length}
          {t("patientTile.reports")}
        </h2>
      </div>
    </div>
  );
};

export default PatientTile;
