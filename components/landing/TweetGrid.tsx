// components/landing/TweetGrid.tsx
import React from 'react';
import Image from 'next/image';

interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  date: string;
}

const tweets: Tweet[] = [
  {
    id: '1',
    author: {
      name: 'Nat Friedman',
      handle: '@natfriedman',
      avatar: '/images/avatars/nat.jpg',
      verified: true
    },
    content: 'Been using this app a lot lately; it\'s generating the best meeting notes I\'ve ever had so far. Not sure I\'ll ever live without it.',
    date: 'Jan 20, 2024'
  },
  {
    id: '2',
    author: {
      name: 'Guillaume Esuchi',
      handle: '@esuchi',
      avatar: '/images/avatars/guillaume.jpg',
      verified: true
    },
    content: 'Made love notes + AI enhancers\n\nVery clever ai-native ux. granola.so',
    date: 'Jul 22, 2024'
  },
  {
    id: '3',
    author: {
      name: 'Ian Wagner',
      handle: '@ianwags',
      avatar: '/images/avatars/ian.jpg',
      verified: true
    },
    content: 'If you aren\'t using @meetgranola for your meetings you are seriously missing out.\n\nIncredible product.',
    date: 'Jan 5, 2024'
  },
  {
    id: '4',
    author: {
      name: 'Sasha K',
      handle: '@sasha',
      avatar: '/images/avatars/sasha.jpg',
      verified: true
    },
    content: 'I get uncharacteristically excited about Zoom meetings now\n\nWhy? Because the payoff is seeing how @meetgranola really went to magic town and generate A+ meeting notes seconds after we adjourn',
    date: 'Jul 8, 2024'
  },
  {
    id: '5',
    author: {
      name: 'Sara Haider',
      handle: '@sarahaider',
      avatar: '/images/avatars/sara.jpg',
      verified: true
    },
    content: 'Strong recommendation: @meetgranola is an excellent product for meetings.\n\nKey features:\n- Transcript\n- AI summary (very useful)\n- Interactive Q&A bot for each\n- "Ask Later" - you can ask any q about headcount++ is the easiest for 12 people.',
    date: 'Sep 15, 2024'
  },
  {
    id: '6',
    author: {
      name: 'Chris Parrish',
      handle: '@chrisparrish',
      avatar: '/images/avatars/chris.jpg',
      verified: true
    },
    content: 'Time magazine selected @meetgranola as one of the Best AI innovations of 2024!',
    date: 'Jan 15, 2024'
  },
  {
    id: '7',
    author: {
      name: 'Nick G',
      handle: '@nickg',
      avatar: '/images/avatars/nick.jpg',
      verified: true
    },
    content: 'I love Granola (the AI note taking app)!',
    date: 'Sep 16, 2024'
  },
  {
    id: '8',
    author: {
      name: 'Steven Ng',
      handle: '@stevenng',
      avatar: '/images/avatars/steven.jpg',
      verified: true
    },
    content: 'Built on @meetgranola — no more "AI mistakes" needed',
    date: 'Sep 16, 2024'
  }
];

const TweetCard: React.FC<{ tweet: Tweet }> = ({ tweet }) => (
  <div className="break-inside-avoid mb-4" data-theme="light">
    <div className="react-tweet-theme p-6 bg-white rounded-xl border shadow-md hover:shadow-lg transition-all">
      {/* Author Info */}
      <div className="flex items-center gap-3 mb-2">
        <div className="relative w-10 h-10">
          <Image
            src={`/api/placeholder/40/40`} // Using placeholder as per instructions
            alt={tweet.author.name}
            width={40}
            height={40}
            className="rounded-full bg-gray-200"
          />
          {tweet.author.verified && (
            <div className="absolute -right-1 -bottom-1 bg-blue-400 rounded-full p-1">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
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
      <p className="text-gray-900 text-sm mb-2 whitespace-pre-wrap">{tweet.content}</p>

      {/* Tweet Date */}
      <div className="text-gray-500 text-xs">{tweet.date}</div>
    </div>
  </div>
);

const TweetGrid = () => {
  return (
    <section className="flex overflow-visible relative flex-col gap-16 px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl items-center lg:gap-12">
      {/* Background Gradient */}
      <div 
        // attempting to fix bug:
        //className="overflow-visible absolute -inset-full select-none z-[-1] opacity-80 translate-y-1/5"
        // style={{
        //   background: 'radial-gradient(at 71% 57%, hsla(108,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 53% 43%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 31% 51%, hsla(30,100%,50%,0.17) 0px, transparent 50%)'
        // }}
      />

      {/* Section Title */}
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
        <h1 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
          Built for people with<br />back-to-back meetings
        </h1>
      </div>

      {/* Tweet Grid */}
      <div className="max-w-4xl md:max-w-6xl px-2 col-span-5 w-full md:columns-3 mt-8">
        {tweets.map(tweet => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </section>
  );
};

export default TweetGrid;