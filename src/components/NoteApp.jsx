import React from "react";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";


class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchQuery: "",
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
    }

    onSearchChangeHandler(event) {
        this.setState({ searchQuery: event.target.value });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchivedHandler(id) {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map((note) => {
                if (note.id === id) {
                    return { ...note, archived: !note.archived };
                }
                return note;
            });
            return { notes: updatedNotes };
        });
    }    

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: new Date().toISOString(),
                archived: false,
              }
            ]
          }
        });
      }

    render() {
        const filteredNotes = this.state.searchQuery
            ? this.state.notes.filter(note =>
                note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            )
            : this.state.notes;

        return (
            <div>
                <NoteSearch searchQuery={this.state.searchQuery} onSearchChange={this.onSearchChangeHandler}/>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler}></NoteInput>
                    <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
                </div>
            </div>
        );
    }
}

export default NoteApp;