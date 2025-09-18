import { useEffect, useState } from "react";

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
    <div>
      {notes.map((item) => (
        <li key={item.createdAt}>{item.updated_at}</li>
      ))}
    </div>
  );
}
