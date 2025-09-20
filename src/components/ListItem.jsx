export default function ListItem({ item }) {
  return (
    <div className="flex items-start gap-2 bg-sky-900 p-2 rounded-lg m-3">
      <input
        type="checkbox"
        id={`checkbox-${item.createdAt}`}
        className="mt-1"
      />
      <p>{item.updated_at}</p>
      <p>{item.createdAt}</p>
    </div>
  );
}
