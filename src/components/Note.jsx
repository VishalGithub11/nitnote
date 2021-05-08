import React from "react";
import "./Note.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const deleteButton = () => {
    return props.deleteItem(props.id);
  };

  return (
    <>
      <div className="Note-container">
        <div className="Note-body">
          <h3>{props.title}</h3>

          <div className="note-content">
            <p>{props.content}</p>
          </div>
          <div className="delete-icon">
            <Button onClick={deleteButton}>
              <DeleteIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
