import React, { useState } from "react";
import "./CreateNote.css";
import Button from "@material-ui/core/Button";
import PlusIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setnote((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.onAdd(note);
    setnote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="Cnote-container">
        <div className="Cnote-body">
          <div className="title">
            <input
              placeholder="Title..."
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
            />
          </div>
          <div>
            <textarea
              name="content"
              cols=""
              rows="3"
              placeholder="create your note..."
              value={note.content}
              onChange={InputEvent}
            ></textarea>
          </div>
          <Button onClick={addEvent}>
            <PlusIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
