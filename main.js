(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\home-repo\line-ready-dashboard\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_data_fishdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/fishdata */ "5gNm");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");






const _c0 = function () { return ["id", "scientificName", "speciesName", "calories", "cholesterol", "fatTotal", "saturatedFattyAcidsTotal", "sodium"]; };
class HomeComponent {
    constructor() {
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"]('en-US');
        this.customizeTooltip = (arg) => {
            return {
                text: arg.valueText + ' - ' + this.pipe.transform(arg.percent, '1.2-2'),
            };
        };
        this.customizeLabel = (point) => {
            return point.argumentText + ': ' + point.valueText + '%';
        };
        this.fishByAvailabilityDataSource = _shared_data_fishdata__WEBPACK_IMPORTED_MODULE_2__["fishByAvailability"];
        this.staticFishDataDataSource = _shared_data_fishdata__WEBPACK_IMPORTED_MODULE_2__["StaticFishData"];
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 32, vars: 13, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings", 2, "text-align", "center"], ["src", "assets/img/line-ready-logo.png", "width", "100%"], ["href", "https://github.com/Iturea/line-ready-dashboard", "target", "_blank"], ["href", "https://www.fishwatch.gov/", "target", "_blank"], ["href", "https://openweathermap.org/", "target", "_blank"], ["href", "https://earth.nullschool.net/", "target", "_blank"], [1, "dx-card", "responsive-paddings"], ["id", "pie", "type", "doughnut", "title", "Fishing Availability", "palette", "Pastel", "paletteExtensionMode", "Blend", 3, "dataSource"], [3, "enabled"], ["horizontalAlignment", "center", "verticalAlignment", "bottom"], ["argumentField", "availability", "valueField", "val"], ["mode", "topN", 3, "topCount"], ["format", "fixedPoint", 3, "visible", "customizeText"], [3, "visible", "width"], ["id", "gridContainer", "height", "550", 3, "dataSource", "columns", "showBorders"], ["visible", "true", "width", "240", "placeholder", "Search..."], [3, "enabled", "allowExportSelectedData"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Repository: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "https://github.com/Iturea/line-ready-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fish Data: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "https://www.fishwatch.gov/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Weather Data: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "https://openweathermap.org/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Weather Globe: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "https://earth.nullschool.net/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "dx-pie-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "dxo-export", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "dxo-legend", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "dxi-series", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "dxo-small-values-grouping", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "dxo-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "dxo-connector", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "dx-data-grid", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "dxo-search-panel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "dxo-export", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.fishByAvailabilityDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("topCount", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", true)("customizeText", ctx.customizeLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", true)("width", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.staticFishDataDataSource)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("showBorders", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enabled", true)("allowExportSelectedData", true);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxPieChartComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoExportComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoLegendComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxiSeriesComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoSmallValuesGroupingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoLabelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoConnectorComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoSearchPanelComponent"]], styles: [".screen-x-small[_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.screen-x-small[_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg.plus[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg.plus[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.dx-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #ffc107;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFBSjtBQUNJO0VBQ0UsU0FBQTtBQUNOO0FBSUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQURGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5zY3JlZW4teC1zbWFsbCkgLmxvZ29zLWNvbnRhaW5lciB7XHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAmLnBsdXMge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZHgtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiAjZmZjMTA3O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: 'home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1ua0":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: FooterComponent, FooterModule, HeaderComponent, HeaderModule, LoginFormComponent, LoginFormModule, SideNavigationMenuComponent, SideNavigationMenuModule, UserPanelComponent, UserPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "aF9I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterModule"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "aZ8m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"]; });

/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "RK7/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormModule"]; });

/* harmony import */ var _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-navigation-menu/side-navigation-menu.component */ "WOTP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuComponent", function() { return _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideNavigationMenuComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuModule", function() { return _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideNavigationMenuModule"]; });

/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "V2yS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__["UserPanelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__["UserPanelModule"]; });








/***/ }),

/***/ "5gNm":
/*!*****************************************!*\
  !*** ./src/app/shared/data/fishdata.ts ***!
  \*****************************************/
