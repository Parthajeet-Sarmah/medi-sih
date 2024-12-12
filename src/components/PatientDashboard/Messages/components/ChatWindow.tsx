import React from 'react';
import { Send } from 'lucide-react';

interface ChatWindowProps {
  selectedDoctor?: {
    name: string;
    specialty: string;
  };
  newMessage: string;
  onMessageChange: (value: string) => void;
  onSendMessage: () => void;
}

export function ChatWindow({
  selectedDoctor,
  newMessage,
  onMessageChange,
  onSendMessage
}: ChatWindowProps) {
  if (!selectedDoctor) {
    return (
      <div className="hidden sm:flex h-full items-center justify-center bg-white rounded-xl shadow-sm text-gray-500">
        Select a conversation to start messaging
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {selectedDoctor.name}
        </h2>
        <p className="text-sm text-gray-500">
          {selectedDoctor.specialty}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Chat messages would go here */}
      </div>

      <div className="border-t p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Type your message..."
            className="input-field pr-12 text-sm"
            value={newMessage}
            onChange={(e) => onMessageChange(e.target.value)}
          />
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-teal-600 hover:text-teal-700"
            onClick={onSendMessage}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}