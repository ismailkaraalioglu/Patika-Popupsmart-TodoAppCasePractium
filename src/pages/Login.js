import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-zinc-200">
      <div className="w-96 h-[650px] text-center rounded-3xl bg-white bg-opacity-40 shadow-xl backdrop-blur-xl border-2 border-white">
        <h1 className="font-bold text-2xl text-slate-800 mt-32">
          Hello Again!
        </h1>
        <h2 className="font-medium text-slate-700 text-opacity-80 mt-4">
          Welcome to todo app please <br /> enter your username!
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