/*! exports provided: FishByAvailabilityModel, fishByAvailability, StaticFishData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FishByAvailabilityModel", function() { return FishByAvailabilityModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fishByAvailability", function() { return fishByAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticFishData", function() { return StaticFishData; });
class FishByAvailabilityModel {
}
const fishByAvailability = [
    {
        availability: 'Year-Round',
        val: 10,
    },
    {
        availability: 'Spring',
        val: 40,
    },
    {
        availability: 'Summer',
        val: 30,
    },
    {
        availability: 'Fall',
        val: 10,
    },
    {
        availability: 'Winter',
        val: 10,
    },
];
const StaticFishData = [
    {
        id: 113,
        fisheryManagement: '<ul>\n<li>There are two stocks of Atlantic cod in U.S. waters, the Gulf of Maine and Georges Bank stocks.</li>\n<li><a href="http://www.greateratlantic.fisheries.noaa.gov/sustainable/species/multispecies/">NOAA Fisheries</a> and the <a href="https://www.nefmc.org/">New England Fishery Management Council</a> manage Gulf of Maine cod. NOAA Fisheries and the New England Fishery Management Council collaborate with Canada to jointly manage Georges Bank cod, because the stock spans the international boundary.</li>\n<li>Atlantic cod, along with other groundfish in New England waters, are managed under the <a href="https://www.nefmc.org/management-plans/northeast-multispecies">Northeast Multispecies Fishery Management Plan</a>, which includes:\n<ul>\n<li>Permitting requirements for commercial vessels.</li>\n<li>Separate management measures for recreational vessels.</li>\n<li>Year-round and seasonal area closures to protect spawning fish and habitat.</li>\n<li>Minimum fish sizes to prevent harvest of juvenile fish.</li>\n<li>Annual catch limits, based on best available science.</li>\n<li>An optional sector (<a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch share</a>) program can be used for cod and other groundfish species. The sector program allows fishermen to form harvesting cooperatives and work together to decide when, where, and how they harvest fish.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Atlantic cod live near the ocean floor along rocky slopes and ledges.</li>\n<li>They prefer to live in cold water, at depths of around 30 to 500 feet, on bottoms with coarse sediments, rather than on finer mud and silt.</li>\n</ul>\n',
        habitatImpacts: 'Area closures and gear restrictions protect habitat that are affected by some kinds of trawl gear.',
        imageGallery: null,
        location: '<ul>\n<li>In the Northwest Atlantic, cod range from Greenland to Cape Hatteras, North Carolina.</li>\n<li>In U.S. waters, cod is most common on Georges Bank and in the western Gulf of Maine.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Significantly below target population levels. Rebuilding plans are in place.',
        populationStatus: '<ul>\n<li>Gulf of Maine stock:\n<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/saw/sasi/sasi_report_options.php" target="_blank">2019&nbsp;stock assessment</a><a href="https://www.nefsc.noaa.gov/saw/sasi/sasi_report_options.php">,</a> the Gulf of Maine stock is overfished and below the target biomass level.</li>\n<li>A new 10-year rebuilding plan was implemented for this stock in 2014 and the stock is targeted to rebuild by 2024.&nbsp; This is the second rebuilding plan for this stock.</li>\n</ul>\n</li>\n<li>Georges Bank stock:\n<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/publications/crd/crd1311/" target="_blank">2013&nbsp;stock assessment</a>, the Georges Bank stock is overfished.</li>\n<li>The Georges Bank stock is scheduled to rebuild by 2027.</li>\n</ul>\n</li>\n<li>Both stocks are subject to overfishing. Fishing is still allowed, but at reduced levels.</li>\n<li>Historically, cod was so abundant off New England that early explorers named Cape Cod for the fish. Furthermore, Gloucester was established by a colonial charter issued to profit from cod fishing, and a painted “sacred cod” carved from pine has hung in the Massachusetts state house since 1784 as a symbol of prosperity.</li>\n<li>Due to high fishing pressure throughout the latter part of the 20th century, there are fewer fish in the U.S. stocks of Atlantic cod than the average for the past four decades.</li>\n<li>A primary source of rebuilding potential is the number of young fish coming into the population (recruitment). Over the past 20 years, recruitment has varied for the Gulf of Maine stock, and has been well below average for the Georges Bank stock.</li>\n</ul>\n',
        scientificName: 'Gadus morhua',
        speciesAliases: '<a href="/species-aliases/cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Cod</a>, <a href="/species-aliases/codling" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Codling</a>, <a href="/species-aliases/scrod-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Scrod cod</a>, <a href="/species-aliases/markets" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Markets</a>, <a href="/species-aliases/steakers" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Steakers</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/atlantic_cod.png',
            alt: '',
            title: '',
        },
        speciesName: 'Atlantic Cod',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Atlantic cod can live more than 20 years.</li>\n<li>They can grow up to 51 inches and 77 pounds.</li>\n<li>They are capable of reproducing at 2 to 3 years old, when they are between 12 and 16 inches long.</li>\n<li>Cod spawn near the ocean floor from winter to early spring.</li>\n<li>Larger females can produce 3 to 9 million eggs when they spawn.</li>\n<li>They are top predators in the bottom ocean community, feeding on a variety of invertebrates and fish.</li>\n</ul>\n',
        bycatch: 'Regulations and the use of modified fishing gear reduce bycatch.',
        calories: '82',
        carbohydrate: null,
        cholesterol: '43 mg',
        color: '',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '0.67 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'Reduced to end overfishing.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of Atlantic cod totaled 2.15&nbsp;million pounds and were valued at more than $4.7&nbsp;million.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Cod are commonly harvested using trawl nets, gillnets, bottom longlines, and rod and reel.</li>\n<li>Gillnets, longlines, and rod and reel used to harvest cod have little to no impact on habitat.</li>\n<li>Closed areas and gear restrictions reduce habitat impacts from trawl nets.</li>\n<li>Fishermen follow management measures designed to reduce interactions with marine mammals, including gear modifications, seasonal closures, and use of marine mammal deterrents.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Cod are highly prized by recreational fishermen. They are commonly harvested by anglers using lures or bait. Fishing occurs year-round.</li>\n<li><a href="https://www.greateratlantic.fisheries.noaa.gov/sustainable/recfishing/regs/index.html">Regulations</a> include minimum fish sizes, possession limits, and closed seasons.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Atlantic cod are heavy-bodied with a large head, blunt snout, and a distinct barbel (a whisker-like organ, like on a catfish) under the lower jaw.</li>\n<li>Their coloring varies, ranging from light yellowish-green to red and olive, usually with darker speckles on the head, fins, tail, and body. The belly is light colored and usually spotless. Individuals can change color readily.</li>\n<li>Cod have an obvious lateral line (the faint line that runs lengthwise down each side of the fish).</li>\n</ul>\n',
        production: null,
        protein: '17.81 g',
        quote: 'Although populations are well below target levels, U.S. wild-caught Atlantic cod is still a smart seafood choice because it is sustainably managed under a rebuilding plan that allows limited harvest by U.S. fishermen.',
        quoteBackgroundColor: '#847852',
        research: null,
        saturatedFattyAcidsTotal: '0.131 g',
        selenium: '33.1 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '54 mg',
        source: '<p>Wild-caught from Maine to Virginia.</p>\n',
        sugarsTotal: null,
        taste: '<p>Atlantic cod has a mild clean flavor. It is sweeter than Pacific cod.</p>\n',
        texture: '<p>Cod has large flakes. It is less firm than haddock.</p>\n',
        path: '/profiles/atlantic-cod',
        lastUpdate: '03/04/2020 - 13:16',
        href: 'https://line-ready-api.azurewebsites.net/fish/113',
        method: null,
        rel: null,
    },
    {
        id: 112,
        fisheryManagement: '<ul>\n<li><a href="https://sero.nmfs.noaa.gov/">NOAA Fisheries</a> and the <a href="http://www.gulfcouncil.org/">Gulf of Mexico Fishery Management Council</a>&nbsp;manage&nbsp;cobia in the Gulf of Mexico and on the east coast of Florida.</li>\n<li>The Atlantic migratory group cobia (from Georgia through New York) are managed by the <a href="http://www.asmfc.org/">Atlantic States Marine Fisheries Commission</a>.</li>\n<li>Managed under the&nbsp;<a href="https://gulfcouncil.org/fishery-management/implemented-plans/coastal-migratory-pelagics/">Fishery Management Plan for Coastal Migratory Pelagics in the Atlantic and Gulf of Mexico</a>:\n<ul>\n<li>Fishermen do not need a federal permit to harvest cobia.</li>\n<li>Gear restrictions:\n<ul>\n<li>Drift gillnets are prohibited.</li>\n<li>Authorized gear includes automatic reel, bandit gear, handline, rod-and-reel, and pelagic longline.</li>\n</ul>\n</li>\n<li>Cobia must be a minimum size to be harvested, and must be landed with their heads and fins intact.&nbsp;Current minimum size limit is 33 inches fork length. &nbsp;Amendment 7 will be increasing the minimum size limit to 36 inches fork length.</li>\n<li>Commercial and recreational fishermen have size limits, trip limits, and per person per day or per vessel per day bag limits.</li>\n<li>Annual catch limits based on best available science.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Cobia are found near structures in the water (buoys, debris, shipwrecks, and artificial reefs) or large animals (sharks, turtles, and stingrays).</li>\n<li>Adult cobia travel alone or in small groups.</li>\n</ul>\n',
        habitatImpacts: 'Fishing gear used to catch cobia rarely contacts the ocean floor and has minimal impacts on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>In U.S. waters, cobia are most abundant from Virginia south through the Gulf of Mexico.</li>\n<li>Cobia migrate seasonally in the Atlantic and Gulf of Mexico.</li>\n<li>Along the Atlantic coast, they move south and offshore toward warmer waters during the late fall and winter.</li>\n<li>Cobia found in the northeastern Gulf of Mexico during the summer move to south Florida waters in the winter, possibly spending the winter near the Florida Keys.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population level.',
        populationStatus: '<ul>\n<li>According to the 2013 stock assessment the&nbsp;<a href="http://sedarweb.org/sedar-28-stock-assessment-report-gulf-mexico-cobia" target="_blank">Gulf of Mexico stock</a> is not overfished and not subject to overfishing.</li>\n<li>In the Gulf of Mexico, the cobia population nearly doubled from the early 1980s to 2000.&nbsp;</li>\n<li>The 2013 stock assessment determined that there are two separate migratory stocks, the Gulf of Mexico and east Florida stock (Texas through the entire east coast of Florida) and Atlantic stock (Georgia north through the Mid-Atlantic area).</li>\n<li>Scientists from NOAA\'s Southeast Fisheries Science Center monitor the abundance of the population, and scientists, managers, and stakeholders assess the status of the stock through the&nbsp;<a href="http://sedarweb.org">Southeast Data, Assessment, and Review (SEDAR) process</a>.</li>\n</ul>\n',
        scientificName: 'Rachycentron canadum',
        speciesAliases: '<a href="/species-aliases/crabeater" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Crabeater</a>, <a href="/species-aliases/sergeantfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sergeantfish</a>, <a href="/species-aliases/ling" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Ling</a>, <a href="/species-aliases/cabio" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Cabio</a>, <a href="/species-aliases/cubby-yew" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Cubby yew</a>, <a href="/species-aliases/lemonfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Lemonfish</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/cobia.png',
            alt: '',
            title: '',
        },
        speciesName: 'Cobia',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Cobia are the only member of the family Rachycentridae in North America.</li>\n<li>They grow up to 6 feet and 100 pounds and live up to 12 years.</li>\n<li>They are able to reproduce when they are young—females mature at age 3 and males mature at age 2.</li>\n<li>Cobia spawn in coastal bays and estuaries several times throughout their spawning season, which lasts from late June to mid-August in the Southeast and from late summer to early fall in the Gulf of Mexico. Females release between 375,000 and 2 million eggs each time they spawn.</li>\n<li>They are strong, aggressive predators, mainly feeding on crustaceans but also fish and squid. Larger pelagic fish prey on young cobia.</li>\n</ul>\n',
        bycatch: 'Minimal, as commercial fishermen rarely target cobia.',
        calories: '87',
        carbohydrate: null,
        cholesterol: '40 mg',
        color: '<p>Raw cobia meat is light tan and turns snowy-white when cooked.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '0.64 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended level in the Gulf of Mexico. ',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of cobia totaled 45,800 pounds in the Gulf of Mexico and were valued at $160,980.</li>\n<li>Commercial fishermen do not directly target cobia and usually catch it while trawling for shrimp or fishing for other species such as mackerel.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Recreational fishermen like cobia because it is a large, powerful fish that puts up a good fight and provides a tasty meal.</li>\n<li>Recreational landings make up approximately 96&nbsp;percent of total landings. In 2018, recreational harvest totaled 3,476,650 pounds in the Gulf of Mexico.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Cobia is a good source of low-fat protein. It is high in riboflavin, niacin, vitamin B6, magnesium, and potassium.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Cobia are dark brown with a single dorsal fin.</li>\n<li>Young cobia have distinct coloring, with alternating black and white horizontal stripes and splotches of bronze, orange, and green.</li>\n<li>Cobia are often mistaken for sharks or remoras. In fact, their closest living relative is the remora (shark sucker).</li>\n</ul>\n',
        production: null,
        protein: '18.99 g',
        quote: 
        // tslint:disable-next-line: max-line-length
        'U.S. wild-caught cobia is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#452f21',
        research: null,
        saturatedFattyAcidsTotal: '0.12 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '135 mg',
        source: '<p>Wild-caught from Virginia to Texas. Cobia is farmed, and <a href="https://www.fishwatch.gov/aquaculture">aquaculture</a>-produced cobia is becoming increasingly available in U.S. fish markets.</p>\n',
        sugarsTotal: null,
        taste: '<p>Cobia has a sweet, rich flavor.</p>\n',
        texture: '<p>Cobia is lean, moist, and firm with a nice flake.</p>\n',
        path: '/profiles/cobia',
        lastUpdate: '03/04/2020 - 13:30',
        href: 'https://line-ready-api.azurewebsites.net/fish/112',
        method: null,
        rel: null,
    },
    {
        id: 111,
        fisheryManagement: '<ul>\n<li><a href="http://sero.nmfs.noaa.gov/" target="_blank">NOAA Fisheries</a> and the <a href="http://www.safmc.net/" target="_blank">South Atlantic Fishery Management Council</a> (in cooperation with the <a href="http://www.mafmc.org/" target="_blank">Mid-Atlantic</a> and <a href="http://www.nefmc.org/" target="_blank">New England</a> Fishery Management Councils) manage the Atlantic stock&nbsp;of Mahimahi.</li>\n<li>Managed under the <a href="http://www.safmc.net/Library/Dolphin-Wahoo">Fishery Management Plan for the Dolphin and Wahoo Fishery of the Atlantic</a>:\n<ul>\n<li>Permits are required to sell mahimahi.</li>\n<li>Minimum size limit for mahimahi caught off the coasts of Georgia, Florida, and South Carolina to protect smaller fish.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Mahimahi live near the surface in tropical and subtropical waters.</li>\n<li>Juveniles swim together in schools.</li>\n<li>Older fish are usually found alone.</li>\n<li>Larger males prefer open ocean habitat.</li>\n<li>Females and smaller males are commonly found near natural and artificial floating objects, including floating brown algae called&nbsp;<em>Sargassum</em>&nbsp;(in the Atlantic and the Caribbean).</li>\n</ul>\n',
        habitatImpacts: 'Fishing gear used to catch mahimahi rarely contacts the ocean floor and has minimal impacts on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Mahimahi are found in the Atlantic, Gulf of Mexico, and Caribbean, and are caught from Massachusetts to Texas.</li>\n<li>About one-third of U.S. commercial harvest of mahimahi comes from the Atlantic, Gulf of Mexico, and Caribbean. The rest comes from the <a href="https://www.fishwatch.gov/profiles/pacific-mahimahi">Pacific</a>, mainly Hawaii.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels.',
        populationStatus: '<ul>\n<li>Scientists assume populations are abundant because they are highly productive and widely distributed throughout tropical/subtropical oceans.</li>\n<li>Scientists conducted an exploratory assessment of mahimahi in 2000 and determined that the stock was not overfished, but they have not conducted a formal stock assessment.</li>\n<li>Atlantic mahimahi is not subject to overfishing.</li>\n</ul>\n',
        scientificName: 'Coryphaena hippurus',
        speciesAliases: '<a href="/species-aliases/dolphinfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Dolphinfish</a>, <a href="/species-aliases/dolphin" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Dolphin</a>, <a href="/species-aliases/dorado" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Dorado</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/atlantic_mahimahi_dolphinfish_0.png',
            alt: '',
            title: '',
        },
        speciesName: 'Atlantic Mahimahi',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Atlantic mahimahi grow up to almost 7 feet and 88 pounds.</li>\n<li>They live up to 5 years.</li>\n<li>They are capable of reproducing at 4 to 5 months old.</li>\n<li>Believed to spawn every 2 to 3 days during the spawning season, releasing between 33,000 and 66,000 eggs each time.</li>\n<li>In the Atlantic, spawn under patches of floating brown algae called&nbsp;<em>Sargassum</em>.</li>\n<li>Mahimahi are top predators that feed in surface water during the day.</li>\n<li>They eat a wide variety of species, including small pelagic fish, juvenile tuna, invertebrates, billfish, jacks, pompano, and pelagic larvae of nearshore, bottom-living species.</li>\n<li>Predators include large tuna, marine mammals, marlin, sailfish, and swordfish.</li>\n<li>NOAA Fisheries</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch.',
        calories: '85',
        carbohydrate: null,
        cholesterol: '73 mg',
        color: '<p>The raw flesh is pinkish to grayish-white, although the flesh along the lateral line is dark. When cooked, the meat is off-white.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '0.7 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2017, commercial fishermen harvested more than 603,400 pounds of mahimahi in the Atlantic (primarily from Florida and North Carolina) valued at $2&nbsp;million, and about 3,400 pounds in the Gulf of Mexico (primarily from Florida) valued at more than $5,400.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Hook-and-line gear (including handlines and longlines) is used for commercial harvest.</li>\n<li>Hook-and-line gear has minimal impact on habitat because it does not contact the ocean floor.</li>\n<li>Longlines can incidentally catch sea turtles, marine mammals, and other species.</li>\n<li>Longline fishermen follow measures to prevent bycatch and protect other species. These include using specific gear and safe handling techniques to reduce impacts on sea turtles, as well as not fishing in certain areas to protect species such as billfish.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>The mahimahi fishery in the Atlantic, Caribbean, and Gulf of Mexico has historically been recreational.</li>\n<li>In 2017, recreational fishermen harvested more than 13.3&nbsp;million pounds of mahimahi in the Atlantic, the majority of which was caught in the South Atlantic and Caribbean, and about 65,000 pounds in the Gulf of Mexico.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Low in saturated fat and a good source of vitamin B12, phosphorus, and potassium.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Brightly colored back is an electric greenish blue, lower body is gold or sparkling silver, and sides have a mixture of dark and light spots.</li>\n<li>Bright pattern fades almost immediately after mahimahi is harvested.</li>\n<li>Adult males have a square head.</li>\n<li>Females have a rounded head.</li>\n<li>Distinguished from the pompano dolphin by its 55 to 66 dorsal fin rays and a very wide, square tooth patch on the tongue.</li>\n</ul>\n',
        production: null,
        protein: '18.5 g',
        quote: 'U.S. wild-caught mahimahi is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#83a54b',
        research: null,
        saturatedFattyAcidsTotal: '0.188 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '88 mg',
        source: '<p>Wild-caught from Massachusetts to Texas.</p>\n',
        sugarsTotal: null,
        taste: '<p>Mahimahi has a sweet, mild flavor. For a milder flavor, trim away darker portions of the meat.</p>\n',
        texture: '<p>Mahimahi is lean and fairly firm with large, moist flakes.</p>\n',
        path: '/profiles/atlantic-mahimahi',
        lastUpdate: '06/29/2020 - 13:52',
        href: 'https://line-ready-api.azurewebsites.net/fish/111',
        method: null,
        rel: null,
    },
    {
        id: 110,
        fisheryManagement: '<ul>\n<li><a href="https://www.greateratlantic.fisheries.noaa.gov/sustainable/species/monkfish/" target="_blank">NOAA Fisheries</a> and the <a href="http://www.nefmc.org/" target="_blank">New England</a> and <a href="http://www.mafmc.org" target="_blank">Mid-Atlantic Fishery Management Councils</a> manage the monkfish fishery.</li>\n<li>The New England Fishery Management Council has the lead for developing measures in the monkfish fishery management plan.</li>\n<li>Managed under the&nbsp;<a href="http://www.nefmc.org/management-plans/monkfish" target="_blank">Monkfish Fishery Management Plan</a>:\n<ul>\n<li>The monkfish fishery in U.S. waters is divided into <a href="http://www.greateratlantic.fisheries.noaa.gov/educational_resources/gis/data/shapefiles/Monkfish_Fishery_Management_Areas/Monkfish_Fishery_Management_Areas_MAP.pdf" target="_blank">two management areas</a> north and south of Georges Bank to accommodate differences in monkfish fishing practices.</li>\n<li>Both areas are managed under the same plan.</li>\n<li>The Northern Fishery Management Area covers the Gulf of Maine and the northern part of Georges Bank. The Southern Fishery Management Area extends from the southern flank of Georges Bank through the Mid-Atlantic Bight to North Carolina.</li>\n<li>Management measures include annual catch limits, limited access permits, size limits, landing limits, and measures to reduce bycatch and impacts on habitat.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Monkfish live on the ocean floor, typically on sand, mud, and shell <a href="http://www.nefsc.noaa.gov/nefsc/publications/tm/tm127/index.htm" target="_blank">habitats</a>.</li>\n<li>Adults spend most of their time on the bottom, often in a depression or partially covered in sediment. They also spend some time off the bottom, probably riding currents to help with migration.</li>\n</ul>\n',
        habitatImpacts: 'Area closures and gear restrictions protect habitat affected by some kinds of trawl gear.',
        imageGallery: null,
        location: '<ul>\n<li>Monkfish are found in the Northwest Atlantic Ocean from the Grand Banks and northern Gulf of St. Lawrence south to Cape Hatteras, North Carolina.</li>\n<li>They can tolerate a wide range of temperatures and depths, from inshore waters down to nearly 3,000 feet.</li>\n<li>Monkfish migrate seasonally to spawn and feed.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels.',
        populationStatus: '<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/saw/reviews_report_options.php">2013 stock assessment</a>, monkfish are not overfished and are not subject to overfishing in both the northern and southern areas.</li>\n</ul>\n',
        scientificName: 'Lophius americanus',
        speciesAliases: '<a href="/species-aliases/goosefish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Goosefish</a>, <a href="/species-aliases/monktails" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Monktails</a>, <a href="/species-aliases/angler" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Angler</a>, <a href="/species-aliases/fishing-frog" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Fishing frog</a>, <a href="/species-aliases/allmouth" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Allmouth</a>, <a href="/species-aliases/molligut" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Molligut</a>, <a href="/species-aliases/abbot" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Abbot</a>, <a href="/species-aliases/sea-devil" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sea-devil</a>, <a href="/species-aliases/lotte" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Lotte</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/monkfish.png',
            alt: '',
            title: '',
        },
        speciesName: 'Monkfish',
        animalHealth: null,
        availability: '<p>Year-round, with peaks in the late fall and spring.</p>\n',
        biology: '<ul>\n<li>Female monkfish grow larger and live longer than male monkfish. Females live to at least 13 years and grow to more than 4½ feet long, while males only live about 7 years and grow to almost 3 feet long.</li>\n<li>Males and females are able to reproduce when they reach about 14 inches and 16 inches long, respectively.</li>\n<li>Monkfish spawn from February to October.</li>\n<li>Females release large egg veils that can contain more than 1 million eggs.</li>\n<li>These egg veils float near the surface along with the prevailing currents for 1 to 3 weeks (depending on temperature) until the veil disintegrates and the larvae hatch.</li>\n<li>Monkfish migrate seasonally to spawn and feed.</li>\n<li>They travel by slowly swimming or by using the sturdy base of their pectoral fins to walk.</li>\n<li>Scientists speculate that their wing-like pectoral fins may be used to ride currents.</li>\n<li>Monkfish are opportunistic feeders, eating whatever prey is most available at the time.</li>\n<li>Larvae feed on zooplankton (tiny floating animals). Juveniles mostly eat small fish, shrimp, and squid.</li>\n<li>Adults mainly eat fish, including other monkfish, but also feed on crustaceans, mollusks, seabirds, and diving ducks.</li>\n<li>Monkfish ambush their prey—they use a modified spine on their head as a fishing pole and bait to lure small fish toward their mouths.</li>\n<li>When the prey comes near, the monkfish takes a large gulp, which sucks the prey into its mouth and traps it behind rows of back-pointing teeth.</li>\n<li>Large monkfish have few predators.</li>\n<li>Predacious fish such as swordfish, sharks, and thorny skate prey on small monkfish.</li>\n</ul>\n',
        bycatch: 'Regulations limit possession of bycatch species and require modified fishing gear to reduce bycatch.',
        calories: '76',
        carbohydrate: null,
        cholesterol: '25 mg',
        color: '',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '1.52 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of monkfish totaled approximately 22.9&nbsp;million pounds and were valued at approximately $14.8&nbsp;million.</li>\n<li>Monkfish is one of the highest valued finfish in the Northeast.</li>\n<li>Almost all of the monkfish for sale in the United States comes from U.S. fisheries.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Fishermen harvest monkfish using bottom trawls, sink gillnets, and scallop dredges.</li>\n<li>Most monkfish caught in the Northern Fishery Management Area are caught by vessels using bottom-trawl gear targeting groundfish.</li>\n<li>Most monkfish caught in the Southern Fishery Management area are caught by vessels using gillnets.</li>\n<li>Although bottom trawls can affect marine habitat, most bottom trawls catch monkfish over sand and mud habitats, which tend to recover from any disturbance more quickly than more structured habitats.&nbsp;</li>\n<li>Managers and researchers believe that monkfish essential fish habitat is only minimally vulnerable to the effects of bottom trawls and sink gillnet gear.</li>\n<li>Managers have implemented a variety of measures to protect habitat of other bottom-dwelling fish from any potential impacts from the monkfish fishery:\n<ul>\n<li>Two areas are closed to monkfish fishing (all gears) year-round to protect sensitive habitat.</li>\n<li>Fishermen must use gear with specific requirements that prevent them from fishing in sensitive hard bottom areas.</li>\n</ul>\n</li>\n<li>Monkfish fisheries sometimes incidentally catch <a href="https://www.fishwatch.gov/profiles/atlantic-spiny-dogfish">spiny dogfish</a> and <a href="https://www.fishwatch.gov/profiles/winter-skate">skates</a>, which fishermen are allowed to keep as long as they have the appropriate federal permits and comply with the appropriate regulations for these fisheries.</li>\n<li>There is a limit on the amount of bycatch of other fish species allowed in the monkfish fishery, including possession and landing limits and annual quotas specified in fisheries for those species.</li>\n<li>Mesh on gillnets and trawl nets must be larger than the established minimum size to reduce bycatch.</li>\n<li>Gillnets used to target monkfish can incidentally capture protected species, such as sea turtles, <a href="http://www.greateratlantic.fisheries.noaa.gov/Protected/whaletrp/">large whales (right, humpback, and fin whales)</a>, <a href="https://www.greateratlantic.fisheries.noaa.gov/protected/porptrp/">harbor porpoise</a>, dolphins, and <a href="http://www.greateratlantic.fisheries.noaa.gov/protected/atlsturgeon/">Atlantic sturgeon</a>.</li>\n<li>Monkfish fishermen follow a number of measures to reduce the fishery’s potential impact on protected species:\n<ul>\n<li>In the Mid-Atlantic, management measures prohibit gillnet vessels from using large mesh (7 inches or greater) gillnets in some areas during certain times of the year to protect migrating sea turtles.</li>\n<li>Closures are timed based on projected sea surface temperatures in fishing areas, as sea turtles are known to migrate into these areas when temperatures are about 52 degrees Fahrenheit or higher.</li>\n<li>The closures move large-mesh gillnetting north in advance of sea turtles migrating into fishing areas and, along with other precautions, have greatly reduced incidental catch of sea turtles in the monkfish fishery.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Low in sodium; a good source of niacin, vitamins B6 and B12, and potassium; and a very good source of protein, phosphorus, and selenium.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Monkfish have mottled dark brown to olive-green skin on top and whitish skin underneath.</li>\n<li>They are described as tadpole-like in appearance, with a body that is mostly a broad head with a large mouth and a narrow, tapering body.</li>\n</ul>\n',
        production: null,
        protein: '14.48 g',
        quote: 'U.S. wild-caught monkfish is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#684627',
        research: null,
        saturatedFattyAcidsTotal: '0.34 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '18 mg',
        source: '<p>U.S. wild-caught from Maine to North Carolina.</p>\n',
        sugarsTotal: null,
        taste: '<p>Mild.</p>\n',
        texture: '<p>The tail meat is firm, dense, and relatively boneless. The meat is not flaky and has a texture similar to lobster meat. Raw monkfish is covered with a blue-gray membrane, which should be removed before cooking. If left on, the membrane will shrink, and the meat will curl and become tough.</p>\n',
        path: '/profiles/monkfish',
        lastUpdate: '04/23/2020 - 16:25',
        href: 'https://line-ready-api.azurewebsites.net/fish/110',
        method: null,
        rel: null,
    },
    {
        id: 109,
        fisheryManagement: '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage the Alaska pollock fishery.</li>\n<li>Managed under the Groundfish Fishery Management Plans for the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Gulf of Alaska</a> and the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-bering-sea-and-aleutian-islands-management-plan">Bering Sea/Aleutian Islands</a>:&nbsp;\n<ul>\n<li>The Alaska pollock fishery is a great example of how <a href="https://www.afsc.noaa.gov/refm/cbs/convention_description.htm">science-based management</a> and monitoring can help ensure the long-term sustainability of the resource.</li>\n<li>The Bering Sea fishery&nbsp;is one of the first U.S. fisheries to be managed with <a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch shares</a> and is often considered one of the best-managed fisheries in the world.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Younger pollock live in the mid-water region of the ocean; older pollock (age 5 and up) typically dwell near the ocean floor.</li>\n<li>Pollock swim in large schools in waters between 330 and 985 feet deep but are sometimes found as deep as 3,300 feet. &nbsp;</li>\n</ul>\n',
        habitatImpacts: 'The Alaska pollock fishery uses midwater trawl nets that, although sometimes making contact with the bottom, have minimal impact on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Alaska pollock are found throughout the North Pacific Ocean but are most common in the Bering Sea.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels for the Aleutian Islands, Eastern Bering Sea, and Western/Central/West Yakutat Gulf of Alaska stocks. The population levels are unknown for Bogoslof and Southeast Gulf of Alaska.',
        populationStatus: '<ul>\n<li>The 2018&nbsp;stock assessments for the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pollock-stock-aleutian-islands">Aleutian Islands</a>, <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-walleye-pollock-stock-eastern-bering-sea">Eastern Bering Sea</a>, and <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-walleye-pollock-stock-gulf-alaska">Western/Central/West Yakutat Gulf of Alaska</a> indicate that pollock stocks are not overfished and spawning biomass is estimated to be above the target level for all three stocks.</li>\n<li>To assess the health of the pollock population, scientists estimate the female spawning biomass—a measure of the pollock stock’s ability to reproduce.</li>\n<li>Regulations for the pollock fishery aim to conserve the spawning population to ensure pollock can successfully reproduce and keep the population size at healthy levels.</li>\n<li>The overfished status for the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-walleye-pollock-bogoslof-island-region">Bogoslof</a> and <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-walleye-pollock-stock-gulf-alaska">Southeast Gulf of Alaska</a> stocks is unknown. These areas are also closed to fishing for pollock with trawl gear.</li>\n<li>No stocks are currently subject to overfishing.</li>\n</ul>\n<p>&nbsp;</p>\n',
        scientificName: 'Gadus chalcogrammus',
        speciesAliases: '<a href="/species-aliases/pollock" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Pollock</a>, <a href="/species-aliases/walleye-pollock" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Walleye pollock</a>, <a href="/species-aliases/pacific-pollock" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Pacific pollock</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/alaska_pollock.png',
            alt: '',
            title: '',
        },
        speciesName: 'Alaska Pollock',
        animalHealth: null,
        availability: '<p>Fresh from January to April and June to October. Frozen year-round.</p>\n',
        biology: '<ul>\n<li>Alaska pollock grow fast and have a relatively short life span of about 12 years.</li>\n<li>As a result, they are generally more productive compared to slower growing, longer living species.</li>\n<li>Some pollock begin to reproduce by the age of 3 or 4 and are extremely fertile, so each generation replaces aging or harvested fish in just a few years.</li>\n<li>In the spring, pollock migrate inshore to shallow water to breed and feed.</li>\n<li>They move back to warmer, deeper waters in the winter months.</li>\n<li>The survival of young pollock depends on several factors, such as the availability of food, environmental conditions, and predation.</li>\n<li>Their survival rate is highly variable, which can potentially cause large fluctuations in the abundance of pollock in a matter of a few years.</li>\n<li>Juvenile pollock eat zooplankton (tiny floating animals) and small fish.</li>\n<li>Older pollock feed on other fish, including juvenile pollock.</li>\n<li>Many other species—including Steller sea lions and other marine mammals, fish, and seabirds—feed on pollock and rely on them for survival.</li>\n</ul>\n',
        bycatch: 'The Alaska pollock fishery is one of the cleanest in terms of incidental catch of other species (less than 1 percent).',
        calories: '81',
        carbohydrate: null,
        cholesterol: '71 mg',
        color: '',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '0.8 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>The Alaska pollock fishery is one of the most valuable in the world.</li>\n<li>In 2018, commercial landings of Alaska pollock from the Bering Sea and Gulf of Alaska totaled more than 3.36&nbsp;billion pounds and were valued at more than $490.8&nbsp;million.</li>\n<li>In 2017, products made from pollock were valued at more than $1 billion. A quarter of pollock products are surimi (imitation crab), almost one-fifth is roe (eggs), and close to half are fillets.</li>\n<li>The majority of the U.S. catch of pollock comes from the Bering Sea.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>In the United States, pollock are caught by trawlers that tow a large cone-shaped net through the mid-water.</li>\n<li>Less than 1 percent of the total catch in the Alaska pollock fishery&nbsp;is made up of other species.</li>\n<li>Bycatch of Pacific salmon is a particular concern because of its importance to commercial and subsistence fisheries. The relative impact of the pollock fishery on critical salmon runs has been estimated to be relatively low, especially since 2007.</li>\n<li>100 percent of pollock fishing boats&nbsp;in the Bering Sea carry scientifically trained observers. &nbsp;They carefully monitor and count all Pacific salmon caught incidentally in the pollock nets. These salmon have never been allowed to be landed or sold by the pollock fishery but, when feasible, they are donated to local Alaska food banks.</li>\n<li>The <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> implemented measures in 2011 to increase incentives for fishermen to further reduce Chinook salmon bycatch.</li>\n<li>The pollock industry has developed several innovative approaches to meet these new requirements, including using NOAA Fisheries Observer program data to close salmon bycatch hotspots to fishing on a weekly basis and testing a new salmon excluder device for trawl nets.</li>\n<li>\n<p>The Council improved the management of Chinook and chum salmon bycatch in the Bering Sea by creating a comprehensive salmon bycatch avoidance program in 2016, and continues to examine additional measures to minimize salmon bycatch.</p>\n</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Alaska pollock is a good source of omega-3 fatty acids, high in protein, and low in carbohydrates and fat.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Pollock is a member of the cod family.</li>\n<li>They can grow as long as 3 feet but typically reach lengths between 12 and 20 inches and weigh between 1 and 3 pounds.</li>\n<li>They have speckled coloring that helps them blend in with the seafloor to avoid predators.</li>\n</ul>\n',
        production: null,
        protein: '17.18 g',
        quote: 'U.S. wild-caught Alaska pollock is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#746867',
        research: null,
        saturatedFattyAcidsTotal: '0.164 g',
        selenium: '21.9 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '99 mg',
        source: '<p>U.S. wild-caught, mainly in the Bering Sea and Gulf of Alaska.</p>\n',
        sugarsTotal: null,
        taste: '<p>Pollock has mild-tasting flesh and is similar to other white fish like cod or haddock.</p>\n',
        texture: '<p>Pollock has a relatively fine texture and is well suited for a variety of preparations.</p>\n',
        path: '/profiles/alaska-pollock',
        lastUpdate: '04/28/2020 - 11:24',
        href: 'https://line-ready-api.azurewebsites.net/fish/109',
        method: null,
        rel: null,
    },
    {
        id: 108,
        fisheryManagement: '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage the sablefish fishery in Alaska.</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Gulf of Alaska</a>&nbsp;and&nbsp;<a href="https://www.fisheries.noaa.gov/management-plan/groundfish-bering-sea-and-aleutian-islands-management-plan">Bering Sea/Aleutian Islands Groundfish Fishery Management Plans</a>:\n<ul>\n<li>Fishing season runs from approximately March 1 to November 15 (subject to change each year).</li>\n<li>Fixed gear (longlines and pots) harvests 90 percent of annual quota and trawl gear harvests about 10 percent.</li>\n<li>The majority of fixed gear is managed with an <a href="https://www.fisheries.noaa.gov/alaska/commercial-fishing/pacific-halibut-and-sablefish-individual-fishing-quota-ifq-program">individual fishing quota</a> (<a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch shares</a>) program.</li>\n</ul>\n</li>\n<li>The State of Alaska manages fisheries in state waters under a shared quota system and also manages separate state fisheries.</li>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the sablefish fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/groundfish/fishery-management-plan/" target="_blank">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Coast-wide catch limits among different fishing groups and gear types.</li>\n<li>Daily trip limits for some vessels.</li>\n<li>Individual fishing quota (<a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch shares</a>) for the trawl fishery and some of the fixed gear fishery. The West Coast groundfish trawl fishery is managed under a <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/catch_shares.cfm">trawl rationalization catch share program</a>.</li>\n<li>Full observer coverage in the trawl fishery, partial coverage in the fixed gear fishery.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Adults live on mud bottoms in waters deeper than 650 feet.</li>\n<li>Juveniles live throughout the water column in nearshore waters.</li>\n</ul>\n',
        habitatImpacts: 'The trawl, longline, and pot gear used to harvest sablefish have minimal or temporary effects on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Sablefish are found in the northeastern Pacific Ocean from northern Mexico to the Gulf of Alaska, westward to the Aleutian Islands and into the Bering Sea.</li>\n<li>There are two populations in the Pacific Ocean:\n<ul>\n<li>Northern population inhabits Alaska and northern British Columbia waters.</li>\n<li>Southern population inhabits southern British Columbia, Washington, Oregon, and California waters.</li>\n<li>Both populations mix off southwest Vancouver Island and northwest Washington.</li>\n</ul>\n</li>\n<li>They are most commonly found in Alaska waters.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Alaska sablefish are below target level and Pacific coast sablefish are near target level. Fishing rates promote population growth.',
        populationStatus: '<ul>\n<li>According to the <a href="http://www.pcouncil.org/wp-content/uploads/2015/05/D8_Att8_Sablefish_2015_Update_ExecSummary_JUN2015BB.pdf">2015 stock assessment</a>, the West Coast sablefish stock is not overfished and is not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/data_products/species_management.cfm">2018&nbsp;catch data</a>.</li>\n<li>According to the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-sablefish-stock-alaska">2018&nbsp;stock assessment</a>, the Eastern Bering Sea/Aleutian Islands/Gulf of Alaska sablefish stock is not overfished and is not subject to overfishing.</li>\n</ul>\n',
        scientificName: 'Anoplopoma fimbria',
        speciesAliases: '<a href="/species-aliases/black-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Black cod</a>, <a href="/species-aliases/butterfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Butterfish</a>, <a href="/species-aliases/skil" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Skil</a>, <a href="/species-aliases/beshow" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Beshow</a>, <a href="/species-aliases/coalfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Coalfish</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/sablefish.png',
            alt: '',
            title: '',
        },
        speciesName: 'Sablefish',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Females can grow more than 3 feet in length.</li>\n<li>Females are able to reproduce at 6 ½ years old and more than 2 feet in length.</li>\n<li>Males are able to reproduce at age 5 and 1.9 feet in length.</li>\n<li>Sablefish spawn in deeper water along the continental slope from January to April in Alaska waters, and from January to March between California and British Columbia.</li>\n<li>Eggs develop in deep water for about 2 weeks until they hatch, then rise to the surface.</li>\n<li>Hatched larvae are moved by surface currents.</li>\n<li>Off southeast Alaska and British Columbia, juveniles appear in nearshore waters by fall.</li>\n<li>Juveniles have been found to migrate more than 2,000 miles in 6 or 7 years.</li>\n<li>Sablefish can live to be more than 90 years old.</li>\n</ul>\n',
        bycatch: 'Regulations limit the amount of incidentally caught and discarded fish in the Alaska fishery. The catch shares program on the West Coast creates incentives to reduce bycatch.',
        calories: '195',
        carbohydrate: null,
        cholesterol: '49 mg',
        color: '',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '15.3 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commerical harvest of sablefish totaled more than 38.6&nbsp;million pounds and were valued at more than $111&nbsp;million.</li>\n<li>Sablefish are the highest valued finfish per pound in Alaska and West Coast commercial fisheries because of their rich oil content.</li>\n</ul>\n</li>\n<li>Gear, habitat impacts, and bycatch:\n<ul>\n<li>Longlines are used to harvest the majority of sablefish in Alaska.</li>\n<li>Increased catch efficiency, because of <a href="https://www.fisheries.noaa.gov/alaska/commercial-fishing/pacific-halibut-and-sablefish-individual-fishing-quota-ifq-program" target="_blank">individual fishing quotas</a>, reduces the number of hooks deployed and effects on bottom habitat.</li>\n<li>Individual fishing quotas reduce bycatch by allowing fishermen to operate at a slower pace and providing incentives to fish efficiently.</li>\n<li>Pot fishing has increased in the Bering Sea and Aleutian Islands, and the Gulf of Alaska, in response to killer whale interactions with fishing.</li>\n<li>West Coast fishermen harvest sablefish with trawls, longlines, and pots.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Sablefish are occasionally caught in Alaska recreational fisheries during their summer migrations onto the continental shelf.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Very high in long-chain omega-3 fatty acids, EPA, and DHA.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Sablefish look much like cod. They are often referred to as black cod, even though they are not actually part of the cod family.</li>\n</ul>\n',
        production: null,
        protein: '13.41 g',
        quote: 'U.S. wild-caught sablefish is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#686963',
        research: null,
        saturatedFattyAcidsTotal: '3.201 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '56 mg',
        source: '<p>Wild-caught off Alaska, Washington, Oregon, and California.</p>\n',
        sugarsTotal: null,
        taste: '<p>Sablefish have high oil content, making them exceptionally flavorful. They are often called butterfish because of their melt-in-your-mouth, oil-rich meat. Sablefish has a short shelf life and must be handled carefully.</p>\n',
        texture: '<p>Sablefish have soft, velvety texture. Their meat has large, white flakes.</p>\n',
        path: '/profiles/sablefish',
        lastUpdate: '03/19/2020 - 16:47',
        href: 'https://line-ready-api.azurewebsites.net/fish/108',
        method: null,
        rel: null,
    },
    {
        id: 107,
        fisheryManagement: '<ul>\n<li><a href="http://www.adfg.alaska.gov/index.cfm?adfg=CommercialByFisherySalmon.main" rel="external" target="_blank">Alaska Department of Fish and Game</a>, <a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a>, and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage sockeye salmon in Alaska.</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/alaska-salmon-fisheries-management-plan" target="_blank">Fishery Management Plan (FMP) for Salmon Fisheries in the EEZ off the Coast of Alaska</a>.\n<ul>\n<li>All management of the salmon fisheries in federal waters is delegated to the State of Alaska and the <a href="http://www.adfg.alaska.gov/index.cfm?adfg=CommercialByFisherySalmon.main" rel="external" target="_blank">Department of Fish and Game</a>. This allows management to remain consistent throughout salmon’s range.\n<ul>\n<li>Managers regulate the fishery based on <a href="http://www.adfg.alaska.gov/FedAidPDFs/FMS14-07.pdf" rel="external">escapement goals</a> to ensure harvests are sustainable. They want enough salmon to be able to escape the fishery and return to fresh water to spawn and replenish the population.</li>\n<li>Salmon fishery management largely relies on in-season assessment of how many salmon return to fresh water to spawn.</li>\n<li>Managers set harvest levels based on these returns. When abundance is high and the number of fish returning is much higher than that needed to meet escapement goals, harvest levels are set higher.</li>\n</ul>\n</li>\n<li>During the fishing season, scientists monitor catch and escapement, comparing current returns with those from previous years to keep an eye on abundance and actively manage the fishery.</li>\n</ul>\n</li>\n<li>Off the West Coast and in Alaska, the <a href="https://www.psc.org/about_treaty.htm" rel="external" target="_blank">Pacific Salmon Treaty</a>, the <a href="https://www.psc.org/" rel="external" target="_blank">Pacific Salmon Commission</a>, and the <a href="https://npafc.org/" rel="external" target="_blank">North Pacific Anadromous Fish Commission</a> help coordinate management, research, and enhancement of shared U.S. and international salmon stocks, including sockeye.</li>\n</ul>\n',
        habitat: '<ul>\n<li>Freshwater lakes, streams, estuaries, and associated wetlands provide vital nursery grounds for sockeye salmon.</li>\n<li>Anadromous sockeye migrate from fresh water habitats to the ocean to further grow, feed, and mature.</li>\n<li>Adult salmon leave the ocean, enter fresh water, and migrate many miles upstream to spawn, usually in the stream or lake of their birth.</li>\n<li>Some sockeye salmon are not anadromous and spend their entire lives in freshwater.</li>\n<li>&nbsp;In the Pacific Northwest, non-anadromous sockeye are known as "kokanee."</li>\n</ul>\n',
        habitatImpacts: 'Fishing gear used to catch sockeye salmon rarely contacts the ocean floor and has little impact on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Northwest Alaska to the Deschutes River in Oregon.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'There are hundreds of sockeye salmon stocks in Alaska and several Pacific stocks. Some stocks are above target population levels, while others are below.',
        populationStatus: '<ul>\n<li>Alaska:\n<ul>\n<li>There are hundreds of stocks of sockeye salmon in Alaska.</li>\n<li>Some stocks are in decline, while others are steady or increasing.</li>\n<li>None are listed under the <a href="https://www.fisheries.noaa.gov/topic/laws-policies#endangered-species-act" target="_blank">Endangered Species Act (ESA)</a>.</li>\n<li><a href="https://www.pcouncil.org/documents/2020/04/2020-preseason-report-iii.pdf/" rel="external">Review of Salmon Escapement Goals in Southeast Alaska, 2019</a>.</li>\n</ul>\n</li>\n<li>West Coast:\n<ul>\n<li>As of 2019, <a href="https://www.fisheries.noaa.gov/species/sockeye-salmon-protected" rel="external">one population of sockeye salmon is listed as endangered and one is listed as threatened</a> under the ESA.</li>\n<li><a href="https://www.pcouncil.org/documents/2020/04/2020-preseason-report-iii.pdf/">Review of 2019&nbsp;Ocean Salmon Fisheries</a>.</li>\n</ul>\n</li>\n<li>Populations are affected by:\n<ul>\n<li>Changes in ocean and climatic conditions.</li>\n<li>Habitat loss from dam construction and urban development.</li>\n<li>Degraded water quality from agricultural and logging practices.</li>\n</ul>\n</li>\n<li>Population conservation efforts include:\n<ul>\n<li>Captive-rearing in hatcheries.</li>\n<li>Removal and modification of dams that obstruct salmon migration.</li>\n<li>Restoration of degraded habitat.</li>\n<li>Acquisition of key habitat.</li>\n<li>Improvements to water quality and instream flow.</li>\n</ul>\n</li>\n<li>The <a href="https://www.westcoast.fisheries.noaa.gov/protected_species/salmon_steelhead/recovery_planning_and_implementation/pacific_coastal_salmon_recovery_fund.html" target="_blank">Pacific Coastal Salmon Recovery Fund</a> supports the restoration of salmon species.</li>\n</ul>\n',
        scientificName: 'Oncorhynchus nerka',
        speciesAliases: '<a href="/species-aliases/red-salmon" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Red salmon</a>, <a href="/species-aliases/blueback-salmon" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Blueback salmon</a>, <a href="/species-aliases/redfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Redfish</a>, <a href="/species-aliases/summer-sockeye" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Summer Sockeye</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/sockeye_salmon.png',
            alt: '',
            title: '',
        },
        speciesName: 'Sockeye Salmon',
        animalHealth: null,
        availability: '<p>Fresh summer and early fall. Frozen, canned, and smoked year-round.</p>\n',
        biology: '<ul>\n<li>Most sockeye salmon are anadromous—they hatch in freshwater streams and rivers or lakes and generally rear in freshwater lakes for 1 to 3 years, after which they reach the smolt stage and migrate to the ocean to feed and grow.</li>\n<li>They typically mature and return to fresh water after 2 to 3 years at sea, but some return earlier or stay at sea longer, between 4 and 5 years.</li>\n<li>Sockeye salmon that return earlier are almost always males and are called "jacks."</li>\n<li>They typically spawn in the summer or fall.</li>\n<li>Females select spawning sites, dig nests (redds) with their tails, and deposit eggs (between 2,000 and 4,500) in the redds.</li>\n<li>Males swim over the redds and fertilize the eggs.</li>\n<li>Females cover their eggs with gravel using their tails.</li>\n<li>The eggs hatch during the winter, and the newly hatched salmon (alevins) remain in the gravel, living off the material stored in their yolk sacs until early spring.</li>\n<li>They then emerge as fry and spend 1 to 3 years in fresh water before reaching the smolt stage and migrating out to the ocean, usually in the spring.</li>\n<li>All sockeye salmon die within a few weeks after spawning.</li>\n<li>They sexually mature around the age of 5, which means their lifespan is about 5 years, although some live longer. Age 4 is more common in the Pacific Northwest.</li>\n<li>While in fresh water, juvenile sockeye salmon feed mainly on zooplankton (tiny floating animals), amphipods (small, shrimp-like crustaceans), and insects.</li>\n<li>In the ocean, sockeye salmon continue to feed on zooplankton but also eat larval and small adult fishes and occasionally squid.</li>\n<li>Fish (including other salmon) and birds feed on juvenile salmon.</li>\n<li>Sharks, lampreys, and marine mammals prey on adult salmon in the ocean. Bears, eagles, and occasionally wolves feed on sockeye salmon in fresh water.</li>\n<li>After salmon spawn and die, <a href="http://www.adfg.alaska.gov/index.cfm?adfg=wildlifenews.view_article&amp;articles_id=97&amp;issue_id=21" rel="external">salmon carcasses</a> are a valuable source of energy and nutrients to the river ecosystem. Carcasses have been shown to improve newly hatched salmon growth and survival by contributing nitrogen and phosphorous compounds to streams.</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch.',
        calories: '168',
        carbohydrate: null,
        cholesterol: '62 mg',
        color: '<p>Reddest flesh of the wild salmon species. The raw meat has a bright-red or orange-red color. Cooked meat remains red.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '8.56 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'Managers set fishing rates to avoid jeopardizing the survival and recovery of sockeye salmon stocks that are below their target levels.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of sockeye salmon totaled more than 265.3 million pounds and were valued at more than $351.5 million.</li>\n<li>Almost all the sockeye salmon harvested in the United States comes from Alaska fisheries. Sockeye salmon are also harvested off the West Coast, mainly Washington, with a small amount harvested in Oregon.</li>\n<li>Sockeye salmon remain the preferred species for canning due to the rich orange-red color of their flesh.</li>\n<li>More than half of the U.S. sockeye salmon catch is sold fresh or frozen rather than canned.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Primarily harvested commercially in <a href="http://www.adfg.alaska.gov/static/fishing/PDFs/commercial/whatkindofboat_cf.pdf" rel="external" target="_blank">net fisheries</a>, including gillnet purse seines and, more rarely, reef nets.</li>\n<li>Gillnetters catch salmon by setting curtain-like nets perpendicular to the sockeyes’ trajectory as they migrate along the coast toward fresh water. The mesh openings on the nets are just large enough to allow males (which are usually larger) to get stuck, or gilled, in the mesh.</li>\n<li>Purse seiners catch salmon by encircling them with a long net and drawing the bottom closed to capture the fish.</li>\n<li>Sockeye salmon are also caught in commercial troll fisheries for Chinook and coho salmon.</li>\n<li>Fishing gear used to catch sockeye salmon rarely contacts the ocean floor and has little impact on habitat.</li>\n<li>Bycatch is low and usually consists of other salmon species.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Sockeye salmon are a favorite catch of recreational fishermen.</li>\n<li>To ensure recreational fisheries are sustainable, West Coast anglers are only allowed to keep a certain amount of salmon per fishing trip.</li>\n<li>In Alaska, regulations vary by area and individual fishery.</li>\n<li>Recreational fisheries in high-use areas (Cook Inlet, Southeast Alaska, Copper River) are regulated through management plans that allocate fish between commercial and recreational fishermen.</li>\n</ul>\n</li>\n<li>Subsistence fishery:\n<ul>\n<li>Salmon is an important source of spiritual and physical sustenance for Western Indian tribes and Alaska natives, and salmon are culturally important to many other residents of these areas.</li>\n<li>Subsistence fishermen use a variety of fishing gear to harvest sockeye salmon.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Sockeye salmon is low in sodium and is a good source of omega-3 fatty acids.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Sockeye is one of the smaller species of Pacific salmon, measuring 1.5 to 2.5 feet in length and weighing 4 to 15 pounds.</li>\n<li>Kokanee (non-anadromous sockeye) rarely exceed 1.2 feet in length.</li>\n<li>Sea-going sockeye salmon have iridescent silver flanks, a white belly, and a metallic green-blue top, giving them their "blueback" name.</li>\n<li>Some fine black speckling may occur on the back, but the large spots typical of other Pacific salmon are absent. There are no spots on the fins, including the tail.</li>\n<li>As sockeye salmon return to their freshwater spawning grounds, their heads turn green and their bodies turn bright red, hence their other common name in Alaska is “red” salmon.</li>\n<li>Spawning males develop a humped back and hooked jaws filled with tiny, visible teeth.</li>\n</ul>\n',
        production: null,
        protein: '21.3 g',
        quote: 'U.S. wild-caught sockeye salmon is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#676e81',
        research: null,
        saturatedFattyAcidsTotal: '1.495 g',
        selenium: '33.7 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '47 mg',
        source: '<p>Alaska to Oregon.</p>\n',
        sugarsTotal: null,
        taste: '<p>Rich flavor that rivals the flavor of Chinook (king) salmon.</p>\n',
        texture: '<p>Firm and fatty, making it rich in omega-3 fatty acids.</p>\n',
        path: '/profiles/sockeye-salmon',
        lastUpdate: '05/05/2020 - 08:48',
        href: 'https://line-ready-api.azurewebsites.net/fish/107',
        method: null,
        rel: null,
    },
    {
        id: 106,
        fisheryManagement: '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/southeast">NOAA Fisheries</a> with the <a href="http://gulfcouncil.org/">Gulf of Mexico</a> and <a href="http://safmc.net/">South Atlantic</a> Fishery Management Councils manage red snapper in the United States.</li>\n<li>In the Gulf of Mexico, managed under the <a href="https://www.fisheries.noaa.gov/management-plan/gulf-mexico-reef-fish-fishery-management-plan">Fishery Management Plan for the Reef Fish Resources of the Gulf of Mexico</a>:\n<ul>\n<li>A rebuilding plan was implemented in 2005&nbsp;with the goal of rebuilding the Gulf of Mexico red snapper stock by 2032.</li>\n<li>Annual catch limits for the commercial and recreational fisheries.</li>\n<li>Commercial fishermen must have a permit to harvest red snapper. Through the individual fishing quota (<a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch shares</a>) program, they may harvest their quotas whenever they choose and must report how much they harvest.</li>\n<li>A minimum size limit protects the spawning stock and juveniles.</li>\n<li>For more information, visit <a href="https://www.fisheries.noaa.gov/southeast/sustainable-fisheries/gulf-mexico-recreational-red-snapper-management">NOAA Fisheries Southeast Regional Office’s Gulf of Mexico Red Snapper Management</a> website.</li>\n</ul>\n</li>\n<li>In the South Atlantic, managed under the <a href="https://www.fisheries.noaa.gov/management-plan/south-atlantic-snapper-grouper-fishery-management-plan">Fishery Management Plan for the Snapper-Grouper Fishery of the South Atlantic Region</a>:\n<ul>\n<li>A rebuilding plan was implemented in 2010 with the goal of rebuilding the South Atlantic red snapper stock by 2044. It allows for limited harvest of red snapper as the population continues to grow.&nbsp;</li>\n<li>In 2010 and 2011, regulations prohibited harvest of red snapper in the South Atlantic to protect the population from too much fishing pressure and to allow the number of fish to increase.</li>\n<li>Limited harvest was allowed in 2012-2014. Harvest was prohibited in 2015 and 2016.</li>\n<li>For more information, visit the <a href="http://safmc.net/regulations/regulations-by-species/red-snapper/">South Atlantic Fishery Management Council’s Red Snapper Regulations</a> website or <a href="https://www.fisheries.noaa.gov/management-plan/south-atlantic-snapper-grouper-fishery-management-plan">NOAA Fisheries Southeast Regional Office’s South Atlantic Snapper-Grouper Management</a> page.</li>\n</ul>\n</li>\n<li>State management consistency with federal management\n<ul>\n<li>In the Gulf of Mexico, recreational state management measures are very different from recreational federal management measures.</li>\n<li>In the South Atlantic, state management measures are fairly consistent with the federal management measures noted above. Some states, such as South Carolina and Georgia, automatically adopt federal regulations while others have separate regulations.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Larval red snapper swim freely within the water column.</li>\n<li>Juveniles live in shallow waters over sandy or muddy bottom habitat.</li>\n<li>Adults live on the bottom, usually near hard structures on the continental shelf that have moderate to high relief (for example, coral reefs, artificial reefs, rocks, ledges, and caves), sloping soft-bottom areas, and limestone deposits.</li>\n</ul>\n',
        habitatImpacts: 'Fishing gear used to harvest red snapper has minimal impacts on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Red snapper are generally found at 30 to 620 feet deep in the Gulf of Mexico and along the eastern coasts of North America, Central America, and northern South America.</li>\n<li>They are rare north of the Carolinas.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Below target level in the Gulf of Mexico and fishing rate promotes population growth. Significantly below target population levels in the South Atlantic. Rebuilding plans are in place.',
        populationStatus: '<ul>\n<li>\n<p>According to the <a href="http://sedarweb.org/sedar-52">2018&nbsp;stock assessment of Gulf of Mexico red snapper</a> the stock is not overfished.&nbsp;The stock is rebuilding and a rebuilding plan is in place. Regulations are in place to ensure that the combined commercial and recreational catches are low enough to prevent overfishing.</p>\n</li>\n<li>\n<p>According to the <a href="http://sedarweb.org/sedar-41">2016 stock assessment of South Atlantic red snapper</a>, the stock is overfished and subject to overfishing. The stock is rebuilding and a rebuilding plan is in place. The overfishing determination was based on fishing mortality rates from 2012-2014 when fishing was occurring on the stock, and harvest was prohibited in the South Atlantic in 2015 and 2016. Spawning biomass has generally been increasing since the mid-1990s, but continues to be well below the target level (currently at 22 percent). It will take time for older, more fertile fish to rebuild; however, the numbers of red snapper predicted by the assessment are the highest on record since the 1970s.</p>\n</li>\n</ul>\n',
        scientificName: 'Lutjanus campechanus',
        speciesAliases: '<a href="/species-aliases/snapper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Snapper</a>, <a href="/species-aliases/genuine-red-snapper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Genuine red snapper</a>, <a href="/species-aliases/american-reds" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">American reds</a>, <a href="/species-aliases/spot-snapper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Spot snapper</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/red_snapper.png',
            alt: '',
            title: '',
        },
        speciesName: 'Red Snapper',
        animalHealth: null,
        availability: '<p>U.S. wild-caught red snapper is available fresh year-round.</p>\n',
        biology: '<ul>\n<li>Red snapper grow at a moderate rate, and may reach 40 inches long and 50 pounds.</li>\n<li>They can live a long time—red snapper as old as 57 years have been reported in the Gulf of Mexico and as old as 51 years in the South Atlantic.</li>\n<li>Females are able to reproduce as early as age 2.</li>\n<li>Males and females spawn from May to October, depending on their location.</li>\n<li>Red snapper feed on fish, shrimp, crab, worms, cephalopods (octopus or squid), and some plankton (tiny floating plants and animals).</li>\n<li>Young red snapper are food for the large carnivorous fish that share their habitat, such as jacks, groupers, sharks, barracudas, and morays.</li>\n<li>Large marine mammals and turtles also eat snapper.</li>\n</ul>\n',
        bycatch: 'Regulations require modified fishing gear to reduce bycatch. Release techniques improve the chance of survival of unintentionally caught fish.',
        calories: '100',
        carbohydrate: null,
        cholesterol: '37 mg',
        color: '<p>The meat is pinkish with yellow tones when raw and turns somewhat lighter when cooked. Red snapper have trademark red skin and red eyes and come from domestic fisheries. To aid in identification, they are usually sold with the skin on.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '1.34 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended level in the Gulf of Mexico. Reduced to end overfishing in the South Atlantic.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In the Gulf of Mexico in 2016, commercial landings of red snapper totaled approximately 6.5 million pounds and were valued at more than $26&nbsp;million.</li>\n<li><span>In the South Atlantic, the commercial sector was closed in 2010-2011 and 2015-2016.</span></li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Commercial fishermen mainly use hook-and-line gear (handlines and electric reels) to harvest red snapper, and sometimes use longlines (in the Gulf of Mexico) and spears.</li>\n<li>Commercial fishermen using hook and line gear attach multiple hooks to a vertical line and weight it at the bottom.</li>\n<li>Recreational anglers primarily use hook and line gear to harvest red snapper.</li>\n<li>Fishermen are encouraged to use <a href="https://www.flseagrant.org/fisheries/venting/" rel="external">venting tools</a> and <a href="http://flseagrant.ifas.ufl.edu/catch_and_release_new/#d.en.298437" rel="external">recompression devices</a> when releasing fish suffering from barotrauma. Barotrauma occurs when the swim bladder of a fish expands as it is quickly brought to the surface. Venting tools help deflate the swim bladder and recompression devices help the fish return to the depth at which it was caught to recompress the air in the swim bladder, preventing serious injury to the fish.</li>\n<li>In the Gulf of Mexico:\n<ul>\n<li>Regulations prohibit fishing in certain areas of the Gulf of Mexico to protect sensitive fish populations and habitats.</li>\n<li>Measures are in place to reduce sea turtle bycatch by longline gear and include limiting times or areas where fishermen can fish, gear restrictions, and a limit on the number of vessels that can participate in the reef fish fishery. &nbsp;In addition, all commercial fishermen must follow special sea turtle release protocols and have specialized gear to improve the chances of incidentally caught sea turtles to survive.</li>\n</ul>\n</li>\n<li>In the South Atlantic:\n<ul>\n<li>Circle hooks are required when fishing for snapper and grouper species north of latitude 28° N. De-hooking devices are also required in the South Atlantic for snapper-grouper species.</li>\n<li>Measures are in place to reduce sea turtle bycatch by fishing gear and include gear restrictions and handling requirements, and a limit on the number of vessels that can participate in the snapper-grouper fishery.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Recreational anglers primarily use hook and line gear to harvest red snapper.</li>\n<li>In the Gulf of Mexico:\n<ul>\n<li>Recreational anglers landed more than 7 million pounds of Gulf of Mexico red snapper in 2016.</li>\n<li>Red snapper must be a minimum size to be caught, and there is a limit on how many red snapper anglers can keep per day.</li>\n<li>Charter vessels and headboats must have a permit to fish in federal waters.</li>\n<li>For-hire vessels must use specialized gear and follow certain sea turtle release protocols.</li>\n</ul>\n</li>\n<li>In the South Atlantic:\n<ul>\n<li>In 2012, 2013, and 2014 the red snapper season was limited.</li>\n<li>In 2010-2011 and 2015-2016, the red snapper fishery was closed.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Red snapper is low in saturated fat and sodium and is a very good source of protein.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Red snapper in deeper waters tend to be redder than those caught in shallower waters.</li>\n<li>They have a long triangular face with the upper part sloping more strongly than the lower.</li>\n<li>Their jaws are equal, with the lower one sometimes slightly projecting.</li>\n<li>They have enlarged canine teeth, which is why they are called “snappers.”</li>\n</ul>\n',
        production: null,
        protein: '20.51 g',
        quote: 'U.S. wild-caught red snapper is a smart seafood choice because it is sustainably managed under rebuilding plans that allow limited harvest by U.S. fishermen.',
        quoteBackgroundColor: '#ab4946',
        research: null,
        saturatedFattyAcidsTotal: '0.285 g',
        selenium: '38.2 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '64 mg',
        source: '<p>U.S. wild-caught from North Carolina to Texas.</p>\n',
        sugarsTotal: null,
        taste: '<p>Red snapper has a sweetly mild but distinctive flavor.</p>\n',
        texture: '<p>Red snapper is semi-firm, lean, and moist.</p>\n',
        path: '/profiles/red-snapper',
        lastUpdate: '09/16/2019 - 11:11',
        href: 'https://line-ready-api.azurewebsites.net/fish/106',
        method: null,
        rel: null,
    },
    {
        id: 105,
        fisheryManagement: '<ul>\n<li>The <a href="http://www.mafmc.org/tilefish/">Mid-Atlantic</a>, <a href="http://safmc.net/regulations/regulations-by-species/golden-tilefish/">South Atlantic</a>, and <a href="http://www.gulfcouncil.org/fishery_management_plans/reef_fish_management.php">Gulf of Mexico Fishery Management Councils</a> develop management measures for the tilefish fisheries in their respective jurisdictions. NOAA Fisheries is responsible for implementing and enforcing these measures.</li>\n</ul>\n<ul>\n<li>The Mid-Atlantic/Southern New England <a href="https://www.fisheries.noaa.gov/management-plan/tilefish-fishery-management-plan" target="_blank">Tilefish Fishery Management Plan</a> includes:\n<ul>\n<li>Annual catch limits.</li>\n<li>Permit requirements.</li>\n<li>Individual Fishing Quota (IFQ) program.</li>\n<li>An overall annual limit on incidental landings of tilefish and a per-trip possession limit.</li>\n<li>Closure of the incidental fishery if the annual limit is reached, prohibiting any additional landings.</li>\n<li>Prohibition of bottom-tending mobile gear (such as trawls) in certain areas in federal waters to reduce impacts on key tilefish habitats.</li>\n</ul>\n</li>\n<li>The South Atlantic <a href="https://www.fisheries.noaa.gov/management-plan/south-atlantic-snapper-grouper-fishery-management-plan" target="_blank">Snapper Grouper Fishery Management Plan</a> includes:\n<ul>\n<li>Permit requirements, including a limited access endorsement program to harvest golden tilefish with longline.</li>\n<li>Annual catch limits by commercial gear type (longline and hook-and-line).</li>\n<li>Commercial trip limits.</li>\n<li>Prohibition of longline gear in certain areas to protect snapper-grouper species spawning sites and live-bottom habitat.</li>\n</ul>\n</li>\n<li>The Gulf of Mexico <a href="https://www.fisheries.noaa.gov/management-plan/gulf-mexico-reef-fish-fishery-management-plan" target="_blank">Reef Fish Fishery Management Plan</a> includes:\n<ul>\n<li>Annual catch limits for recreational and commercial anglers.</li>\n<li>A commercial IFQ program.</li>\n<li>To protect reef fish, sea turtles, and bottom habitat, restrictions on the areas/depths where longlines can be used.</li>\n</ul>\n</li>\n<li>The South Atlantic stock is subject to overfishing according to the 2016 stock assessment. When overfishing occurs, managers take measures to reduce the fishing rate to end overfishing.</li>\n<li>The commercial tilefish fisheries in the Mid-Atlantic and the Gulf of Mexico are managed through IFQ&nbsp;programs.\n<ul>\n<li>Specific details vary by region but, in general, managers allocate a percentage of the annual catch to participating fishermen.</li>\n<li>Fishermen choose when to fish for their allocation throughout the year, ideally when market and weather conditions are best. This also results in a more consistent supply of fish to the consumer and increased safety at sea.</li>\n<li><a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">Catch share programs</a>, such as these IFQ programs, offer fishermen a direct incentive to use sustainable fishing practices – the quota may&nbsp;be increased as fish populations grow, leading to an increase in each fisherman\'s individual allocation and subsequent profits.</li>\n</ul>\n</li>\n<li>For more information, visit the <a href="https://www.greateratlantic.fisheries.noaa.gov/sustainable/species/tilefish/" target="_blank">NOAA Fisheries Greater Atlantic Regional Fisheries Office: Golden Tilefish Information</a> website, the <a href="http://sero.nmfs.noaa.gov/sustainable_fisheries/gulf_fisheries/reef_fish/index.html" target="_blank">NOAA Fisheries Southeast Regional Office: Reef Fish Information</a> website,&nbsp;or the <a href="http://sero.nmfs.noaa.gov/sustainable_fisheries/s_atl/sg/index.html">NOAA Fisheries Southeast Regional Office: Snapper-Grouper Information</a> website.</li>\n</ul>\n',
        habitat: '<ul>\n<li>Tilefish live in water from 250 to 1,500 feet deep where bottom temperatures range from 49 to 58 ° F.</li>\n<li>Individual tilefish are found in and around submarine canyons, where they burrow in mud or sand sediment.</li>\n<li>Tilefish sometimes concentrate in small groups.</li>\n<li>Habitats can be classified as rocks and boulders, pueblo habitats, or vertical burrows. Vertical burrows are the most common type of habitat. Pueblo habitats are found in the side of submarine canyon walls and are named because of their resemblance to the pueblo communities of Native Americans in the southwestern United States.</li>\n<li>Managers have closed four deep water canyons from Georges Bank to the Mid-Atlantic to bottom-tending mobile gear (such as otter trawls) to protect tilefish habitat.</li>\n<li>Many fish and crustacean species are found in and around tilefish habitat because it provides food and shelter.</li>\n</ul>\n',
        habitatImpacts: 'Fishing gear used to catch tilefish rarely contacts the ocean floor and has minimal impacts on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Tilefish are found along the outer continental shelf and upper continental slope of the entire U.S. East Coast and in the Gulf of Mexico.</li>\n<li>They are most abundant from Nantucket Island, Massachusetts, south to Cape May, New Jersey.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels in the Gulf of Mexico, and near target population levels in the Mid-Atlantic and South Atlantic.',
        populationStatus: '<ul>\n<li>According to the 2017&nbsp;<a href="http://www.mafmc.org/s/Golden_Tile_Assessment_Update2017-POPDY.pdf">stock assessment</a>, the Mid-Atlantic stock is not overfished&nbsp;and is not subject to overfishing.&nbsp;</li>\n<li>According to the 2016 <a href="http://sedarweb.org/sedar-25u">stock assessment</a>, the South Atlantic stock is not overfished, and&nbsp;is not subject to overfishing based on 2018 catch data.</li>\n<li>According to the 2011 <a href="http://sedarweb.org/sedar-22">stock assessment</a>, the Gulf of Mexico stock is not overfished&nbsp;and is not subject to overfishing.</li>\n</ul>\n',
        scientificName: 'Lopholatilus chamaeleonticeps',
        speciesAliases: '<a href="/species-aliases/golden-tilefish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Golden tilefish</a>, <a href="/species-aliases/golden-bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Golden bass</a>, <a href="/species-aliases/golden-snapper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Golden snapper</a>, <a href="/species-aliases/great-northern-tilefish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Great northern tilefish</a>, <a href="/species-aliases/rainbow-tilefish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Rainbow tilefish</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/tilefish.png',
            alt: '',
            title: '',
        },
        speciesName: 'Tilefish',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Tilefish grow slowly, up to 43 inches, although the average size harvested is 24 inches.</li>\n<li>They have a long life span, up to 46 years (females) and 39 years (males). These are the oldest tilefish on record, but radiometric dating techniques indicate tilefish may live as long as 50 years.</li>\n<li>Tilefish are able to reproduce when they reach 13 inches long and 3 pounds (approximately 2 to 4 years old).</li>\n<li>Tilefish spawn from March through November in the Atlantic and from January through June in the Gulf of Mexico.</li>\n<li>Spawning peaks in June (Mid-Atlantic) and from April to June (South Atlantic and Gulf of Mexico).</li>\n<li>Females release 2 to 8 million eggs when they spawn.</li>\n<li>Tilefish feed during the day on the bottom, eating shrimp, crabs, clams, snails, worms, anemones, and sea cucumbers.</li>\n<li>Monkfish, spiny dogfish, conger eels, large bottom-dwelling sharks (such as dusky and sandbar sharks), and other tilefish prey on juvenile tilefish.</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch.',
        calories: '96',
        carbohydrate: null,
        cholesterol: '50 mg',
        color: '',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '2.31 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels in the Mid-Atlantic, Gulf of Mexico, and South Atlantic.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2017, commercial landings of tilefish totaled more than 2.6&nbsp;million pounds and were valued at more than $8.3&nbsp;million. The majority of the commercial harvest&nbsp;was landed in New York, Florida, and New Jersey.</li>\n<li>Most of the commercial harvest of tilefish comes from the Mid-Atlantic/Southern New England stock, the largest of the three U.S. tilefish stocks.</li>\n</ul>\n</li>\n<li>Gear types:\n<ul>\n<li>Bottom longline gear catches the majority of the commercial harvest.</li>\n<li>A small amount of tilefish are caught with otter trawls in the Mid-Atlantic and with&nbsp;handlines in the South Atlantic and Gulf of Mexico.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>U.S. recreational fisheries for tilefish are much smaller than the commercial fisheries, but have been increasing in recent years.\n<ul>\n<li>Recreational fishermen can keep a limited number of tilefish per fishing trip in the Mid-Atlantic/Southern New England area.</li>\n<li>There is a limit on how many tilefish recreational fishermen can keep and a limit on the total amount that can be harvested during the year in the South Atlantic.</li>\n<li>The South Atlantic recreational fishery is closed when the annual catch limit is projected to be met.</li>\n<li>In the Gulf of Mexico, tilefish are included in the reef fish aggregate bag limit, along with several other reef fish species, and the fishery is closed when the annual catch limit is projected to be met.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Tilefish are low in sodium. They are a good source of niacin and phosphorus, and a very good source of protein, vitamin B12, and selenium. More information on <a href="https://www.fishwatch.gov/eating-seafood/health">health and seafood</a>.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Tilefish, sometimes known as “the clown of the sea,” are colorful.</li>\n<li>They are iridescent blue-green on the back, with numerous spots of bright yellow and gold. Their bellies are white, and their heads are rosy with blue under the eyes.</li>\n<li>Their pectoral fins are sepia-colored, and the edge of their anal fins is purplish-blue.</li>\n<li>Golden tilefish are easily distinguishable from other members of the tilefish family by the large crest on their head.</li>\n</ul>\n',
        production: null,
        protein: '17.5 g',
        quote: 'U.S. wild-caught tilefish is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#8e8135',
        research: null,
        saturatedFattyAcidsTotal: '0.441 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '53 mg',
        source: '<p>U.S. wild-caught from Massachusetts to Texas.</p>\n',
        sugarsTotal: null,
        taste: '<p>Tilefish has a mild flavor, similar to lobster or crab. Almost all tilefish is sold fresh.</p>\n',
        texture: '<p>Firm and flaky.</p>\n',
        path: '/profiles/tilefish',
        lastUpdate: '02/07/2020 - 13:56',
        href: 'https://line-ready-api.azurewebsites.net/fish/105',
        method: null,
        rel: null,
    },
    {
        id: 104,
        fisheryManagement: '<ul>\n<li>Effective conservation and management of highly migratory species like bluefin tuna require international cooperation as well as strong domestic management.</li>\n<li><a href="https://www.fisheries.noaa.gov">NOAA Fisheries</a>, through the <a href="https://www.fisheries.noaa.gov/topic/atlantic-highly-migratory-species">Atlantic Highly Migratory Species Management Division</a>, manages the Atlantic bluefin tuna fishery in the United States, and sets regulations for the U.S. fishery based on conservation and management recommendations from the <a href="http://www.iccat.int/en/" target="_blank">International Commission for the Conservation of Atlantic Tunas (ICCAT)</a>, consistent with applicable U.S. laws.</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/consolidated-atlantic-highly-migratory-species-management-plan" target="_blank">2006 Consolidated Atlantic Highly Migratory Species Fishery Management Plan</a> and amendments:\n<ul>\n<li>Commercial and recreational fishermen must have a permit to harvest bluefin tuna.</li>\n<li>Annual quota and subquotas.</li>\n<li>Gear restrictions.</li>\n<li>Time/area closures.</li>\n<li>Minimum size limits.</li>\n<li>Federal management for Atlantic tunas applies to state waters as well, except in Maine, Connecticut, and Mississippi. NOAA Fisheries periodically reviews these states’ regulations to make sure they’re consistent with federal regulations.</li>\n</ul>\n</li>\n<li>Regulations do not allow targeted fishing of bluefin tuna in the Gulf of Mexico, an important spawning area for the species.</li>\n<li>NOAA Fisheries published <a href="https://www.fisheries.noaa.gov/action/amendment-7-2006-consolidated-hms-fishery-management-plan-bluefin-tuna-management">several new regulations</a> that are expected to reduce and improve accounting for bluefin tuna dead discards, including gear restricted areas and individual transferable quotas in the pelagic longline fishery, modified quota category allocations, and enhanced monitoring and reporting.</li>\n<li>In 2000, the United States established the <a href="https://www.fisheries.noaa.gov/national/marine-mammal-protection/dolphin-safe">Dolphin-Safe Tuna Tracking and Verification Program</a> to monitor the domestic production and importation of all frozen and processed tuna products nationwide, and to authenticate any associated dolphin-safe claim.</li>\n</ul>\n',
        habitat: '<ul>\n<li>Atlantic bluefin tuna live near the surface in temperate waters but frequently dive to depths of 500 to 1,000 meters.</li>\n<li>They are a&nbsp;highly migratory species. They can migrate thousands of miles across an entire ocean.</li>\n<li>Tagging studies have indicated that bluefin tuna move across the east/west boundary in the Atlantic.</li>\n<li>They tend to spawn in the same areas in the Gulf of Mexico.</li>\n</ul>\n',
        habitatImpacts: 'Fishing gear used to catch bluefin tuna rarely contacts the ocean floor and has minimal impact on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>In the western Atlantic, bluefin tuna are found from Newfoundland to the Gulf of Mexico.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'The population level is unknown for bluefin tuna in the western Atlantic.',
        populationStatus: '<ul>\n<li>The 2017 <a href="http://www.iccat.int/Documents/Meetings/Docs/2017_SCRS_REP_ENG.pdf" rel="external">stock assessment (pages 111 through 114)</a> indicated that the western Atlantic bluefin tuna stock is not subject to overfishing.</li>\n<li>Based on the information in the 2017 stock assessment, NOAA Fisheries has determined that the western Atlantic bluefin tuna stock has an unknown overfished status.</li>\n<li>Scientists estimate that the western stock’s spawning stock biomass (a measure of the amount of bluefin that are able to reproduce) has been increasing since about 2004, after two decades of stability.</li>\n<li>For the 2017 stock assessment, the scientists were unable to determine if the stock is rebuilt under the 20-year rebuilding plan. Based on this information, ICCAT adopted an <a href="https://www.iccat.int/Documents/Recs/compendiopdf-e/2017-06-e.pdf">interim conservation and management plan for the stock for 2018 through 2020</a>.</li>\n<li>Despite the longstanding uncertainty in estimating future recruitment, catch levels have been set at a level that is expected to support the maximum sustainable yield.</li>\n<li>ICCAT selected a catch limit for 2018 through 2020 that is a 17% increase relative to the level in effect for 2015 through 2017. This level provides a buffer from the top end of the range in the scientific advice to ensure an additional layer of precaution given the uncertainties that are not fully accounted for in the assessment.</li>\n<li>The Gulf of Mexico is the only known spawning area for the western stock of Atlantic bluefin tuna, and protecting these fish during spawning can help the long-term rebuilding of the depleted bluefin tuna population.</li>\n</ul>\n',
        scientificName: 'Thunnus thynnus',
        speciesAliases: '<a href="/species-aliases/tuna" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Tuna</a>, <a href="/species-aliases/bluefin-tuna" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Bluefin tuna</a>, <a href="/species-aliases/toro" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Toro</a>, <a href="/species-aliases/maguro" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Maguro</a>, <a href="/species-aliases/giant-bluefin" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Giant bluefin</a>, <a href="/species-aliases/northern-bluefin-tuna" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Northern bluefin tuna</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/atlantic_bluefin_tuna_0.png',
            alt: '',
            title: '',
        },
        speciesName: 'Western Atlantic Bluefin Tuna',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Bluefin tuna grow more slowly than other tuna.</li>\n<li>They have a long lifespan, up to 20 years or more and generally don’t spawn until they are about 8 years old.&nbsp;</li>\n<li>They spawn from mid-April to June, mainly in the Gulf of Mexico.</li>\n<li>Females can produce up to 10 million eggs a year.</li>\n<li>The eggs are fertilized in the water column and hatch in about 2 days.</li>\n<li>Bluefin tuna are top predators.</li>\n<li>Juveniles eat fish, squid, and crustaceans, and adults feed mainly on baitfish such as herring, bluefish, and mackerel.</li>\n<li>Sharks, marine mammals (including killer whales and pilot whales), and large fish feed on bluefin tuna. <a href="https://www.fishwatch.gov/profiles/bluefish">Bluefish</a> and seabirds also prey upon juvenile bluefin tuna.</li>\n</ul>\n',
        bycatch: 'Fishing gear used by U.S. fishermen to target schools of bluefin tuna is fairly selective, and allows for the live release of any unintentionally caught species.',
        calories: '144',
        carbohydrate: null,
        cholesterol: '38 mg',
        color: '<p>Deep red when uncooked. When cooked, the meat is an off-white or ivory color.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '4.9 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended level.',
        harvest: '<ul>\n<li>ICCAT implemented harvest quotas for the western Atlantic bluefin tuna stock in 1982. Since then, catch has been relatively stable.</li>\n<li>In 2016, U.S. commercial and recreational fishermen caught 1,026&nbsp;metric tons of western Atlantic bluefin tuna (landings and dead discards).</li>\n<li>In 2016, U.S. catch comprised 54 percent of total western Atlantic bluefin tuna catch and 5&nbsp;percent of Atlantic-wide bluefin tuna catch (including the Mediterranean Sea).</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>U.S. fishermen harvest bluefin tuna with handgear (rod-and-reel, handline, and harpoon) and purse seines.</li>\n<li>Although fishermen are not allowed to use pelagic longline gear in the United States to target bluefin tuna directly, regulations allow them to retain a limited number of bluefin tuna caught incidentally while fishing for other species such as swordfish and yellowfin tuna.</li>\n<li>Fishermen generally target schools of bluefin tuna, and their fishing gear is fairly selective and allows for the live release of any unintentionally caught species.</li>\n<li>Fishing gear used to catch bluefin tuna rarely contacts the ocean floor and therefore has minimal impact on habitat.</li>\n<li>NOAA Fisheries requires U.S. commercial fishermen who fish for yellowfin tuna, swordfish, and other species with pelagic longlines in the Gulf of Mexico to use "weak hooks," a type of hook designed to reduce the incidental catch and bycatch of Atlantic bluefin tuna.</li>\n<li>Fishing for bluefin tuna in two known hotspots—Cape Hatteras, North Carolina and the Gulf of Mexico—is strictly regulated.</li>\n</ul>\n</li>\n<li>Commercial harvest:\n<ul>\n<li>In 2016, commercial landings of Atlantic bluefin tuna totaled 691 metric tons dressed weight and were valued at $11 million.</li>\n<li>Ex-vessel prices depend on a number of factors, including the quality of the fish (e.g., freshness, fat content, method of storage), the weight of the fish, the supply of fish, and consumer demand.</li>\n<li>Exports vary from year to year. In 2016, 43 percent of U.S. Atlantic bluefin catch was exported, mainly to sushi markets in Japan.</li>\n<li>Exports of Atlantic bluefin tuna generally depend on the amount of commercial landings and Japanese yen/U.S. dollar exchange rates.</li>\n</ul>\n</li>\n<li>Recreational U.S. fishery:\n<ul>\n<li>Bluefin tuna may not be sold.</li>\n<li>Bluefin tuna must be larger than 27 inches to be retained.</li>\n<li>Depending on the recreational fishery (e.g., private vessels and charter/headboat vessels), limits on the amount and size of fish that fishermen can keep per fishing trip vary. For the latest information on current retention limits, visit the <a href="https://hmspermits.noaa.gov/" target="_blank">NOAA Fisheries HMS Permit Shop</a>.</li>\n<li>All released bluefin tuna must be released without removing the fish from the water and in a manner that will maximize its survival.</li>\n<li>Recreational fishing for highly migratory species such as bluefin tuna provides significant economic benefits to coastal communities through individual angler expenditures, recreational charters, tournaments, and the shoreside businesses that support those activities.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Bluefin tuna is a very good source of protein, thiamin, selenium, vitamin B6, and omega-3 fatty acids.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Atlantic bluefin tuna have large, torpedo-shaped bodies that are nearly circular in cross-section.</li>\n<li>They are the largest of the tuna species and can reach up to 13 feet and 2,000 pounds.</li>\n<li>They have dark blue-black on the back and white on the lower sides and belly.</li>\n<li><span>Atlantic bluefin tuna h</span>ave colorless lines alternating with rows of colorless spots on their lower sides.</li>\n<li>The second fin on their back (dorsal fin) is reddish brown, and they have short pectoral fins.</li>\n<li>These characteristics separate this species from other members of the tuna genus, <em>Thunnus</em>.</li>\n</ul>\n',
        production: null,
        protein: '23.33 g',
        quote: 'U.S. wild-caught western Atlantic bluefin tuna is a smart seafood choice because it is sustainably managed under a conservation and management plan that allows limited harvest by U.S. fishermen.',
        quoteBackgroundColor: '#517599',
        research: null,
        saturatedFattyAcidsTotal: '1.257 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '39 mg',
        source: '<p>U.S. wild-caught from Maine to Louisiana.</p>\n',
        sugarsTotal: null,
        taste: '<p>Bluefin has a distinctive flavor. With its high fat content, it is especially prized for sushi and sashimi. Cooking is generally not advised as it produces a strong fish taste and odor.</p>\n',
        texture: '<p>Bluefin tuna flesh is the darkest and fattiest of any tuna. A higher fat content in bluefin tuna is equated with a higher-quality product. The flesh has the firmness and appearance of beef steaks.</p>\n',
        path: '/profiles/western-atlantic-bluefin-tuna',
        lastUpdate: '09/03/2019 - 14:11',
        href: 'https://line-ready-api.azurewebsites.net/fish/104',
        method: null,
        rel: null,
    },
    {
        id: 103,
        fisheryManagement: '<ul>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the widow rockfish fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/groundfish/fishery-management-plan/">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Permits and limited entry to the fishery.</li>\n<li>Limit on how much may be harvested in one fishing trip.</li>\n<li>Certain seasons and <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_closures/groundfish_closed_areas.html">areas are closed</a> to fishing.</li>\n<li>Gear restrictions help reduce bycatch and impacts on habitat.</li>\n<li>A <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/groundfish_catch_shares/index.html">trawl rationalization catch share program</a> that includes:\n<ul>\n<li>Catch limits based on the population status of each fish stock and divided into shares that are allocated to individual fishermen or groups.</li>\n<li>Provisions that allow fishermen to decide how and when to catch their share.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage widow rockfish as part of the other rockfish complex in the Gulf of Alaska.</li>\n<li>Managed under the&nbsp;<a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Fishery Management Plan for Groundfish of the Gulf of Alaska</a>:\n<ul>\n<li>There is no directed fishery for this species in Alaska, and only minor amounts are landed incidentally in other fisheries.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Widow rockfish are found at depths ranging from 80 to 1,200 feet.</li>\n<li>Both juveniles and adults exist in large schools and are found above large jagged rocks and near cobblestone.</li>\n</ul>\n',
        habitatImpacts: 'Most fishing gear used to harvest widow rockfish rarely contacts the ocean floor and has minimal impacts on habitat. Area closures and gear restrictions protect sensitive rocky, cold-water coral and sponge habitats from bottom trawl gear.',
        imageGallery: null,
        location: '<ul>\n<li>Widow rockfish are found between the Gulf of Alaska and northern Baja California.</li>\n<li>Adults are rarely seen in California and are most abundant from British Columbia to northern California.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels on the Pacific Coast.',
        populationStatus: '<ul>\n<li>According to the <a href="http://www.pcouncil.org/wp-content/uploads/2016/04/WidowAssessment2015.pdf">2019&nbsp;stock assessment</a><a href="https://www.pcouncil.org/documents/2019/10/stock-assessment-update-status-of-widow-rockfish-sebastes-entomelas-along-the-u-s-west-coast-in-2019-october-21-2019.pdf">,</a> the West Coast stock of widow rockfish is not overfished and not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/data_products/species_management.cfm">2018&nbsp;catch data</a>.\n<ul>\n<li>Due to the quick expansion of the West Coast fishery, West Coast widow rockfish populations were depleted and declared overfished in 2001.</li>\n<li>Fishery managers implemented a rebuilding plan in 2001, and declared the stock rebuilt in 2011.</li>\n</ul>\n</li>\n<li>In the Gulf of Alaska, widow rockfish is part of the other rockfish complex.\n<ul>\n<li>According to the <a href="https://www.afsc.noaa.gov/REFM/Docs/2017/GOAorock.pdf">2017 stock assessment</a>, the status of this complex is unknown.</li>\n<li>The stock complex is not subject to overfishing.</li>\n</ul>\n</li>\n</ul>\n',
        scientificName: 'Sebastes entomelas',
        speciesAliases: '<a href="/species-aliases/brown-bomber" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Brown bomber</a>, <a href="/species-aliases/soft-brown" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Soft brown</a>, <a href="/species-aliases/brownie" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Brownie</a>, <a href="/species-aliases/belinda-bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Belinda bass</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/widow_rockfish.png',
            alt: 'Widow Rockfish',
            title: '',
        },
        speciesName: 'Widow Rockfish',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Widow rockfish reach lengths up to 24 inches and may live as long as 60 years, but fish older than 20 are uncommon.</li>\n<li>Males grow faster than females, but females reach larger sizes.</li>\n<li>Widow rockfish mature at about 8 years old or when they are about 16.5 inches long.</li>\n<li>Widow rockfish are internal fertilizers, and larvae are released alive in January or February.</li>\n<li>Juveniles feed on krill and copepods.</li>\n<li>Older fish feed on juvenile crabs, amphipods, krill, and small fishes.&nbsp;</li>\n<li>Chinook salmon and northern fur seals feed on juvenile widow rockfish.</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch of overfished and protected species.',
        calories: '94',
        carbohydrate: null,
        cholesterol: '35 mg',
        color: '<p>Raw flesh varies from light pink or translucent, to pink, to red, and turns white when cooked.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '1.6 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>In 2018, commercial landings of widow rockfish on the West Coast totaled more than 22.9&nbsp;million pounds and were valued at more than $5.7 million.&nbsp;</li>\n<li>The majority of the catch comes from Oregon and Washington and the remainer&nbsp;comes from California and Alaska.</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Primarily harvested with midwater trawl gear, which has minimal impacts on ocean bottom habitats. To a lesser extent, harvested with bottom trawl gear.</li>\n<li>Midwater and bottom trawls may sometimes catch other species of fish, including overfished and protected species.\n<ul>\n<li>Gear restrictions, closed areas, and catch share programs limit when, where, and how much trawl fishermen can harvest to reduce bycatch of other species.</li>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_closures/rockfish_areas.html">Rockfish conservation areas</a> eliminate fishing in areas on the West Coast where overfished rockfish species co-occur with target stocks, like widow rockfish. These closed areas help prevent bycatch of overfished rockfish.</li>\n</ul>\n</li>\n<li>Widow rockfish are often caught incidentally in the Pacific whiting fishery\n<ul>\n<li>Managers are working to reduce incidental catch through the use of annual catch limits and catch shares.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Recreational anglers fish for widow rockfish, but they comprise only a minor part of recreational groundfish fisheries.</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Widow rockfish are dusky-brown with traces of light yellow and red.</li>\n<li>They have black fin membranes and a strongly slanted anal fin.</li>\n<li>They have weak or reduced (short) head spines and a mouth that is relatively small when compared to other rockfish.</li>\n</ul>\n',
        production: null,
        protein: '18.8 g',
        quote: 'U.S. wild-caught widow rockfish is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations. ',
        quoteBackgroundColor: '#554b3d',
        research: null,
        saturatedFattyAcidsTotal: '0.4 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '60 mg',
        source: '<p>U.S. wild-caught from the central Gulf of Alaska to northern Baja California.</p>\n',
        sugarsTotal: null,
        taste: '<p>Delicate, nutty flavor.</p>\n',
        texture: '<p>Lean with a medium-fine texture.</p>\n',
        path: '/profiles/widow-rockfish',
        lastUpdate: '04/28/2020 - 17:01',
        href: 'https://line-ready-api.azurewebsites.net/fish/103',
        method: null,
        rel: null,
    },
    {
        id: 102,
        fisheryManagement: '<ul>\n<li><a href="http://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="http://www.pcouncil.org/">Pacific Fishery Management Council</a> manage this fishery on the West Coast.</li>\n<li>Managed under the <a href="http://www.pcouncil.org/highly-migratory-species/fishery-management-plan-and-amendments/">Fishery Management Plan for U.S. West Coast Fisheries for Highly Migratory Species</a>:\n<ul>\n<li>Commercial fishermen must have permits and maintain logbooks.</li>\n<li>Gear restrictions and operational requirements.</li>\n</ul>\n</li>\n<li><a href="https://www.fisheries.noaa.gov/region/pacific-islands">NOAA Fisheries</a> and <a href="http://wpcouncil.org/">Western Pacific Fishery Management Council</a> manage this fishery in the Pacific Islands.</li>\n<li>Managed under the <a href="http://www.wpcouncil.org/fishery-plans-policies-reports/pelagics_fe/">Fishery Ecosystem Plan for the Pelagic Fisheries of the Western Pacific</a>:\n<ul>\n<li>Commercial fishermen must have permits and maintain logbooks.</li>\n<li>Longlines are prohibited in certain areas to protect endangered Hawaiian monk seals and reduce the potential for gear conflicts and localized stock depletion.</li>\n<li>Longline fishermen must carry a <a href="https://www.fisheries.noaa.gov/topic/enforcement/vessel-monitoring">vessel monitoring system</a>—a satellite transponder that provides real-time position updates and tracks vessel movements to enforce regulations.</li>\n<li>In Hawaii and American Samoa longline fishermen must also carry onboard observers when requested.</li>\n<li>Longline vessel owners and operators are required to attend annual protected species workshops.</li>\n<li>There are no management measures specific to mahimahi, because catch trends indicate that regulations are not necessary.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Pacific mahimahi live near the surface in tropical and subtropical waters around the world.</li>\n<li>They swim together in schools as juveniles, but older fish are usually found alone.</li>\n<li>They travel seasonally as adults with changes in water temperature.</li>\n</ul>\n',
        habitatImpacts: 'Fishing gear used to catch mahimahi rarely contacts the ocean floor and has minimal impacts on habitat. ',
        imageGallery: null,
        location: '<ul>\n<li>Pacific mahimahi are found in the Pacific and Western Pacific and are caught from California to Hawaii and the U.S. Pacific Island territories.</li>\n<li>Most of the U.S. commercial harvest of Pacific mahimahi comes from Hawaii.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'The population level is unknown, but presumed stable.',
        populationStatus: '<ul>\n<li>Although the population is not formally assessed, scientists assume mahimahi populations are stable because the species is highly productive and widely distributed throughout the tropical/subtropical Pacific.&nbsp;</li>\n<li>Pacific mahimahi’s overfishing status is unknown.</li>\n<li>Mahimahi can handle relatively high fishing rates, but precautionary management seeks to maintain current harvest levels.</li>\n</ul>\n',
        scientificName: 'Coryphaena hippurus',
        speciesAliases: '<a href="/species-aliases/dolphinfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Dolphinfish</a>, <a href="/species-aliases/dorado" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Dorado</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/atlantic_mahimahi_dolphinfish.png',
            alt: 'Pacific MahiMahi',
            title: 'Pacific MahiMahi',
        },
        speciesName: 'Pacific Mahimahi',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Pacific mahimahi grow fast, up to 7 feet and 88 pounds.</li>\n<li>They live up to 5 years.</li>\n<li>They are capable of reproducing at 4 to 5 months old.</li>\n<li>They are believed to spawn every 2 to 3 days throughout their entire spawning season (perhaps year-round), releasing 33,000 to 66,000 eggs each time.</li>\n<li>Pacific mahimahi are top predators that feed in surface waters during the day.</li>\n<li>They eat a wide variety of species, including small pelagic fish, juvenile tuna, invertebrates, billfish, jacks, pompano, and pelagic larvae or nearshore, bottom-living species.</li>\n<li>Predators include large tuna, marine mammals, marlin, sailfish, and swordfish.</li>\n<li>NOAA Fisheries</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch in the tuna and swordfish fisheries that incidentally catch the most commercially available mahimahi.',
        calories: '85',
        carbohydrate: null,
        cholesterol: '73 mg',
        color: '<p>The raw flesh is pinkish to grayish-white, although along the lateral line the flesh is dark. When cooked, the meat is off-white.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '0.7 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended level.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>U.S. commercial fisheries in the western and central Pacific harvest the majority of U.S. mahimahi.</li>\n<li>In 2017, commercial landings of Pacific mahimahi harvested from the U.S. Pacific Islands totaled 954,000&nbsp;pounds and were valued at more than $3.4&nbsp;million. The majority of the catch comes from Hawaii.</li>\n<li>In 2017, commercial landings of Pacific mahimahi on the U.S. West Coast totaled approximately 25,000 pounds and were valued at approximately $52,800.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Most mahimahi are harvested using troll and handlines. Mahimahi may also be caught incidentally in pelagic longline fisheries for tuna and swordfish.</li>\n<li>The amount of bycatch associated with the mahimahi fishery varies. U.S. pelagic longline fishermen, who target tuna and swordfish and who may incidentally catch mahimahi, are required to use specific tools and handling techniques to mitigate bycatch of turtles and marine mammals.</li>\n<li>Fishing gear used to catch mahimahi rarely contacts the seafloor so habitat impacts are minimal.</li>\n<li>Time-area closures also limit and prevent interactions between pelagic longline gear and non-target species.</li>\n<li>Onboard observers are required in some fisheries to record any interactions with sea turtles, seabirds, and marine mammals.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Pacific mahimahi are a popular recreational fish.</li>\n<li>In 2017, recreational fishermen harvested more than 851,800 pounds of mahimahi in the U.S. Pacific Islands.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Mahimahi is low in saturated fat and is a good source of vitamin B12, phosphorus, potassium, protein, niacin, vitamin B6, and selenium.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Brightly colored back is an electric greenish blue, lower body is gold or sparkling silver, and sides have a mixture of dark and lights spots.</li>\n<li>Bright pattern fades almost immediately after mahimahi is harvested.</li>\n<li>Distinguished from the pompano dolphin by the number of dorsal fin rays and a very wide, square tooth patch on the tongue.</li>\n</ul>\n',
        production: null,
        protein: '18.5 g',
        quote: 'U.S. wild-caught mahimahi is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#83a54b',
        research: null,
        saturatedFattyAcidsTotal: '0.188 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '88 mg',
        source: '<p>U.S. wild-caught from Hawaii, California, U.S. Pacific Island territories, and on the high seas.</p>\n',
        sugarsTotal: null,
        taste: '<p>Mahimahi has a sweet, mild flavor. For a milder flavor, trim away the darker portions of the meat.</p>\n',
        texture: '<p>Mahimahi is lean and fairly firm with large, moist flakes.</p>\n',
        path: '/profiles/pacific-mahimahi',
        lastUpdate: '06/29/2020 - 13:52',
        href: 'https://line-ready-api.azurewebsites.net/fish/102',
        method: null,
        rel: null,
    },
    {
        id: 101,
        fisheryManagement: '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage the Pacific ocean perch fishery in Alaska.</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Gulf of Alaska</a> and <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-bering-sea-and-aleutian-islands-management-plan">Bering Sea/Aleutian Islands</a> Groundfish Fishery Management Plans:\n<ul>\n<li>Permits are required and the number of available permits is limited to control the amount of fishing.</li>\n<li>Managers determine how much Pacific ocean perch can be caught and then allocate this catch quota among groups of fishermen.&nbsp;</li>\n<li>Catch is monitored through record keeping, reporting requirements, and observer monitoring.</li>\n<li>A percentage of the Aleutian Islands catch is allocated to the <a href="https://www.fisheries.noaa.gov/alaska/commercial-fishing/community-development-quota-cdq-program">Community Development Quota Program</a>, which benefits fishery-dependent communities in western Alaska. The rest is allocated among the BSAI trawl sectors, based on historic harvest and future harvest needs, to improve retention and utilization of fishery resources by the trawl fleet.</li>\n<li>The <a href="https://www.fisheries.noaa.gov/alaska/commercial-fishing/central-goa-rockfish-program">Central Gulf of Alaska Rockfish Program</a>&nbsp;allows harvesters to fish together in cooperatives. These cooperatives are allocated specific amounts of the allowed catches of rockfish and species harvested incidentally to rockfish. The goal of the program is to spread out the fishery in time and space, allowing fishermen more flexibility to sell their catch for better prices and reducing the pressure of what was once an approximately 2-week fishery in July.&nbsp;</li>\n</ul>\n</li>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the Pacific ocean perch fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/groundfish/fishery-management-plan/">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>NOAA Fisheries declared the Pacific coast stock of Pacific ocean perch overfished in 1999. The council adopted a rebuilding plan for the stock in 2000, which prohibited&nbsp;a directed fishery for the species. The stock was declared rebuilt in 2017.</li>\n<li>The regulations listed below that apply to all Pacific groundfish fisheries also provide for the conservation and management of Pacific ocean perch:\n<ul>\n<li>Limit on how much may be harvested in one fishing trip.</li>\n<li>Certain seasons and areas are closed to fishing.&nbsp;</li>\n<li>Gear restrictions help reduce bycatch and impacts on habitat.&nbsp;​</li>\n<li>A <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/groundfish_catch_shares/index.html">trawl rationalization catch share program</a> that includes:\n<ul>\n<li>Catch limits that are based on the population status of each fish stock and divided into shares that are allocated to individual fishermen or groups.&nbsp;</li>\n<li>Provisions that allow fishermen to decide how and when to catch their share.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p>&nbsp;</p>\n',
        habitat: '<ul>\n<li>Pacific ocean perch live in deeper waters of the upper continental slope and along the edge of the continental shelf.&nbsp;</li>\n<li>Larvae and young juveniles live near the surface, while older juveniles and adults live near the ocean floor.&nbsp;</li>\n<li>Adults prefer sandy and rocky ocean bottoms, areas with vertical relief, and ocean habitats with structure-forming invertebrates, like coral.&nbsp;</li>\n<li>Adults migrate to shallow waters in the summer and offshore in the fall and winter to spawn and live.</li>\n</ul>\n',
        habitatImpacts: 'Area closures and gear restrictions protect sensitive rocky, cold-water coral and sponge habitats from bottom trawl gear.',
        imageGallery: null,
        location: '<ul>\n<li>Pacific ocean perch are found off the coast of North America from California to the Western Aleutian Islands in Alaska.&nbsp;</li>\n<li>They are less commonly found south of Oregon and are particularly rare in Southern California.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels.',
        populationStatus: '<ul>\n<li>According to the 2018&nbsp;stock assessment, the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pacific-ocean-perch-stock-gulf-alaska">Gulf of Alaska</a> stock of Pacific ocean perch is not overfished and not subject to overfishing.</li>\n<li>According to the 2018&nbsp;stock assessment, the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pacific-ocean-perch-stock-bering-sea-aleutian-islands">Bering Sea/Aleutian Islands</a> stock of Pacific ocean perch is not overfished and not subject to overfishing.</li>\n<li>According to the 2017 stock assessment, the <a href="http://www.pcouncil.org/wp-content/uploads/2017/10/F4_Att1_Full_E-only_PacificOceanPerch2017_Assessment_NOV2017BB.pdf">Pacific Coast</a> stock of Pacific ocean perch is rebuilt, not overfished, and not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/data_products/species_management.cfm">2018&nbsp;catch data</a>.</li>\n</ul>\n',
        scientificName: 'Sebastes alutus',
        speciesAliases: '<a href="/species-aliases/pop" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">POP</a>, <a href="/species-aliases/rockfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Rockfish</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/pacific_ocean_perch.png',
            alt: 'Pacific Ocean Perch',
            title: 'Pacific Ocean Perch',
        },
        speciesName: 'Pacific Ocean Perch',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Pacific ocean perch grow slowly and may live to be 98 years old.&nbsp;</li>\n<li>They grow to about 20 inches long and weigh about 4 pounds.&nbsp;</li>\n<li>They do not reproduce until they are around 10 years old.&nbsp;</li>\n<li>Depending on their size, females can produce between 10,000 and 300,000 eggs.</li>\n<li>Pacific ocean perch mate in the fall. Eggs develop inside the female and receive some nourishment from the mother. &nbsp;</li>\n<li>Eggs hatch internally, and females release the larvae in the spring.&nbsp;</li>\n<li>Larvae eat small zooplankton (tiny floating organisms).</li>\n<li>Juveniles and adults feed on copepods and krill, and adults will also eat small fishes. &nbsp;</li>\n<li>Pacific ocean perch move off ocean bottom habitats during the day, following daily migrations of krill.&nbsp;</li>\n<li>Seabirds, other rockfish, salmon, lingcod, and other large bottom-dwelling fish feed on juveniles. Sablefish, halibut, and sperm whales feed on adult Pacific ocean perch.&nbsp;</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch.',
        calories: '94',
        carbohydrate: null,
        cholesterol: '42 mg',
        color: '<p>Whole fish should have shiny and bright skin. The raw flesh is white, but turns opaque white when cooked.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '1.63 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>In 2018, commercial landings of Pacific ocean perch totaled more than 123.6&nbsp;million pounds and were valued at more than $25.8&nbsp;million.</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Bottom trawls are primarily used to catch Pacific ocean perch, although pelagic trawls are also used.</li>\n<li>Bottom trawls can contact the ocean floor and impact habitats, depending on the type and sensitivity of the habitat and the size of the gear.</li>\n<li>Trawls cause minimal damage when targeting species over soft, sandy, or muddy ocean bottoms.</li>\n<li>For Alaska and the West Coast, NOAA Fisheries and the regional fishery management councils have implemented large closed areas to protect sensitive rocky, cold-water coral and sponge habitats from bottom trawls.</li>\n<li>In Alaska, trawl fishermen targeting Pacific ocean perch might incidentally catch Pacific cod, arrowtooth flounder, rockfish, and sablefish. Halibut, salmon, and crab may also be caught as bycatch.\n<ul>\n<li>Pacific cod and sablefish are generally retained due to their high commercial value.</li>\n<li><a href="https://www.npfmc.org/wp-content/PDFdocuments/bycatch/Bycatchflyer913.pdf">Bycatch limits</a> prevent too much bycatch of other species from being caught. If a target groundfish fishery exceeds a bycatch limit, the fishery may close for the remainder of the season.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Low in saturated fat and very high in selenium, phosphorous, and vitamin B12.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Pacific ocean perch are light red with several diffuse, olive-green patches on their upper backs where the body begins to narrow towards the tail fin. They also possess a prominent, cone-shaped knob on their lower jaw.</li>\n</ul>\n',
        production: null,
        protein: '18.62 g',
        quote: 'U.S. wild-caught Pacific ocean perch is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#bd5c61',
        research: null,
        saturatedFattyAcidsTotal: '0.244 g',
        selenium: '43.3 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '75 mg',
        source: '<p>U.S. wild-caught from Alaska to California.</p>\n',
        sugarsTotal: null,
        taste: '<p>Delicate, nutty flavor.</p>\n',
        texture: '<p>Lean, fairly firm, with a fine flake.</p>\n',
        path: '/profiles/pacific-ocean-perch',
        lastUpdate: '04/28/2020 - 11:21',
        href: 'https://line-ready-api.azurewebsites.net/fish/101',
        method: null,
        rel: null,
    },
    {
        id: 100,
        fisheryManagement: '<ul>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the Pacific shortfin mako shark fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/highly-migratory-species/fishery-management-plan-and-amendments/">Fishery Management Plan for U.S. West Coast Fisheries for Highly Migratory Species</a>:\n<ul>\n<li>Permits are required to fish for highly migratory species, including shortfin mako sharks, and fishermen must maintain logbooks documenting their catch.</li>\n<li>Annual commercial harvest guidelines (a general objective for how much can be caught).</li>\n<li>Closed areas protect endangered turtles.</li>\n<li>Fishermen are required to take a training course on safe handling and release of protected species.</li>\n<li>Mandatory placement (about 20 percent coverage) of at-sea observers on commercial drift gillnet vessels to monitor catch, bycatch, and fishing effort.</li>\n<li>Fishing times and areas are tightly managed to reduce the risk of catching protected species, such as sea turtles, whales, and dolphins.&nbsp;</li>\n</ul>\n</li>\n<li><a href="https://www.fisheries.noaa.gov/region/pacific-islands">NOAA Fisheries</a> and the <a href="http://wpcouncil.org/">Western Pacific Regional Fishery Management Council</a> manage the Pacific shortfin mako shark fishery in the Pacific Islands.</li>\n<li>Managed under the <a href="https://www.wpcouncil.org/documents/FEPs/PacificPelagicFEP/December12005PelagicFEP.pdf">Fishery Ecosystem Plan for the Pelagic Fisheries of the Western Pacific</a>:\n<ul>\n<li>Entry to this fishery is limited to a maximum of 164 vessels.&nbsp;</li>\n<li>Permits and logbooks are required.&nbsp;</li>\n<li>Observers are required on all Hawaii-based longline vessels.&nbsp;</li>\n<li><a href="https://www.fisheries.noaa.gov/topic/enforcement/vessel-monitoring">NOAA Fisheries vessel monitoring system (VMS) program</a> requires longline boats to be equipped with a satellite transponder that provides real-time vessel position updates and tracks vessel movements.</li>\n<li>Longlines are prohibited in certain areas to protect endangered Hawaiian monk seals and reduce the potential for gear conflicts and localized stock depletion.&nbsp;</li>\n<li>Vessels operating under longline general permits must carry special gear to release incidentally hooked or entangled sea turtles. &nbsp;</li>\n<li>There are no management measures specific to Pacific shortfin mako shark, because in the Western Pacific they’re only harvested incidentally in the longline fishery for swordfish.&nbsp;</li>\n</ul>\n</li>\n<li>The <a href="https://www.fisheries.noaa.gov/national/laws-and-policies/shark-conservation-act">Shark Conservation Act</a> requires that all sharks, with one exception, be brought to shore with their fins naturally attached.</li>\n<li>Management of highly migratory species, like mako sharks, is complicated because the species migrate thousands of miles across international boundaries and are fished by many nations.&nbsp;\n<ul>\n<li>Two international organizations, the <a href="http://www.iattc.org/HomeENG.htm" rel="external">Inter-American Tropical Tuna Commission (IATTC)</a>&nbsp;and the <a href="https://www.wcpfc.int/" rel="external">Western and Central Pacific Fisheries Commission (WCPFC)</a>, manage highly migratory species, like sharks, internationally.</li>\n<li>No international measures are in place specific to shortfin mako sharks, but both organizations have passed shark conservation and management measures that combat shark finning practices and encourage further research and periodic stock assessment efforts for sharks.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Shortfin mako sharks live near the surface in tropical and temperate oceans.&nbsp;</li>\n<li>Juveniles are common in coastal waters, and adults are primarily found offshore. &nbsp;</li>\n<li>They are highly migratory and capable of swimming long distances across entire oceans.&nbsp;</li>\n</ul>\n',
        habitatImpacts: 'Gear used to catch shortfin mako does not contact the ocean floor, so there is no impact to habitat.',
        imageGallery: null,
        location: '<ul>\n<li>In the eastern Pacific, they’re found from the Columbia River to Chile.&nbsp;</li>\n<li>Off the West Coast, they’re most common off California.&nbsp;</li>\n<li>In the Indo-Pacific, they are found from East Africa and the Red Sea to Hawaii.&nbsp;</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels.',
        populationStatus: '<ul>\n<li>\n<p>According to the <a href="https://www.wcpfc.int/node/31025">2018 stock assessment</a>, North Pacific shortfin mako sharks are not overfished, and are not subject to overfishing.</p>\n</li>\n<li>\n<p><a href="http://isc.fra.go.jp/recommendation/isc18/isc18_shortfinmako.html">Stock Status and Conservation Information (From ISC18 Plenary Report)</a>.</p>\n</li>\n</ul>\n',
        scientificName: 'Isurus oxyrinchus',
        speciesAliases: '<a href="/species-aliases/mako-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Mako shark</a>, <a href="/species-aliases/blue-pointer" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Blue pointer</a>, <a href="/species-aliases/bonito-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Bonito shark</a>, <a href="/species-aliases/pacific-mako-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Pacific mako shark</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/atlantic_shortfin_mako_shark.png',
            alt: 'Pacific Shortfin Mako Shark',
            title: 'Pacific Shortfin Mako Shark',
        },
        speciesName: 'Pacific Shortfin Mako Shark',
        animalHealth: null,
        availability: '<p>Fresh from August to January.</p>\n',
        biology: '<ul>\n<li>Shortfin mako sharks grow slowly and can grow up to 12 feet, although average size is 6 to 7 feet.</li>\n<li>They have a long lifespan, and can live up to 30 years.&nbsp;</li>\n<li>They do not reproduce until late in life, when males are about 8 years old and females are around 20 years old.&nbsp;</li>\n<li>They have a 3-year reproductive cycle, including a 15- to 18-month gestation period.&nbsp;</li>\n<li>Eggs are fertilized internally, and develop inside the mother. Pups are born alive, and are fairly large when born.</li>\n<li>They’re aggressive predators and feed near the top of the food chain on squid and pelagic fish (including swordfish, tuna, and other sharks).&nbsp;</li>\n<li>They have very few predators. Larger sharks and killer whales sometimes prey on younger, smaller shortfin makos.</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch.',
        calories: '130',
        carbohydrate: null,
        cholesterol: '51 mg',
        color: '<p>Fresh, raw meat is an ivory-pink or muddy, reddish color. When cooked it is ivory white.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '4.51 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>In 2018, commercial landings of Pacific shortfin mako totaled 64,374 pounds and were valued at $52,748.\n<ul>\n<li>Most shortfin mako harvested come from the <a href="https://www.fishwatch.gov/profiles/atlantic-shortfin-mako-shark">Atlantic and Gulf of Mexico</a>.</li>\n</ul>\n</li>\n<li>Gear types and bycatch:\n<ul>\n<li>Harvested with drift gillnets off the West Coast and occasionally caught incidentally in longline fisheries for swordfish off Hawaii.&nbsp;</li>\n<li>Drift gillnets can incidentally catch other species, such as ocean sunfish and blue sharks.</li>\n<li>Protected species, such as sperm whales and sea turtles, may be caught as bycatch in drift gillnet fisheries.</li>\n<li>Managers limit where and when drift gillnet fishermen can fish to help prevent bycatch. Logbooks and observer programs help monitor bycatch.&nbsp;</li>\n<li>The California thresher shark gillnet fishery is a <a href="https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-protection-act-list-fisheries">Category I fishery</a>, meaning it has frequent incidental mortality or serious injury of marine mammals. Mako sharks may be caught in this fishery.\n<ul>\n<li>NOAA Fisheries works with the federally appointed <a href="https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-take-reduction-plans-and-teams">Pacific Offshore Cetacean Take Reduction Team</a> to develop measures that reduce the impacts of this fishery on certain marine mammals.</li>\n</ul>\n</li>\n<li>Fishermen must use acoustic devices that emit high-pitched noises to deter marine mammals, and net extenders to increase minimum fishing depth on drift gillnet gear, to protect marine mammals.</li>\n<li>Off Hawaii, gear restrictions and area closures help minimize impacts to sharks, marlins, and protected species that can be caught in longline gear.&nbsp;</li>\n<li>Safe handling techniques help reduce impacts on sea turtles and seabirds caught in the longline fishery in Hawaii.&nbsp;</li>\n<li>Scientists and managers continue to monitor bycatch in these fisheries through logbooks and vessel observer programs. &nbsp;</li>\n</ul>\n</li>\n<li>Shortfin mako are considered one of the great game fish of the world and are a popular catch in shark tournaments.&nbsp;</li>\n<li>Recreational charter vessel operators must keep logbooks documenting their catch, and there is a limit on the number of mako sharks recreational fishermen can catch.</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>High in protein and low in fat, and a good source of niacin, vitamins B6 and B12, phosphorous, and selenium. More information on <a href="https://www.fishwatch.gov/eating-seafood/health">health and seafood</a>.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Shortfin mako sharks have pointed snouts and long gill slits.&nbsp;</li>\n<li>They have dark blue-gray backs, light metallic blue sides, and white undersides. &nbsp;</li>\n<li>Their teeth are conical and pointy and protrude forward from the jaw, making them visible even when their mouth is closed.&nbsp;</li>\n<li>They can be easily confused with the longfin mako shark (<em>Isurus paucus</em>).</li>\n</ul>\n',
        production: null,
        protein: '20.98 g',
        quote: 'U.S. wild-caught Pacific shortfin mako shark is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#7b9abf',
        research: null,
        saturatedFattyAcidsTotal: '0.925 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '79 mg',
        source: '<p>U.S. wild-caught from California and Hawaii.</p>\n',
        sugarsTotal: null,
        taste: '<p>Sweet with a full-bodied, meaty taste.</p>\n',
        texture: '<p>Soft when raw, firm once cooked.</p>\n',
        path: '/profiles/pacific-shortfin-mako-shark',
        lastUpdate: '05/13/2020 - 09:05',
        href: 'https://line-ready-api.azurewebsites.net/fish/100',
        method: null,
        rel: null,
    },
    {
        id: 99,
        fisheryManagement: '<ul>\n<li><a href="http://www.greateratlantic.fisheries.noaa.gov/sustainable/species/clam/">NOAA Fisheries</a>, the <a href="http://www.mafmc.org/">Mid-Atlantic Fishery Management Council</a>, and state resource management agencies manage the surfclam fishery.</li>\n<li>Managed under the <a href="http://www.mafmc.org/surfclams-quahogs/">Surfclam-Ocean Quahog Fishery Management Plan</a>:\n<ul>\n<li>Fishermen must have a permit to harvest surfclams.</li>\n<li>Individual transferable quota (<a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch shares</a>) program – managers set an annual catch limit for federal waters and allocate it among individual fishermen or vessel owners. These quotas can be sold or leased.</li>\n<li>Minimum size, which can be suspended by managers if they can demonstrate the harvest of small surfclams is below a certain threshold.</li>\n<li>Closed areas due to environmental degradation or to toxins that cause paralytic shellfish poisoning (PSP).</li>\n<li>Fishermen harvesting surfclams from Georges Bank have additional requirements under the PSP testing protocol.</li>\n<li>Mandatory vessel monitoring systems.</li>\n<li>Fishermen must maintain and submit logbooks of each fishing trip to document catch.</li>\n</ul>\n</li>\n<li>Surfclams support valuable fisheries in <a href="http://www.state.nj.us/dep/fgw/shelhome.htm" rel="external">New Jersey</a>&nbsp;and <a href="http://www.dec.ny.gov/outdoor/345.html" rel="external">New York</a>&nbsp;state waters (within 3 miles of shore); state authorities are responsible for managing these fisheries.</li>\n</ul>\n',
        habitat: '<ul>\n<li>Juveniles burrow in medium- to fine-grain sand in waters 30 to 80 feet deep.</li>\n<li>Adults prefer medium- to coarse-grain sand and gravel from beach zones to over 160 feet deep.</li>\n<li>Surfclams prefer more turbulent waters and bury themselves just below the sediment surface.</li>\n</ul>\n',
        habitatImpacts: 'Fishing gear used to harvest surfclams has negative impacts to habitat, but the fishery is managed to minimize these impacts, particularly to sensitive habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Atlantic surfclams are found in the western North Atlantic from the southern Gulf of St. Lawrence to Cape Hatteras, North Carolina.</li>\n<li>They’re most abundant on Georges Bank, the south shore of Long Island, New Jersey, and the Delmarva Peninsula.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population level.',
        populationStatus: '<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/publications/crd/crd1613/crd1613.pdf">2016&nbsp;stock assessment</a> the surfclam stock is not overfished and is not subject to overfishing.</li>\n</ul>\n',
        scientificName: 'Spisula solidissima',
        speciesAliases: '<a href="/species-aliases/surfclam" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Surfclam</a>, <a href="/species-aliases/hen-clam" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Hen clam</a>, <a href="/species-aliases/bar-clam" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Bar clam</a>, <a href="/species-aliases/sea-clam" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sea clam</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/atlantic_surfclam_0.png',
            alt: 'Atlantic surfclam',
            title: 'Atlantic surfclam',
        },
        speciesName: 'Atlantic Surfclam',
        animalHealth: null,
        availability: '<p>Year-round. Sold processed, rather than live, in fresh, frozen, and canned products such as breaded clam strips, minced clams, stuffed clams, chowders, and broth.</p>\n',
        biology: '<ul>\n<li>Surflclams can live up to 35 years.</li>\n<li>On average, surfclams living in open water live longer than those living inshore.</li>\n<li>Surfclams grow fast, reaching a harvestable size of about 5 inches in 5 to 7 years.</li>\n<li>Growth rates depend on water temperature—southern surfclam populations in warmer water grow more slowly than the more northern populations.</li>\n<li>Some are able to reproduce by age 1, but most spawn by the end of their second year.</li>\n<li>Surfclams spawn from late spring through early fall.</li>\n<li>They shed their eggs and sperm directly into the water column.</li>\n<li>Larvae spend about 3 weeks in the water column as plankton before settling to the bottom to live.</li>\n<li>Surfclams are planktivorous filter feeders, straining tiny plants out of the water to eat.</li>\n<li>Larval surfclams eat algal cells.</li>\n<li>Adults primarily feed on diatoms, green algae, and naked flagellates.</li>\n<li>Snails, crabs, shrimp, and fish, including haddock and cod, feed on surfclams.</li>\n</ul>\n',
        bycatch: 'Fishing gear used to harvest surfclams is designed to minimize bycatch.',
        calories: '74',
        carbohydrate: null,
        cholesterol: '34 mg',
        color: '<p>The raw meat is whitish-orange. Cooked meat ranges from ivory to golden yellow, with some dark areas.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '0.97 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended level.',
        harvest: '<ul>\n<li>More than 39&nbsp;million pounds of surfclam meats were harvested in 2017&nbsp;in both state and federal waters, valued at more than&nbsp;$32&nbsp;million.</li>\n<li>Surfclams are the most important commercial clam species harvested in the United States.</li>\n<li>Commercial fishermen harvest surfclams with hydraulic clam dredges—essentially large, heavy sleds pulled along the sea floor. High-pressure jets blast water into the sediment, which temporarily liquefies it and allows a steel blade to pass through the first few inches of substrate and scoop the clams onto the dredge, where they are captured in a cage made of steel bars.</li>\n<li>Atlantic surfclams burrow into sandy bottoms on the continental shelf, an environment that is thought to recover quickly after a hydraulic clam dredge passes over it.</li>\n<li>The bars on commercial clam dredges are spaced several inches apart so they do not collect anything but the targeted surfclams.</li>\n<li>The surfclam fishery is managed under an individual transferable quota program that provides fishermen with more flexibility on when to fish, slows the pace of the fishery, and increases its efficiency, significantly reducing bycatch.</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Surfclams provide low-fat, high-quality protein and are an excellent source of selenium and niacin.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Surfclams are the largest bivalves found in the western North Atlantic.</li>\n<li>They grow up to 8.9 inches, although clams larger than 7.9 inches are rare.</li>\n<li>Their shells are thick, triangular, and yellowish-white with rounded edges and concentric ridges.</li>\n<li>Shells do not close fully and gape slightly.</li>\n</ul>\n',
        production: null,
        protein: '12.77 g',
        quote: 'U.S. wild-caught Atlantic surfclam is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#B7B2AC',
        research: null,
        saturatedFattyAcidsTotal: '0.094 g',
        selenium: '24.3 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '56 mg',
        source: '<p>U.S. wild-caught from New England to North Carolina. The United States is the only source of Atlantic surfclams.</p>\n',
        sugarsTotal: null,
        taste: '<p>When cooked, the white meat is mild and sweet.</p>\n',
        texture: '<p>Chewy.</p>\n',
        path: '/profiles/atlantic-surfclam',
        lastUpdate: '07/08/2019 - 16:40',
        href: 'https://line-ready-api.azurewebsites.net/fish/99',
        method: null,
        rel: null,
    },
    {
        id: 98,
        fisheryManagement: '<ul>\n<li>The <a href="http://www.asmfc.org/" rel="external">Atlantic States Marine Fisheries Commission</a> manages the striped bass stock, which inhabits all coastal and estuarine areas from Maine through Virginia, and the coastal areas of North Carolina. Estuarine striped bass stocks in North Carolina are managed as non-coastal migratory stocks by the State of North Carolina under the auspices of the Commission.</li>\n<li><a href="http://uscode.house.gov/view.xhtml?path=/prelim@title16/chapter71A&amp;edition=prelim">The Atlantic Striped Bass Conservation Act </a>and the&nbsp;<a href="http://uscode.house.gov/view.xhtml?path=/prelim@title16/chapter71&amp;edition=prelim">Atlantic Coastal Fisheries Cooperative Management Act</a>&nbsp;direct state and federal conservation and management efforts for this population. Both Acts contain provisions to impose a federal moratorium on striped bass fishing in states that fail to comply with the Commission’s management plan. The Secretaries of Commerce and the Interior are required to provide biennial reports to Congress and the Commission on studies of the Atlantic striped bass resource.</li>\n<li>Managed under the&nbsp;<a href="http://www.asmfc.org/species/atlantic-striped-bass" rel="external">Interstate Fishery Management Plan for Atlantic Striped Bass</a>.\n<ul>\n<li>Harvest limits are set at a level that will conserve the striped bass spawning stock so the resource can continue to replace harvested fish. Researchers have determined that the minimum age for female striped bass to reproduce is between the ages of 4 and 8 years. Managers set the target population levels for this species based on the size of the female spawning stock.</li>\n<li>In state waters, the commercial fishery is currently managed with:\n<ul>\n<li>State-by-state catch quotas that limit the amount of fish that can be caught.</li>\n<li>Minimum size limits to protect younger striped bass so they can grow, mature, and reproduce.</li>\n<li>Gear restrictions.</li>\n<li>Seasonal fishery closures, mainly to protect spawning fish.</li>\n<li>Bycatch monitoring and research programs.</li>\n</ul>\n</li>\n<li>In state waters, the recreational fishery is managed with:\n<ul>\n<li>Minimum size and bag limits.</li>\n<li>Seasonal fishery closures.</li>\n</ul>\n</li>\n<li>Federal waters (between 3 and 200 miles offshore) remain closed to all commercial and recreational fishing for Atlantic striped bass.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Striped bass are anadromous (they live in the ocean but return to freshwater to spawn).</li>\n<li>In the spring, mature striped bass migrate back to fresh or brackish water to spawn.</li>\n<li>Larvae drift downstream toward their nursery areas in river deltas and the inland portions of the coastal sounds and estuaries.</li>\n<li>Juveniles typically remain in estuaries for 2 to 4 years and then migrate out to the Atlantic Ocean.</li>\n<li>Some spend the majority of their adult life in rivers or coastal estuaries.</li>\n<li>Some spend their adult life in the ocean, migrating north and south seasonally and ascending to rivers to spawn in the spring. Striped bass tagged in the Chesapeake Bay have been caught in Canadian waters.</li>\n</ul>\n',
        habitatImpacts: 'Fishing gears used to harvest striped bass have minimal impacts on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Striped bass live along the East Coast from the St. Lawrence River in Canada to St. John’s River in Florida, and in the Gulf of Mexico from Florida to Louisiana.</li>\n<li>They were introduced to inland lakes and reservoirs and to the West Coast, where they’re now found from Mexico to British Columbia.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Significantly below target levels and fishing rate promotes population growth.',
        populationStatus: '<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/publications/crd/crd1901/">2018&nbsp;stock assessment</a>,&nbsp;Atlantic striped bass are overfished and subject to overfishing.</li>\n<li><a href="http://www.asmfc.org/uploads/file/5cc9ba4eAtlStripedBassStockAssessmentOverview.pdf" rel="external">ASMFC’s Stock Assessment Overview</a> provides a summary of the 2018 benchmark stock assessment for Atlantic striped bass, including an overview of management, the types of data used, and how the data were analyzed.</li>\n</ul>\n',
        scientificName: 'Morone saxatilis',
        speciesAliases: '<a href="/species-aliases/bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Bass</a>, <a href="/species-aliases/rockfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Rockfish</a>, <a href="/species-aliases/striper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Striper</a>, <a href="/species-aliases/linesider" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Linesider</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/atlantic_striped_bass_0.png',
            alt: 'Illustration of Atlantic Striped Bass',
            title: 'Illustration of Atlantic Striped Bass',
        },
        speciesName: 'Atlantic Striped Bass',
        animalHealth: null,
        availability: '<p>Available both frozen and fresh year-round, depending on the area.</p>\n',
        biology: '<ul>\n<li>Striped bass have a fairly long life, up to 30 years.</li>\n<li>Growth depends on where they live.</li>\n<li>Striped bass can grow up to 5 feet in length and 77 pounds.</li>\n<li>Males are sexually mature between the ages of 2 and 4 years old.</li>\n<li>Females are able to reproduce when they are 4 to 8 years old.</li>\n<li>Females produce large quantities of eggs, which are fertilized by males as they are released.</li>\n<li>Larval striped bass feed on zooplankton (microscopic animals).</li>\n<li>Juveniles eat insect larvae, small crustaceans, mayflies, and other larval fish.</li>\n<li>Adults are piscivorous (fish-eating) and eat almost any kind of small fish as well as several invertebrates, particularly crabs and squid.</li>\n<li>Bluefish, weakfish, cod, and silver hake prey on small striped bass.</li>\n<li>Adults have few predators, with the exception of seals and sharks.</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch.',
        calories: '97',
        carbohydrate: null,
        cholesterol: '80 mg',
        color: '<p>Light-colored meat.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '2.33 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'Reduced to end overfishing. Managers are exploring alternative coast-wide measures to address overfishing. There is a moratorium in federal waters.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2017, commercial landings of striped bass (from state waters) totaled more than 5 million pounds and were valued at more than $23.3&nbsp;million.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Commercial fishermen use gear types that have minimal impact on habitat—gill nets, hook-and-line, pound nets, seines, and trawls.</li>\n<li>Most striped bass are caught in recreational fisheries, using mainly hook-and-line gear with little or no impact on habitat.</li>\n<li>Gillnets can incidentally capture protected species, such as sea turtles, large whales (right, humpback, and fin whales), harbor porpoise, dolphins, and Atlantic sturgeon.</li>\n<li>Federal regulations are in place to prevent bycatch of protected species.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>The recreational harvest of striped bass regularly exceeds the commercial harvest.</li>\n<li>In 2018, recreational harvest of striped bass totaled more than 23.7&nbsp;million pounds.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Striped bass is a good source of low-fat protein and selenium. <a href="https://www.epa.gov/fish-tech">Consumption advisories</a>&nbsp;for striped bass vary from state to state.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Striped bass have stout bodies with seven to eight continuous horizontal stripes on each side, from their gills to their tail.</li>\n<li>They are light green, olive, steel blue, black, or brown on top, with a white or silver iridescent underside.</li>\n</ul>\n',
        production: null,
        protein: '17.73 g',
        quote: 'U.S. wild-caught Atlantic striped bass is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#817b62',
        research: null,
        saturatedFattyAcidsTotal: '0.507 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '69 mg',
        source: '<p>U.S. wild-caught from Maine to North Carolina, and farmed.</p>\n',
        sugarsTotal: null,
        taste: '<p>Both wild-caught and farmed striped bass have a slightly sweet flavor.</p>\n',
        texture: '<p>Firm, with large flakes.</p>\n',
        path: '/profiles/atlantic-striped-bass',
        lastUpdate: '05/17/2019 - 10:23',
        href: 'https://line-ready-api.azurewebsites.net/fish/98',
        method: null,
        rel: null,
    },
    {
        id: 97,
        fisheryManagement: '<ul>\n<li><a href="http://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="http://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the lingcod fishery on the West Coast.</li>\n<li>Managed under the <a href="http://www.pcouncil.org/wp-content/uploads/GF_FMP_FINAL_May2014.pdf">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Size limits and trip limits.</li>\n<li>Certain seasons and <a href="http://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_closures/groundfish_closed_areas.html">areas</a> are closed to fishing.</li>\n<li>Gear restrictions help reduce bycatch and impacts on habitat.</li>\n<li>A <a href="http://www.westcoast.fisheries.noaa.gov/fisheries/groundfish_catch_shares/index.html">trawl rationalization catch share program</a> includes:\n<ul>\n<li>Catch limits based on the health of each fish stock and divided into shares that are allocated to individual fishermen or groups.</li>\n<li>Provisions that allow fishermen to decide how and when to catch their share.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>The State of Alaska manages the lingcod fishery in both state and federal waters in Alaska through the <a href="http://www.adfg.alaska.gov/index.cfm?adfg=lingcod.management" rel="external">Alaska Department of Fish and Game Commercial Fisheries Regulations for Lingcod</a>. Regulations include:\n<ul>\n<li>Closing the fishery during spawning and nesting seasons to protect spawning female lingcod and nest-guarding male lingcod.</li>\n<li>Limits on the minimum size of fish that can be caught to protect immature fish from being harvested and allow fish to spawn at least once before being subject to harvest.</li>\n<li>Restricting catch through catch and bycatch quotas.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Larvae live near the surface of the ocean. Juveniles settle on nearshore sandy ocean bottoms near eelgrass or kelp beds.</li>\n<li>Young adults and adults move to rocky habitats or seaweed, kelp, and eelgrass beds, where food is abundant.</li>\n<li>Male lingcod don’t generally move far from where they’re born, but researchers have found that immature fish sometimes migrate more than 60 miles and females migrate seasonally to spawn.&nbsp;</li>\n</ul>\n',
        habitatImpacts: 'Time and area closures and gear restrictions protect habitats that are affected by some types of fishing gear used to harvest lingcod.',
        imageGallery: null,
        location: '<ul>\n<li>Lingcod are found from Kodiak Island in the Gulf of Alaska down to Baja California, but they’re most abundant near British Columbia and Washington.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels along the Northern Pacific coast. Near target levels and fishing rate promotes population growth along the Southern Pacific coast.',
        populationStatus: '<ul>\n<li>According to the <a href="https://www.pcouncil.org/wp-content/uploads/2018/07/Lingcod_2017_Complete_Final.pdf">2017 stock assessment</a>, Southern Pacific coast lingcod and Northern Pacific coast lingcod&nbsp;are not overfished.</li>\n<li>Southern Pacific coast and Northern Pacific coast lingcod&nbsp;are not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/data_products/species_management.cfm">2018&nbsp;catch data</a>.</li>\n<li>There are currently no sufficient estimates of the abundance of lingcod in Alaska.</li>\n</ul>\n',
        scientificName: 'Ophiodon elongatus',
        speciesAliases: '<a href="/species-aliases/cultus-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Cultus cod</a>, <a href="/species-aliases/blue-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Blue cod</a>, <a href="/species-aliases/bluefish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Bluefish</a>, <a href="/species-aliases/green-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Green cod</a>, <a href="/species-aliases/buffalo-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Buffalo cod</a>, <a href="/species-aliases/greenling" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Greenling</a>, <a href="/species-aliases/white-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">White cod</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/lingcod.png',
            alt: 'Illustration of a lingcod',
            title: 'Illustration of Lingcod',
        },
        speciesName: 'Lingcod',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Lingcod grow quickly, up to 5 feet and 80 pounds, and can live more than 20 years.</li>\n<li>Males sexually mature when they are about 2 years old and almost 20 inches long.</li>\n<li>Females are able to reproduce when they are 3 years old and 30 inches long.</li>\n<li>In late fall, male lingcod gather and become territorial over areas suitable for spawning, usually shallow, rocky habitats.</li>\n<li>Mature females are rarely seen at these spawning grounds. Scientists believe that the females briefly visit these spawning areas during winter and spring and only stay long enough to deposit their eggs in crevices and under ledges.\n<ul>\n<li>Males guard the nests for 8 to 10 weeks until the eggs hatch. The presence of a male to guard the nest from predators appears essential for successful spawning. If something happens to the male, an unguarded nest can be decimated within 48 hours by feeding rockfish, starfish, sculpins, kelp greenling, and cod.</li>\n</ul>\n</li>\n<li>Larvae feed on zooplankton (tiny floating animals), including krill and larval crustaceans such as lobster and crab. Juveniles feed on small fish.</li>\n<li>Adults are aggressive predators and feed primarily on bottom-dwelling fish (including smaller lingcod), squid, octopi, and crab.</li>\n<li>Marine mammals, sharks, and larger lingcod prey on juvenile and adult lingcod.</li>\n</ul>\n',
        bycatch: 'Regulations prohibit fishing in certain areas to protect sensitive fish populations.',
        calories: '85',
        carbohydrate: null,
        cholesterol: '52 mg',
        color: '<p>Blue-green tint when raw, but is snow white once cooked.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '1.06 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended level.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of lingcod totaled more than 1.5&nbsp;million pounds and were valued at more than $2.1 million.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>On the West Coast, lingcod are typically harvested with other groundfish in the trawl fishery.\n<ul>\n<li>Lingcod are also harvested incidentally in bottom longline and salmon troll fisheries.</li>\n<li>Trawls that are used to harvest lingcod can contact the ocean floor and impact habitats, depending on the makeup of the ocean bottom and the size of the gear.</li>\n<li>Trawls cause minimal damage when targeting lingcod over soft, sandy, or muddy ocean bottoms.</li>\n<li>Some areas are closed to certain gear types to protect sensitive habitat and species.</li>\n<li>Area closures, reduced trip limits, non-retention rules, gear restrictions, and variable catch limits are used to help minimize impact to overfished rockfish species and prevent bycatch.</li>\n<li>Charterboat fishermen in Washington have successfully used alternate bait (large flatfish) to reduce yelloweye rockfish bycatch when targeting lingcod.</li>\n</ul>\n</li>\n<li>In Alaska, lingcod have been harvested for centuries by the indigenous coastal populations of Southeast, Southcentral, and Western Alaska.\n<ul>\n<li>Lingcod were traditionally caught for subsistence use with hooks made of wood or bone.</li>\n<li>Today, lingcod are still fished for subsistence use but are also harvested in commercial fisheries in southeast Alaska with longlines, trolls, and jigs.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Recreational fishing for lingcod occurs on the West Coast and Alaska.</li>\n<li>Due to high levels of yelloweye rockfish bycatch in West Coast hook-and-line recreational fisheries, recreational harvest needs to be carefully managed.</li>\n<li>Fish must be a certain size to be retained, and there are limits on the number of fish that sport fishermen can keep each day.</li>\n<li>In Alaska recreational fishing for lingcod is closed during spawning and nesting seasons.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Lingcod is a good source of low-fat protein and is high in vitamin B12 and selenium.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Lingcod are dark gray, brown, or greenish on the back with some copper-colored mottling or spotting along the upper back.</li>\n<li>Nicknamed “buckethead,” the lingcod has a large head and mouth, and 18 large, sharp teeth.</li>\n<li>Lingcod have long bodies that narrow toward the tail.&nbsp;</li>\n</ul>\n',
        production: null,
        protein: '17.66 g',
        quote: 'U.S. wild-caught lingcod is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#a87455',
        research: null,
        saturatedFattyAcidsTotal: '0.197 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '59 mg',
        source: '<p>U.S. wild-caught from Alaska to California.</p>\n',
        sugarsTotal: null,
        taste: '<p>A mild-tasting fish.</p>\n',
        texture: '<p>A tender fish with large flakes.</p>\n',
        path: '/profiles/lingcod',
        lastUpdate: '03/19/2020 - 13:49',
        href: 'https://line-ready-api.azurewebsites.net/fish/97',
        method: null,
        rel: null,
    },
    {
        id: 96,
        fisheryManagement: '<ul>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage this fishery.</li>\n<li>Northern anchovies are managed under the <a href="https://www.pcouncil.org/coastal-pelagic-species/fishery-management-plan-and-amendments/">Coastal Pelagic Species Fishery Management Plan</a>:\n<ul>\n<li>Monitored through landings data. If landings increase significantly, or exceed the annual catch limit, then managers may make management changes.</li>\n<li>Limits on the number and capacity of vessels in the fishery.</li>\n<li>Regulations to reduce bycatch.</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>Federal management is coordinated with state fisheries management agencies so that regulations are consistent in state waters (within 3 miles of shore). All states follow federal regulations but some have additional regulations.</li>\n</ul>\n',
        habitat: '<ul>\n<li>Anchovies form large, dense schools near the ocean surface.</li>\n<li>Anchovy schools move short distances along the shore and offshore.</li>\n</ul>\n',
        habitatImpacts: 'The gear used to catch northern anchovies is used at the surface and has little impact on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Northern anchovies are found from British Columbia to Baja California and in the Gulf of California.</li>\n<li>Northern anchovies are divided into two sub-populations in the United States:\n<ul>\n<li>The northern sub-population is found off Oregon and Washington.</li>\n<li>The central sub-population ranges from California to Baja California, Mexico.</li>\n</ul>\n</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Although northern anchovies are thought to be abundant, the population levels are unknown.',
        populationStatus: '<ul>\n<li>Formal stock assessments are not conducted for either the northern or central subpopulations of anchovies, but data is collected to help monitor the populations.</li>\n<li>The northern sub-population has never been formally assessed, but is thought to be abundant, and has a defined overfishing limit.</li>\n<li>The central sub-population was last assessed in 1995, and has a defined overfishing limit.</li>\n</ul>\n',
        scientificName: 'Engraulis mordax',
        speciesAliases: '<a href="/species-aliases/anchovy" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Anchovy</a>, <a href="/species-aliases/north-pacific-anchovy" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">North Pacific anchovy</a>, <a href="/species-aliases/california-anchovy" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">California anchovy</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/northern_anchovy.png',
            alt: 'Illustration of a northern anchovy',
            title: 'Northern Anchovy',
        },
        speciesName: 'Northern Anchovy',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Northern anchovies grow quickly, up to about 7 inches.</li>\n<li>They have a short life cycle; they are able to spawn after 2 years and rarely live longer than 4 years.</li>\n<li>They have high natural mortality; each year 45 to 55 percent of the total stock would die of natural causes if no fishing occurred.</li>\n<li>Northern anchovies spawn throughout the year, with peak activity from February to April.</li>\n<li>Females release batches of eggs every 7 to 10 days. The eggs hatch in 2 to 4 days, depending on the temperature of the water.</li>\n<li>Northern anchovies feed on plankton (tiny floating plants and animals).</li>\n<li>They are an important part of the food chain for other fish species, including many recreationally and commercially important fish, as well as birds and marine mammals.</li>\n</ul>\n',
        bycatch: 'Bycatch is low because the gear is selective.',
        calories: '131',
        carbohydrate: null,
        cholesterol: '60 mg',
        color: '<p>Canned anchovies packed in oil are blush red, a result of the salt-curing process. The meat of unprocessed anchovies is gray and becomes off-white when cooked.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '4.84 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>In 2017, commercial landings of northern anchovy totaled more than 12.3&nbsp;million pounds and were valued at more than $857,000.</li>\n<li>Northern anchovies are generally harvested in the United States with round haul gear.</li>\n<li>Northern anchovies have been fished off the West Coast since at least 1916. The fishery was small until the Pacific sardine fishery collapsed in the 1940s and 1950s. Processors began canning anchovies instead of sardines, and fishermen started harvesting more anchovies.</li>\n<li>Consumer demand for anchovies decreased after the sardine population recovered, and the commercial fishery for northern anchovies gradually declined.</li>\n<li>Today, northern anchovies are used mainly for bait in other fisheries and sometimes processed into fish meal.</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Anchovies are high in calcium, iron, niacin, phosphorus, and selenium but are also high in cholesterol.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Northern anchovies are small, compressed fish with long snouts that overhang a large mouth.</li>\n<li>They are bluish-green above and silvery below, and adults have a faint silver stripe on the side.&nbsp;</li>\n</ul>\n',
        production: null,
        protein: '20.35 g',
        quote: 'U.S. wild-caught northern anchovies are a smart seafood choice because they are sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#b5c4ca',
        research: null,
        saturatedFattyAcidsTotal: '1.282 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '104 mg',
        source: '<p>Wild-caught off Washington, Oregon, and California.</p>\n',
        sugarsTotal: null,
        taste: '<p>Canned or salted anchovies have a pronounced, salty tang, and fresh anchovies have a rich but subtle taste and a soft texture.</p>\n',
        texture: '<p>Unprocessed anchovies have soft flesh but canned meat is firm.</p>\n',
        path: '/profiles/northern-anchovy',
        lastUpdate: '07/08/2019 - 16:11',
        href: 'https://line-ready-api.azurewebsites.net/fish/96',
        method: null,
        rel: null,
    },
    {
        id: 95,
        fisheryManagement: '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/pacific-islands">NOAA Fisheries</a> and the <a href="http://www.wpcouncil.org/">Western Pacific Fishery Management Council</a> manage the Pacific blue marlin fishery.</li>\n<li>Managed under the <a href="http://www.wpcouncil.org/fep/WPRFMC%20Pelagic%20FEP%20(2009-09-21).pdf">Fishery Ecosystem Plan for Pacific Pelagic Fisheries of the Western Pacific Region</a>:\n<ul>\n<li>Entry to this fishery is limited to a maximum of 164 vessels.</li>\n<li>Permits and logbooks are required.</li>\n<li>Observers are required on all Hawaii-based longline vessels.</li>\n<li><a href="https://www.fisheries.noaa.gov/topic/enforcement#vessel-monitoring">NOAA Fisheries vessel monitoring system program</a>&nbsp;requires longline boats to be equipped with a satellite transponder that provides real-time vessel position updates and tracks vessel movements.</li>\n<li>Longlines are prohibited in certain areas to protect endangered Hawaiian monk seals and reduce the potential for gear conflicts and localized stock depletion.</li>\n<li>Vessels operating under longline general permits must carry special gear to release incidentally hooked or entangled sea turtles.</li>\n<li>Fishing gear requirements apply to all Hawaii longline limited access permitted vessels. The requirements may change depending on type of fishing trip, location of fishing, and how the gear is set. An overview of gear requirements can be found <a href="http://www.fpir.noaa.gov/SFD/pdfs/hawaii-longline-reg-summary.pdf">here</a>.</li>\n</ul>\n</li>\n<li>Management of highly migratory species, like Pacific blue marlin, is complicated because the species migrate thousands of miles across international boundaries and are fished by many nations.</li>\n<li>Effective conservation and management of this resource requires international cooperation as well as strong domestic management.</li>\n<li>Two organizations, the <a href="http://www.iattc.org/HomeENG.htm" rel="external">Inter-American Tropical Tuna Commission (IATTC)</a>&nbsp;and the <a href="https://www.wcpfc.int/" rel="external">Western and Central Pacific Fisheries Commission (WCPFC)</a>&nbsp;manage this fishery internationally.\n<ul>\n<li>These Commissions rely on the scientific advice of their staff and the analyses of the <a href="http://isc.fra.go.jp/" rel="external">International Scientific Committee for Tuna and Tuna-like Species in the North Pacific (ISC)</a><a href="http://isc.fra.go.jp/">&nbsp;</a>to develop and adopt international resolutions for conservation and management measures.</li>\n<li>Working with the U.S. Department of State, NOAA Fisheries domestically implements these conservation and management measures.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Blue marlin prefer warm surface waters that are well mixed by surface winds and are uniform in temperature and salinity. They are considered the most tropical of all billfishes.</li>\n<li>They spend all of their time in the water column, frequently moving between the surface and a depth of 100 meters. Depth distribution is limited by low water temperature and low oxygen levels.</li>\n</ul>\n',
        habitatImpacts: 'Gear used to harvest blue marlin rarely contacts the ocean floor, so habitat impacts are minimal.',
        imageGallery: null,
        location: '<ul>\n<li>Blue marlin live throughout tropical and subtropical waters of the Indian, Pacific, and Atlantic Oceans.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels.',
        populationStatus: '<ul>\n<li>According to the 2016&nbsp;<a href="http://isc.fra.go.jp/pdf/ISC16/ISC16_Annex_10_Stock_Assessment_Update_for_Blue_Marlin_in_the_Pacific_Ocean_through_2014(ISC2016).pdf" rel="external">stock assessment</a>, Pacific blue marlin are not overfished and not subject to overfishing.</li>\n<li>Population assessments for Pacific blue marlin are conducted by the <a href="http://isc.fra.go.jp/working_groups/billfish.html" rel="external">Billfish Working Group</a>, a division of the <a href="http://isc.fra.go.jp/" rel="external">International Scientific Committee for Tuna and Tuna-Like Species in the North Pacific Ocean</a><a href="http://isc.fra.go.jp/"> </a>(ISC). NOAA Fisheries scientists participate in the ISC assessment and contribute relevant U.S. fishery data.</li>\n</ul>\n',
        scientificName: 'Makaira nigricans',
        speciesAliases: '<a href="/species-aliases/%E2%80%98u" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">A‘u</a>, <a href="/species-aliases/kajiki" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Kajiki</a>, <a href="/species-aliases/aguja-azul" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Aguja azul</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/pacific_blue_marlin.png',
            alt: 'Illustration of a pacific blue marlin',
            title: 'Pacific Blue Marlin',
        },
        speciesName: 'Pacific Blue Marlin',
        animalHealth: null,
        availability: '<p>From June through October.</p>\n',
        biology: '<ul>\n<li>Blue marlin may grow to be more than 12 feet long and may weigh up to 2,000 pounds.</li>\n<li>Female blue marlin grow larger than males and may live 20 years.</li>\n<li>Male blue marlin reach 7 feet in length and may live up to 10 years.</li>\n<li>They grow fast and may reach 3 to 6 feet in the first 1 to 2 years of life.</li>\n<li>Males mature around 2 years old, and females mature between 3 to 4 years old.</li>\n<li>Blue marlin spawn between May and September.</li>\n<li>They eat mostly tuna and other open water fishes.</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch in the tuna and swordfish fisheries, which incidentally catch the most commercially available blue marlin.',
        calories: '120',
        carbohydrate: null,
        cholesterol: '35 mg',
        color: '<p>Light golden-orange when raw, turns off-white when cooked.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '0.5 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended level.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>Marlin are primarily caught incidentally in pelagic longline commercial fisheries for tuna and swordfish. They are also a popular target fish for recreational fishermen.</li>\n<li>In 2018, commercial landings of Pacific blue marlin from the waters around Hawaii totaled more than 1.8&nbsp;million pounds and were valued at more than $1.6&nbsp;million.</li>\n<li>The <a href="https://www.govtrack.us/congress/bills/112/hr2706/text" rel="external">Billfish Conservation Act</a>, along with existing billfish regulations, prohibits the sale and commercial possession of billfish and billfish products. However, those that are caught in Hawaii and the Pacific Insular Areas (which includes American Samoa, Guam, and the Northern Mariana Islands) are exempt and can be sold.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>U.S. pelagic longline fishermen who target tuna and swordfish may incidentally catch blue marlin.</li>\n<li>Fishing gear used to catch tuna and swordfish rarely contacts the seafloor so habitat impacts are minimal.</li>\n<li>Restrictions on the type of fishing gear that can be used, and prohibitions on fishing in certain areas, minimize impacts on protected species.</li>\n<li>Interactions with protected species such as sea turtles, marine mammals, and seabirds in these fisheries are rare and survival rates are estimated to be high for all gear types.</li>\n<li>Longline fishermen are trained in safe handling and release techniques for sea turtles, seabirds, and marine mammals, and they carry and use specific equipment for handling and releasing these animals.</li>\n<li>Scientists and managers continue to monitor bycatch in these fisheries through logbooks and fishery observer programs.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Blue marlin are a favorite target for recreational fishermen, as the fish tend to put up an incredible fight when hooked.\n<ul></ul>\n</li>\n<li>Hawaii hosts one of the largest billfish tournaments in the United States. Most fish caught in recreational tournaments are tagged and released.</li>\n<li>There is little bycatch associated with the recreational fishery.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Blue marlin is low in saturated fat and sodium, and is a good source of vitamin B12, vitamin B6, selenium, niacin, and protein.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Blue marlin are deep cobalt blue on top and silvery white on the bottom.</li>\n<li>They have a pronounced dorsal fin and a long, spear-shaped upper jaw (bill).</li>\n</ul>\n',
        production: null,
        protein: '29 g',
        quote: 'U.S. wild-caught Pacific blue marlin is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations. ',
        quoteBackgroundColor: '#204ab7',
        research: null,
        saturatedFattyAcidsTotal: '0 g',
        selenium: '110 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '45 mg',
        source: '<p>U.S. wild-caught from waters around Hawaii, other U.S. Pacific Islands, and the high seas.</p>\n',
        sugarsTotal: null,
        taste: '<p>Rich, full flavor.</p>\n',
        texture: '<p>Firm and meaty, similar to swordfish.</p>\n',
        path: '/profiles/pacific-blue-marlin',
        lastUpdate: '05/06/2020 - 09:06',
        href: 'https://line-ready-api.azurewebsites.net/fish/95',
        method: null,
        rel: null,
    },
    {
        id: 94,
        fisheryManagement: '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a>, manage the Pacific cod fishery in Alaska.</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Gulf of Alaska Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Total allowable catch is allocated by gear type and processing sector in the western and central Gulf of Alaska and by processing sector (90 percent to the inshore sector and 10 percent to the offshore sector) in the eastern Gulf of Alaska.</li>\n</ul>\n</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-bering-sea-and-aleutian-islands-management-plan">Bering Sea/Aleutian Islands Groundfish Fishery Management Plan</a>:\n<ul>\n<li>10.7 percent of the allowable catch is allocated to the community development quota program, which benefits fishery-dependent communities in western Alaska. The rest is allocated among the various fishing sectors based on gear type, vessel size, and ability to process their catch.</li>\n</ul>\n</li>\n<li>In the Gulf of Alaska, Being Sea, and Aleutian Islands:\n<ul>\n<li>Fishermen must have a permit to participate in these fisheries, and the number of available permits is limited to control the amount of fishing.</li>\n<li>Managers determine how much Pacific cod can be caught and then allocate this catch quota among groups of fishermen. Catch is monitored through record keeping, reporting requirements, and observer monitoring.</li>\n<li>Fishermen must retain all of their Pacific cod catch.</li>\n</ul>\n</li>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the Pacific cod fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/groundfish/fishery-management-plan/">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Pacific cod are rarely available in large numbers to be caught in the groundfish fishery off the West Coast. Managers use recent historical harvest numbers to set precautionary limits on annual catch for this population.</li>\n<li>The West Coast groundfish trawl fishery is managed under a <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/catch_shares.cfm">trawl rationalization catch share program</a>.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>During the winter, Pacific cod live on the continental shelf edge and upper continental slope in waters 300 to more than 800 feet deep.</li>\n<li>In the summer, they move to shallower water (300 feet deep or less).</li>\n<li>Larvae and small juveniles are found throughout the water column, while large juveniles and adults live near the ocean floor and prefer habitats of mud, sand, and clay.</li>\n</ul>\n',
        habitatImpacts: 'Area closures and gear restrictions protect habitat that are affected by some types of fishing gear used to harvest Pacific cod.',
        imageGallery: null,
        location: '<ul>\n<li>Pacific cod are found in the coastal North Pacific Ocean, from the Bering Sea to Southern California in the east and to the Sea of Japan in the west.</li>\n<li>They are less common in Central California and are rare in Southern California.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'The Bering Sea stock is above target population levels. The Gulf of Alaska stock is below target levels and fishing rate promotes population growth. The Aleutian Islands and Pacific coast stocks have an unknown status.',
        populationStatus: '<ul>\n<li>There are four stocks of Pacific cod: Bering Sea, Gulf of Alaska, Aleutian Islands, and West Coast:\n<ul>\n<li>2018&nbsp;stock assessments in the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pacific-cod-stock-eastern-bering-sea">Bering Sea</a> and <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pacific-cod-stock-gulf-alaska">Gulf of Alaska</a> indicate that Pacific cod are not overfished and not subject to overfishing.&nbsp;</li>\n<li>The 2018 stock assessment for the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pacific-cod-stock-aleutian-islands">Aleutian Islands</a>&nbsp;stock&nbsp;indicates that it is not subject to overfishing, but data are insufficient to determine the population status at this time.</li>\n<li>The West Coast population of Pacific cod has never been formally assessed, but is not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/pdf/Groundfish_Mortality_2016.pdf">2018&nbsp;catch data</a>.</li>\n</ul>\n</li>\n<li>In Alaska, scientists and managers determine the population status of Pacific cod based on estimates of spawning biomass—a measure of the number of females in the population that are able to reproduce.\n<ul>\n<li>Estimated biomass has fluctuated over the past few decades; the stock increased rapidly, peaked in the 1980s, then declined slightly and stabilized.</li>\n</ul>\n</li>\n</ul>\n',
        scientificName: 'Gadus macrocephalus',
        speciesAliases: '<a href="/species-aliases/cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Cod</a>, <a href="/species-aliases/alaska-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Alaska cod</a>, <a href="/species-aliases/gray-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Gray cod</a>, <a href="/species-aliases/true-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">True cod</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/pacific_cod.png',
            alt: 'Illustration of a pacific cod',
            title: 'Pacific Cod',
        },
        speciesName: 'Pacific Cod',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Pacific cod live for 20 years or less.</li>\n<li>They can grow up to 6 feet in length.</li>\n<li>Females are able to reproduce when they’re 4 or 5 years old, when they are between 1.6 and 1.9 feet long.</li>\n<li>Pacific cod spawn from January to May on the continental shelf edge and upper slope in waters 330 to 820 feet deep.</li>\n<li>Females can produce more than 1 million eggs when they spawn.</li>\n<li>Pacific cod school together and move seasonally from deep outer and upper continental shelf areas (where they spawn) to shallow middle-upper continental shelf feeding grounds.</li>\n<li>They feed on clams, worms, crabs, shrimp, and juvenile fish.</li>\n</ul>\n',
        bycatch: 'Measures restricting the type of gear fishermen may use and when and where they may fish reduce bycatch of other species in the U.S. Pacific cod fisheries.',
        calories: '82',
        carbohydrate: null,
        cholesterol: '37 mg',
        color: '<p>Raw Pacific cod is opaque and creamy white. Cooked cod is white.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '0.63 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels. ',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>Pacific cod is the second largest commercial groundfish catch off Alaska and virtually all of the United States.</li>\n<li>In 2018, commercial harvest of Pacific cod totaled more than 512.9&nbsp;million pounds, and was worth more than $233&nbsp;million.&nbsp;</li>\n<li>Most Pacific cod comes from the Bering and Barents Seas and the Gulf of Alaska and is harvested by the United States, Canada, Russia, and Korea.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Pacific cod are typically harvested along with several different groundfish species with longlines (hook-and-line) and bottom trawl gear.</li>\n<li>Pots (or traps) and jig gear are also used to catch Pacific cod.</li>\n<li>In the Gulf of Alaska the dominant gear has been pots, in the Aleutian Islands trawl gear is predominantly used, and in the Bering Sea longline gear is used most frequently.</li>\n<li>Bottom trawl vessels cause minimal damage when targeting Pacific cod over soft ocean bottoms. Trawls can have negative impacts in areas where Pacific cod are associated with living structural habitats, such as corals and sea whips.</li>\n<li>Some areas are closed to certain gear types to protect sensitive habitat and organisms.</li>\n<li>In Alaska, measures restricting the type of gear fishermen may use and when and where they may fish reduce bycatch of other species in the Alaska Pacific cod fisheries.</li>\n<li>There are limits on the amount of Pacific halibut that can be incidentally caught in trawl and hook-and-line fisheries. Longlines are known to catch seabirds incidentally, but current <a href="https://www.fisheries.noaa.gov/alaska/bycatch/seabird-bycatch-alaska">measures</a> are reducing seabird bycatch.</li>\n<li>On the West Coast, area closures, reduced trip limits, non-retention rules, gear restrictions, and variable catch limits are used to help minimize impacts to overfished rockfish and prevent bycatch.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Recreational fishing for Pacific cod in Alaska is minor compared to commercial fishing and mainly takes place in state waters (within 3 miles of shore). Recreational fishermen follow state regulations.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Pacific cod is a good source of low-fat protein, phosphorus, niacin, and vitamin B12.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Pacific cod are also known as gray cod because of their color—they’re brown or grayish with dark spots or patterns on the sides and a paler belly.</li>\n<li>They have a long chin barbell (a whisker-like organ near the mouth, like on a catfish) and dusky fins with white edges.</li>\n</ul>\n',
        production: null,
        protein: '17.9 g',
        quote: 'U.S. wild-caught Pacific cod is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#7d6b4c',
        research: null,
        saturatedFattyAcidsTotal: '0.081 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '71 mg',
        source: '<p>U.S. wild-caught from Alaska, Washington, and Oregon.</p>\n',
        sugarsTotal: null,
        taste: '<p>Pacific cod is a mild-tasting fish.</p>\n',
        texture: '<p>Cooked Pacific cod is lean and flaky. Its moisture content is a bit higher than that of Atlantic cod, making the meat less firm.</p>\n',
        path: '/profiles/pacific-cod',
        lastUpdate: '03/20/2020 - 09:38',
        href: 'https://line-ready-api.azurewebsites.net/fish/94',
        method: null,
        rel: null,
    },
    {
        id: 93,
        fisheryManagement: '<ul>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the Pacific common thresher shark fishery on the West Coast.</li>\n<li>Managed under the <a href="http://www.wpcouncil.org/fishery-ecosystem-plans-amendments/pelagics-fishery-ecosystem-%20plan/">Fishery Management Plan for U.S. West Coast Fisheries for Highly Migratory Species</a>:\n<ul>\n<li>Permits are needed to fish for highly migratory species, including thresher sharks, and fishermen must maintain logbooks documenting their catch.</li>\n<li>Annual commercial harvest guidelines (a general objective for how much can be caught).</li>\n<li>Closed areas protect endangered turtles, and gillnetting is prohibited within 3 miles of the coast where shark pups reside.</li>\n<li>Fishermen are required to take a training course on safe handling and release of protected species.</li>\n<li>Mandatory placement (about 20 percent coverage) of at-sea observers on commercial drift gillnet vessels to monitor catch, bycatch, and fishing effort.</li>\n<li>Fishing times and areas are tightly managed to reduce the risk of catching protected species, such as sea turtles, whales, and dolphins.</li>\n</ul>\n</li>\n<li><a href="https://www.fisheries.noaa.gov/region/pacific-islands">NOAA Fisheries</a> and the <a href="http://wpcouncil.org/">Western Pacific Regional Fishery Management Council</a> manage the Pacific common thresher shark fishery in the Pacific Islands.</li>\n<li>Managed under the <a href="http://www.wpcouncil.org/fishery-plans-policies-reports/pelagics_fe/">Fishery Ecosystem Plan for the Pelagic Fisheries of the Western Pacific:</a>&nbsp;\n<ul>\n<li>Entry to this fishery is limited to a maximum of 164 vessels.</li>\n<li>Permits and logbooks are required.</li>\n<li>Observers are required on all Hawaii-based longline vessels.</li>\n<li><a href="https://www.fisheries.noaa.gov/topic/enforcement/vessel-monitoring">NOAA Fisheries vessel monitoring system (VMS) program</a> requires longline boats to be equipped with a satellite transponder that provides real-time vessel position updates and tracks vessel movements.</li>\n<li>Longlines are prohibited in certain areas to protect endangered Hawaiian monk seals and reduce the potential for gear conflicts and localized stock depletion.</li>\n<li>Vessels operating under longline general permits must carry special gear to release incidentally hooked or entangled sea turtles.&nbsp;</li>\n<li>There are no management measures specific to Pacific common thresher sharks, because in the Western Pacific they’re only harvested incidentally in the longline fishery for swordfish.</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>The <a href="https://www.fisheries.noaa.gov/national/laws-and-policies/shark-conservation-act">Shark Conservation Act</a> requires that all sharks, with one exception, be brought to shore with their fins naturally attached.</li>\n<li>Management of highly migratory species, like thresher sharks, is complicated because the species migrate thousands of miles across international boundaries and are fished by many nations.\n<ul>\n<li>Two international organizations, the <a href="http://www.iattc.org/HomeENG.htm" rel="external">Inter-American Tropical Tuna Commission (IATTC)</a> and the <a href="https://www.wcpfc.int/" rel="external">Western and Central Pacific Fisheries Commission (WCPFC)</a>&nbsp;manage highly migratory species, like sharks, internationally.&nbsp;</li>\n<li>No international measures are in place specific to common thresher sharks, but both organizations have passed shark conservation and management measures that combat shark finning practices and encourage further research and periodic stock assessment efforts for sharks.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Thresher sharks are highly migratory, and travel seasonally as temperatures change.</li>\n<li>They are commonly found close to shore in areas rich with plankton, where their prey is also abundant.</li>\n</ul>\n',
        habitatImpacts: 'Drift gillnets and harpoons used to catch common thresher sharks have no impact on habitat because they’re used in the water column and don’t contact the ocean floor.',
        imageGallery: null,
        location: '<ul>\n<li>Thresher sharks are found in the Eastern Pacific Ocean from Goose Bay, British Columbia, south to Baja California. They’re also found off Panama and Chile.</li>\n<li>They migrate seasonally between Oregon/Washington and southern California/Baja Peninsula, Mexico.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels.',
        populationStatus: '<ul>\n<li>According to the <a href="https://doi.org/10.7289/V5/TM-SWFSC-595">2018 stock assessment</a>, Pacific common thresher sharks are not overfished and not subject to overfishing.</li>\n</ul>\n',
        scientificName: 'Alopias vulpinus',
        speciesAliases: '<a href="/species-aliases/thresher-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Thresher shark</a>, <a href="/species-aliases/fox-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Fox shark</a>, <a href="/species-aliases/sea-fox" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sea fox</a>, <a href="/species-aliases/swingletail" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Swingletail</a>, <a href="/species-aliases/whiptail-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Whiptail shark</a>, <a href="/species-aliases/thintail-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Thintail shark</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/atlantic_common_thresher_shark.png',
            alt: 'Illustration of a Pacific Common Thresher Shark',
            title: 'Pacific Common Thresher Shark',
        },
        speciesName: 'Pacific Common Thresher Shark',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Thresher sharks grow slowly, reaching lengths up to 18 feet.</li>\n<li>They live a long time, between 19 and 50 years.</li>\n<li>They mature when they reach about 5 years old and 5 feet in length.</li>\n<li>Thresher sharks mate in midsummer. Eggs are fertilized internally and develop inside the female.</li>\n<li>After a gestation period of about 9 months, females bear two to four live pups in the spring.</li>\n<li>Thresher sharks feed on small pelagic fish—including anchovies, sardines, hake, mackerel, and squid.</li>\n<li>They are named for their long, scythe-like tail, which they use to swat and stun fish before preying on them.</li>\n<li>Top-level predators, such as killer whales and larger sharks, prey on common threshers.</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch. ',
        calories: '130',
        carbohydrate: null,
        cholesterol: '51 mg',
        color: '<p>Raw meat is white to tan with a pink blood line.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '4.51 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>In 2018, commercial landings of thresher shark on the West Coast totaled more than 98,700 pounds and were valued at more than $73,300.\n<ul>\n<li>Most&nbsp;thresher shark landings&nbsp;are in&nbsp;California.</li>\n</ul>\n</li>\n<li>Gear types and bycatch:\n<ul>\n<li>Drift gillnets are used to catch common thresher sharks.</li>\n<li>Drift gillnets can incidentally catch other species, such as ocean sunfish and blue sharks.</li>\n<li>Protected species, such as sperm whales and sea turtles, may be caught as bycatch in drift gillnet fisheries.</li>\n<li>Managers limit where and when drift gillnet fishermen can fish to help prevent bycatch. Logbooks and observer programs help monitor bycatch.</li>\n<li>The California thresher shark gillnet fishery is a <a href="https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-protection-act-list-fisheries">Category I fishery</a>, meaning it has frequent incidental mortality or serious injury of marine mammals.\n<ul>\n<li>NOAA Fisheries works with the federally appointed <a href="https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-take-reduction-plans-and-teams">Pacific Offshore Cetacean Take Reduction Team</a> to develop measures that reduce the impacts of this fishery on certain marine mammals.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>On the West Coast, recreational catch varies but has averaged roughly 20 metric tons in recent years. Recreational fishermen have daily bag limits for thresher sharks.</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>High in protein, low in fat, and a good source of niacin, vitamin B6, phosphorous, and selenium. More information on <a href="https://www.fishwatch.gov/eating-seafood/health">health and seafood</a>.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Thresher sharks are brown, gray, blue-gray, or blackish on the back and underside of their snout.</li>\n<li>They are lighter on the sides, and fully white below.</li>\n<li>Fins are blackish, and some have white dots on the tips.</li>\n<li>Their tail fin is sickle-shaped, and the upper part is very long, about half the length of the body.</li>\n</ul>\n',
        production: null,
        protein: '20.98 g',
        quote: 'U.S. wild-caught Pacific common thresher shark is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#4e6172',
        research: null,
        saturatedFattyAcidsTotal: '0.925 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '79 mg',
        source: '<p>U.S. wild-caught from California and the Pacific Islands.&nbsp;</p>\n',
        sugarsTotal: null,
        taste: '<p>Mild flavor.</p>\n',
        texture: '<p>Firm, dense, and meat-like.</p>\n',
        path: '/profiles/pacific-common-thresher-shark',
        lastUpdate: '05/13/2020 - 10:35',
        href: 'https://line-ready-api.azurewebsites.net/fish/93',
        method: null,
        rel: null,
    },
    {
        id: 92,
        fisheryManagement: '<ul>\n<li><a href="https://www.sefsc.noaa.gov/species/fish/amberjack.htm">NOAA Fisheries</a> and the <a href="http://www.safmc.net/">South Atlantic</a>, <a href="http://www.gulfcouncil.org/">Gulf of Mexico</a>, and <a href="https://caribbeanfmc.com/">Caribbean</a> Fishery Management Councils manage the greater amberjack fishery. The governments of Puerto Rico and the U.S. Virgin Islands manage the greater amberjack fishery in territorial waters.</li>\n<li>In the South Atlantic, managed under the <a href="http://www.safmc.net/resource-library/snapper-grouper">Snapper-Grouper Fishery Management Plan</a>:\n<ul>\n<li>Fishermen must have a limited access snapper grouper permit to commercially harvest greater amberjack. Anyone entering the commercial fishery must buy two transferable vessel permits in order to qualify for a newly issued permit, thus eliminating one permit each time a new person enters the commercial fishery.</li>\n<li>Commercial and recreational size limits, to ensure that fish grow large enough to reproduce.</li>\n<li>Commercial trip and recreational bag limits.</li>\n<li>During April of each year, the commercial fishing season is closed to alleviate fishing pressure when the fish aggregate to spawn and are highly vulnerable to fishing. The sale and purchase of greater amberjack during this seasonal closure is illegal.</li>\n<li>To help protect deep-water snapper grouper species and their habitats, there are restrictions on the use of bottom longline and trawl fishing gear.</li>\n<li>There are eight deep-water marine protected areas intended to protect habitats.</li>\n</ul>\n</li>\n<li>In the Gulf of Mexico, managed under the <a href="http://www.gulfcouncil.org/fishery_management_plans/reef_fish_management.php">Reef Fish Resources of the Gulf of Mexico Fishery Management Plan</a>:\n<ul>\n<li>Commercial and recreational size limits ensure that fish grow large enough to reproduce.</li>\n<li>Commercial and recreational trip and bag limits.</li>\n<li>To promote spawning and slow the rate of harvest, closed seasons have been implemented for the commercial (from March 1 through May 31) and recreational (from June 1 through July 31) fisheries.</li>\n<li>To help protect reef fish, sea turtles, and bottom habitat, there are restrictions on the use of longline gear.</li>\n</ul>\n</li>\n<li>In federal waters of the U.S. Caribbean, greater amberjack are managed under the <a href="https://caribbeanfmc.com/fishery-management/fishery-management-plans">Fishery Management Plan for the Reef Fish Fishery of Puerto Rico and the U.S. Virgin Islands</a>, and territorial regulations in each of Puerto Rico and the U.S. Virgin Islands:\n<ul>\n<li>In federal waters of the U.S. Caribbean, greater amberjack are managed as part of three island-level Jacks Complexes (Puerto Rico, St.Thomas/St. John, and St. Croix), which include seven jack species. A stock complex, such as the Jacks Complex, includes multiple fish stocks that are managed as one unit in a fishery.</li>\n<li>Recreational bag limits apply to the jacks complex in federal waters of the U.S. Caribbean.</li>\n<li>In Puerto Rico territorial waters, greater amberjack cannot be sold.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Juvenile greater amberjack school around mats of pelagic (open ocean) <em>Sargassum</em> in the Gulf of Mexico. Sargassum is an algae that provides food and protection for juvenile fish and invertebrates in the open ocean. Schooling behavior decreases as greater amberjack mature.</li>\n<li>They shift from inhabiting pelagic to demersal (near the ocean bottom) habitats at about 5 to 6 months of age. Sub-adults and adults congregate around reefs, rocky outcrops, and wrecks at depths of 60 to 240 feet.</li>\n<li>Some populations live in a particular location while others migrate, likely using a variety of habitats and areas throughout the year.</li>\n</ul>\n',
        habitatImpacts: 'Fishing gear used to catch greater amberjack rarely contacts the ocean floor and has minimal impacts on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Greater amberjack are found in the Atlantic and Pacific Oceans.</li>\n<li>In the western Atlantic, they are found from Nova Scotia to Brazil, including the Gulf of Mexico and the Caribbean.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels in the South Atlantic, but significantly below target population levels in the Gulf of Mexico, where a rebuilding plan is in place. The population level in the Caribbean is unknown.',
        populationStatus: '<ul>\n<li>According to the <a href="http://sedarweb.org/sedar-33u-0">2017&nbsp;stock assessment</a>, Gulf of Mexico greater amberjack is&nbsp;overfished, and is&nbsp;subject to overfishing based on 2018&nbsp;catch data.</li>\n<li>According to the <a href="http://sedarweb.org/sedar-15">2008 stock assessment</a>, South Atlantic greater amberjack is&nbsp;not overfished, but&nbsp;is&nbsp;subject to overfishing based on 2018 catch data.</li>\n<li>The population status of the U.S. Caribbean Jacks Complex, which includes greater amberjack, is unknown. The complex has not been assessed, but according to 2016&nbsp;catch data, the complex is not subject to overfishing.</li>\n<li>During the period of high landings in the 1980s and 1990s, greater amberjack became an important alternative for red drum, which experienced decreases in commercial landings. In the Gulf of Mexico, fishing rates were too high and the stock was declared overfished in 2001. The stock has been in a rebuilding plan since 2003.</li>\n</ul>\n',
        scientificName: 'Seriola dumerili',
        speciesAliases: '<a href="/species-aliases/amberjack" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Amberjack</a>, <a href="/species-aliases/medregal" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Medregal</a>, <a href="/species-aliases/coronado" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Coronado</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/greater_amberjack.png',
            alt: 'Illustration of a Greater Amberjack.',
            title: 'Greater Amberjack',
        },
        speciesName: 'Greater Amberjack',
        animalHealth: null,
        availability: '<p>Fresh (except in April when fishery is closed) and frozen year-round.</p>\n',
        biology: '<ul>\n<li>Greater amberjack can grow up to 6 feet long and live to be 17 years old.</li>\n<li>Adults can weigh up to 200 pounds, but are most commonly found to be up to 40 pounds.</li>\n<li>Females grow larger in size and live longer than males.</li>\n<li>Greater amberjack mature at about 3 to 4 years of age and spawn primarily from March to June on reefs and shipwrecks. A female can release between 18 and 59 million eggs during a single spawning season.</li>\n<li>Adults eat mostly crab, squid, and other fishes found on reefs.</li>\n<li>Juveniles feed on plankton, including crustacean larvae and other small invertebrates.</li>\n<li>Predators include seabirds and larger fishes, such as yellowfin tuna.</li>\n</ul>\n',
        bycatch: 'Bycatch is low because the gears used to catch greater amberjack are selective.',
        calories: '146',
        carbohydrate: null,
        cholesterol: '55 mg',
        color: '',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '5.24 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'In the South Atlantic and Gulf of Mexico reduced to end overfishing.',
        harvest: '<ul>\n<li>In 2017, commercial landings of greater amberjack totaled more than 1.1 million pounds and were valued at more than $1.8&nbsp;million.</li>\n<li>Electric and hydraulic reels and hand lines are used to catch most of the commercial harvest of greater amberjack. Recreational harvest is by hook-and-line.</li>\n<li>Greater amberjack are large trophy fish prized by anglers, and recreational landings totaled approximately 610,000 pounds in 2017.</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Greater amberjack have a dark amber strip on their head, extending from their nose to their first dorsal (back) fin, which becomes more defined when the fish is excited or feeding.</li>\n<li>They have a brownish or bluish-grey back, a silvery-white belly, and an amber horizontal strip along the middle of their body.</li>\n<li>Juveniles have a yellow color and five or six dark vertical bars along the sides.</li>\n</ul>\n',
        production: null,
        protein: '23.1 g',
        quote: 'Although some populations are below target levels, U.S. wild-caught greater amberjack is still a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#ada24c',
        research: null,
        saturatedFattyAcidsTotal: '1.28 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '39 mg',
        source: '<p>U.S. wild-caught from Virginia to Texas, including the U.S. Caribbean.</p>\n',
        sugarsTotal: null,
        taste: '<p><span>Greater amberjack has a sweet, mild flavor.</span></p>\n',
        texture: '<p>Tender, firm, and delicate. The high oil content gives it a buttery texture.</p>\n',
        path: '/profiles/greater-amberjack',
        lastUpdate: '02/07/2020 - 14:45',
        href: 'https://line-ready-api.azurewebsites.net/fish/92',
        method: null,
        rel: null,
    },
    {
        id: 91,
        fisheryManagement: '<ul>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the petrale sole fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/groundfish/fishery-management-plan/">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Limits on the number of <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_permits/limited_entry_permits.html">permits</a> and fishermen allowed.</li>\n<li>Limits on the minimum size of fish that may be harvested.</li>\n<li>Limit on how much may be harvested in one fishing trip.</li>\n<li>Certain seasons and <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_closures/groundfish_closed_areas.html">areas</a> are closed to fishing.</li>\n<li>Gear restrictions help reduce bycatch and impacts on habitat.</li>\n<li>A <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/groundfish_catch_shares/index.html">trawl rationalization catch share program</a> includes:\n<ul>\n<li>Catch limits based on population information for each fish stock and divided into shares that are allocated to individual fishermen or groups.</li>\n<li>These fishermen can decide how and when to catch their share – preferably when weather, markets, and business conditions are most favorable, allowing the fishery the flexibility to be more environmentally responsible, safer, more efficient, and more valuable.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage the petrale sole fishery in Alaska.</li>\n<li>Managed under the Fishery Management Plan for Groundfish in the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Gulf of Alaska</a>, and the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-bering-sea-and-aleutian-islands-management-plan">Bering Sea and Aleutian Islands</a>:\n<ul>\n<li>There is no directed fishery for this species off Alaska, and only minor amounts are landed incidentally in other fisheries.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Petrale sole are common on the outer continental shelf in water 330 to 500 feet deep, but can be found in depths ranging from 50 to 1,370 feet.</li>\n<li>Adults migrate seasonally from deep water where they spawn to shallow water where they feed in the summer.</li>\n<li>Eggs and larvae are found in surface waters, and juveniles and adults live on sandy and muddy bottoms.</li>\n</ul>\n',
        habitatImpacts: 'Area closures and gear restrictions protect habitats that are affected by bottom trawls used to harvest petrale sole. ',
        imageGallery: null,
        location: '<ul>\n<li>Petrale sole are found from Alaska to Coronado Island, Baja California.</li>\n<li>They are rare north and west of southeast Alaska and in the interior waters of British Columbia.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels on the West Coast and in the Gulf of Alaska. ',
        populationStatus: '<ul>\n<li>According to the <a href="https://www.pcouncil.org/stock-assessments-star-reports-stat-reports-rebuilding-analyses-terms-of-reference/">2015&nbsp;stock assessment</a> petrale sole on the West Coast are not overfished.\n<ul>\n<li>This population was declared overfished in 2009, and after a rebuilding plan and strict harvest limits were put in place, the stock was declared rebuilt in 2015.</li>\n</ul>\n</li>\n<li>On the West Coast, petrale sole is not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/data_products/species_management.cfm">2018&nbsp;catch data</a>.</li>\n<li>In the Gulf of Alaska, petrale sole is part of a complex with other flatfish, called the “shallow water flatfish complex”:\n<ul>\n<li>According to the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-shallow-water-flatfish-stock-complex-gulf-alaska">2018&nbsp;assessment</a>, this complex is not overfished and is not subject to overfishing.</li>\n</ul>\n</li>\n<li>In the Bering Sea/Aleutian Islands, petrale sole is part of a complex with other flatfish, called the “other flatfish complex”:\n<ul>\n<li>This complex was last <a href="https://www.fisheries.noaa.gov/resource/data/assessment-other-flatfish-stock-complex-bering-sea-and-aleutian-islands">assessed in 2018</a>, but data were insufficient to determine whether the complex is overfished.</li>\n<li>An overfishing level is set for the complex and, as long as this level is not exceeded, the complex is not subject to overfishing. The complex is not subject to overfishing.</li>\n</ul>\n</li>\n</ul>\n',
        scientificName: 'Eopsetta jordani',
        speciesAliases: '<a href="/species-aliases/sole" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sole</a>, <a href="/species-aliases/flounder" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Flounder</a>, <a href="/species-aliases/california-sole" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">California sole</a>, <a href="/species-aliases/brill" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Brill</a>, <a href="/species-aliases/petral" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Petral</a>, <a href="/species-aliases/jordan%E2%80%99s-flounder" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Jordan’s flounder</a>, <a href="/species-aliases/round-nosed-sole" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Round-nosed sole</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/petrale_sole.png',
            alt: 'Illustration of a petrale sole',
            title: '',
        },
        speciesName: 'Petrale Sole',
        animalHealth: null,
        availability: '<p>Year-round.</p>\n',
        biology: '<ul>\n<li>Petrale sole grow fast when they’re young, and females tend to grow faster than males.</li>\n<li>Females can reach up to 24 inches long, while males may reach up to 18 inches long.</li>\n<li>They can live up to 35 years, but recent data suggests few live longer than 17 years.</li>\n<li>Petrale sole can reproduce when they are 3 to 8 years old, or when they’re about 1 foot long. Females can produce 400,000 to 1.5 million eggs.</li>\n<li>They spawn from November to April in British Columbia, Washington, and Oregon. Spawning begins slightly earlier in California.</li>\n<li>Petrale sole is a broadcast spawner. Males and females release their sperm and eggs into the water column and eggs are fertilized externally.</li>\n<li>Eggs hatch in 6 to 13.5 days, depending on water temperatures.</li>\n<li>Petrale sole larvae spend their first 5 to 6 months up in the water column before they transform to their adult form and settle to the bottom.</li>\n<li>Petrale sole larvae eat plankton. Small juveniles eat mysids, sculpins, and other juvenile flatfish. Large juveniles and adults eat shrimp and other crustaceans, as well as krill, pelagic fishes, brittle stars, and juvenile petrale sole.</li>\n<li>Plankton-eating invertebrates and pelagic fishes eat petrale sole eggs. Adult petrale sole and other large flatfishes prey on juvenile petrale sole.</li>\n<li>Sharks, bottom-feeding marine mammals, larger flatfishes, and pelagic fishes feed on adults.</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch.',
        calories: '91',
        carbohydrate: null,
        cholesterol: '48 mg',
        color: '',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '1.19 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>In 2018, commercial landings of petrale sole totaled more than 6.4 million pounds and were valued at $7.4 million.</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Bottom trawls are used to catch petrale sole.</li>\n<li>Trawls that are used to harvest petrale sole can contact the ocean floor and impact habitats, depending on the characteristics of the ocean bottom and the size of the gear.</li>\n<li>Bottom trawls cause minimal damage to habitat when targeting petrale sole over soft, sandy, or muddy ocean bottoms on the West Coast and Alaska.</li>\n<li>On the West Coast, NOAA Fisheries and the North Pacific Fishery Management Council have implemented large <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_closures/groundfish_closed_areas.html">closed areas</a> to minimize bycatch and protect habitat.</li>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/vms.html">Vessel monitoring systems</a> allow enforcement staff and fishery managers to monitor GPS locations of fishing activities to ensure vessels are complying with closed areas.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Petrale sole is an excellent source of low-fat protein and calcium.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Petrale sole is a right-eyed flounder (both eyes are on its right side), with an oval to round body.</li>\n<li>Its upper side is uniform light to dark brown, and its underside is white, sometimes with pink traces.</li>\n<li>Petrale sole have large mouths, with two rows of small, arrow-shaped teeth on their upper jaw and one row of teeth on the lower jaw.</li>\n</ul>\n',
        production: null,
        protein: '18.84 g',
        quote: 'U.S. wild-caught petrale sole is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#555555',
        research: null,
        saturatedFattyAcidsTotal: '0.283 g',
        selenium: '32.7 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '81 mg',
        source: '<p>U.S. wild-caught from Washington to California.</p>\n',
        sugarsTotal: null,
        taste: '<p>Sweet, delicate, nutty flavor.</p>\n',
        texture: '<p>Fine.&nbsp;</p>\n',
        path: '/profiles/petrale-sole',
        lastUpdate: '05/14/2020 - 16:55',
        href: 'https://line-ready-api.azurewebsites.net/fish/91',
        method: null,
        rel: null,
    },
    {
        id: 90,
        fisheryManagement: '<ul>\n<li><a href="https://www.greateratlantic.fisheries.noaa.gov/index.html">NOAA Fisheries</a>, the <a href="http://www.mafmc.org/">Mid-Atlantic Fishery Management Council</a>, and the <a href="http://www.asmfc.org/species/black-sea-bass" rel="external">Atlantic States Marine Fisheries Commission</a> cooperatively manage the black sea bass fishery north of Cape Hatteras, North Carolina.</li>\n<li>Managed under the <a href="http://www.mafmc.org/sf-s-bsb/">Summer Flounder, Scup, and Black Sea Bass Fishery Management Plan</a>:\n<ul>\n<li>Annual catch limit divided between the commercial and recreational fisheries.</li>\n<li>The commercial catch limit is further divided among the states based on historical harvests.</li>\n<li>Specific management measures for the commercial fishery include:\n<ul>\n<li>Minimum size limits.</li>\n<li>Minimum mesh requirements for trawls.</li>\n<li>A moratorium on entry into the fishery.</li>\n<li>Closed seasons.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href="http://sero.nmfs.noaa.gov/index.html">NOAA Fisheries</a> and the <a href="http://safmc.net/">South Atlantic Fishery Management Council</a> manage the black sea bass fishery south of Cape Hatteras, North Carolina.</li>\n<li>Managed under the <a href="http://safmc.net/resource-library/snapper-grouper">South Atlantic Snapper Grouper Fishery Management Plan</a>:\n<ul>\n<li>Commercial fishermen must have a permit to harvest black sea bass.</li>\n<li>Annual catch limits, commercial trip limits, and recreational bag and possession limits.</li>\n<li>Sale and purchase restrictions applicable after a commercial quota closure.</li>\n<li>Minimum size limit.</li>\n<li>Accountability measures in place to ensure overfishing does not occur, or to correct for overages if catch limit is exceeded.</li>\n<li>Seasonal area closures for the commercial black sea bass component of the snapper-grouper fishery.</li>\n<li>Trawling has been banned in the South Atlantic since 1989 to prevent impacts to habitat.</li>\n<li>Gear restrictions for fish pots:\n<ul>\n<li>Commercial fishermen must have a pot endorsement to use a black sea bass pot to harvest black sea bass.</li>\n<li>Minimum mesh size to reduce catch of undersized black sea bass.</li>\n<li>Pots must have escape vents and escape panels with degradable fasteners to prevent bycatch.</li>\n<li>Limit on the number of pots per trip.</li>\n<li>Pots must be brought back to shore at the end of each trip to reduce bycatch and impacts to habitat and protected species.</li>\n<li>Pots are only allowed north of Cape Canaveral, Florida, to prevent adverse impacts on live-bottom habitat.</li>\n<li>Spatial and temporal closures to minimize entanglement risk for endangered North Atlantic Right Whales.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Black sea bass prefer structured habitats such as reefs, wrecks, or oyster beds in temperate and subtropical waters.</li>\n<li>In the Mid-Atlantic (north of Cape Hatteras, North Carolina), they migrate seasonally as water temperature changes.</li>\n<li>They generally migrate to inshore coastal areas and bays in the spring and offshore in the fall.</li>\n<li>In the South Atlantic, black sea bass do not tend to migrate as far.</li>\n</ul>\n',
        habitatImpacts: 'Fishing gears used to harvest black sea bass have minimal impacts on habitat.',
        imageGallery: null,
        location: '<ul>\n<li>Along the U.S. East Coast from Cape Cod to the Gulf of Mexico.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Above target population levels in the Mid-Atlantic. Below target levels and fishing rate promotes population growth in the South Atlantic.',
        populationStatus: '<ul>\n<li>According to the <a href="https://www.fisheries.noaa.gov/resource/publication-database/northeast-stock-assessment-documents-search-tool">2019&nbsp;</a><a href="https://www.nefsc.noaa.gov/saw/reports.html">stock assessment</a>, the black sea bass stock in the Mid-Atlantic is not overfished and is not subject to overfishing.</li>\n<li>According to the <a href="http://sedarweb.org/docs/sar/S56_SA_BSB_SAR_FINAL_4.6.2018.pdf">2018&nbsp;stock assessment</a>, the black sea bass stock in the South Atlantic is not overfished&nbsp;and is not subject to overfishing.</li>\n<li>Although both stocks of black sea bass have been assessed, the biology of this species is not well known and data are lacking, resulting in stock assessments that have a high degree of uncertainty.</li>\n<li>In the Mid-Atlantic, scientists at <a href="https://www.nefsc.noaa.gov/">NOAA’s Northeast Fisheries Science Center</a> conduct bottom trawl surveys to estimate the abundance of black sea bass and other species.</li>\n<li>In the South Atlantic, scientists, managers, and stakeholders assess the status of these stocks through the <a href="http://sedarweb.org/">Southeast Data, Assessment, and Review (SEDAR)</a> process.</li>\n</ul>\n',
        scientificName: 'Centropristis striata',
        speciesAliases: '<a href="/species-aliases/sea-bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sea bass</a>, <a href="/species-aliases/blackfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Blackfish</a>, <a href="/species-aliases/rock-bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Rock bass</a>, <a href="/species-aliases/black-bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Black bass</a>, <a href="/species-aliases/tallywag" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Tallywag</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/black_sea_bass_0.png',
            alt: 'Black sea bass',
            title: 'Black sea bass',
        },
        speciesName: 'Black Sea Bass',
        animalHealth: null,
        availability: '<p>Generally year-round, but varies by state.</p>\n',
        biology: '<ul>\n<li>Black sea bass grow slowly, up to 2 feet and 9 pounds.</li>\n<li>They are able to reproduce when they reach 1 to 3 years old.</li>\n<li>They are protogynous hermaphrodites—most black sea bass start out as females, and as they mature and grow they become males. Researchers aren’t sure why this happens, but one hypothesis suggests the relative scarcity of males in a spawning group may be the stimulus for a female to switch sex.</li>\n<li>Black sea bass spawn in coastal areas from January through July.</li>\n<li>Males gather a group of females to mate with and aggressively defend their territory.</li>\n<li>Depending on their size, females can produce between 30,000 and 500,000 eggs in a spawning season.</li>\n<li>Females can live up to 8 years; males live up to 12.</li>\n<li>Black sea bass eat whatever prey is available, but they especially like crabs, shrimp, worms, small fish, and clams.</li>\n<li>Little skate, spiny dogfish, monkfish, spotted hake, and summer flounder all feed on black sea bass.</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch.',
        calories: '97',
        carbohydrate: null,
        cholesterol: '41 mg',
        color: '<p>Uncooked meat should be sparkling white and translucent. The meat is snow white when cooked.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '2 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended levels.',
        harvest: '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of black sea bass in the Mid-Atlantic totaled approximately 3.07 million pounds, and were valued at approximately $10.94 million.</li>\n<li>In 2018, commercial landings of black sea bass in the South Atlantic totaled 562,800 pounds, and were valued at approximately $1.74 million.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>In the Mid-Atlantic, commercial fishermen mainly use hook-and-line gear, pots, and otter trawls to catch black sea bass. Fisheries for black sea bass change seasonally with the species’ migrations.\n<ul>\n<li>Of the gear utilized within the snapper grouper fishery, only the black sea bass pot is considered to pose an entanglement risk to marine mammals.</li>\n<li>When the fish are inshore, commercial fishermen catch them primarily with fish pots (both baited and unbaited) and handlines.</li>\n<li>Once the fish move offshore in the winter, they’re caught in the trawl fishery that primarily targets summer flounder, scup, and longfin squid.</li>\n</ul>\n</li>\n<li>In the South Atlantic, fishermen use pots and sometimes handlines.\n<ul>\n<li>Fish bycatch in the pot fishery is minor because the gear is often not baited (black sea bass are drawn to the structure and enter the pots without bait), and the pot mesh size is regulated to select fish at or above the minimum size limit.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Recreational fishery: Recreational fishermen use handlines to catch black sea bass.&nbsp;In 2018, recreational landings totaled more than 8.7 million pounds.\n<ul>\n<li>In the Mid-Atlantic:\n<ul>\n<li>There are size and bag limits, and seasonal measures, established for federal waters as well as by each state, to ensure that the recreational harvest limit is not exceeded.</li>\n<li>The recreational fishery is evaluated after the season, and management measures (bag, size, and/or season) are adjusted as needed in the following year.</li>\n</ul>\n</li>\n<li>In the South Atlantic:\n<ul>\n<li>There are size limits, fishing season, and daily and yearly catch limits, established for federal waters as well as by each state.</li>\n<li>There is a limit on annual recreational harvest, and recreational harvest is prohibited when the limit is met. If annual catch exceeds the limit, the overage is taken off the following year’s limit.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Black sea bass is a good low-fat source of protein and magnesium.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Black sea bass are usually black, but smaller ones are more of a dusky brown.</li>\n<li>The belly is slightly paler than the sides.</li>\n<li>Fins are dark with dusky spots.</li>\n<li>The dorsal fin is marked with a series of white spots and bands.</li>\n<li>During spawning, dominant males turn bright blue and have a blue hump on their heads.</li>\n</ul>\n',
        production: null,
        protein: '18.43 g',
        quote: 'U.S. wild-caught black sea bass is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#4c4e4d',
        research: null,
        saturatedFattyAcidsTotal: '0.511 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '68 mg',
        source: '<p>U.S. wild-caught from Massachusetts to the west coast of Florida. The United States is the only source for this species.</p>\n',
        sugarsTotal: null,
        taste: '<p>Mild, fresh, somewhat delicate flavor.</p>\n',
        texture: '<p>Tender but firm.</p>\n',
        path: '/profiles/black-sea-bass',
        lastUpdate: '03/20/2020 - 16:29',
        href: 'https://line-ready-api.azurewebsites.net/fish/90',
        method: null,
        rel: null,
    },
    {
        id: 89,
        fisheryManagement: '<ul>\n<li><a href="http://www.greateratlantic.fisheries.noaa.gov/index.html">NOAA Fisheries</a>, the <a href="http://www.mafmc.org/">Mid-Atlantic Fishery Management Council</a>, and the <a href="http://asmfc.org/" rel="external">Atlantic States Marine Fisheries Commission</a> manage the bluefish fishery.</li>\n<li>Managed under the <a href="http://www.mafmc.org/fisheries/fmp/bluefish">Bluefish Fishery Management Plan</a>:\n<ul>\n<li>Commercial fishermen must have a permit to catch and sell bluefish.</li>\n<li>Managers set an annual catch limit.</li>\n<li>The majority of catch is allocated to the recreational fisheries.</li>\n<li>The commercial catch limit is divided into state-specific allocations. Unused recreational catch can be re-allocated to commercial fisheries.</li>\n</ul>\n</li>\n</ul>\n',
        habitat: '<ul>\n<li>Bluefish live in temperate and tropical coastal oceans around the world, except in the eastern Pacific.</li>\n<li>They gather by size in schools that can cover tens of square miles of ocean, equivalent to 10,000 football fields.</li>\n<li>Bluefish migrate seasonally, moving north in spring and summer as water temperatures rise and then south in autumn and winter to waters in the South Atlantic Bight.</li>\n<li>Females release their eggs in the open ocean.</li>\n<li>Larvae develop into juveniles near the surface in continental shelf waters and eventually move to estuarine and nearshore shelf habitats.</li>\n<li>Juveniles prefer sandy ocean bottoms but will also inhabit mud, silt, or clay ocean bottoms or vegetated areas.</li>\n<li>Adults live in both inshore and offshore areas and favor warmer water.</li>\n</ul>\n',
        habitatImpacts: 'Recreational fishermen use hook-and-line gear that has minimal impacts on habitat. Commercial fishermen use a variety of gears including trawls, gillnets, haul seines, and pound nets, and the impacts vary by gear type.',
        imageGallery: null,
        location: '<ul>\n<li>Along the East Coast from Maine to eastern Florida.</li>\n</ul>\n',
        management: null,
        noaaFisheriesRegion: null,
        population: 'Significantly below target population levels. The council has 2 years from the time it is notified of status to develop a rebuilding plan.',
        populationStatus: '<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/saw/reviews_report_options.php">2019 stock assessment</a>, bluefish are overfished and not subject to overfishing.</li>\n<li>The current bluefish stock assessment uses landings data from the commercial and recreational fisheries, NOAA’s Northeast Fisheries Science Center’s autumn bottom trawl survey, and numerous state surveys conducted along the East Coast.</li>\n</ul>\n',
        scientificName: 'Pomatomus saltatrix',
        speciesAliases: '<a href="/species-aliases/tailor" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Tailor</a>, <a href="/species-aliases/snapper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Snapper</a>, <a href="/species-aliases/baby-blues" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Baby blues</a>, <a href="/species-aliases/choppers" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Choppers</a>, <a href="/species-aliases/elfs" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Elfs</a>',
        speciesIllustrationPhoto: {
            src: 'https://www.fishwatch.gov/sites/default/files/bluefish.png',
            alt: 'Bluefish',
            title: 'Bluefish',
        },
        speciesName: 'Bluefish',
        animalHealth: null,
        availability: '<p>Fresh year-round, but varies by area. Not available frozen. Buy in season, and plan to cook within a day of purchase.</p>\n',
        biology: '<ul>\n<li>Bluefish live up to 12&nbsp;years.</li>\n<li>They grow fast, up to 31 pounds and 39 inches.</li>\n<li>They are able to reproduce at age 2, when they’re 15 to 20 inches in length.</li>\n<li>Depending on their size, females can have between 400,000 and 2 million eggs.</li>\n<li>Bluefish spawn multiple times in spring and summer.</li>\n<li>They exhibit feeding behavior called the “bluefish blitz,” where large schools of big fish attack bait fish near the surface, churning the water like a washing machine. They feed voraciously on their prey, eating almost anything they can catch and swallow.</li>\n<li>Bluefish have razor-sharp teeth and shearing jaws that allow them to ingest large parts, increasing the maximum size of the prey they can eat.</li>\n<li>They eat squid and fish, particularly menhaden and smaller fish such as silversides.</li>\n<li>Sharks, tunas, and billfishes are typically the only fish predators large and fast enough to prey on adult bluefish.</li>\n<li>Bluefish make up a major part of the diet of <a href="https://www.fishwatch.gov/profiles/atlantic-shortfin-mako-shark">shortfin mako sharks</a>&nbsp;and are also very important in the diets of <a href="https://www.fishwatch.gov/profiles/north-atlantic-swordfish">swordfish</a>.</li>\n<li>Oceanic birds prey on juvenile bluefish.</li>\n</ul>\n',
        bycatch: 'Regulations are in place to minimize bycatch.',
        calories: '124',
        carbohydrate: null,
        cholesterol: '59 mg',
        color: '<p>The meat of raw bluefish is light putty to blue-gray in color with a brownish tinge. It becomes lighter when cooked.</p>\n',
        diseaseTreatmentandPrevention: null,
        diseasesinSalmon: null,
        displayedSeafoodProfileIllustration: null,
        ecosystemServices: null,
        environmentalConsiderations: null,
        environmentalEffects: null,
        farmingMethods: null,
        fatTotal: '4.24 g',
        feeds_: null,
        feeds: null,
        fiberTotalDietary: null,
        fishingRate: 'At recommended level.',
        harvest: '<ul>\n<li>Commercial landings in 2018 totaled approximately 1,100 metric tons and were valued at more than $2.2 million.</li>\n<li>Recreational harvest in 2018 was estimated at over &nbsp;6,100metric tons.</li>\n<li>Florida, North Carolina, and New Jersey account for the largest percentage of the recreational bluefish harvest.</li>\n<li>Peak recreational harvest occurs from May through October with over 70 percent of the catch in July and August.</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Recreational fishermen use hook-and-line gear that has minimal impacts on habitat.</li>\n<li>Commercial fishermen use a variety of gears including trawls, gillnets, haul seines, and pound nets, and the impacts vary by gear type.</li>\n<li>Gillnets can occasionally entangle marine mammals. However, the bluefish fishery uses nets with small mesh and sinking gillnets to reduce bycatch.</li>\n</ul>\n</li>\n</ul>\n',
        harvestType: null,
        healthBenefits: '<p>Bluefish are a good source of selenium, niacin, vitamin B12, magnesium, and potassium. As apex predators, bluefish can accumulate comparatively high levels of mercury and PCB contaminants. Limited consumption has been recommended in some states.</p>\n',
        human_Health_: null,
        humanHealth: null,
        physicalDescription: '<ul>\n<li>Bluefish are blue-green on the back and silvery on the sides and belly.</li>\n<li>They have a prominent jaw, with sharp, compressed teeth.</li>\n</ul>\n',
        production: null,
        protein: '20.04 g',
        quote: 'U.S. wild-caught bluefish is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
        quoteBackgroundColor: '#89aec3',
        research: null,
        saturatedFattyAcidsTotal: '0.915 g',
        selenium: '36.5 mcg',
        servingWeight: null,
        servings: '1',
        sodium: '60 mcg',
        source: '<p>U.S. wild-caught from Massachusetts to Florida.</p>\n',
        sugarsTotal: null,
        taste: '<p>Rich, full flavor. The larger the fish, the more pronounced the taste. A strong-flavored, dark strip of meat on the fillet may be removed before cooking.</p>\n',
        texture: '<p>Coarse, moist meat with edible skin.</p>\n',
        path: '/profiles/bluefish',
        lastUpdate: '03/25/2020 - 12:58',
        href: 'https://line-ready-api.azurewebsites.net/fish/89',
        method: null,
        rel: null,
    },
];


/***/ }),

