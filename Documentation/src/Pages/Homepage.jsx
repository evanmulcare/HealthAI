// Homepage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import FileHeader from "../Components/FileHeader";
import FileVideo from "../Components/FileVideo";
import FileArticle from "../Components/FileArticle";
import FileInstructions from "../Components/FileInstructions";
import { articleData } from "../Data/articleData";

const Homepage = () => {
  const { section, page } = useParams();
  const sectionData = articleData[section][page];

  if (!sectionData) {
    return <div>Section or page not found</div>;
  }

  const pages = Object.keys(articleData[section]);

  // Find the index of the current page
  const currentIndex = pages.indexOf(page);

  // Determine the next page
  const nextIndex = currentIndex + 1;
  const nextPage = nextIndex < pages.length ? pages[nextIndex] : null;

  const { fileHeader, fileVideo, fileArticle, fileInstructions } = sectionData;

  return (
    <div className="ml-64">
      <FileHeader
        title={fileHeader.title}
        nextLink={
          nextPage
            ? `/${section.toLowerCase()}/${nextPage.toLowerCase()}`
            : null
        }
      />
      <FileVideo title={fileVideo.title} videoURL={fileVideo.videoURL} />
      <FileArticle text={fileArticle.text} />
      <FileInstructions
        title={fileInstructions.title}
        listElements={fileInstructions.listElements}
      />
    </div>
  );
};

export default Homepage;
