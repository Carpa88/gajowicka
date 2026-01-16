import { ActivityType } from '../src/types';
import Article from './Article';

const News = ({ news }: { news: ActivityType[] }) => {
  return (
    <section className="news">
      <h2>Aktualności</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2.5 overflow-hidden">
        {news.map((item, index) => (
          <Article key={item.title} data={item} index={index} />
        ))}
      </div>
      <button
        type="button"
        className="inline-block mt-4 font-bold no-underline hover:underline"
        // onClick={handleLoadMore}
      >
        Więcej wiadomości →
      </button>
    </section>
  );
};

export default News;
