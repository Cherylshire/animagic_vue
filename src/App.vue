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
          <a class="navbar-brand" href="/">
            <img class="d-inline-block" src="/assets/img/banner/slider-1/img-2.jpg" alt="Kidz School">
          </a>

          <button class="navbar-toggler py-2" type="button" data-toggle="collapse" data-target="#navbarContent"
            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>
<!--                 
                
                <router-link to="/canvas"><h2>Maze</h2></router-link>  -->

          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item dropdown bg-warning">
                <a class="nav-link dropdown-toggle " href="/"
                  aria-haspopup="true" aria-expanded="false">
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
                    <router-link class="dropdown-item" to="/signup">Sign up</router-link> 
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/login">Log in</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/logout">Log out</router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown bg-success">
                <a class="nav-link dropdown-toggle " href="/rearranging" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-file-text-o nav-icon" aria-hidden="true"></i>
                  <span>Rearranging</span>
                </a>
                <div class="dropdown-menu row">
                  <ul class="list-unstyled">
                    <li>Rearranging</li>      
                    <li><router-link to="/rearranging">Rearranging</router-link></li>
                    <li><router-link to="/animated">Sequence Animation</router-link></li>
                  </ul>
                </div>

                <li class="nav-item dropdown bg-info">
                  <a class="nav-link dropdown-toggle " href="/Canvas" id="stores"
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-pencil-square-o nav-icon" aria-hidden="true"></i>
                  <span>Maze</span>
                </a>
                <div class="dropdown-menu row">
                  <div class="col-12 col-md-12">
                    <ul class="list-unstyled">
                      <li>Maze</li>
                      <li> <router-link to="/canvas">Maze</router-link></li>
                      <!-- <li><a class="" href="/loopingAnimation">Looping Animation</a></li> -->
                    </ul>
                  </div>
                </div>

              <li class="nav-item dropdown bg-purple">
                <a class="nav-link dropdown-toggle " href="/animation" id="stores"
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
                      href="/whonine">Disney's 9 old men<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a href="/whonine">Who are they?</a></li>
                      <li><a href="/introducing">Introducing</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      "
                      href="/PrinciplesOfAnimation">Introduction of Animation<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="/whatPrinciple">12 principles</a></li>
                      <li><a class="" href="/firstsixprinciples">Principles I</a></li>
                      <li><a class="" href="/secondsixprinciples">Principles II</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown bg-danger">
                <a class="nav-link dropdown-toggle " href="/history" role="button"
                  data-toggle="dropdown">
                  <i class="fa fa-list-ul nav-icon" aria-hidden="true"></i>
                  <span>History</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item " href="/30000bc">30 Thousands BC</a>
                  </li>
                  <li>
                    <a class="dropdown-item " href="/earlymillennium">Early Millenniums</a>
                  </li>
                  <li>
                    <a class="dropdown-item " href="/cinematography">Cinematography</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/19thCentury">19th Century</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/20thCentury">20th Century</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/21stCentury">21st Century</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div class="main-wrapper home container">
    
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
                  <a href="/moGraph">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>What's motion graphic?
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/coding">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>About programming
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/design">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Designing
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/shapesColors">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Shapes & colors
                  </a>
                </li>
                <li class="mb-3">
                  <a href="/gallery">
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
                    <div class="media-body">
                      <h5 class="line-hight-16 mb-1">
                        <div><img src="https://image.flaticon.com/icons/svg/174/174855.svg"></div>
                        <a class="font-base font-size-14" href="">Check out Cheryl's website: www.cheryljune.net</a>
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

</style>
