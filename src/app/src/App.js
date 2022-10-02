import { useContext } from "react";
import { UIContext } from "./Context/UIContext";
import Home from "./Pages/Home";
import Loading from "./Utils/Loader/Loading";

export function App() {
  const { state } = useContext(UIContext);
  return (
    <>
      <Home />
      {state.loading ? <Loading /> : null}
    </>
  );
}

export default App;
