var mod_pagespeed_VPhFpxfjTt = "jQuery(function(){var ElmTitreSousCateg=\"<li><a href='javascript:void(0)' class='btn-categ'>Sous cat&eacute;gories</a></li>\";var listeSousCateg=jQuery(\".liste-sous-categorie\");var listeSousCategUl=jQuery(\".liste-sous-categorie ul\");listeSousCategUl.prepend(ElmTitreSousCateg);jQuery(\".btn-categ\").click(function(){if(parseInt(listeSousCateg.height())<=35){jQuery(\".liste-sous-categorie\").css({height:listeSousCategUl.height()});jQuery(this).css({backgroundPosition:'94% 8%'});}else{listeSousCateg.css({height:\"35px\"});jQuery(this).css({backgroundPosition:'94% 64%'});}});});";
var mod_pagespeed_WrUOHrjixn = "(function($){$.facebox=function(data,klass){$.facebox.loading()\nif(data.ajax)fillFaceboxFromAjax(data.ajax,klass)\nelse if(data.image)fillFaceboxFromImage(data.image,klass)\nelse if(data.div)fillFaceboxFromHref(data.div,klass)\nelse if($.isFunction(data))data.call($)\nelse $.facebox.reveal(data,klass)}\n$.extend($.facebox,{settings:{opacity:0.4,overlay:true,loadingImage:Drupal.settings.basePath+'sites/all/themes/dreamtemplate/images/loading.gif',closeImage:Drupal.settings.basePath+'sites/all/themes/dreamtemplate/images/closelabel.png',imageTypes:['png','jpg','jpeg','gif'],faceboxHtml:'\\\n    <div id=\"facebox\" style=\"display:none;\"> \\\n      <div class=\"popup\"> \\\n        <div class=\"content\"> \\\n        </div> \\\n        <a href=\"javascript:void(0)\" class=\"close\"><img src=\"\" title=\"Fermer\" class=\"close_image\" /></a> \\\n      </div> \\\n    </div>'},loading:function(){init()\nif($('#facebox .loading').length==1)return true\nshowOverlay()\n$('#facebox .content').empty()\n$('#facebox .body').children().hide().end().append('<div class=\"loading\"><img src=\"'+$.facebox.settings.loadingImage+'\"/></div>')\n$('#facebox').css({top:getPageScroll()[1]+(getPageHeight()/10),left:$(window).width()/2-205}).show()\n$(document).bind('keydown.facebox',function(e){if(e.keyCode==27)$.facebox.close()\nreturn true})\n$(document).trigger('loading.facebox')},reveal:function(data,klass){$(document).trigger('beforeReveal.facebox')\nif(klass)$('#facebox .content').addClass(klass)\n$('#facebox .content').append(data)\n$('#facebox .loading').remove()\n$('#facebox .body').children().fadeIn('normal')\n$('#facebox').css('left',$(window).width()/2-($('#facebox .popup').width()/2))\n$(document).trigger('reveal.facebox').trigger('afterReveal.facebox')},close:function(){$(document).trigger('close.facebox')\nreturn false}})\n$.fn.facebox=function(settings){if($(this).length==0)return\ninit(settings)\nfunction clickHandler(){$.facebox.loading(true)\nvar klass=this.rel.match(/facebox\\[?\\.(\\w+)\\]?/)\nif(klass)klass=klass[1]\nfillFaceboxFromHref(this.href,klass)\nreturn false}\nreturn this.bind('click.facebox',clickHandler)}\nfunction init(settings){if($.facebox.settings.inited)return true\nelse $.facebox.settings.inited=true\n$(document).trigger('init.facebox')\nmakeCompatible()\nvar imageTypes=$.facebox.settings.imageTypes.join('|')\n$.facebox.settings.imageTypesRegexp=new RegExp('\\.('+imageTypes+')$','i')\nif(settings)$.extend($.facebox.settings,settings)\n$('body').append($.facebox.settings.faceboxHtml)\nvar preload=[new Image(),new Image()]\npreload[0].src=$.facebox.settings.closeImage\npreload[1].src=$.facebox.settings.loadingImage\n$('#facebox').find('.b:first, .bl').each(function(){preload.push(new Image())\npreload.slice(-1).src=$(this).css('background-image').replace(/url\\((.+)\\)/,'$1')})\n$('#facebox .close').click($.facebox.close)\n$('#facebox .close_image').attr('src',$.facebox.settings.closeImage)}\nfunction getPageScroll(){var xScroll,yScroll;if(self.pageYOffset){yScroll=self.pageYOffset;xScroll=self.pageXOffset;}else if(document.documentElement&&document.documentElement.scrollTop){yScroll=document.documentElement.scrollTop;xScroll=document.documentElement.scrollLeft;}else if(document.body){yScroll=document.body.scrollTop;xScroll=document.body.scrollLeft;}\nreturn new Array(xScroll,yScroll)}\nfunction getPageHeight(){var windowHeight\nif(self.innerHeight){windowHeight=self.innerHeight;}else if(document.documentElement&&document.documentElement.clientHeight){windowHeight=document.documentElement.clientHeight;}else if(document.body){windowHeight=document.body.clientHeight;}\nreturn windowHeight}\nfunction makeCompatible(){var $s=$.facebox.settings\n$s.loadingImage=$s.loading_image||$s.loadingImage\n$s.closeImage=$s.close_image||$s.closeImage\n$s.imageTypes=$s.image_types||$s.imageTypes\n$s.faceboxHtml=$s.facebox_html||$s.faceboxHtml}\nfunction fillFaceboxFromHref(href,klass){if(href.match(/#/)){var url=window.location.href.split('#')[0]\nvar target=href.replace(url,'')\nif(target=='#')return\n$.facebox.reveal($(target).html(),klass)}else if(href.match($.facebox.settings.imageTypesRegexp)){fillFaceboxFromImage(href,klass)}else{fillFaceboxFromAjax(href,klass)}}\nfunction fillFaceboxFromImage(href,klass){var image=new Image()\nimage.onload=function(){$.facebox.reveal('<div class=\"image\"><img src=\"'+image.src+'\" /></div>',klass)}\nimage.src=href}\nfunction fillFaceboxFromAjax(href,klass){$.get(href,function(data){$.facebox.reveal(data,klass)})}\nfunction skipOverlay(){return $.facebox.settings.overlay==false||$.facebox.settings.opacity===null}\nfunction showOverlay(){if(skipOverlay())return\nif($('#facebox_overlay').length==0)\n$(\"body\").append('<div id=\"facebox_overlay\" class=\"facebox_hide\"></div>')\n$('#facebox_overlay').hide().addClass(\"facebox_overlayBG\").css('opacity',$.facebox.settings.opacity).click(function(){$(document).trigger('close.facebox')}).fadeIn(200)\nreturn false}\nfunction hideOverlay(){if(skipOverlay())return\n$('#facebox_overlay').fadeOut(200,function(){$(\"#facebox_overlay\").removeClass(\"facebox_overlayBG\")\n$(\"#facebox_overlay\").addClass(\"facebox_hide\")\n$(\"#facebox_overlay\").remove()})\nreturn false}\n$(document).bind('close.facebox',function(){$(document).unbind('keydown.facebox')\n$('#facebox').fadeOut(function(){$('#facebox .content').removeClass().addClass('content')\n$('#facebox .loading').remove()\n$(document).trigger('afterClose.facebox')})\nhideOverlay()})})(jQuery);";
