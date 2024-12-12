import React from 'react';
import { Mail, Phone, Lock } from 'lucide-react';
import { signUp } from '../../../../services/authService';

interface SignUpFormProps {
  formData: {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    dateOfBirth: string;
    govtIdType: string;
    govtIdNumber: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function SignUpForm({ formData, handleInputChange }: SignUpFormProps) {

  const { email, password, firstName, middleName, lastName, dateOfBirth, govtIdNumber } = formData;

  const handleSignUp = async (): Promise<void> => {
    try {
      const user = await signUp({ email, password, additionalInfo: { firstName, middleName, lastName, dateOfBirth, govtIdNumber }});
      alert(`User signed up: ${user.email}`);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      alert(errorMessage);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            className="input-field"
            placeholder="John"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Middle Name
          </label>
          <input
            type="text"
            name="middleName"
            className="input-field"
            placeholder="David"
            value={formData.middleName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="input-field"
            placeholder="Smith"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            name="email"
            className="input-field pl-10"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="password"
            name="password"
            className="input-field pl-10"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleInputChange}
            minLength={8}
            required
          />
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Password must be at least 8 characters long
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="tel"
            name="phone"
            className="input-field pl-10"
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <input
          type="date"
          name="dateOfBirth"
          className="input-field"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Government ID
        </label>
        <select
          name="govtIdType"
          className="input-field mb-2"
          value={formData.govtIdType}
          onChange={handleInputChange}
        >
          <option value="none">None</option>
          <option value="aadhar">Aadhar Card</option>
          <option value="pan">PAN Card</option>
          <option value="voter">Voter ID</option>
        </select>
        {formData.govtIdType !== 'none' && (
          <input
            type="text"
            name="govtIdNumber"
            className="input-field"
            placeholder="Enter ID number"
            value={formData.govtIdNumber}
            onChange={handleInputChange}
            required
          />
        )}
      </div>

      <button onClick={handleSignUp} className="btn-primary w-full">
        Sign Up
      </button>
    </>
  );
}