import { FC, useState, useEffect } from "react";
import { purchasePackage } from "../../../services/packageService";
import { useSocket } from "../../../context/SocketContext";
import { useAuth } from "../../../context/AuthContext";

interface PaymentFormProps {
  packageId: string;
  packageName: string;
  packagePrice: number;
}

const PaymentForm: FC<PaymentFormProps> = ({
  packageId,
  packageName,
  packagePrice,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const { on, off } = useSocket();
  const auth = useAuth();

  useEffect(() => {
    let isSubscribed = false;
    
    if (auth?.user?.id) {
      isSubscribed = true;
      const eventName = `purchase_status_${auth.user.id}`;
      
      // Listen for purchase status updates
      on(eventName, (status: string) => {
        if (!isSubscribed) return;
        
        if (status === "approved") {
          alert(
            "Your payment has been approved! Your subscription is now active."
          );
        } else if (status === "rejected") {
          alert(
            "Your payment has been rejected. Please try again or contact support."
          );
        }
      });

      // Cleanup function
      return () => {
        isSubscribed = false;
        off(eventName);
      };
    }

    return () => {
      isSubscribed = false;
    };
  }, [auth?.user, on, off]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const fileInput = form.screenshot as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (!file) {
      setError("Please upload a payment screenshot");
      setLoading(false);
      return;
    }

    try {
      await purchasePackage(packageId, file);
      form.reset();
      alert("Payment submitted successfully! Please wait for admin approval.");
    } catch (err) {
      setError("Failed to process payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='space-y-2'>
        <h3 className='text-lg font-medium text-dashboard-primaryText'>
          Payment Details
        </h3>
        <p className='text-dashboard-primaryText opacity-80'>
          Package: {packageName}
        </p>
        <p className='text-dashboard-primaryText opacity-80'>
          Price: {packagePrice} MMK
        </p>
      </div>

      <div className='space-y-2'>
        <label
          htmlFor='screenshot'
          className='block text-sm font-medium text-dashboard-primaryText'
        >
          Payment Screenshot
        </label>
        <input
          type='file'
          id='screenshot'
          name='screenshot'
          accept='image/*'
          required
          className='w-full px-3 py-2 bg-dashboard-primaryDark text-dashboard-primaryText rounded-md focus:outline-none focus:ring-2 focus:ring-dashboard-secondary'
        />
      </div>

      <div className='pt-4'>
        <button
          type='submit'
          className='w-full bg-dashboard-secondary text-white py-2 rounded-md hover:bg-dashboard-secondary/90 transition-colors'
        >
          Submit Payment
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
