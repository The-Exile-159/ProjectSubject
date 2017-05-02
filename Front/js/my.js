

$('#subject-list').each(function(){
  var $input = $('.subject-input');
  var $listData = $(this).children().not('.no-search');

  function changeAlias( alias ) {
    return alias.toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ  |ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ  |ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d");
  }


  function filter(){
    var value = $input.val();
    var text = $(this).text();

    return changeAlias(text).includes( changeAlias(value) );
  }

  $input.on('input', function( event ){
    var value = event.target.value;
    var $matches = $listData.filter( filter );

    $listData.hide();
    $matches.show();    
  });

});

var $profilePanel = $('#my-profile-panel');
var $editProfilePanel = $('#edit-my-profile-panel');

$('#edit-my-profile').on('click', function( event ){
  $profilePanel.hide();
  $editProfilePanel.show();
});

$('#submit-profile').on('click', function(){
  $profilePanel.show();
  $editProfilePanel.hide();
});


function go( url ){
  window.location = url;
}
