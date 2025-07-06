import React, { useState, useEffect } from "react";
import { Heart, Search, ArrowLeft, Star } from "lucide-react";
import { getMessages } from "../data/messagesData";

const Message = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getSenderDisplay = (sender) => {
    return sender === "huy" ? "huy bíu" : "trúc thúi";
  };

  if (selectedMessage) {
    return (
      <div className="min-h-screen pt-16 bg-black text-white">
        <div className="max-w-4xl mx-auto p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setSelectedMessage(null)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Messages
            </button>
            <h1 className="text-2xl font-bold leading-tight text-gray-300">
              Message
            </h1>
          </div>

          {/* Message Detail */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-lg font-medium">
                    {getSenderDisplay(selectedMessage.sender)[0]}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium">
                    {getSenderDisplay(selectedMessage.sender)}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {formatDate(selectedMessage.date)}
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Star
                  size={20}
                  fill={selectedMessage.starred ? "currentColor" : "none"}
                />
              </button>
            </div>

            <h2 className="text-xl font-semi-bold mb-6">
              subject: {selectedMessage.subject}
            </h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 leading-relaxed text-lg whitespace-pre-line">
                {selectedMessage.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-black text-white">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold leading-tight text-gray-300">
              Messages
            </h1>
            <p className="text-gray-400">since the day we met</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search messages..."
                className="bg-gray-900 text-white pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:border-gray-500 focus:outline-none w-64"
              />
            </div>
            <Heart className="text-red-400" size={24} />
          </div>
        </div>

        {/* Messages List */}
        <div className="space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              onClick={() => setSelectedMessage(message)}
              className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg p-6 cursor-pointer transition-all duration-200 hover:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">
                      {getSenderDisplay(message.sender)[0]}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-white">
                        {getSenderDisplay(message.sender)}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {formatDate(message.date)}
                      </span>
                    </div>
                    <p className="text-white font-medium mb-2">
                      {message.subject}
                    </p>
                    <p className="text-gray-400 text-sm truncate">
                      {message.content.substring(0, 100)}...
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                    <Star
                      size={16}
                      fill={message.starred ? "currentColor" : "none"}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            {messages.length} messages • our love, captured in words
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
