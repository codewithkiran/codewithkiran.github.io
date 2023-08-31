// (function() {

//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://dl.dropboxusercontent.com/s/iaye6eatofa95fi/blog.json?dl=0');

//   xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4) {
//       var response = JSON.parse(xhr.responseText);
//       var itemHTML = '<hr class="primary">';
//       for (var i=0; i<response.blogs.length; i += 1) {
//         itemHTML += '<div class="page-header">'
//         itemHTML += '<div id="title">';
//         itemHTML += response.blogs[i].title;
//         itemHTML += '</div>';
//         itemHTML += '<div id="date">';
//         itemHTML += response.blogs[i].date;
//         itemHTML += '</div>';
//         itemHTML += '</div>';
//         itemHTML += '<div class="panel-body">';
//         itemHTML += '<div class="row">'
//         itemHTML += '<div id="content">';
//         itemHTML += response.blogs[i].content;
//         itemHTML += '</div>';
//         itemHTML += '</div>';
//         itemHTML += '</div>';
//         itemHTML += '<br>';
//       }
//       document.getElementById('the-blogs').innerHTML = itemHTML;
//     }
//   };

//   xhr.send();


// }());
