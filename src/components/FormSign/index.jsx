import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ShoppingCartContext } from "../../Context";

export default function FormSign() {
  const context = useContext(ShoppingCartContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const user = useLocalStorage("user");
  const login = useLocalStorage("login");
  const onSubmit = (data) => {
    if (user.items) {
      if (
        data.username === user.items.username &&
        data.password === user.items.password
      ) {
        login.saveItems(true);
        context.setLogin(true);
        navigate("/");
      } else {
        setError("password", {
          type: "value",
          message: "Credenciales incorrectas",
        });
      }
    } else {
      user.saveItems(data);
      login.saveItems(true);
      context.setUserData(data);
      context.setLogin(true);
      navigate("/");
    }
  };

  return (
    <div className="grid gap-2 lg:relative lg:left-10 lg:grid-cols-2 ">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              name="username"
              type="text"
              {...register("username", { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.username && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {!login.items && !user.items && (
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
          )}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              {...register("password", {
                required: { value: true, message: "This field is required" },
                minLength: { value: 6, message: "min 6 characteres" },
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="grid gap-3">
            {user.items && (
              <>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
              >
                Sign In
              </button>
              <p className="text-xs underline font-semibold text-gray-500 m-auto mb-3">Forgot My Password</p>
              </>
            )}
            {user.items ? (
              <p className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 contrast-50 cursor-pointer">
                Sign up
              </p>
            ) : (
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-emerald-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              >
                Sign up
              </button>
            )}
          </div>
        </form>
      </div>
      <img
        src="/img/login.svg"
        alt="login"
        width="200"
        className="lg:absolute lg:bottom-0  lg:left-64"
      />
    </div>
  );
}