/***/ "7o2P":
/*!***************************************************!*\
  !*** ./src/app/shared/services/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommonService {
    constructor() {
        this.removeHtmlTags = (htmlEl) => {
            if (typeof htmlEl === 'undefined' || htmlEl === null) {
                return ' ';
            }
            return htmlEl
                .toString()
                .replace(/(<([^>]+)>)/gi, '')
                .replace(/&nbsp;/g, '');
        };
        this.outputObject = (input) => {
            return input;
        };
        this.syntaxHighlight = (json) => {
            json = json
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
                let cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    }
                    else {
                        cls = 'string';
                    }
                }
                else if (/true|false/.test(match)) {
                    cls = 'boolean';
                }
                else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            });
        };
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "GkAP":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/app-info.service.ts ***!
  \*****************************************************/
/*! exports provided: AppInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoService", function() { return AppInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppInfoService {
    constructor() { }
    get title() {
        return 'Line Ready Dashboard';
    }
    get currentYear() {
        return new Date().getFullYear();
    }
}
AppInfoService.ɵfac = function AppInfoService_Factory(t) { return new (t || AppInfoService)(); };
AppInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInfoService, factory: AppInfoService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HA8y":
/*!*************************************************!*\
  !*** ./src/app/services/fishservice.service.ts ***!
  \*************************************************/
