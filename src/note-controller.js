"use strict";

(function(exports) {
  function NoteController() {
// probs better to instantiate other classes somewhere outside of this class and inject them
    this._noteList = new NoteList();
    this._noteListView = new NoteListView(this._noteList);
  }

NoteController.prototype.eventListener = function () {
  var self = this;  // reassigns the this keyword so the 'this in an anonymous function refers to the right thing'
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


NoteController.prototype.readInputText = function () {
  var inputtext = document.getElementById('text').value;
  return inputtext;
  };


NoteController.prototype.getNoteListText = function (noteIndex) {
    this._noteList.getNoteTextByIndex(noteIndex);
  };

exports.NoteController = NoteController;
})(this);
