import { useState } from 'react';
import { Package, Truck, CreditCard } from 'lucide-react';

interface OrderFormData {
  Name: string;
  Email: string;
  ShipingAddress: string;
  Quantity: number;
}

export default function OrderSection() {
  const [formData, setFormData] = useState<OrderFormData>({
    Name: '',
    Email: '',
    ShipingAddress: '',
    Quantity: 1,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Create URLSearchParams object instead of FormData
      const params = new URLSearchParams();
      params.append('Name', formData.Name);
      params.append('Email', formData.Email);
      params.append('ShipingAddress', formData.ShipingAddress);
      params.append('Quantity', formData.Quantity.toString());

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxFRiNtUnohJlfRIRAolvuIONrr3G04zJh-ArRxSX2HV4PiFidLJ0sx-Z1bf9JeE3PUow/exec",
        {
          method: "POST",
          body: params,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const data = await response.json();
      console.log('Order submitted successfully:', data);
      alert('Thank you for your order! We will contact you soon.');
      
      // Reset form after successful submission
      setFormData({
        Name: '',
        Email: '',
        ShipingAddress: '',
        Quantity: 1,
      });
      
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error submitting your order. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Map the input names to the corresponding state properties
    const fieldMapping: { [key: string]: keyof OrderFormData } = {
      'name': 'Name',
      'email': 'Email',
      'address': 'ShipingAddress',
      'quantity': 'Quantity'
    };
    
    const stateKey = fieldMapping[name];
    if (stateKey) {
      setFormData(prev => ({
        ...prev,
        [stateKey]: stateKey === 'Quantity' ? Number(value) : value
      }));
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Order Your Rocket Stove</h2>
      </div>

      {/* Order Form */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-6">Place Your Order</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.Email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
            <textarea
              name="address"
              value={formData.ShipingAddress}
              onChange={handleChange}
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.Quantity}
                onChange={handleChange}
                min="1"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>

      {/* Shipping Information */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-amber-50 p-6 rounded-xl shadow-lg">
          <Truck className="h-8 w-8 text-amber-600 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Free Shipping</h4>
        </div>
        <div className="bg-amber-50 p-6 rounded-xl shadow-lg">
          <Package className="h-8 w-8 text-amber-600 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Secure Packaging</h4>
        </div>
        <div className="bg-amber-50 p-6 rounded-xl shadow-lg">
          <CreditCard className="h-8 w-8 text-amber-600 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Secure Payment</h4>
        </div>
      </div>
      <h2 className="text-center mb-0 font-semibold text-slate-900 border">Made By Susan Pokharel</h2>
    </div>
  );
}