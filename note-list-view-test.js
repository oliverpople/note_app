(function(exports) {
  function printList() {
    var notelist = new NoteList();
    notelist.createNote('First Note!!');
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.printList() === "<li><div>First Note!!</div></li>");
  };
  printList();
})(this);


(function(exports) {
  function printList() {
    var notelist = new NoteList();
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.printList() === "");
  };
  printList();
})(this);

(function(exports) {
  function printList() {
    var notelist = new NoteList();
    notelist.createNote('First Note!!');
    notelist.createNote('Second Note!!');
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.printList() === "<li><div>First Note!!</div></li>" + "<li><div>Second Note!!</div></li>");
  };
  printList();
})(this);
