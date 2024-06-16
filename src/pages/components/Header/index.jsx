import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-end p-4">
      <div className=" flex items-center gap-x-4  ">
        <Link to="/">
          <img src="/home.svg" className="w-5" alt="" />
        </Link>
        <img src="/avatar.svg" alt="" className="rounded-full w-8" />
      </div>
    </header>
  );
};

export default Header;
