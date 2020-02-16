import React, { useState } from "react";

import {CREATE_EVENT, DELETE_ALL_EVENTS} from  '../action'
//import reducer from "../reducers";

const EventForm = ({state, dispatch}) => {
  //const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const deleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除してもよろしいですか"
    );
    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  };

  const unCreatable = title === "" || body === "";

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });

    setTitle("");
    setBody("");
  };
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button className="btn btn-danger" onClick={deleteAllEvents}>
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
