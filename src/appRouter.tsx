import Navbar from "./features/nav/Navbar";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  about,
  cv,
  cvEditEducation,
  cvEditKeySkills,
  cvEditProjects,
  cvEditSummary,
  cvProfessionalExperience,
  homepage,
  portfolio,
  search,
} from "./routePaths";
import About from "./features/content/About";
import Homepage from "./features/content/Homepage";
import Portfolio from "./features/content/Portfolio";
import CvPanel from "./features/cv/CvPanel";
import SearchPage from "./features/content/SearchPage";
import CvEditHeader from "./features/cv/cv_header/CvEditHeader";
import CvEditSummary from "./features/cv/cv_summary/CvEditSummary";
import { IRouteHandle } from "./features/cv/CvEditor";
import CvEditExperience from "./features/cv/cv_experience/CvEditExperience";
import CvEditEducation from "./features/cv/cv_education/CvEditEducation";
import CvEditSkills from "./features/cv/cv_skills/CvEditSkills";
import CvEditProjects from "./features/cv/cv_projects/CvEditProjects";

const appRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path={about} element={<About />} />
      <Route path={homepage} element={<Homepage />} />
      <Route path={portfolio} element={<Portfolio />} />
      <Route path={search} element={<SearchPage />} />
      <Route index element={<Navigate to={cv} replace />} />
      <Route path={cv} element={<CvPanel />}>
        <Route
          index
          element={<CvEditHeader />}
          handle={
            {
              title: "Create your resume's header",
              nextRoute: cvEditSummary,
            } as IRouteHandle
          }
        />
        <Route
          path={cvEditSummary}
          element={<CvEditSummary />}
          handle={
            {
              title: "Create your summary",
              nextRoute: cvProfessionalExperience,
            } as IRouteHandle
          }
        />
        <Route
          path={cvProfessionalExperience}
          element={<CvEditExperience />}
          handle={
            {
              title: "Provide your industry experience",
              nextRoute: cvEditEducation,
            } as IRouteHandle
          }
        />
        <Route
          path={cvEditEducation}
          element={<CvEditEducation />}
          handle={
            {
              title: "Enter your educational background",
              nextRoute: cvEditKeySkills,
            } as IRouteHandle
          }
        />
        <Route
          path={cvEditKeySkills}
          element={<CvEditSkills />}
          handle={
            {
              title: "List your technical and non-technical skills",
              nextRoute: cvEditProjects,
            } as IRouteHandle
          }
        />
        <Route
          path={cvEditProjects}
          element={<CvEditProjects />}
          handle={
            {
              title: "Show your personal projects",
              nextRoute: cvEditProjects,
            } as IRouteHandle
          }
        />
      </Route>
    </Route>
  )
);

export default appRouter;
