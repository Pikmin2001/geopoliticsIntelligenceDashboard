import { useState } from "react";

function NewsCard({ title, description, author, url }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3><p>{author}</p>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Collapse" : "Expand"}
        </button>
      </div>

      {isOpen && (
        <div className="card-body">
          <p>{description}</p>
        </div>

      )}

       <a href={url} target="_blank" rel="noopener noreferrer">
  
      </a>

    </div>
  );
}

export default NewsCard;