import React from 'react';
import { User } from 'lucide-react';

interface PhoneInputProps {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
}

export function PhoneInput({ phoneNumber, setPhoneNumber }: PhoneInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Phone Number
      </label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="tel"
          className="input-field pl-10"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
    </div>
  );
}