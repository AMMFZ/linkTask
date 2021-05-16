(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"p-content\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details\">\n  <div class=\"container\">\n    <nav aria-label=\"breadcrumb\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a href=\"#\" routerLink=\"/\">home</a></li>\n        <li class=\"breadcrumb-item\"><a href=\"#\" routerLink=\"/news\">news</a></li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">new details</li>\n      </ol>\n    </nav>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>new details</h2>\n        <div class=\"one_artic\" *ngFor=\"let elm of articlesDetails\">\n          <img [attr.src]=\"elm.urlToImage\" alt=\"loading...\" class=\"img-responsive\" />\n          <div class=\"details_info\">\n            <span class=\"cat\">category name</span>\n            <div class=\"art_title\">\n              <h3>{{elm.title}}</h3>\n              <div class=\"art_icons\">\n                <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n              </div><!-- #.art_icons -->\n            </div><!-- #.art_title -->\n            <p>{{elm.content}} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nesciunt, maxime iste porro animi adipisci! Ea ducimus aperiam alias aliquid asperiores officia quod esse vitae temporibus quidem, <br /> <br/>omnis voluptatum repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facilis corrupti aut ut pariatur cupiditate quas assumenda quasi, minus distinctio voluptas unde commodi ea porro non reprehenderit maxime nam? Debitis! {{elm.content}} <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloremque saepe, fugiat odio autem non maiores quaerat porro accusamus obcaecati quo molestias, natus numquam quidem velit? Expedita, dicta eaque. {{elm.content}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vel impedit maiores hic beatae corrupti aut accusantium odio, expedita tempora, possimus ea, soluta commodi deserunt quos placeat officia! Fuga, expedita. <br /> <br />\n              {{elm.content}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis voluptate natus asperiores tenetur, et quidem minus dolore impedit excepturi dolores maiores delectus aperiam veritatis ex, explicabo odio. Laudantium, a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam tenetur expedita facere nisi. Quas harum unde molestiae, quisquam repellendus sunt asperiores ratione rem laudantium cumque itaque, quidem, et alias.</p>\n          </div>\n        </div><!-- #.one_artic -->\n      </div><!-- #.col-md-12 -->\n    </div><!-- #.row -->\n\n    <div class=\"related\">\n      <h3>related topics</h3>\n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let related of just_three\">\n          <div class=\"topic\">\n            <img [attr.src]=\"related.urlToImage\" />\n            <div class=\"about\">\n              <span>category</span>\n              <h4>{{related.title | slice:0:30}}</h4>\n              <a href=\"#\" [routerLink]=\"['/details',related.id]\" (click)=\"reloadPage(related.id)\">\n                view details\n                <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\n              </a>\n            </div>\n          </div><!-- #.topic -->\n        </div><!-- #.col-md-4 -->\n      </div>\n    </div>\n\n  </div><!-- #.container -->\n</div><!-- #.details -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row f-top\">\n\n      <div class=\"col-md-2\">\n        <ul class=\"list-unstyled\">\n          <li><a href=\"#\">news</a></li>\n          <li><a href=\"#\">events</a></li>\n          <li><a href=\"#\">about</a></li>\n          <li><a href=\"#\">faqs</a></li>\n        </ul>\n      </div><!-- #.col-md-3 -->\n\n      <div class=\"col-md-2\">\n        <ul class=\"list-unstyled\">\n          <li><a href=\"#\">privacy policy</a></li>\n          <li><a href=\"#\">contact us</a></li>\n          <li><a href=\"#\">complains</a></li>\n        </ul>\n      </div><!-- #.col-md-3 -->\n\n      <div class=\"col-md-5\">\n        <p class=\"title\">subscripe to newsletter</p>\n        <form>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\"/>\n          <button type=\"button\" class=\"btn btn-primary\">subcribe</button>\n        </form>\n      </div><!-- #.col-md-3 -->\n\n      <div class=\"col-md-3\">\n        <p class=\"title\">follow us on</p>\n        <a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n      </div><!-- #.col-md-3 -->\n\n    </div><!-- #.row-->\n  </div><!-- #.container -->\n\n  <div class=\"f_bottom text-center\">\n    <div class=\"container\">\n      <p>all rights-reserved - link development company @ 2020</p>\n    </div>\n  </div>\n</div><!-- #.footer -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div id=\"mylink\" class=\"carousel slide carousel-fade\" data-bs-ride=\"carousel\">\n    <div class=\"carousel-indicators\">\n      <button type=\"button\" data-target=\"#mylink\" data-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\n      <button type=\"button\" data-target=\"#mylink\" data-slide-to=\"1\" aria-label=\"Slide 2\"></button>\n      <button type=\"button\" data-target=\"#mylink\" data-slide-to=\"2\" aria-label=\"Slide 3\"></button>\n    </div>\n    <div class=\"carousel-inner\">\n      <div class=\"face-content\">\n        <h1><span>ai</span> foundation</h1>\n        <p>is focusing on inspiring the next generation of kids healthcare proffessional</p>\n        <button class=\"btn btn-success\">donate now</button>\n      </div>\n      <div class=\"carousel-item active\">\n        <img src=\"../../assets/imgs/Banner.jpg\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../../assets/imgs/Banner.jpg\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../../assets/imgs/Banner.jpg\" alt=\"...\">\n      </div>\n    </div>\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleFade\" data-bs-slide=\"prev\">\n      <span class=\"fa fa-angle-left\" aria-hidden=\"true\"></span>\n    </button>\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleFade\" data-bs-slide=\"next\">\n      <span class=\"fa fa-angle-right\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"home\">\n  <div class=\"articles\">\n    <div class=\"container\">\n      <div class=\"vAll\">\n        <h2>latest news</h2>\n        <a href=\"#\" routerLink=\"/news\">view all <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <div class=\"home_content\">\n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor=\"let artic of sort\">\n            <div class=\"box_content\">\n              <img class=\"img-responsive\" [src]=\"artic.urlToImage\" alt=\"loading...\">\n              <div class=\"box_info\">\n                <div class=\"art_icons\">\n                  <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n                  <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n                </div>\n                <h3><a href=\"#\" [routerLink]=\"['/details',artic.id]\">{{artic.title | slice:0:60}} ...</a></h3>\n                <p>{{artic.content | slice:0:80}} ...</p>\n                <span><i class=\"fa fa-calendar-minus-o\" aria-hidden=\"true\"></i>\n                   {{artic.publishedAt}}</span>\n              </div><!-- #.box_info -->\n            </div><!-- #.box_content -->\n          </div><!-- #.col-md-4 -->\n        </div><!-- #.row -->\n      </div><!-- #.home_content -->\n    </div><!-- #.container -->\n  </div><!-- #.articles -->\n</div><!-- #.home -->\n\n<div class=\"how text-center\">\n  <h2>how we have helped</h2>\n  <p>see how <span>ai</span> foundation have promoted change locally and to the world</p>\n\n  <div class=\"how_con\">\n    <div class=\"h_c\">\n      <div class=\"overlay\"></div>\n\n      <div class=\"h_info\">\n      <img src=\"../../assets/imgs/icon5.png\" />\n      <strong>find place</strong>\n      <a href=\"#\">+</a>\n      </div>\n    </div>\n\n    <div class=\"h_c\">\n      <div class=\"overlay\"></div>\n\n      <div class=\"h_info\">\n        <img src=\"../../assets/imgs/icon6.png\" />\n        <strong>a'awen</strong>\n        <a href=\"#\">+</a>\n      </div>\n    </div>\n\n    <div class=\"h_c\">\n      <div class=\"overlay\"></div>\n\n      <div class=\"h_info\">\n      <img src=\"../../assets/imgs/icon2.png\" />\n      <strong>omniyat</strong>\n      <a href=\"#\">+</a>\n      </div>\n    </div>\n\n    <div class=\"h_c\">\n      <div class=\"overlay\"></div>\n\n      <div class=\"h_info\">\n      <img src=\"../../assets/imgs/icon7.png\" />\n      <strong>give time</strong>\n      <a href=\"#\">+</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"how_con\">\n    <div class=\"h_c\">\n      <div class=\"overlay\"></div>\n      <div class=\"h_info\">\n\n      <img src=\"../../assets/imgs/icon1.png\" />\n      <strong>tofoula</strong>\n      <a href=\"#\">+</a>\n      </div>\n    </div>\n\n    <div class=\"h_c\">\n      <div class=\"overlay\"></div>\n\n      <div class=\"h_info\">\n      <img src=\"../../assets/imgs/icon4.png\" />\n      <strong>fundraising</strong>\n      <a href=\"#\">+</a>\n      </div>\n    </div>\n\n    <div class=\"h_c\">\n      <div class=\"overlay\"></div>\n\n      <div class=\"h_info\">\n      <img src=\"../../assets/imgs/icon3.png\" />\n      <strong>zakat</strong>\n      <a href=\"#\">+</a>\n      </div>\n    </div>\n  </div>\n</div><!-- #.how -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <div class=\"container\">\n    <span class=\"navbar-brand\">\n      <i class=\"fa fa-align-left\" aria-hidden=\"true\"></i>\n      <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n      <img src=\"../../assets/imgs/logo.png\" routerLink=\"/\" />\n    </span>\n    <div class=\"menu\">\n      <ul class=\"list-unstyled main_menu\">\n        <li><a href=\"#\" routerLink=\"/\">home</a></li>\n        <li class=\"sub\"><a href=\"#\">about us</a>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"#\">who are us</a></li>\n            <li><a href=\"#\">why us?</a></li>\n          </ul>\n        </li>\n        <li class=\"sub\"><a href=\"#\" routerLink=\"news\">news</a>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"#\">news</a></li>\n            <li><a href=\"#\">events us?</a></li>\n          </ul>\n        </li>\n        <li class=\"sub\"><a href=\"#\">careers</a>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"#\">opportunities</a></li>\n          </ul>\n        </li>\n        <li><a href=\"#\">contact us</a></li>\n        <li><a href=\"#\">site map</a></li>\n      </ul>\n      <ul class=\"social list-unstyled\">\n        <li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n        </li>\n        <li>\n          <a href=\"#\"><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a>\n        </li>\n        <li>\n          <a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n        </li>\n        <li>\n          <a href=\"#\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a>\n        </li>\n        <li>\n          <a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n        </li>\n      </ul>\n    </div><!-- #.menu -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"true\" aria-label=\"Toggle navigation\" data-target=\"#linkTask\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"linkTask\">\n      <ul class=\"navbar-nav ml-auto navLeft\">\n          <li>\n            <span>\n              <input type=\"text\" placeholder=\"search\" />\n              <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            </span>\n          </li>\n          <li><i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\n          </li>\n          <li><img src=\"../../assets/imgs/profile.png\" /> <strong>user name</strong></li>\n          <li><i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n          </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/news/news.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/news/news.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news\">\n  <div class=\"container\">\n    <nav aria-label=\"breadcrumb\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a href=\"#\" routerLink=\"/\">home</a></li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">news</li>\n      </ol>\n    </nav>\n    <h2>news</h2>\n\n    <div class=\"newsform\">\n      <form>\n        <div class=\"form-group\">\n          <label>from</label>\n          <input type=\"date\" class=\"form-control\" />\n          <span class=\"dateIcon\">\n            <i class=\"fa fa-calendar-minus-o\" aria-hidden=\"true\"></i>\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label>to</label>\n          <input type=\"date\" class=\"form-control\" />\n          <span class=\"dateIcon\">\n            <i class=\"fa fa-calendar-minus-o\" aria-hidden=\"true\"></i>\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label>category</label>\n          <select name=\"selOne\" class=\"form-control\">\n            <option value=\"one\">select one</option>\n            <option value=\"two\">select two</option>\n            <option value=\"three\">select three</option>\n          </select>\n        </div>\n        <div class=\"form-group search\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"search services\" />\n          <button class=\"btn btn-success\"><i class=\"fa fa-search\"></i></button>\n        </div>\n      </form>\n      <span class=\"sortBy\" (click)=\"chang_sortCase()\">sort by <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n\n    <div class=\"news_content\">\n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let artic of sort\">\n          <div class=\"box_content\">\n            <img class=\"img-responsive\" [attr.src]=\"artic.urlToImage\" alt=\"loading...\">\n            <div class=\"box_info\">\n              <div class=\"art_icons\">\n                <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n              </div>\n              <h3><a href=\"#\" [routerLink]=\"['/details',artic.id]\">{{artic.title | slice:0:60}} ...</a></h3>\n              <p>{{artic.content | slice:0:80}} ...</p>\n              <span><i class=\"fa fa-calendar-minus-o\" aria-hidden=\"true\"></i>\n                 {{artic.publishedAt}}</span>\n            </div><!-- #.box_info -->\n          </div><!-- #.box_content -->\n        </div><!-- #.col-md-4 -->\n      </div><!-- #.row -->\n    </div><!-- #.news_content -->\n  </div><!-- #.container -->\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_5__["NewsComponent"] },
    { path: 'details/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'newApp';
    }
    AppComponent.prototype.ngOnInit = function () {
        // testing jquery
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.container .row .col .clickme').click(function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.row .col .show-result .result').html('jquery work !');
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_10__["NewsComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(http, actRout) {
        this.http = http;
        this.actRout = actRout;
        this.articId = this.actRout.snapshot.paramMap.get('id');
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("../../assets/newsapi.json", { observe: 'body' }).subscribe(function (data) {
            _this.articles = data;
            _this.getAllArticles = _this.articles.articles;
            _this.articlesDetails = _this.getAllArticles.filter(function (i) { return i.id == _this.articId; });
            _this.sort = _this.getAllArticles.sort(function (a, b) {
                a.publishedAt - b.publishedAt;
            });
            _this.just_three = _this.sort.splice(",", 3);
        });
    };
    DetailsComponent.prototype.reloadPage = function (id) {
        var _this = this;
        this.http.get("../../assets/newsapi.json", { observe: 'body' }).subscribe(function (data) {
            _this.articles = data;
            _this.getAllArticles = _this.articles.articles;
            _this.articlesDetails = _this.getAllArticles.filter(function (i) { return i.id == id; });
            _this.sort = _this.getAllArticles.sort(function (a, b) {
                a.publishedAt - b.publishedAt;
            });
            _this.just_three = _this.sort.splice(",", 3);
        });
    };
    DetailsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        })
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.carousel').carousel({
            interval: 4000
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.carousel-control-prev').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.carousel').carousel('prev');
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.carousel-control-next').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.carousel').carousel('next');
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("../../assets/newsapi.json", { observe: 'body' }).subscribe(function (data) {
            _this.articles = data;
            _this.myAllArticles = _this.articles.articles;
            _this.homeArticles = _this.myAllArticles.filter(function (i) { return i.showOnHomepage === true; });
            _this.sort = _this.homeArticles.sort(function (a, b) {
                a.publishedAt - b.publishedAt;
            });
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.navbar-brand i.fa').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.navbar-brand').toggleClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.menu').toggleClass('active');
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.navbar-nav .fa-search').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.navbar-nav input').toggleClass('active');
            });
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(http) {
        this.http = http;
        this.sortingCase = false;
        this.load();
    }
    NewsComponent.prototype.ngOnInit = function () { };
    NewsComponent.prototype.load = function () {
        var _this = this;
        this.http.get("../../assets/newsapi.json", { observe: 'body' }).subscribe(function (data) {
            _this.tarticles = data;
            _this.myAllArticles = _this.tarticles.articles;
            _this.sort = _this.myAllArticles.sort(function (a, b) {
                a.publishedAt - b.publishedAt;
            });
        });
    };
    NewsComponent.prototype.chang_sortCase = function () {
        if (this.sortingCase === false) {
            this.sortingCase = true;
            this.sortIt();
        }
        else {
            this.sortingCase = false;
            this.sortIt();
        }
    };
    NewsComponent.prototype.sortIt = function () {
        if (this.sortingCase === false) {
            this.sort = this.myAllArticles.sort(function (a, b) {
                a.publishedAt - b.publishedAt;
            });
        }
        else {
            this.sort = this.myAllArticles.reverse(function (a, b) {
                a.publishedAt - b.publishedAt;
            });
        }
    };
    NewsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")]
        })
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\ComInfo\linkTask\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map