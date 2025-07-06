import React from "react";
import { X } from "lucide-react";

const LetterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">My Letter to You</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            My dearest Stinki Boo,
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Two years ago, you walked into my life and changed everything. Every
            day with you has been an adventure, filled with laughter, love, and
            countless beautiful memories.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            From our first date to all the little moments in between, you've
            shown me what true love really means. Your smile brightens my
            darkest days, and your laugh is my favorite sound in the world.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm so grateful for every moment we've shared, and I can't wait to
            create many more memories together. Here's to our love story and all
            the chapters yet to be written.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With all my love,
            <br />
            Your forever partner ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
