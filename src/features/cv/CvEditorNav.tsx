import { Outlet, useNavigate } from "react-router-dom";
import { IRouteHandle } from "./CvEditor";
import BackButton from "../../components/svg/BackButton";
import { useHandle } from "../../hooks/handle";
import NextButton from "../../components/NextButton";

const CvEditorNav = () => {
  const navigate = useNavigate();
  const titles = useHandle<unknown, IRouteHandle>(
    "title" as keyof IRouteHandle
  );
  const nextRoutes = useHandle<unknown, IRouteHandle>(
    "nextRoute" as keyof IRouteHandle
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-none h-6 ">{titles[0]}</div>
      <div className="flex-1 min-h-48 bg-stone-300">
        <Outlet />
      </div>
      <div className="flex-none h-10 justify-self-end bg-slate-200">
        <div className="flex justify-start gap-4  ">
          <div className="my-2 mx-2">
            <BackButton onClick={() => navigate(-1)}>Back</BackButton>
          </div>
          <div className="my-2 mx-2">
            {nextRoutes[0] ? (
              <NextButton onClick={() => navigate(nextRoutes[0] as string)}>
                {nextRoutes[0]}
              </NextButton>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvEditorNav;
