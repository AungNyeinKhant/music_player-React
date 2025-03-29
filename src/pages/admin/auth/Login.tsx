import { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff } from "lucide-react";

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Login values:", values);
      // Here you would typically call your auth service
      // Example: AuthService.login(values.email, values.password)
    },
  });

  return (
    <div className='min-h-screen flex items-center justify-center bg-primary'>
      <div className='bg-primaryDark p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-primaryText text-center'>
          Artist Login
        </h2>

        <form onSubmit={formik.handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-primaryText mb-2'>
              Email Address
            </label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Enter your email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className='w-full px-4 py-2 rounded bg-primary text-primaryText border border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary'
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='text-red-500 mt-1 text-sm'>
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div>
            <label htmlFor='password' className='block text-primaryText mb-2'>
              Password
            </label>
            <div className='relative'>
              <input
                id='password'
                name='password'
                type={showPassword ? "text" : "password"}
                placeholder='Enter your password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className='w-full px-4 py-2 rounded bg-primary text-primaryText border border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary'
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-primaryDarkText hover:text-primaryText focus:outline-none'
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className='text-red-500 mt-1 text-sm'>
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <div>
            <button
              type='submit'
              className='w-full bg-secondary hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-150 ease-in-out'
            >
              Sign In
            </button>
          </div>
        </form>

        <div className='mt-4 text-center'>
          <a href='#' className='text-primaryDarkText hover:text-secondary'>
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
