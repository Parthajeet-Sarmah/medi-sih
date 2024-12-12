import React from 'react';
import { Search } from 'lucide-react';

interface Conversation {
  id: number;
  doctor: string;
  specialty: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedConversation: number | null;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onConversationSelect: (id: number) => void;
}

export function ConversationList({
  conversations,
  selectedConversation,
  searchTerm,
  onSearchChange,
  onConversationSelect
}: ConversationListProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Messages</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="pl-10 input-field text-sm"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            className={`w-full p-3 rounded-lg text-left transition-colors ${
              selectedConversation === conversation.id
                ? 'bg-teal-50'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => onConversationSelect(conversation.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900 text-sm">{conversation.doctor}</h3>
                <p className="text-xs text-gray-500">{conversation.specialty}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-500">
                  {new Date(conversation.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
                {conversation.unread && (
                  <span className="mt-1 w-2 h-2 bg-teal-500 rounded-full"></span>
                )}
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
              {conversation.lastMessage}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}