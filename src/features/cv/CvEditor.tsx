import React from "react";
import CvEditorNav from "./CvEditorNav";

export type IRouteHandle = {
  title: string;
  nextRoute: string | null;
};
const CvEditor = () => {
  return (
    <>
      <CvEditorNav />
    </>
  );
};

export default CvEditor;
