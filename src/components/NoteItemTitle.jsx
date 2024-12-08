import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemTitle({ title, createdAt }) {
    return (
        <div className="note-item__title">
            <h5>{title}</h5>
            <h5 className="note-item__date">{showFormattedDate(createdAt)}</h5>
        </div>
    );
}

export default NoteItemTitle;
