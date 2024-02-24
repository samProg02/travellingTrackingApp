export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list!!!</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.isPacked).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `🌴You have ${numItems} item on your list, and you have already packed
        ${numPacked}(${percentage}%) `}
      </em>
    </footer>
  );
}
