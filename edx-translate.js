(function ($) {
  var defaultLang = 'fr';
  var currentLang = getLang();
  var $body = $('body');

  // Apply lang as soon as possible but some content may not be ready
  applyLang();

  // Apply lang when window is fully loaded
  $(window).load(function(e) {
    applyLang();
  });

  // Apply lang when problem is append
  $body.on('DOMNodeInserted', '.problem', function(e) {
    applyLang();
  });

  $('.set-lang').click(function() {
    setLang($(this).data('lang'));
    applyLang();
  });
  
  function applyLang() {
    $('.text-fr, .text-en').hide();
    $('.text-'+currentLang).show().css("display","");
    $('.set-lang[data-lang="'+currentLang+'"]').prop("checked", true);
  }

  function getLang() {
    return storageTest() && localStorage.getItem('edx-lang') ? localStorage.getItem('edx-lang'):defaultLang;
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('edx-lang', lang);
  }

  function storageTest(){
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  }
})(jQuery);
