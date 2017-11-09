(function(exports) {
  function NoteListView(notelist) {
    this._notelist = notelist;
  };

  NoteListView.prototype.printList = function() {
    var notelist = this._notelist.getNotes();
    var html = "";
    var test = "";
    for (var i = 0; i < notelist.length; i++) {
      var id = notelist[i].getNoteId();
      var notestring = notelist[i].getNoteText();
      if (notestring.length >= 20) {
        notestring = notestring.slice(0, 20) + "...";
      };
      html += ("<a href='#" + id + "'>" + "<li><div>" + notestring + "</div></li>" + "</a>");
    };
     return "<ul>" + html + "</ul>";

  };

  exports.NoteListView = NoteListView;
})(this);
