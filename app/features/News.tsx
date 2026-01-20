'use client';

import { useState } from 'react';
import { ActivityType } from '../src/types';
import Article from './Article';

const STEP = 10;

const News = ({ news }: { news: ActivityType[] }) => {
  const [visibleCount, setVisibleCount] = useState(STEP);

  const visibleNews = news.slice(0, visibleCount);
  const hasMore = visibleCount < news.length;

  return (
    <section className="news">
      <h2>Aktualności</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2.5 overflow-hidden">
        {visibleNews.map((item, index) => (
          <Article key={item.title} data={item} index={index} />
        ))}
      </div>
      {hasMore && (
        <button
          type="button"
          className="inline-block mt-4 font-bold no-underline hover:underline"
          onClick={() => setVisibleCount((prev) => prev + STEP)}
        >
          Więcej wiadomości →
        </button>
      )}
    </section>
  );
};

export default News;
