import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-full">
      <nav className="flex flex-row items-center justify-between w-full p-6 bg-white">
        <div className="flex items-center justify-center flex-col">
          <span className="font-semibold text-3xl">studium</span>
          <span className="font-semibold text-xl">학습사이트</span>
        </div>
        <Link href="/signin" className="font-semibold text-xl">
          signin
        </Link>
      </nav>
      <nav className="flex items-center justify-around category w-full p-4 bg-blue-300">
        <ul>프론트엔드</ul>
        <ul>백엔드</ul>
        <ul>서버</ul>
        <ul>AI</ul>
      </nav>
    </div>
  );
};

export default Home;
