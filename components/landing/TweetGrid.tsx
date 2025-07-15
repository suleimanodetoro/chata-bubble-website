// components/TweetGrid.tsx
import React from 'react';
import { Tweet } from '@/types/Tweet';
import TweetCard from '../layout/TweetCard';

const tweets: Tweet[] = [
  {
    id: '1',
    author: {
      name: 'Harold Obasi',
      handle: '@haroldobasi',
      verified: true
    },
    content: 'My Yoruba improved drastically after using @ChataBubble for just a week. I’m hooked!',
    date: 'Jan 20, 2025'
  },
  {
    id: '2',
    author: {
      name: 'Ella M',
      handle: '@ellam_lang',
      verified: true
    },
    content: 'Super impressed by Chata Bubble’s AI persona. I’m practicing Igbo every day—feels natural, not forced.',
    date: 'Feb 3, 2025'
  },
  {
    id: '3',
    author: {
      name: 'Waheed K',
      handle: '@waheed_k',
      verified: true
    },
    content: 'Not sure I’ll ever go back to textbooks. @ChataBubble makes it so easy to learn on the go!',
    date: 'Mar 15, 2025'
  },
  {
    id: '4',
    author: {
      name: 'Megan Price',
      handle: '@megprice_ai',
      verified: true
    },
    content: 'Talking with my grandma in her native dialect used to be awkward. Thanks to @ChataBubble, not anymore!',
    date: 'Apr 8, 2025'
  },
  {
    id: '5',
    author: {
      name: 'Gauis Msehlia',
      handle: '@gmsehlia',
      verified: true
    },
    content: 'Chata Bubble is the perfect combo of fun + affordability. I’m brushing up on my Hausa like never before.',
    date: 'May 12, 2025'
  },
  {
    id: '6',
    author: {
      name: 'Victor Akoji',
      handle: '@akojivictor',
      verified: true
    },
    content: 'It’s basically FaceTime with an AI tutor. Chata Bubble’s voice checks are on another level!',
    date: 'Jun 1, 2025'
  },
  {
    id: '7',
    author: {
      name: 'Heen R',
      handle: '@heenwrites',
      verified: true
    },
    content: 'Finally—an affordable language app that doesn’t feel like homework. Chata Bubble’s a lifesaver.',
    date: 'Jul 16, 2025'
  },
  {
    id: '8',
    author: {
      name: 'Ibrahim Dattijo',
      handle: '@ibrahimdattijo',
      verified: true
    },
    content: 'I’ve tried everything, but @ChataBubble stands out. It’s legit saving dying languages, one convo at a time.',
    date: 'Aug 3, 2025'
  }
];


const TweetGrid = () => {
  return (
    <section className="flex overflow-visible relative flex-col gap-16 px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl items-center lg:gap-12">
      {/* Section Title */}
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
        <h1 className="text-3xl lg:text-5xl font-bold tracking-[-0.015em] leading-[0.95] text-balance text-emerald-900">
          What people are saying about Chata Bubble
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
