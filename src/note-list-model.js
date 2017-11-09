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

exports.NoteList = NoteList;
})(this);
