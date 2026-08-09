function NewsCard({key, title, description }) {
  return (
    <div className="card">
        

      <p><b>Article:</b> {title}</p>
      <p><b>Content:</b> {description}</p>

    
    </div>
  );
}

export default NewsCard;