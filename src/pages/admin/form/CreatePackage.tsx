import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AdminDashboard from "../../../layouts/AdminDashboard";
import { createPackage } from "../../../services/packageService";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string(),
  num_of_days: Yup.number()
    .required("Number of days is required")
    .positive("Must be a positive number"),
  price: Yup.number()
    .required("Price is required")
    .positive("Must be a positive number"),
});

const CreatePackage: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      num_of_days: "",
      price: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await createPackage({
          ...values,
          num_of_days: Number(values.num_of_days),
          price: Number(values.price),
        });
        navigate("/admin/packages");
      } catch (error) {
        console.error("Error creating package:", error);
      }
    },
  });

  return (
    <AdminDashboard>
      <div className='p-6'>
        <h1 className='text-2xl font-bold mb-6'>Create Package</h1>
        <form onSubmit={formik.handleSubmit} className='max-w-lg'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium mb-1'>
              Name *
            </label>
            <input
              id='name'
              type='text'
              {...formik.getFieldProps("name")}
              className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {formik.touched.name && formik.errors.name && (
              <div className='text-red-500 text-sm mt-1'>
                {formik.errors.name}
              </div>
            )}
          </div>

          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-sm font-medium mb-1'
            >
              Description
            </label>
            <textarea
              id='description'
              {...formik.getFieldProps("description")}
              className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              rows={4}
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='num_of_days'
              className='block text-sm font-medium mb-1'
            >
              Number of Days *
            </label>
            <input
              id='num_of_days'
              type='number'
              {...formik.getFieldProps("num_of_days")}
              className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {formik.touched.num_of_days && formik.errors.num_of_days && (
              <div className='text-red-500 text-sm mt-1'>
                {formik.errors.num_of_days}
              </div>
            )}
          </div>

          <div className='mb-6'>
            <label htmlFor='price' className='block text-sm font-medium mb-1'>
              Price *
            </label>
            <input
              id='price'
              type='number'
              {...formik.getFieldProps("price")}
              className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {formik.touched.price && formik.errors.price && (
              <div className='text-red-500 text-sm mt-1'>
                {formik.errors.price}
              </div>
            )}
          </div>

          <div className='flex gap-4'>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Create Package
            </button>
            <button
              type='button'
              onClick={() => navigate("/admin/packages")}
              className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </AdminDashboard>
  );
};

export default CreatePackage;
