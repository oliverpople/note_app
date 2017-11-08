(function(exports) {
  function testRendersSingleNoteView () {
    var singleNoteView = new SingleNoteView();
    var mockDiv = document.createElement("div");
    singleNoteView.someFunction(mockDiv);
    assert.isTrue(mockDiv.innerHTML === "some gorgeous text");
  }
  testRendersSingleNoteView();
}(this));
