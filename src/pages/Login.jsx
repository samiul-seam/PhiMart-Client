import { useForm } from "react-hook-form";
import ErrorAlert from "../components/ErrorAlert";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { errorMsg, loginUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await loginUser(data);
      setTimeout(() => {
        navigate("/dashboard");
        setLoading(false)
      }, 2000);
    } catch (error) {
      console.log("Login Failed", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-base-100">
      <div className="mb-2">{errorMsg && <ErrorAlert error={errorMsg} />}</div>
      <div className="shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border px-4 py-7">
            <legend className="font-semibold text-2xl">Sign in</legend>
            <h3 className="text-gray-500 font-sm">
              Enter your email and password to access your account
            </h3>

            <label className="label">Email</label>
            <input
              type="email"
              className={`input ${errors.email ? "input-error" : null}`}
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              className={`input ${errors.password ? "input-error" : null}`}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-info mt-4"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </fieldset>

          <div className="flex justify-center gap-2">
            <Link to="/reset-password" className="link link-primary">
              Forget Password
            </Link>
            <span>|</span>
            <Link to="/resend-activation" className="link link-primary">
              Resend Activation Mail
            </Link>
          </div>

          {/* sign up */}
          <div className="text-center mt-3 mb-2">
            <h2 className="text-base-content/70">
              Don&apos;t have any account?
              <Link to={"/register"} className="link link-primary">
                Sign up
              </Link>
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
