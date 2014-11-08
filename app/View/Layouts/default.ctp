<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Purity Bootstrap Business Theme</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' rel='stylesheet' type='text/css'> 

        <!--Le HTML5 shim, for IE6-8 support of HTML5 elements--> 
        <!--[if lt IE 9]>
          <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
       <!-- Le styles -->
        <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="/css/font-awesome.css" media="all" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="/css/jquery.fancybox.css" media="all" />
        <link rel="stylesheet" type="text/css" href="/css/jquery.fancybox-thumbs.css?v=1.0.2" />
        <link href="/css/animate.css" rel="stylesheet" type="text/css" />
        <link href="/css/isotope.css" rel="stylesheet" type="text/css" />
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/css/style-responsive.css" rel="stylesheet" type="text/css" />
		
		
		<link href="/css/jquery_ui/jquery.ui.1.10.0.ie.css" rel="stylesheet" type="text/css" />
		<link href="/css/jquery_ui/jquery.ui-1.10.0.custom.css" rel="stylesheet" type="text/css" />
		
        <!-- Le fav and touch icons -->
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="ico/apple-touch-icon-57-precomposed.png">
        <link rel="shortcut icon" href="ico/favicon.png">


    </head>

    <body>
<!-- This section is for Splash Screen -->

        <!--################ NAVIGATION START ################-->

        <div class="navbar-wrapper" >
            <div class="navbar navbar-fixed-top" id="navigation">
                <div class="navbar-inner">
                    <div class="container">
                        <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="brand" href="#">  <img src="/img/logo.png" width="150" id="logokhan"></a>
                        <div class="nav-collapse collapse">
                            <ul class="nav pull-right">

                                <li class="active">
                                    <a href="#top">Home</a>

                                </li>
                                <li class="">
                                    <a href="#features">Features</a>
                                </li>
                                <li class="">
                                    <a href="#support">Services</a>
                                </li>
                                <li class="">
                                    <a href="#testimonials">Testimonials</a>
                                </li>

                                <li class="">
                                    <a href="#contact">Contact</a>
                                </li>
                                <li class="">
                                    <a data-toggle="modal" href="#myModal" class="">Sign Up</a>
                                </li>

                                <li class="dropdown">
                                    <a href="" class="dropdown-toggle" data-toggle="dropdown">Sign In <b class="caret"></b></a>
                                    <div class="dropdown-menu" style="padding: 15px;">
                                        <form action="#" method="post" accept-charset="UTF-8" class="form-menu">
                                            <input id="user_username"  type="text" name="user[username]" size="33" placeholder="Username" />
                                            <input id="user_password"  type="password" name="user[password]" size="33" placeholder="Password" />
                                            <label class="checkbox muted hidden-tablet"><input type="checkbox"> Remember Me</label>
                                            <input class="btn span3"  type="submit" name="commit" value="Sign In" />
                                        </form>

                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!--################ NAVIGATION END ################-->

        <!--################ WRAP START ################-->

        <div id="wrap">
			
			
			<?php echo $this->fetch('content'); ?>
			
           

        </div>

        <!--################ PUSH WILL KEEP THE FOOTER AT BOTTOM IF YOU WANT TO CREATE OTHER PAGES ################-->

        <div id="push"></div>


        <!--################ FOOTER START ################-->

        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="span4">
                        <!--<h2>about us...</h2>-->
                        <img src="/img/logo.png" >

                        <!--<p><br /Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa. Sed eleifend nonummy diam.</p>-->
                        <p><br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa. Sed eleifend nonummy diam.</p>
                        <p class="copyright">
                            © 2013 Purity Bootstrap Template
                        </p>
                    </div>
                    <div class="span2">
                        <h2>links </h2>
                        <ul class="unstyled footer-links">
                            <li><a href="#" class="flink">About Us</a></li>
                            <li><a href="#" class="flink">The Team</a></li>
                            <li><a href="#" class="flink">Blog</a></li>
                            <li><a href="#" class="flink">Contact</a></li>
                            <li><a href="#" class="flink">Privacy Policy</a></li>
                            <li><a href="#" class="flink">Terms of Use</a></li>
                        </ul>
                    </div>

                    <div class="span3">
                        <h2>subscribe </h2>

                        <a href="#" class="social-network sn2 behance"></a>
                        <a href="#" class="social-network sn2 facebook"></a>
                        <a href="#" class="social-network sn2 pinterest"></a>
                        <a href="#" class="social-network sn2 flickr"></a>
                        <a href="#" class="social-network sn2 dribbble"></a>
                        <a href="#" class="social-network sn2 lastfm"></a>
                        <a href="#" class="social-network sn2 forrst"></a>
                        <a href="#" class="social-network sn2 xing"></a>      


                    </div>

                    <div class="span3">
                        <h2 class="center"><i class="icon-twitter"></i></h2>
                        <ul id="twitter" class="unstyled">

                        </ul>
                    </div>


                </div>
            </div>

        </footer>


        <!--################ FOOTER END ################-->




        <!--################ JAVASCRIPTS ################-->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="/js/jquery.js"></script>
        <script src="/js/modernizr.js"></script>
        <script src="/js/bootstrap.js"></script>
        <script src="/js/jquery.fitvids.js"></script>
        <script src="/js/jquery.easing.1.3.js"></script>
        <script src="/js/twitter.js"></script>
        <script type="text/javascript" src="/js/jquery.fancybox.pack.js"></script>
        <script type="text/javascript" src="/js/jquery.fancybox-thumbs.js?v=1.0.2"></script>
        <script type="text/javascript" src="/js/jquery.fancybox-media.js?v=1.0.0"></script>
        <script src="/js/stellar.js"></script>
        <script src="/js/nicescroll.min.js"></script>
        <script src="/js/jquery.isotope.min.js"></script>
        <script src="/js/custom.js"></script>
        <script src="/js/custom-home.js"></script>
        <script src="/js/portfolio.js"></script>
        <script src="/js/jquery.flexslider.js"></script>
        <script src="/js/retina.js"></script>
		
		<script src="/js/accounting.min.js"></script>
		<script src="/js/jquery.maskedinput.js"></script>
		
		
		<script src="/js/jquery-ui.min.js"></script>
		<script src="/js/plugins/select2/select2.js"></script>
		
		
		

        <!--     
        *************** RETINA JS FUNCTIONALITY   ****************
        
        The script assumes you use Apple's prescribed high-resolution modifier (@2x) to denote
        high-resolution image variants on your server.
        
        For example, if you have an image on your page that looks like this:
        <img src="/img/my_image.png" />
        
        The script will check your server to see if an alternative image exists at this path:
        "/img/my_image@2x.png"
        
        That's it! 
        :)

        <!--RETINA JS END-->


        <!--REGISTER MODAL --> 

        <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3>Create a New Account</h3>
            </div>
            <div class="modal-body">

                <form class="form-vertical form-modal">
                    <fieldset>

                        <!-- Form Name -->


                        <!-- Text input-->
                        <div class="control-group">
                            <label class="control-label">Name</label>
                            <div class="controls">
                                <input id="textinput" name="textinput" type="text" placeholder="" class="input-xxlarge">

                            </div>
                        </div>

                        <!-- Text input-->
                        <div class="control-group">
                            <label class="control-label">Email</label>
                            <div class="controls">
                                <input id="textinput" name="textinput" type="text" placeholder="" class="input-xxlarge">

                            </div>
                        </div>




                    </fieldset>
                </form>




            </div>
            <div class="modal-footer">

                <button id="singlebutton" name="singlebutton" class="btn btn-primary">Create New Account</button>
            </div>
        </div>

        <!--REGISTER MODAL END--> 




    </body>
</html>







