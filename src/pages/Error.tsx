import { Link } from "react-router-dom";
import eerorImg from "../assets/not-found.svg";

const Error = () => {
  return (
    <main className="container mx-auto grid h-screen place-items-center text-center">
      <div>
        <img
          src={eerorImg}
          alt="not found"
          className="mb-8 w-[90vw] max-w-[600px]"
        />
        <h3 className="mb-2 capitalize">ohh! Page not found</h3>
        <p className="mb-2 mt-0 text-grey-500">
          We can't seem to find the page you're looking for
        </p>
        <Link to="/" className="capitalize text-primary-500 underline">
          back home
        </Link>
      </div>
    </main>
  );
};
export default Error;
