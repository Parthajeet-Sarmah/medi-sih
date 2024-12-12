import { StateCreator } from 'zustand';
import { Message, Conversation } from '../types';

export interface MessageSlice {
  conversations: Conversation[];
  addMessage: (conversationId: number, message: Omit<Message, 'id'>) => void;
  markMessageAsRead: (conversationId: number, messageId: number) => void;
}

export const createMessageSlice: StateCreator<MessageSlice> = (set) => ({
  conversations: [
    {
      id: 1,
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Cardiologist',
      lastMessage: 'Your latest test results look good. Keep up the good work!',
      timestamp: '2024-03-15T10:30:00',
      unread: true,
      messages: [
        {
          id: 1,
          sender: 'Dr. Sarah Wilson',
          content: 'Your latest test results look good. Keep up the good work!',
          timestamp: '2024-03-15T10:30:00',
          read: false
        }
      ]
    }
  ],
  addMessage: (conversationId, message) =>
    set((state) => ({
      conversations: state.conversations.map(conv =>
        conv.id === conversationId
          ? {
              ...conv,
              lastMessage: message.content,
              timestamp: message.timestamp,
              unread: true,
              messages: [
                ...conv.messages,
                { ...message, id: conv.messages.length + 1 }
              ]
            }
          : conv
      )
    })),
  markMessageAsRead: (conversationId, messageId) =>
    set((state) => ({
      conversations: state.conversations.map(conv =>
        conv.id === conversationId
          ? {
              ...conv,
              unread: false,
              messages: conv.messages.map(msg =>
                msg.id === messageId
                  ? { ...msg, read: true }
                  : msg
              )
            }
          : conv
      )
    }))
});