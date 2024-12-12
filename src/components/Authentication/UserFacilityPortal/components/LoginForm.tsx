import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { LoginMethodSelector } from './LoginMethodSelector';

type LoginMethod = 'phone' | 'email';

interface LoginFormProps {
  loginMethod: LoginMethod;
  setLoginMethod: (method: LoginMethod) => void;
  formData: {
    email: string;
    phone: string;
    otp: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showOtpInput: boolean;
  handleSendOtp: () => void;
}

export function LoginForm({
  loginMethod,
  setLoginMethod,
  formData,
  handleInputChange,
  showOtpInput,
  handleSendOtp,
}: LoginFormProps) {
  return (
    <>
      <LoginMethodSelector loginMethod={loginMethod} setLoginMethod={setLoginMethod} />

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
        <button
          type="button"
          className="btn-primary w-full"
          onClick={handleSendOtp}
        >
          Send OTP
        </button>
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
    </>
  );
}