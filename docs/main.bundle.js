webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (url) {
        var _this = this;
        return this.http.get(url).catch(function (err) { return _this.processRequestError(err); });
    };
    HttpService.prototype.post = function (url, data) {
        var _this = this;
        return this.http.post(url, data).catch(function (err) { return _this.processRequestError(err); });
    };
    HttpService.prototype.processRequestError = function (err) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_URL; });

var BASE_URL = 'http://siface-thegoodone.rhcloud.com/';
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CotizacionService = (function () {
    function CotizacionService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* BASE_URL */] + 'siface-billing/quotes';
    }
    CotizacionService.prototype.buscar = function (query) {
        // http://siface-thegoodone.rhcloud.com/siface-billing/quotes?size=1000
        // return {"id": 1, "codigo": "0001-000173", "vendedor": "Juan Perez", "cliente":{"ruc":"200101010190","razonsocial":"Cascader","direccion":"Calle P L4w Mz. ASD2"},"cart":[{"producto":{"id":1,"codigo":"9290010","nombre":"Caso 4 punta(s) c/ suspension nylon c/rachet H-207","imagen":"http://img.directindustry.es/images_di/photo-g/60721-4994397.jpg","marca":"YAM","stock":20,"precio":21.3,"unidad":"Und."},"cantidad":1},{"producto":{"id":1,"codigo":"9290010","nombre":"Caso 4 punta(s) c/ suspension nylon c/rachet H-207","imagen":"http://img.directindustry.es/images_di/photo-g/60721-4994397.jpg","marca":"YAM","stock":20,"precio":21.3,"unidad":"Und."},"cantidad":"2"},{"producto":{"id":1,"codigo":"9290010","nombre":"Caso 4 punta(s) c/ suspension nylon c/rachet H-207","imagen":"http://img.directindustry.es/images_di/photo-g/60721-4994397.jpg","marca":"YAM","stock":20,"precio":21.3,"unidad":"Und."},"cantidad":1}]};
        var url = this.baseUrl + "?ruc=" + query;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CotizacionService.prototype.cargar = function (id) {
        var url = this.baseUrl + "/" + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CotizacionService.prototype.registrar = function (data) {
        var url = this.baseUrl;
        return this.http.post(url, data);
    };
    CotizacionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], CotizacionService);
    return CotizacionService;
    var _a;
}());
//# sourceMappingURL=cotizacion.service.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cotizacion_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarCotizacionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuscarCotizacionComponent = (function () {
    function BuscarCotizacionComponent(router, cotizacionService) {
        this.router = router;
        this.cotizacionService = cotizacionService;
    }
    BuscarCotizacionComponent.prototype.ngOnInit = function () {
        this.query = '';
        this.cotizaciones = [];
        this.buscar();
    };
    BuscarCotizacionComponent.prototype.nuevaCotizacion = function () {
        localStorage.removeItem('cart');
        this.router.navigate(['/cotiza/new/search']);
    };
    BuscarCotizacionComponent.prototype.buscar = function () {
        var _this = this;
        this.cotizacionService.buscar(this.query).subscribe(function (data) {
            _this.cotizaciones = data.content;
            _this.results = data;
        });
    };
    BuscarCotizacionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buscar-cotizacion',
            template: __webpack_require__(659),
            styles: [__webpack_require__(647)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cotizacion_service__["a" /* CotizacionService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cotizacion_service__["a" /* CotizacionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cotizacion_service__["a" /* CotizacionService */]) === 'function' && _b) || Object])
    ], BuscarCotizacionComponent);
    return BuscarCotizacionComponent;
    var _a, _b;
}());
//# sourceMappingURL=buscar-cotizacion.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inventario_service__ = __webpack_require__(587);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarProductoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuscarProductoComponent = (function () {
    function BuscarProductoComponent(router, inventarioService) {
        this.router = router;
        this.inventarioService = inventarioService;
        this.numberMask = __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            allowDecimal: false,
            includeThousandsSeparator: false
        });
        this.productos = [];
        this.cart = [];
        this.query = '';
        this.currentPage = 0;
    }
    BuscarProductoComponent.prototype.ngOnInit = function () {
        this.cantidadSolicitada = 1;
        this.productoActual = null;
        this.currentPage = 0;
        this.subtotal = 0;
        var cart = JSON.parse(localStorage.getItem('cart'));
        this.cart = cart != null ? cart : [];
        for (var i = 0; i < this.cart.length; i++) {
            this.subtotal = this.subtotal + this.cart[i].cantidad * this.cart[i].producto.unitPrice;
        }
    };
    BuscarProductoComponent.prototype.onBuscar = function () {
        var _this = this;
        this.productoActual = null;
        this.inventarioService.buscar(this.query).subscribe(function (data) {
            _this.response = data;
            _this.productos = _this.response.content;
            _this.currentPage = _this.response.page;
        });
    };
    BuscarProductoComponent.prototype.onAgregar = function (producto) {
        this.productoActual = producto;
        this.cantidadSolicitada = 1;
        this.cantidadSolicitadaErrorMessage = '';
    };
    BuscarProductoComponent.prototype.onAgregarCarrito = function () {
        if (this.cantidadSolicitada < 1) {
            this.cantidadSolicitadaErrorMessage = 'Ingrese una cantidad válida.';
            return;
        }
        var found = false;
        this.subtotal = 0;
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].producto.id == this.productoActual.id) {
                found = true;
                this.cart[i].cantidad = this.cantidadSolicitada;
                this.cart[i].producto = this.productoActual;
            }
            this.subtotal = this.subtotal + this.cart[i].cantidad * this.cart[i].producto.unitPrice;
        }
        if (!found) {
            this.cart.push({
                producto: this.productoActual,
                cantidad: this.cantidadSolicitada
            });
            this.subtotal = this.subtotal + this.cantidadSolicitada * this.productoActual.unitPrice;
        }
        this.productoActual = null;
        this.productos = [];
        localStorage.setItem('cart', JSON.stringify(this.cart));
    };
    BuscarProductoComponent.prototype.onQuitarCarrito = function (id) {
        console.log('asdf');
        var tmpCart = [];
        this.subtotal = 0;
        for (var i = 0; i < this.cart.length; i++) {
            console.log(id);
            console.log(this.cart[i].producto.id);
            if (this.cart[i].producto.id != id) {
                tmpCart.push(this.cart[i]);
                this.subtotal = this.subtotal + this.cart[i].cantidad * this.cart[i].producto.unitPrice;
            }
        }
        console.log(tmpCart);
        this.cart = tmpCart;
    };
    BuscarProductoComponent.prototype.gotoSummary = function () {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.router.navigate(['/cotiza/new/summary']);
    };
    BuscarProductoComponent.prototype.onGotoPage = function (evt) {
        this.currentPage = evt;
        this.onBuscar();
    };
    BuscarProductoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buscar-producto',
            template: __webpack_require__(660),
            styles: [__webpack_require__(648)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_inventario_service__["a" /* InventarioService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_inventario_service__["a" /* InventarioService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_inventario_service__["a" /* InventarioService */]) === 'function' && _b) || Object])
    ], BuscarProductoComponent);
    return BuscarProductoComponent;
    var _a, _b;
}());
//# sourceMappingURL=buscar-producto.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizaSuccessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CotizaSuccessComponent = (function () {
    function CotizaSuccessComponent() {
    }
    CotizaSuccessComponent.prototype.ngOnInit = function () {
    };
    CotizaSuccessComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cotiza-success',
            template: __webpack_require__(661),
            styles: [__webpack_require__(649)]
        }), 
        __metadata('design:paramtypes', [])
    ], CotizaSuccessComponent);
    return CotizaSuccessComponent;
}());
//# sourceMappingURL=cotiza-success.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_text_mask__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buscar_producto_buscar_producto_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cotiza_routing_module__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buscar_cotizacion_buscar_cotizacion_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resumen_cotizacion_resumen_cotizacion_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registro_cliente_registro_cliente_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cotiza_success_cotiza_success_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__detalle_cotizacion_detalle_cotizacion_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_paging_component__ = __webpack_require__(589);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizaModule", function() { return CotizaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CotizaModule = (function () {
    function CotizaModule() {
    }
    CotizaModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_5__cotiza_routing_module__["a" /* CotizaRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__utils_paging_component__["a" /* PagingComponent */], __WEBPACK_IMPORTED_MODULE_4__buscar_producto_buscar_producto_component__["a" /* BuscarProductoComponent */], __WEBPACK_IMPORTED_MODULE_6__buscar_cotizacion_buscar_cotizacion_component__["a" /* BuscarCotizacionComponent */], __WEBPACK_IMPORTED_MODULE_7__resumen_cotizacion_resumen_cotizacion_component__["a" /* ResumenCotizacionComponent */], __WEBPACK_IMPORTED_MODULE_8__registro_cliente_registro_cliente_component__["a" /* RegistroClienteComponent */], __WEBPACK_IMPORTED_MODULE_9__cotiza_success_cotiza_success_component__["a" /* CotizaSuccessComponent */], __WEBPACK_IMPORTED_MODULE_10__detalle_cotizacion_detalle_cotizacion_component__["a" /* DetalleCotizacionComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CotizaModule);
    return CotizaModule;
}());
//# sourceMappingURL=cotiza.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cotizacion_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_cotizacion_model__ = __webpack_require__(585);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleCotizacionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalleCotizacionComponent = (function () {
    function DetalleCotizacionComponent(cotizacionService, route) {
        this.cotizacionService = cotizacionService;
        this.route = route;
        this.cotizacion = new __WEBPACK_IMPORTED_MODULE_3__model_cotizacion_model__["a" /* Cotizacion */]();
    }
    DetalleCotizacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.cotizacionService.cargar(id).subscribe(function (data) {
                _this.cotizacion = data;
                _this.subtotal = 0;
                _this.cotizacion.details.forEach(function (detailItem) {
                    _this.subtotal = detailItem.quantity * detailItem.unitPrice;
                });
            });
        });
    };
    DetalleCotizacionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detalle-cotizacion',
            template: __webpack_require__(662),
            styles: [__webpack_require__(650)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cotizacion_service__["a" /* CotizacionService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_cotizacion_service__["a" /* CotizacionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cotizacion_service__["a" /* CotizacionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], DetalleCotizacionComponent);
    return DetalleCotizacionComponent;
    var _a, _b;
}());
//# sourceMappingURL=detalle-cotizacion.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_emailMask__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_emailMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_emailMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cliente_service__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cotizacion_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_tipopago_service__ = __webpack_require__(588);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroClienteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistroClienteComponent = (function () {
    function RegistroClienteComponent(router, clienteService, cotizacionService, tipoPagoService) {
        this.router = router;
        this.clienteService = clienteService;
        this.cotizacionService = cotizacionService;
        this.tipoPagoService = tipoPagoService;
        this.numberMask = __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            allowDecimal: false,
            includeThousandsSeparator: false
        });
        this.emailMask = __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_emailMask___default.a;
    }
    RegistroClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart = JSON.parse(localStorage.getItem('cart'));
        this.model = {};
        this.contact = {};
        this.tipoPago = [];
        this.tipoPagoService.cargar().subscribe(function (data) {
            _this.tipoPago = data;
            if (_this.tipoPago.length > 0) {
                _this.tipoPagoId = _this.tipoPago[0].id;
            }
        });
    };
    RegistroClienteComponent.prototype.onBlurRuc = function () {
        var _this = this;
        this.clienteService.buscar(this.model.ruc).subscribe(function (data) {
            var contents = data.content;
            if (contents.length > 0) {
                _this.model = contents[0];
            }
        });
    };
    RegistroClienteComponent.prototype.onRegistrar = function () {
        var _this = this;
        var requestData = {
            code: '',
            contactName: this.contact.name,
            contactPhone: this.contact.phone,
            contactEmail: this.contact.email,
            customer: this.model,
            paymentTermId: this.tipoPagoId,
            details: []
        };
        for (var i = 0; i < this.cart.length; i++) {
            var cartItem = this.cart[i];
            requestData.details.push({
                inventoryId: cartItem.producto.id,
                quantity: cartItem.cantidad,
                unitPrice: cartItem.producto.unitPrice
            });
        }
        this.cotizacionService.registrar(requestData).subscribe(function (res) {
            _this.router.navigate(['/cotiza/new/success']);
        });
    };
    RegistroClienteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registro-cliente',
            template: __webpack_require__(663),
            styles: [__webpack_require__(651)],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5__services_cotizacion_service__["a" /* CotizacionService */], __WEBPACK_IMPORTED_MODULE_6__services_tipopago_service__["a" /* TipoPagoService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_cliente_service__["a" /* ClienteService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_cotizacion_service__["a" /* CotizacionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_cotizacion_service__["a" /* CotizacionService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_tipopago_service__["a" /* TipoPagoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_tipopago_service__["a" /* TipoPagoService */]) === 'function' && _d) || Object])
    ], RegistroClienteComponent);
    return RegistroClienteComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=registro-cliente.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenCotizacionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumenCotizacionComponent = (function () {
    function ResumenCotizacionComponent() {
    }
    ResumenCotizacionComponent.prototype.ngOnInit = function () {
        this.cart = JSON.parse(localStorage.getItem('cart'));
        this.subtotal = 0;
        for (var i = 0; i < this.cart.length; i++) {
            this.subtotal = this.subtotal + this.cart[i].cantidad * this.cart[i].producto.unitPrice;
        }
    };
    ResumenCotizacionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resumen-cotizacion',
            template: __webpack_require__(664),
            styles: [__webpack_require__(652)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResumenCotizacionComponent);
    return ResumenCotizacionComponent;
}());
//# sourceMappingURL=resumen-cotizacion.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(665),
            styles: [__webpack_require__(653)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/cotiza/cotiza.module": [
		408
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 458;


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(590);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(412);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'cotiza', loadChildren: 'app/cotiza/cotiza.module#CotizaModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(658),
            styles: [__webpack_require__(646)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cotiza_cotiza_module__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] //,
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__cotiza_cotiza_module__["CotizaModule"],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buscar_producto_buscar_producto_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buscar_cotizacion_buscar_cotizacion_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resumen_cotizacion_resumen_cotizacion_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registro_cliente_registro_cliente_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cotiza_success_cotiza_success_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detalle_cotizacion_detalle_cotizacion_component__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizaRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var routes = [
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__buscar_cotizacion_buscar_cotizacion_component__["a" /* BuscarCotizacionComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_7__detalle_cotizacion_detalle_cotizacion_component__["a" /* DetalleCotizacionComponent */] },
    { path: 'new/search', component: __WEBPACK_IMPORTED_MODULE_2__buscar_producto_buscar_producto_component__["a" /* BuscarProductoComponent */] },
    { path: 'new/summary', component: __WEBPACK_IMPORTED_MODULE_4__resumen_cotizacion_resumen_cotizacion_component__["a" /* ResumenCotizacionComponent */] },
    { path: 'new/client', component: __WEBPACK_IMPORTED_MODULE_5__registro_cliente_registro_cliente_component__["a" /* RegistroClienteComponent */] },
    { path: 'new/success', component: __WEBPACK_IMPORTED_MODULE_6__cotiza_success_cotiza_success_component__["a" /* CotizaSuccessComponent */] }
];
var CotizaRoutingModule = (function () {
    function CotizaRoutingModule() {
    }
    CotizaRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CotizaRoutingModule);
    return CotizaRoutingModule;
}());
//# sourceMappingURL=cotiza-routing.module.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cotizacion; });
var Cotizacion = (function () {
    function Cotizacion() {
        this.customer = {};
        this.details = [];
    }
    return Cotizacion;
}());
//# sourceMappingURL=cotizacion.model.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClienteService = (function () {
    function ClienteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* BASE_URL */] + 'siface-billing/customers';
    }
    ClienteService.prototype.buscar = function (query) {
        var url = this.baseUrl + '?ruc=' + query + '&size=' + 1;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ClienteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], ClienteService);
    return ClienteService;
    var _a;
}());
//# sourceMappingURL=cliente.service.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventarioService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventarioService = (function () {
    function InventarioService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* BASE_URL */] + 'siface-inventory/inventories';
    }
    InventarioService.prototype.buscar = function (query) {
        var url = this.baseUrl + '?description=' + query + '&size=' + 1000;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InventarioService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], InventarioService);
    return InventarioService;
    var _a;
}());
//# sourceMappingURL=inventario.service.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoPagoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TipoPagoService = (function () {
    function TipoPagoService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* BASE_URL */] + 'siface-billing/paymentTerms';
    }
    TipoPagoService.prototype.cargar = function () {
        var url = this.baseUrl;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    TipoPagoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], TipoPagoService);
    return TipoPagoService;
    var _a;
}());
//# sourceMappingURL=tipopago.service.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagingComponent = (function () {
    function PagingComponent() {
        this.goto = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PagingComponent.prototype.ngOnInit = function () {
        this.pages = [];
        this.currentPage = this.currentPage * 1;
        this.totalPages = this.totalPages * 1;
        var minPage = this.currentPage - 10 <= 0 ? 0 : this.currentPage - 10;
        var maxPage = this.currentPage + 10 >= this.totalPages ? this.totalPages : this.currentPage + 10;
        for (var i = minPage; i < maxPage; i++) {
            this.pages.push(i);
        }
        console.log(this.currentPage, minPage, maxPage, this.pages);
    };
    PagingComponent.prototype.onClickPage = function (toPage) {
        this.goto.next(toPage);
        return false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], PagingComponent.prototype, "currentPage", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], PagingComponent.prototype, "totalPages", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], PagingComponent.prototype, "pageSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], PagingComponent.prototype, "goto", void 0);
    PagingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'paging',
            providers: [],
            template: "<nav>\n  <ul class=\"pagination justify-content-center\">\n      <li class=\"page-item\" [ngClass]=\"{'active': currentPage==page}\" *ngFor=\"let page of pages\"><a class=\"page-link\" href=\"#\" (click)=\"onClickPage(page)\">{{page+1}}</a></li>\n  </ul>\n  </nav>"
        }), 
        __metadata('design:paramtypes', [])
    ], PagingComponent);
    return PagingComponent;
    var _a;
}());
//# sourceMappingURL=paging.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 658:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-anjo fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand mb-0\" routerLink=\"/home\">Anjo</a>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/cotiza/search\">Cotizaciones</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "<h5><i class=\"fa fa-dollar\" aria-hidden=\"true\"></i> Cotizaciones <small>Consulte sus cotizaciones</small></h5>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <a (click)=\"nuevaCotizacion()\" class=\"btn btn-sm btn-outline-primary float-right\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i> Nueva cotizacion</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\" style=\"padding-top: 20px;\">\n    <table class=\"table table-hover table-sm\" *ngIf=\"cotizaciones.length > 0\">\n      <thead>\n        <tr>\n          <th>Cliente</th>\n          <th>Fecha</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let cotizacion of cotizaciones\">\n          <td>{{cotizacion.customer.ruc}} - {{cotizacion.customer.name}}</td>\n          <td>11/03/2017</td>\n          <td><a [routerLink]=\"['/cotiza/detail/', cotizacion.id]\" class=\"btn btn-link btn-sm btn-outline-primary\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <a routerLink=\"../../search\" class=\"btn btn-sm btn-outline-primary float-left\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n    <h5 class=\"float-left\" style=\"margin-left: 20px; padding-top: 3px;\"><i class=\"fa fa-dollar\" aria-hidden=\"true\"></i> Cotizaciones <small>Nueva cotización</small></h5>\n  </div>\n</div>\n\n<div class=\"row\" style=\"padding-top: 20px;\">\n  <div class=\"col-sm-8\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: 20px;\">\n        <form (ngSubmit)=\"onBuscar();\" #searchForm=\"ngForm\">\n          <div class=\"input-group\">\n            <label class=\"sr-only\" for=\"query\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"query\" [(ngModel)]=\"query\" name=\"query\" placeholder=\"Ej. Casco 4 puntas\">\n            <span class=\"input-group-btn\">\n              <button type=\"button\" (click)=\"onBuscar();\" class=\"btn btn-primary\"><i class=\"fa fa-search\" aria-hiden=\"true\"></i> Buscar</button>\n            </span>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\" style=\"margin-top: 20px;\">\n        <div *ngIf=\"!productoActual\">\n          <p class=\"text-center text-muted font-italic\" *ngIf=\"productos.length == 0\">\n            No encontramos resultados... Vuelve a intentar.\n          </p>\n          <table class=\"table\" *ngIf=\"productos.length != 0\">\n            <thead>\n              <tr>\n                <th>Código</th>\n                <th>Descripción</th>\n                <th>Costo</th>\n                <th>Precio</th>\n                <th style=\"width: 70px;\"></th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let producto of productos\">\n                <td>{{producto.code}}</td>\n                <td>{{producto.description}}<br /><span class=\"badge\" [ngClass]=\"{'badge-success': producto.stock > 30, 'badge-warning': producto.stock > 0 && producto.stock < 31, 'badge-danger': producto.stock == 0}\">Stock: {{producto.stock}}</span></td>\n                <td>S/. {{producto.unitCost | number:'1.2-2' }}</td>\n                <td>S/. {{producto.unitPrice | number:'1.2-2' }}</td>\n                <td><img class=\"img-thumbnail\" [attr.src]=\"producto.image\"></td>\n                <td>\n                  <button (click)=\"onAgregar(producto)\" class=\"btn btn-link\"><i class=\"fa fa-cart-plus\"></i></button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <paging currentPage=\"{{response.page}}\" pageSize=\"{{response.size}}\" totalPages=\"{{response.totalPages}}\" (goto)=\"onGotoPage($event)\" *ngIf=\"productos.length != 0\"></paging>\n        </div>\n\n        <div *ngIf=\"productoActual\">\n          <div *ngIf=\"cantidadSolicitadaErrorMessage\" class=\"alert alert-info\" role=\"alert\">\n            <strong>Información!</strong> {{cantidadSolicitadaErrorMessage}}\n          </div>\n          <form (ngSubmit)=\"onAgregarCarrito()\" #agregarCarritoForm=\"ngForm\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-2\">\n                <img class=\"img-thumbnail\" [attr.src]=\"productoActual.image\">\n              </div>\n              <div class=\"col-sm-10\">\n                <p class=\"form-control-static\">{{productoActual.code}} - {{productoActual.description}}\n                  <br />\n                  <span class=\"badge\" [ngClass]=\"{'badge-success': productoActual.stock > 30, 'badge-warning': productoActual.stock > 0 && productoActual.stock < 31, 'badge-danger': productoActual.stock == 0}\">Stock: {{productoActual.stock}}</span>\n                </p>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-2 col-form-label\">Costo</label>\n                  <div class=\"col-sm-10\">\n                    <p class=\"form-control-static\">S/. {{productoActual.unitCost | number:'1.2-2' }}</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-2 col-form-label\">Precio</label>\n                  <div class=\"col-sm-10\">\n                    <p class=\"form-control-static\">S/. {{productoActual.unitPrice | number:'1.2-2' }}</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label for=\"cantidad\" class=\"col-sm-2 col-form-label\">Cantidad</label>\n                  <div class=\"col-sm-4 input-group\">\n                    <input name=\"cantidad\" type=\"text\" class=\"form-control\" id=\"cantidad\" placeholder=\"Ej. 2\" [(ngModel)]=\"cantidadSolicitada\" [textMask]=\"{mask: numberMask}\" />\n                    <div class=\"input-group-addon\">{{productoActual.measure}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\"></label>\n              <div class=\"col-sm-10 text-right\">\n                <button class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-cart-plus\"></i> Agregar al carrito</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <p class=\"text-center text-muted font-italic\" *ngIf=\"cart.length == 0\" style=\"margin: 70px 0px\">\n        <i class=\"fa fa-shopping-cart\" style=\"font-size: 98px;\" aria-hidden=\"true\"></i><br />\n        Seleccione productos para la cotización.\n      </p>\n      <div class=\"card-header\" *ngIf=\"cart.length != 0\">\n        Productos seleccionados\n      </div>\n      <!-- <ul class=\"list-group list-group-flush\" *ngIf=\"cart.length != 0\"> -->\n        <!-- <li class=\"list-group-item\" *ngFor=\"let cartItem of cart\"> -->\n          <div class=\"row\" style=\"position: relative; font-size: 12px; padding: 14px 15px; border-top: 1px solid rgba(0, 0, 0, 0.125); margin-right: 0px; margin-left: 0px;\" *ngFor=\"let cartItem of cart\">\n            <button (click)=\"onQuitarCarrito(cartItem.producto.id)\" style=\"position: absolute; padding: 3px; margin-top: -4px; z-index: 100;\" class=\"btn btn-link\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\n            <div class=\"col-2 text-right\">{{cartItem.cantidad}}</div>\n            <div class=\"col-7\">{{cartItem.producto.description}}</div>\n            <div class=\"col-3 text-right\">S/. {{cartItem.producto.unitPrice | number:'1.2-2' }}</div>\n          </div>\n        <!-- </li> -->\n      <!-- </ul> -->\n      <div class=\"card-footer text-muted\" *ngIf=\"cart.length != 0\">\n        <div class=\"row\" style=\"font-size: 13px\">\n          <div class=\"col-sm-8 text-right\">Subtotal</div>\n          <div class=\"col-sm-4 text-right\"><strong>S/. {{subtotal | number:'1.2-2' }}</strong></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\" style=\"padding-top: 20px\"><button class=\"btn btn-success btn-block\" type=\"button\" (click)=\"gotoSummary()\">Generar cotización</button></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top: 20px;\">\n  <div class=\"col-sm-12\">\n    <div class=\"alert alert-success\" role=\"alert\">\n      <strong>Felicidades!</strong> Cotización registrada con éxito.\n    </div>\n    <p class=\"text-center\">\n      <!-- <button [routerLink]=\"['/cotiza/detail/', 1]\" class=\"btn btn-primary\">Ver cotización</button> -->\n      <button routerLink=\"/home\" class=\"btn btn-default\">Ir a Home</button>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top: 20px;\">\n  <div class=\"col-sm-12 text-center\">\n    <a routerLink=\"/cotiza/search\" class=\"btn btn-sm btn-outline-primary float-left\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n    <h4>Cotizacion N° {{cotizacion.code}}</h4>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h6>Datos del cliente</h6>\n    <form (ngSubmit)=\"onRegistrar()\" #clientForm=\"ngForm\">\n      <div class=\"row\">\n        <label for=\"ruc\" class=\"col-sm-2 col-form-label col-form-label-sm\">RUC</label>\n        <div class=\"col-sm-3\">\n          <p class=\"form-control-static\">{{cotizacion.customer.ruc}}</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"razonsocial\" class=\"col-sm-2 col-form-label col-form-label-sm\">Razón social</label>\n        <div class=\"col-sm-6\">\n          <p class=\"form-control-static\">{{cotizacion.customer.name}}</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"direccion\" class=\"col-sm-2 col-form-label col-form-label-sm\">Dirección</label>\n        <div class=\"col-sm-6\">\n          <p class=\"form-control-static\">{{cotizacion.customer.address}}</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label for=\"vendedor\" class=\"col-sm-2 col-form-label col-form-label-sm\">Vendedor</label>\n        <div class=\"col-sm-6\">\n          <p class=\"form-control-static\">{{cotizacion.contactName}} - {{cotizacion.contactEmail}} - telf.: {{cotizacion.contactPhone}}</p>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"row text-muted\" style=\"font-size: 13px; padding: 15px 0px;\">\n  <div class=\"col-sm-8\">\n    Item\n  </div>\n  <div class=\"col-sm-2\">\n    Precio\n  </div>\n  <div class=\"col-sm-2\">\n    Cantidad\n  </div>\n</div>\n<div class=\"row\" style=\"border-top: 1px solid rgba(0, 0, 0, 0.125); padding: 15px 0px;\" *ngFor=\"let cartItem of cotizacion.details\">\n  <div class=\"col-sm-2\">\n    <img class=\"img-thumbnail\" [attr.src]=\"cartItem.imagen\">\n  </div>\n  <div class=\"col-sm-6\">\n    {{cartItem.description}} - {{cartItem.brand}}\n  </div>\n  <div class=\"col-sm-2\">\n    S/. {{cartItem.unitPrice | number:'1.2-2'}}\n  </div>\n  <div class=\"col-sm-2\">\n    {{cartItem.quantity}}\n  </div>\n</div>\n<div class=\"row\" style=\"border-top: 1px solid rgba(0, 0, 0, 0.125); padding: 15px 0px;\">\n  <div class=\"col-sm-10 text-right text-muted\" style=\"font-size: 13px;\">\n    Subtotal\n  </div>\n  <div class=\"col-sm-2\">\n    S/. {{subtotal | number:'1.2-2'}}\n  </div>\n</div>\n"

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <a routerLink=\"../summary\" class=\"btn btn-sm btn-outline-primary float-left\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n    <h5 class=\"float-left\" style=\"margin-left: 20px; padding-top: 3px;\"><i class=\"fa fa-dollar\" aria-hidden=\"true\"></i> Cotizaciones <small>Nueva cotización</small></h5>\n  </div>\n</div>\n<div class=\"row\" style=\"padding-top: 20px;\">\n  <div class=\"col-sm-12\">\n    <div class=\"alert alert-info\" role=\"alert\">\n      Cotizando <strong>{{cart.length}} item(s)</strong>\n    </div>\n    <h4>Datos del Cliente</h4>\n    <form (ngSubmit)=\"onRegistrar()\" #clientForm=\"ngForm\">\n      <div class=\"form-group row\">\n        <label for=\"ruc\" class=\"col-sm-2 col-form-label col-form-label-sm\">RUC</label>\n        <div class=\"col-sm-3\">\n          <input type=\"text\" name=\"ruc\" [(ngModel)]=\"model.ruc\" [textMask]=\"{mask: numberMask}\" (blur)=\"onBlurRuc()\" class=\"form-control form-control-sm\" id=\"ruc\" placeholder=\"Ej. 20281939289\" maxlength=\"11\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"razonsocial\" class=\"col-sm-2 col-form-label col-form-label-sm\">Razón social</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" name=\"razonsocial\" [(ngModel)]=\"model.name\" class=\"form-control form-control-sm\" id=\"razonsocial\" placeholder=\"Ej. ANJO IMPORT & EXPORT S.A.C.\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"direccion\" class=\"col-sm-2 col-form-label col-form-label-sm\">Dirección</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" name=\"direccion\" [(ngModel)]=\"model.address\" class=\"form-control form-control-sm\" id=\"direccion\" placeholder=\"Ej. CAL.TUNGASUCA NRO. 488 URB. TUPAC AMARU\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"tipopago\" class=\"col-sm-2 col-form-label col-form-label-sm\">Tipo pago</label>\n        <div class=\"col-sm-3\">\n          <select name=\"tipopago\" [(ngModel)]=\"tipoPagoId\" class=\"form-control form-control-sm\">\n            <option *ngFor=\"let t of tipoPago\" [ngValue]=\"t.id\">{{t.name}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-6\">\n          <h4>Datos de contacto</h4>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': contactname.errors}\">\n        <label for=\"contactname\" class=\"col-sm-2 col-form-label col-form-label-sm\">Contacto</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" name=\"contactname\" [(ngModel)]=\"contact.name\" class=\"form-control form-control-sm\" id=\"contactname\" required #contactname=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': contactphone.errors}\">\n        <label for=\"contactphone\" class=\"col-sm-2 col-form-label col-form-label-sm\">Telf. Contacto</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" name=\"contactphone\" [(ngModel)]=\"contact.phone\" [textMask]=\"{mask: numberMask}\" maxlength=\"9\" class=\"form-control form-control-sm\" id=\"contactphone\" required #contactphone=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': contactemail.errors}\">\n        <label for=\"contactemail\" class=\"col-sm-2 col-form-label col-form-label-sm\">Email contacto</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" name=\"contactemail\" [(ngModel)]=\"contact.email\" [textMask]=\"{mask: emailMask, guide: false}\" class=\"form-control form-control-sm\" id=\"contactemail\" required #contactemail=\"ngModel\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label col-form-label-sm\"></label>\n        <div class=\"col-sm-6 text-right\">\n          <button type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-floppy-o\"></i> Registrar cotización</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <a routerLink=\"../search\" class=\"btn btn-sm btn-outline-primary float-left\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n    <h5 class=\"float-left\" style=\"margin-left: 20px; padding-top: 3px;\"><i class=\"fa fa-dollar\" aria-hidden=\"true\"></i> Cotizaciones <small>Nueva cotización</small></h5>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 text-right\">\n    <a routerLink=\"../client\" class=\"btn btn-success\"><i class=\"fa fa-check-square\" aria-hidden=\"true\"></i> Continuar con Cotización</a>\n  </div>\n</div>\n<div class=\"row text-muted\" style=\"font-size: 13px; margin-top: 20px; padding: 15px 0px;\">\n  <div class=\"col-sm-8\">\n    Item\n  </div>\n  <div class=\"col-sm-2\">\n    Precio\n  </div>\n  <div class=\"col-sm-2\">\n    Cantidad\n  </div>\n</div>\n<div class=\"row\" style=\"border-top: 1px solid rgba(0, 0, 0, 0.125); padding: 15px 0px; font-size: 14px;\" *ngFor=\"let cartItem of cart\">\n  <div class=\"col-sm-2\">\n    <img class=\"img-thumbnail\" [attr.src]=\"cartItem.producto.image\">\n  </div>\n  <div class=\"col-sm-6\">\n    {{cartItem.producto.description}}\n  </div>\n  <div class=\"col-sm-2\">\n    S/. {{cartItem.producto.unitPrice | number:'1.2-2' }}\n  </div>\n  <div class=\"col-sm-2\">\n    {{cartItem.cantidad}}\n  </div>\n</div>\n<div class=\"row\" style=\"border-top: 1px solid rgba(0, 0, 0, 0.125); padding: 15px 0px;\">\n  <div class=\"col-sm-10 text-right text-muted\" style=\"font-size: 13px;\">\n    Subtotal\n  </div>\n  <div class=\"col-sm-2\">\n    S/. {{subtotal | number:'1.2-2' }}\n  </div>\n</div>\n"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(459);


/***/ })

},[933]);
//# sourceMappingURL=main.bundle.js.map