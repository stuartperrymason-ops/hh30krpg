import React from 'react';
function CharacterSheet({ user, items }) {
  return (
    <div>
      <h2>{user.username} ({user.legion})</h2>
      <p>Primarch: {user.primarch}</p>
      <p>Level: {user.level}</p>
      <h3>Inventory</h3>
      <ul>
        {items.map(item => <li key={item._id}>{item.name}</li>)}
      </ul>
    </div>
  );
}
export default CharacterSheet;