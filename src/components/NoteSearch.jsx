import React from "react";

function NoteSearch({ searchQuery, onSearchChange }) {
    return (
        <div className="note-app__header">
            <h1 className="">NOTE APP</h1>
            <input
                type="text"
                className="search-input"
                placeholder="Cari berdasarkan judul..."
                value={searchQuery}
                onChange={onSearchChange}
            />
        </div>
    );
}

export default NoteSearch;
