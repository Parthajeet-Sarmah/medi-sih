import React from 'react';
import { Loader2 } from 'lucide-react';

interface OtpInputProps {
  otp: string;
  setOtp: (value: string) => void;
  isVerifying: boolean;
}

export function OtpInput({ otp, setOtp, isVerifying }: OtpInputProps) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter OTP
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="Enter 6-digit OTP"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          pattern="[a-zA-Z0-9]{6}"
          required
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center"
        disabled={isVerifying}
      >
        {isVerifying ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Verifying...
          </>
        ) : (
          'Sign In'
        )}
      </button>
    </>
  );
}