/*! exports provided: FishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FishService", function() { return FishService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_data_fishdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/fishdata */ "5gNm");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/common.service */ "7o2P");




class FishService {
    constructor(service) {
        this.getFishData = () => {
            for (const element of _shared_data_fishdata__WEBPACK_IMPORTED_MODULE_1__["StaticFishData"]) {
                for (const [key, value] of Object.entries(element)) {
                    if (key !== 'speciesIllustrationPhoto') {
                        element[key] = this.serviceHelper.removeHtmlTags(value);
                    }
                }
            }
            return _shared_data_fishdata__WEBPACK_IMPORTED_MODULE_1__["StaticFishData"];
        };
        this.serviceHelper = service;
    }
}
FishService.ɵfac = function FishService_Factory(t) { return new (t || FishService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
FishService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FishService, factory: FishService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FishService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService, AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const defaultPath = '/';
class AuthService {
    constructor(router) {
        this.router = router;
        this._loggedIn = true;
        this._lastAuthenticatedPath = defaultPath;
    }
    get loggedIn() {
        return this._loggedIn;
    }
    set lastAuthenticatedPath(value) {
        this._lastAuthenticatedPath = value;
    }
    logIn(login, password) {
        this._loggedIn = true;
        this.router.navigate([this._lastAuthenticatedPath]);
    }
    logOut() {
        this._loggedIn = false;
        this.router.navigate(['/login-form']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();
class AuthGuardService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route) {
        const isLoggedIn = this.authService.loggedIn;
        const isLoginForm = route.routeConfig.path === 'login-form';
        if (isLoggedIn && isLoginForm) {
            this.authService.lastAuthenticatedPath = defaultPath;
            this.router.navigate([defaultPath]);
            return false;
        }
        if (!isLoggedIn && !isLoginForm) {
            this.router.navigate(['/login-form']);
        }
        if (isLoggedIn) {
            this.authService.lastAuthenticatedPath = route.routeConfig.path;
        }
        return isLoggedIn || isLoginForm;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](AuthService)); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: AuthService }]; }, null); })();


