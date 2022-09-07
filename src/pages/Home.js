import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-screen h-screen bg-zinc-200 dark:bg-zinc-800">
      <Toaster />
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
