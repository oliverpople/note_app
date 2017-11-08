(function(exports) {
  function NoteListView(notelist) {
      this._notelist = notelist;
  };

  NoteListView.prototype.printList = function() {
    var notelist = this._notelist.getNotes();
    var html = "";
    for (var i = 0; i < notelist.length; i++) {
      html += ("<li><div>" + notelist[i].getNoteText() + "</div></li>")
    }
  return "<ul>" + html + "</ul>";
  };

exports.NoteListView = NoteListView;
})(this);


//
// noteListview = new NoteListView(noteList)
// noteListview.createView();
