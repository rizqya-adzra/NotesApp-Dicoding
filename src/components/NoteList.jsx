import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchived }) {
    const activeNotes = notes.filter(note => !note.archived);
    const archivedNotes = notes.filter(note => note.archived);

    return (
        <>
            <h2>Catatan Aktif</h2>
            <div className="notes-list">
                {
                    activeNotes.map((note) => (
                        <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} {...note} />
                    ))
                }
            </div>
            {activeNotes.length === 0 && (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}

            <h2>Arsip</h2>
            <div className="notes-list">
                {
                    archivedNotes.map(note => (
                        <NoteItem 
                        key={note.id} note={note} onDelete={onDelete} onArchived={onArchived} {...note} />
                    ))
                }
            </div>
            {archivedNotes.length === 0 && (
                <p className="notes-list__empty-message">Tidak ada arsip</p>
            )}
        </>
    );
}

export default NoteList;
