import { Outlet, useNavigate } from "react-router-dom";
import { IRouteHandle } from "./CvEditor";
import BackButton from "../../components/svg/BackButton";
import { useHandle, useHandles } from "../../hooks/handle";
import NextButton from "../../components/NextButton";

const CvEditorNav = () => {
  const navigate = useNavigate();
  const titles = useHandle<unknown, IRouteHandle>(
    "title" as keyof IRouteHandle
  );
  const nextRoutes = useHandle<unknown, IRouteHandle>(
    "nextRoute" as keyof IRouteHandle
  );
  const handles = useHandles<IRouteHandle>([
    "title",
    "nextRoute",
    "icon_alt",
    "icon_src",
  ]);
  console.log("handles: ", handles);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-none h-6 ">
        <div className="flex flex-row justify-center">
          <img
            // src="https://cdn-icons-png.flaticon.com/128/7039/7039268.png"
            // data-src="https://cdn-icons-png.flaticon.com/128/7039/7039268.png"
            src={
              handles.icon_src ||
              "https://cdn-icons-png.flaticon.com/128/7039/7039268.png"
            }
            alt={handles.icon_alt || undefined}
            title={handles.icon_alt || undefined}
            width="42"
            height="42"
            className="mr-4 lzy lazyload--done"
            // srcSet="https://cdn-icons-png.flaticon.com/128/7039/7039268.png 4x"
          ></img>
          {titles[0]}
        </div>
      </div>
      <div className="flex-1 min-h-48">
        <Outlet />
      </div>
      <div className="flex-none h-10 justify-self-end">
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
