(function(exports) {
  function testNoteIsCreated() {
    var notelist = new NoteList();
    assert.isTrue(notelist = new NoteList());
  };
  testNoteIsCreated();
})(this);


(function(exports) {
  function notesAreStoredOnList() {
    var notelist = new NoteList();
    assert.isTrue(Array.isArray(notelist._list));
  };
  notesAreStoredOnList();
})(this);


(function(exports) {
  function returnsNotes() {
    var notelist = new NoteList();
    assert.isTrue(Array.isArray(notelist.getNotes()));
  };
  returnsNotes();
})(this);

(function(exports) {
  function createNote() {
    var notelist = new NoteList();
    notelist.createNote("note1")
    assert.isTrue(notelist.getNotes().length === 1);
  };
  createNote();
})(this);
