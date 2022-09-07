import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-zinc-800">
      <Toaster />
      <Header />
      <Main />
    </div>
  );
}

export default Home;
