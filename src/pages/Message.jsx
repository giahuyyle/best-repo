import React, { useState } from "react";
import { Heart, Search, ArrowLeft, Star } from "lucide-react";

const Message = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const messages = [
    {
      id: 1,
      sender: "truc",
      date: "2025-07-06",
      subject: "Good morning, my love ☀️",
      content:
        "woke up thinking about you again... can't believe it's been 2 years already. remember when we first met at that coffee shop? you were so shy but your smile made my whole day brighter. i love how we've grown together, how you always know exactly what to say when i'm having a rough day. thank you for being my person, huy. can't wait to see what the next chapter holds for us 💕",
      starred: true,
    },
    {
      id: 2,
      sender: "huy",
      date: "2025-07-05",
      subject: "thinking of you",
      content:
        "just wanted to say i'm so grateful for you, truc. the way you laugh at my terrible jokes, how you always steal my hoodies but look so much better in them than i do. i love our late night conversations about everything and nothing. you make the ordinary feel extraordinary. love you more than words can express ❤️",
      starred: false,
    },
    {
      id: 3,
      sender: "truc",
      date: "2025-07-04",
      subject: "remember this? 📸",
      content:
        "found this old photo of us from our first date... you were so nervous you spilled coffee on your shirt! but even then i knew you were special. the way you made me laugh even when you were embarrassed, how you offered to walk me home even though it was completely out of your way. i fell for your kindness first, then everything else followed. still falling for you every single day 🥰",
      starred: true,
    },
    {
      id: 4,
      sender: "huy",
      date: "2025-07-03",
      subject: "our song came on the radio",
      content:
        "was driving to work and our song started playing... immediately thought of you dancing in the kitchen last sunday morning. you were making pancakes and singing off-key but it was the most beautiful thing i'd ever heard. i love how comfortable we've become with each other, how we can be completely ourselves. you're my favorite person, truc. always and forever 💫",
      starred: false,
    },
    {
      id: 5,
      sender: "truc",
      date: "2025-07-02",
      subject: "just because 💝",
      content:
        "no special reason for this message, just wanted to remind you how much you mean to me. you're the first person i want to tell good news to, the one i turn to when things get tough. you've seen me at my worst and somehow still choose to love me. that means everything. thank you for being patient with me, for believing in us even when i have my doubts. you're my home, huy 🏠",
      starred: true,
    },
    {
      id: 6,
      sender: "huy",
      date: "2025-07-01",
      subject: "2 years ago today...",
      content:
        "it was exactly 2 years ago that i first told you i loved you. i was so scared you'd think it was too soon, but you just smiled and said you'd been waiting for me to say it. best risk i ever took. every day with you feels like an adventure, even the quiet ones where we just exist together. here's to many more years of loving you, truc. you're my forever person 💍",
      starred: true,
    },
  ];

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

            <h2 className="text-xl font-medium mb-6">
              {selectedMessage.subject}
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
