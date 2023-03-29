(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Code\Local Repos\Git\Youtube-Converter\src\main.ts */"zUnb");


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

/***/ "F1my":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _convert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../convert.service */ "Hm2a");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");











function HomePageComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sorry, the server cannot be reached at the moment ='( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomePageComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please try again later today! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomePageComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-progress-bar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx_r3.loading.mode)("value", ctx_r3.loading.percentDone);
} }
var loadingMode;
(function (loadingMode) {
    loadingMode["none"] = "none";
    loadingMode["buffer"] = "buffer";
    loadingMode["unsure"] = "indeterminate";
})(loadingMode || (loadingMode = {}));
class HomePageComponent {
    constructor(fb, converter) {
        this.fb = fb;
        this.converter = converter;
        this.url = null;
        this.serverError = false;
        this.loading = {
            mode: loadingMode.unsure,
            percentDone: 0,
            inProgress: true,
        };
        this.btnDisabled = {
            single: true,
            playlist: true,
        };
        /**
         * Update the UI progress bar.
         * @param percent The percent currently completed.
         */
        this.handleProgressChange = (percent, done = false) => {
            if (done) {
                console.log('-- Done loading');
                this.loading.inProgress = false;
                this.btnDisabled.playlist = false;
                this.homeForm.enable();
                return;
            }
            // if (percent === NaN) {
            //   console.log('Error: Percent is NaN');
            //   return;
            // }
            console.log('Updating progress: ' + percent + '%');
            this.loading.percentDone = percent;
            if (percent >= 100) {
                this.loading.mode = loadingMode.unsure;
                console.log('-- Unsure');
            }
        };
    }
    ngOnInit() {
        // Init home page form group
        this.homeForm = this.fb.group({
            url: '',
            passcode: '',
            limitVideos: 10,
        });
        // this.homeForm.get('url').disable();
        this.homeForm.disable();
        this.audioOnly = false;
        // Watch for changes to the form (i.e. url changes)
        this.homeForm.valueChanges.subscribe((data) => {
            this.handleUrlChange(data.url);
        });
        // Test if server is up and running
        let serverRes = this.pingServerError();
        serverRes.then((isError) => {
            this.serverError = isError;
            this.loading.inProgress = false;
            if (!isError)
                this.homeForm.enable();
        });
    }
    pingServerError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.converter.pingServer();
        });
    }
    downloadSingle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Begin loading...
            this.loading.mode = loadingMode.unsure;
            this.loading.inProgress = true;
            this.homeForm.disable();
            this.btnDisabled.single = true;
            // Ping server to test...
            let isError = yield this.pingServerError();
            if (isError) {
                this.serverError = isError;
                this.loading.inProgress = false;
                this.btnDisabled.single = false;
                this.homeForm.enable();
                console.log(isError);
                return;
            }
            // Begin downloading single video...
            let url = this.homeForm.value.url;
            let pass = this.homeForm.value.passcode;
            let isValid = yield this.converter.validateUrl(url, pass);
            if (isValid) {
                this.converter.downloadSingle(url, this.audioOnly, pass);
            }
            else {
                console.log('- Error: Invalid Url or Passcode');
            }
            this.loading.inProgress = false;
            this.btnDisabled.single = false;
            this.homeForm.enable();
        });
    }
    downloadPlaylist() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Begin loading...
            this.loading.percentDone = 0;
            this.loading.mode = loadingMode.buffer;
            this.loading.inProgress = true;
            this.btnDisabled.playlist = true;
            // Ping server to test...
            let isError = yield this.pingServerError();
            if (isError) {
                this.serverError = isError;
                this.loading.inProgress = false;
                this.btnDisabled.playlist = false;
                this.homeForm.enable();
                console.log(isError);
                return;
            }
            // Begin downloading playlist...
            let url = this.homeForm.value.url;
            let pass = this.homeForm.value.passcode;
            let limitVideos = Number(this.homeForm.value.limitVideos);
            let isValid = yield this.converter.validateUrl(url, pass, false);
            if (isValid) {
                this.converter.downloadPlaylist(url, limitVideos, this.audioOnly, pass, this.handleProgressChange);
            }
            else {
                console.log('- Error: Invalid Url or Passcode');
                this.loading.inProgress = false;
            }
        });
    }
    handleUrlChange(url) {
        this.url = url;
        url = url.toLowerCase();
        // console.log(url);
        if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
            // Invalid url
            this.btnDisabled.single = true;
            this.btnDisabled.playlist = true;
            return;
        }
        // Check if url is a playlist or just a single video url.
        if (url.includes('list=', 11) || url.includes('playlist', 11)) {
            this.btnDisabled.playlist = false;
            this.btnDisabled.single = true;
        }
        else {
            this.btnDisabled.single = false;
            this.btnDisabled.playlist = true;
        }
    }
    handleAudioOnlyToggle() {
        this.audioOnly = !this.audioOnly;
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_convert_service__WEBPACK_IMPORTED_MODULE_3__["ConvertService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 32, vars: 9, consts: [[1, "container-outer"], ["style", "color: red", 4, "ngIf"], ["style", "color: blue", 4, "ngIf"], ["id", "url-form"], [3, "formGroup"], [1, "form"], [1, "mat-label"], ["required", "", "type", "url", "formControlName", "url", "matInput", "", "maxlength", "256", "placeholder", "Ex: www.youtube.com/watch?v=12345"], ["message", ""], ["align", "end"], ["id", "code-form"], ["required", "", 3, "formGroup"], ["required", "", "type", "password", "formControlName", "passcode", "matInput", "", "maxlength", "100"], ["type", "number", "formControlName", "limitVideos", "matInput", "", "maxlength", "10"], [1, "btn-container"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], [2, "align-self", "center", 3, "change"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["id", "container-progress", 4, "ngIf"], [2, "color", "red"], [2, "color", "blue"], ["id", "container-progress"], ["id", "progress-bar"], ["color", "accent", 3, "mode", "value"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomePageComponent_h2_1_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomePageComponent_h4_2_Template, 2, 0, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "YouTube Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Authorization Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Playlist Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_25_listener() { return ctx.downloadSingle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Download Video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-slide-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomePageComponent_Template_mat_slide_toggle_change_27_listener() { return ctx.handleAudioOnlyToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Audio Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_29_listener() { return ctx.downloadPlaylist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Downlaod Playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, HomePageComponent_div_31_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.serverError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.serverError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.homeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r2.value.length, " / 256");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.homeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.homeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.btnDisabled.single);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.btnDisabled.playlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading.inProgress);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggle"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"]], styles: ["#url-form[_ngcontent-%COMP%] {\n  min-width: 350px;\n  max-width: 1000px;\n  width: 95%;\n  margin-bottom: 20px;\n  align-self: center;\n}\n#code-form[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-bottom: 20px;\n  max-width: 700px;\n  min-width: 300px;\n  align-self: center;\n}\n.mat-label[_ngcontent-%COMP%] {\n  color: black;\n}\n.form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#progress-bar[_ngcontent-%COMP%] {\n  margin: auto;\n  background-color: white;\n  border-radius: 20px;\n  padding: 5px;\n  min-width: 200px;\n  max-width: 710px;\n  width: 100%;\n}\n#container-progress[_ngcontent-%COMP%] {\n  margin: 50px;\n  display: flex;\n}\n.container-outer[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.btn-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  display: flex;\n  justify-content: space-around;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0Q6L0NvZGUvTG9jYWwgUmVwb3MvR2l0L1lvdXR1YmUtQ29udmVydGVyL3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0FDSkY7QURPQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDTEY7QURRQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDTkY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiN1cmwtZm9ybSB7XG4gIC8vIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAvLyBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiNjb2RlLWZvcm0ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5tYXQtbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNwcm9ncmVzcy1iYXIge1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogNzEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jY29udGFpbmVyLXByb2dyZXNzIHtcbiAgbWFyZ2luOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGFpbmVyLW91dGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4iLCIjdXJsLWZvcm0ge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuI2NvZGUtZm9ybSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5tYXQtbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59XG4uZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3Byb2dyZXNzLWJhciB7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiA3MTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jY29udGFpbmVyLXByb2dyZXNzIHtcbiAgbWFyZ2luOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lci1vdXRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYnRuLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.less'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _convert_service__WEBPACK_IMPORTED_MODULE_3__["ConvertService"] }]; }, null); })();


/***/ }),

