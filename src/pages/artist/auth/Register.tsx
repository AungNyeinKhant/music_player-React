import { FC, useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Calendar } from "lucide-react";

// Define a type for file inputs
interface FileWithPreview extends File {
  preview?: string;
}

const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bgFileInputRef = useRef<HTMLInputElement>(null);
  const nrcFrontInputRef = useRef<HTMLInputElement>(null);
  const nrcBackInputRef = useRef<HTMLInputElement>(null);
  const dobInputRef = useRef<HTMLInputElement>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Define supported image formats
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/gif",
  ];
  const FILE_SIZE = 5 * 1024 * 1024; // 5MB

  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(
        /^\+66[0-9]{6,15}$/,
        "Phone number must start with +66 and be 8-17 digits in total"
      )
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    dob: Yup.date().required("Date of birth is required"),
    image: Yup.mixed()
      .nullable()
      .test(
        "fileFormat",
        "Unsupported file format. Only jpg, jpeg, png, and gif are allowed",
        (value) => {
          if (!value) return true; // Optional field
          return (
            value instanceof File && SUPPORTED_FORMATS.includes(value.type)
          );
        }
      )
      .test("fileSize", "File too large. Max size is 5MB", (value) => {
        if (!value) return true; // Optional field
        return value instanceof File && value.size <= FILE_SIZE;
      }),
    bg_image: Yup.mixed()
      .nullable()
      .test(
        "fileFormat",
        "Unsupported file format. Only jpg, jpeg, png, and gif are allowed",
        (value) => {
          if (!value) return true; // Optional field
          return (
            value instanceof File && SUPPORTED_FORMATS.includes(value.type)
          );
        }
      )
      .test("fileSize", "File too large. Max size is 5MB", (value) => {
        if (!value) return true; // Optional field
        return value instanceof File && value.size <= FILE_SIZE;
      }),
    nrc_front: Yup.mixed()
      .required("NRC front or passport image is required")
      .test(
        "fileFormat",
        "Unsupported file format. Only jpg, jpeg, png, and gif are allowed",
        (value) => {
          if (!value) return true;
          return (
            value instanceof File && SUPPORTED_FORMATS.includes(value.type)
          );
        }
      )
      .test("fileSize", "File too large. Max size is 5MB", (value) => {
        if (!value) return true;
        return value instanceof File && value.size <= FILE_SIZE;
      }),
    nrc_back: Yup.mixed()
      .nullable()
      .test(
        "fileFormat",
        "Unsupported file format. Only jpg, jpeg, png, and gif are allowed",
        (value) => {
          if (!value) return true; // Optional field
          return (
            value instanceof File && SUPPORTED_FORMATS.includes(value.type)
          );
        }
      )
      .test("fileSize", "File too large. Max size is 5MB", (value) => {
        if (!value) return true; // Optional field
        return value instanceof File && value.size <= FILE_SIZE;
      }),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "+66",
      password: "",
      dob: "",
      image: null,
      bg_image: null,
      nrc_front: null,
      nrc_back: null,
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Register values:", values);
      // Here you would typically call your auth service
      // Example: AuthService.register(values)
    },
  });

  // Handle file input changes
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const file = event.currentTarget.files?.[0] || null;
    formik.setFieldValue(fieldName, file);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-primary py-16'>
      <div className='bg-primaryDark p-10 rounded-lg shadow-lg w-full max-w-2xl'>
        <h2 className='text-2xl font-bold mb-6 text-primaryText text-center'>
          Artist Registration
        </h2>

        <form onSubmit={formik.handleSubmit} className='space-y-6'>
          {/* Name Field */}
          <div>
            <label htmlFor='name' className='block text-primaryText mb-2'>
              Full Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='Enter your full name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className='w-full px-4 py-2 rounded bg-primary text-primaryText border border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary'
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='text-red-500 mt-1 text-sm'>
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          {/* Email Field */}
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

          {/* Phone Field */}
          <div>
            <label htmlFor='phone' className='block text-primaryText mb-2'>
              Phone Number
            </label>
            <input
              id='phone'
              name='phone'
              type='text'
              placeholder='+66xxxxxxxxx'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className='w-full px-4 py-2 rounded bg-primary text-primaryText border border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary'
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className='text-red-500 mt-1 text-sm'>
                {formik.errors.phone}
              </div>
            ) : null}
          </div>

          {/* Password Field */}
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

          {/* Date of Birth Field */}
          <div>
            <label htmlFor='dob' className='block text-primaryText mb-2'>
              Date of Birth
            </label>
            <div className='relative'>
              <input
                id='dob'
                name='dob'
                type='date'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                ref={dobInputRef}
                className='w-full px-4 py-2 rounded bg-primary text-primaryText border border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 cursor-pointer'
              />
              <Calendar
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-primaryDarkText hover:text-primaryText cursor-pointer'
                size={20}
                onClick={() => dobInputRef.current?.showPicker()}
              />
            </div>
            {formik.touched.dob && formik.errors.dob ? (
              <div className='text-red-500 mt-1 text-sm'>
                {formik.errors.dob}
              </div>
            ) : null}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Profile Image Upload */}
            <div>
              <label htmlFor='image' className='block text-primaryText mb-2'>
                Profile Image (Optional)
              </label>
              <div className='relative'>
                <input
                  id='image'
                  name='image'
                  type='file'
                  accept='image/*'
                  ref={fileInputRef}
                  onChange={(e) => handleFileChange(e, "image")}
                  className='hidden'
                />
                <button
                  type='button'
                  onClick={() => fileInputRef.current?.click()}
                  className='w-full px-4 py-2 rounded bg-primary text-primaryText border border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary text-left'
                >
                  {formik.values.image
                    ? (formik.values.image as File).name
                    : "Choose file"}
                </button>
              </div>
              {formik.touched.image && formik.errors.image ? (
                <div className='text-red-500 mt-1 text-sm'>
                  {formik.errors.image as string}
                </div>
              ) : null}
            </div>

            {/* Background Image Upload */}
            <div>
              <label htmlFor='bg_image' className='block text-primaryText mb-2'>
                Background Image (Optional)
              </label>
              <div className='relative'>
                <input
                  id='bg_image'
                  name='bg_image'
                  type='file'
                  accept='image/*'
                  ref={bgFileInputRef}
                  onChange={(e) => handleFileChange(e, "bg_image")}
                  className='hidden'
                />
                <button
                  type='button'
                  onClick={() => bgFileInputRef.current?.click()}
                  className='w-full px-4 py-2 rounded bg-primary text-primaryText border border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary text-left'
                >
                  {formik.values.bg_image
                    ? (formik.values.bg_image as File).name
                    : "Choose file"}
                </button>
              </div>
              {formik.touched.bg_image && formik.errors.bg_image ? (
                <div className='text-red-500 mt-1 text-sm'>
                  {formik.errors.bg_image as string}
                </div>
              ) : null}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* NRC Front/Passport Upload */}
            <div>
              <label
                htmlFor='nrc_front'
                className='block text-primaryText mb-2'
              >
                NRC Front or Passport (KYC) *
              </label>
              <div className='relative'>
                <input
                  id='nrc_front'
                  name='nrc_front'
                  type='file'
                  accept='image/*'
                  ref={nrcFrontInputRef}
                  onChange={(e) => handleFileChange(e, "nrc_front")}
                  className='hidden'
                />
                <button
                  type='button'
                  onClick={() => nrcFrontInputRef.current?.click()}
                  className='w-full px-4 py-2 rounded bg-primary text-primaryText border border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary text-left'
                >
                  {formik.values.nrc_front
                    ? (formik.values.nrc_front as File).name
                    : "Choose file"}
                </button>
              </div>
              {formik.touched.nrc_front && formik.errors.nrc_front ? (
                <div className='text-red-500 mt-1 text-sm'>
                  {formik.errors.nrc_front as string}
                </div>
              ) : null}
            </div>

            {/* NRC Back Upload */}
            <div>
              <label htmlFor='nrc_back' className='block text-primaryText mb-2'>
                NRC Back (Optional)
              </label>
              <div className='relative'>
                <input
                  id='nrc_back'
                  name='nrc_back'
                  type='file'
                  accept='image/*'
                  ref={nrcBackInputRef}
                  onChange={(e) => handleFileChange(e, "nrc_back")}
                  className='hidden'
                />
                <button
                  type='button'
                  onClick={() => nrcBackInputRef.current?.click()}
                  className='w-full px-4 py-2 rounded bg-primary text-primaryText border border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary text-left'
                >
                  {formik.values.nrc_back
                    ? (formik.values.nrc_back as File).name
                    : "Choose file"}
                </button>
              </div>
              {formik.touched.nrc_back && formik.errors.nrc_back ? (
                <div className='text-red-500 mt-1 text-sm'>
                  {formik.errors.nrc_back as string}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='w-full bg-secondary hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-150 ease-in-out'
            >
              Register
            </button>
          </div>
        </form>

        <div className='mt-4 text-center'>
          <span className='text-primaryDarkText'>
            Already have an account?{" "}
          </span>
          <a
            href='/artist/auth/login'
            className='text-secondary hover:text-opacity-90'
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
