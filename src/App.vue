<template>
  <div id="app">

    <!-- ====================================
    ——— HEADER
    ===================================== -->
    <header class="header" id="pageTop">
      <!-- Top Color Bar -->
      <div class="color-bars">
        <div class="container-fluid">
          <div class="row">
            <div class="col color-bar bg-warning d-none d-md-block"></div>
            <div class="col color-bar bg-warning d-none d-md-block"></div>
            <div class="col color-bar bg-success d-none d-md-block"></div>
            <div class="col color-bar bg-success d-none d-md-block"></div>
            <div class="col color-bar bg-danger d-none d-md-block"></div>
            <div class="col color-bar bg-danger d-none d-md-block"></div>
            <div class="col color-bar bg-info d-none d-md-block"></div>
            <div class="col color-bar bg-info d-none d-md-block"></div>
            <div class="col color-bar bg-purple d-none d-md-block"></div>
            <div class="col color-bar bg-purple d-none d-md-block"></div>
            <div class="col color-bar bg-pink d-none d-md-block"></div>
            <div class="col color-bar bg-pink d-none d-md-block"></div>
            <div class="col color-bar bg-warning"></div>
            <div class="col color-bar bg-warning"></div>
            <div class="col color-bar bg-success"></div>
            <div class="col color-bar bg-success"></div>
            <div class="col color-bar bg-danger"></div>
            <div class="col color-bar bg-danger"></div>
            <div class="col color-bar bg-info"></div>
            <div class="col color-bar bg-info"></div>
            <div class="col color-bar bg-info"></div>
            <div class="col color-bar bg-purple"></div>
            <div class="col color-bar bg-purple"></div>
            <div class="col color-bar bg-pink"></div>
            <div class="col color-bar bg-pink"></div>
          </div>
        </div>
      </div>

              <!-- Top Bar-->

      <!-- Navbar -->
      <nav class="navbar navbar-expand-md navbar-scrollUp navbar-sticky navbar-white">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img class="d-inline-block" src="/assets/img/banner/slider-1/img-2.jpg" alt="Kidz School">
          </a>

          <button class="navbar-toggler py-2" type="button" data-toggle="collapse" data-target="#navbarContent"
            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item dropdown bg-warning">
                <a class="nav-link dropdown-toggle  active " href="javascript:void(0)"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-home nav-icon" aria-hidden="true"></i>
                  <span>Home</span>
                </a>

              </li>

              <li class="nav-item dropdown bg-danger">
                <a class="nav-link dropdown-toggle " href="javascript:void(0)" role="button"
                  data-toggle="dropdown">
                  <i class="fa fa-list-ul nav-icon" aria-hidden="true"></i>
                  <span>Sign Up</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item " href="sign-up-or-login.html">Sign
                      Up</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown mega-dropdown bg-success">
                <a class="nav-link dropdown-toggle " href="#" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span>Log In</span>
                </a>
                <div class="dropdown-menu row">
                  <div class="col-12 col-md-3">
                    <ul class="list-unstyled">
                      <li>Courses Grid</li>
                      <li><a class="" href="courses-grid-full.html">Courses
                          Grid Fullwidth</a></li>
                      <li><a class="" href="courses-grid-left-sidebar.html">Courses
                          Grid Left Sidebar</a></li>
                      <li><a class="" href="courses-grid-right-sidebar.html">Courses
                          Grid Right Sidebar</a></li>
                    </ul>
                  </div>

                  <div class="col-12 col-md-3">
                    <ul class="list-unstyled">
                      <li>Courses List</li>
                      <li><a class="" href="course-list-fullwidth.html">Courses
                          List Fullwidth</a></li>
                      <li><a class="" href="course-list-left-sidebar.html">Courses
                          List left Sidebar</a></li>
                      <li><a class="" href="course-list-right-sidebar.html">Courses
                          List Right Sidebar</a></li>
                    </ul>
                  </div>

                  <div class="col-12 col-md-3">
                    <ul class="list-unstyled">
                      <li>Single Course</li>
                      <li><a class="" href="course-single.html">Single Course
                          Fullwidth</a></li>
                      <li><a class="" href="course-single-left-sidebar.html">Single
                          Course left Sidebar</a></li>
                      <li><a class="" href="course-single-right-sidebar.html">Single
                          Course Right Sidebar</a></li>
                    </ul>
                  </div>

                  <div class="col-12 col-md-3">
                    <ul class="list-unstyled">
                      <li>Checkout</li>
                      <li><a class="" href="product-checkout-step-1.html">Personal
                          Info</a></li>
                      <li><a class="" href="product-checkout-step-2.html">Payment
                          Info</a></li>
                      <li><a class="" href="product-checkout-step-3.html">Confirmation</a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="nav-item dropdown bg-info">
                <a class="nav-link dropdown-toggle " href="javascript:void(0)" id="stores"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-pencil-square-o nav-icon" aria-hidden="true"></i>
                  <span>Rearranging</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="stores">
                  <li>
                    <a class="dropdown-item
                     ||
                     ||
                    

                    "
                      href="javascript:void(0)">Products<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="products.html">Products Fullwidth</a></li>
                      <li><a class="" href="product-left-sidebar.html">Products
                          Left Sidebar</a></li>
                      <li><a class="" href="product-right-sidebar.html">Products
                          Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item " href="product-single.html">Single
                      Product</a>
                  </li>
                  <li>
                    <a class="dropdown-item " href="product-category.html">Product
                      Categories</a>
                  </li>
                  <li>
                    <a class="dropdown-item " href="product-cart.html">Cart</a>
                  </li>
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      
                      "
                      href="javascript:void(0)">Checkout<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li>
                        <a class="" href="product-checkout-step-1.html">Personal
                          Info</a>
                      </li>
                      <li>
                        <a class="" href="product-checkout-step-2.html">Payment
                          Info</a>
                      </li>
                      <li>
                        <a class="" href="product-checkout-step-3.html">Confirmation</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown bg-purple">
                <a class="nav-link dropdown-toggle " href="javascript:void(0)" id="stores"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-calendar nav-icon" aria-hidden="true"></i>
                  <span>Animation</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="stores">
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      
                    "
                      href="javascript:void(0)">Blog Grid<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="blog-grid.html">Blog Grid Fullwidth</a></li>
                      <li><a class="" href="blog-grid-left-sidebar.html">Blog
                          Grid Left Sidebar</a></li>
                      <li><a class="" href="blog-grid-right-sidebar.html">Blog
                          Grid Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      "
                      href="javascript:void(0)">Blog List<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="blog-list.html">Blog List Fullwidth</a></li>
                      <li><a class="" href="blog-list-left-sidebar.html">Blog
                          List Left Sidebar</a></li>
                      <li><a class="" href="blog-list-right-sidebar.html">Blog
                          List Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      
                    "
                      href="javascript:void(0)">Single Blog<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="blog-single.html">Blog Single
                          Fullwidth</a></li>
                      <li><a class="" href="blog-single-left-sidebar.html">Blog
                          Single Left Sidebar</a></li>
                      <li><a class="" href="blog-single-right-sidebar.html">Blog
                          Single Right Sidebar</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown bg-pink">
                <a class="nav-link dropdown-toggle " href="component-default.html">
                  <i class="fa fa-home nav-icon" aria-hidden="true"></i>
                  <span>History</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div class="main-wrapper home">
    
    <router-view/>

    </div> <!-- element wrapper ends -->

    <!-- ====================================
          ——— FOOTER
          ===================================== -->
    <footer class="footer-bg-img">
      <!-- Footer Color Bar -->
      <div class="color-bar">
        <div class="container-fluid">
          <div class="row">
            <div class="col color-bar bg-warning"></div>
            <div class="col color-bar bg-warning"></div>
            <div class="col color-bar bg-danger"></div>
            <div class="col color-bar bg-danger"></div>
            <div class="col color-bar bg-success"></div>
            <div class="col color-bar bg-success"></div>
            <div class="col color-bar bg-info"></div>
            <div class="col color-bar bg-info"></div>
            <div class="col color-bar bg-purple"></div>
            <div class="col color-bar bg-purple"></div>
            <div class="col color-bar bg-pink"></div>
            <div class="col color-bar bg-pink"></div>
            <div class="col color-bar bg-warning d-none d-md-block"></div>
            <div class="col color-bar bg-warning d-none d-md-block"></div>
            <div class="col color-bar bg-danger d-none d-md-block"></div>
            <div class="col color-bar bg-danger d-none d-md-block"></div>
            <div class="col color-bar bg-success d-none d-md-block"></div>
            <div class="col color-bar bg-success d-none d-md-block"></div>
            <div class="col color-bar bg-info d-none d-md-block"></div>
            <div class="col color-bar bg-info d-none d-md-block"></div>
            <div class="col color-bar bg-purple d-none d-md-block"></div>
            <div class="col color-bar bg-purple d-none d-md-block"></div>
            <div class="col color-bar bg-pink d-none d-md-block"></div>
            <div class="col color-bar bg-pink d-none d-md-block"></div>
          </div>
        </div>
      </div>

      <div class="pt-8 pb-7  bg-repeat" style="background-image: url(assets/img/background/footer-bg-img-1.png);">
        <div class="container">
          <div class="row">


            <div class="col-sm-6 col-lg-3 col-xs-12">
              <h4 class="section-title-sm font-weight-bold text-white mb-6">Useful Links</h4>
              <ul class="list-unstyled">
                <li class="mb-4">
                  <a href="index.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>What's motion graphic?
                  </a>
                </li>
                <li class="mb-4">
                  <a href="about-us.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>About programming
                  </a>
                </li>
                <li class="mb-4">
                  <a href="index-v2.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Designing
                  </a>
                </li>
                <li class="mb-4">
                  <a href="index-v3.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Shapes & colors
                  </a>
                </li>
                <li class="mb-3">
                  <a href="photo-gallery.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-sm-6 col-lg-3 col-xs-12">
              <h4 class="section-title-sm font-weight-bold text-white mb-6">More about Cheryl</h4>
              <ul class="list-unstyled list-item-border-bottom">

                <li class="mb-4 pb-4">
                  <div class="media">
                    <a class="mr-2" href="blog-single-left-sidebar.html">
                      <img class="rounded-lg w-100 border-info border-2 d-block" data-src="assets/img/blog/blog-sm-img7.jpg"
                        src="assets/img/blog/blog-sm-img7.jpg" alt="blog-sm-img7.jpg">
                    </a>
                    <div class="media-body">
                      <h5 class="line-hight-16 mb-1">
                        <a class="font-base font-size-14" href="blog-single-left-sidebar.html">Check out Cheryl's website: www.cheryljune.net</a>
                      </h5>
                      <time class="text-white">Nov 14 - 2019</time>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="col-sm-6 col-lg-3 col-xs-12">
              <h4 class="section-title-sm font-weight-bold text-white mb-6">Mailing List</h4>
              <p class="mb-4">Sign up for our mailing list to get latest updates and offers.</p>
              <form class="mb-4" action="">
                <div class="input-group shadow-light rounded-sm input-addon">
                  <input type="text" class="form-control py-4" placeholder="Email address" aria-describedby="basic-addon21">
                  <div class="input-group-append ">
                    <div class="input-group-text bg-danger">
                      <i class="fa fa-check text-white" aria-hidden="true"></i></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Copy Right -->
      <div class="copyright">
        <div class="container">
          <div class="row py-4 align-items-center">
            <div class="col-sm-7 col-xs-12 order-1 order-md-0">
              <p class="copyright-text"> © 2018 Copyright Kidz School Bootstrap Template by <a href="http://www.iamabdus.com/" target="_blank">Abdus.</a></p>
            </div>

            <div class="col-sm-5 col-xs-12">
              <ul class="list-inline d-flex align-items-center justify-content-md-end justify-content-center mb-md-0">
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-warning" href="javascript:void(0)">
                    <i class="fa fa-facebook text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-success" href="javascript:void(0)">
                    <i class="fa fa-twitter text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-danger" href="javascript:void(0)">
                    <i class="fa fa-google-plus text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-info" href="javascript:void(0)">
                    <i class="fa fa-pinterest-p text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="">
                  <a class="icon-rounded-circle-small bg-purple" href="javascript:void(0)">
                    <i class="fa fa-vimeo text-white" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>


  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #99cc99;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #88ee88;
}

#nav a.router-link-exact-active {
  color: #888888;
}
</style>
