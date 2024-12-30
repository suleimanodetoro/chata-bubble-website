// components/TweetCard.tsx

import React from 'react';
import Image from 'next/image';
import { Tweet } from '@/types/Tweet'; 

interface TweetCardProps {
  tweet: Tweet;
}

const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  // Use the author's handle (or name) as the seed to get a consistent avatar for each user
  const diceBearUrl = `https://api.dicebear.com/6.x/fun-emoji/png?seed=${encodeURIComponent(
    tweet.author.handle
  )}&size=40`;
  

  return (
    <div className="break-inside-avoid mb-4" data-theme="light">
      <div className="react-tweet-theme p-6 bg-white rounded-xl border shadow-md hover:shadow-lg transition-all">
        
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-2">
          <div className="relative w-10 h-10">
            <Image
              src={diceBearUrl}
              alt={tweet.author.name}
              width={40}
              height={40}
              className="rounded-full bg-gray-200"
            />
            {tweet.author.verified && (
              <div className="absolute -right-1 -bottom-1 bg-blue-400 rounded-full p-1">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
            )}
          </div>

          <div>
            <div className="font-medium text-sm">{tweet.author.name}</div>
            <div className="text-gray-500 text-sm">{tweet.author.handle}</div>
          </div>
        </div>

        {/* Tweet Content */}
        <p className="text-gray-900 text-sm mb-2 whitespace-pre-wrap">
          {tweet.content}
        </p>

        {/* Tweet Date */}
        <div className="text-gray-500 text-xs">{tweet.date}</div>
      </div>
    </div>
  );
};

export default TweetCard;
