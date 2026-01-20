'use client';
import { useState, useEffect } from 'react';
import { ActivityType } from '../src/types';
import Inside from './Inside';
import FullArticle from './FullArticle';

const Events = ({ events }: { events: ActivityType[] }) => {
  const [index, setIndex] = useState(0);
  const [openEvent, setOpenEvent] = useState<ActivityType | null>(null);

  useEffect(() => {
    if (events.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <section
      id="events"
      className="w-full"
      style={{ height: 'var(--events-height)' }}
    >
      <h2>Nadchodzące wydarzenia</h2>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex flex-row transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {events.map((event) => (
            <Inside event={event} key={event.title} onReadMore={setOpenEvent} />
          ))}
        </div>
      </div>

      <div
        className="flex justify-center space-x-2"
        style={{ marginTop: '1rem' }}
      >
        {events.map((_, i) => (
          <button
            key={i}
            className="w-3 h-3 rounded-full transition-colors block"
            style={{
              backgroundColor: i === index ? 'var(--main-color)' : '#9ca3af',
              marginRight: '0.5rem',
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      {openEvent && (
        <FullArticle item={openEvent} close={() => setOpenEvent(null)} />
      )}
    </section>
  );
};

export default Events;