/***/ "Hm2a":
/*!************************************!*\
  !*** ./src/app/convert.service.ts ***!
  \************************************/
/*! exports provided: ConvertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertService", function() { return ConvertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "pd6k");
/* harmony import */ var _sse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sse.service */ "rL1Q");







class ConvertService {
    constructor(http, sseService) {
        this.http = http;
        this.sseService = sseService;
        this.serverError = true;
    }
    pingServer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let pingError = true;
            let reqUrl = `${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].SSL_DOMAIN}/${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].REQUESTS.TEST}`;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers.set('content-type', 'application/json');
            pingError = yield new Promise((isError) => {
                this.http
                    .get(reqUrl, { headers: headers, observe: 'response' })
                    .subscribe((res) => {
                    if (res.status === 200) {
                        isError(false);
                    }
                }, (err) => {
                    console.log('Server NOT Reached (please reach out to the Admin)');
                    isError(true);
                });
            });
            this.serverError = pingError;
            return pingError;
        });
    }
    encodeQuery(keys, values) {
        if (keys.length !== values.length || keys.length === 0) {
            return '';
        }
        let query = '';
        keys.forEach((key, keyIndex, keys) => {
            query = query + `${key}=${encodeURIComponent(values[keyIndex])}`;
            if (keyIndex < keys.length) {
                query = query + '&';
            }
        });
        return query;
    }
    validateUrl(url, passcode, isSingle = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.serverError) {
                console.log('Server Error =/');
                return;
            }
            let query = this.encodeQuery(['url', 'isSingle', 'pass'], [url, isSingle, passcode]);
            let reqUrl = `${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].SSL_DOMAIN}/${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].REQUESTS.VALIDATE_URL}?${query}`;
            // console.log(query);
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers.set('content-type', 'application/octet-stream');
            return new Promise((isValid) => {
                this.http
                    .get(reqUrl, { headers: headers })
                    .subscribe((data) => {
                    isValid(data.isValid);
                });
            });
        });
    }
    downloadSingle(url, audioOnly, passcode) {
        if (this.serverError) {
            console.log('Server Error =/');
            return;
        }
        let userUrl = url;
        let query = this.encodeQuery(['url', 'audioOnly', 'pass'], [url, audioOnly, passcode]);
        let downUrl = `${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].SSL_DOMAIN}/${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].REQUESTS.SINGLE_DOWNLOAD}?${query}`;
        // let res = this.http
        //   .get(downUrl, { responseType: 'arraybuffer' })
        //   .subscribe((data) => {
        //     console.log(data);
        //   });
        // console.log(res);
        // Navigate to the download link.
        // --> Consider changing the href of the Download Single btn and invoking the click event.
        // window.location.href = <string>downUrl;
        window.open(downUrl);
        // return downUrl;
    }
    /**
     * Initiate download of youtube playlist from a url.
     * @param url
     * @param audioOnly
     * @param passcode
     */
    downloadPlaylist(url, limitVideos, audioOnly, passcode, updateUiProgressBar) {
        if (this.serverError) {
            console.log('Server Error =/');
            return;
        }
        let query = this.encodeQuery(['url', 'audioOnly', 'pass', 'limitVideos'], [url, audioOnly, passcode, limitVideos]);
        let downUrl = `${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].SSL_DOMAIN}/${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].REQUESTS.PLAYLIST_DOWNLOAD}?${query}`;
        this.sseService.getServerSentEvent(downUrl).subscribe((event) => {
            let data = String(event.data);
            // Check if data is zip file name.
            if (data.includes('.zip')) {
                // Request zip file from server.
                // window.location.href = downUrl;
                updateUiProgressBar(0, true);
                // Make another get request for the playlist zip file.
                let playlistFile = data;
                let query = this.encodeQuery(['file'], [playlistFile]);
                let downUrl = `${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].SSL_DOMAIN}/${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].REQUESTS.PLAYLIST_FILE}?${query}`;
                window.location.href = downUrl;
                // window.open(downUrl);
                // this.http.get(downUrl)
                return;
            }
            // Check if data is a number.
            if (Number(data) !== NaN) {
                // Update progress bar.
                updateUiProgressBar(Number(data));
            }
        }, (err) => {
            console.log(err);
        });
    }
    _downloadPlaylist(url, audioOnly, passcode) {
        if (this.serverError) {
            console.log('Server Error =/');
            return;
        }
        let query = this.encodeQuery(['url', 'audioOnly', 'pass'], [url, audioOnly, passcode]);
        let downUrl = `${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].SSL_DOMAIN}/${_const__WEBPACK_IMPORTED_MODULE_3__["_SERVER"].REQUESTS.PLAYLIST_DOWNLOAD}?${query}`;
        window.location.href = downUrl;
    }
}
ConvertService.ɵfac = function ConvertService_Factory(t) { return new (t || ConvertService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_sse_service__WEBPACK_IMPORTED_MODULE_4__["SseService"])); };
ConvertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConvertService, factory: ConvertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConvertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _sse_service__WEBPACK_IMPORTED_MODULE_4__["SseService"] }]; }, null); })();


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
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'Youtube-Converter';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["cols", "1", "rowHeight", "100%"], [1, "flex-main"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-grid-tile-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home-page", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n.flex-cont[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.flex-header[_ngcontent-%COMP%] {\n  align-content: flex-start;\n}\n.flex-main[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDovQ29kZS9Mb2NhbCBSZXBvcy9HaXQvWW91dHViZS1Db252ZXJ0ZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDREY7QURJQTtFQUNFLHlCQUFBO0FDRkY7QURLQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgLy8gaGVpZ2h0OiAxMDAlIC0gODhweDtcbn1cblxuLmZsZXgtY29udCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mbGV4LWhlYWRlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5mbGV4LW1haW4ge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAvLyBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4iLCJtYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufVxuLmZsZXgtY29udCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxleC1oZWFkZXIge1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmZsZXgtbWFpbiB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less'],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");











