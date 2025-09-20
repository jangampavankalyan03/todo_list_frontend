import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Add from "./Add";

export default function Body() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotes() {
      try {
        const response = await fetch("http://localhost:8080/allNotes");
        var note = await response.json();

        setNotes(note);
      } catch (error) {
        console.error(error);
      }
    }
    getNotes();
  }, []);

  return (
    <div className="ml-15 mr-15 px-36 pt-4 h-auto">
      {notes.map((item) => (
        <li key={item.createdAt}>
          <ListItem item={item} />
        </li>
      ))}
      <Add />
    </div>
  );
}
