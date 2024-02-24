import { Link } from "react-router-dom";
import main from "../assets/main-1.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <main className="h-screen w-screen">
      <nav className="container mx-auto flex h-20 items-center px-8 shadow-sm">
        <Logo />
      </nav>
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-8 py-10 md:flex-row md:py-20">
        {/* info */}
        <div className=" flex flex-col items-start ">
          <h1 className="font-semibold capitalize">
            job <span className="text-primary-500">tracking</span> App
          </h1>
          <p className="max-w-md text-grey-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            inventore accusamus, exercitationem placeat magnam natus porro non
            debitis officiis ullam.
          </p>
          <Link to="/register" className="btn">
            Login/Register
          </Link>
        </div>
        {/* image */}
        <img src={main} alt="job hunt" className="w-[500px] md:mt-0" />
      </div>
    </main>
  );
};
export default Landing;
