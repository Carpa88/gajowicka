import { ActivityType } from "../src/types";

 export default function Events({data}: {data: ActivityType}){
 return(
 <section id="events">
    <h2 className="section-title">Nadchodzące wydarzenia</h2>
    <div className="event-carousel">
      <div className="event-slide">
        <div className="event-text">
          <h3>{data.title}</h3>
          <p><strong>Miejsce: </strong>{data.place}</p>
          <p><strong>Czas: </strong>{data.time}</p>
          <p>{data.description}</p>
          {!!data.source?.name && <p><a href={data.source.url} className="source-link">{data.source?.name}</a></p>}
        </div>
      </div>
    </div>
  </section>
  )}