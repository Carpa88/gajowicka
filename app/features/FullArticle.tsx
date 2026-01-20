import { Dispatch, SetStateAction } from 'react';
import { ActivityType } from '../src/types';

const FullArticle = ({
  item,
  close,
}: {
  item: ActivityType;
  close: Dispatch<SetStateAction<ActivityType | null>>;
}) => (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
    <div
      className="bg-white max-w-3xl w-full max-h-[90vh] overflow-auto p-6 relative border-4"
      style={{ borderColor: 'var(--main-color)' }}
    >
      <button
        onClick={() => close(null)}
        className="absolute top-4 right-4 text-xl font-bold"
        style={{ color: 'var(--main-color)' }}
      >
        ✕
      </button>

      <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

      {item.place && (
        <p>
          <strong>Miejsce:</strong> {item.place}
        </p>
      )}
      {item.time && (
        <p>
          <strong>Czas:</strong> {item.time}
        </p>
      )}

      <p className="mt-4">{item.description}</p>
      <div className="flex items-center justify-between mt-4">
        {!!item.source?.name && (
          <a
            href={item.source.url}
            className="text-sm md:text-base hover:underline"
          >
            {item.source.name}
          </a>
        )}
      </div>
    </div>
  </div>
);

export default FullArticle;
