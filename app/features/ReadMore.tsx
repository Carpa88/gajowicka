'use client';

import { useState, useEffect, SetStateAction, RefObject } from 'react';
import { ActivityType } from '../src/types';

interface Props {
  setDisplayText: (value: SetStateAction<string>) => void;
  containerRef: RefObject<HTMLDivElement | null>;
  event: ActivityType;
  onReadMore: (event: ActivityType) => void;
}

const ReadMore = ({
  setDisplayText,
  containerRef,
  event,
  onReadMore,
}: Props) => {
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
  }, [containerRef, event.description, setDisplayText]);

  return (
    <>
      {isOverflowed && (
        <button
          onClick={() => onReadMore(event)}
          className="hover:underline text-sm md:text-base italic black"
        >
          Czytaj więcej
        </button>
      )}
    </>
  );
};

export default ReadMore;
