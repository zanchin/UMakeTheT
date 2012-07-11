(function(){
  $(function() {
    // init CloudMine
    DT.cm = new cloudmine.WebService({
      appid: "c531b2033040451190f52c64a9a1e9f2",
      apikey: "9b9a2db3a9324ab6a15455be75eaf004"
    });

    $("div #start").on('click', function() {
      DT.go('size');
    });

    $("div #size").on('click', function() {
      DT.go('style');
    });

    $("div #style").on('click', function() {
      DT.go('design');
    });

    $("div #design").on('click', function() {
      DT.go('purchase');
    });

    $("div #purchase").on('click', function() {
      alert("Thank you for designing and buying your T!");
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
        DT.setCurrent({
          style: data.selectedData.text,
          preview_image: "images/" + data.selectedData.value + "_large.png"
        });
      }
    });
  });

  var DT = {
    current: {
      size: "",
      style: ""
    },
    setCurrent: function(data){
      // getto merge
      for(d in data){
        if(data.hasOwnProperty(d)){
          DT.current[d] = data[d];
        }
      }

      var text = "Selected size: " + DT.current.size;
      text += ", Selected style: " + DT.current.style;
      $(".current").text(text);

      $(".shirt_image").attr("src", DT.current.preview_image);

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
        'design': 'designcontent',
        'purchase': 'purchasecontent',
        'home': 'homecontent'
      };

      var contentid = ids[loc] || ids.home;
      DT.showcontent(contentid);
    },
    fileSelected: function(file_input){
      console.log(file_input);
      var file = file_input.files[0];
      if (file) {
        // make sure file is an image
        // if( !/(png|jpg|jpeg)$/.test(file.name) ){
        //   alert("You must upload an image file");
        //   return false;
        // }

        // Only process image files.
        if (!file.type.match('image.*')) {
          alert("You must upload an image file");
          return false;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
          return function(e) {
            // Render thumbnail.
            $(".logo_image img").attr("src", e.target.result);
          };
        })(file);

        // Read in the image file as a data URL.
        reader.readAsDataURL(file);
      }

        // DT.cm.upload("logo", file).on("success", function(result){
        //   console.log(result);
        // });
      // // }
      // return true;
    }
  };

  window.DT = DT;
})();


