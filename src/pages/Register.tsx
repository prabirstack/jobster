import { useState } from "react";
import { Logo, FormRow } from "../components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { store } from "../app/store";

interface initialStateProps {
  name: string;
  email: string;
  password: string;
  isMember: boolean;
}

const initialState: initialStateProps = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setvalues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
    console.log(name);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setvalues({ ...values, isMember: !values.isMember });
  };

  return (
    <section className="container mx-auto grid h-screen place-items-center text-center">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* namefiled */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            labelText="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* Email filed */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        {/* Password filed */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p className="mt-2 text-grey-700">
          {values.isMember ? "Not a member yet? " : "Already a member? "}
          <button className="text-primary-500" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </section>
  );
};
export default Register;
