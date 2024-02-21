import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import appStore from "./redux/appStore";
import { formatToLocalTime } from "./utils/constants";

function App() {
  return (
    <Provider store={appStore}>
      <div className="">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
