
(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.color = {
    logoChanged: false,
    callback: function(context, settings, form, farb, height, width) {
		// Change the logo to be the real one.
		if (!this.logoChanged) {
      $('.color-preview .color-preview-logo img').attr('src', drupalSettings.color.logo);
		this.logoChanged = true;
		}
		// Remove the logo if the setting is toggled off. 
      if (drupalSettings.color.logo === null) {
        $('div').remove('.color-preview-logo');
      }

      // Text preview.

      form.find('#preview').css('color', form.find('.js-color-palette input[name="palette[base]"]').val());
      form.find('#preview a').css('color', form.find('.js-color-palette input[name="palette[link]"]').val());
      form.find('#preview-header-menu a').css('color', form.find('.js-color-palette input[name="palette[headermenulink]"]').val());
      form.find('#preview-footer a').css('color', form.find('.js-color-palette input[name="palette[footerlink]"]').val());
      form.find('#preview-footer-bottom a').css('color', form.find('.js-color-palette input[name="palette[footerlink]"]').val());
      form.find('#preview-slogan').css('color', form.find('.js-color-palette input[name="palette[slogan]"]').val());

      // Headings.
      var headingscolor = form.find('.js-color-palette input[name="palette[link]"]').val();
      var headingsshadow = form.find('.js-color-palette input[name="palette[headingshadow]"]').val();

      form.find('#preview h1').attr('style', "color: " + headingscolor + "; text-shadow: 1px 1px 1px " + headingsshadow + ";");

      // Header.
      var gradient_headertop = form.find('.js-color-palette input[name="palette[headertop]"]').val();
      var gradient_headerbottom = form.find('.js-color-palette input[name="palette[headerbottom]"]').val();

      form.find('#preview #preview-header').attr('style', "background-color: " + gradient_headertop + "; background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(" + gradient_headertop + "), to(" + gradient_headerbottom + ")); background-image: -moz-linear-gradient(-90deg, " + gradient_headertop + ", " + gradient_headerbottom + ");");

      // Header-menu.
      form.find('#preview-header-menu').css('background-color', form.find('.js-color-palette input[name="palette[headermenu]"]').val());
      form.find('#preview-header-menu').css('border-top-color', form.find('.js-color-palette input[name="palette[headermenuborder]"]').val());
      form.find('#preview-header-menu').css('border-bottom-color', form.find('.js-color-palette input[name="palette[headermenuborder]"]').val());

      // Banner.
      var gradient_bannertop = form.find('.js-color-palette input[name="palette[bannertop]"]').val();
      var gradient_bannerbottom = form.find('.js-color-palette input[name="palette[bannerbottom]"]').val();
      var bannerborder = form.find('.js-color-palette input[name="palette[bannerborder]"]').val();

      form.find('#preview #preview-banner').attr('style', "background-color: " + gradient_bannertop + "; background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(" + gradient_bannertop + "), to(" + gradient_bannerbottom + ")); background-image: -moz-linear-gradient(-90deg, " + gradient_bannertop + ", " + gradient_bannerbottom + "); border-bottom: 1px solid " + bannerborder + ";");

      // Content.
      var gradient_contenttop = form.find('.js-color-palette input[name="palette[contenttop]"]').val();
      var gradient_contentbottom = form.find('.js-color-palette input[name="palette[contentbottom]"]').val();

      form.find('#preview #preview-content').attr('style', "background-color: " + gradient_contenttop + "; background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(" + gradient_contenttop + "), to(" + gradient_contentbottom + ")); background-image: -moz-linear-gradient(-90deg, " + gradient_contenttop + ", " + gradient_contentbottom + ");");

      // Block.
      var blockbg = form.find('.js-color-palette input[name="palette[blockbg]"]').val();
      form.find('#preview .block').attr('style', "background-color: " + blockbg + ";");

      // Footer.
      var gradient_footer = form.find('.js-color-palette input[name="palette[footer]"]').val();
      form.find('.js-color-palette #preview-footer').attr('style', "background-color: " + gradient_footer + ";");

      // Footer bottom.
      var gradient_footerbottomtop = form.find('.js-color-palette input[name="palette[footerbottomtop]"]').val();
      var gradient_footerbottombottom = form.find('.js-color-palette input[name="palette[footerbottombottom]"]').val();

      form.find('#preview-footer-bottom').attr('style', "background-color: " + gradient_footerbottomtop + "; background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(" + gradient_footerbottomtop + "), to(" + gradient_footerbottombottom + ")); background-image: -moz-linear-gradient(-90deg, " + gradient_footerbottomtop + ", " + gradient_footerbottombottom + ");");
      form.find('#preview-footer-bottom').css('border-top-color', $('#palette input[name="palette[headermenuborder]"]', form).val());

      // Button.
      var gradient_buttontop = form.find('.js-color-palette input[name="palette[buttontop]"]').val();
      var gradient_buttonbottom = form.find('.js-color-palette input[name="palette[buttonbottom]"]').val();
      var buttontext = form.find('.js-color-palette input[name="palette[buttontext]"]').val();
      var buttontextshadow = form.find('.js-color-palette input[name="palette[buttontextshadow]"]').val();
      var buttonboxshadow = form.find('.js-color-palette input[name="palette[buttonboxshadow]"]').val();

      form.find('#preview a.more').attr('style', "background-color: " + gradient_buttontop + "; background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(" + gradient_buttontop + "), to(" + gradient_buttonbottom + ")); background-image: -moz-linear-gradient(-90deg, " + gradient_buttontop + ", " + gradient_buttonbottom + "); -webkit-box-shadow: 0px 1px 2px " + buttonboxshadow + "; -moz-box-shadow: 0px 1px 2px " + buttonboxshadow + "; box-shadow: 0px 1px 2px " + buttonboxshadow + "; text-shadow: 0 1px 1px " + buttontextshadow + "; color: " + buttontext + ";");

    }
  };
})(jQuery, Drupal, drupalSettings);
