import React from 'react';
function QuestViewer({ quest, onChoice }) {
  return (
    <div>
      <h2>{quest.title}</h2>
      <img src={quest.imageUrl} alt={quest.title} />
      <p>{quest.description}</p>
      <ul>
        {quest.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
      </ul>
      {quest.choices.map((c, i) => (
        <button key={i} onClick={() => onChoice(c)}>{c.option}</button>
      ))}
    </div>
  );
}
export default QuestViewer;