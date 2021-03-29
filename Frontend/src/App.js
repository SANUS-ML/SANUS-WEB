import React from 'react';
import logo from "./images/logo_up.png";
import logo1 from "./images/logo3.png";
import slider2 from "./images//WTH.gif";
import slider3 from "./images/2409741.jpg";
import hrr from "./images/hrr.jpg";
import bottom from "./images/2409773.jpg";
import sayan from "./images/sayan.jpg";
import sambit from "./images/pp.png"
import taran from "./images/taran.png";
import manish from "./images/manish.jpeg";
import heart from "./images/strive-cardiology.png";
import mosquito from "./images/mosquito.png";
import ecg from "./images/ecg.gif";





const App=()=> {
  return (
    
    <div className="overflow_wrapper home vc_responsive sticky_header">
      <div className="header home vc_responsive sticky_header">
        <div className="mainbar  transparent">
          <div className="container">
            <div className="logo">
              <a href="index.html" className="brand">
                <img src={logo} alt="SANUS"/>
              </a>
            </div>      	
              <div className="menu_container">
                <span className="close_menu">
                  &times;
                </span>
                <ul id="menu-primary-menu" className="main_menu hover_menu">
                  <li id="menu-item-1789" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-145 current_page_item menu-item-1789 active">
                    <a title="Home" href="index.html">Home</a>
                  </li>
                  <li id="menu-item-1673" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1673 lihasdropdown">
                    <a title="Our Services" href="#">Our Services</a>
                    <ul role="menu" className=" menu-dropdown">
                      <li id="menu-item-1758" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1758"><a  href="http://0.0.0.0/heart/test">Heart Disease Diagnostic</a></li>
                      <li id="menu-item-1769" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769"><a  href="http://0.0.0.0/pneumonia/test">Pneumonia Detection</a></li>
                      <li id="menu-item-1759" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1759"><a  href="http://0.0.0.0/malaria/test">Malaria Detection</a></li>
                      <li id="menu-item-1759" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1759"><a  href="http://0.0.0.0/brain/test">Brain Tumor Detection</a></li>
                      <li id="menu-item-1759" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1759"><a  href="http://0.0.0.0/skin/test">Skin Cancer Detection</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-1760" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1760">
                    <a  href="#about">About Us</a>
                  </li>
                  <li id="menu-item-1771" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1771">
                    <a  href="#footer">Contact Us</a>
                  </li>
                </ul>        
              </div>
              <label className="mobile_collapser">
                <span>MENU</span>
              </label>
            </div>
          </div>
        </div>
        <div className="head_panel">
          <div className="slider_wrapper">
            <div id="head_panel_slider" className="owl-carousel">
              <div className="stretchy_wrapper ratio_slider"> 
                <div style={{backgroundImage: `url(${ecg})`}} aria-hidden="true" className="item    ">
                  <div className="container">
                     <div className="caption caption_left caption_fancy  text-left">
                        <div className="inner black_section transparent_film animated slideInUp">
                          <div className="t1">SANUS</div> 
                          <div className="t2">Computer Aided Diagnostic System</div> 
                            <p className="desc hidden-xxs">We use ML to detect patterns of certain diseases within patient electronic healthcare records and provide information of various anomalies.</p> 
                              <div>
                                <a href="#services" target="_self" className="btn btn-primary">
                                  Try Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                   </div> 
                   <div className="stretchy_wrapper ratio_slider"> 
                  <div style={{backgroundImage: `url(${slider2})`, backgroundPositionY: "between"}} aria-hidden="true" className="item    ">
                </div>
              </div> 
               <div className="stretchy_wrapper ratio_slider"> 
                <div style={{backgroundImage: `url(${slider3})`}} aria-hidden="true" className="item    ">
                  <div className="container">  
                    <div className="caption caption_left caption_fancy  text-left">
                      <div className="inner black_section transparent_film animated slideInUp">
                       <div className="t1">INSTANT DIGNOSTIC</div> 
                         <div className="t2">We care about yout health</div>
                         <p className="desc hidden-xxs"></p> 
                          <div>
                            <a href="#services" target="_self" className="btn btn-primary">
                              Our Services
                            </a>
                          </div> 
                       </div>
                   </div>  
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>        
        <div className="brand-colors"> </div>
        <span className="progress_ball"><i className="fa fa-refresh"></i></span>
  
        <div className="loader-modal"></div>
         <div id="loader" data-opening="m -5,-5 0,70 90,0 0,-70 z m 5,35 c 0,0 15,20 40,0 25,-20 40,0 40,0 l 0,0 C 80,30 65,10 40,30 15,50 0,30 0,30 z" className="pageload-overlay">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="0 0 80 60" preserveaspectratio="none">
            <path d="m -5,-5 0,70 90,0 0,-70 z m 5,5 c 0,0 7.9843788,0 40,0 35,0 40,0 40,0 l 0,60 c 0,0 -3.944487,0 -40,0 -30,0 -40,0 -40,0 z"></path>
          </svg>
        </div><div className="main foo" data-colorset="foo"><section className="vc_row wpb_row vc_row-fluid no_padding no_cols_padding elevate folded_section transparent">
    <div className="container">
      <div className="row">
              <div className="wpb_column vc_column_container col-sm-3 col-xs-6 skincolored_section">
                  <div className="wpb_wrapper">
  <div className="teaser_box wpb_content_element text-center  transparent boxed same_height_col  with_button    ">
  
    <div className="figure transparent">
          <i className="fas fa-heartbeat"></i>
    </div>
    <div className="content text-center   with_button "> 
      <div className="hgroup">
         <h4 className="neutralize_links">
         Heart Disease
         </h4>
         <p>Dignostics</p> 
      </div>
      <div className="link centered">
          <a href="http://0.0.0.0/heart/test"  target="" className="btn btn-xs btn-secondary"><strong>Analyze Now</strong></a>
      </div>
    </div>
  </div>
 </div>
</div>
<div className="wpb_column vc_column_container col-sm-3 col-xs-6 skincolored_section vc_custom_1447875610924">
  <div className="wpb_wrapper">
    <div className="teaser_box wpb_content_element text-center  transparent boxed same_height_col  with_button    ">
      <div className="figure transparent">       
          <i className="fas fa-lungs-virus"></i>
    </div>
    <div className="content text-center   with_button ">
    <div className="hgroup">
       <h4 className="neutralize_links">
        Pneumonia
       </h4>
       <p>Detection</p> 
    </div>
    <div className="link centered">
        <a href="http://0.0.0.0/pneumonia/test"  target="" className="btn btn-xs btn-secondary"><strong>Analyze Now</strong></a>
    </div>

  </div>

</div>
</div>
</div>
<div className="wpb_column vc_column_container col-sm-3 col-xs-6 skincolored_section">
    <div className="wpb_wrapper">
<div className="teaser_box wpb_content_element text-center  transparent boxed same_height_col  with_button    ">
  <div className="figure transparent">         
  <i className="fas fa-allergies"></i>
</div>
  <div className="content text-center   with_button ">
    <div className="hgroup">
       <h4 className="neutralize_links">
       Skin Cancer
       </h4>
       <p>Detection</p> 
    </div>
    <div className="link centered">
        <a href="http://0.0.0.0/skin/test"  target="" className="btn btn-xs btn-secondary"><strong>Analyze Now</strong></a>
    </div>

  </div>

</div>
</div>
</div>
<div className="wpb_column vc_column_container col-sm-3 col-xs-6 secondary_section vc_custom_1447875610924">
    <div className="wpb_wrapper">

<div className="teaser_box wpb_content_element text-center  transparent boxed same_height_col  with_button    ">
  <div className="figure transparent">
        <i className="fas fa-brain"></i>
  </div>
  <div className="content text-center   with_button ">
    <div className="hgroup">
       <h4 className="neutralize_links">
       Brain Tumor
       </h4>
       <p>Detection</p> 
    </div>
    <div className="link centered">
        <a href="http://0.0.0.0/brain/test"  target="" className="btn btn-xs btn-secondary"><strong>Analyze Now</strong></a>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div> 
</section>


<section id="sanus" className="vc_row wpb_row vc_row-fluid no_top_padding separator_bottom sep_angled_positive_bottom">
	<div className="container">
		<div className="row">
            <div className="wpb_column vc_column_container col-sm-12" >
                <div className="wpb_wrapper">
<div className="section_header subtitle_bottom   fancy text-left">

    <h2>What is SANUS?</h2>
</div>
                </div>
            </div>
            <div className="wpb_column vc_column_container col-sm-8 margin_bottom_grid text-left" >
                <div className="wpb_wrapper">

	<div className="wpb_text_column wpb_content_element " >
		<div className="wpb_wrapper">
			<p>We have developed a lightweight Computer Aided Diagnostic System with an aim of easing the weary task of detection of various diseases. Developed in an effort to help the communities and people all over the world.We use ML to detect patterns of certain diseases within patient electronic healthcare records and provide information of various anomalies.</p>

		</div>
	</div>
<div className="vc_separator wpb_content_element vc_separator_align_left vc_sep_width_100 vc_sep_pos_align_right vc_sep_color_black vc_separator-has-text" >
</div>
	
                </div>
            </div>
            <div className="wpb_column vc_column_container col-sm-4 text-left">
                <div className="wpb_wrapper">

<div className="teaser_box wpb_content_element text-center image_hover skincolored_section    with_button    " >

  <div className="figure ">
         <div className="figure  stretchy_wrapper ratio_16-9" style={{backgroundImage: `url(${hrr})`}}></div> 
  </div>
</div>
</div>
</div>
</div>



<div id="services" className="container">
		<div className="row">
            <div className="wpb_column vc_column_container col-sm-12" data-aos="fade-up" data-aos-duration="1500">
                <div className="wpb_wrapper">
<div className="section_header subtitle_bottom   fancy text-left">
    <h2 className="text-center">ML Services Provided by us</h2>
</div>
</div>
</div>
            
<div className="wpb_column vc_column_container col-sm-12 col-md-8 margin_bottom_grid text-left">
<div className="wpb_wrapper">
<div className="vc_row wpb_row vc_inner vc_row-fluid">            
<div className="wpb_column vc_column_container col-sm-4"data-aos="fade-up" data-aos-duration="1500">
<div className="wpb_wrapper">
<div className="teaser_box wpb_content_element text-center  transparent boxed_special same_height_col  with_button    ">
<div className="figure transparent">
<img src={heart} alt="Cardio Exam"/> 
  </div>
  <div className="content text-center   with_button ">
    
    <div className="hgroup">
       <h4 className="neutralize_links">
       Heart Disease
       </h4>
       <p>Diagnostic</p> 
    </div>
    <div className="link centered">
        <a href="http://0.0.0.0/heart/test"  target="" className="btn btn-xs btn-primary"><strong>Analyze</strong></a>
    </div>

  </div>

</div>


</div>
</div>
<div className="wpb_column vc_column_container col-sm-4" data-aos="fade-up" data-aos-duration="1500">
<div className="wpb_wrapper">

<div className="teaser_box wpb_content_element text-center  transparent boxed_special same_height_col  with_button    ">

  <div className="figure transparent">


  <i className="fas fa-lungs-virus"></i>

  </div>



  <div className="content text-center   with_button ">
    
    <div className="hgroup">
       <h4 className="neutralize_links">
       Lung Disease
       </h4>
       <p>Detection</p> 
    </div>

    

    <div className="link centered">
        <a href="http://0.0.0.0/pneumonia/test"  target="" className="btn btn-xs btn-primary"><strong>Analyze</strong></a>
    </div>

  </div>

</div>
</div>
</div>
<div className="wpb_column vc_column_container col-sm-4" data-aos="fade-up" data-aos-duration="1500">
    <div className="wpb_wrapper">

<div className="teaser_box wpb_content_element text-center  transparent boxed_special same_height_col  with_button    ">

  <div className="figure transparent">


  <i className="fas fa-allergies"></i>

  </div>



  <div className="content text-center   with_button ">
    
    <div className="hgroup">
       <h4 className="neutralize_links">
       Skin Cancer
       </h4>
       <p>Detection</p> 
    </div>

    

    <div className="link centered">
        <a href="http://0.0.0.0/skin/test"  target="" className="btn btn-xs btn-primary"><strong>Analyze</strong></a>
    </div>
  </div>
</div>
</div>
</div>
<div className="wpb_column vc_column_container col-sm-4" data-aos="fade-up" data-aos-duration="1500">
<div className="wpb_wrapper">

<div className="teaser_box wpb_content_element text-center  transparent boxed_special same_height_col  with_button    ">

  <div className="figure transparent">
  <img src={mosquito} alt="malaria"></img>
  </div>
  <div className="content text-center   with_button ">
    
    <div className="hgroup">
       <h4 className="neutralize_links">
       Malaria
       </h4>
       <p>Detection</p> 
    </div>
    <div className="link centered">
        <a href="http://0.0.0.0/malaria/test"  target="" className="btn btn-xs btn-primary"><strong>Analyze</strong></a>
    </div>
  </div>
</div>
</div>
</div>
<div className="wpb_column vc_column_container col-sm-4" data-aos="fade-up" data-aos-duration="1500">
<div className="wpb_wrapper">
<div className="teaser_box wpb_content_element text-center  transparent boxed_special same_height_col  with_button    ">
  <div className="figure transparent">
  <i className="fas fa-brain"></i>
  </div>
  <div className="content text-center   with_button ">
    <div className="hgroup">
       <h4 className="neutralize_links">
       Brain Tumor
       </h4>
       <p>Detection</p> 
    </div>
 <div className="link centered">
        <a href="http://0.0.0.0/brain/test"  target="" className="btn btn-xs btn-primary"><strong>Analyze</strong></a>
    </div>
  </div>
</div>


</div>
</div>
</div>
</div>
</div>
<div className="wpb_column vc_column_container col-sm-12 col-md-4 text-left" data-aos="fade-left" data-aos-duration ="1500" data-aos-delay="200">
<div className="wpb_wrapper">
<div className="vc_separator wpb_content_element vc_separator_align_left vc_sep_width_100 vc_sep_pos_align_right vc_sep_color_black x_bold vc_separator-has-text" ><span className="vc_sep_holder vc_sep_holder_l"><span  className="vc_sep_line"></span></span><h4>Steps To Analyze</h4><span className="vc_sep_holder vc_sep_holder_r"><span  className="vc_sep_line"></span></span>
</div>
	<div className="wpb_raw_code wpb_content_element wpb_raw_html" >
		<div className="wpb_wrapper">
			<h4><strong>STEP 1:</strong><br/> Select the service you want to use.</h4>
      <h4><strong>STEP 2:</strong><br/> Create / Login to your Account.</h4>
      <h4><strong>STEP 3:</strong><br/> Upload your health record.</h4>
      <h4><strong>STEP 1:</strong><br/> Wait for your report to be analyzed.</h4>
      <h4><strong>STEP 1:</strong><br/> Get the analyzed result.</h4>
		</div>
	</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="vc_row wpb_row vc_row-fluid secondary_section">
	<div className="container">
    <h1 className="text-center">Diseases</h1><hr/><hr/>
		<div className="row">
    <div className="row justify-content-center mb-5 " data-aos="fade-up" data-aos-duration="1500">
        <div className="col-md-4 mb-5">
          <div className="travel-card mb-2">
            <div className="travel-card-image card4"></div>
            <div className="travel-card-text">
              <h3>Heart Disease</h3>
              <p>Heart Disease generally refers to conditions that involve narrowed or blocked blood vessels that can lead to a heart attack, chest pain (angina) or stroke.</p>
              <a href="http://0.0.0.0/heart/test"><button className="btn btn-danger">Get Started</button></a>
            </div>
            <div className="travel-card-stats"></div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="travel-card">
            <div className="travel-card-image card5"></div>
            <div className="travel-card-text">
              <h3>Pneumonia</h3>
              <p>Pneumonia is an inflammatory condition of the lung primarily affecting the small air sacs known as alveoli.<br/></p><br/>
              <a href="http://0.0.0.0/pneumonia/test"> <button className="btn btn-danger">Get started</button></a>
            </div>
            <div className="travel-card-stats"></div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="travel-card">
            <div className="travel-card-image card6"></div>
            <div className="travel-card-text">
              <h3>Skin Cancer</h3>
              <p>Skin cancer is an abnormal growth of skin cells. It generally develops in areas that are exposed to the sun, but it can also form in places that don’t normally get sun exposure.</p>
              <a  href="http://0.0.0.0/skin/test"> <button className="btn btn-danger">Get started</button></a>
          </div>
            <div className="travel-card-stats"></div>
          </div>
        </div>
        

      </div>
		</div>
    <div className="row">
      <br/>
      </div>
    <div className="row">
    <div className="row justify-content-center mb-5 " data-aos="fade-up" data-aos-duration="1500">
    <div className="col-md-2 mb-5"></div>
    <div className="col-md-4 mb-5">
          <div className="travel-card">
            <div className="travel-card-image card3"></div>
            <div className="travel-card-text">
              <h3>Malaria</h3>
              <p>A disease caused by a plasmodium parasite, transmitted by the bite of infected mosquitoes.</p><br/><br/><br/><br/>
              <a href="http://0.0.0.0/malaria/test"><button className="btn btn-danger">Get Started</button></a>
            </div>
            <div className="travel-card-stats"></div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="travel-card">
            <div className="travel-card-image card2"></div>
            <div className="travel-card-text">
              <h3>Brain Tumor</h3>
              <p>A brain tumor is a collection, or mass, of abnormal cells in your brain. Your skull, which encloses your brain, is very rigid. Any growth inside such a restricted space can cause problems. Brain tumors can be cancerous (malignant) or noncancerous (benign).</p>
              <a href="http://0.0.0.0/brain/test"><button className="btn btn-danger">Get Starterd</button></a>
            </div>
            <div className="travel-card-stats"></div>
          </div>
        </div>
      </div>
    </div>
	</div>
  
</section>


<section className="vc_row wpb_row vc_row-fluid light_section separator_top sep_angled_positive_top separator_bottom sep_angled_positive_bottom">
<div className="container">
<div className="row">
<div className="col-md-2"></div>
<div className="col-md-3" data-aos="fade-right" data-aos-duration="1500">

<div className="profile-card">
<h1>96%&nbsp;</h1>
<h5>Overall Accuracy</h5>
  </div>
  </div>
  <div className="col-md-3" data-aos="fade-left" data-aos-duration="1500">

<div className="profile-card">
<h1>1078&nbsp;</h1>
<h5>Data Model Length</h5>
  </div>
  </div>
  </div>
  </div>
</section>







<section id="about" style={{backgroundImage: `url(${bottom})`}} className="vc_row wpb_row vc_row-fluid secondary_section text-center transparent_film vcenter bgimage bg_vcenter">
<div className="container">
		<div className="row">
            <div className="wpb_column vc_column_container col-sm-12">
                <div className="wpb_wrapper">
<div className="section_header subtitle_bottom   fancy text-center">
    <h2 data-aos="fade-up" data-aos-duration="1500">Meet our Team</h2>
</div><div className="vc_empty_space" style={{height: "32px"}}><span className="vc_empty_space_inner"></span></div><div className="team_members_grid row">
    <div className="col-sm-6 col-md-3" data-aos="fade-up" data-aos-duration="1500">
      <div className="team_member teaser_box centered same_height_col " style={{height: "auto", minHeight: "359px" }}>
        
        <span style={{backgroundImage: `url(${sayan})`,borderRadius:"50%"}} data-colorset="" className="linkify figure stretchy_wrapper ratio_1-1"> </span>
        
        <div className="content boxed  with_button ">

          <div className="hgroup">
            <h4>Sayan Nath</h4>
             <p>Student</p> 
          </div>

          <div className="team_social">
          <a href="https://twitter.com/SayanNa20204009"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/sayannath235/"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/sayannath235/"><i className="fab fa-instagram"></i></a>
          </div>

          <div className="desc">       
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-md-3" data-aos="fade-up" data-aos-duration="1500">
      <div className="team_member teaser_box centered same_height_col " style={{height: "auto", minHeight: "359px"}}>
        
        <span style={{backgroundImage: `url(${sambit})`,borderRadius:"50%"}} data-colorset="" className="linkify figure stretchy_wrapper ratio_1-1"> </span>
        
        <div className="content boxed  with_button ">

          <div className="hgroup">
            <h4>Sambit Majhi</h4>
             <p>Student</p> 
          </div>

          <div className="team_social">
          <a href="https://twitter.com/sambitraze2"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/sambitraze/"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/sambitraze/"><i className="fab fa-instagram"></i></a>
          </div>

          <div className="desc">       
            <p></p>
          </div>



        </div>

      </div>
    </div>


    <div className="col-sm-6 col-md-3" data-aos="fade-up" data-aos-duration="1500">
      <div className="team_member teaser_box centered same_height_col " style={{height: "auto", minHeight: "359px"}}>
        
        <span style={{backgroundImage: `url(${taran})`,borderRadius:"50%"}} data-colorset="" className="linkify figure stretchy_wrapper ratio_1-1"> </span>
        
        <div className="content boxed  with_button ">

          <div className="hgroup">
            <h4>Taranpreet Singh Chabbra</h4>
             <p>Student</p> 
          </div>

          <div className="team_social">
          <a href="https://twitter.com/Taran17809555"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/taranpreet-singh-chabbra-27517918a/"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/taran_3010/"><i className="fab fa-instagram"></i></a>
          </div>

          <div className="desc">       
            <p></p>
          </div>



        </div>

      </div>
    </div>


    <div className="col-sm-6 col-md-3" data-aos="fade-up" data-aos-duration="1500">
      <div className="team_member teaser_box centered same_height_col " style={{height: "auto", minHeight: "200px"}}>
        
        <span style={{backgroundImage: `url(${manish})`,borderRadius:"50%"}} data-colorset="" className="linkify figure stretchy_wrapper ratio_1-1"> </span>
        
        <div className="content boxed  with_button ">

          <div className="hgroup">
            <h4>Manish Bhardwaj</h4>
             <p>Student</p> 
          </div>

          <div className="team_social">
            <a href="https://twitter.com/2221mb"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/manish-bhardwaj-bb2629190/"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/_manish_bhardwaj/"><i className="fab fa-instagram"></i></a>
          </div>

          <div className="desc">       
            <p></p>
          </div>



        </div>

      </div>
    </div>

                 
</div><div className="vc_empty_space" style={{height: "32px"}}><span className="vc_empty_space_inner"></span></div>

</div>
</div>
</div>
</div>
<div className="separator_bottom"><div></div></div>
</section>
      <div id="new_comment">
      <div className="container">        <div className="new_comment">
</div>
</div>
</div>
</div>		
    


<footer id="footer" className="sep_angled_positive_top separator_top ">
	<div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
        <aside id="plethora-aboutus-widget-1" className="widget aboutus-widget" data-aos="fade-up" data-aos-duration="1500">
          <div className="pl_about_us_widget  ">
        		<p><img src={logo1} alt=""  /></p>
        		<p>We Care About Your Health!</p>
        		<p className='contact_detail'><i className='fa fa-phone'></i><span>XXXXXXXXXX</span></p>
        		<p className='contact_detail'><i className='fa fa-envelope'></i><span>abc@d.com</span></p>
            <p className="contact_detail">
			      <i className='fa fa-location-arrow'></i>
        		<span>Bhubaneshwar, Orrisa</span></p>	  
          </div>
        </aside>
      </div>
      <div className="col-sm-6 col-md-3"><aside id="nav_menu-3" className="widget widget_nav_menu" data-aos="fade-up" data-aos-duration="1500"><h4>Quick Links</h4><div className="menu-quick-links-container">
      <ul id="menu-quick-links" className="menu">
      <li id="menu-item-1784" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1784"><a href="#footer">Contact Us</a></li>
      <li id="menu-item-1785" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1785"><a href="#services">Our Services</a></li>
      <li id="menu-item-1786" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1786"><a href="#about">Who Are We</a></li>
      <li id="menu-item-1787" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1787"><a href="#sanus">About SANUS</a></li>
      </ul></div></aside>
      <aside id="plethora-aboutus-widget-2" className="widget aboutus-widget">
        <div className="pl_about_us_widget  ">
</div>
</aside>
</div>
<div className="col-sm-6 col-md-3">
 </div>
 </div>
	</div>		
  </footer>
	        <div className="copyright dark_section">
        <div className="dark_section transparent_film">
           <div className="container">
                <div className="row">
                <div className="col-sm-6 col-md-6">
      					  
                </div>
                </div>
           </div>
        </div>
      </div>
      </div>
  );
}

export default App;
