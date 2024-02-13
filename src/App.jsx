import './App.css'
import Page from "./components/Page";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <main>
        <Page currentPage={currentPage} />
      </main>
    </div>
  );
}

export default App;