import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Phone, Mail, Loader2 } from 'lucide-react';

const facilityTypes = [
  { id: 'hospital', label: 'Hospital' },
  { id: 'doctor', label: 'Doctor' },
  { id: 'clinic', label: 'Clinic' },
  { id: 'laboratory', label: 'Laboratory' },
];

export function FacilityPortal() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showPhoneOtp, setShowPhoneOtp] = useState(false);
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [registrationId, setRegistrationId] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    // Check for specific credentials
    setTimeout(() => {
      setIsVerifying(false);
      if (registrationId === '7894561230' && otp === '789456') {
        navigate('/hospital/dashboard');
      } else if (registrationId === '1234567890' && otp === '456123') {
        navigate('/doctor/dashboard');
      }
    }, 1500);
  };

  const handleSendPhoneOtp = () => {
    setShowPhoneOtp(true);
  };

  const handleSendEmailOtp = () => {
    setShowEmailOtp(true);
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {isSignUp ? 'Register Facility' : 'Facility Login'}
      </h2>
      
      <form className="space-y-4" onSubmit={handleVerifyOtp}>
        {isSignUp ? (
          // Sign Up Form
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Facility Type
              </label>
              <select
                className="input-field"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                required
              >
                <option value="">Select Facility Type</option>
                {facilityTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration ID
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="input-field pl-10"
                  placeholder={`Enter ${selectedType || 'facility'} registration ID`}
                  value={registrationId}
                  onChange={(e) => setRegistrationId(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  className="input-field pl-10"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <button
                type="button"
                className="mt-1 text-sm text-teal-600 hover:text-teal-700"
                onClick={handleSendPhoneOtp}
              >
                Verify Phone Number
              </button>
            </div>

            {showPhoneOtp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone OTP
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  className="input-field pl-10"
                  placeholder="facility@example.com"
                  required
                />
              </div>
              <button
                type="button"
                className="mt-1 text-sm text-teal-600 hover:text-teal-700"
                onClick={handleSendEmailOtp}
              >
                Verify Email
              </button>
            </div>

            {showEmailOtp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email OTP
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  required
                />
              </div>
            )}

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
                'Sign Up'
              )}
            </button>
          </>
        ) : (
          // Sign In Form
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration ID
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="input-field pl-10"
                  placeholder="Enter facility registration ID"
                  value={registrationId}
                  onChange={(e) => setRegistrationId(e.target.value)}
                  required
                />
              </div>
            </div>

            {!showPhoneOtp ? (
              <button
                type="button"
                className="btn-primary w-full"
                onClick={handleSendPhoneOtp}
              >
                Send OTP to Registered Phone
              </button>
            ) : (
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
            )}
          </>
        )}
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        {isSignUp ? 'Already registered?' : "Need to register your facility?"}{' '}
        <button
          onClick={() => {
            setIsSignUp(!isSignUp);
            setShowPhoneOtp(false);
            setShowEmailOtp(false);
          }}
          className="text-teal-600 hover:text-teal-700 font-medium"
        >
          {isSignUp ? 'Sign In' : 'Register'}
        </button>
      </p>
    </div>
  );
}