require(['gitbook', 'jquery'], function (gitbook, $) {
  gitbook.events.on('start', function () {
    // Removing "Menu" button
    gitbook.toolbar.removeButton('btn-0');

    // Adding custom "Menu" button
    gitbook.toolbar.createButton({
      index: 0,
      text: 'Menu',
      icon: 'fa fa-align-justify',
      onClick: function (e) {
        e.preventDefault();
        gitbook.sidebar.toggle();
      }
    });
  });
});