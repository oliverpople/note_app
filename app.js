window.onload = function () {
controller = new NoteController();
  controller.eventListener();
  controller.makeUrlChangeShowNoteForCurrentPage();
};
