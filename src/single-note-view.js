(function(exports) {
  function SingleNoteView(Note) {
    this.note = Note;
  }
exports.SingleNoteView = SingleNoteView;
}(this));

SingleNoteView.prototype.printNote = function () {
  return "<div>" + this.note.getNoteText() + "</div>";
};
