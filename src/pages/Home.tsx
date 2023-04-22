import { useTranslation } from "react-i18next";

import { useStore } from "../store/Store";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import "../App.css";

function Home() {
  const { t } = useTranslation();

  // Testing the Zustand store
  const customerChoicesCount = useStore((state) => state.customerChoicesCount);
  const increaseChoicesCount = useStore((state) => state.increaseChoicesCount);
  const resetChoicesCount = useStore((state) => state.resetChoicesCount);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("application.title")}</h1>
      <div className="card">
        <button className="card-button" onClick={() => increaseChoicesCount(1)}>
          {" "}
          Increase Choices{" "}
        </button>
        <button onClick={() => resetChoicesCount()}> Reset Choices </button>
      </div>
      <p className="read-the-docs">
        Number of choices made: {customerChoicesCount}
      </p>
    </div>
  );
}

export default Home;