/***/ }),

/***/ "Jcec":
/*!**********************************!*\
  !*** ./src/app/layouts/index.ts ***!
  \**********************************/
/*! exports provided: SideNavOuterToolbarComponent, SideNavOuterToolbarModule, SideNavInnerToolbarComponent, SideNavInnerToolbarModule, SingleCardComponent, SingleCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav-outer-toolbar/side-nav-outer-toolbar.component */ "Obux");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarComponent", function() { return _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["SideNavOuterToolbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarModule", function() { return _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["SideNavOuterToolbarModule"]; });

/* harmony import */ var _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav-inner-toolbar/side-nav-inner-toolbar.component */ "Kj5c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarComponent", function() { return _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavInnerToolbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarModule", function() { return _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavInnerToolbarModule"]; });

/* harmony import */ var _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-card/single-card.component */ "OlHu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCardComponent", function() { return _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__["SingleCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCardModule", function() { return _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__["SingleCardModule"]; });






/***/ }),

/***/ "Kj5c":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideNavInnerToolbarComponent, SideNavInnerToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarComponent", function() { return SideNavInnerToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarModule", function() { return SideNavInnerToolbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components */ "1ua0");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ "7m6G");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "oTtP");
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ "Qlw+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services */ "ZF+8");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/side-navigation-menu/side-navigation-menu.component */ "WOTP");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");


















