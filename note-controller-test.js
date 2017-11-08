(function (exports) {
function NoteController() {
  var NoteController = new NoteController();
  var div = document.createElement('div');
  NoteController.ListMaker(div);
  assert.isTrue(div.innerHTML === 'Favourite drink: seltzer');
}

});
