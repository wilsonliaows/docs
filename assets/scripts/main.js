require(['gitbook', 'jquery'], function (gitbook, $) {
  gitbook.events.on('page.change', function () {
    // Should do it on `page.change` because buttons are being redrawn on every page change for some reason
    updateToolbarButtons();

    // Adding anchor icons next to markdown headers
    addHeaderLinks();
  });

  function updateToolbarButtons() {
    // `Menu` button
    $('.book-header .btn:has(.fa-align-justify)').addClass('btn_menu');

    // `Edit This Page` button
    var editPageBtn = $('.book-header .btn:has(.fa-edit)').addClass('btn_edit');

    // Changing icon
    editPageBtn.find('.fa-edit')
      .removeClass('fa-edit')
      .addClass('fa-github');

    // Removing title (it will be added in css)
    editPageBtn.contents()
      .filter(function () {
        // Text nodes
        return this.nodeType === 3;
      })
      .remove();
  }

  function addHeaderLinks() {
    $('.markdown-section')
      .find('h1, h2, h3, h4, h5')
      .filter(function () {
        return this.getAttribute("id");
      })
      .addClass('heading heading_linkable')
      .prepend(function () {
        return (
          '<a class="heading__anchor" ' +
            'href="#' + this.getAttribute('id') + '">' +
            '<i class="fa fa-link"></i>' +
          '</a>'
        );
      });
  }
});