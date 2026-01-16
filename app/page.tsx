import Events from './features/Events';
import { parseMarkdown } from './src/utils/loadNews';
import News from './features/News';
import Schedule from './features/Schedule';
import { ActivityType } from './src/types';

export default function Home() {
  const actions = parseMarkdown();

  const { events, news } = actions.reduce(
    (acc, item) => {
      if (item.type === 'event') acc.events.push(item);
      if (item.type === 'news') acc.news.push(item);
      return acc;
    },
    { events: [] as ActivityType[], news: [] as ActivityType[] }
  );
  return (
    <main className="layout-container">
      <Events events={events} />
      <News news={news} />
      <Schedule />
    </main>
  );
}
