(function(exports) {

  function testNoteIsCreated() {
    var note = new Note();
    assert.isTrue(note = new Note());
  };

  testNoteIsCreated();
})(this);

(function(exports) {

  function testNoteIsReturnString() {
    var note = new Note('hello');
    assert.isTrue(note.getNoteText() === 'hello');
  };

  testNoteIsReturnString();
})(this);

// (function(exports) {

//   function testNoteHasAnId() {
//     var note = new Note('hello');
//     assert.isTrue(note.getNoteId() === 0);
//   };
//
//   testNoteHasAnId();
// })(this);
