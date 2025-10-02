router.post('/:id/progress', async (req, res) => {
  const userId = req.body.userId;
  const choice = req.body.choice;
  const questId = req.params.id;

  // Validate, update user's choices history, assign rewards, update activeQuest to nextQuestId if branching
});