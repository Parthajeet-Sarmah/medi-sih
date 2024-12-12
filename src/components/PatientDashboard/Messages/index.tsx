import React, { useState } from 'react';
import { ConversationList } from './components/ConversationList';
import { ChatWindow } from './components/ChatWindow';
import { usePatientStore } from '../../../store/usePatientStore';

export function Messages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');
  
  const { conversations, addMessage } = usePatientStore();

  const selectedDoctor = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      addMessage(selectedConversation, {
        sender: 'You',
        content: newMessage,
        timestamp: new Date().toISOString(),
        read: true
      });
      setNewMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-1/3 h-1/2 sm:h-full">
        <ConversationList
          conversations={conversations}
          selectedConversation={selectedConversation}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onConversationSelect={setSelectedConversation}
        />
      </div>

      <div className="flex-1 h-1/2 sm:h-full">
        <ChatWindow
          selectedDoctor={selectedDoctor ? {
            name: selectedDoctor.doctor,
            specialty: selectedDoctor.specialty
          } : undefined}
          newMessage={newMessage}
          onMessageChange={setNewMessage}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}