(function(exports) {
  function testSingleNoteViewInstantiates () {
    var singleNoteView = new SingleNoteView();
    assert.isTrue(singleNoteView.constructor === SingleNoteView);
  }
  testSingleNoteViewInstantiates();
}(this));

(function(exports) {
  function testPrintNote () {
    note = new Note("Ollie loves chocolate eggs", 0)
    var singleNoteView = new SingleNoteView(note);
    assert.isTrue(singleNoteView.printNote() === "<div>Ollie loves chocolate eggs</div>");
  }
  testPrintNote();
}(this));
