
  function stop_popup_videos(){
    document.querySelectorAll('#banner_popup video').forEach((element3) => {
        element3.pause();
      });
  }
  
  document.querySelectorAll('.projects__item ').forEach((element) => {
    let div1 = document.createElement("div");
      div1.innerHTML = '<div class="banner_popup__descr">'+element.querySelector('.projects__item-excerpt').innerHTML+'</div><div class="banner_popup__title">'+element.querySelector('.projects__item-client').innerHTML+'</div>';
    if (element.querySelector('.projects__item-content figure ')){
      element.querySelector('.projects__item-content figure').after(div1);
    } else {
      div1.innerHTML = '<div class="wp-block-image size-full">'+element.querySelector('.projects__item-img').innerHTML+'</div>'+div1.innerHTML;
        element.querySelector('.projects__item-content').prepend(div1);
    }
  });


  document.querySelector('.banner_popup__close').addEventListener("click", function (e) {
    document.querySelector('#banner_popup').classList.remove('banner_popup__open');
      if ( document.querySelector('.projects__item__active') ){
        document.querySelector('.projects__item__active').classList.remove('projects__item__active');
      }
      stop_popup_videos();
  });
  document.querySelector('.banner_popup__close_all').addEventListener("click", function (e) {
    document.querySelector('#banner_popup').classList.remove('banner_popup__open');
    stop_popup_videos();
      if ( document.querySelector('.projects__item__active') ){
        document.querySelector('.projects__item__active').classList.remove('projects__item__active');
      }
  });
  document.querySelector('.banner_popup__reload').addEventListener("click", function (e) {
    document.getElementById('banner_popup_content_frame').src = document.getElementById('banner_popup_content_frame').src;
  });

  document.querySelectorAll('.projects__item-icon').forEach((element2) => {
    element2.addEventListener("click", function (e) {
        
      document.querySelector('.banner_popup__adname_little').innerHTML = element2.closest(".projects__item").querySelector(".projects__item-content").innerHTML;
      if ( document.querySelector('.banner_popup__adname_little video') ){
        document.querySelector('.banner_popup__adname_little video').play();
        document.querySelector('#banner_popup_content_video').muted = false;
      }

      document.querySelector('.banner_popup__adname_little').style.display = 'block';

      if (element2.closest(".projects__item").querySelector(".projects__item-new")){
        document.querySelector('.banner_popup .projects__item-new').style.display = 'flex';
      } else {
        document.querySelector('.banner_popup .projects__item-new').style.display = 'none';
      }

      document.querySelector('.banner_popup__content_wrap').style.display = 'none';
      document.querySelector('.banner_popup__buttons').style.display = 'none';
      
      document.querySelector('#banner_popup').classList.add('banner_popup__open');
      document.querySelector('.banner_popup__wrap').style.width = '427px';
    })
  })
    
  
  
  var projects_item_js_url,element;

