import React, { useState, useEffect } from 'react';
import QuestNavigator from '../components/QuestNavigator';
import QuestViewer from '../components/QuestViewer';
import CharacterSheet from '../components/CharacterSheet';
import ImageGallery from '../components/ImageGallery';

function Game({ user }) {
  const [quests, setQuests] = useState([]);
  const [activeQuest, setActiveQuest] = useState(null);
  const [images, setImages] = useState([]);
  useEffect(() => {
    // Fetch quests and legion images from backend
    fetch('/api/quests').then(res => res.json()).then(setQuests);
    fetch(`/api/images/${user.legion}`).then(res => res.json()).then(setImages);
  }, [user.legion]);
  const handleSelectQuest = id => {
    const quest = quests.find(q => q._id === id);
    setActiveQuest(quest);
  };
  const handleChoice = async choice => {
    // Progress quest, update active quest
    const res = await fetch(`/api/quests/${activeQuest._id}/progress`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user._id, choice: choice.option })
    });
    const data = await res.json();
    const nextQuest = quests.find(q => q._id === choice.nextQuestId);
    setActiveQuest(nextQuest || null);
  };
  return (
    <div>
      <CharacterSheet user={user} items={user.inventory || []} />
      <QuestNavigator quests={quests} activeQuestId={activeQuest?._id} onSelect={handleSelectQuest} />
      {activeQuest && <QuestViewer quest={activeQuest} onChoice={handleChoice} />}
      <ImageGallery images={images} />
    </div>
  );
}
export default Game;