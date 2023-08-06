"use strict";
(self["webpackChunkangular_mt"] = self["webpackChunkangular_mt"] || []).push([["main"],{

/***/ 6581:
/*!******************************************************!*\
  !*** ./src/app/Model/break-down-estimate.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakDownEstimateService": () => (/* binding */ BreakDownEstimateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BreakDownEstimateService {
  constructor() {
    this.storage_google = [];
    this.vm_google = [];
    this.storage_aws = [];
    this.vm_aws = [];
  }
  processEstimationDetails() {
    // let grandtotal =0
    for (var i = 0; i < sessionStorage.length; i++) {
      let rowdata = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
      console.log(rowdata);
      if ('costaws' in rowdata) {
        if ('cpucore' in rowdata) {
          rowdata["id"] = String(sessionStorage.key(i));
          this.vm_aws.push(rowdata);
        }
        if ('get' in rowdata) {
          rowdata["id"] = String(sessionStorage.key(i));
          this.storage_aws.push(rowdata);
        }
      }
      if ('costgoogle' in rowdata) {
        if ('cpucore' in rowdata) {
          rowdata["id"] = String(sessionStorage.key(i));
          this.vm_google.push(rowdata);
        }
        if ('get' in rowdata) {
          rowdata["id"] = String(sessionStorage.key(i));
          this.storage_google.push(rowdata);
        }
      }
      // grandtotal=grandtotal+Number(rowdata["costgoogle"]) +Number(rowdata["costaws"])
      // this.totalcost=grandtotal
    }

    return this.vm_aws, this.storage_aws, this.vm_google, this.storage_google;
  }
  static #_ = this.ɵfac = function BreakDownEstimateService_Factory(t) {
    return new (t || BreakDownEstimateService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BreakDownEstimateService,
    factory: BreakDownEstimateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7553:
/*!********************************************************!*\
  !*** ./src/app/Model/edit-storage-estimate.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditStorageEstimateService": () => (/* binding */ EditStorageEstimateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class EditStorageEstimateService {
  constructor() {}
  EditStorageService(data) {
    this.serviceID = data;
    let obj = JSON.parse(sessionStorage.getItem(this.serviceID));
    obj["id"] = this.serviceID;
    sessionStorage.setItem("tempstorage", JSON.stringify(obj));
  }
  static #_ = this.ɵfac = function EditStorageEstimateService_Factory(t) {
    return new (t || EditStorageEstimateService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: EditStorageEstimateService,
    factory: EditStorageEstimateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1678:
/*!****************************************************************!*\
  !*** ./src/app/Model/edit-virtual-machine-estimate.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditVirtualMachineEstimateService": () => (/* binding */ EditVirtualMachineEstimateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class EditVirtualMachineEstimateService {
  constructor() {}
  EditVMService(data) {
    this.serviceID = data;
    let obj = JSON.parse(sessionStorage.getItem(this.serviceID));
    obj["id"] = this.serviceID;
    sessionStorage.setItem("tempvm", JSON.stringify(obj));
  }
  static #_ = this.ɵfac = function EditVirtualMachineEstimateService_Factory(t) {
    return new (t || EditVirtualMachineEstimateService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: EditVirtualMachineEstimateService,
    factory: EditVirtualMachineEstimateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3446:
/*!***************************************************!*\
  !*** ./src/app/Model/remove-from-cart.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveFromCartService": () => (/* binding */ RemoveFromCartService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RemoveFromCartService {
  constructor() {}
  removeService(data) {
    this.serviceID = data;
    sessionStorage.removeItem(this.serviceID);
    window.location.reload();
  }
  static #_ = this.ɵfac = function RemoveFromCartService_Factory(t) {
    return new (t || RemoveFromCartService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RemoveFromCartService,
    factory: RemoveFromCartService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1719:
/*!******************************************!*\
  !*** ./src/app/Model/storage.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StorageService {
  constructor() {}
  StorageFormValue(data, date) {
    this.storageParam = data;
    this.range = date;
  }
  test() {
    console.log("");
  }
  CalculatedStorageTotal() {
    const date1 = this.range['start'];
    const date2 = this.range['end'];
    const diffTime = Math.abs(+date2 - +date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const duration = diffDays + " days";
    this.storageParam["duration"] = duration;
    this.storageParam["duration_number"] = diffDays;
    if ("tempstorage" in sessionStorage) {
      let obj = JSON.parse(sessionStorage.getItem("tempstorage"));
      this.cost = Number(obj['memorysize']) + Number(this.storageParam['transfer']) + Number(this.storageParam['get']) + Number(this.storageParam['put']) + Number(this.storageParam["duration_number"]);
      const storagedataA = structuredClone(this.storageParam);
      if (this.storageParam["google"] == true) {
        const newDate = 'gs' + new Date();
        this.storageParam["costgoogle"] = this.cost;
        sessionStorage.setItem(obj["id"], JSON.stringify(this.storageParam));
      }
      if (this.storageParam["aws"] == true) {
        const newDateA = 'as' + new Date();
        storagedataA["costaws"] = this.cost + 100;
        sessionStorage.setItem(obj["id"], JSON.stringify(storagedataA));
      }
      window.location.reload();
      sessionStorage.removeItem("tempstorage");
    } else {
      const newDate = 'gs' + new Date();
      const newDateA = 'as' + new Date();
      const storagedataA = structuredClone(this.storageParam);
      this.cost = Number(this.storageParam['memorysize']) + Number(this.storageParam['transfer']) + Number(this.storageParam['get']) + Number(this.storageParam['put']) + Number(this.storageParam["duration_number"]);
      if (this.storageParam["google"] == true) {
        const newDate = 'gs' + new Date();
        this.storageParam["costgoogle"] = this.cost;
        sessionStorage.setItem(String(newDate), JSON.stringify(this.storageParam));
      }
      if (this.storageParam["aws"] == true) {
        const newDateA = 'as' + new Date();
        storagedataA["costaws"] = this.cost + 100;
        sessionStorage.setItem(String(newDateA), JSON.stringify(storagedataA));
      }
      window.location.reload();
    }
  }
  googleCost() {}
  awsCost() {}
  static #_ = this.ɵfac = function StorageService_Factory(t) {
    return new (t || StorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: StorageService,
    factory: StorageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7854:
/*!**************************************************!*\
  !*** ./src/app/Model/virtual-machine.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualMachineService": () => (/* binding */ VirtualMachineService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class VirtualMachineService {
  constructor() {}
  VMFormValue(data, date) {
    this.VMParam = data;
    this.range = date;
  }
  calculateVM() {
    if ("tempvm" in sessionStorage) {
      let obj = JSON.parse(sessionStorage.getItem("tempvm"));
      this.cost = Number(this.VMParam['ram']) + Number(this.VMParam['storage']) + Number(this.VMParam['cpucore']) + Number(this.VMParam['instance']) + Number(this.VMParam.controls['noh']);
      this.VMParam["cost"] = this.cost;
      sessionStorage.setItem(obj["id"], JSON.stringify(this.VMParam));
      window.location.reload();
      sessionStorage.removeItem("tempvm");
    } else {
      const newDate = "av" + new Date();
      const newDate2 = "gv" + new Date();
      const date1 = this.range['start'];
      const date2 = this.range['end'];
      const diffTime = Math.abs(+date2 - +date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const duration = diffDays + " days";
      this.VMParam["duration"] = duration;
      const vmdata2 = structuredClone(this.VMParam);
      this.cost = Number(this.VMParam['ram']) + Number(this.VMParam['storage']) + Number(this.VMParam['cpucore']);
      if (this.VMParam["aws"] == true) {
        this.VMParam["costaws"] = this.cost;
        sessionStorage.setItem(String(newDate), JSON.stringify(this.VMParam));
      }
      if (this.VMParam["google"] == true) {
        vmdata2["costgoogle"] = this.cost + 1000;
        sessionStorage.setItem(String(newDate2), JSON.stringify(vmdata2));
      }
      console.log(this.VMParam);
      console.log(vmdata2);
      window.location.reload();
    }
  }
  static #_ = this.ɵfac = function VirtualMachineService_Factory(t) {
    return new (t || VirtualMachineService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: VirtualMachineService,
    factory: VirtualMachineService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cloud_services_storage_storage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloud_services/storage/storage.component */ 683);
/* harmony import */ var _providers_providers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/providers.component */ 1244);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _cloud_services_virtualmachine_virtualmachine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloud_services/virtualmachine/virtualmachine.component */ 6834);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
}, {
  path: 'storage',
  component: _cloud_services_storage_storage_component__WEBPACK_IMPORTED_MODULE_0__.StorageComponent
}, {
  path: 'providers',
  component: _providers_providers_component__WEBPACK_IMPORTED_MODULE_1__.ProvidersComponent
}, {
  path: 'virtualmachines',
  component: _cloud_services_virtualmachine_virtualmachine_component__WEBPACK_IMPORTED_MODULE_3__.VirtualmachineComponent
}, {
  path: 'cart',
  component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);



class AppComponent {
  constructor() {
    this.title = 'angular-mt';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar")(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _cloud_services_storage_storage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloud_services/storage/storage.component */ 683);
/* harmony import */ var _providers_providers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers/providers.component */ 1244);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _cloud_services_virtualmachine_virtualmachine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloud_services/virtualmachine/virtualmachine.component */ 6834);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);



























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _cloud_services_storage_storage_component__WEBPACK_IMPORTED_MODULE_3__.StorageComponent, _providers_providers_component__WEBPACK_IMPORTED_MODULE_4__.ProvidersComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _cloud_services_virtualmachine_virtualmachine_component__WEBPACK_IMPORTED_MODULE_6__.VirtualmachineComponent, _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__.CartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule]
  });
})();

/***/ }),

/***/ 4918:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _cloud_services_storage_storage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cloud_services/storage/storage.component */ 683);
/* harmony import */ var _cloud_services_virtualmachine_virtualmachine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cloud_services/virtualmachine/virtualmachine.component */ 6834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _Model_remove_from_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/remove-from-cart.service */ 3446);
/* harmony import */ var _Model_edit_storage_estimate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/edit-storage-estimate.service */ 7553);
/* harmony import */ var _Model_edit_virtual_machine_estimate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/edit-virtual-machine-estimate.service */ 1678);
/* harmony import */ var _Model_break_down_estimate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Model/break-down-estimate.service */ 6581);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);












