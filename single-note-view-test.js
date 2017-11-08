(function(exports) {
  function testSingleNoteViewInstantiates () {
    var singleNoteView = new SingleNoteView();
    assert.isTrue(singleNoteView.constructor === SingleNoteView);
  }
  testSingleNoteViewInstantiates();
}(this));

(function(exports) {
  function testPrintNote () {
    var singleNoteView = new SingleNoteView("Ollie loves chocolate eggs");
    assert.isTrue(singleNoteView.printNote() === "<div>Ollie loves chocolate eggs</div>");
  }
  testPrintNote();
}(this));
