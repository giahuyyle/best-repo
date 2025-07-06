import React from "react";
import { X } from "lucide-react";

const LetterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">our website</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            this is our website! you can visit it once in a while to see it update in realtime (it works, trust me)
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            this homepage has a few things, including: a picture of you (very cute and beautiful),
            a timer that counts how long we have been together (days, years, and decades) and this
            thing that you are reading right here!
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            you can check out the messages page (use the navbar above), where my messages are saved
            and will always be saved here. you can visit this site and read anything i have ever written
            for you here. i will post all of my mails/letters to you
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            even better, there is a milestone tab where you can see our journey together, every special date and
            occasion! we have come very far! i want us to be able to look back at the milestones and appreciate
            our precious relationship
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            and also, i included some random moments so we can always look back and have a laugh!
          </p>
          <p className="text-gray-700 leading-relaxed">
            love you always,
            <br />
            huy béo của em
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