document.addEventListener("DOMContentLoaded", () => {
  jQuery('body').on('click', '.projects_item_js', function () {
      element = this;

      document.querySelector('.banner_popup__adname_little').style.display = 'none';
      document.querySelector('.banner_popup .projects__item-new').style.display = 'none';
      document.querySelector('.banner_popup__content_wrap').style.display = 'flex';
      document.querySelector('.banner_popup__buttons').style.display = 'flex';

      if (element.getAttribute('data-external')!='' && element.getAttribute('data-external')!=null){
        document.querySelector('.banner_popup__external').style.display = 'flex';
        document.querySelector('.banner_popup__external').href = element.getAttribute('data-external');
      } else {
        document.querySelector('.banner_popup__external').style.display = 'none';
      }

      document.querySelector('.banner_popup__adname').innerHTML = element.innerHTML;    
      document.querySelectorAll('.banner_popup__content').forEach((element2) => {
        element2.style.display = 'none';
      })
  
    if ( document.querySelector('.banner_popup__wrap.banner_popup__wrap--wide') ){
      document.querySelector('.banner_popup__wrap.banner_popup__wrap--wide').classList.remove('banner_popup__wrap--wide');
    }
      document.querySelector('.banner_popup__wrap').style.width = '427px';
      document.querySelector('.banner_popup__iframe').style.width = '427px';
      document.querySelector('.banner_popup__iframe').style.height = 'auto';

      document.querySelector('.banner_popup__wrap').classList.remove('banner_popup__wrap_short');

      if ( element.getAttribute('data-type')=='banner' ){
          document.querySelector('#banner_popup_content_frame').style.display = 'block';
          document.querySelector('#banner_popup_content_frame').setAttribute('src',element.href) ;
          document.querySelector('.banner_popup__wrap').style.width = element.getAttribute('data-width')+'px';
          document.querySelector('.banner_popup__iframe').style.width = element.getAttribute('data-width')+'px';
          document.querySelector('.banner_popup__iframe').style.height = element.getAttribute('data-height')+'px';
          document.querySelector('.banner_popup__reload').style.display = 'block';
          if ( (element.getAttribute('data-width')-0)<300){
            document.querySelector('.banner_popup__wrap').classList.add('banner_popup__wrap_short');
          }
      }
      if ( element.getAttribute('data-type')=='image' ){
          document.querySelector('#banner_popup_content_img').style.display = 'block';
          document.querySelector('#banner_popup_content_img').setAttribute('src',element.href) ;
          document.querySelector('.banner_popup__reload').style.display = 'none';
          
          if ( element.getAttribute('data-width') === 'widescreen' ){
          /*
            document.querySelector('.banner_popup__wrap').style.width = '70vw';
          document.querySelector('.banner_popup__iframe').style.width = '70vw';
              */
              document.querySelector('.banner_popup__wrap').classList.add('banner_popup__wrap--wide');
          }
      }
      if ( element.getAttribute('data-type')=='video' ){
          document.querySelector('#banner_popup_content_video').style.display = 'block';
          document.querySelector('#banner_popup_content_video').setAttribute('src',element.href) ;
          document.querySelector('#banner_popup_content_video').play();
          document.querySelector('#banner_popup_content_video').muted = false;
          document.querySelector('#banner_popup_content_video').controls = false;
          document.querySelector('.banner_popup__reload').style.display = 'none';
          
          if ( element.getAttribute('data-width') === 'widescreen' ){
            document.querySelector('.banner_popup__wrap').classList.add('banner_popup__wrap--wide');
          }
          
      }
      

      document.querySelector('#banner_popup').classList.add('banner_popup__open');
      
      if ( document.querySelector('.projects__item__active') ){
        document.querySelector('.projects__item__active').classList.remove('projects__item__active');
      }
      
      element.closest("li").classList.add('projects__item__active');

      event.preventDefault()
  });
});       


  document.querySelector('.banner_popup__button_next').addEventListener("click", function (event) {
    stop_popup_videos();
      if ( document.querySelector('.projects__item__active + li') ){
        document.querySelector('.projects__item__active + li .projects_item_js').click();
      } 
      else {
        document.querySelector('.projects__item__active').parentNode.querySelector('li:first-child').querySelector('.projects_item_js').click();
      }         
  });

var pop_ul; 
  document.querySelector('.banner_popup__button_prev').addEventListener("click", function (event) {
    stop_popup_videos();
      if ( document.querySelector('.projects__item__active').previousElementSibling ){
        document.querySelector('.projects__item__active').previousElementSibling.querySelector('.projects_item_js').click();
      }  else {
        pop_ul = document.querySelector('.projects__item__active').parentNode;
        pop_ul.querySelector('li:last-child').querySelector('.projects_item_js').click();
      }          
  });
  document.querySelectorAll('.projects__cats__title').forEach((element) => {
    element.addEventListener("click", function (event) {
      if (element.parentNode.classList.contains('hover')){
        element.parentNode.classList.remove('hover');
      } else {
        if (document.querySelector('.projects__cats__item.hover')){
          document.querySelector('.projects__cats__item.hover').classList.remove('hover');
        }
        element.parentNode.classList.add('hover');
      }
      
    });
  })
  document.addEventListener("click", (e) => {
  const isClosest = e.target.closest('.projects__cats__item.hover');
  if (!isClosest && document.querySelector('.projects__cats__item.hover')) {
    document.querySelector('.projects__cats__item.hover').classList.remove("hover");
  }
});

if ( document.querySelector('.projects__filters') ){
  let url_string, client, creative,  locat2='';

  locat = 'https://houseofcampaigns.com/projects/'; 

  document.querySelectorAll('.projects__filters input[type="checkbox"]').forEach((element) => {  
        
      element.addEventListener("click", function (e) {
        url_string = '';
        document.querySelectorAll('.projects__filters input[name="tag[]"]:checked').forEach((element,i) => {
          if (i>0){
            url_string += ',';
          }
          url_string += element.value;
        });
        if (url_string=='') url_string ='all';
        
        client = '';
        document.querySelectorAll('.projects__filters input[name="client[]"]:checked').forEach((element,i) => {
          if (i>0){
            client += ',';
          }
          client += element.value;
        });
        if (client=='') client ='all';
        
        creative = '';
        document.querySelectorAll('.projects__filters input[name="creative[]"]:checked').forEach((element,i) => {
          if (i>0){
            creative += ',';
          }
          creative += element.value;
        });
        if (creative=='') creative ='all';
          jQuery('#projects').html('<div style="text-align:center">LOADING...</div>');
            locat2 = '?tag='+url_string;
            locat2 += '&client='+client;
            locat2 += '&creative='+creative;

            

          jQuery.ajax({
              type: "post",
              dataType : 'json',
              url: '/?page_id=7172',
              data: {
                tag: url_string, 
                client: client,
                creative:creative,
                ajax_query: 1
              },
              complete: function (response) {
                jQuery('#projects').html('');
                jQuery('#projects').append(response.responseText);
                history.pushState({}, "", locat+locat2);
                
              },
          });
      }); 
  });
}
