import React, { useState } from 'react';
import { User, Lock, Bell, Shield, Save, Users, Database, FileText } from 'lucide-react';

interface AdminProfile {
  name: string;
  email: string;
  phone: string;
  role: string;
  district: string;
}

interface NotificationSettings {
  criticalAlerts: boolean;
  resourceUpdates: boolean;
  schemeUpdates: boolean;
  reportGeneration: boolean;
  systemUpdates: boolean;
}

export function Settings() {
  const [profile, setProfile] = useState<AdminProfile>({
    name: 'State Admin',
    email: 'admin@healthcare.gov.in',
    phone: '+91 8250817368',
    role: 'State Super Admin',
    district: 'All Districts'
  });

  const [notifications, setNotifications] = useState<NotificationSettings>({
    criticalAlerts: true,
    resourceUpdates: true,
    schemeUpdates: true,
    reportGeneration: false,
    systemUpdates: true
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-5 w-5 text-teal-600" />
              <h2 className="text-xl font-semibold text-gray-900">Admin Profile</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="input-field"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="input-field"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={profile.role}
                  disabled
                />
              </div>
            </div>

            <button className="mt-6 btn-primary flex items-center gap-2">
              <Save className="h-5 w-5" />
              Save Changes
            </button>
          </div>

          {/* Access Control */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-5 w-5 text-teal-600" />
              <h2 className="text-xl font-semibold text-gray-900">Access Control</h2>
            </div>

            <div className="space-y-4">
              <button className="btn-secondary w-full flex items-center justify-center gap-2">
                <Lock className="h-5 w-5" />
                Manage User Permissions
              </button>
              <button className="btn-secondary w-full flex items-center justify-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </button>
              <button className="btn-secondary w-full flex items-center justify-center gap-2">
                <Database className="h-5 w-5" />
                Data Access Rules
              </button>
            </div>
          </div>
        </div>

        {/* Notifications & System */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="h-5 w-5 text-teal-600" />
              <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
            </div>

            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={value}
                      onChange={() =>
                        setNotifications({ ...notifications, [key]: !value })
                      }
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-5 w-5 text-teal-600" />
              <h2 className="text-xl font-semibold text-gray-900">System</h2>
            </div>

            <div className="space-y-4">
              <button className="btn-secondary w-full">System Preferences</button>
              <button className="btn-secondary w-full">Backup Settings</button>
              <button className="btn-secondary w-full">Audit Logs</button>
              <button className="btn-secondary w-full text-red-600 hover:text-red-700">
                Reset System
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}