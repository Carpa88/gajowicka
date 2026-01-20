'use client';

import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { ActivityType } from '../src/types';
import ReadMore from './ReadMore';

const Inside = ({
  event,
  onReadMore,
}: {
  event: ActivityType;
  onReadMore: Dispatch<SetStateAction<ActivityType | null>>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState(event.description);
  return (
    <div className="min-w-full h-full flex flex-col px-4 md:px-6 lg:px-8 md:border-l-2 md:border-[var(--main-color)] border-0">
      <div
        className="flex flex-col items-stretch h-full relative snap-start rounded-lg overflow-hidden bg-none

                  sm:bg-[linear-gradient(to_right,#f4f4f4_40%,rgba(244,244,244,0)_100%),url('/event1.jpg')]
                  sm:bg-cover md:bg-center md:bg-no-repeat

                  border-2 border-[var(--main-color)] sm:border-0
                "
      >
        <div
          className="w-full md:w-[60%] p-6 md:p-8 flex flex-col h-full min-h-0 overflow-hidden relative"
          style={{
            height: 'calc(var(--events-height) - 7rem)',
          }}
        >
          <div>
            <h3 className="text-xl md:text-2xl xl:text-4xl font-semibold mb-2">
              {event.title}
            </h3>

            <p className="text-sm md:text-base xl:text-2xl">
              <strong>Miejsce: </strong>
              {event.place}
            </p>

            <p className="text-sm md:text-base xl:text-2xl">
              <strong>Czas: </strong>
              {event.time}
            </p>
          </div>
          <div className="mt-4 flex-grow overflow-hidden">
            <p
              ref={containerRef}
              className="text-sm md:text-base xl:text-2xl"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                height: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxHeight: '100%',
              }}
            >
              {displayText}
            </p>
          </div>

          <div className="t-4 flex justify-between items-center">
            {event.source?.name && (
              <a
                href={event.source.url}
                className="underline text-sm md:text-base xl:text-2xl"
              >
                {event.source.name}
              </a>
            )}
            <ReadMore
              setDisplayText={setDisplayText}
              containerRef={containerRef}
              event={event}
              onReadMore={onReadMore}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inside;
