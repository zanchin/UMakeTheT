(function(){
  $(function() {
    $("div #start").on('click', function() {
      DT.go('size');
    });

    $("div #size").on('click', function() {
      DT.go('type');
    });

    $("div #type").on('click', function() {
      DT.go('home');
    });

    $("#size").ddslick();
    $("#type").ddslick();
  });

  var DT = {
    navigate: function(url){
      document.location.href = url;
    },
    showcontent: function(id){
      $('.content').addClass('hidden');
      $("#" + id).removeClass('hidden');
    },
    go: function(loc){
      var ids = {
        'size': 'sizecontent',
        'type': 'typecontent',
        'cc': 'cccontent',
        'home': 'homecontent'
      }

      var contentid = ids[loc] || ids.home;
      DT.showcontent(contentid);

      // var urls = {
      //   'size': 'size.html',
      //   'type': 'type.html',
      //   'cc': 'cc.html',
      //   'home': 'index.html'
      // }

      // var url = urls[loc] || urls.home;
      // DT.navigate(url);
    }
  }

  window.DT = DT;
})();


