// components/chat/LiveChat.tsx
'use client';

import { useState, useEffect } from 'react';
// import { supabase } from '@/lib/supabase'; // Uncomment if using Supabase

// Static fallback messages (per prompt: sample chat, moderation filter)
const staticMessages = [
  { id: 1, username: 'PinoyFighter123', message: 'Just uploaded flood video from QC! #Floodgate', timestamp: '14:20' },
  { id: 2, username: 'LabanPH', message: 'Protests at Luneta heating up—stay safe everyone!', timestamp: '14:22' },
  { id: 3, username: 'AnonymousTipster', message: 'Ghost project in Cebu—evidence attached!', timestamp: '14:25' },
];

export function LiveChat() {
  const [messages, setMessages] = useState(staticMessages);
  const [newMessage, setNewMessage] = useState('');
  const [username] = useState('Anonymous' + Math.floor(Math.random() * 1000)); // Anonymous per prompt

  // Mock send message (filter bad words per prompt)
  const sendMessage = () => {
    if (newMessage.trim() && !newMessage.toLowerCase().includes('scam') && !newMessage.toLowerCase().includes('idiot')) {
      setMessages([...messages, { id: messages.length + 1, username, message: newMessage, timestamp: new Date().toLocaleTimeString() }]);
      setNewMessage('');
    }
  };

  // If Supabase, uncomment:
  // useEffect(() => {
  //   const channel = supabase.channel('chat');
  //   channel.on('broadcast', { event: 'message' }, ({ payload }) => setMessages((prev) => [...prev, payload]));
  //   return () => { channel.unsubscribe(); };
  // }, []);

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-gray-900 rounded-lg p-4 shadow-lg md:w-96">
      <h3 className="text-red-500 font-bold mb-2">Live Chat: #LabanSaKatiwalian</h3>
      <div className="h-64 overflow-y-auto mb-2 space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="text-sm">
            <span className="font-semibold">{msg.username}:</span> {msg.message} <span className="text-gray-400">({msg.timestamp})</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type message (anonymous)..."
        className="w-full p-2 bg-gray-800 text-white rounded mb-1"
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage} className="w-full bg-red-600 text-white p-2 rounded">Send</button>
      <button className="text-xs text-gray-400 mt-1">Report</button> {/* Per prompt */}
    </div>
  );
}
