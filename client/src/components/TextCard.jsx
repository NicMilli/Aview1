import React from 'react';

function TextCard({ title, text }) {
  return (
    <div className="text-card">
      {title
        ? <p className="color-text card-title">{title}</p>
        : null}
      <div className="center">
        <p className="color-text card-body">{text}</p>
      </div>

    </div>
  );
}

export default TextCard;
