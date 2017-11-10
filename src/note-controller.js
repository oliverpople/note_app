// "use strict";

(function(exports) {
  function NoteController() {
    // probs better to instantiate other classes somewhere outside of this class and inject them
    this._noteList = new NoteList();
    this._noteListView = new NoteListView(this._noteList);
  }

  NoteController.prototype.eventListener = function() {
    var self = this; // reassigns the this keyword so the 'this in an anonymous function refers to the right thing'
    document.getElementById('submitnote').addEventListener("click", function(e) {
      self._noteList.createNote(self.readInputText());
      var noteslinks = document.getElementById('noteslinks');
      self.listMaker(noteslinks);
      e.preventDefault();
    });
  };

  NoteController.prototype.listMaker = function(element) {
    element.innerHTML = this._noteListView.printList();
  };


  NoteController.prototype.readInputText = function() {
    var inputtext = document.getElementById('text').value;
    return inputtext;
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    var self = this;
    // window.addEventListener("hashchange", this.showNoteForCurrentPage());
    window.addEventListener("hashchange",  function(e) {
     self.showNoteForCurrentPage();
      e.preventDefault();
        });
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    this.showNote(this.getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    var noteIndex = location.hash.split("#")[1];
    return this.getNoteListText(noteIndex);
  };

  NoteController.prototype.showNote = function(note) {
    document.getElementById("note").innerHTML = note;
  };


  NoteController.prototype.getNoteListText = function(noteIndex) {
    var notetext = this._noteList.getNoteTextByIndex(noteIndex);
    this.showNote(notetext);
  };

  exports.NoteController = NoteController;
})(this);
