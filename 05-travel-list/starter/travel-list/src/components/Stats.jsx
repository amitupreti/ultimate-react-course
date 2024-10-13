export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding Some items to your packing list</em>
      </p>
    );
  const finishedPackings = items.filter((item) => item.packed);
  const finishedPercent =
    Math.round((finishedPackings.length / items.length) * 100.0, 2) || 0;

  return (
    <footer className="stats">
      <em>
        {finishedPercent === 100
          ? "You got everything. Ready to go "
          : `🧳You have ${items.length} items on your list and you already packed ${finishedPackings.length}(${finishedPercent}%)`}
      </em>
    </footer>
  );
}
