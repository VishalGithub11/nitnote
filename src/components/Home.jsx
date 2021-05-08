import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Home = () => {
  const [addItem, setNewItem] = useState([]);

  const addNote = (note) => {
    // alert("I m clicked");
    console.log(note);
    setNewItem((preVal) => {
      return [...preVal, note];
    });
  };

  // const onDelete = (id) => {
  //   setNewItem((preVal) => {
  //     preVal.splice(id, 1);
  //     return preVal;
  //   });
  // };

  const onDelete = (id) => {
    setNewItem((preVal) => {
      return preVal.filter((currData, indx) => {
        return indx !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote onAdd={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default Home;
