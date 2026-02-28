export default function FruitList({ fruits, onDelete }) {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>
           {fruit}
          <button className="danger" onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}