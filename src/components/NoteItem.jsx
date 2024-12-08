import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt, onDelete, onArchived, archived}) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} body={body} createdAt={createdAt}/>
            <NoteItemAction id={id} onDelete={onDelete} onArchived={onArchived} archived={archived}/>
        </div>
    )
}

export default NoteItem;