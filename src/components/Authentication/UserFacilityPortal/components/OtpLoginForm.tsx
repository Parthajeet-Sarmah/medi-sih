import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface OtpLoginFormProps {
  loginMethod: 'phone' | 'email';
  formData: {
    email: string;
    phone: string;
    otp: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showOtpInput: boolean;
  handleSendOtp: () => void;
  onPasswordLogin: () => void;
}

export function OtpLoginForm({
  loginMethod,
  formData,
  handleInputChange,
  showOtpInput,
  handleSendOtp,
  onPasswordLogin,
}: OtpLoginFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {loginMethod === 'phone' ? 'Phone Number' : 'Email Address'}
        </label>
        <div className="relative">
          {loginMethod === 'phone' ? (
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          ) : (
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          )}
          <input
            type={loginMethod === 'phone' ? 'tel' : 'email'}
            name={loginMethod}
            className="input-field pl-10"
            placeholder={loginMethod === 'phone' ? '+91 XXXXX XXXXX' : 'you@example.com'}
            value={loginMethod === 'phone' ? formData.phone : formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      {!showOtpInput ? (
        <div className="space-y-3">
          <button
            type="button"
            className="btn-primary w-full"
            onClick={handleSendOtp}
          >
            Send OTP
          </button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onPasswordLogin}
            className="w-full text-center text-sm text-teal-600 hover:text-teal-700 font-medium"
          >
            Verify using Email and Password
          </button>
        </div>
      ) : (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter OTP
          </label>
          <input
            type="text"
            name="otp"
            className="input-field"
            placeholder="Enter 6-digit OTP"
            maxLength={6}
            value={formData.otp}
            onChange={handleInputChange}
            pattern="[a-zA-Z0-9]{6}"
            required
          />
          <button type="submit" className="btn-primary w-full mt-4">
            Verify & Sign In
          </button>
        </div>
      )}
    </div>
  );
}