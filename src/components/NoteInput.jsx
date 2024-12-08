import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxLength: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const newTitle = event.target.value;
        if (newTitle.length <= this.state.maxLength) {
            this.setState({
                title: newTitle,
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        const remainingCharsTitle = this.state.maxLength - this.state.title.length;
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
            <h2>Buat Catatan</h2>
            <p className="note-input__title__char-limit">sisa karakter: {remainingCharsTitle}</p>
                <input className="note-input__title" type="text" placeholder="judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea className="note-input__body" placeholder="isi" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                <button className="note-input" type="submit">Simpan</button>
            </form>
        )
    }
}

export default NoteInput;
