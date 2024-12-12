import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, ChevronDown, Shield, Loader2 } from 'lucide-react';

const adminRoles = [
  { id: 'state', label: 'State Super Admin' },
  { id: 'district', label: 'District Super Admin' },
  { id: 'subdistrict', label: 'Sub District Super Admin' },
];

export function AdministrativePortal() {
  const [selectedRole, setSelectedRole] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    // Simulate OTP verification for the specified credentials
    setTimeout(() => {
      setIsVerifying(false);
      if (phoneNumber === '8250817368' && otp === '789456' && selectedRole === 'state') {
        navigate('/state-admin/overview');
      }
    }, 1500);
  };

  const handleSendOtp = () => {
    setShowOtpInput(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/auth"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Portal Selection
        </Link>

        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-teal-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Administrative Portal
              </h2>
            </div>

            <form className="space-y-6" onSubmit={handleVerifyOtp}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username or Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    className="input-field pl-10"
                    placeholder="admin@healthcare.com"
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
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Super Admin Role
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="input-field w-full text-left flex items-center justify-between"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className={selectedRole ? 'text-gray-900' : 'text-gray-400'}>
                      {selectedRole ? adminRoles.find(role => role.id === selectedRole)?.label : 'Select role'}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
                      {adminRoles.map((role) => (
                        <button
                          key={role.id}
                          type="button"
                          className="w-full px-4 py-2 text-left hover:bg-teal-50 text-gray-700 hover:text-teal-600 transition-colors"
                          onClick={() => {
                            setSelectedRole(role.id);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {role.label}
                        </button>
                      ))}
                    </div>
                  )}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}