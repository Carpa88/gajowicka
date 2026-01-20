'use client';

import { ActivityType } from '../src/types';
import Image from 'next/image';
import ReadMore from './ReadMore';
import { useRef, useState } from 'react';
import FullArticle from './FullArticle';

const Article = ({ data, index }: { data: ActivityType; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState(data.description);
  const [openEvent, setOpenEvent] = useState<ActivityType | null>(null);

  return (
    <article
      className={`news-item bg-white rounded-lg shadow-sm p-4 flex flex-col h-full overflow-hidden
        ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
      `}
    >
      {!!data.image && (
        <div className="news-image w-full h-[40%] min-h-[10rem] rounded-md mb-3 overflow-hidden filter brightness-[0.85] opacity-80 relative">
          <Image
            src={data.image}
            fill
            alt={`Zdięcie ${data.title}`}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <h4>{data.title}</h4>
      <p
        ref={containerRef}
        className="flex-grow overflow-hidden text-ellipsis py-3"
      >
        {displayText}
      </p>
      <div className="flex items-center justify-between gap-4 mt-auto">
        {!!data.source?.name && (
          <a
            href={data.source.url}
            className="text-sm md:text-base hover:underline"
          >
            {data.source.name}
          </a>
        )}
        <ReadMore
          containerRef={containerRef}
          setDisplayText={setDisplayText}
          event={data}
          onReadMore={setOpenEvent}
        />
      </div>
      {openEvent && (
        <FullArticle item={openEvent} close={() => setOpenEvent(null)} />
      )}
    </article>
  );
};

export default Article;
