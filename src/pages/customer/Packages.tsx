import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getPackages } from "../../services/packageService";
import Modal from "../../components/modal/Modal";
import PaymentForm from "./form/PaymentForm";

interface Package {
  id: string;
  name: string;
  description?: string;
  num_of_days: number;
  price: number;
  created_at: string;
  updated_at: string;
}

const Packages = () => {
  const [subspackages, setSubsPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await getPackages();
        setSubsPackages(response.data.data);
        setError(null);
      } catch (err) {
        setError("Failed to load packages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen bg-primaryDark text-primaryText p-6 flex items-center justify-center'>
        Loading packages...
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen bg-primaryDark text-primaryText p-6 flex items-center justify-center'>
        {error}
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-primaryDark text-primaryText p-6'>
      <Link
        to='/app'
        className='flex items-center gap-2 text-primaryDarkText hover:text-primaryText transition-colors mb-8'
      >
        <ArrowLeft size={16} />
        Go Back
      </Link>

      <div className='min-h-[calc(50vh-8rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {subspackages.map((pkg) => (
          <div
            key={pkg.id}
            className='w-full bg-primary rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-secondary/20 hover:border-secondary'
          >
            <h2 className='text-2xl font-bold text-secondary mb-3'>
              {pkg.name}
            </h2>
            {pkg.description ? (
              <p className='text-primaryDarkText mb-4'>{pkg.description}</p>
            ) : (
              <p className='text-primaryDarkText mb-4'>No Description</p>
            )}
            <div className='space-y-2'>
              <p className='flex justify-between'>
                <span className='text-primaryDarkText'>Duration:</span>
                <span className='font-medium'>{pkg.num_of_days} days</span>
              </p>
              <p className='flex justify-between'>
                <span className='text-primaryDarkText'>Price:</span>
                <span className='font-medium text-secondary'>
                  {pkg.price} MMK
                </span>
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedPackage(pkg);
                setShowModal(true);
              }}
              className='w-full mt-6 bg-secondary text-primaryText py-2 rounded-md hover:bg-secondary/90 transition-colors'
            >
              Select Package
            </button>
          </div>
        ))}
      </div>

      <Modal
        title='Package Payment'
        showModal={showModal}
        setShowModal={setShowModal}
      >
        {selectedPackage && (
          <PaymentForm
            packageId={selectedPackage.id}
            packageName={selectedPackage.name}
            packagePrice={selectedPackage.price}
          />
        )}
      </Modal>
    </div>
  );
};

export default Packages;
