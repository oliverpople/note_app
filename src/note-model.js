(function(exports) {
  function Note(text, id) {
    this._text = text;
    this._noteId = id;
  }

  Note.prototype.getNoteText = function() {
    return this._text;
  };

  Note.prototype.getNoteId = function() {
    return this._noteId;
  };

exports.Note = Note;
})(this);

// var note = new Note('My favourite language is JavaScript');