const _c0 = function (a2) { return { icon: "menu", stylingMode: "text", onClick: a2 }; };
function SideNavInnerToolbarComponent_app_side_navigation_menu_1_dxi_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dxi-item", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.toggleMenu));
} }
function SideNavInnerToolbarComponent_app_side_navigation_menu_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-side-navigation-menu", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedItemChanged", function SideNavInnerToolbarComponent_app_side_navigation_menu_1_Template_app_side_navigation_menu_selectedItemChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.navigationChanged($event); })("openMenu", function SideNavInnerToolbarComponent_app_side_navigation_menu_1_Template_app_side_navigation_menu_openMenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.navigationClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-toolbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavInnerToolbarComponent_app_side_navigation_menu_1_dxi_item_2_Template, 1, 3, "dxi-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dxi-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compactMode", !ctx_r0.menuOpened)("selectedItem", ctx_r0.selectedRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.minMenuSize !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r0.title);
} }
const _c1 = ["*", [["app-footer"]]];
const _c2 = ["*", "app-footer"];
class SideNavInnerToolbarComponent {
    constructor(screen, router) {
        this.screen = screen;
        this.router = router;
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
        this.toggleMenu = (e) => {
            this.menuOpened = !this.menuOpened;
            e.event.stopPropagation();
        };
    }
    ngOnInit() {
        this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(() => this.updateDrawer());
        this.updateDrawer();
    }
    updateDrawer() {
        const isXSmall = this.screen.sizes['screen-x-small'];
        const isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    }
    get hideMenuAfterNavigation() {
        return this.menuMode === 'overlap' || this.temporaryMenuOpened;
    }
    get showMenuAfterClick() {
        return !this.menuOpened;
    }
    navigationChanged(event) {
        const path = event.itemData.path;
        const pointerEvent = event.event;
        if (path && this.menuOpened) {
            if (event.node.selected) {
                pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
                this.scrollView.instance.scrollTo(0);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent.preventDefault();
        }
    }
    navigationClick() {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    }
}
SideNavInnerToolbarComponent.ɵfac = function SideNavInnerToolbarComponent_Factory(t) { return new (t || SideNavInnerToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_7__["ScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
SideNavInnerToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavInnerToolbarComponent, selectors: [["app-side-nav-inner-toolbar"]], viewQuery: function SideNavInnerToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollView = _t.first);
    } }, inputs: { title: "title" }, ngContentSelectors: _c2, decls: 9, vars: 8, consts: [["position", "before", 1, "drawer", 3, "closeOnOutsideClick", "openedStateMode", "revealMode", "minSize", "shading", "opened", "openedChange"], ["class", "dx-swatch-additional", 3, "compactMode", "selectedItem", "selectedItemChanged", "openMenu", 4, "dxTemplate", "dxTemplateOf"], [1, "container"], [3, "menuToggleEnabled", "menuToggle"], [1, "layout-body", "full-height-scrollable"], [1, "content"], [1, "content-block"], [1, "dx-swatch-additional", 3, "compactMode", "selectedItem", "selectedItemChanged", "openMenu"], ["id", "navigation-header"], ["location", "before", "cssClass", "menu-button", "widget", "dxButton", 3, "options", 4, "ngIf"], ["location", "before", "cssClass", "header-title", 3, "text"], ["location", "before", "cssClass", "menu-button", "widget", "dxButton", 3, "options"]], template: function SideNavInnerToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dx-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function SideNavInnerToolbarComponent_Template_dx_drawer_openedChange_0_listener($event) { return ctx.menuOpened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavInnerToolbarComponent_app_side_navigation_menu_1_Template, 4, 4, "app-side-navigation-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuToggle", function SideNavInnerToolbarComponent_Template_app_header_menuToggle_3_listener() { return ctx.menuOpened = !ctx.menuOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dx-scroll-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOnOutsideClick", ctx.shaderEnabled)("openedStateMode", ctx.menuMode)("revealMode", ctx.menuRevealMode)("minSize", ctx.minMenuSize)("shading", ctx.shaderEnabled)("opened", ctx.menuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuToggleEnabled", ctx.minMenuSize === 0);
    } }, directives: [devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__["DxTemplateDirective"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], _shared_components_side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_10__["SideNavigationMenuComponent"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_11__["DxiItemComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-direction: column;\n  display: flex;\n}\n\n.layout-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n#navigation-header[_ngcontent-%COMP%] {\n  background-color: #009688;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n#navigation-header[_ngcontent-%COMP%]     .menu-button .dx-icon {\n  color: #fff;\n}\n\n.screen-x-small[_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.dx-theme-generic[_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlLW5hdi1pbm5lci10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5hZGRpdGlvbmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBRUUseUJDbEJZO0VEbUJaLHdFQUFBO0FBQUY7O0FBRUU7RUFDRSxXQ3pCYztBRHlCbEI7O0FBR0U7RUFDRSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQUZKIiwiZmlsZSI6InNpZGUtbmF2LWlubmVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sYXlvdXQtYm9keSB7XHJcbiAgZmxleDogMTtcclxuICBtaW4taGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4jbmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gIEBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5hZGRpdGlvbmFsLnNjc3NcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1hY2NlbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG5cclxuICA6Om5nLWRlZXAgLm1lbnUtYnV0dG9uIC5keC1pY29uIHtcclxuICAgIGNvbG9yOiAkYmFzZS10ZXh0LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QtY29udGV4dCguc2NyZWVuLXgtc21hbGwpICYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICAgIFxyXG4gIDpob3N0LWNvbnRleHQoLmR4LXRoZW1lLWdlbmVyaWMpICYge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuIiwiJGJhc2UtdGV4dC1jb2xvcjogI2ZmZjtcbiRiYXNlLWJnOiAjMzYzNjQwO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjNTE1MTU5O1xuJGJhc2UtYWNjZW50OiAjMDA5Njg4O1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavInnerToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav-inner-toolbar',
                templateUrl: './side-nav-inner-toolbar.component.html',
                styleUrls: ['./side-nav-inner-toolbar.component.scss']
            }]
    }], function () { return [{ type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["ScreenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { scrollView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], { static: true }]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class SideNavInnerToolbarModule {
}
SideNavInnerToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SideNavInnerToolbarModule });
SideNavInnerToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SideNavInnerToolbarModule_Factory(t) { return new (t || SideNavInnerToolbarModule)(); }, imports: [[_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SideNavInnerToolbarModule, { declarations: [SideNavInnerToolbarComponent], imports: [_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]], exports: [SideNavInnerToolbarComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavInnerToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                exports: [SideNavInnerToolbarComponent],
                declarations: [SideNavInnerToolbarComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "Obux":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideNavOuterToolbarComponent, SideNavOuterToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarComponent", function() { return SideNavOuterToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarModule", function() { return SideNavOuterToolbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components */ "1ua0");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ "7m6G");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "oTtP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services */ "ZF+8");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
/* harmony import */ var _shared_components_side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/side-navigation-menu/side-navigation-menu.component */ "WOTP");














function SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-side-navigation-menu", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedItemChanged", function SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template_app_side_navigation_menu_selectedItemChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navigationChanged($event); })("openMenu", function SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template_app_side_navigation_menu_openMenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.navigationClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compactMode", !ctx_r0.menuOpened)("selectedItem", ctx_r0.selectedRoute);
} }
const _c0 = ["*", [["app-footer"]]];
const _c1 = ["*", "app-footer"];
class SideNavOuterToolbarComponent {
    constructor(screen, router) {
        this.screen = screen;
        this.router = router;
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
    }
    ngOnInit() {
        this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(() => this.updateDrawer());
        this.updateDrawer();
    }
    updateDrawer() {
        const isXSmall = this.screen.sizes['screen-x-small'];
        const isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    }
    get hideMenuAfterNavigation() {
        return this.menuMode === 'overlap' || this.temporaryMenuOpened;
    }
    get showMenuAfterClick() {
        return !this.menuOpened;
    }
    navigationChanged(event) {
        const path = event.itemData.path;
        const pointerEvent = event.event;
        if (path && this.menuOpened) {
            if (event.node.selected) {
                pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
                this.scrollView.instance.scrollTo(0);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent.preventDefault();
        }
    }
    navigationClick() {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    }
}
SideNavOuterToolbarComponent.ɵfac = function SideNavOuterToolbarComponent_Factory(t) { return new (t || SideNavOuterToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_6__["ScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SideNavOuterToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavOuterToolbarComponent, selectors: [["app-side-nav-outer-toolbar"]], viewQuery: function SideNavOuterToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollView = _t.first);
    } }, inputs: { title: "title" }, ngContentSelectors: _c1, decls: 8, vars: 9, consts: [[1, "layout-header", 3, "menuToggleEnabled", "title", "menuToggle"], ["position", "before", 1, "layout-body", 3, "closeOnOutsideClick", "openedStateMode", "revealMode", "minSize", "shading", "opened", "openedChange"], ["class", "dx-swatch-additional", 3, "compactMode", "selectedItem", "selectedItemChanged", "openMenu", 4, "dxTemplate", "dxTemplateOf"], [1, "full-height-scrollable"], [1, "content"], [1, "content-block"], [1, "dx-swatch-additional", 3, "compactMode", "selectedItem", "selectedItemChanged", "openMenu"]], template: function SideNavOuterToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuToggle", function SideNavOuterToolbarComponent_Template_app_header_menuToggle_0_listener() { return ctx.menuOpened = !ctx.menuOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function SideNavOuterToolbarComponent_Template_dx_drawer_openedChange_1_listener($event) { return ctx.menuOpened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template, 1, 2, "app-side-navigation-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dx-scroll-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuToggleEnabled", true)("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOnOutsideClick", ctx.shaderEnabled)("openedStateMode", ctx.menuMode)("revealMode", ctx.menuRevealMode)("minSize", ctx.minMenuSize)("shading", ctx.shaderEnabled)("opened", ctx.menuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "panel");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__["DxTemplateDirective"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], _shared_components_side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideNavigationMenuComponent"]], styles: ["[_nghost-%COMP%] {\n  flex-direction: column;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n\n.layout-header[_ngcontent-%COMP%] {\n  z-index: 1501;\n}\n\n.layout-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlLW5hdi1vdXRlci10b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic2lkZS1uYXYtb3V0ZXItdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGF5b3V0LWhlYWRlciB7XHJcbiAgei1pbmRleDogMTUwMTtcclxufVxyXG5cclxuLmxheW91dC1ib2R5IHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavOuterToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav-outer-toolbar',
                templateUrl: './side-nav-outer-toolbar.component.html',
                styleUrls: ['./side-nav-outer-toolbar.component.scss']
            }]
    }], function () { return [{ type: _shared_services__WEBPACK_IMPORTED_MODULE_6__["ScreenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { scrollView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], { static: true }]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class SideNavOuterToolbarModule {
}
SideNavOuterToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SideNavOuterToolbarModule });
SideNavOuterToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SideNavOuterToolbarModule_Factory(t) { return new (t || SideNavOuterToolbarModule)(); }, imports: [[_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SideNavOuterToolbarModule, { declarations: [SideNavOuterToolbarComponent], imports: [_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]], exports: [SideNavOuterToolbarComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavOuterToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                exports: [SideNavOuterToolbarComponent],
                declarations: [SideNavOuterToolbarComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "OlHu":
/*!**************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.ts ***!
  \**************************************************************/
/*! exports provided: SingleCardComponent, SingleCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCardComponent", function() { return SingleCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCardModule", function() { return SingleCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "oTtP");





const _c0 = ["*"];
class SingleCardComponent {
    constructor() { }
}
SingleCardComponent.ɵfac = function SingleCardComponent_Factory(t) { return new (t || SingleCardComponent)(); };
SingleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleCardComponent, selectors: [["app-single-card"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["height", "100%", 1, "full-height-scrollable"], [1, "dx-card", "content"]], template: function SingleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dx-scroll-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_2__["DxScrollViewComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.dx-card[_ngcontent-%COMP%] {\n  width: 330px;\n  margin: auto auto;\n  padding: 40px;\n}\n\n.screen-x-small[_nghost-%COMP%]   .dx-card[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   .dx-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n  box-shadow: none;\n  margin: 0;\n  border: 0;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaW5nbGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzaW5nbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5keC1jYXJkIHtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgcGFkZGluZzogNDBweDtcclxuXHJcbiAgOmhvc3QtY29udGV4dCguc2NyZWVuLXgtc21hbGwpICYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9ICBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-card',
                templateUrl: './single-card.component.html',
                styleUrls: ['./single-card.component.scss']
            }]
    }], function () { return []; }, null); })();
class SingleCardModule {
}
SingleCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SingleCardModule });
SingleCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SingleCardModule_Factory(t) { return new (t || SingleCardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_2__["DxScrollViewModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SingleCardModule, { declarations: [SingleCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_2__["DxScrollViewModule"]], exports: [SingleCardComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_2__["DxScrollViewModule"]],
                exports: [SingleCardComponent],
                declarations: [SingleCardComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "RK7/":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginFormComponent, LoginFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return LoginFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/button */ "WYlB");
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/check-box */ "gMzk");
/* harmony import */ var devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/text-box */ "Ylls");
/* harmony import */ var devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/validator */ "DiwR");
/* harmony import */ var devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/validation-group */ "sr6I");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services */ "ZF+8");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");

















