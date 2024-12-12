import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginMethodSelector } from './components/LoginMethodSelector';
import { OtpLoginForm } from './components/OtpLoginForm';
import { PasswordLoginForm } from './components/PasswordLoginForm';
import { SignUpForm } from './components/SignUpForm';

type LoginMethod = 'phone' | 'email';
type LoginMode = 'otp' | 'password';

export function UserPortal() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('phone');
  const [loginMode, setLoginMode] = useState<LoginMode>('otp');
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    dateOfBirth: '',
    govtIdType: 'none',
    govtIdNumber: '',
    otp: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    if (isSignUp) {
      // Handle signup verification
      setTimeout(() => {
        setIsVerifying(false);
        // Store user data in localStorage or your preferred state management solution
        localStorage.setItem('currentUser', JSON.stringify({
          name: `${formData.firstName} ${formData.middleName ? formData.middleName + ' ' : ''}${formData.lastName}`,
          email: formData.email,
          phone: formData.phone
        }));
        navigate('/patient/dashboard');
      }, 1500);
    } else {
      // Handle login verification
      setTimeout(() => {
        setIsVerifying(false);
        if (formData.phone === '7479191622' && /^[a-zA-Z0-9]{6}$/.test(formData.otp)) {
          navigate('/patient/dashboard');
        }
      }, 1500);
    }
  };

  const handleSendOtp = () => {
    setShowOtpInput(true);
  };

  const handlePasswordLogin = () => {
    setLoginMode('password');
  };

  const handleBackToOtp = () => {
    setLoginMode('otp');
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {isSignUp ? 'Create User Account' : 'User Login'}
      </h2>
      
      {!isSignUp && loginMode === 'otp' && (
        <LoginMethodSelector loginMethod={loginMethod} setLoginMethod={setLoginMethod} />
      )}
      
      <form className="space-y-6" onSubmit={handleVerifyOtp}>
        {isSignUp ? (
          <SignUpForm 
            formData={formData}
            handleInputChange={handleInputChange}
          />
        ) : loginMode === 'otp' ? (
          <OtpLoginForm
            loginMethod={loginMethod}
            formData={formData}
            handleInputChange={handleInputChange}
            showOtpInput={showOtpInput}
            handleSendOtp={handleSendOtp}
            onPasswordLogin={handlePasswordLogin}
          />
        ) : (
          <div className="space-y-4">
            <PasswordLoginForm
              email={formData.email}
              password={formData.password}
              handleInputChange={handleInputChange}
            />
            <button
              type="button"
              onClick={handleBackToOtp}
              className="w-full text-center text-sm text-teal-600 hover:text-teal-700 font-medium"
            >
              Back to OTP Login
            </button>
          </div>
        )}
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          onClick={() => {
            setIsSignUp(!isSignUp);
            setShowOtpInput(false);
            setLoginMode('otp');
          }}
          className="text-teal-600 hover:text-teal-700 font-medium"
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}