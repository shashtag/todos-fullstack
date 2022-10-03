import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import Home from "./Pages/Home";
import Loading from "./Common/Loader/Loading";
import Error from "./Common/Snackbar/Snackbar";

export function App() {
  const { state } = useContext(AppContext);
  return (
    <>
      <Home />
      {state.loading ? <Loading /> : null}
      {state.error ? <Error /> : null}
    </>
  );
}

export default App;
