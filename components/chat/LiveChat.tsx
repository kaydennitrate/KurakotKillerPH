"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Image, Pin, Flag, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface ChatMessage {
  id: number;
  username: string;
  message: string;
  timestamp: Date;
  isPinned?: boolean;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
}

// Mock chat messages
const initialMessages: ChatMessage[] = [
  {
    id: 1,
    username: 'PinoyFighter123',
    message: 'Just uploaded a flood video from QC! The drainage they built for ₱500M is completely useless.',
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: 2,
    username: 'ManilaBayWatcher',
    message: 'Guys, I found documents showing the actual contractor list. Posting now!',
    timestamp: new Date(Date.now() - 240000),
    isPinned: true,
  },
  {
    id: 3,
    username: 'FloodVictim2025',
    message: 'My barangay has been flooded 3x this month despite the "world-class" pump station. Where did our ₱2B go? 😡',
    timestamp: new Date(Date.now() - 180000),
  },
  {
    id: 4,
    username: 'ProtestOrganizer',
    message: 'EDSA protest tomorrow 2PM! Bring water and signs. Let\'s make our voices heard! #LabanSaKatiwalian',
    timestamp: new Date(Date.now() - 120000),
    isPinned: true,
  },
  {
    id: 5,
    username: 'AnonymousTipster',
    message: 'I have inside info on the Cebu project. DM me if you\'re a journalist.',
    timestamp: new Date(Date.now() - 60000),
  }
];

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [username] = useState(() => `PinoyFighter${Math.floor(Math.random() * 1000)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now(),
        username,
        message: newMessage.trim(),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-PH', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const pinMessage = (messageId: number) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, isPinned: !msg.isPinned }
          : msg
      )
    );
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg chat-float"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">{t('live_chat')}</span>
          {/* New message indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
        </Button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isMinimized ? 'w-80' : 'w-80 md:w-96'}`}>
      <Card className="bg-gray-800 border-red-600 shadow-xl">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-white">{t('live_chat')}</span>
              <span className="text-xs text-gray-400">
                ({messages.length} {t('messages')})
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-400 hover:text-white p-1"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0">
            {/* Messages */}
            <div className="h-80 overflow-y-auto chat-scroll px-4 pb-2 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`group ${message.isPinned ? 'bg-yellow-900/20 border border-yellow-600 rounded p-2' : ''}`}
                >
                  <div className="flex items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-red-400 text-sm">
                          {message.username}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatTime(message.timestamp)}
                        </span>
                        {message.isPinned && (
                          <Pin className="w-3 h-3 text-yellow-400 fill-current" />
                        )}
                      </div>
                      <p className="text-gray-200 text-sm break-words">
                        {message.message}
                      </p>
                      {message.mediaUrl && (
                        <div className="mt-2 rounded overflow-hidden">
                          {message.mediaType === 'image' ? (
                            <img 
                              src={message.mediaUrl} 
                              alt="Chat media"
                              className="max-w-full h-32 object-cover"
                            />
                          ) : (
                            <video 
                              src={message.mediaUrl}
                              className="max-w-full h-32"
                              controls
                            />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => pinMessage(message.id)}
                        className="text-gray-400 hover:text-yellow-400 p-1"
                      >
                        <Pin className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-red-400 p-1"
                      >
                        <Flag className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Image className="w-4 h-4" />
                </Button>
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('type_message')}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 flex-1"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-red-600 hover:bg-red-700 text-white p-2"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {t('chat_as')} <span className="font-medium text-red-400">{username}</span>
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
