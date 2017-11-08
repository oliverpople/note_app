(function (exports) {
function NoteControllerTest() {
  var NoteController = new NoteController();
  var div = document.createElement('div');
  NoteController.ListMaker(div);
  assert.isTrue(div.innerHTML === 'Favourite drink: seltzer');
}
exports.NoteControllerTest = NoteControllerTest;
})(this);
