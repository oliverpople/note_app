(function(exports) {
  function itPrintListWithIdLink() {
    var notelist = new NoteList();
    notelist.createNote('This string has more than 20 characters!!!');
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.printList() === "<ul><a href='#0'><li><div>This string has more...</div></li></a></ul>");
  };
  itPrintListWithIdLink();
})(this);
