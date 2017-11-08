(function(exports) {
  function NoteList() {
    this._list = [];
  }

  NoteList.prototype.getNotes = function() {
    return this._list;
  };

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text);
    this._list.push(note);
  };

exports.NoteList = NoteList;
})(this);
