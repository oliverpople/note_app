(function(exports) {
  function Note(text) {
    this._text = text;
  }

  Note.prototype.getNoteText = function() {
    return this._text;
  };

exports.Note = Note;
})(this);

// var note = new Note('My favourite language is JavaScript');
