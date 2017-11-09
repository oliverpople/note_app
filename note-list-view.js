(function(exports) {
  function NoteListView(notelist) {
    this._notelist = notelist;
  };

  NoteListView.prototype.printList = function() {
    var notelist = this._notelist.getNotes();
    var html = "";
    for (var i = 0; i < notelist.length; i++) {

      var notestring = notelist[i].getNoteText();

      if (notestring.length >= 20) {
        notestring = notestring.slice(0, 20) + "...";
      };
      html += ("<li><div>" + notestring + "</div></li>");
    };
    return "<ul>" + html + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this);


//
// noteListview = new NoteListView(noteList)
// noteListview.createView();