class LoginFormComponent {
    constructor(authService, appInfo) {
        this.authService = authService;
        this.appInfo = appInfo;
        this.login = '';
        this.password = '';
    }
    onLoginClick(args) {
        if (!args.validationGroup.validate().isValid) {
            return;
        }
        this.authService.logIn(this.login, this.password);
        args.validationGroup.reset();
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["AppInfoService"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], decls: 23, vars: 4, consts: [[1, "login-header"], [1, "title"], [1, "dx-field"], ["placeholder", "Login", "width", "100%", 3, "value", "valueChange"], ["type", "required", "message", "Login is required"], ["mode", "password", "placeholder", "Password", "width", "100%", 3, "value", "valueChange"], ["type", "required", "message", "Password is required"], ["text", "Remember me", 3, "value"], ["type", "default", "text", "Login", "width", "100%", 3, "onClick"], ["routerLink", "/recovery"], ["type", "normal", "text", "Create an account", "width", "100%"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dx-validation-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "dx-text-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LoginFormComponent_Template_dx_text_box_valueChange_7_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "dx-validator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "dxi-validation-rule", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "dx-text-box", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LoginFormComponent_Template_dx_text_box_valueChange_11_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dx-validator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dxi-validation-rule", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "dx-check-box", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "dx-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function LoginFormComponent_Template_dx_button_onClick_17_listener($event) { return ctx.onLoginClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forgot password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "dx-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
    } }, directives: [devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_7__["DxValidationGroupComponent"], devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_5__["DxTextBoxComponent"], devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_6__["DxValidatorComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxiValidationRuleComponent"], devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_4__["DxCheckBoxComponent"], devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.login-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #009688;\n  font-weight: bold;\n  font-size: 30px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsY0NKVTtFREtWLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFESiIsImZpbGUiOiJsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xyXG5cclxuLmxvZ2luLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogJGJhc2UtYWNjZW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiIsIiRiYXNlLXRleHQtY29sb3I6ICNmZmY7XG4kYmFzZS1iZzogIzM2MzY0MDtcbiRiYXNlLWJvcmRlci1jb2xvcjogIzUxNTE1OTtcbiRiYXNlLWFjY2VudDogIzAwOTY4ODtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-form',
                templateUrl: './login-form.component.html',
                styleUrls: ['./login-form.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["AppInfoService"] }]; }, null); })();
class LoginFormModule {
}
LoginFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginFormModule });
LoginFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginFormModule_Factory(t) { return new (t || LoginFormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"],
            devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_4__["DxCheckBoxModule"],
            devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_5__["DxTextBoxModule"],
            devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_6__["DxValidatorModule"],
            devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_7__["DxValidationGroupModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginFormModule, { declarations: [LoginFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"],
        devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_4__["DxCheckBoxModule"],
        devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_5__["DxTextBoxModule"],
        devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_6__["DxValidatorModule"],
        devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_7__["DxValidationGroupModule"]], exports: [LoginFormComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"],
                    devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_4__["DxCheckBoxModule"],
                    devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_5__["DxTextBoxModule"],
                    devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_6__["DxValidatorModule"],
                    devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_7__["DxValidationGroupModule"]
                ],
                declarations: [LoginFormComponent],
                exports: [LoginFormComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services */ "ZF+8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layouts_side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component */ "Obux");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "aF9I");
/* harmony import */ var _layouts_single_card_single_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/single-card/single-card.component */ "OlHu");








function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-side-nav-outer-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Developed by: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Daniel Penrod");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.appInfo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \u00A9 2011-", ctx_r0.appInfo.currentYear, " Line Ready ");
} }
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-single-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService, screen, appInfo) {
        this.authService = authService;
        this.screen = screen;
        this.appInfo = appInfo;
    }
    get getClass() {
        return Object.keys(this.screen.sizes)
            .filter((cl) => this.screen.sizes[cl])
            .join(' ');
    }
    isAutorized() {
        return this.authService.loggedIn;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__["AppInfoService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostVars: 2, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getClass);
    } }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notAuthorized", ""], [3, "title"], ["href", "https://github.com/Iturea", "target", "_blank"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 9, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAutorized())("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _layouts_side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SideNavOuterToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _layouts_single_card_single_card_component__WEBPACK_IMPORTED_MODULE_6__["SingleCardComponent"]], styles: ["[_nghost-%COMP%] {\n  background-color: #2a2a32;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgQGltcG9ydCBcIi4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFzZS1iZywgNS4wMCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _shared_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _shared_services__WEBPACK_IMPORTED_MODULE_1__["ScreenService"] }, { type: _shared_services__WEBPACK_IMPORTED_MODULE_1__["AppInfoService"] }]; }, { getClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "V2yS":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserPanelComponent, UserPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return UserPanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/list */ "4Ewp");
/* harmony import */ var devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/context-menu */ "o2da");








const _c0 = function () { return { my: "top center", at: "bottom center" }; };
function UserPanelComponent_dx_context_menu_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dx-context-menu", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.menuItems)("position", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function UserPanelComponent_dx_list_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dx-list", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.menuItems);
} }
class UserPanelComponent {
    constructor() { }
}
UserPanelComponent.ɵfac = function UserPanelComponent_Factory(t) { return new (t || UserPanelComponent)(); };
UserPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPanelComponent, selectors: [["app-user-panel"]], inputs: { menuItems: "menuItems", menuMode: "menuMode" }, decls: 8, vars: 2, consts: [[1, "user-panel"], [1, "user-info"], [1, "image-container"], [1, "user-image"], [1, "user-name"], ["target", ".user-button", "showEvent", "dxclick", "width", "210px", "cssClass", "user-menu", 3, "items", "position", 4, "ngIf"], ["class", "dx-toolbar-menu-action", 3, "items", 4, "ngIf"], ["target", ".user-button", "showEvent", "dxclick", "width", "210px", "cssClass", "user-menu", 3, "items", "position"], [1, "dx-toolbar-menu-action", 3, "items"]], template: function UserPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "daniel@lineready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserPanelComponent_dx_context_menu_6_Template, 1, 3, "dx-context-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserPanelComponent_dx_list_7_Template, 1, 1, "dx-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuMode === "context");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuMode === "list");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__["DxContextMenuComponent"], devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_2__["DxListComponent"]], styles: [".user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dx-toolbar-menu-section[_nghost-%COMP%]   .user-info[_ngcontent-%COMP%], .dx-toolbar-menu-section   [_nghost-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  padding: 10px 6px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.user-info[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  margin: 0 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.user-info[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: url(\"https://avatars3.githubusercontent.com/u/58982490?s=460&u=92415144cf55d94baeac94518c5e3f72fb9a5478&v=4\") no-repeat #fff;\n  background-size: cover;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #fff;\n  margin: 0 9px;\n}\n.user-panel[_ngcontent-%COMP%]     .dx-list-item .dx-icon {\n  vertical-align: middle;\n  color: #fff;\n  margin-right: 16px;\n}\n.user-panel[_ngcontent-%COMP%]     .dx-rtl .dx-list-item .dx-icon {\n  margin-right: 0;\n  margin-left: 16px;\n}\n  .dx-context-menu.user-menu.dx-rtl .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-left: 16px;\n}\n  .dx-context-menu.user-menu .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-right: 16px;\n}\n  .dx-context-menu.user-menu .dx-menu-item .dx-menu-item-content {\n  padding: 3px 15px 4px;\n}\n  .dx-theme-generic .user-menu .dx-menu-item-content .dx-menu-item-text {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1wYW5lbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxpQkFBQTtFQUNBLDJDQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0lBQUE7RUFFQSxzQkFBQTtBQUhOO0FBT0U7RUFDRSxlQUFBO0VBQ0EsV0MvQmM7RURnQ2QsYUFBQTtBQUxKO0FBVUU7RUFDRSxzQkFBQTtFQUNBLFdDdkNjO0VEd0NkLGtCQUFBO0FBUEo7QUFTRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVBKO0FBYUk7RUFDRSxpQkFBQTtBQVZOO0FBYUU7RUFDRSxrQkFBQTtBQVhKO0FBYUU7RUFDRSxxQkFBQTtBQVhKO0FBZUE7RUFLRSxpQkFBQTtFQUNBLGtCQUFBO0FBaEJGIiwiZmlsZSI6InVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYmFzZS5zY3NzXCI7XHJcblxyXG4udXNlci1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIDpob3N0LWNvbnRleHQoLmR4LXRvb2xiYXItbWVudS1zZWN0aW9uKSAmIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcblxyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgIC51c2VyLWltYWdlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS81ODk4MjQ5MD9zPTQ2MCZ1PTkyNDE1MTQ0Y2Y1NWQ5NGJhZWFjOTQ1MThjNWUzZjcyZmI5YTU0Nzgmdj00XCIpXHJcbiAgICAgICAgbm8tcmVwZWF0ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlci1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAkYmFzZS10ZXh0LWNvbG9yO1xyXG4gICAgbWFyZ2luOiAwIDlweDtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsIDo6bmctZGVlcCB7XHJcbiAgLmR4LWxpc3QtaXRlbSAuZHgtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICRiYXNlLXRleHQtY29sb3I7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5keC1ydGwgLmR4LWxpc3QtaXRlbSAuZHgtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHgtY29udGV4dC1tZW51LnVzZXItbWVudSB7XHJcbiAgJi5keC1ydGwge1xyXG4gICAgLmR4LXN1Ym1lbnUgLmR4LW1lbnUtaXRlbXMtY29udGFpbmVyIC5keC1pY29uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5keC1zdWJtZW51IC5keC1tZW51LWl0ZW1zLWNvbnRhaW5lciAuZHgtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5keC1tZW51LWl0ZW0gLmR4LW1lbnUtaXRlbS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDNweCAxNXB4IDRweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcFxyXG4gIC5keC10aGVtZS1nZW5lcmljXHJcbiAgLnVzZXItbWVudVxyXG4gIC5keC1tZW51LWl0ZW0tY29udGVudFxyXG4gIC5keC1tZW51LWl0ZW0tdGV4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcbiIsIiRiYXNlLXRleHQtY29sb3I6ICNmZmY7XG4kYmFzZS1iZzogIzM2MzY0MDtcbiRiYXNlLWJvcmRlci1jb2xvcjogIzUxNTE1OTtcbiRiYXNlLWFjY2VudDogIzAwOTY4ODtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-panel',
                templateUrl: 'user-panel.component.html',
                styleUrls: ['./user-panel.component.scss']
            }]
    }], function () { return []; }, { menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class UserPanelModule {
}
UserPanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserPanelModule });
UserPanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserPanelModule_Factory(t) { return new (t || UserPanelModule)(); }, imports: [[
            devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_2__["DxListModule"],
            devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__["DxContextMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserPanelModule, { declarations: [UserPanelComponent], imports: [devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_2__["DxListModule"],
        devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__["DxContextMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UserPanelComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPanelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_2__["DxListModule"],
                    devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__["DxContextMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [UserPanelComponent],
                exports: [UserPanelComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "V48J":
/*!**************************************************!*\
  !*** ./src/app/pages/client/client.component.ts ***!
  \**************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/time.pipe */ "W/DX");




class ClientComponent {
    constructor() {
        this.inProgress = false;
        this.seconds = 60;
        this.maxValue = 60;
        this.timer = () => {
            this.seconds--;
            switch (true) {
                case this.seconds > 50:
                    this.statusMsg = 'Provisioning Server';
                    break;
                case this.seconds > 40:
                    this.statusMsg = 'Installing Application';
                    break;
                case this.seconds > 30:
                    this.statusMsg = 'Restoring Packages';
                    break;
                case this.seconds > 20:
                    this.statusMsg = 'Building Application';
                    break;
                case this.seconds > 10:
                    this.statusMsg = 'Booting Application';
                    break;
                default:
                    this.statusMsg = '';
                    this.webLink =
                        '<a href="https://line-ready.azurewebsites.net/" target="_blank">https://line-ready.azurewebsites.net/</a>';
                    break;
            }
            if (this.seconds === 0) {
                this.inProgress = !this.inProgress;
                clearInterval(this.intervalId);
                return;
            }
        };
        this.loadDone = () => {
            this.seconds = 5;
            this.intervalId = setInterval(() => this.timer(), 1000);
        };
        this.format = (value) => {
            return 'Loading: ' + Math.round(value * 100) + '%';
        };
        this.frameHeight = window.innerHeight - 300;
        this.statusMsg = 'Initializing';
        this.webLink = '';
    }
    ngOnInit() {
        if (this.inProgress) {
            clearInterval(this.intervalId);
        }
        else {
            if (this.seconds === 0) {
                this.seconds = 10;
            }
            this.intervalId = setInterval(() => this.timer(), 1000);
        }
        this.inProgress = !this.inProgress;
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(); };
ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 10, vars: 12, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings", "clientContainer"], [1, "progress-info"], [3, "innerHTML"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://line-ready.azurewebsites.net/"), "width", "100%", 2, "border", "0", "width", "100%", 3, "height", "load"], ["id", "progress-bar-status", "width", "100%", 3, "min", "max", "statusFormat", "value"], ["progressBar", ""]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ClientComponent_Template_iframe_load_7_listener() { return ctx.loadDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dx-progress-bar", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.statusMsg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.webLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, ctx.seconds), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", ctx.frameHeight + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete", _r0.value == ctx.maxValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", ctx.maxValue)("statusFormat", ctx.format)("value", ctx.maxValue - ctx.seconds);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxProgressBarComponent"]], pipes: [_shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_2__["TimePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client',
                templateUrl: './client.component.html',
                styleUrls: ['./client.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "W/DX":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/time.pipe.ts ***!
  \*******************************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TimePipe {
    transform(value) {
        if (typeof value !== 'undefined' && value !== null && value > 0) {
            return ': 00:00:' + ('0' + value).slice(-2);
        }
        else {
            return '';
        }
    }
}
TimePipe.ɵfac = function TimePipe_Factory(t) { return new (t || TimePipe)(); };
TimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "time", type: TimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'time' }]
    }], null, null); })();


/***/ }),

/***/ "WOTP":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SideNavigationMenuComponent, SideNavigationMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuComponent", function() { return SideNavigationMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuModule", function() { return SideNavigationMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ "phQQ");
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-navigation */ "ruYK");
/* harmony import */ var devextreme_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/events */ "pxW5");
/* harmony import */ var devextreme_events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_events__WEBPACK_IMPORTED_MODULE_3__);






