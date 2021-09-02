import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddNote, DeleteNote } from "./actions/index34";
import { reducerType } from "./reducers/index34";
const NoteContainer = () => {
  const [input, setInput] = useState<string>("");

  const notes: string[] = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <input
          className="px-2"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() => {
            if (input !== "") {
              dispatch(AddNote(input));
              setInput("");
            }
          }}
        >
          Add
        </button>
      </div>
      <ul className="notes-list my-3 d-flex flex-column align-items-center p-0">
        {notes.length === 0 ? (
          <h2>Click on Add to add notes</h2>
        ) : (
          notes.map((note: string, index: number) => (
            <li key={index}>
              <h3>
                {note}{" "}
                <span
                  className="btn btn-danger btn-sm mx-3"
                  onClick={() => {
                    dispatch(DeleteNote(index));
                  }}
                >
                  Delete
                </span>{" "}
              </h3>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NoteContainer;