import { ActivityType } from '../src/types';
import Article from './Article';

const News = ({ news }: { news: ActivityType[] }) => {
  return (
    <section className="news">
      <h2>Aktualności</h2>
      <div className="news-grid">
        {news.map((item) => (
          <Article key={item.title} data={item} />
        ))}
      </div>
      <a href="#" className="more-news">
        Więcej wiadomości →
      </a>
    </section>
  );
};

export default News;
