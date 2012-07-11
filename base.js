(function(){
  $(function() {
    $("div #start").on('click', function() {
      DT.go('size');
    });

    $("div #size").on('click', function() {
      DT.go('style');
    });

    $("div #type").on('click', function() {
      DT.go('home');
    });

    var sizeData = [
      {
        text: "Small",
        value: "S",
        selected: false
//        description: "Small",
//        imageSrc: "http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png"
      },
      {
        text: "Medium",
        value: "Medium",
        selected: false
      },
      {
        text: "Large",
        value: "Large",
        selected: false
      },
      {
        text: "X-Large",
        value: "XLarge",
        selected: false
      }
    ];

    $("#size").ddslick({
      data: sizeData,
      selectText: "Select the T size",
      onSelected: function(data){
        //console.log(data.selectedData.text);
        DT.setCurrent({size: data.selectedData.text});
      }
    });

    $("#style").ddslick({
      data: [
        {
          text: "T-Shirt", value: "tshirt", selected: false,
          imageSrc: "images/tshirt.png"
        },
        {
          text: "Polo", value: "polo", imageSrc: "images/polo.png"
        },
        {
          text: "Henley", value: "henley", imageSrc: "images/henley.png"
        }
      ],
      selectText: "Select the T type",
      onSelected: function(data){
        DT.setCurrent({style: data.selectedData.text});
      }
    });
  });

  var DT = {
    current: {
      size: "Medium",
      style: ""
    },
    setCurrent: function(data){
      // getto merge
      for(d in data){
        if(data.hasOwnProperty(d)){
          DT.current[d] = data[d];
        }
      }

      // console.log(JSON.stringify(DT.current));
    },

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
        'style': 'stylecontent',
        'cc': 'cccontent',
        'home': 'homecontent'
      };

      var contentid = ids[loc] || ids.home;
      DT.showcontent(contentid);
    }
  };

  window.DT = DT;
})();


