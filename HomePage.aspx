<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HomePage.aspx.cs" Inherits="ShareBike_Web.HomePage" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <script type="text/javascript">
        document.getElementById("login_div").style.display=none;
    </script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="css/StyleSheet.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/Stylesheet2.css"/>
    <title>Share Bike</title>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=knG4xlmqxGF0ovSn8GvGRSuDUvbmGuAG"></script>
</head>
<body>
        <div id="main-wrapper">
            

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 affix text-center" style="z-index: 1;">
                <h1 class="templatemo-site-title">
                        <a href="#">爱单车</a>
                        <img src="images/btn-menu.png" alt="main menu" id="m-btn" class="pull-right visible-xs visible-sm" />
                </h1>

                <ul id="responsive" style="display:none" class="hidden-lg hidden-md"></ul>
            </div>

            <div class="menu visible-md visible-lg">
                <ul id="menu-list">
                    <li class="active home-menu"><a href="#home">主页</a></li>
                    <li class="about-menu"><a href="#about">关于</a></li>
                    <li class="services-menu"><a href="#services">服务</a></li>
                    <li class="testimonial-menu"><a href="#testimonial">用户中心</a></li>
                    <li class="contact-menu"><a href="#contact">联系我们</a></li>
                    <li><asp:HyperLink ID="HyperLink1" target="_parent" runat="server">My Page</asp:HyperLink></li>
                </ul>
            </div>

            <div class="image-section">
                <div class="image-container">
                    <img src="images/1.jpg" id="home-img" class="main-img inactive" alt="Home"/>
                    <img src="images/2.jpg" id="about-img" class="inactive" alt="About"/>
                    <img src="images/3.jpg" id="services-img"  class="inactive" alt="Services"/>
                    <img src="images/4.jpg" id="testimonial-img" class="inactive" alt="Testimonial"/>
                    <img src="images/5.jpg" id="contact-img" class="inactive" alt="Contact"/>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-lg-offset-6 col-md-offset-6 templatemo-content-wrapper">
                    <div class="templatemo-content">
                        
                        <section id="home-text" class="active templatemo-content-section">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <h2>健康出行</h2>
                                爱上骑行
                                </div>
                        </section>   

                        <section id="about-text" class="inactive">
                            <h2 class="text-center">关于</h2>
                            <div class="col-sm-6 col-md-6">
                                <p>我们是自由共享的绿色单车组织，<br>欢迎你的加入。</p>
                            </div>
                            <div class="col-sm-6 col-md-6">
                                <p>享受低碳环保生活的同时，爱上骑行。</p>
                            </div>
                        </section>

                        <section id="services-text" class="inactive">
                            <h2 class="text-center">我们的服务</h2>
                            <div class="col-sm-4 col-md-4">
                                <h3>个人</h3>
                                <p>你可以在我们的各个共享点享受我们为你准备的服务，我们诚挚的邀请您来体验。</p>
                            </div>
                            <div class="col-sm-4 col-md-4">
                                <h3>组织</h3>
                                <p>我们提供相关出行的活动策划服务，为你的事务助上一臂之力。</p>
                            </div>
                            <div class="col-sm-4 col-md-4">
                                <h3>合作</h3>
                                <p>我们想要更好的为大家服务，欢迎你的加入。</p>
                            </div>
                        </section>

                        <section id="testimonial-text" class="inactive">
                            <div class="col-sm-12 col-md-12">
                                <h2>用户中心</h2>
                                <div id="login_div">
                                <iframe id="login_frame" frameborder="0" src="Account/login_func.aspx" scrolling="no" height="200px"></iframe>
                            </div>

                            </div>
                        </section>

                        <section id="contact-text" class="inactive">
                            <div class="col-sm-12 col-md-12">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12"><h2>轻松联系</h2></div>
                                    <div class="clearfix"></div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-sm-6 col-md-6">
                                        <div id="map-canvas"></div>
                                        <p>附近的服务点&联系我们</p>
                                    </div>

                                    <div class="col-sm-6 col-md-6">
                                        <form action="#" method="post" runat="server">

                                                <div class="form-group">
                                                    <!--<label for="contact_name">Name:</label>-->
                                                    <input type="text" id="contact_name" class="form-control" placeholder="姓名" />
                                                </div>
                                                <div class="form-group">
                                                    <!--<label for="contact_email">Email:</label>-->
                                                    <input type="text" id="contact_email" class="form-control" placeholder="电子邮箱" />
                                                </div>
                                                <div class="form-group">
                                                    <!--<label for="contact_message">Message:</label>-->
                                                    <textarea id="contact_message" class="form-control" rows="7" placeholder="意见或者建议"></textarea>
                                                </div>
                                                <button type="submit" class="btn btn-primary">发送</button>

                                        </form>
                                    </div>
                                    
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 footer">
                    <p class="footer-text">
                    	<span>Copyright 爱单车 &copy; 2017 Design by retyrp</span>
                	</p>
                </div><!-- /.footer --> 
            </div>

	</div><!-- /#main-wrapper -->
        
        <div id="preloader">
            <div id="status">&nbsp;</div>
        </div><!-- /#preloader -->
        
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.backstretch.min.js"></script>
        <script src="js/t_script.js"></script>
</body>
</html>
