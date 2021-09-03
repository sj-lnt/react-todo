import React from "react";
import "./index.css";

function NotesApp(props) {
  let html = [];
  props.notes && props.notes.map((index, value) => {
    html.push(
      <tr>
        <td>
          {index.title}
        </td>
        <td>
          {index.status}
        </td>
      </tr>
    )
  })
  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input
          data-testid="input-note-name"
          type="text"
          className={"large mx-8 " + props.errorClass}
          placeholder="Note Title" 
          name="title"
          onChange={props.updateValue}
          onFocus={props.removeErrorClass}
          />

        <input
          data-testid="input-note-status"
          type="text"
          className={"large mx-8 " + props.errorClass}
          name="status"
          placeholder="Note Status"
          onChange={props.updateValue}
          onFocus={props.removeErrorClass}
          />
        
        <button onClick={props.addNotes} className="" data-testid="submit-button">Add Note</button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li onClick={props.changeTap} className={"tab-item " + (props.testid === "allButton" ? 'active' : '') } data-testid="allButton">All</li>
          <li onClick={props.changeTap} className={"tab-item " + (props.testid === "activeButton" ? 'active' : '') } data-testid="activeButton">Active</li>
          <li onClick={props.changeTap} className={"tab-item " + (props.testid === "completedButton" ? 'active' : '') } data-testid="completedButton">Completed</li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>

          </thead>
          {html}
          <tbody data-testid="noteList">
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp