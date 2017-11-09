(function(exports) {
  function printList() {
    var notelist = new NoteList();
    notelist.createNote('First Note!!');
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.printList() === "<ul><li><div>First Note!!</div></li></ul>");
  };
  printList();
})(this);


(function(exports) {
  function printList() {
    var notelist = new NoteList();
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.printList() === "<ul></ul>");
  };
  printList();
})(this);

(function(exports) {
  function printList() {
    var notelist = new NoteList();
    notelist.createNote('First Note!!');
    notelist.createNote('Second Note!!');
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.printList() === "<ul><li><div>First Note!!</div></li>" + "<li><div>Second Note!!</div></li></ul>");
  };
  printList();
})(this);


(function(exports) {
  function printList() {
    var notelist = new NoteList();
    notelist.createNote('This string has more than 20 characters!!!');
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.printList() === "<ul><li><div>This string has more...</div></li></ul>");
  };
  printList();
})(this);
