export default function Article({title, image, description}:{title:string; image?:string; description:string } ){
  return (
    <article className="news-item">
      {!!image && <img src={image} alt={`Zdięcie ${title}`} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="news-footer">
        <a href="#" className="listen-btn">🔊 Słuchaj</a>
        <a href="#" className="source-link">Źródło</a>
      </div>
    </article>
  )}