import React from "react";

interface Props {
  title: string;
}
const CvEditorTitle: React.FC<Props> = ({ title }) => {
  console.log("title", title);
  return <>{title}</>;
};

export default CvEditorTitle;
