import React from "react";
import CvEditorNav from "./CvEditorNav";

export type IRouteHandle = {
  title: string;
  nextRoute: string | null;
  icon_src?: string;
  icon_alt?: string;
};
const CvEditor = () => {
  return (
    <>
      <CvEditorNav />
    </>
  );
};

export default CvEditor;