//#region  -- My Stuff -- //




//#endregion
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "pd6k":
/*!**********************!*\
  !*** ./src/const.ts ***!
  \**********************/
/*! exports provided: _SERVER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SERVER", function() { return _SERVER; });
const _SERVER = {
    SSL_DOMAIN: 'http://localhost:8000',
    DOMAIN: 'http://localhost:8000',
    REQUESTS: {
        SINGLE_DOWNLOAD: 'single',
        PLAYLIST_DOWNLOAD: 'playlist',
        PLAYLIST_FILE: 'playlist/file',
        VALIDATE_URL: 'validate',
        TEST: 'test',
    },
};


/***/ }),

/***/ "rL1Q":
/*!********************************!*\
  !*** ./src/app/sse.service.ts ***!
  \********************************/
/*! exports provided: SseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SseService", function() { return SseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SseService {
    constructor(_zone) {
        this._zone = _zone;
    }
    getServerSentEvent(url) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
            const eventSource = this.getEventSource(url);
            eventSource.onopen = (ev) => {
                console.log('-- Open Connection --');
            };
            eventSource.addEventListener('complete', (event) => {
                console.log('-- Closing --');
                observer.next(event); // Playlist file name should be received here.
                eventSource.close();
            });
            // On message from server.
            eventSource.onmessage = (event) => {
                this._zone.run(() => {
                    observer.next(event);
                });
            };
            // On error.
            eventSource.onerror = (error) => {
                this._zone.run(() => {
                    console.log(`SSE Error:`);
                    console.log(error);
                    observer.error(error);
                });
            };
        });
    }
    getEventSource(url) {
        return new EventSource(url);
    }
}
SseService.ɵfac = function SseService_Factory(t) { return new (t || SseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
SseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SseService, factory: SseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


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
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");





const routes = [{ path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
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