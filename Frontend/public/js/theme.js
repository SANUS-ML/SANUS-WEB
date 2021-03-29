(function() {

    /*!
     ______ _____   _______ _______ _______ _______ ______ _______
    |   __ \     |_|    ___|_     _|   |   |       |   __ \   _   |
    |    __/       |    ___| |   | |       |   -   |      <       |
    |___|  |_______|_______| |___| |___|___|_______|___|__|___|___|
    
    P L E T H O R A T H E M E S . C O M               (c) 2013-2015
    
    Theme Name: HealthFlex
    File Version: 1.0.1
    This file contains the necessary Javascript for the theme to function properly.
    
    */
    
    //========================== PLETHORA HELPER FUNCTIONS ==============================================
    
    (function( window, doc, $ ){
    
      "use strict";
    
      /*** GET BRAND COLORS ***/
    
      var rgb            = getComputedStyle( document.querySelector(".brand-colors") )["color"].match(/\d+/g);
    
      var r = parseInt(rgb[0]).toString(16); r = ( r.length === 1 ) ? "0" + r : r;
      var g = parseInt(rgb[1]).toString(16); g = ( g.length === 1 ) ? "0" + g : g;
      var b = parseInt(rgb[2]).toString(16); b = ( b.length === 1 ) ? "0" + b : b;
    
      themeConfig["GENERAL"] = themeConfig["GENERAL"] || {}
      themeConfig["GENERAL"].brandPrimary = '#' + r + g + b;
    
      var headerBgColor = getComputedStyle( document.querySelector(".header") )["background-color"];
    
      if ( headerBgColor.toLowerCase() === "transparent" ){
    
        themeConfig["GENERAL"].headerBgColor = 'transparent';
    
      } else {
    
        rgb = headerBgColor.match(/\d+/g);
    
        r = parseInt(rgb[0]).toString(16); r = ( r.length === 1 ) ? "0" + r : r;
        g = parseInt(rgb[1]).toString(16); g = ( g.length === 1 ) ? "0" + g : g;
        b = parseInt(rgb[2]).toString(16); b = ( b.length === 1 ) ? "0" + b : b;
    
        themeConfig["GENERAL"].headerBgColor = '#' + r + g + b;
    
      }
    
      /*** POLYFILLS ***/
    
      // SHIM POLYFILL FOR: requestAnimationFrame
      window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
                                     window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
                                     window.msRequestAnimationFrame || function (cb){window.setTimeout(cb,1000/60);};
    
      var _p = _p || {};
    
      /*** OBJECT EXTEND: By @toddmotto ***/
    
      _p.extend = function( target, source ) {
          var merged = Object.create(target);
          Object.keys(source).map(function (prop) {  prop in merged && (merged[prop] = source[prop]);  });
          return merged;
      };
    
      /*** MULTI SLICE ***/
    
      _p.slice = function(){
        return [].slice.call.apply( [].slice, arguments );
      }
    
    
      /*** BOOLEAN OPERATOR CHECK ***/
    
      _p.checkBool = function(val){
          return ({1:1,true:1,on:1,yes:1}[(((typeof val !=="number")?val:(val>0))+"").toLowerCase()])?true:false;
      };
    
      /*** DEBUGGING CONSOLE ***/
    
      _p.debugLog = function(){
        themeConfig && themeConfig.debug && console.log.apply( console, arguments );
      }
    
      /*** DETECT INTERNET EXPLORER ***/
    
      _p.isIE = function() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
      }
    
      /*** SVG CREATION UTILITY FUNCTION ***/
    
      _p.SVGMold  = function( type, options ){
      var molding = doc.createElementNS('http://www.w3.org/2000/svg', type );
      for (var key in options) options.hasOwnProperty(key) && molding.setAttribute( key, options[key]);
        return molding;
      }
    
      /*** PUBSUB ***/
    
      _p.PubSub = {};
    
      (function(q) {
          var topics = {}, subUid = -1;
          q.subscribe = function(topic, func) {
              if (!topics[topic]) {
                  topics[topic] = [];
              }
              var token = (++subUid).toString();
              topics[topic].push({
                  token: token,
                  func: func
              });
              return token;
          };
    
          q.publish = function(topic, args) {
              if (!topics[topic]) {
                  return false;
              }
              setTimeout(function() {
                  var subscribers = topics[topic],
                      len = subscribers ? subscribers.length : 0;
    
                  while (len--) {
                      subscribers[len].func(topic, args);
                  }
              }, 0);
              return true;
    
          };
    
          q.unsubscribe = function(token) {
              for (var m in topics) {
                  if (topics[m]) {
                      for (var i = 0, j = topics[m].length; i < j; i++) {
                          if (topics[m][i].token === token) {
                              topics[m].splice(i, 1);
                              return token;
                          }
                      }
                  }
              }
              return false;
          };
      }(_p.PubSub));
    
      /*** SCROLL ON CLICK ***/
    
       $(window).bind( 'hashchange', function(e) {
        console.log(parseInt(window.location.hash.replace("#", "")));
       });
    
      $.extend( $.easing, { easeOutQuart: function (x, t, b, c, d) { return -c * ((t=t/d-1)*t*t*t - 1) + b; }, });
    
      _p.scrollOnClick = function(e){
    
        var HeaderHeight = $('.header').outerHeight();
    
        _p.debugLog("Scrolled...");
        e.preventDefault();                   // PREVENT DEFAULT ANCHOR CLICK BEHAVIOR
        var hash        = this.hash;          // STORE HASH
        var hashElement = $(this.hash);       // CACHE $.SELECTOR
        // Manage 'active' class for menu elements
        var $menu_el = $(this);
        $menu_el.parent().siblings().removeClass('active');
        $menu_el.parent().addClass('active');
    
         if ( hashElement.length > 0 ){
           $('html, body').animate({ scrollTop: Math.round(hashElement.offset().top) - HeaderHeight }, themeConfig["GENERAL"]["onePagerScrollSpeed"],'easeOutQuart',
            function(){
              /*** ADD HASH TO URL WHEN FINISHED [v1.3] | Thank you @LeaVerou! ***/
              if ( history.pushState ) history.pushState( null, null, hash ); // Old Method: window.location.hash = hash
            });
         }
    
      }
    
      return window._p = _p;
    
    }( window, document, jQuery ));
    
    //========================== NAVIGATION: COLLAPSER ==================================================
    
    (function($){
    
        "use strict";
    
        // OPEN AND CLOSE SUBMENUS ON CLICK
        $('.lihasdropdown').on('click', '> a', function(e){
          if(!$(this).next(".menu-dropdown").hasClass('show')) // UI FIX 686 | If a parent menu has an active link, disable it on first click, in order to let the sub-menu appear
          {                                                    // UI FIX 686
            e.preventDefault();                                // UI FIX 686
            $('.lihasdropdown').not( $(this).parent() ).children(".menu-dropdown").removeClass("show");
            $('.sublihasdropdown').children(".menu-dropdown").removeClass('show');
            $(this).next(".menu-dropdown").toggleClass("show");
            e.stopPropagation();
          }                                                    // UI FIX 686
        });
    
        $('.sublihasdropdown').on('click', '> a', function(e){
          if(!$(this).next(".menu-dropdown").hasClass('show')) // UI FIX 686
          {                                                    // UI FIX 686
            e.preventDefault();                                // UI FIX 686
            $('.sublihasdropdown').not( $(this).parent() ).children(".show").removeClass("show");
            $(this).next(".menu-dropdown").toggleClass("show");
            e.stopPropagation();
          }                                                    // UI FIX 686
        });
    
        // HIDE SUBMENUS WHEN CLICKING ELSEWHERE
        $(document.body).on('click', function(){
            $('.lihasdropdown').children(".menu-dropdown").removeClass('show');
            $('.sublihasdropdown').children(".menu-dropdown").removeClass('show');
        })
    
        // HANDLE THE MOBILE MENU
        $('.mobile_collapser, span.close_menu').on('click', function(){
              var window_height = $(window).height();
              $('.menu_container').toggleClass('collapsed').css( "height", window_height );
              $('.header, .head_panel, .main, footer').toggleClass('collapsed');
        });
    
        // CLOSE MENUS ON RESIZE
        var widthhh = 0;
        var $window = $(window);
        $window.load( function(){  widthhh = $window.width();  });
        $window.resize( function(){
          if( widthhh != $window.width() ){
            $('.collapsed').removeClass('collapsed');
            $('.menu_container').css( "height", "auto" );
            widthhh = $window.width();
          }
        });
    
        //HOVER MENU FUNCTIONALITY
        var $hoverMenu  = $('.hover_menu');
        var isCollapsed = function(){
          return !!$('.menu_container.collapsed').length;
        }
    
        $hoverMenu.find('.lihasdropdown').on(
            {
            mouseenter: function() {
              if (isCollapsed()) return;
              $(this).children('ul').addClass('show wait_for_photo_load');
            },
            mouseleave: function(){
              if (isCollapsed()) return;
              $(this).children('ul.show').removeClass('show wait_for_photo_load');
            }
        });
    
        $hoverMenu.find('.sublihasdropdown').on(
            {
            mouseenter: function() {
              if (isCollapsed()) return;
              $(this).children('ul').addClass('show');
            },
            mouseleave: function(){
              if (isCollapsed()) return;
              $(this).children('ul.show').removeClass('show');
            }
        });
    
    
    }(jQuery));
    
    //END======================= NAVIGATION: COLLAPSER ==================================================
    
    //========================== NAVIGATION ACTIVE STATE ================================================
    
    (function($){
    
      var currentLink = document.location.pathname.split("/");
          currentLink = currentLink[currentLink.length-1];
      var activeLink  = document.querySelector(".main_menu a[href$='" + currentLink + "']");
        ( activeLink !== null ) && activeLink.parentElement.setAttribute( "class", "active" );
    
    }(jQuery));
    
    //END======================= NAVIGATION ACTIVE STATE ================================================
    
    //=============== JQUERY TO PERFORM ON DOM READY ====================================================
    
    jQuery(function($){
    
      "use strict";
    
      //============================ STICKY HEADER HEIGHT ==============================
    
      // If Header is Transparent AND there is no Head Panel, add top margin to main.
      // if( $('.header.transparent').length && $('.head_panel').length == 0 ) {
      //   var HeaderHeight = $('.header').outerHeight();
      //   var $main = $('.main');
      //   $main.css( 'margin-top', HeaderHeight );
      //   $(window).on( 'resize', function(){
      //     var HeaderHeight = $('.header').outerHeight();
      //     $main.css( 'margin-top', HeaderHeight );
      //   });
      // }
    
      // If Header is Sticky AND not Transparent, add top margin to body.
      if( $('.sticky_header .header:not(".transparent")').length ) {
        var HeaderHeight = $('.header').outerHeight();
        var $body = $('body');
        $body.css( 'margin-top', HeaderHeight );
        $(window).on( 'resize', function(){
          var HeaderHeight = $('.header').outerHeight();
          $body.css( 'margin-top', HeaderHeight );
        });
      }
    
    
      //======================== HEAD-PANEL Heights ===========================
    
      if( $('.head_panel .hgroup').length ) {
        var hgroupheight = $('.head_panel .hgroup').outerHeight();
        $('.head_panel').children().css( 'height' , hgroupheight )
      }
    
      //======================== FULL HEIGHT SECTIONS ===========================
    
      (function($){
    
        var section_with_vertical_center_container = $('.full_height.vertical_center').children('[class^=container]');
        var section_with_vertical_bottom_container = $('.full_height.vertical_bottom').children('[class^=container]');
    
        // All sections with a class="full_width" have their inner container change class, on DOM Ready
        //section_with_full_width.removeClass('container').addClass('container-fluid');
    
        $(window).on("load resize", function() {
    
          // Declaring some vars on Load and Resize
          var header_height = $('.header').height();
          var window_height = $(window).height();
          var usable_height = window_height - header_height;
    
    
          // All root sections with a class .full_height, take the window height as minimum-height
          // When header is NOT Transparent, all root sections with a class .full_height take the usable height as minimum-height
          if( $('.header:not(".transparent")').length ) {
            var section_with_full_height = $('.full_height');
            section_with_full_height.css( "min-height", usable_height );
          }
          // Else all root sections with a class .full_height take the full window height as minimum-height (could be given by CSS 100VH but not stil ready...)
          if ($('.header.transparent').length) {
            var section_with_full_height = $('.full_height');
            section_with_full_height.css( "min-height", window_height );
          }
    
          // All sections with a class="full_height vertical_center" will have their content vertically centered on the usable height
          section_with_vertical_center_container.each(function(){
              var container_height = $(this).height();
              var top_padding = (usable_height - container_height -55) * 0.5;
              if (top_padding > 0) {
                  $(this).css('padding-top' , top_padding);
                  };
          });
    
          // All sections with a class="full_height vertical_bottom" will have their content vertically bottom on the usable height
          section_with_vertical_bottom_container.each(function(){
              var container_height = $(this).height();
              var top_padding = (usable_height - container_height -25);
              if (top_padding > 0) {
                  $(this).css('padding-top' , top_padding - header_height);
              };
          });
    
          _p.PubSub.publish("full-height", "finished");
    
        });
    
      }(jQuery));
    
      //======================== ELEVATED COLUMN'S PARENT ROW PADDING FIX ==========
    
      var $elevatedCol = $('div[class *="col-"].elevate');
      if( $elevatedCol.length ) { $elevatedCol.parent().css('padding-top' , '70px'); }
    
      //============================ 3D LINKS EFFECT ===============================
    
      (function enable3DLinks( selector ) {
    
          if ( !( document.body.style['webkitPerspective'] !== undefined || document.body.style['MozPerspective'] !== undefined ) ) return;
    
          _p.slice( document.querySelectorAll( "a.roll" ) ).forEach(function(a){
              a.innerHTML = '<span data-title="'+ a.text +'">' + a.innerHTML + '</span>';
          });
    
      }());
    
      //======================== NAVIGATION SOCIAL LINKS ===========================
    
      $(".mainbar .social_links").on("click", function(e){
        e.preventDefault();
        $(".mainbar .team_social").toggleClass("showLinks");
      });
      $(".main").on("click", function(){ $(".mainbar .team_social").removeClass("showLinks"); });
    
      //====================== SCROLL ON CLICK OF A HASH-LINK init =================
    
      (function($){
    
        // find id anchored links
        var $links_with_id = $(".mainbar .main_menu, .topbar .top_menu, .editorcontentnav_menu, .main")
            .find('a[href*="#"], button[href*="#"]')
            .not('[data-vc-tabs], [data-vc-accordion], [data-slide]')  // EXCLUDE VC TABS
            .filter(function(idx,el){ return $(el).parents(".product").length < 1; });   // EXCLUDE WOO TABS
    
        $.each( $links_with_id, function ( i, link_with_id ) {
    
          var $link_with_id = $(link_with_id);
          var link_id  = $link_with_id.attr('href').split('#')[1];
          if ( link_id != 'undefined' && link_id != ''  ) {
    
            // Trigger scrolling only if current page contains sections with this id
            var $found_id_sections = $('#'+ link_id );
            if ( $found_id_sections.length > 0 ) {
    
              // console.log( $link_with_id );
              // console.log( link_id );
              if (window.location.hash != '#' + link_id ) { // remove 'active' class if not current hash
                $link_with_id.parent().removeClass('active');
              }
              $link_with_id.add("a.scrollify").on('click', _p.scrollOnClick );
            }
          }
        });
    
    
    
      })(jQuery);
    
      //==================== PARTICLES =============================================
    
      (function($){
    
        var preInit = function(){
    
          if ( typeof particlesInit == "undefined" ) return;
    
          // var enableAnim = ( themeConfig["PARTICLES"].animation === undefined ) ? false : themeConfig["PARTICLES"].animation;
          var enableAnim = false;
    
          var particles_options = {
            light_section       : {
              group: true,
              canvas : {
                bgc: themeConfig["PARTICLES"].bgColor
              },
              particles: {
                opacity: themeConfig["PARTICLES"].opacity,
                color: themeConfig["PARTICLES"].color,
                nb: 100,
                line_linked: {
                  color: themeConfig["PARTICLES"].color,
                  opacity: themeConfig["PARTICLES"].opacity,
                  condensed_mode: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                  }
                },
                anim: { enable: enableAnim, speed: 2 }
              },
              interactivity: { enable: false },
              retina_detect: true
            },
            dark_section        : {
              group: true,
              particles: {
                opacity: themeConfig["PARTICLES"].opacity,
                color: themeConfig["GENERAL"].brandPrimary || themeConfig["GENERAL"].brandPrimary,
                nb: 100,
                line_linked: {
                  opacity: themeConfig["PARTICLES"].opacity,
                  color: themeConfig["GENERAL"].brandPrimary || themeConfig["GENERAL"].brandPrimary,
                },
                anim: { enable: enableAnim, speed: 2 }
              },
              interactivity: { enable: false },
              retina_detect: true
            },
            skincolored_section : {
              group: true,
              particles: {
                opacity: themeConfig["PARTICLES"].opacity,
                color: themeConfig["GENERAL"].brandSecondary,
                nb: 100,
                line_linked: {
                  opacity: themeConfig["PARTICLES"].opacity,
                  color: themeConfig["GENERAL"].brandSecondary,
                },
                anim: { enable: enableAnim, speed: 2 }
              },
              interactivity: { enable: false },
              retina_detect: true
            },
            secondary_section : {
              group: true,
              particles: {
                opacity: themeConfig["PARTICLES"].opacity,
                color: '#eeeeee',
                nb: 100,
                line_linked: {
                  opacity: themeConfig["PARTICLES"].opacity,
                  color: '#eeeeee',
                },
                anim: { enable: enableAnim, speed: 2 }
              },
              interactivity: { enable: false },
              retina_detect: true
            }
          }
    
          particlesInit( particles_options );
    
        }
    
        // INITIALIZE PARTICLES EFFECT //
    
        if ( $(".full_height").length > 0 ){
    
          _p.PubSub.subscribe("full-height", function(topic, data){ preInit(); });
    
        } else {
    
          preInit();
    
        }
    
      })(jQuery);
    
      //END================= PARTICLES =============================================
    
      //================== DOUBLE HELIX EFFECT =====================================
    
      (function($){
    
        var captions = document.querySelectorAll(".double_helix .portfolio_description, .double_helix .overlay");
    
        if ( $.fn.DoubleHelix && captions.length > 0 ){
    
          var canvas = document.createElement("canvas");
              canvas.setAttribute("width", 100);
              canvas.style.position = "absolute";
              canvas.style.top = 0;
              canvas.style.left = "30px";
              canvas.style.opacity = 0.8;
    
          _p.slice(captions).forEach(function(c,i){
              var _canvas = canvas.cloneNode(true)
                  _canvas.setAttribute("height", c.offsetHeight );
              c.appendChild(_canvas);
              $(_canvas).DoubleHelix();
          });
        }
    
      })(jQuery);
    
      //END=============== DOUBLE HELIX EFFECT =====================================
    
      //=================== PARALLAX ===================================================
    
      (function($){
    
        $('.parallax-window').each(function(){
    
          var bg_image = $(this).css("background-image").replace('url(','').replace(')','').replace(/\"/g, '').replace(/\'/g, '');
          $(this).addClass("transparent").css("background-image","none").attr("data-parallax", "scroll").attr("data-image-src", bg_image).attr("data-position", "center top");
    
        });
    
      }(jQuery));
    
      //END=================== PARALLAX ===================================================
    
      //=================== SECTION SEPARATORS ===================================================
    
        (function($){
    
          var $separator_top    = $(".separator_top");
          var $separator_bottom = $(".separator_bottom");
    
          if ($separator_top.length) {
            $separator_top.each(function(){
              $(this).prepend( "<div class='separator_top'><div>" );
            });
          }
          if ($separator_bottom.length) {
            $separator_bottom.each(function(){
              $(this).append( "<div class='separator_bottom'><div>" );
            });
          }
    
        }(jQuery));
    
      //END=================== SECTION SEPERATORS ===================================================
    
    });
    //END================== JQUERY TO PERFORM ON DOM READY ========================================================
    
    
    //===================== JQUERY TO PERFORM ON WINDOW LOAD ======================================================
    
    jQuery(window).load(function(a,b,c){
    
      "use strict";
    
      var $ = jQuery.noConflict();
    
    
    
        // //=================== FOLDED SECTION EFFECT ===================================================
    
      (function($){
    
        var $folded_section   = $(".folded_section");
        var $folded_section_row   = $(".folded_section .row");
        var $folded_section_inner_row   = $(".folded_section.vc_inner");
        var $folded_section_col   = $(".folded_section .wpb_column");
        var $folded_section_col_even   = $folded_section_col.filter( ":even" );
        var $folded_section_col_odd   = $folded_section_col.filter( ":odd" );
    
        if ($folded_section.length) {
          $folded_section.each(function(){
            $(this).addClass("separator_top separator_bottom");
          });
          $folded_section_col.each(function(){
            $(this).prepend( "<div class='separator_top'><div>" );
            $(this).append( "<div class='separator_bottom'><div>" );
            var $thebgcolor = $(this).css("background-color");
            var $thewidth = $(this).outerWidth() - 4;
            $(this).css("border-color", $thebgcolor);
            $(this).children('.separator_top').css("border-left-width", $thewidth);
            $(this).children('.separator_bottom').css("border-left-width", $thewidth);
          });
    
          $folded_section_row.each(function(){
            var $folded_section_col_last   = $(this).children('.wpb_column').filter( ":last" );
            var $thewidth = $folded_section_col_last.width() - 4;
            $folded_section_col_last.children('.separator_top').css("border-left-width", $thewidth);
            $folded_section_col_last.children('.separator_bottom').css("border-left-width", $thewidth);
          });
    
          $folded_section_inner_row.each(function(){
            var $folded_section_col_last   = $(this).children('.wpb_column').filter( ":last" );
            var $thewidth = $folded_section_col_last.width() - 4;
            $folded_section_col_last.children('.separator_top').css("border-left-width", $thewidth);
            $folded_section_col_last.children('.separator_bottom').css("border-left-width", $thewidth);
          });
    
          $folded_section_col_even.each(function(){
            $(this).addClass("sep_triangular_downhill_top");
            $(this).addClass("sep_triangular_downhill_bottom");
          });
          $folded_section_col_odd.each(function(){
            $(this).addClass("sep_triangular_uphill_top");
            $(this).addClass("sep_triangular_uphill_bottom");
          });
    
          $(window).on( "resize", function() {
            $folded_section_col.each(function(){
              var $thewidth = $(this).outerWidth() -4;
              $(this).children('.separator_top').css("border-left-width", $thewidth);
              $(this).children('.separator_bottom').css("border-left-width", $thewidth);
            });
            $folded_section_row.each(function(){
              var $folded_section_col_last   = $(this).children('.wpb_column').filter( ":last" );
              var $thewidth = $folded_section_col_last.width() - 4;
              $folded_section_col_last.children('.separator_top').css("border-left-width", $thewidth);
              $folded_section_col_last.children('.separator_bottom').css("border-left-width", $thewidth);
            });
            $folded_section_inner_row.each(function(){
              var $folded_section_col_last   = $(this).children('.wpb_column').filter( ":last" );
              var $thewidth = $folded_section_col_last.width() - 4;
              $folded_section_col_last.children('.separator_top').css("border-left-width", $thewidth);
              $folded_section_col_last.children('.separator_bottom').css("border-left-width", $thewidth);
            });
          });
        }
      }(jQuery));
    
      // //END=================== FOLDED SECTION EFFECT ===================================================
    
        //================== SAME COLUMN HEIGHT ==========================================
    
      var sameHeightCols = $(".same_height_col");
    
      //if ( !( window.matchMedia && window.matchMedia( "only screen and (max-width: 480px)" ).matches && sameHeightCols.length > 0 ) ){
          sameHeightCols.conformity();
          $(window).on( "resize", function() {  sameHeightCols.conformity();  });
      //}
    
      //END=============== SAME COLUMN HEIGHT ==========================================
    
      //================== ISOTOPE FILTERING: PORTFOLIO ================================
    
      (function($){
    
          var $container = $('#cont_medicus');
    
          if ( $.fn.isotope && $container.length ){
    
            $container.isotope({});
    
            $('#filt_medicus a[data-filter="*"]').addClass('active');
    
            var $filterAnchor = $('#filt_medicus a');
                $filterAnchor.click(function(){
    
                  $filterAnchor.removeClass('active');
                  $(this).addClass('active');
                  var selector = $(this).attr('data-filter');
                  $container.isotope({ filter: selector });
                  return false;
    
                });
    
          $(window).resize(function(){ $container.isotope({}); });
    
          }
    
      })(jQuery);
    
      //END=============== ISOTOPE FILTERING ===========================================
    
      //================== MASONRY ===========================================
    
      (function($){
    
        var $container = $('.masonry > .row');
    
        if ( $.fn.isotope && $container.length ){
    
          $container.isotope({});
    
          $(window).resize(function(){  $container.isotope({});  });
    
        }
    
      })(jQuery);
    
      //END=============== MASONRY ===========================================
    
      //================== ENABLE BEFORE/AFTER PLUGIN ========================
      // Moved to Plethora_Shortcode_Imagecompare class
      // $.fn.twentytwenty && $('.twentytwenty-container') && $('.twentytwenty-container').twentytwenty({ default_offset_pct: 0.5, orientation: 'horizontal' });
    
      //=================== WOW (REVEAL ON SCROLL INIT FOR NO-TOUCH DEVICES) ===========
    
      (function($){
    
        if ($('.no-touch').length) {
          var wow = new WOW({
            animateClass : 'animated',
            offset       :       100
          });
          wow.init();
        }
    
      })(jQuery);
    
      //END================ WOW (REVEAL ON SCROLL INIT FOR NO-TOUCH DEVICES) ===========
    
      //========================== HEADER ON SCROLL =======================================================
    
    (function($){
    
      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky_header:not(.sticky_topbar) .topbar').addClass("hidden");
            $('.sticky_header .header.transparent').removeClass("transparent").addClass("was_transparent");
        } else {
            $('.sticky_header .topbar').removeClass("hidden");
            $('.sticky_header .header.was_transparent').removeClass("was_transparent").addClass("transparent");
        }
      });
    
      var window_top = $(window).scrollTop();
        if (window_top > 300) {
            $('.sticky_header:not(.sticky_topbar) .topbar').addClass("hidden");
            $('.sticky_header .header.transparent').removeClass("transparent").addClass("was_transparent");
        } else {
            $('.sticky_header .topbar').removeClass("hidden");
            $('.sticky_header .header.was_transparent').removeClass("was_transparent").addClass("transparent");
        }
    
    }(jQuery));
    
    //END======================= HEADER ON SCROLL =======================================================
    
      //=================== LIGHTBOX ===================================================
    
      (function($){
    
        var activityIndicatorOn  = function(){  $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );  };
        var activityIndicatorOff = function(){  $( '#imagelightbox-loading' ).remove();  };
        var overlayOn            = function(){  $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );  };
        var overlayOff           = function(){  $( '#imagelightbox-overlay' ).remove();  };
        var closeButtonOn        = function( instance ){  $( '<a href="#" id="imagelightbox-close">Close</a>' ).appendTo( 'body' ).on( 'click', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; }); };
        var closeButtonOff       = function(){  $( '#imagelightbox-close' ).remove();  };
        var captionOn            = function(){
            var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' ) || "";
            if( description.length > 0 ) $( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
        };
        // DISPLAY CAPTION ON SINGLE POST VIEW
        var captionOnSingle = function()
            {
                var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ).attr( 'title' ) || "";
                if( description.length > 0 )
                    $( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
            };
        // DISPLAY CAPTION ON GALLERY GRID CLASSIC MODE. CAPTION IS BASED ON ALT ATTRIBUTE.
        var captionOnGallery = function(){
                var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ) || "";
                if ( description.attr('data-description') !== "undefined" && description.attr('data-description') !== "" ){
                    description = description.attr('data-description');
                } else if ( description.attr('datas-caption') !== "undefined" && description.attr('datas-caption') !== "" ) {
                    description = description.attr('data-caption');
                }
                if( description && description.length > 0 )
                    $( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
        };
        var captionOff = function(){  $( '#imagelightbox-caption' ).remove();  };
        // ARROWS
        var arrowsOn = function( instance, selector ){
              if ( instance.length > 3 ){
                var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );
                    $arrows.appendTo( 'body' );
                    $arrows.on( 'click touchend', function( e ){
                      e.preventDefault();
                      var $this   = $( this ),
                          $target = $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
                          index   = $target.index( selector );
                      if( $this.hasClass( 'imagelightbox-arrow-left' ) ) {
                          index = index - 1;
                          if( !$( selector ).eq( index ).length ) index = $( selector ).length;
                      } else {
                          index = index + 1;
                          if( !$( selector ).eq( index ).length )
                              index = 0;
                      }
                      instance.switchImageLightbox( index );
                      return false;
                });
              }
        };
        var arrowsOff = function(){  $( '.imagelightbox-arrow' ).remove();  };
    
        //  MASONRY GALLERY INITIALIZATION
        if ( $().imageLightbox ) {
    
            // ADDING LIGHTBOX FOR GALLERY GRID / CLASSIC "PORTFOLIO STRICT" & MASONRY
            // var selectorGG = 'a[data-imagelightbox="gallery"]';  // ENABLE ARROWS
            var selectorGG = 'a.lightbox_gallery';                  // ENABLE ARROWS
            var instanceGG = $( 'a.lightbox_gallery' ).imageLightbox({
                /* WITH ARROWS */
                onStart:        function() { arrowsOn( instanceGG, selectorGG ); overlayOn(); closeButtonOn( instanceGG ); },
                onEnd:          function() { arrowsOff(); overlayOff(); captionOff(); closeButtonOff(); activityIndicatorOff(); },
                onLoadEnd:      function() { $( '.imagelightbox-arrow' ).css( 'display', 'block' ); captionOnGallery(); activityIndicatorOff(); },
                onLoadStart:    function() { captionOff(); activityIndicatorOn(); }
            });
            var selectorS = 'a[data-imagelightbox="gallery"]'; // ENABLE ARROWS
            var instanceS = $( 'a.lightbox_single' ).imageLightbox({
              /* WITH ARROWS */
              onStart:        function() { arrowsOn( instanceS, selectorS ); overlayOn(); closeButtonOn( instanceS ); },
              onEnd:          function() { arrowsOff(); overlayOff(); captionOff(); closeButtonOff(); activityIndicatorOff(); },
              onLoadEnd:      function() { $( '.imagelightbox-arrow' ).css( 'display', 'block' ); captionOnSingle(); activityIndicatorOff(); },
              onLoadStart:    function() { captionOff(); activityIndicatorOn(); }
            });
    
        }
    
      })(jQuery);
    
      //END================ LIGHTBOX ===================================================
    
    
      //========================== TOP BAR ALIGNMENT FOR MENU CONTAINERS =======================================================
    
      ( function( $ ) {
    
       $('.topbar .row > div').each( function( ind ) {
    
        var $container_menu = $(this).find( '.top_menu' );
        if ( $container_menu.length > 0 ) {
            if ( $(this).hasClass( 'text-left' ) ) {
    
          $container_menu.css( 'float', 'left' );
    
            } else if ( $(this).hasClass( 'text-right' ) ) {
    
          $container_menu.css( 'float', 'right' );
    
            } else if ( $(this).hasClass( 'text-center' ) ) {
    
          $container_menu.css( 'display', 'inline-block' );
            }
        }
       });
    
    }( jQuery ) );
    
      //END================ TOP BAR ALIGNMENT FOR MENU CONTAINERS ===========
    
    
    });
    //END============================= JQUERY TO PERFORM ON WINDOW LOAD =======================================
    
    ;
    
    
    }).call(this);