function CartComponent_ng_container_1_ng_container_3_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Memory Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_3_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r23.memorysize, " ");
  }
}
function CartComponent_ng_container_1_ng_container_3_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Transfer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_3_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r24.transfer, " ");
  }
}
function CartComponent_ng_container_1_ng_container_3_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " GET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_3_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r25.get, " ");
  }
}
function CartComponent_ng_container_1_ng_container_3_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_3_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r26.put, " ");
  }
}
function CartComponent_ng_container_1_ng_container_3_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_3_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.location, " ");
  }
}
function CartComponent_ng_container_1_ng_container_3_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_3_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r28.duration, " ");
  }
}
function CartComponent_ng_container_1_ng_container_3_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_3_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r29.costgoogle, " ");
  }
}
function CartComponent_ng_container_1_ng_container_3_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_3_td_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CartComponent_ng_container_1_ng_container_3_td_27_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const element_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.removeService(element_r30.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CartComponent_ng_container_1_ng_container_3_td_27_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const element_r30 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r33.editServiceStorage(element_r30.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CartComponent_ng_container_1_ng_container_3_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 20);
  }
}
function CartComponent_ng_container_1_ng_container_3_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 21);
  }
}
function CartComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Cost Estimation For Google Cloud Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CartComponent_ng_container_1_ng_container_3_th_5_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CartComponent_ng_container_1_ng_container_3_td_6_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CartComponent_ng_container_1_ng_container_3_th_8_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CartComponent_ng_container_1_ng_container_3_td_9_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CartComponent_ng_container_1_ng_container_3_th_11_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CartComponent_ng_container_1_ng_container_3_td_12_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, CartComponent_ng_container_1_ng_container_3_th_14_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CartComponent_ng_container_1_ng_container_3_td_15_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CartComponent_ng_container_1_ng_container_3_th_17_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, CartComponent_ng_container_1_ng_container_3_td_18_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, CartComponent_ng_container_1_ng_container_3_th_20_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CartComponent_ng_container_1_ng_container_3_td_21_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](22, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, CartComponent_ng_container_1_ng_container_3_th_23_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, CartComponent_ng_container_1_ng_container_3_td_24_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, CartComponent_ng_container_1_ng_container_3_th_26_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, CartComponent_ng_container_1_ng_container_3_td_27_Template, 5, 0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, CartComponent_ng_container_1_ng_container_3_tr_28_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, CartComponent_ng_container_1_ng_container_3_tr_29_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r3.storage_data_google);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.ColumnsStorageGoogle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r3.ColumnsStorageGoogle);
  }
}
function CartComponent_ng_container_1_ng_container_4_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Memory Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_4_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r53.memorysize, " ");
  }
}
function CartComponent_ng_container_1_ng_container_4_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Transfer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_4_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r54.transfer, " ");
  }
}
function CartComponent_ng_container_1_ng_container_4_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " GET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_4_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r55.get, " ");
  }
}
function CartComponent_ng_container_1_ng_container_4_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_4_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r56.put, " ");
  }
}
function CartComponent_ng_container_1_ng_container_4_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_4_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r57.location, " ");
  }
}
function CartComponent_ng_container_1_ng_container_4_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_4_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r58.duration, " ");
  }
}
function CartComponent_ng_container_1_ng_container_4_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_4_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r59.costaws, " ");
  }
}
function CartComponent_ng_container_1_ng_container_4_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_1_ng_container_4_td_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CartComponent_ng_container_1_ng_container_4_td_27_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);
      const element_r60 = restoredCtx.$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r61.removeService(element_r60.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CartComponent_ng_container_1_ng_container_4_td_27_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);
      const element_r60 = restoredCtx.$implicit;
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r63.editServiceStorage(element_r60.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CartComponent_ng_container_1_ng_container_4_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 20);
  }
}
function CartComponent_ng_container_1_ng_container_4_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 21);
  }
}
function CartComponent_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Cost Estimation For AWS Cloud Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CartComponent_ng_container_1_ng_container_4_th_5_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CartComponent_ng_container_1_ng_container_4_td_6_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CartComponent_ng_container_1_ng_container_4_th_8_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CartComponent_ng_container_1_ng_container_4_td_9_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CartComponent_ng_container_1_ng_container_4_th_11_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CartComponent_ng_container_1_ng_container_4_td_12_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, CartComponent_ng_container_1_ng_container_4_th_14_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CartComponent_ng_container_1_ng_container_4_td_15_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CartComponent_ng_container_1_ng_container_4_th_17_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, CartComponent_ng_container_1_ng_container_4_td_18_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, CartComponent_ng_container_1_ng_container_4_th_20_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CartComponent_ng_container_1_ng_container_4_td_21_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](22, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, CartComponent_ng_container_1_ng_container_4_th_23_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, CartComponent_ng_container_1_ng_container_4_td_24_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, CartComponent_ng_container_1_ng_container_4_th_26_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, CartComponent_ng_container_1_ng_container_4_td_27_Template, 5, 0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, CartComponent_ng_container_1_ng_container_4_tr_28_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, CartComponent_ng_container_1_ng_container_4_tr_29_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r4.storage_data_aws);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.ColumnsStorageAWS);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r4.ColumnsStorageAWS);
  }
}
function CartComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Your Estimation for Storage as a service");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CartComponent_ng_container_1_ng_container_3_Template, 30, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CartComponent_ng_container_1_ng_container_4_Template, 30, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.storage_data_google.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.storage_data_aws.length != 0);
  }
}
function CartComponent_ng_container_4_ng_container_3_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " RAM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_3_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r89.ram, " ");
  }
}
function CartComponent_ng_container_4_ng_container_3_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Storage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_3_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r90.storage, " ");
  }
}
function CartComponent_ng_container_4_ng_container_3_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " CPU Core ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_3_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r91.cpucore, " ");
  }
}
function CartComponent_ng_container_4_ng_container_3_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Operating System ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_3_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r92.os, " ");
  }
}
function CartComponent_ng_container_4_ng_container_3_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Number Of Hours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_3_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r93.cpucore, " ");
  }
}
function CartComponent_ng_container_4_ng_container_3_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Number Of Instances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_3_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r94.instance, " ");
  }
}
function CartComponent_ng_container_4_ng_container_3_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_3_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r95.location, " ");
  }
}
function CartComponent_ng_container_4_ng_container_3_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_3_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r96.duration, " ");
  }
}
function CartComponent_ng_container_4_ng_container_3_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_3_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r97.costgoogle, " ");
  }
}
function CartComponent_ng_container_4_ng_container_3_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_3_td_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CartComponent_ng_container_4_ng_container_3_td_33_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r100);
      const element_r98 = restoredCtx.$implicit;
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r99.removeService(element_r98.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CartComponent_ng_container_4_ng_container_3_td_33_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r100);
      const element_r98 = restoredCtx.$implicit;
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r101.editServiceStorage(element_r98.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CartComponent_ng_container_4_ng_container_3_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 20);
  }
}
function CartComponent_ng_container_4_ng_container_3_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 21);
  }
}
function CartComponent_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Cost Estimation For Google Cloud Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CartComponent_ng_container_4_ng_container_3_th_5_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CartComponent_ng_container_4_ng_container_3_td_6_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CartComponent_ng_container_4_ng_container_3_th_8_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CartComponent_ng_container_4_ng_container_3_td_9_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CartComponent_ng_container_4_ng_container_3_th_11_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CartComponent_ng_container_4_ng_container_3_td_12_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, CartComponent_ng_container_4_ng_container_3_th_14_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CartComponent_ng_container_4_ng_container_3_td_15_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CartComponent_ng_container_4_ng_container_3_th_17_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, CartComponent_ng_container_4_ng_container_3_td_18_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, CartComponent_ng_container_4_ng_container_3_th_20_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CartComponent_ng_container_4_ng_container_3_td_21_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](22, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, CartComponent_ng_container_4_ng_container_3_th_23_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, CartComponent_ng_container_4_ng_container_3_td_24_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, CartComponent_ng_container_4_ng_container_3_th_26_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, CartComponent_ng_container_4_ng_container_3_td_27_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](28, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, CartComponent_ng_container_4_ng_container_3_th_29_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, CartComponent_ng_container_4_ng_container_3_td_30_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](31, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, CartComponent_ng_container_4_ng_container_3_th_32_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, CartComponent_ng_container_4_ng_container_3_td_33_Template, 5, 0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, CartComponent_ng_container_4_ng_container_3_tr_34_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, CartComponent_ng_container_4_ng_container_3_tr_35_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r65.vm_data_google);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r65.ColumnsVMGoogle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r65.ColumnsVMGoogle);
  }
}
function CartComponent_ng_container_4_ng_container_4_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " RAM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_4_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r125.ram, " ");
  }
}
function CartComponent_ng_container_4_ng_container_4_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Storage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_4_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r126.storage, " ");
  }
}
function CartComponent_ng_container_4_ng_container_4_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " CPU Core ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_4_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r127.cpucore, " ");
  }
}
function CartComponent_ng_container_4_ng_container_4_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Operating System ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_4_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r128.os, " ");
  }
}
function CartComponent_ng_container_4_ng_container_4_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Number Of Hours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_4_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r129 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r129.cpucore, " ");
  }
}
function CartComponent_ng_container_4_ng_container_4_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Number Of Instances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_4_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r130.instance, " ");
  }
}
function CartComponent_ng_container_4_ng_container_4_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_4_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r131.location, " ");
  }
}
function CartComponent_ng_container_4_ng_container_4_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_4_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r132.duration, " ");
  }
}
function CartComponent_ng_container_4_ng_container_4_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_4_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r133 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r133.costaws, " ");
  }
}
function CartComponent_ng_container_4_ng_container_4_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CartComponent_ng_container_4_ng_container_4_td_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CartComponent_ng_container_4_ng_container_4_td_33_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r136);
      const element_r134 = restoredCtx.$implicit;
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r135.removeService(element_r134.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CartComponent_ng_container_4_ng_container_4_td_33_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r136);
      const element_r134 = restoredCtx.$implicit;
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r137.editServiceStorage(element_r134.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CartComponent_ng_container_4_ng_container_4_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 20);
  }
}
function CartComponent_ng_container_4_ng_container_4_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 21);
  }
}
function CartComponent_ng_container_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Cost Estimation For AWS Cloud Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CartComponent_ng_container_4_ng_container_4_th_5_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CartComponent_ng_container_4_ng_container_4_td_6_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CartComponent_ng_container_4_ng_container_4_th_8_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CartComponent_ng_container_4_ng_container_4_td_9_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CartComponent_ng_container_4_ng_container_4_th_11_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CartComponent_ng_container_4_ng_container_4_td_12_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, CartComponent_ng_container_4_ng_container_4_th_14_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CartComponent_ng_container_4_ng_container_4_td_15_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CartComponent_ng_container_4_ng_container_4_th_17_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, CartComponent_ng_container_4_ng_container_4_td_18_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, CartComponent_ng_container_4_ng_container_4_th_20_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CartComponent_ng_container_4_ng_container_4_td_21_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](22, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, CartComponent_ng_container_4_ng_container_4_th_23_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, CartComponent_ng_container_4_ng_container_4_td_24_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, CartComponent_ng_container_4_ng_container_4_th_26_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, CartComponent_ng_container_4_ng_container_4_td_27_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](28, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, CartComponent_ng_container_4_ng_container_4_th_29_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, CartComponent_ng_container_4_ng_container_4_td_30_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](31, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, CartComponent_ng_container_4_ng_container_4_th_32_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, CartComponent_ng_container_4_ng_container_4_td_33_Template, 5, 0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, CartComponent_ng_container_4_ng_container_4_tr_34_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, CartComponent_ng_container_4_ng_container_4_tr_35_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r66.vm_data_aws);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r66.ColumnsVMAWS);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r66.ColumnsVMAWS);
  }
}
function CartComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Your Estimation for Virtual Machine as a service");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CartComponent_ng_container_4_ng_container_3_Template, 36, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CartComponent_ng_container_4_ng_container_4_Template, 36, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.vm_data_google.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.vm_data_aws.length != 0);
  }
}
function CartComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card", 29)(2, "mat-card-header")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Your Estiamation Cart Is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 30)(6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-card-actions")(8, "div", 31)(9, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Add Service for Estimation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
class CartComponent {
  constructor(dialog, RemoveFromCartService, EditStorageEstimateService, EditVirtualMachineEstimateService, BreakDownEstimateService) {
    this.dialog = dialog;
    this.RemoveFromCartService = RemoveFromCartService;
    this.EditStorageEstimateService = EditStorageEstimateService;
    this.EditVirtualMachineEstimateService = EditVirtualMachineEstimateService;
    this.BreakDownEstimateService = BreakDownEstimateService;
    this.storage_google = [];
    this.vm_google = [];
    this.storage_aws = [];
    this.vm_aws = [];
    this.ColumnsStorageGoogle = ['memorysize', 'transfer', 'get', 'put', 'location', 'duration', 'costgoogle', 'id'];
    this.ColumnsVMGoogle = ['ram', 'storage', 'cpucore', 'os', 'noh', 'instance', 'location', 'duration', 'costgoogle', 'id'];
    this.ColumnsStorageAWS = ['memorysize', 'transfer', 'get', 'put', 'location', 'duration', 'costaws', 'id'];
    this.ColumnsVMAWS = ['ram', 'storage', 'cpucore', 'os', 'noh', 'instance', 'location', 'duration', 'costaws', 'id'];
    this.storage_data_google = this.storage_google;
    this.vm_data_google = this.vm_google;
    this.storage_data_aws = this.storage_aws;
    this.vm_data_aws = this.vm_aws;
  }
  ngOnInit() {
    for (var i = 0; i < sessionStorage.length; i++) {
      let rowdata = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
      console.log(rowdata);
      if ('costaws' in rowdata) {
        if ('cpucore' in rowdata) {
          rowdata["id"] = String(sessionStorage.key(i));
          this.vm_aws.push(rowdata);
        }
        if ('get' in rowdata) {
          rowdata["id"] = String(sessionStorage.key(i));
          this.storage_aws.push(rowdata);
        }
      }
      if ('costgoogle' in rowdata) {
        if ('cpucore' in rowdata) {
          rowdata["id"] = String(sessionStorage.key(i));
          this.vm_google.push(rowdata);
        }
        if ('get' in rowdata) {
          rowdata["id"] = String(sessionStorage.key(i));
          this.storage_google.push(rowdata);
        }
      }
      // grandtotal=grandtotal+Number(rowdata["costgoogle"]) +Number(rowdata["costaws"])
      // this.totalcost=grandtotal
    }
  }

  removeService(id) {
    this.RemoveFromCartService.removeService(id);
  }
  editServiceStorage(id) {
    this.EditStorageEstimateService.EditStorageService(id);
    this.dialog.open(_cloud_services_storage_storage_component__WEBPACK_IMPORTED_MODULE_0__.StorageComponent);
  }
  editServiceVM(id) {
    this.EditVirtualMachineEstimateService.EditVMService(id);
    this.dialog.open(_cloud_services_virtualmachine_virtualmachine_component__WEBPACK_IMPORTED_MODULE_1__.VirtualmachineComponent);
  }
  static #_ = this.ɵfac = function CartComponent_Factory(t) {
    return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Model_remove_from_cart_service__WEBPACK_IMPORTED_MODULE_2__.RemoveFromCartService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Model_edit_storage_estimate_service__WEBPACK_IMPORTED_MODULE_3__.EditStorageEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Model_edit_virtual_machine_estimate_service__WEBPACK_IMPORTED_MODULE_4__.EditVirtualMachineEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Model_break_down_estimate_service__WEBPACK_IMPORTED_MODULE_5__.BreakDownEstimateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CartComponent,
    selectors: [["app-cart"]],
    decls: 7,
    vars: 3,
    consts: [[4, "ngIf"], [1, "empty_cart"], ["for", " "], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "memorysize"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "transfer"], ["matColumnDef", "get"], ["matColumnDef", "put"], ["matColumnDef", "location"], ["matColumnDef", "duration"], ["matColumnDef", "costgoogle"], ["matColumnDef", "id"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["matColumnDef", "costaws"], ["matColumnDef", "ram"], ["matColumnDef", "storage"], ["matColumnDef", "cpucore"], ["matColumnDef", "os"], ["matColumnDef", "noh"], ["matColumnDef", "instance"], [1, "cart"], ["mat-card-image", "", "src", "assets/calculator-hand.jpg"], ["mat-dialog-actions", "", 1, "add_button"], ["mat-raised-button", "", "color", "primary"]],
    template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CartComponent_ng_container_1_Template, 5, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br")(3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CartComponent_ng_container_4_Template, 5, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CartComponent_ng_container_6_Template, 11, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.storage_data_google.length != 0 || ctx.storage_data_aws.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.vm_data_google.length != 0 || ctx.vm_data_aws.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.storage_data_aws.length == 0 && ctx.storage_data_google.length == 0 && ctx.vm_data_aws.length == 0 && ctx.vm_data_google.length == 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle],
    styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n.empty_cart[_ngcontent-%COMP%]{\n  height: 70%;\n}\nimg[_ngcontent-%COMP%] {width: 80%}\n.add_button[_ngcontent-%COMP%]{\n  left: 30%;\n}\n/*# sourceURL=webpack://./src/app/cart/cart.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0FBRUY7RUFDRSxXQUFXO0FBQ2I7QUFDQSxLQUFLLFVBQVU7QUFDZjtFQUNFLFNBQVM7QUFDWCIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4uZW1wdHlfY2FydHtcbiAgaGVpZ2h0OiA3MCU7XG59XG5pbWcge3dpZHRoOiA4MCV9XG4uYWRkX2J1dHRvbntcbiAgbGVmdDogMzAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 683:
/*!*************************************************************!*\
  !*** ./src/app/cloud_services/storage/storage.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageComponent": () => (/* binding */ StorageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_Model_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Model/storage.service */ 1719);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);













function StorageComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const location_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", location_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", location_r4.viewValue, " ");
  }
}
function StorageComponent_mat_error_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function StorageComponent_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class StorageComponent {
  constructor(shared, dialog) {
    this.shared = shared;
    this.dialog = dialog;
    this.locations = [{
      value: 'USA',
      viewValue: 'USA'
    }, {
      value: 'Germany',
      viewValue: 'Germany'
    }, {
      value: 'Singapore',
      viewValue: 'Singapore'
    }];
    this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
    });
    this.storageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      memorysize: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      transfer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      get: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      put: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      allcheck: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      aws: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      google: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      new: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
    });
    this.task = {
      name: 'All Service Providers',
      completed: false,
      color: 'primary',
      subtasks: [{
        name: 'AWS',
        completed: false,
        color: 'primary'
      }, {
        name: 'Google',
        completed: false,
        color: 'primary'
      }, {
        name: 'New',
        completed: false,
        color: 'primary'
      }]
    };
    this.allComplete = false;
  }
  saveToCart() {
    this.shared.StorageFormValue(this.storageForm.value, this.range.value);
    this.shared.CalculatedStorageTotal();
  }
  ngOnInit() {
    console.log(" checking oninit on storage");
    if ("tempstorage" in sessionStorage) {
      let obj = JSON.parse(sessionStorage.getItem("tempstorage"));
      this.upmem = obj["memorysize"];
      this.uptransfer = obj["transfer"];
      this.upget = obj["get"];
      this.upput = obj["put"];
      this.uplocation = obj["location"];
    }
  }
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }
  someComplete() {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }
  setAll(completed) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }
  static #_ = this.ɵfac = function StorageComponent_Factory(t) {
    return new (t || StorageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Model_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StorageComponent,
    selectors: [["app-storage"]],
    decls: 70,
    vars: 25,
    consts: [["action", "", 3, "formGroup"], ["formControlName", "location", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["float", "auto", "hideReuiredMarker", ""], ["matInput", "", "type", "text", "formControlName", "memorysize", 3, "ngModel", "ngModelChange"], ["align", "end"], ["matInput", "", "type", "text", "formControlName", "transfer", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "formControlName", "get", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "formControlName", "put", 3, "ngModel", "ngModelChange"], [1, "right-div-top"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matIconSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], [1, "right-div-bottom"], [1, "example-section"], [1, "example-list-section"], ["formControlName", "allcheck", 1, "example-margin", 3, "checked", "color", "indeterminate", "change"], ["formControlName", "aws", 3, "ngModel", "color", "ngModelChange"], ["formControlName", "google", 3, "ngModel", "color", "ngModelChange"], ["formControlName", "new", 3, "ngModel", "color", "ngModelChange"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]],
    template: function StorageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Welcome To Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 0)(4, "mat-form-field")(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_mat_select_ngModelChange_7_listener($event) {
          return ctx.uplocation = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StorageComponent_mat_option_8_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "mat-form-field", 3)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Memory Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.upmem = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Numaric value in GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "mat-form-field", 3)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Transfer Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_input_ngModelChange_20_listener($event) {
          return ctx.uptransfer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Numaric value in GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div")(24, "mat-form-field", 3)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "GET Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_input_ngModelChange_27_listener($event) {
          return ctx.upget = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Numaric value in MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div")(31, "mat-form-field", 3)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "PUT Reguest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_input_ngModelChange_34_listener($event) {
          return ctx.upput = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Numaric value in MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9)(38, "mat-form-field")(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 11)(43, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "mat-datepicker-toggle", 13)(47, "mat-date-range-picker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, StorageComponent_mat_error_49_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, StorageComponent_mat_error_50_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16)(52, "section", 17)(53, "span", 18)(54, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function StorageComponent_Template_mat_checkbox_change_54_listener($event) {
          return ctx.setAll($event.checked);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 18)(57, "ul")(58, "li")(59, "mat-checkbox", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_mat_checkbox_ngModelChange_59_listener($event) {
          return ctx.task.subtasks[0].completed = $event;
        })("ngModelChange", function StorageComponent_Template_mat_checkbox_ngModelChange_59_listener() {
          return ctx.updateAllComplete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li")(62, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_mat_checkbox_ngModelChange_62_listener($event) {
          return ctx.task.subtasks[1].completed = $event;
        })("ngModelChange", function StorageComponent_Template_mat_checkbox_ngModelChange_62_listener() {
          return ctx.updateAllComplete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li")(65, "mat-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_mat_checkbox_ngModelChange_65_listener($event) {
          return ctx.task.subtasks[2].completed = $event;
        })("ngModelChange", function StorageComponent_Template_mat_checkbox_ngModelChange_65_listener() {
          return ctx.updateAllComplete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 23)(68, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StorageComponent_Template_button_click_68_listener() {
          return ctx.saveToCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Save to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.storageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.uplocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.locations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.upmem);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.uptransfer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.upget);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.upput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.allComplete)("color", ctx.task.color)("indeterminate", ctx.someComplete());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.task.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.task.subtasks[0].completed)("color", ctx.task.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.task.subtasks[0].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.task.subtasks[1].completed)("color", ctx.task.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.task.subtasks[1].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.task.subtasks[2].completed)("color", ctx.task.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.task.subtasks[2].name, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangePicker],
    styles: ["ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin-top: 4px;\n  }\n/*# sourceURL=webpack://./src/app/cloud_services/storage/storage.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2xvdWRfc2VydmljZXMvc3RvcmFnZS9zdG9yYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQiIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6834:
/*!***************************************************************************!*\
  !*** ./src/app/cloud_services/virtualmachine/virtualmachine.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualmachineComponent": () => (/* binding */ VirtualmachineComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_Model_virtual_machine_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Model/virtual-machine.service */ 7854);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);












function VirtualmachineComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const location_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", location_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", location_r4.viewValue, " ");
  }
}
function VirtualmachineComponent_mat_error_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VirtualmachineComponent_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class VirtualmachineComponent {
  constructor(fb, shared) {
    this.fb = fb;
    this.shared = shared;
    this.locations = [{
      value: 'USA',
      viewValue: 'USA'
    }, {
      value: 'Germany',
      viewValue: 'Germany'
    }, {
      value: 'Singapore',
      viewValue: 'Singapore'
    }];
    this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
    });
    this.vmForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      ram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      storage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      cpucore: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      os: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      instance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      noh: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      allcheck: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      aws: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      google: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      new: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
    });
    this.task = {
      name: 'All Service Providers',
      completed: false,
      color: 'primary',
      subtasks: [{
        name: 'AWS',
        completed: false,
        color: 'primary'
      }, {
        name: 'Google',
        completed: false,
        color: 'primary'
      }, {
        name: 'New',
        completed: false,
        color: 'primary'
      }]
    };
    this.allComplete = false;
  }
  saveToCart() {
    this.shared.VMFormValue(this.vmForm.value, this.range.value);
    this.shared.calculateVM();
  }
  ngOnInit() {
    if ("tempvm" in sessionStorage) {
      let obj = JSON.parse(sessionStorage.getItem("tempvm"));
      this.upram = obj["ram"];
      this.upstorage = obj["storage"];
      this.upcpucore = obj["cpucore"];
      this.upos = obj["os"];
      this.upinstance = obj["instance"];
      this.upnoh = obj["noh"];
    }
  }
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }
  someComplete() {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }
  setAll(completed) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }
  static #_ = this.ɵfac = function VirtualmachineComponent_Factory(t) {
    return new (t || VirtualmachineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Model_virtual_machine_service__WEBPACK_IMPORTED_MODULE_0__.VirtualMachineService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VirtualmachineComponent,
    selectors: [["app-virtualmachine"]],
    decls: 86,
    vars: 31,
    consts: [[1, "left-div"], ["action", "", 3, "formGroup"], ["formControlName", "location"], [3, "value", 4, "ngFor", "ngForOf"], ["float", "auto", "hideReuiredMarker", ""], ["matInput", "", "type", "text", "formControlName", "ram", 3, "ngModel", "ngModelChange"], ["align", "end"], ["matInput", "", "type", "text", "formControlName", "storage", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "formControlName", "cpucore", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "formControlName", "os", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "formControlName", "noh", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "formControlName", "instance", 3, "ngModel", "ngModelChange"], [1, "right-div"], [1, "right-div-top"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matIconSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], [1, "right-div-bottom"], [1, "example-section"], [1, "example-list-section"], ["formControlName", "allcheck", 1, "example-margin", 3, "checked", "color", "indeterminate", "change"], ["formControlName", "aws", 3, "ngModel", "color", "ngModelChange"], ["formControlName", "google", 3, "ngModel", "color", "ngModelChange"], ["formControlName", "new", 3, "ngModel", "color", "ngModelChange"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]],
    template: function VirtualmachineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Welcome To Virtual Machines");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "form", 1)(4, "mat-form-field")(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, VirtualmachineComponent_mat_option_8_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "mat-form-field", 4)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "RAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VirtualmachineComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.upram = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Numaric value in GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "mat-form-field", 4)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VirtualmachineComponent_Template_input_ngModelChange_20_listener($event) {
          return ctx.upstorage = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Numaric value in GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div")(24, "mat-form-field", 4)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "CPU Cores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VirtualmachineComponent_Template_input_ngModelChange_27_listener($event) {
          return ctx.upcpucore = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Numaric value in MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div")(31, "mat-form-field", 4)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Operating System");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VirtualmachineComponent_Template_input_ngModelChange_34_listener($event) {
          return ctx.upos = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Chose Linux or Window");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div")(38, "mat-form-field", 4)(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Number Of Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VirtualmachineComponent_Template_input_ngModelChange_41_listener($event) {
          return ctx.upnoh = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Provide Number Of Hours Per Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div")(45, "mat-form-field", 4)(46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Instances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VirtualmachineComponent_Template_input_ngModelChange_48_listener($event) {
          return ctx.upinstance = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Provide Number Of Instances");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 12)(52, "div", 13)(53, "mat-form-field")(54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-date-range-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 15)(58, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "mat-datepicker-toggle", 17)(62, "mat-date-range-picker", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, VirtualmachineComponent_mat_error_64_Template, 2, 0, "mat-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, VirtualmachineComponent_mat_error_65_Template, 2, 0, "mat-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 20)(67, "section", 21)(68, "span", 22)(69, "mat-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function VirtualmachineComponent_Template_mat_checkbox_change_69_listener($event) {
          return ctx.setAll($event.checked);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 22)(72, "ul")(73, "li")(74, "mat-checkbox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VirtualmachineComponent_Template_mat_checkbox_ngModelChange_74_listener($event) {
          return ctx.task.subtasks[0].completed = $event;
        })("ngModelChange", function VirtualmachineComponent_Template_mat_checkbox_ngModelChange_74_listener() {
          return ctx.updateAllComplete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li")(77, "mat-checkbox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VirtualmachineComponent_Template_mat_checkbox_ngModelChange_77_listener($event) {
          return ctx.task.subtasks[1].completed = $event;
        })("ngModelChange", function VirtualmachineComponent_Template_mat_checkbox_ngModelChange_77_listener() {
          return ctx.updateAllComplete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li")(80, "mat-checkbox", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VirtualmachineComponent_Template_mat_checkbox_ngModelChange_80_listener($event) {
          return ctx.task.subtasks[2].completed = $event;
        })("ngModelChange", function VirtualmachineComponent_Template_mat_checkbox_ngModelChange_80_listener() {
          return ctx.updateAllComplete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 27)(83, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VirtualmachineComponent_Template_button_click_83_listener() {
          return ctx.saveToCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Save to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.vmForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.locations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.upram);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.upstorage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.upcpucore);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.upos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.upnoh);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.upinstance);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.allComplete)("color", ctx.task.color)("indeterminate", ctx.someComplete());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.task.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.task.subtasks[0].completed)("color", ctx.task.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.task.subtasks[0].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.task.subtasks[1].completed)("color", ctx.task.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.task.subtasks[1].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.task.subtasks[2].completed)("color", ctx.task.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.task.subtasks[2].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate5"](" ", ctx.vmForm.value.allcheck, " ", ctx.vmForm.value.aws, " ", ctx.vmForm.value.google, " ", ctx.vmForm.value.location, " ", ctx.vmdata, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDateRangePicker],
    styles: [".example-section[_ngcontent-%COMP%] {\n    margin: 12px 0;\n  }\n  \n  .example-margin[_ngcontent-%COMP%] {\n    margin: 0 12px;\n  }\n  \n  ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin-top: 4px;\n  }\n\n.left-div[_ngcontent-%COMP%]{\nfloat: left;\n\n}\n.right-div[_ngcontent-%COMP%]{\n  left: 40%;\n  float: right;\n  \n\n\n}\n/*# sourceURL=webpack://./src/app/cloud_services/virtualmachine/virtualmachine.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2xvdWRfc2VydmljZXMvdmlydHVhbG1hY2hpbmUvdmlydHVhbG1hY2hpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0FBRUY7QUFDQSxXQUFXOztBQUVYO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTs7OztBQUlkIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLW1hcmdpbiB7XG4gICAgbWFyZ2luOiAwIDEycHg7XG4gIH1cbiAgXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbi5sZWZ0LWRpdntcbmZsb2F0OiBsZWZ0O1xuXG59XG4ucmlnaHQtZGl2e1xuICBsZWZ0OiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgXG5cblxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _cloud_services_storage_storage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cloud_services/storage/storage.component */ 683);
/* harmony import */ var _cloud_services_virtualmachine_virtualmachine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cloud_services/virtualmachine/virtualmachine.component */ 6834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);





class HomeComponent {
  constructor(dialog) {
    this.dialog = dialog;
  }
  openVirtialMachineDialog() {
    this.dialog.open(_cloud_services_virtualmachine_virtualmachine_component__WEBPACK_IMPORTED_MODULE_1__.VirtualmachineComponent);
  }
  openStorageDialog() {
    this.dialog.open(_cloud_services_storage_storage_component__WEBPACK_IMPORTED_MODULE_0__.StorageComponent);
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 25,
    vars: 1,
    consts: [[1, "home-div-class"], ["cols", "2", "rowHeight", "2:1", "bottom", "'10px'", "height", "70%", 3, "gutterSize"], [3, "click"], ["text-align", "center"], ["width", "100%", "height", "60%", "src", "/assets/vm.png"], ["width", "60%", "height", "60%", "src", "/assets/storage.png"], ["width", "60%", "height", "70%", "src", "/assets/servers.png"], ["width", "60%", "height", "70%", "src", "/assets/database.png"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select the services you are looking for");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "div")(4, "mat-grid-list", 1)(5, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_mat_grid_tile_click_5_listener() {
          return ctx.openVirtialMachineDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "figure")(7, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Virtual Machines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_mat_grid_tile_click_10_listener() {
          return ctx.openStorageDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "figure")(12, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Object Storage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-grid-tile")(16, "figure")(17, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " New Cloud Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-grid-tile")(21, "figure")(22, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " New Cloud Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("gutterSize", "15px");
      }
    },
    dependencies: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridTile],
    styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n    background: lightblue;\n\n  }\nmat-grid-list[_ngcontent-%COMP%]{\n    position: sticky;\n    align-items: center;\n    width: 85%;\n    margin-left: 8%;\n    margin-top: 2%;\n}\nhome-div-class[_ngcontent-%COMP%]{\n    margin-left: 10%;\n}\n/*# sourceURL=webpack://./src/app/home/home.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7O0VBRXZCO0FBQ0Y7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuXG4gIH1cbm1hdC1ncmlkLWxpc3R7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIG1hcmdpbi10b3A6IDIlO1xufVxuaG9tZS1kaXYtY2xhc3N7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart/cart.component */ 4918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);







class NavbarComponent {
  constructor(dialog) {
    this.dialog = dialog;
  }
  openDialog() {
    this.dialog.open(_cart_cart_component__WEBPACK_IMPORTED_MODULE_0__.CartComponent);
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 19,
    vars: 0,
    consts: [["color", "primary"], [1, "spacer"], ["mat-button", "", "routerLink", "home", "color", "white"], ["mat-button", "", "routerLink", "providers", "color", "white"], ["mat-button", "", "routerLink", "storage", "color", "white"], ["mat-button", "", "routerLink", "virtualmachines", "color", "white"], ["color", "white", "routerLink", "cart"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "span")(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " cloud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " SWC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cloud Service Providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Object Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Virtual Machines");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "New Cloud Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 6)(17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " add_shopping_cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
    styles: [".spacer[_ngcontent-%COMP%]{\n    flex: 1 1 auto;\n}\n/*# sourceURL=webpack://./src/app/navbar/navbar.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXJ7XG4gICAgZmxleDogMSAxIGF1dG87XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1244:
/*!**************************************************!*\
  !*** ./src/app/providers/providers.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvidersComponent": () => (/* binding */ ProvidersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);


class ProvidersComponent {
  static #_ = this.ɵfac = function ProvidersComponent_Factory(t) {
    return new (t || ProvidersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProvidersComponent,
    selectors: [["app-providers"]],
    decls: 16,
    vars: 1,
    consts: [[1, "header-provider"], [1, "provider-div-class"], ["cols", "2", "rowHeight", "2:1", "bottom", "'10px'", "height", "70%", 3, "gutterSize"], [1, "google-grid-class"], ["text-align", "center"], ["width", "80%", "height", "60%", "src", "/assets/google.png"], ["left", "10%", "width", "50%", "height", "60%", "src", "/assets/aws.png"]],
    template: function ProvidersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Currently We Support Two Cloud Service Providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "div")(5, "mat-grid-list", 2)(6, "mat-grid-tile", 3)(7, "figure")(8, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Google Cloud Service Provider ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile")(12, "figure")(13, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " AWS Cloud Service Provide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gutterSize", "15px");
      }
    },
    dependencies: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__.MatGridTile],
    styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n    background: rgb(233, 226, 226);\n\n  }\nmat-grid-list[_ngcontent-%COMP%]{\n    position: sticky;\n    align-items: center;\n    width: 85%;\n    margin-left: 8%;\n    margin-top: 10%;\n}\n\nheader-provider[_ngcontent-%COMP%]{\n    margin-top: 10%;\n}\n/*# sourceURL=webpack://./src/app/providers/providers.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvdmlkZXJzL3Byb3ZpZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCOztFQUVoQztBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzMywgMjI2LCAyMjYpO1xuXG4gIH1cbm1hdC1ncmlkLWxpc3R7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuaGVhZGVyLXByb3ZpZGVye1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map