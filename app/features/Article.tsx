import { ActivityType } from "../src/types";
import Image from 'next/image'

export default function Article({ data }:{ data: ActivityType } ){
  return (
    <article className="news-item">
      {!!data.image && <Image src={data.image} alt={`Zdięcie ${data.title}`} />}
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="news-footer">
        <a href="#" className="listen-btn">🔊 Słuchaj</a>
        {!!data.source?.name && <a href={data.source.url} className="source-link">{data.source?.name}</a>}
      </div>
    </article>
  )}