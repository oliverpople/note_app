(function(exports) {
  function SingleNoteView (noteText) {
    this.note = new Note(noteText);
  }
exports.SingleNoteView = SingleNoteView;
}(this));

SingleNoteView.prototype.printNote = function () {
  return "<div>" + this.note.getNoteText() + "</div>";
};
