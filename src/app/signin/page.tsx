import Image from "next/image";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex w-[1000px] h-[600px] border border-slate rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-white bg-opacity-80">
        <div className="w-[600px] rounded-xl">
          <Image
            src="/images/studiumSignin.png" // public 폴더 기준 경로
            alt="login background"
            width={600}
            height={600}
            className="object-cover rounded-l-xl"
          />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center w-[400px]">
          <div className="logobox flex flex-col items-center justify-center gap-0">
            <Image
              src="/images/studiumLogo.png"
              alt="loginLogo"
              width={100}
              height={100}
            />
            <span className="text-4xl text-purple-600 font-bold">LOGIN</span>
            <span className="font-bold text-purple-500">
              welcome to the studium
            </span>
          </div>
          <input
            type="text"
            placeholder="username"
            className="min-w-[300px] p-2 bg-gradient-to-r from-violet-300 to-purple-500 outline-0 rounded-4xl"
          ></input>

          <input
            type="text"
            placeholder="password"
            className="min-w-[300px] p-2 bg-gradient-to-r from-violet-300 to-purple-500 outline-0 rounded-4xl"
          ></input>
          <div className="optionbox min-w-[300px] flex items-center justify-between">
            <div className="flex items-center justify-center gap-1.5">
              <input type="checkbox"></input>
              <span className="text-violet-500">Remember Me</span>
            </div>
            <span className="text-violet-500">Forget Password?</span>
          </div>

          <button className="cursor-pointer min-w-[300px] p-2 bg-gradient-to-b from-violet-300 to-purple-600 text-2xl rounded-4xl">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