const _c0 = ["*"];
class SideNavigationMenuComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.selectedItemChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._compactMode = false;
    }
    set selectedItem(value) {
        this._selectedItem = value;
        if (!this.menu.instance) {
            return;
        }
        this.menu.instance.selectItem(value);
    }
    get items() {
        if (!this._items) {
            this._items = _app_navigation__WEBPACK_IMPORTED_MODULE_2__["navigation"].map((item) => {
                if (item.path && !(/^\//.test(item.path))) {
                    item.path = `/${item.path}`;
                }
                return Object.assign(Object.assign({}, item), { expanded: !this._compactMode });
            });
        }
        return this._items;
    }
    get compactMode() {
        return this._compactMode;
    }
    set compactMode(val) {
        this._compactMode = val;
        if (!this.menu.instance) {
            return;
        }
        if (val) {
            this.menu.instance.collapseAll();
        }
        else {
            this.menu.instance.expandItem(this._selectedItem);
        }
    }
    onItemClick(event) {
        this.selectedItemChanged.emit(event);
    }
    ngAfterViewInit() {
        devextreme_events__WEBPACK_IMPORTED_MODULE_3__["on"](this.elementRef.nativeElement, 'dxclick', (e) => {
            this.openMenu.next(e);
        });
    }
    ngOnDestroy() {
        devextreme_events__WEBPACK_IMPORTED_MODULE_3__["off"](this.elementRef.nativeElement, 'dxclick');
    }
}
SideNavigationMenuComponent.ɵfac = function SideNavigationMenuComponent_Factory(t) { return new (t || SideNavigationMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SideNavigationMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavigationMenuComponent, selectors: [["app-side-navigation-menu"]], viewQuery: function SideNavigationMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    } }, inputs: { selectedItem: "selectedItem", compactMode: "compactMode" }, outputs: { selectedItemChanged: "selectedItemChanged", openMenu: "openMenu" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "menu-container"], ["keyExpr", "path", "selectionMode", "single", "expandEvent", "click", "width", "100%", 3, "items", "focusStateEnabled", "onItemClick"]], template: function SideNavigationMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-tree-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemClick", function SideNavigationMenuComponent_Template_dx_tree_view_onItemClick_2_listener($event) { return ctx.onItemClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("focusStateEnabled", false);
    } }, directives: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0px;\n  min-height: 100%;\n  height: 100%;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.content[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.content-block[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-top: 20px;\n}\n\n.screen-x-small[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.responsive-paddings[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.screen-large[_ngcontent-%COMP%]   .responsive-paddings[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.dx-card.wide-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-right: 0;\n  border-left: 0;\n}\n\n.full-height-scrollable[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.full-height-scrollable[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%]    > .dx-scrollview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.dx-tile-content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  display: block;\n}\n\n.dx-tile-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.caption[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  height: 100%;\n  width: 250px !important;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  flex: 1;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview {\n  white-space: nowrap;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-item .dx-icon {\n  width: 60px !important;\n  margin: 0 !important;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node {\n  padding: 0 0 !important;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-toggle-item-visibility {\n  right: 10px;\n  left: auto;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-rtl .dx-treeview-toggle-item-visibility {\n  left: 10px;\n  right: auto;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node[aria-level=\"1\"] {\n  font-weight: bold;\n  border-bottom: 1px solid #515159;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node[aria-level=\"2\"] .dx-treeview-item-content {\n  font-weight: normal;\n  padding: 0 60px;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected:not(.dx-state-focused) > .dx-treeview-item {\n  background: transparent;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected > .dx-treeview-item * {\n  color: #009688;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node-container .dx-treeview-node:not(.dx-state-focused) > .dx-treeview-item.dx-state-hover {\n  background-color: #3f3f4b;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .dx-theme-generic[_nghost-%COMP%]    .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected.dx-state-focused > .dx-treeview-item *, .dx-theme-generic   [_nghost-%COMP%]    .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected.dx-state-focused > .dx-treeview-item * {\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxkeC1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZS1uYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5hZGRpdGlvbmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FESUE7RUFDRSxhQUFBO0FDREY7O0FER0U7RUFDRSxhQUFBO0FDREo7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUlFLFlBQUE7QUNMRjs7QURPRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEU0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTkY7O0FEU0E7RUFDRSxZQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QUFsRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQXFFRjs7QUFuRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0FBcUVKOztBQW5FSTtFQUVFLG1CQUFBO0FBb0VOOztBQWhFTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWtFUjs7QUFoRVE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FBa0VWOztBQTVETTtFQUNFLHVCQUFBO0FBOERSOztBQTNETTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBNkRSOztBQTFETTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBNERSOztBQXREUTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7QUF3RFY7O0FBckRRO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBdURWOztBQTdDVTtFQUNFLHVCQUFBO0FBK0NaOztBQTVDVTtFQUNFLGNDckVFO0FEbUhkOztBQTNDVTtFQUNFLHlCQUFBO0FBNkNaOztBQXRDTTtFQUNFLGNBQUE7QUF3Q1IiLCJmaWxlIjoic2lkZS1uYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBtYXJnaW46IDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtYmxvY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAuc2NyZWVuLXgtc21hbGwgJiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlLXBhZGRpbmdzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAuc2NyZWVuLWxhcmdlICYge1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5keC1jYXJkLndpZGUtY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG59XHJcblxyXG4uZnVsbC1oZWlnaHQtc2Nyb2xsYWJsZVxyXG4gID4gLmR4LXNjcm9sbGFibGUtd3JhcHBlclxyXG4gID4gLmR4LXNjcm9sbGFibGUtY29udGFpbmVyXHJcbiAgPiAuZHgtc2Nyb2xsYWJsZS1jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICYgPiAuZHgtc2Nyb2xsdmlldy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5keC10aWxlLWNvbnRlbnQgLmltYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5keC10aWxlLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4kc2lkZS1wYW5lbC1taW4td2lkdGg6IDYwcHg7XHJcbiIsImh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGVudC1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc2NyZWVuLXgtc21hbGwgLmNvbnRlbnQtYmxvY2sge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVzcG9uc2l2ZS1wYWRkaW5ncyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uc2NyZWVuLWxhcmdlIC5yZXNwb25zaXZlLXBhZGRpbmdzIHtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLmR4LWNhcmQud2lkZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuLmZ1bGwtaGVpZ2h0LXNjcm9sbGFibGUgPiAuZHgtc2Nyb2xsYWJsZS13cmFwcGVyID4gLmR4LXNjcm9sbGFibGUtY29udGFpbmVyID4gLmR4LXNjcm9sbGFibGUtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mdWxsLWhlaWdodC1zY3JvbGxhYmxlID4gLmR4LXNjcm9sbGFibGUtd3JhcHBlciA+IC5keC1zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC5keC1zY3JvbGxhYmxlLWNvbnRlbnQgPiAuZHgtc2Nyb2xsdmlldy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmR4LXRpbGUtY29udGVudCAuaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHgtdGlsZS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IC5keC10cmVldmlldy1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LWl0ZW0gLmR4LWljb24ge1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IC5keC10cmVldmlldy1ub2RlIHtcbiAgcGFkZGluZzogMCAwICFpbXBvcnRhbnQ7XG59XG46aG9zdCAubWVudS1jb250YWluZXIgOjpuZy1kZWVwIC5keC10cmVldmlldyAuZHgtdHJlZXZpZXctdG9nZ2xlLWl0ZW0tdmlzaWJpbGl0eSB7XG4gIHJpZ2h0OiAxMHB4O1xuICBsZWZ0OiBhdXRvO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXJ0bCAuZHgtdHJlZXZpZXctdG9nZ2xlLWl0ZW0tdmlzaWJpbGl0eSB7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LW5vZGVbYXJpYS1sZXZlbD1cIjFcIl0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTk7XG59XG46aG9zdCAubWVudS1jb250YWluZXIgOjpuZy1kZWVwIC5keC10cmVldmlldyAuZHgtdHJlZXZpZXctbm9kZVthcmlhLWxldmVsPVwiMlwiXSAuZHgtdHJlZXZpZXctaXRlbS1jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMCA2MHB4O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LW5vZGUtY29udGFpbmVyIC5keC10cmVldmlldy1ub2RlLmR4LXN0YXRlLXNlbGVjdGVkOm5vdCguZHgtc3RhdGUtZm9jdXNlZCkgPiAuZHgtdHJlZXZpZXctaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LW5vZGUtY29udGFpbmVyIC5keC10cmVldmlldy1ub2RlLmR4LXN0YXRlLXNlbGVjdGVkID4gLmR4LXRyZWV2aWV3LWl0ZW0gKiB7XG4gIGNvbG9yOiAjMDA5Njg4O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LW5vZGUtY29udGFpbmVyIC5keC10cmVldmlldy1ub2RlOm5vdCguZHgtc3RhdGUtZm9jdXNlZCkgPiAuZHgtdHJlZXZpZXctaXRlbS5keC1zdGF0ZS1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjNmNGI7XG59XG46aG9zdCAubWVudS1jb250YWluZXIgOmhvc3QtY29udGV4dCguZHgtdGhlbWUtZ2VuZXJpYykgOjpuZy1kZWVwLmR4LXRyZWV2aWV3IC5keC10cmVldmlldy1ub2RlLWNvbnRhaW5lciAuZHgtdHJlZXZpZXctbm9kZS5keC1zdGF0ZS1zZWxlY3RlZC5keC1zdGF0ZS1mb2N1c2VkID4gLmR4LXRyZWV2aWV3LWl0ZW0gKiB7XG4gIGNvbG9yOiBpbmhlcml0O1xufSIsIiRiYXNlLXRleHQtY29sb3I6ICNmZmY7XG4kYmFzZS1iZzogIzM2MzY0MDtcbiRiYXNlLWJvcmRlci1jb2xvcjogIzUxNTE1OTtcbiRiYXNlLWFjY2VudDogIzAwOTY4ODtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavigationMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-navigation-menu',
                templateUrl: './side-navigation-menu.component.html',
                styleUrls: ['./side-navigation-menu.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewComponent"], { static: true }]
        }], selectedItemChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compactMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class SideNavigationMenuModule {
}
SideNavigationMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SideNavigationMenuModule });
SideNavigationMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SideNavigationMenuModule_Factory(t) { return new (t || SideNavigationMenuModule)(); }, imports: [[devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SideNavigationMenuModule, { declarations: [SideNavigationMenuComponent], imports: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewModule"]], exports: [SideNavigationMenuComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavigationMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewModule"]],
                declarations: [SideNavigationMenuComponent],
                exports: [SideNavigationMenuComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "WTJC":
/*!*****************************************!*\
  !*** ./src/app/shared/data/citydata.ts ***!
  \*****************************************/
/*! exports provided: StaticCityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticCityData", function() { return StaticCityData; });
const StaticCityData = [
    {
        id: 4452253,
        name: 'Advance',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.94125,
            lon: -80.409218,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452253',
        method: null,
        rel: null,
    },
    {
        id: 4452256,
        name: 'Ahoskie',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.286819,
            lon: -76.98468,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452256',
        method: null,
        rel: null,
    },
    {
        id: 4452290,
        name: 'Alamance County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.03347,
            lon: -79.399742,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452290',
        method: null,
        rel: null,
    },
    {
        id: 4452303,
        name: 'Albemarle',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.35014,
            lon: -80.200058,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452303',
        method: null,
        rel: null,
    },
    {
        id: 4452655,
        name: 'Andrews',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.201752,
            lon: -83.824074,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452655',
        method: null,
        rel: null,
    },
    {
        id: 4452686,
        name: 'Angier',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.507099,
            lon: -78.739182,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452686',
        method: null,
        rel: null,
    },
    {
        id: 4452708,
        name: 'Anson County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.98349,
            lon: -80.099777,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452708',
        method: null,
        rel: null,
    },
    {
        id: 4452808,
        name: 'Apex',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.732651,
            lon: -78.850288,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452808',
        method: null,
        rel: null,
    },
    {
        id: 4452848,
        name: 'Arapahoe',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.025719,
            lon: -76.825493,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452848',
        method: null,
        rel: null,
    },
    {
        id: 4452871,
        name: 'Archdale',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.914581,
            lon: -79.971977,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452871',
        method: null,
        rel: null,
    },
    {
        id: 4452878,
        name: 'Archer Lodge',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.694038,
            lon: -78.375557,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4452878',
        method: null,
        rel: null,
    },
    {
        id: 4453035,
        name: 'Asheboro',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.707909,
            lon: -79.813637,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453035',
        method: null,
        rel: null,
    },
    {
        id: 4453066,
        name: 'Asheville',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.600948,
            lon: -82.554024,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453066',
        method: null,
        rel: null,
    },
    {
        id: 4453145,
        name: 'Atlantic Beach',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.699051,
            lon: -76.740211,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453145',
        method: null,
        rel: null,
    },
    {
        id: 4453238,
        name: 'Avery Creek',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.463451,
            lon: -82.582619,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453238',
        method: null,
        rel: null,
    },
    {
        id: 4453271,
        name: 'Ayden',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.47266,
            lon: -77.41552,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453271',
        method: null,
        rel: null,
    },
    {
        id: 4453351,
        name: 'Badin',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.405972,
            lon: -80.116722,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453351',
        method: null,
        rel: null,
    },
    {
        id: 4453467,
        name: 'Bakersville',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.015671,
            lon: -82.158737,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453467',
        method: null,
        rel: null,
    },
    {
        id: 4453570,
        name: 'Balfour',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.346512,
            lon: -82.472061,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453570',
        method: null,
        rel: null,
    },
    {
        id: 4453688,
        name: 'Banner Elk',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.163181,
            lon: -81.871498,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453688',
        method: null,
        rel: null,
    },
    {
        id: 4453706,
        name: 'Barbecue',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.335991,
            lon: -79.038643,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453706',
        method: null,
        rel: null,
    },
    {
        id: 4453732,
        name: 'Barclaysville',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.468769,
            lon: -78.694183,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453732',
        method: null,
        rel: null,
    },
    {
        id: 4453753,
        name: 'Barium Springs',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.719028,
            lon: -80.898132,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453753',
        method: null,
        rel: null,
    },
    {
        id: 4453759,
        name: 'Barker Heights',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.31123,
            lon: -82.444008,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4453759',
        method: null,
        rel: null,
    },
    {
        id: 4454022,
        name: 'Bayboro',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.142941,
            lon: -76.77021,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4454022',
        method: null,
        rel: null,
    },
    {
        id: 4454034,
        name: 'Bayshore',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.289612,
            lon: -77.787483,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4454034',
        method: null,
        rel: null,
    },
    {
        id: 4454214,
        name: 'Bear Poplar',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.675968,
            lon: -80.693398,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4454214',
        method: null,
        rel: null,
    },
    {
        id: 4454370,
        name: 'Beaufort',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.71822,
            lon: -76.663818,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4454370',
        method: null,
        rel: null,
    },
    {
        id: 4454373,
        name: 'Beaufort County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.433498,
            lon: -76.866333,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4454373',
        method: null,
        rel: null,
    },
    {
        id: 4454761,
        name: 'Belhaven',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.540169,
            lon: -76.622993,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4454761',
        method: null,
        rel: null,
    },
    {
        id: 4454860,
        name: 'Belmont',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.24292,
            lon: -81.0373,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4454860',
        method: null,
        rel: null,
    },
    {
        id: 4454893,
        name: 'Belville',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.230728,
            lon: -77.96582,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4454893',
        method: null,
        rel: null,
    },
    {
        id: 4454971,
        name: 'Benson',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.382111,
            lon: -78.548622,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4454971',
        method: null,
        rel: null,
    },
    {
        id: 4454988,
        name: 'Bent Creek',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.508999,
            lon: -82.607903,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4454988',
        method: null,
        rel: null,
    },
    {
        id: 4455042,
        name: 'Bermuda Run',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.00375,
            lon: -80.421997,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4455042',
        method: null,
        rel: null,
    },
    {
        id: 4455080,
        name: 'Bessemer City',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.284859,
            lon: -81.283974,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4455080',
        method: null,
        rel: null,
    },
    {
        id: 4455171,
        name: 'Bethel',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.807098,
            lon: -77.37886,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4455171',
        method: null,
        rel: null,
    },
    {
        id: 4455335,
        name: 'Bethlehem',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.825691,
            lon: -81.30703,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4455335',
        method: null,
        rel: null,
    },
    {
        id: 4455473,
        name: 'Beulaville',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.923779,
            lon: -77.773872,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4455473',
        method: null,
        rel: null,
    },
    {
        id: 4455999,
        name: 'Biltmore Forest',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.533718,
            lon: -82.528458,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4455999',
        method: null,
        rel: null,
    },
    {
        id: 4456054,
        name: 'Biscoe',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.359859,
            lon: -79.779762,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4456054',
        method: null,
        rel: null,
    },
    {
        id: 4456121,
        name: 'Black Mountain',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.617901,
            lon: -82.321228,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4456121',
        method: null,
        rel: null,
    },
    {
        id: 4456253,
        name: 'Bladenboro',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.53878,
            lon: -78.787521,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4456253',
        method: null,
        rel: null,
    },
    {
        id: 4456376,
        name: 'Blowing Rock',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.135132,
            lon: -81.677612,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4456376',
        method: null,
        rel: null,
    },
    {
        id: 4456593,
        name: 'Boiling Spring Lakes',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.030449,
            lon: -78.067207,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4456593',
        method: null,
        rel: null,
    },
    {
        id: 4456595,
        name: 'Boiling Springs',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.254292,
            lon: -81.667038,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4456595',
        method: null,
        rel: null,
    },
    {
        id: 4456615,
        name: 'Bolivia',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.067669,
            lon: -78.148331,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4456615',
        method: null,
        rel: null,
    },
    {
        id: 4456703,
        name: 'Boone',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.216801,
            lon: -81.674553,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4456703',
        method: null,
        rel: null,
    },
    {
        id: 4456748,
        name: 'Boonville',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.232639,
            lon: -80.708122,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4456748',
        method: null,
        rel: null,
    },
    {
        id: 4456938,
        name: 'Brake',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.92321,
            lon: -77.737747,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4456938',
        method: null,
        rel: null,
    },
    {
        id: 4457040,
        name: 'Brevard',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.233452,
            lon: -82.734291,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4457040',
        method: null,
        rel: null,
    },
    {
        id: 4457089,
        name: 'Brices Creek',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.055988,
            lon: -77.08773,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4457089',
        method: null,
        rel: null,
    },
    {
        id: 4457102,
        name: 'Brickhaven',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.574879,
            lon: -79.028908,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4457102',
        method: null,
        rel: null,
    },
    {
        id: 4457289,
        name: 'Broad Creek',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.720718,
            lon: -76.936333,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4457289',
        method: null,
        rel: null,
    },
    {
        id: 4457325,
        name: 'Broadway',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.457932,
            lon: -79.053078,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4457325',
        method: null,
        rel: null,
    },
    {
        id: 4457342,
        name: 'Brogden',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.29266,
            lon: -78.034431,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4457342',
        method: null,
        rel: null,
    },
    {
        id: 4457578,
        name: 'Brunswick',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.286839,
            lon: -78.701134,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4457578',
        method: null,
        rel: null,
    },
    {
        id: 4457580,
        name: 'Brunswick County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.066841,
            lon: -78.266388,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4457580',
        method: null,
        rel: null,
    },
    {
        id: 4457719,
        name: 'Bryson City',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.430931,
            lon: -83.44738,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4457719',
        method: null,
        rel: null,
    },
    {
        id: 4458033,
        name: 'Buies Creek',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.413219,
            lon: -78.735573,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458033',
        method: null,
        rel: null,
    },
    {
        id: 4458155,
        name: 'Buncombe County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.600109,
            lon: -82.51651,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458155',
        method: null,
        rel: null,
    },
    {
        id: 4458175,
        name: 'Burgaw',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.552109,
            lon: -77.926102,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458175',
        method: null,
        rel: null,
    },
    {
        id: 4458194,
        name: 'Burke County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.7668,
            lon: -81.699821,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458194',
        method: null,
        rel: null,
    },
    {
        id: 4458228,
        name: 'Burlington',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.095692,
            lon: -79.437798,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458228',
        method: null,
        rel: null,
    },
    {
        id: 4458264,
        name: 'Burnsville',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.11237,
            lon: -80.244507,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458264',
        method: null,
        rel: null,
    },
    {
        id: 4458265,
        name: 'Burnsville',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.917339,
            lon: -82.300957,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458265',
        method: null,
        rel: null,
    },
    {
        id: 4458372,
        name: 'Butner',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.132092,
            lon: -78.756668,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458372',
        method: null,
        rel: null,
    },
    {
        id: 4458391,
        name: 'Buxton',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.267681,
            lon: -75.542374,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458391',
        method: null,
        rel: null,
    },
    {
        id: 4458491,
        name: 'Cabarrus County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.36681,
            lon: -80.56646,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458491',
        method: null,
        rel: null,
    },
    {
        id: 4458580,
        name: 'Cajahs Mountain',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.83485,
            lon: -81.541481,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458580',
        method: null,
        rel: null,
    },
    {
        id: 4458584,
        name: 'Calabash',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 33.90369,
            lon: -78.573883,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458584',
        method: null,
        rel: null,
    },
    {
        id: 4458601,
        name: 'Caldwell County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.95013,
            lon: -81.54982,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458601',
        method: null,
        rel: null,
    },
    {
        id: 4458737,
        name: 'Camden',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.328491,
            lon: -76.171883,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458737',
        method: null,
        rel: null,
    },
    {
        id: 4458740,
        name: 'Camden County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.366821,
            lon: -76.182991,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4458740',
        method: null,
        rel: null,
    },
    {
        id: 4459120,
        name: 'Canton',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.532879,
            lon: -82.837357,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459120',
        method: null,
        rel: null,
    },
    {
        id: 4459135,
        name: 'Cape Carteret',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.691551,
            lon: -77.063004,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459135',
        method: null,
        rel: null,
    },
    {
        id: 4459138,
        name: 'Cape Colony',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.019611,
            lon: -76.581612,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459138',
        method: null,
        rel: null,
    },
    {
        id: 4459261,
        name: 'Carolina Beach',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.035172,
            lon: -77.8936,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459261',
        method: null,
        rel: null,
    },
    {
        id: 4459298,
        name: 'Carolina Shores',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 33.901009,
            lon: -78.580566,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459298',
        method: null,
        rel: null,
    },
    {
        id: 4459343,
        name: 'Carrboro',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.910141,
            lon: -79.075287,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459343',
        method: null,
        rel: null,
    },
    {
        id: 4459410,
        name: 'Carteret County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.800159,
            lon: -76.699654,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459410',
        method: null,
        rel: null,
    },
    {
        id: 4459426,
        name: 'Carthage',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.345989,
            lon: -79.416969,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459426',
        method: null,
        rel: null,
    },
    {
        id: 4459467,
        name: 'Cary',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.791538,
            lon: -78.78112,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459467',
        method: null,
        rel: null,
    },
    {
        id: 4459530,
        name: 'Castle Hayne',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.355721,
            lon: -77.899986,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459530',
        method: null,
        rel: null,
    },
    {
        id: 4459547,
        name: 'Caswell County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.400139,
            lon: -79.349739,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459547',
        method: null,
        rel: null,
    },
    {
        id: 4459575,
        name: 'Catawba County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.666801,
            lon: -81.233139,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459575',
        method: null,
        rel: null,
    },
    {
        id: 4459620,
        name: 'Catherine Lake',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.817661,
            lon: -77.563858,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459620',
        method: null,
        rel: null,
    },
    {
        id: 4459775,
        name: 'Cedar Grove',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.67569,
            lon: -79.888649,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459775',
        method: null,
        rel: null,
    },
    {
        id: 4459889,
        name: 'Cedar Point',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.68766,
            lon: -77.072449,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4459889',
        method: null,
        rel: null,
    },
    {
        id: 4460084,
        name: 'Chadbourn',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.322109,
            lon: -78.826973,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4460084',
        method: null,
        rel: null,
    },
    {
        id: 4460162,
        name: 'Chapel Hill',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.9132,
            lon: -79.05584,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4460162',
        method: null,
        rel: null,
    },
    {
        id: 4460243,
        name: 'Charlotte',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.227089,
            lon: -80.843132,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4460243',
        method: null,
        rel: null,
    },
    {
        id: 7230311,
        name: 'Charter Oaks Mobile Home Park',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 34.126202,
            lon: -77.902702,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/7230311',
        method: null,
        rel: null,
    },
    {
        id: 4460324,
        name: 'Chatham County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.700142,
            lon: -79.266411,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4460324',
        method: null,
        rel: null,
    },
    {
        id: 4460364,
        name: 'Cherokee',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.47427,
            lon: -83.314873,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4460364',
        method: null,
        rel: null,
    },
    {
        id: 4460465,
        name: 'Cherryville',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.378738,
            lon: -81.378967,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4460465',
        method: null,
        rel: null,
    },
    {
        id: 4460651,
        name: 'China Grove',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.569309,
            lon: -80.581734,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4460651',
        method: null,
        rel: null,
    },
    {
        id: 4460702,
        name: 'Chowan County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 36.150162,
            lon: -76.649673,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4460702',
        method: null,
        rel: null,
    },
    {
        id: 4460831,
        name: 'Claremont',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.714581,
            lon: -81.146187,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4460831',
        method: null,
        rel: null,
    },
    {
        id: 4460927,
        name: 'Clay County',
        state: 'NC',
        country: 'US',
        coord: {
            lat: 35.050091,
            lon: -83.766563,
        },
        href: 'https://line-ready-api.azurewebsites.net/cities/4460927',
        method: null,
        rel: null,
    },
];


/***/ }),

/***/ "Y5Lh":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_fishservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fishservice.service */ "HA8y");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/common.service */ "7o2P");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "oTtP");








function ProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const galleryItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", galleryItem_r2.speciesIllustrationPhoto.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](galleryItem_r2.speciesName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Habitat: ", galleryItem_r2.habitat, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Quote: ", galleryItem_r2.quote, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fish Rate: ", galleryItem_r2.fishingRate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fat Total: ", galleryItem_r2.fatTotal, "");
} }
class ProfileComponent {
    constructor(service, commonService) {
        this.dataSource = service.getFishData();
        this.rawData = commonService.outputObject(commonService.syntaxHighlight(JSON.stringify(this.dataSource, undefined, 4)));
        this.colCountByScreen = {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
        };
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fishservice_service__WEBPACK_IMPORTED_MODULE_1__["FishService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_fishservice_service__WEBPACK_IMPORTED_MODULE_1__["FishService"]])], decls: 27, vars: 7, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], ["width", "100%", 3, "dataSource", "height", "loop", "showNavButtons", "showIndicator"], [4, "dxTemplate", "dxTemplateOf"], [1, "dx-icon-link"], [2, "padding-left", "5px"], ["href", "https://dev.azure.com/dayafter/line-ready-api", "target", "_blank"], ["id", "scrollview", "scrollByContent", "true", "scrollByThumb", "true", "showScrollbar", "always", "width", "100%", "height", "500", "reachBottomText", "Updating..."], ["scrollView", ""], [3, "innerHTML"], ["href", "https://line-ready-api.azurewebsites.net/", "target", "_blank"], [3, "src"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-gallery", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 15, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Repo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "https://dev.azure.com/dayafter/line-ready-api");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Raw Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "dx-scroll-view", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "pre", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "https://line-ready-api.azurewebsites.net/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("height", 650)("loop", true)("showNavButtons", true)("showIndicator", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.rawData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxGalleryComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_4__["DxTemplateDirective"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__["DxScrollViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                providers: [_services_fishservice_service__WEBPACK_IMPORTED_MODULE_1__["FishService"]],
                templateUrl: 'profile.component.html',
                styleUrls: ['./profile.component.scss'],
            }]
    }], function () { return [{ type: _services_fishservice_service__WEBPACK_IMPORTED_MODULE_1__["FishService"] }, { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts */ "Jcec");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components */ "1ua0");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services */ "ZF+8");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _shared_services__WEBPACK_IMPORTED_MODULE_5__["ScreenService"], _shared_services__WEBPACK_IMPORTED_MODULE_5__["AppInfoService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _layouts__WEBPACK_IMPORTED_MODULE_3__["SideNavOuterToolbarModule"],
            _layouts__WEBPACK_IMPORTED_MODULE_3__["SideNavInnerToolbarModule"],
            _layouts__WEBPACK_IMPORTED_MODULE_3__["SingleCardModule"],
            _shared_components__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
            _shared_components__WEBPACK_IMPORTED_MODULE_4__["LoginFormModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _layouts__WEBPACK_IMPORTED_MODULE_3__["SideNavOuterToolbarModule"],
        _layouts__WEBPACK_IMPORTED_MODULE_3__["SideNavInnerToolbarModule"],
        _layouts__WEBPACK_IMPORTED_MODULE_3__["SingleCardModule"],
        _shared_components__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
        _shared_components__WEBPACK_IMPORTED_MODULE_4__["LoginFormModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _layouts__WEBPACK_IMPORTED_MODULE_3__["SideNavOuterToolbarModule"],
                    _layouts__WEBPACK_IMPORTED_MODULE_3__["SideNavInnerToolbarModule"],
                    _layouts__WEBPACK_IMPORTED_MODULE_3__["SingleCardModule"],
                    _shared_components__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
                    _shared_components__WEBPACK_IMPORTED_MODULE_4__["LoginFormModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ],
                providers: [_shared_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _shared_services__WEBPACK_IMPORTED_MODULE_5__["ScreenService"], _shared_services__WEBPACK_IMPORTED_MODULE_5__["AppInfoService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZF+8":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: AppInfoService, AuthService, AuthGuardService, ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-info.service */ "GkAP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppInfoService", function() { return _app_info_service__WEBPACK_IMPORTED_MODULE_0__["AppInfoService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "IYfF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]; });

/* harmony import */ var _screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen.service */ "pFCf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return _screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]; });






/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent, FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  color: rgba(255, 255, 255, 0.7);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 20px;\n  padding-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBREYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiByZ2JhKCRiYXNlLXRleHQtY29sb3IsIGFscGhhKCRiYXNlLXRleHQtY29sb3IpICogMC43KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                template: `
    <footer><ng-content></ng-content></footer>
  `,
                styleUrls: ['./footer.component.scss']
            }]
    }], null, null); })();
class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [FooterComponent], exports: [FooterComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [FooterComponent],
                exports: [FooterComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent, HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-panel/user-panel.component */ "V2yS");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/button */ "WYlB");
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ "Qlw+");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "ZF+8");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/common.service */ "7o2P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");















const _c0 = function (a2) { return { icon: "menu", stylingMode: "text", onClick: a2 }; };
function HeaderComponent_dxi_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dxi-item", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.toggleMenu));
} }
function HeaderComponent_dxi_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dxi-item", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r1.title);
} }
function HeaderComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuItems", ctx_r5.userMenuItems);
} }
function HeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_6_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "content");
} }
function HeaderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuItems", ctx_r3.userMenuItems);
} }
class HeaderComponent {
    constructor(authService, commonService, router) {
        this.authService = authService;
        this.router = router;
        this.menuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuToggleEnabled = false;
        this.userMenuItems = [
            {
                text: 'Profile',
                icon: 'user',
            },
            {
                text: 'Logout',
                icon: 'runner',
                onClick: () => {
                    this.authService.logOut();
                },
            },
        ];
        this.toggleMenu = () => {
            this.menuToggle.emit();
        };
        this.apiButtonOptions = {
            icon: 'columnchooser',
            onClick: () => {
                router.navigate(['/', 'profile']);
            },
        };
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { menuToggleEnabled: "menuToggleEnabled", title: "title" }, outputs: { menuToggle: "menuToggle" }, decls: 8, vars: 5, consts: [[1, "header-toolbar"], ["location", "before", "widget", "dxButton", "cssClass", "menu-button", 3, "options", 4, "ngIf"], ["location", "before", "cssClass", "header-title", 3, "text", 4, "ngIf"], ["location", "after", "widget", "dxButton", "locateInMenu", "auto", 3, "options"], ["location", "after", "locateInMenu", "auto", "menuItemTemplate", "menuItem"], [4, "dxTemplate", "dxTemplateOf"], ["location", "before", "widget", "dxButton", "cssClass", "menu-button", 3, "options"], ["location", "before", "cssClass", "header-title", 3, "text"], ["width", "210px", "height", "100%", "stylingMode", "text", 1, "user-button", "authorization"], ["menuMode", "context", 3, "menuItems"], ["menuMode", "list", 3, "menuItems"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_dxi_item_2_Template, 1, 3, "dxi-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_dxi_item_3_Template, 1, 1, "dxi-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dxi-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dxi-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuToggleEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.apiButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "menuItem");
    } }, directives: [devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiItemComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__["DxTemplateDirective"], devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonComponent"], _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__["UserPanelComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0px;\n  min-height: 100%;\n  height: 100%;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.content[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.content-block[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-top: 20px;\n}\n\n.screen-x-small[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.responsive-paddings[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.screen-large[_ngcontent-%COMP%]   .responsive-paddings[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.dx-card.wide-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-right: 0;\n  border-left: 0;\n}\n\n.full-height-scrollable[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.full-height-scrollable[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%]    > .dx-scrollview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.dx-tile-content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  display: block;\n}\n\n.dx-tile-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.caption[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n[_nghost-%COMP%] {\n  flex: 0 0 auto;\n  z-index: 1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n[_nghost-%COMP%]     .dx-toolbar .dx-toolbar-item.menu-button > .dx-toolbar-item-content .dx-icon {\n  color: #009688;\n}\n\n  .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n  padding: 0 40px;\n}\n\n.screen-x-small[_nghost-%COMP%]     .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after, .screen-x-small   [_nghost-%COMP%]     .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n  padding: 0 20px;\n}\n\n  .dx-toolbar .dx-toolbar-item.menu-button {\n  width: 60px;\n  text-align: center;\n  padding: 0;\n}\n\n  .header-title .dx-item-content {\n  padding: 0;\n  margin: 0;\n}\n\n.dx-theme-generic[_nghost-%COMP%]   .dx-toolbar[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   .dx-toolbar[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.dx-theme-generic[_nghost-%COMP%]   .user-button[_ngcontent-%COMP%]    > .dx-button-content[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   .user-button[_ngcontent-%COMP%]    > .dx-button-content[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxkeC1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRoZW1lc1xcZ2VuZXJhdGVkXFx2YXJpYWJsZXMuYmFzZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBRENFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBREdFO0VBQ0UsYUFBQTtBQ0RKOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFJRSxZQUFBO0FDTEY7O0FET0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ05GOztBRFNBO0VBQ0UsWUFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTkY7O0FBbEVBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSx3RUFBQTtBQXFFRjs7QUFuRUU7RUFDRSxjQ05VO0FEMkVkOztBQWpFQTtFQUNFLGVBQUE7QUFvRUY7O0FBbEVFO0VBQ0UsZUFBQTtBQW9FSjs7QUFoRUE7RUFDRSxXRHdEcUI7RUN2RHJCLGtCQUFBO0VBQ0EsVUFBQTtBQW1FRjs7QUFoRUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQW1FRjs7QUEvREU7RUFDRSxlQUFBO0FBa0VKOztBQS9ERTtFQUNFLFlBQUE7QUFpRUoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWJsb2NrIHtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgLnNjcmVlbi14LXNtYWxsICYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1wYWRkaW5ncyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgLnNjcmVlbi1sYXJnZSAmIHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZHgtY2FyZC53aWRlLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBib3JkZXItbGVmdDogMDtcclxufVxyXG5cclxuLmZ1bGwtaGVpZ2h0LXNjcm9sbGFibGVcclxuICA+IC5keC1zY3JvbGxhYmxlLXdyYXBwZXJcclxuICA+IC5keC1zY3JvbGxhYmxlLWNvbnRhaW5lclxyXG4gID4gLmR4LXNjcm9sbGFibGUtY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAmID4gLmR4LXNjcm9sbHZpZXctY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZHgtdGlsZS1jb250ZW50IC5pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZHgtdGlsZS1jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuJHNpZGUtcGFuZWwtbWluLXdpZHRoOiA2MHB4O1xyXG4iLCJodG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uY29udGVudCBoMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnRlbnQtYmxvY2sge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnNjcmVlbi14LXNtYWxsIC5jb250ZW50LWJsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlc3BvbnNpdmUtcGFkZGluZ3Mge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnNjcmVlbi1sYXJnZSAucmVzcG9uc2l2ZS1wYWRkaW5ncyB7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5keC1jYXJkLndpZGUtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG5cbi5mdWxsLWhlaWdodC1zY3JvbGxhYmxlID4gLmR4LXNjcm9sbGFibGUtd3JhcHBlciA+IC5keC1zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC5keC1zY3JvbGxhYmxlLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZnVsbC1oZWlnaHQtc2Nyb2xsYWJsZSA+IC5keC1zY3JvbGxhYmxlLXdyYXBwZXIgPiAuZHgtc2Nyb2xsYWJsZS1jb250YWluZXIgPiAuZHgtc2Nyb2xsYWJsZS1jb250ZW50ID4gLmR4LXNjcm9sbHZpZXctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5keC10aWxlLWNvbnRlbnQgLmltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmR4LXRpbGUtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcHRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbjpob3N0IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZHgtdG9vbGJhciAuZHgtdG9vbGJhci1pdGVtLm1lbnUtYnV0dG9uID4gLmR4LXRvb2xiYXItaXRlbS1jb250ZW50IC5keC1pY29uIHtcbiAgY29sb3I6ICMwMDk2ODg7XG59XG5cbjo6bmctZGVlcCAuZHgtdG9vbGJhci5oZWFkZXItdG9vbGJhciAuZHgtdG9vbGJhci1pdGVtcy1jb250YWluZXIgLmR4LXRvb2xiYXItYWZ0ZXIge1xuICBwYWRkaW5nOiAwIDQwcHg7XG59XG46aG9zdC1jb250ZXh0KC5zY3JlZW4teC1zbWFsbCkgOjpuZy1kZWVwIC5keC10b29sYmFyLmhlYWRlci10b29sYmFyIC5keC10b29sYmFyLWl0ZW1zLWNvbnRhaW5lciAuZHgtdG9vbGJhci1hZnRlciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuOjpuZy1kZWVwIC5keC10b29sYmFyIC5keC10b29sYmFyLWl0ZW0ubWVudS1idXR0b24ge1xuICB3aWR0aDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG46Om5nLWRlZXAgLmhlYWRlci10aXRsZSAuZHgtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG46aG9zdC1jb250ZXh0KC5keC10aGVtZS1nZW5lcmljKSAuZHgtdG9vbGJhciB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjpob3N0LWNvbnRleHQoLmR4LXRoZW1lLWdlbmVyaWMpIC51c2VyLWJ1dHRvbiA+IC5keC1idXR0b24tY29udGVudCB7XG4gIHBhZGRpbmc6IDNweDtcbn0iLCIkYmFzZS10ZXh0LWNvbG9yOiAjZmZmO1xuJGJhc2UtYmc6ICMzNjM2NDA7XG4kYmFzZS1ib3JkZXItY29sb3I6ICM1MTUxNTk7XG4kYmFzZS1hY2NlbnQ6ICMwMDk2ODg7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: 'header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { menuToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], menuToggleEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"], _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__["UserPanelModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"], _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__["UserPanelModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"]], exports: [HeaderComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"], _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__["UserPanelModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"]],
                declarations: [HeaderComponent],
                exports: [HeaderComponent],
            }]
    }], null, null); })();


/***/ }),

/***/ "gnIp":
/*!**************************************************!*\
  !*** ./src/app/pages/cities/cities.component.ts ***!
  \**************************************************/
/*! exports provided: CitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesComponent", function() { return CitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cityservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cityservice.service */ "qClN");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_dist_js_vectormap_data_usa_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/dist/js/vectormap-data/usa.js */ "S+qi");
/* harmony import */ var devextreme_dist_js_vectormap_data_usa_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_dist_js_vectormap_data_usa_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/common.service */ "7o2P");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "oTtP");










const _c0 = function (a0, a2) { return [a0, 52, a2, 20]; };
class CitiesComponent {
    constructor(service, commonService) {
        this.usaMap = devextreme_dist_js_vectormap_data_usa_js__WEBPACK_IMPORTED_MODULE_3__["usa"];
        this.customizeTooltip = (arg) => {
            if (arg.layer.type === 'marker') {
                return {
                    text: arg.attribute('name'),
                };
            }
        };
        this.markerClick = (e) => {
            if (e.target && e.target.layer.type === 'marker') {
                e.component.center(e.target.coordinates()).zoomFactor(10);
            }
        };
        this.resetClick = () => {
            this.vectorMap.instance.center(null);
            this.vectorMap.instance.zoomFactor(null);
        };
        this.markers = service.getCityData();
        this.rawData = commonService.outputObject(commonService.syntaxHighlight(JSON.stringify(this.markers, undefined, 4)));
    }
}
CitiesComponent.ɵfac = function CitiesComponent_Factory(t) { return new (t || CitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cityservice_service__WEBPACK_IMPORTED_MODULE_1__["CityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
CitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CitiesComponent, selectors: [["app-city"]], viewQuery: function CitiesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxVectorMapComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.vectorMap = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_cityservice_service__WEBPACK_IMPORTED_MODULE_1__["CityService"]])], decls: 30, vars: 11, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], ["id", "vector-map", 3, "bounds"], [3, "height"], [3, "enabled", "customizeTooltip"], [3, "dataSource", "hoverEnabled"], [3, "dataSource"], [1, "dx-icon-link"], [2, "padding-left", "5px"], ["href", "https://dev.azure.com/dayafter/line-ready-api", "target", "_blank"], ["id", "scrollview", "scrollByContent", "true", "scrollByThumb", "true", "showScrollbar", "always", "width", "100%", "height", "500", "reachBottomText", "Updating..."], ["scrollView", ""], [3, "innerHTML"], ["href", "https://line-ready-api.azurewebsites.net/", "target", "_blank"]], template: function CitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-vector-map", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dxo-size", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dxo-tooltip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dxi-layer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dxi-layer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Repo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "https://dev.azure.com/dayafter/line-ready-api");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Raw Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "dx-scroll-view", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "pre", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "https://line-ready-api.azurewebsites.net/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bounds", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, -118, -80));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 650);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enabled", true)("customizeTooltip", ctx.customizeTooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.usaMap)("hoverEnabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.rawData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxVectorMapComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoSizeComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoTooltipComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxiLayerComponent"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__["DxScrollViewComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-city',
                providers: [_services_cityservice_service__WEBPACK_IMPORTED_MODULE_1__["CityService"]],
                templateUrl: 'cities.component.html',
            }]
    }], function () { return [{ type: _services_cityservice_service__WEBPACK_IMPORTED_MODULE_1__["CityService"] }, { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }]; }, { vectorMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxVectorMapComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "pFCf":
/*!***************************************************!*\
  !*** ./src/app/shared/services/screen.service.ts ***!
  \***************************************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");




class ScreenService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large])
            .subscribe(() => this.changed.next());
    }
    isLargeScreen() {
        const isLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large);
        const isXLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge);
        return isLarge || isXLarge;
    }
    get sizes() {
        return {
            'screen-x-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall),
            'screen-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small),
            'screen-medium': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium),
            'screen-large': this.isLargeScreen(),
        };
    }
}
ScreenService.ɵfac = function ScreenService_Factory(t) { return new (t || ScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
ScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScreenService, factory: ScreenService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, { changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "qClN":
/*!*************************************************!*\
  !*** ./src/app/services/cityservice.service.ts ***!
  \*************************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_data_citydata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/citydata */ "WTJC");
/* harmony import */ var _models_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/marker */ "ucnM");




const markers = [];
class CityService {
    constructor() {
        this.getCityData = () => {
            for (const element of _shared_data_citydata__WEBPACK_IMPORTED_MODULE_1__["StaticCityData"]) {
                this.marker = new _models_marker__WEBPACK_IMPORTED_MODULE_2__["MarkerModel"]();
                this.marker.coordinates = [element.coord.lon, element.coord.lat];
                this.marker.attributes = new _models_marker__WEBPACK_IMPORTED_MODULE_2__["Attributes"]();
                this.marker.attributes.name = element.name + ', ' + element.state;
                markers.push(this.marker);
            }
            return markers;
        };
    }
}
CityService.ɵfac = function CityService_Factory(t) { return new (t || CityService)(); };
CityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CityService, factory: CityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ruYK":
/*!***********************************!*\
  !*** ./src/app/app-navigation.ts ***!
  \***********************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
const navigation = [
    {
        text: 'Home',
        path: '/home',
        icon: 'chart',
    },
    {
        text: 'Client',
        path: '/client',
        icon: 'user',
    },
    {
        text: 'API Data',
        icon: 'columnchooser',
        items: [
            {
                text: 'Profiles',
                icon: 'card',
                path: '/profile',
            },
            {
                text: 'US Cities',
                icon: 'map',
                path: '/cities',
            },
        ],
    },
];


/***/ }),

/***/ "ucnM":
/*!**********************************!*\
  !*** ./src/app/models/marker.ts ***!
  \**********************************/
/*! exports provided: Attributes, MarkerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attributes", function() { return Attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerModel", function() { return MarkerModel; });
class Attributes {
}
class MarkerModel {
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components */ "1ua0");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services */ "ZF+8");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/profile/profile.component */ "Y5Lh");
/* harmony import */ var _pages_cities_cities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/cities/cities.component */ "gnIp");
/* harmony import */ var _pages_client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/client/client.component */ "V48J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/pipes/time.pipe */ "W/DX");













const routes = [
    {
        path: 'cities',
        component: _pages_cities_cities_component__WEBPACK_IMPORTED_MODULE_6__["CitiesComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    },
    {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    },
    {
        path: 'client',
        component: _pages_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    },
    {
        path: 'login-form',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    },
    {
        path: '**',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxDataGridModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxFormModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxTemplateModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxGalleryModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxVectorMapModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxButtonModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxPieChartModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxHtmlEditorModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxTileViewModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxScrollViewModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxProgressBarModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _pages_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        _pages_cities_cities_component__WEBPACK_IMPORTED_MODULE_6__["CitiesComponent"],
        _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_10__["TimePipe"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxFormModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxTemplateModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxGalleryModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxVectorMapModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxPieChartModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxHtmlEditorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxTileViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxScrollViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxProgressBarModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_10__["TimePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxDataGridModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxFormModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxTemplateModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxGalleryModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxVectorMapModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxButtonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxPieChartModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxHtmlEditorModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxTileViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxScrollViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxProgressBarModule"],
                ],
                providers: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_10__["TimePipe"]],
                declarations: [
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _pages_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
                    _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                    _pages_cities_cities_component__WEBPACK_IMPORTED_MODULE_6__["CitiesComponent"],
                    _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_10__["TimePipe"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map