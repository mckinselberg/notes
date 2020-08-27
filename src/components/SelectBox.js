import React, { Component } from "react";


function SelectBox(props) {
  console.log(props);
  const notes = props.notes;
  return(
    <select name="notes" onChange={props.handleChange(e)}>
      {notes.map((note)=>{
        return <option key={note} value={note}>{note}</option>
      })}
    </select>
  );

}
export default SelectBox;