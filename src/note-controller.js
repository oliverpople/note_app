"use strict";

(function(exports) {
  function NoteController() {
// probs better to instantiate other classes somewhere outside of this class and inject them
    this._noteList = new NoteList();
    this._noteListView = new NoteListView(this._noteList);
    this._noteList.createNote('Favourite drink: seltzer');
  };
exports.NoteController = NoteController;
}) (this);

NoteController.prototype.listMaker = function(element) {
  // var element = document.getElementById('app');
    element.innerHTML = this._noteListView.printList();
};




window.onload = function () {

// var element = document.getElementById('app');

// element.innerHTML = function(){
//   return 'Howdy'
// }();

// element.innerHTML = 'Howdy';

};
