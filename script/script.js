function editSlide(){
    document.querySelector('.owl-item.active').querySelector('.img img').classList.remove('shows');
    if(document.querySelector('.owl-item.active').previousElementSibling){
        document.querySelector('.owl-item.active').previousElementSibling.querySelector('.img img').classList.add('shows');
    }
    if(document.querySelector('.owl-item.active').nextElementSibling){
        document.querySelector('.owl-item.active').nextElementSibling.querySelector('.img img').classList.add('shows');
    }
}

window.onload = function(){
    editSlide();
}
document.querySelector('.container5').addEventListener('touchmove', editSlide);
document.querySelector('.container5').addEventListener('mousemove', editSlide);

/* смена картинки в выборе языка */
$(document).ready(function(){
	$('.select_language').on('change', function(){
  	var url = $(this).find(':selected').data('price');
    $('.EN').attr('src', url);
  });
})

/* смена языка страницы */
$(".select_language").change(function() {
    var option = $(this).find('option:selected');
    window.location.href = option.data('url');
}); 

document.getElementById('burger').onclick = function(){
    addMenu();
};

function addMenu(){
    document.getElementById('menu_background').classList.toggle('show')
}