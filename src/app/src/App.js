import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import Home from "./Pages/Home";
import Loading from "./Common/Loader/Loading";

export function App() {
  const { state } = useContext(AppContext);
  return (
    <>
      <Home />
      {state.loading ? <Loading /> : null}
    </>
  );
}

export default App;
