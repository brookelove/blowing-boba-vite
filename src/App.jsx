import './App.css'
import Page from "./components/Page";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      {/* <Header> */}
        {/* <Nav currentPage={currentPage} /> */}
      {/* </Header> */}
      <main>
        <Page currentPage={currentPage} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;