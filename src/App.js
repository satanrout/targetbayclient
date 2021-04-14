import "./App.css";
import CardContainer from "./components/cardContainer/CardContainer";
import Form from "./components/form/Form.jsx";
import { SwapProvider } from "./context/swapContext";

function App() {
  return (
    <div className="app">
      <Form />
      <SwapProvider>
        <CardContainer />
      </SwapProvider>
    </div>
  );
}

export default App;
