import { Check } from "lucide-react";

const PaymentMode = () => {
  return (
    <main className="mt-4 border bg-white rounded-lg p-4">
      <p className="font-semibold text-lg mb-4">Payment Mode</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="flex gap-3 items-center">
            <Check className="text-[#4CA72C]"/>
            <p>Deposit to Account</p>
          </div>
          <div className="flex gap-3 items-center">
            <Check className="text-[#4CA72C]"/>
            <p>Credit Card/Debit Card</p>
          </div>
          <div className="flex gap-3 items-center">
            <Check className="text-[#4CA72C]"/>
            <p>Wallets (PayTM/PhonePe/Amazon etc.)</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-3 items-center">
            <Check className="text-[#4CA72C]"/>
            <p>Net Banking</p>
          </div>
          <div className="flex gap-3 items-center">
            <Check className="text-[#4CA72C]"/>
            <p>UPI</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentMode;
