(function(exports) {
  function NoteList() {
    this._list = [];
  }

  NoteList.prototype.getNotes = function() {
    return this._list;
  };

  NoteList.prototype.createNote = function(text) {
    var id = this.getNotes().length;
    var note = new Note(text, id);
    this._list.push(note);
  };

  NoteList.prototype.getNoteTextByIndex = function(noteIndex) {
// console.log(noteIndex);
// console.log(this._list[noteIndex]);
    return this._list[noteIndex].getNoteText();
    // selectednote = this._list[noteIndex]
    // console.log(selectednote);
    // return selectednote.getNoteText();
    // return note.getNoteText();
  };

exports.NoteList = NoteList;
})(this);
