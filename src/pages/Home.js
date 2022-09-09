import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  return (
    <div className="homePageContainer">
      <Toaster />
      <Header />
      <Main />
    </div>
  );
}

export default Home;
