import React from 'react';
function QuestNavigator({ quests, activeQuestId, onSelect }) {
  return (
    <div>
      <h2>Quest Arcs</h2>
      <ul>
        {quests.map(q => (
          <li key={q._id} className={q._id === activeQuestId ? 'active' : ''}>
            <button onClick={() => onSelect(q._id)}>{q.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default QuestNavigator;