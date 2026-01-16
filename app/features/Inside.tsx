'use client';

import { useRef, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { ActivityType } from '../src/types';

const Inside = ({
  event,
  onClick,
}: {
  event: ActivityType;
  onClick: Dispatch<SetStateAction<ActivityType | null>>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState(event.description);
  const [isOverflowed, setIsOverflowed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const fullText = event.description;
    let truncated = fullText;

    el.innerText = fullText;

    while (el.scrollHeight > el.clientHeight && truncated.length > 0) {
      truncated = truncated.slice(0, -1);
      el.innerText = truncated + '...';
    }

    setDisplayText(el.innerText);
    setIsOverflowed(el.innerText.slice(-3) === '...');
  }, [event.description]);

  return (
    <div className="min-w-full h-full flex flex-col px-4 md:px-6 lg:px-8 border-l-2 border-[var(--main-color)]">
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
            {isOverflowed && (
              <button
                onClick={() => onClick(event)}
                className="mt-4 underline text-sm md:text-base"
              >
                Czytaj więcej
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inside;
