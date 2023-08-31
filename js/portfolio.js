(function() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dl.dropboxusercontent.com/s/azxvt2vy8x4h599/portfolio.json?dl=0');

  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
      var response = JSON.parse(xhr.responseText);
      for (var i=0; i<response.portfolio.length; i += 1) {
        // $('#portfolio-holder').append("<div class='col-lg-4 col-sm-6' id='portfolio-one'>");

        $('<div>', {class: 'col-lg-4 col-sm-6'})
        .append($($('<a></a>').attr("href",response.portfolio[i].href))
          .append($('<img src="#" id="portfolio-image" class="img-responsive" alt="">').attr("src",response.portfolio[i].src)
            .append($('<div>', {class: 'portfolio-box-caption'})
              .append($('<div>', {id: 'portfolio-box-caption-content'})
                .append( $('<div>', {class: 'project-category text-faded', text: response.portfolio[i].title }))
                .append( $('<div>', {class: 'class="project-name', text: response.portfolio[i].category }))))))
        .appendTo('#portfolio-holder');
      }
    }
  };
  xhr.send();
}());

// $('<div>', {id: 'outsidediv'}).append( $('<div>', {id: 'innerdiv'})).appendTo('#container');

// .text(response.portfolio[i].category)

// .attr("src",response.portfolio[i].src)