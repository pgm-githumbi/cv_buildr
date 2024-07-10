import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import appRouter from "./appRouter";

function App() {
  return (
    <Provider store={store}>
      <div className="App bg-gradient-to-tr from-base-100 from-60% via-sky-950 via-85% to-indigo-950 to-99%">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
