"use strict";

(function(exports) {
  function NoteController(appitem = NoteList) {
// defaults to notelist but can be something else
    this._noteList = new appitem();
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
