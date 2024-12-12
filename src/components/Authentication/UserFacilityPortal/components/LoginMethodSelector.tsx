import React from 'react';
import { Mail, Phone } from 'lucide-react';

type LoginMethod = 'phone' | 'email';

interface LoginMethodSelectorProps {
  loginMethod: LoginMethod;
  setLoginMethod: (method: LoginMethod) => void;
}

export function LoginMethodSelector({ loginMethod, setLoginMethod }: LoginMethodSelectorProps) {
  return (
    <div className="flex gap-4 mb-4">
      <button
        type="button"
        className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${
          loginMethod === 'phone'
            ? 'border-teal-600 bg-teal-50 text-teal-600'
            : 'border-gray-200 hover:border-teal-600'
        }`}
        onClick={() => setLoginMethod('phone')}
      >
        <Phone className="h-5 w-5" />
        Phone
      </button>
      <button
        type="button"
        className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${
          loginMethod === 'email'
            ? 'border-teal-600 bg-teal-50 text-teal-600'
            : 'border-gray-200 hover:border-teal-600'
        }`}
        onClick={() => setLoginMethod('email')}
      >
        <Mail className="h-5 w-5" />
        Email
      </button>
    </div>
  );
}