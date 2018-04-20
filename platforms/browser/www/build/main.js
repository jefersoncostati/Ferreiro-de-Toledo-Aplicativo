webpackJsonp([0],Array(80).concat([
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Frente_Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aulas_n6_aula1_n6_aula1_n6__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n6_aula2_n6_aula2_n6__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n6_aula3_n6_aula3_n6__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n6_aula4_n6_aula4_n6__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n6_aula5_n6_aula5_n6__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n6_aula6_n6_aula6_n6__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n6_aula7_n6_aula7_n6__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n6_aula8_n6_aula8_n6__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n6_aula9_n6_aula9_n6__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n6_aula10_n6_aula10_n6__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n6_aula11_n6_aula11_n6__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n6_aula12_n6_aula12_n6__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Frente_Page = /** @class */ (function () {
    function Frente_Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aulas = [
            { aula: "Aula 01" },
            { aula: "Aula 02" },
            { aula: "Aula 03" },
            { aula: "Aula 04" },
            { aula: "Aula 05" },
            { aula: "Aula 06" },
            { aula: "Aula 07" },
            { aula: "Aula 08" },
            { aula: "Aula 09" },
            { aula: "Aula 10" },
            { aula: "Aula 11" },
            { aula: "Aula 12" },
        ];
    }
    Frente_Page.prototype.ionViewDidLoad = function () {
        console.log('Page frente Nivel 6');
    };
    Frente_Page.prototype.itemSelected = function (aula) {
        console.log(aula.aula);
        switch (aula.aula) {
            case "Aula 01":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aulas_n6_aula1_n6_aula1_n6__["a" /* Nivel6_aula1Page */]);
                break;
            case "Aula 02":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aulas_n6_aula2_n6_aula2_n6__["a" /* Nivel6_aula2Page */]);
                break;
            case "Aula 03":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aulas_n6_aula3_n6_aula3_n6__["a" /* Nivel6_aula3Page */]);
                break;
            case "Aula 04":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aulas_n6_aula4_n6_aula4_n6__["a" /* Nivel6_aula4Page */]);
                break;
            case "Aula 05":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__aulas_n6_aula5_n6_aula5_n6__["a" /* Nivel6_aula5Page */]);
                break;
            case "Aula 06":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__aulas_n6_aula6_n6_aula6_n6__["a" /* Nivel6_aula6Page */]);
                break;
            case "Aula 07":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__aulas_n6_aula7_n6_aula7_n6__["a" /* Nivel6_aula7Page */]);
                break;
            case "Aula 08":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__aulas_n6_aula8_n6_aula8_n6__["a" /* Nivel6_aula8Page */]);
                break;
            case "Aula 09":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__aulas_n6_aula9_n6_aula9_n6__["a" /* Nivel6_aula9Page */]);
                break;
            case "Aula 10":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__aulas_n6_aula10_n6_aula10_n6__["a" /* Nivel6_aula10Page */]);
                break;
            case "Aula 11":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__aulas_n6_aula11_n6_aula11_n6__["a" /* Nivel6_aula11Page */]);
                break;
            case "Aula 12":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__aulas_n6_aula12_n6_aula12_n6__["a" /* Nivel6_aula12Page */]);
                break;
        }
    };
    Frente_Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\frente.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Nível 6</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content class="body" padding>\n\n  <ion-list inset>\n\n    <button class="listLevel" ion-item \n\n      *ngFor="let aula of aulas" \n\n      (click)="itemSelected(aula)">\n\n        {{ aula.aula }}\n\n    </button> \n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\frente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Frente_Page);
    return Frente_Page;
}());

//# sourceMappingURL=frente.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Verso_Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Verso_Page = /** @class */ (function () {
    function Verso_Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinoPadraoVerso = [
            { id: 395, treino: "Forma Siu Lim Tao", valor: localStorage.getItem("395") },
            { id: 396, treino: "Forma Siu Lim Tao perna esquerda", valor: localStorage.getItem("396") },
            { id: 397, treino: "Forma Siu Lim Tao perna direita", valor: localStorage.getItem("397") },
            { id: 398, treino: "Forma Chum Kiu", valor: localStorage.getItem("398") },
            { id: 399, treino: "Forma Pessoal", valor: localStorage.getItem("399") },
            { id: 400, treino: "Forma Biu Jee", valor: localStorage.getItem("400") },
            { id: 401, treino: "Bai Jee Vertical (ambos os lados) - 1min", valor: localStorage.getItem("401") },
            { id: 402, treino: "Bai Jee Horizontal (ambos os lados) - 1min", valor: localStorage.getItem("402") },
            { id: 403, treino: "Bai Jee Circulando (ambos os lados) - 1min", valor: localStorage.getItem("403") },
            { id: 404, treino: "Tai Jee Vertical (ambos os lados) - 1min", valor: localStorage.getItem("404") },
            { id: 405, treino: "Tai Jee Horizontal (ambos os lados) - 1min", valor: localStorage.getItem("405") },
            { id: 406, treino: "Tres Lutas (variar oponentes) - 3min", valor: localStorage.getItem("406") },
        ];
        this.aulasImpares = [
            { id: 407, treino: "Luta com faca - 3min", valor: localStorage.getItem("407") },
            { id: 408, treino: "Intensivo contra Bastão - 3 min", valor: localStorage.getItem("408") },
            { id: 409, treino: "Luta contra varios oponentes - 3min", valor: localStorage.getItem("409") },
            { id: 410, treino: "Chi Sao Vendado - 3min", valor: localStorage.getItem("410") },
            { id: 411, treino: "Chi Gerk - 3min", valor: localStorage.getItem("410") },
        ];
        this.aulasPares = [
            { id: 412, treino: "Intensivo contra Faca - 3min", valor: localStorage.getItem("412") },
            { id: 413, treino: "Intensivo contra Chutes - 3 min", valor: localStorage.getItem("413") },
            { id: 414, treino: "Chi Sao com Faca Vendado - 3min", valor: localStorage.getItem("414") },
            { id: 415, treino: "Escapar do chão - 1x", valor: localStorage.getItem("415") },
            { id: 416, treino: "Fluência indefininda - 3min", valor: localStorage.getItem("416") },
        ];
        this.biuJee = [
            { id: 417, nome: "Biu Jee", recode: localStorage.getItem("417") },
            { id: 418, nome: "Biu Jee", recode: localStorage.getItem("418") },
            { id: 419, nome: "Biu Jee", recode: localStorage.getItem("419") },
            { id: 420, nome: "Biu Jee", recode: localStorage.getItem("420") },
            { id: 421, nome: "Biu Jee", recode: localStorage.getItem("421") },
            { id: 422, nome: "Biu Jee", recode: localStorage.getItem("422") },
            { id: 423, nome: "Biu Jee", recode: localStorage.getItem("423") },
            { id: 424, nome: "Biu Jee", recode: localStorage.getItem("424") },
            { id: 425, nome: "Biu Jee", recode: localStorage.getItem("425") },
            { id: 426, nome: "Biu Jee", recode: localStorage.getItem("426") },
            { id: 427, nome: "Biu Jee", recode: localStorage.getItem("427") },
            { id: 428, nome: "Biu Jee", recode: localStorage.getItem("428") },
        ];
        this.jinKuen = [
            { id: 429, nome: "Jin Kuen", recode: localStorage.getItem("429") },
            { id: 430, nome: "Jin Kuen", recode: localStorage.getItem("430") },
            { id: 431, nome: "Jin Kuen", recode: localStorage.getItem("431") },
            { id: 432, nome: "Jin Kuen", recode: localStorage.getItem("432") },
            { id: 433, nome: "Jin Kuen", recode: localStorage.getItem("433") },
            { id: 434, nome: "Jin Kuen", recode: localStorage.getItem("434") },
            { id: 435, nome: "Jin Kuen", recode: localStorage.getItem("435") },
            { id: 436, nome: "Jin Kuen", recode: localStorage.getItem("436") },
            { id: 437, nome: "Jin Kuen", recode: localStorage.getItem("437") },
            { id: 438, nome: "Jin Kuen", recode: localStorage.getItem("438") },
            { id: 439, nome: "Jin Kuen", recode: localStorage.getItem("439") },
            { id: 440, nome: "Jin Kuen", recode: localStorage.getItem("440") },
        ];
        this.kwaiJang = [
            { id: 441, nome: "Kuai Jang", recode: localStorage.getItem("441") },
            { id: 442, nome: "Kuai Jang", recode: localStorage.getItem("442") },
            { id: 443, nome: "Kuai Jang", recode: localStorage.getItem("443") },
            { id: 444, nome: "Kuai Jang", recode: localStorage.getItem("444") },
            { id: 445, nome: "Kuai Jang", recode: localStorage.getItem("445") },
            { id: 446, nome: "Kuai Jang", recode: localStorage.getItem("446") },
            { id: 447, nome: "Kuai Jang", recode: localStorage.getItem("447") },
            { id: 448, nome: "Kuai Jang", recode: localStorage.getItem("448") },
            { id: 449, nome: "Kuai Jang", recode: localStorage.getItem("449") },
            { id: 450, nome: "Kuai Jang", recode: localStorage.getItem("450") },
            { id: 451, nome: "Kuai Jang", recode: localStorage.getItem("451") },
            { id: 452, nome: "Kuai Jang", recode: localStorage.getItem("452") },
        ];
        this.samBaiFa = [
            { id: 453, nome: "Sam Bai Fa", recode: localStorage.getItem("453") },
            { id: 454, nome: "Sam Bai Fa", recode: localStorage.getItem("454") },
            { id: 455, nome: "Sam Bai Fa", recode: localStorage.getItem("455") },
            { id: 456, nome: "Sam Bai Fa", recode: localStorage.getItem("456") },
            { id: 457, nome: "Sam Bai Fa", recode: localStorage.getItem("457") },
            { id: 458, nome: "Sam Bai Fa", recode: localStorage.getItem("458") },
            { id: 459, nome: "Sam Bai Fa", recode: localStorage.getItem("459") },
            { id: 460, nome: "Sam Bai Fa", recode: localStorage.getItem("460") },
            { id: 461, nome: "Sam Bai Fa", recode: localStorage.getItem("461") },
            { id: 462, nome: "Sam Bai Fa", recode: localStorage.getItem("462") },
            { id: 463, nome: "Sam Bai Fa", recode: localStorage.getItem("463") },
            { id: 464, nome: "Sam Bai Fa", recode: localStorage.getItem("464") },
        ];
    }
    Verso_Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Verso_Page');
    };
    Verso_Page.prototype.addLinha = function (valor) {
        this.linha = valor;
        console.log(this.linha);
    };
    Verso_Page.prototype.addBiuJee = function (valorR) {
        if (this.linha == null) {
            var prompt_1 = this.alertCtrl.create({
                title: 'Remover',
                message: "Escolha uma linha",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                        }
                    }
                ]
            });
            prompt_1.present();
            return;
        }
        else {
            this.biuJee[this.linha].recode = valorR;
            localStorage.setItem(this.biuJee[this.linha].id, this.biuJee[this.linha].recode);
            this.linha = null;
        }
    };
    Verso_Page.prototype.addJinKuen = function (valorR) {
        if (this.linha == null) {
            var prompt_2 = this.alertCtrl.create({
                title: 'Remover',
                message: "Escolha uma linha",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                        }
                    }
                ]
            });
            prompt_2.present();
            return;
        }
        else {
            this.jinKuen[this.linha].recode = valorR;
            localStorage.setItem(this.jinKuen[this.linha].id, this.jinKuen[this.linha].recode);
            this.linha = null;
        }
    };
    Verso_Page.prototype.addKwaiJang = function (valorR) {
        if (this.linha == null) {
            var prompt_3 = this.alertCtrl.create({
                title: 'Remover',
                message: "Escolha uma linha",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                        }
                    }
                ]
            });
            prompt_3.present();
            return;
        }
        else {
            this.kwaiJang[this.linha].recode = valorR;
            localStorage.setItem(this.kwaiJang[this.linha].id, this.kwaiJang[this.linha].recode);
            this.linha = null;
        }
    };
    Verso_Page.prototype.addSamBaiFa = function (valorR) {
        if (this.linha == null) {
            var prompt_4 = this.alertCtrl.create({
                title: 'Remover',
                message: "Escolha uma linha",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                        }
                    }
                ]
            });
            prompt_4.present();
            return;
        }
        else {
            this.samBaiFa[this.linha].recode = valorR;
            localStorage.setItem(this.samBaiFa[this.linha].id, this.samBaiFa[this.linha].recode);
            this.linha = null;
        }
    };
    Verso_Page.prototype.add = function (id) {
        this.treinoPadraoVerso[id - 395].valor++;
        localStorage.setItem(this.treinoPadraoVerso[id - 395].id, this.treinoPadraoVerso[id - 395].valor);
        if (this.treinoPadraoVerso[id - 395].valor === 12) {
            this.toast.create({ message: this.treinoPadraoVerso[id - 395].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Verso_Page.prototype.decrement = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover um treino da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.treinoPadraoVerso[id - 395].valor--;
                        localStorage.setItem(_this.treinoPadraoVerso[id - 395].id, _this.treinoPadraoVerso[id - 395].valor);
                        _this.toast.create({ message: _this.treinoPadraoVerso[id - 395].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Verso_Page.prototype.incrementAulasImpares = function (id) {
        this.aulasImpares[id - 407].valor++;
        localStorage.setItem(this.aulasImpares[id - 407].id, this.aulasImpares[id - 407].valor);
        if (this.aulasImpares[id - 407].valor === 6) {
            this.toast.create({ message: this.aulasImpares[id - 407].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Verso_Page.prototype.decrementAulasImpares = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover um treino da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.aulasImpares[id - 407].valor--;
                        localStorage.setItem(_this.aulasImpares[id - 407].id, _this.aulasImpares[id - 407].valor);
                        _this.toast.create({ message: _this.aulasImpares[id - 407].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Verso_Page.prototype.incrementAulasPares = function (id) {
        this.aulasPares[id - 412].valor++;
        localStorage.setItem(this.aulasPares[id - 412].id, this.aulasPares[id - 412].valor);
        if (this.aulasPares[id - 412].valor === 6) {
            this.toast.create({ message: this.aulasPares[id - 412].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Verso_Page.prototype.decrementAulasPares = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover um treino da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.aulasPares[id - 412].valor--;
                        localStorage.setItem(_this.aulasPares[id - 412].id, _this.aulasPares[id - 412].valor);
                        _this.toast.create({ message: _this.aulasPares[id - 412].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Verso_Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verso',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\verso\verso.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom>\n\n        <ion-title>\n\n            Nível 6\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar no-border-top>\n\n        <ion-segment [(ngModel)]="versoFolha">\n\n            <ion-segment-button value="formas">\n\n                Formas\n\n            </ion-segment-button>\n\n            <ion-segment-button value="foco">\n\n                Foco\n\n            </ion-segment-button>\n\n            <ion-segment-button value="fluencias">\n\n                Fluências\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="body">\n\n    <div [ngSwitch]="versoFolha">\n\n        <ion-list *ngSwitchCase="\'formas\'">\n\n            <ion-item class="conteudo-form">\n\n                <ion-card class="list" *ngFor="let padrao of treinoPadraoVerso">\n\n\n\n                    <ion-card-content [ngClass]="padrao.valor>11 ?\'checkmark\':\'\'">\n\n                        <ion-icon [name]="padrao.valor>11 ?\'checkmark\':\'\'"></ion-icon>\n\n                        <label id="treinos" for="{{padrao.id}}">\n\n                            <strong> {{ padrao.treino }} </strong>\n\n                        </label>\n\n                        <br>\n\n\n\n                        <label>\n\n                            <button ion-button color="danger" (click)="decrement(padrao.id)" [disabled]="padrao.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                            <button ion-button color="secondary" (click)="add(padrao.id)"> + </button>\n\n                            <label id="contador">{{ padrao.valor }}/12</label>\n\n                        </label>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n\n\n            </ion-item>\n\n\n\n\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'foco\'">\n\n\n\n            <ion-item>\n\n                <ion-label floating>Quantidade de acertos consecutivos</ion-label>\n\n                <ion-input type="number" value="" #valorR></ion-input>\n\n            </ion-item>\n\n            <ion-item col-12 class="conteudo-form">\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col class="lineHeader">\n\n                            <strong>Selecine uma Linha</strong>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row class="lineBody">\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(0)"> 01 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(1)"> 02 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(2)"> 03 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(3)"> 04 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(4)"> 05 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(5)"> 06 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(6)"> 07 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(7)"> 08 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(8)"> 09 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(9)"> 10 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(10)"> 11 </button>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <button ion-button small color="dark" (click)="addLinha(11)"> 12 </button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n\n\n                <ion-grid>\n\n                    <ion-row class="lineHeader">\n\n                        <ion-col>\n\n                            <strong>Selecine uma Coluna</strong>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row class="lineBody">\n\n                        <ion-col>\n\n                            <button class="botao" ion-button color="dark" (click)="addBiuJee(valorR.value)">Biu Jee</button>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <button class="botao" ion-button color="dark" (click)="addJinKuen(valorR.value)">Jin kuen</button>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <button class="botao" ion-button color="dark" (click)="addKwaiJang(valorR.value)">Kwai Jang</button>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <button class="botao" ion-button color="dark" (click)="addSamBaiFa(valorR.value)">Sam Bai Fa</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col class="lineHeader">\n\n                            <strong>Treino de Foco das Seguintes técnicas:</strong>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col class="lineBody">\n\n                            <strong>Biu Jee</strong>\n\n                        </ion-col>\n\n                        <ion-col class="lineBody">\n\n                            <strong>Jin kuen</strong>\n\n                        </ion-col>\n\n                        <ion-col class="lineBody">\n\n                            <strong>Kwai Jang</strong>\n\n                        </ion-col>\n\n                        <ion-col class="lineBody">\n\n                            <strong>Sam Bai Fa</strong>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <div>\n\n                        <ion-row>\n\n                            <ion-col class="lineHeader">\n\n                                <ion-row class="lineBodyTable" *ngFor="let biu of biuJee">\n\n                                    {{ biu.recode }}\n\n                                </ion-row>\n\n                            </ion-col>\n\n                            <ion-col class="lineHeader">\n\n                                <ion-row class="lineBodyTable" *ngFor="let jin of jinKuen">\n\n                                    {{ jin.recode }}\n\n                                </ion-row>\n\n                            </ion-col>\n\n                            <ion-col class="lineHeader">\n\n                                <ion-row class="lineBodyTable" *ngFor="let kwai of kwaiJang">\n\n                                    {{ kwai.recode }}\n\n                                </ion-row>\n\n                            </ion-col>\n\n                            <ion-col class="lineHeader">\n\n                                <ion-row class="lineBodyTable" *ngFor="let sam of samBaiFa">\n\n                                    {{ sam.recode }}\n\n                                </ion-row>\n\n                            </ion-col>\n\n                        </ion-row>\n\n\n\n                    </div>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list  *ngSwitchCase="\'fluencias\'">\n\n\n\n            <ion-item class="conteudo-2">\n\n                <ion-card class="conteudo">\n\n                    <ion-card-header>\n\n                        Nas Aulas Ímpares\n\n                    </ion-card-header>\n\n                    <ion-card class="list" *ngFor="let impar of aulasImpares">\n\n\n\n                        <ion-card-content [ngClass]="impar.valor>5 ?\'checkmark\':\'\'">\n\n                            <ion-icon [name]="impar.valor>5 ?\'checkmark\':\'\'"></ion-icon>\n\n                            <label id="treinos" for="{{impar.treino}}">\n\n                                <strong> {{ impar.treino }} </strong>\n\n                            </label>\n\n                            <br>\n\n\n\n                            <label>\n\n                                <button ion-button color="danger" (click)="decrementAulasImpares(impar.id)" [disabled]="impar.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                                <button ion-button color="secondary" (click)="incrementAulasImpares(impar.id)"> + </button>\n\n                                <label id="contador">{{ impar.valor }}/6</label>\n\n                            </label>\n\n                        </ion-card-content>\n\n                    </ion-card>\n\n                </ion-card>\n\n\n\n                <ion-card class="conteudo">\n\n                    <ion-card-header>\n\n                        Nas Aulas Pares\n\n                    </ion-card-header>\n\n                    <ion-card class="list" *ngFor="let par of aulasPares">\n\n                        <ion-card-content [ngClass]="par.valor>5 ?\'checkmark\':\'\'">\n\n                            <ion-icon [name]="par.valor>5 ?\'checkmark\':\'\'"></ion-icon>\n\n                            <label id="treinos" for="{{par.treino}}">\n\n                                <strong> {{ par.treino }} </strong>\n\n                            </label>\n\n                            <br>\n\n\n\n                            <label>\n\n                                <button ion-button color="danger" (click)="decrementAulasPares(par.id)" [disabled]="par.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                                <button ion-button color="secondary" (click)="incrementAulasPares(par.id)"> + </button>\n\n                                <label id="contador">{{ par.valor }}/6</label>\n\n                            </label>\n\n                        </ion-card-content>\n\n                    </ion-card>\n\n                </ion-card>\n\n\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\verso\verso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Verso_Page);
    return Verso_Page;
}());

//# sourceMappingURL=verso.js.map

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/nivel-1/aulas-n1/aula1-n1/aula1-n1.module": [
		168
	],
	"../pages/nivel-1/aulas-n1/aula10-n1/aula10-n1.module": [
		154
	],
	"../pages/nivel-1/aulas-n1/aula11-n1/aula11-n1.module": [
		185
	],
	"../pages/nivel-1/aulas-n1/aula12-n1/aula12-n1.module": [
		156
	],
	"../pages/nivel-1/aulas-n1/aula2-n1/aula2-n1.module": [
		160
	],
	"../pages/nivel-1/aulas-n1/aula3-n1/aula3-n1.module": [
		158
	],
	"../pages/nivel-1/aulas-n1/aula4-n1/aula4-n1.module": [
		162
	],
	"../pages/nivel-1/aulas-n1/aula5-n1/aula5-n1.module": [
		164
	],
	"../pages/nivel-1/aulas-n1/aula6-n1/aula6-n1.module": [
		166
	],
	"../pages/nivel-1/aulas-n1/aula7-n1/aula7-n1.module": [
		174
	],
	"../pages/nivel-1/aulas-n1/aula8-n1/aula8-n1.module": [
		172
	],
	"../pages/nivel-1/aulas-n1/aula9-n1/aula9-n1.module": [
		170
	],
	"../pages/nivel-1/nivel-1.module": [
		182
	],
	"../pages/nivel-2/aulas-n2/aula1-n2/aula1-n2.module": [
		176
	],
	"../pages/nivel-2/aulas-n2/aula10-n2/aula10-n2.module": [
		180
	],
	"../pages/nivel-2/aulas-n2/aula11-n2/aula11-n2.module": [
		178
	],
	"../pages/nivel-2/aulas-n2/aula12-n2/aula12-n2.module": [
		192
	],
	"../pages/nivel-2/aulas-n2/aula2-n2/aula2-n2.module": [
		194
	],
	"../pages/nivel-2/aulas-n2/aula3-n2/aula3-n2.module": [
		186
	],
	"../pages/nivel-2/aulas-n2/aula4-n2/aula4-n2.module": [
		188
	],
	"../pages/nivel-2/aulas-n2/aula5-n2/aula5-n2.module": [
		190
	],
	"../pages/nivel-2/aulas-n2/aula6-n2/aula6-n2.module": [
		196
	],
	"../pages/nivel-2/aulas-n2/aula7-n2/aula7-n2.module": [
		200
	],
	"../pages/nivel-2/aulas-n2/aula8-n2/aula8-n2.module": [
		198
	],
	"../pages/nivel-2/aulas-n2/aula9-n2/aula9-n2.module": [
		208
	],
	"../pages/nivel-2/nivel-2.module": [
		326
	],
	"../pages/nivel-3/aulas-n3/aula1-n3/aula1-n3.module": [
		212
	],
	"../pages/nivel-3/aulas-n3/aula10-n3/aula10-n3.module": [
		202
	],
	"../pages/nivel-3/aulas-n3/aula11-n3/aula11-n3.module": [
		204
	],
	"../pages/nivel-3/aulas-n3/aula12-n3/aula12-n3.module": [
		206
	],
	"../pages/nivel-3/aulas-n3/aula2-n3/aula2-n3.module": [
		226
	],
	"../pages/nivel-3/aulas-n3/aula3-n3/aula3-n3.module": [
		210
	],
	"../pages/nivel-3/aulas-n3/aula4-n3/aula4-n3.module": [
		214
	],
	"../pages/nivel-3/aulas-n3/aula5-n3/aula5-n3.module": [
		224
	],
	"../pages/nivel-3/aulas-n3/aula6-n3/aula6-n3.module": [
		218
	],
	"../pages/nivel-3/aulas-n3/aula7-n3/aula7-n3.module": [
		216
	],
	"../pages/nivel-3/aulas-n3/aula8-n3/aula8-n3.module": [
		220
	],
	"../pages/nivel-3/aulas-n3/aula9-n3/aula9-n3.module": [
		222
	],
	"../pages/nivel-3/nivel-3.module": [
		228
	],
	"../pages/nivel-4/aulas-n4/aula1-n4/aula1-n4.module": [
		230
	],
	"../pages/nivel-4/aulas-n4/aula10-n4/aula10-n4.module": [
		234
	],
	"../pages/nivel-4/aulas-n4/aula11-n4/aula11-n4.module": [
		232
	],
	"../pages/nivel-4/aulas-n4/aula12-n4/aula12-n4.module": [
		244
	],
	"../pages/nivel-4/aulas-n4/aula2-n4/aula2-n4.module": [
		236
	],
	"../pages/nivel-4/aulas-n4/aula3-n4/aula3-n4.module": [
		238
	],
	"../pages/nivel-4/aulas-n4/aula4-n4/aula4-n4.module": [
		240
	],
	"../pages/nivel-4/aulas-n4/aula5-n4/aula5-n4.module": [
		242
	],
	"../pages/nivel-4/aulas-n4/aula6-n4/aula6-n4.module": [
		248
	],
	"../pages/nivel-4/aulas-n4/aula7-n4/aula7-n4.module": [
		246
	],
	"../pages/nivel-4/aulas-n4/aula8-n4/aula8-n4.module": [
		252
	],
	"../pages/nivel-4/aulas-n4/aula9-n4/aula9-n4.module": [
		250
	],
	"../pages/nivel-4/nivel-4.module": [
		254
	],
	"../pages/nivel-5/nivel-5.module": [
		268
	],
	"../pages/nivel-6/frente/aulas-n6/aula1-n6/aula1-n6.module": [
		260
	],
	"../pages/nivel-6/frente/aulas-n6/aula10-n6/aula10-n6.module": [
		256
	],
	"../pages/nivel-6/frente/aulas-n6/aula11-n6/aula11-n6.module": [
		258
	],
	"../pages/nivel-6/frente/aulas-n6/aula12-n6/aula12-n6.module": [
		266
	],
	"../pages/nivel-6/frente/aulas-n6/aula2-n6/aula2-n6.module": [
		262
	],
	"../pages/nivel-6/frente/aulas-n6/aula3-n6/aula3-n6.module": [
		264
	],
	"../pages/nivel-6/frente/aulas-n6/aula4-n6/aula4-n6.module": [
		270
	],
	"../pages/nivel-6/frente/aulas-n6/aula5-n6/aula5-n6.module": [
		280
	],
	"../pages/nivel-6/frente/aulas-n6/aula6-n6/aula6-n6.module": [
		272
	],
	"../pages/nivel-6/frente/aulas-n6/aula7-n6/aula7-n6.module": [
		274
	],
	"../pages/nivel-6/frente/aulas-n6/aula8-n6/aula8-n6.module": [
		276
	],
	"../pages/nivel-6/frente/aulas-n6/aula9-n6/aula9-n6.module": [
		278
	],
	"../pages/nivel-6/frente/frente.module": [
		288
	],
	"../pages/nivel-6/nivel-6.module": [
		282
	],
	"../pages/nivel-6/verso/verso.module": [
		287
	],
	"../pages/nivel-7/frente/aulas-n7/aula1-n7/aula1-n7.module": [
		289
	],
	"../pages/nivel-7/frente/aulas-n7/aula10-n7/aula10-n7.module": [
		291
	],
	"../pages/nivel-7/frente/aulas-n7/aula11-n7/aula11-n7.module": [
		295
	],
	"../pages/nivel-7/frente/aulas-n7/aula12-n7/aula12-n7.module": [
		293
	],
	"../pages/nivel-7/frente/aulas-n7/aula2-n7/aula2-n7.module": [
		301
	],
	"../pages/nivel-7/frente/aulas-n7/aula3-n7/aula3-n7.module": [
		297
	],
	"../pages/nivel-7/frente/aulas-n7/aula4-n7/aula4-n7.module": [
		299
	],
	"../pages/nivel-7/frente/aulas-n7/aula5-n7/aula5-n7.module": [
		303
	],
	"../pages/nivel-7/frente/aulas-n7/aula6-n7/aula6-n7.module": [
		307
	],
	"../pages/nivel-7/frente/aulas-n7/aula7-n7/aula7-n7.module": [
		313
	],
	"../pages/nivel-7/frente/aulas-n7/aula8-n7/aula8-n7.module": [
		305
	],
	"../pages/nivel-7/frente/aulas-n7/aula9-n7/aula9-n7.module": [
		314
	],
	"../pages/nivel-7/frente/frente-n7.module": [
		309
	],
	"../pages/nivel-7/nivel-7.module": [
		315
	],
	"../pages/nivel-7/verso/verso-n7.module": [
		319
	],
	"../pages/nivel-8/fase-1/fase-1.module": [
		320
	],
	"../pages/nivel-8/fase-2/fase-2.module": [
		324
	],
	"../pages/nivel-8/fase-3/fase-3.module": [
		322
	],
	"../pages/nivel-8/nivel-8.module": [
		328
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula10PageModule", function() { return Nivel1_aula10PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula10_n1__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula10PageModule = /** @class */ (function () {
    function Nivel1_aula10PageModule() {
    }
    Nivel1_aula10PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula10_n1__["a" /* Nivel1_aula10Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula10_n1__["a" /* Nivel1_aula10Page */]),
            ],
        })
    ], Nivel1_aula10PageModule);
    return Nivel1_aula10PageModule;
}());

//# sourceMappingURL=aula10-n1.module.js.map

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula10Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula10Page = /** @class */ (function () {
    function Nivel1_aula10Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 56, treino: "Revisão de todos os Pontos e Treinos - 1x10", class: localStorage.getItem("56") },
            { id: 57, treino: "Luta de um toque até o final da aula", class: localStorage.getItem("57") },
            { id: 58, treino: "Luta", class: localStorage.getItem("58") },
        ];
    }
    Nivel1_aula10Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula10Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 56].class !== "checkmark") {
            this.treinosList[id - 56].class = "checkmark";
            this.checado = this.treinosList[id - 56].class;
            localStorage.setItem(this.treinosList[id - 56].id, this.treinosList[id - 56].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 56].class = "";
            localStorage.setItem(this.treinosList[id - 56].id, this.treinosList[id - 56].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula10Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula10-n1\aula10-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 10</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula10-n1\aula10-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula10Page);
    return Nivel1_aula10Page;
}());

//# sourceMappingURL=aula10-n1.js.map

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula12PageModule", function() { return Nivel1_aula12PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula12_n1__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula12PageModule = /** @class */ (function () {
    function Nivel1_aula12PageModule() {
    }
    Nivel1_aula12PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula12_n1__["a" /* Nivel1_aula12Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula12_n1__["a" /* Nivel1_aula12Page */]),
            ],
        })
    ], Nivel1_aula12PageModule);
    return Nivel1_aula12PageModule;
}());

//# sourceMappingURL=aula12-n1.module.js.map

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula12Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula12Page = /** @class */ (function () {
    function Nivel1_aula12Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 61, treino: "Luta de um toque ate o final da aula", class: localStorage.getItem("61") },
            { id: 62, treino: "Luta", class: localStorage.getItem("62") },
            { id: 63, treino: "Ao chegar aqui, solicitar avaliação ao seu instrutor", class: localStorage.getItem("63") },
        ];
    }
    Nivel1_aula12Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula12Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 61].class !== "checkmark") {
            this.treinosList[id - 61].class = "checkmark";
            this.checado = this.treinosList[id - 61].class;
            localStorage.setItem(this.treinosList[id - 61].id, this.treinosList[id - 61].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 61].class = "";
            localStorage.setItem(this.treinosList[id - 61].id, this.treinosList[id - 61].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula12Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula12-n1\aula12-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 12</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula12-n1\aula12-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula12Page);
    return Nivel1_aula12Page;
}());

//# sourceMappingURL=aula12-n1.js.map

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula3PageModule", function() { return Nivel1_aula3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula3_n1__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula3PageModule = /** @class */ (function () {
    function Nivel1_aula3PageModule() {
    }
    Nivel1_aula3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula3_n1__["a" /* Nivel1_aula3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula3_n1__["a" /* Nivel1_aula3Page */]),
            ],
        })
    ], Nivel1_aula3PageModule);
    return Nivel1_aula3PageModule;
}());

//# sourceMappingURL=aula3-n1.module.js.map

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula3Page = /** @class */ (function () {
    function Nivel1_aula3Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 14, treino: "Forma Siu Lim Tao", class: localStorage.getItem("14") },
            { id: 15, treino: "Ponto Tan Da - 4x10", class: localStorage.getItem("15") },
            { id: 16, treino: "Treino Tan Da - 4x10", class: localStorage.getItem("16") },
            { id: 17, treino: "Ponto Fok Da - 4x10", class: localStorage.getItem("17") },
            { id: 18, treino: "Treino Fok Da, palma baixa - 4x10", class: localStorage.getItem("18") },
            { id: 19, treino: "Treino Tan contra soco alto, Fok contra soco baixo - 4x10", class: localStorage.getItem("19") },
            { id: 20, treino: "Wu Da com passo (triangulando) - 4x10", class: localStorage.getItem("20") },
            { id: 21, treino: "Revisão N1 A1 - 2x10", class: localStorage.getItem("21") },
            { id: 22, treino: "Revisão N1 A2 - 3x10", class: localStorage.getItem("22") },
            { id: 23, treino: "Luta", class: localStorage.getItem("23") },
        ];
    }
    Nivel1_aula3Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula3Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 14].class !== "checkmark") {
            this.treinosList[id - 14].class = "checkmark";
            this.checado = this.treinosList[id - 14].class;
            localStorage.setItem(this.treinosList[id - 14].id, this.treinosList[id - 14].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 14].class = "";
            localStorage.setItem(this.treinosList[id - 14].id, this.treinosList[id - 14].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula3-n1\aula3-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 3</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula3-n1\aula3-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula3Page);
    return Nivel1_aula3Page;
}());

//# sourceMappingURL=aula3-n1.js.map

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula2PageModule", function() { return Nivel1_aula2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula2_n1__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula2PageModule = /** @class */ (function () {
    function Nivel1_aula2PageModule() {
    }
    Nivel1_aula2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula2_n1__["a" /* Nivel1_aula2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula2_n1__["a" /* Nivel1_aula2Page */]),
            ],
        })
    ], Nivel1_aula2PageModule);
    return Nivel1_aula2PageModule;
}());

//# sourceMappingURL=aula2-n1.module.js.map

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula2Page = /** @class */ (function () {
    function Nivel1_aula2Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 6, treino: "Forma Siu Lim Tao", class: localStorage.getItem("6") },
            { id: 7, treino: "Ponto Relaxa, Ergue, Recolhe - 4x10", class: localStorage.getItem("7") },
            { id: 8, treino: "Ponto Soco, Recolhe - 4x10", class: localStorage.getItem("8") },
            { id: 9, treino: "Ponto Soca de um lado, recolhe do outro - 4x10", class: localStorage.getItem("9") },
            { id: 10, treino: "Ponto Soco, Tan, Huen, Recolhe - 4x10", class: localStorage.getItem("10") },
            { id: 11, treino: "Treino Huen Sao - 4x10", class: localStorage.getItem("11") },
            { id: 12, treino: "Revisão N1 A1 - 3x10", class: localStorage.getItem("12") },
            { id: 13, treino: "Luta", class: localStorage.getItem("13") },
        ];
    }
    Nivel1_aula2Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula2Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 6].class !== "checkmark") {
            this.treinosList[id - 6].class = "checkmark";
            this.checado = this.treinosList[id - 6].class;
            localStorage.setItem(this.treinosList[id - 6].id, this.treinosList[id - 6].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 6].class = "";
            localStorage.setItem(this.treinosList[id - 6].id, this.treinosList[id - 6].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula2-n1\aula2-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 2</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula2-n1\aula2-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula2Page);
    return Nivel1_aula2Page;
}());

//# sourceMappingURL=aula2-n1.js.map

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula4PageModule", function() { return Nivel1_aula4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula4_n1__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula4PageModule = /** @class */ (function () {
    function Nivel1_aula4PageModule() {
    }
    Nivel1_aula4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula4_n1__["a" /* Nivel1_aula4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula4_n1__["a" /* Nivel1_aula4Page */]),
            ],
        })
    ], Nivel1_aula4PageModule);
    return Nivel1_aula4PageModule;
}());

//# sourceMappingURL=aula4-n1.module.js.map

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula4Page = /** @class */ (function () {
    function Nivel1_aula4Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 24, treino: "Forma Siu Lim Tao", class: localStorage.getItem("24") },
            { id: 25, treino: "Ponto Pak Curto - 4x10", class: localStorage.getItem("25") },
            { id: 26, treino: "Ponto Pak Longo - 4x10", class: localStorage.getItem("26") },
            { id: 27, treino: "Treino Ciclo de Pak Sao - 4x10", class: localStorage.getItem("27") },
            { id: 28, treino: "Treino Pak Sao adiantado - 4x10", class: localStorage.getItem("28") },
            { id: 29, treino: "Ponto Pak, Tan Da - 4x10", class: localStorage.getItem("29") },
            { id: 30, treino: "Treino Pak, Tan Da - 4x10", class: localStorage.getItem("30") },
            { id: 31, treino: "Treino Pak Da com braço colado - 4x10", class: localStorage.getItem("31") },
            { id: 32, treino: "Revisão N1 A1 - 1x10", class: localStorage.getItem("32") },
            { id: 33, treino: "Revisão N1 A2 - 2x10", class: localStorage.getItem("33") },
            { id: 34, treino: "Revisão N1 A3 - 3x10", class: localStorage.getItem("34") },
            { id: 35, treino: "Luta", class: localStorage.getItem("35") },
        ];
    }
    Nivel1_aula4Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula4Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 24].class !== "checkmark") {
            this.treinosList[id - 24].class = "checkmark";
            this.checado = this.treinosList[id - 24].class;
            localStorage.setItem(this.treinosList[id - 24].id, this.treinosList[id - 24].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 24].class = "";
            localStorage.setItem(this.treinosList[id - 24].id, this.treinosList[id - 24].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula4-n1\aula4-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 4</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula4-n1\aula4-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula4Page);
    return Nivel1_aula4Page;
}());

//# sourceMappingURL=aula4-n1.js.map

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula5PageModule", function() { return Nivel1_aula5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula5_n1__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula5PageModule = /** @class */ (function () {
    function Nivel1_aula5PageModule() {
    }
    Nivel1_aula5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula5_n1__["a" /* Nivel1_aula5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula5_n1__["a" /* Nivel1_aula5Page */]),
            ],
        })
    ], Nivel1_aula5PageModule);
    return Nivel1_aula5PageModule;
}());

//# sourceMappingURL=aula5-n1.module.js.map

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula5Page = /** @class */ (function () {
    function Nivel1_aula5Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 36, treino: "Forma Siu Lim Tao", class: localStorage.getItem("36") },
            { id: 37, treino: "Revisão N1 A1 - 2x10", class: localStorage.getItem("37") },
            { id: 38, treino: "Revisão N1 A2 - 2x10", class: localStorage.getItem("38") },
            { id: 39, treino: "Revisão N1 A3 - 2x10", class: localStorage.getItem("39") },
            { id: 40, treino: "Revisão N1 A4 - 2x10", class: localStorage.getItem("40") },
            { id: 41, treino: "Luta", class: localStorage.getItem("41") },
        ];
    }
    Nivel1_aula5Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula5Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 36].class !== "checkmark") {
            this.treinosList[id - 36].class = "checkmark";
            this.checado = this.treinosList[id - 36].class;
            localStorage.setItem(this.treinosList[id - 36].id, this.treinosList[id - 36].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 36].class = "";
            localStorage.setItem(this.treinosList[id - 36].id, this.treinosList[id - 36].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula5-n1\aula5-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 5</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula5-n1\aula5-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula5Page);
    return Nivel1_aula5Page;
}());

//# sourceMappingURL=aula5-n1.js.map

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula6PageModule", function() { return Nivel1_aula6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula6_n1__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula6PageModule = /** @class */ (function () {
    function Nivel1_aula6PageModule() {
    }
    Nivel1_aula6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula6_n1__["a" /* Nivel1_aula6Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula6_n1__["a" /* Nivel1_aula6Page */]),
            ],
        })
    ], Nivel1_aula6PageModule);
    return Nivel1_aula6PageModule;
}());

//# sourceMappingURL=aula6-n1.module.js.map

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula6Page = /** @class */ (function () {
    function Nivel1_aula6Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 42, treino: "Forma Siu Lim Tao", class: localStorage.getItem("42") },
            { id: 43, treino: "Ponto Passo, dois socos - 4x10", class: localStorage.getItem("43") },
            { id: 44, treino: "Pak Longo avançando, Tan Da triangulando - 4x10", class: localStorage.getItem("44") },
            { id: 45, treino: "Revisão N1 A5 - 1x10", class: localStorage.getItem("45") },
            { id: 46, treino: "Luta", class: localStorage.getItem("46") },
        ];
    }
    Nivel1_aula6Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula6Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 42].class !== "checkmark") {
            this.treinosList[id - 42].class = "checkmark";
            this.checado = this.treinosList[id - 42].class;
            localStorage.setItem(this.treinosList[id - 42].id, this.treinosList[id - 42].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 42].class = "";
            localStorage.setItem(this.treinosList[id - 42].id, this.treinosList[id - 42].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula6-n1\aula6-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 6</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula6-n1\aula6-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula6Page);
    return Nivel1_aula6Page;
}());

//# sourceMappingURL=aula6-n1.js.map

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula1PageModule", function() { return Nivel1_aula1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula1_n1__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula1PageModule = /** @class */ (function () {
    function Nivel1_aula1PageModule() {
    }
    Nivel1_aula1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula1_n1__["a" /* Nivel1_aula1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula1_n1__["a" /* Nivel1_aula1Page */]),
            ],
        })
    ], Nivel1_aula1PageModule);
    return Nivel1_aula1PageModule;
}());

//# sourceMappingURL=aula1-n1.module.js.map

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula1Page = /** @class */ (function () {
    function Nivel1_aula1Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 1, treino: "Forma Siu Lim Tao", class: localStorage.getItem("1") },
            { id: 2, treino: "Treino Erguer Antebraço por fora - 4x10", class: localStorage.getItem("2") },
            { id: 3, treino: "Treino Erguer Antebraço por dentro - 4x10", class: localStorage.getItem("3") },
            { id: 4, treino: "Treino Controle de cotovelo - 4x10", class: localStorage.getItem("4") },
            { id: 5, treino: "Luta", class: localStorage.getItem("5") },
        ];
    }
    Nivel1_aula1Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula1Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 1].class !== "checkmark") {
            this.treinosList[id - 1].class = "checkmark";
            this.checado = this.treinosList[id - 1].class;
            localStorage.setItem(this.treinosList[id - 1].id, this.treinosList[id - 1].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 1].class = "";
            localStorage.setItem(this.treinosList[id - 1].id, this.treinosList[id - 1].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula1-n1\aula1-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 1</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content  [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula1-n1\aula1-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula1Page);
    return Nivel1_aula1Page;
}());

//# sourceMappingURL=aula1-n1.js.map

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula9PageModule", function() { return Nivel1_aula9PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula9_n1__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula9PageModule = /** @class */ (function () {
    function Nivel1_aula9PageModule() {
    }
    Nivel1_aula9PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula9_n1__["a" /* Nivel1_aula9Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula9_n1__["a" /* Nivel1_aula9Page */]),
            ],
        })
    ], Nivel1_aula9PageModule);
    return Nivel1_aula9PageModule;
}());

//# sourceMappingURL=aula9-n1.module.js.map

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula9Page = /** @class */ (function () {
    function Nivel1_aula9Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 53, treino: "Revisão N1 A7", class: localStorage.getItem("53") },
            { id: 54, treino: "Luta de um toque até o final da aula", class: localStorage.getItem("54") },
            { id: 55, treino: "Luta", class: localStorage.getItem("55") },
        ];
    }
    Nivel1_aula9Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula9Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 53].class !== "checkmark") {
            this.treinosList[id - 53].class = "checkmark";
            this.checado = this.treinosList[id - 53].class;
            localStorage.setItem(this.treinosList[id - 53].id, this.treinosList[id - 53].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 53].class = "";
            localStorage.setItem(this.treinosList[id - 53].id, this.treinosList[id - 53].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula9Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula9-n1\aula9-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 9</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula9-n1\aula9-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula9Page);
    return Nivel1_aula9Page;
}());

//# sourceMappingURL=aula9-n1.js.map

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula8PageModule", function() { return Nivel1_aula8PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula8_n1__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula8PageModule = /** @class */ (function () {
    function Nivel1_aula8PageModule() {
    }
    Nivel1_aula8PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula8_n1__["a" /* Nivel1_aula8Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula8_n1__["a" /* Nivel1_aula8Page */]),
            ],
        })
    ], Nivel1_aula8PageModule);
    return Nivel1_aula8PageModule;
}());

//# sourceMappingURL=aula8-n1.module.js.map

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula8Page = /** @class */ (function () {
    function Nivel1_aula8Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 51, treino: "Revisão N1A7", class: localStorage.getItem("51") },
            { id: 52, treino: "Luta", class: localStorage.getItem("52") },
        ];
    }
    Nivel1_aula8Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula8Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 51].class !== "checkmark") {
            this.treinosList[id - 51].class = "checkmark";
            this.checado = this.treinosList[id - 51].class;
            localStorage.setItem(this.treinosList[id - 51].id, this.treinosList[id - 51].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 51].class = "";
            localStorage.setItem(this.treinosList[id - 51].id, this.treinosList[id - 51].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula8-n1\aula8-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 8</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula8-n1\aula8-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula8Page);
    return Nivel1_aula8Page;
}());

//# sourceMappingURL=aula8-n1.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula7PageModule", function() { return Nivel1_aula7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula7_n1__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula7PageModule = /** @class */ (function () {
    function Nivel1_aula7PageModule() {
    }
    Nivel1_aula7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula7_n1__["a" /* Nivel1_aula7Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula7_n1__["a" /* Nivel1_aula7Page */]),
            ],
        })
    ], Nivel1_aula7PageModule);
    return Nivel1_aula7PageModule;
}());

//# sourceMappingURL=aula7-n1.module.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula7Page = /** @class */ (function () {
    function Nivel1_aula7Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 47, treino: "Forma Siu Lim Tao", class: localStorage.getItem("47") },
            { id: 48, treino: "Revisão de todos os Pontos - 2x20", class: localStorage.getItem("48") },
            { id: 49, treino: "Revisão de todos os Treinos - 2x20", class: localStorage.getItem("49") },
            { id: 50, treino: "Luta", class: localStorage.getItem("50") },
        ];
    }
    Nivel1_aula7Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula7Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 47].class !== "checkmark") {
            this.treinosList[id - 47].class = "checkmark";
            this.checado = this.treinosList[id - 47].class;
            localStorage.setItem(this.treinosList[id - 47].id, this.treinosList[id - 47].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 47].class = "";
            localStorage.setItem(this.treinosList[id - 47].id, this.treinosList[id - 47].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula7-n1\aula7-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 7</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula7-n1\aula7-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula7Page);
    return Nivel1_aula7Page;
}());

//# sourceMappingURL=aula7-n1.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula1PageModule", function() { return Nivel2_aula1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula1_n2__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula1PageModule = /** @class */ (function () {
    function Nivel2_aula1PageModule() {
    }
    Nivel2_aula1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula1_n2__["a" /* Nivel2_aula1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula1_n2__["a" /* Nivel2_aula1Page */]),
            ],
        })
    ], Nivel2_aula1PageModule);
    return Nivel2_aula1PageModule;
}());

//# sourceMappingURL=aula1-n2.module.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula1Page = /** @class */ (function () {
    function Nivel2_aula1Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 64, treino: "Forma Siu Lim Tao", class: localStorage.getItem("64") },
            { id: 65, treino: "Ponto Guan Da - 4x10", class: localStorage.getItem("65") },
            { id: 66, treino: "Treino Tan Da/Guan Da por dentro - 4x10", class: localStorage.getItem("66") },
            { id: 67, treino: "Treino Tan Da/Guan Da por fora - 4x10", class: localStorage.getItem("67") },
            { id: 68, treino: "Treino Guan Sao contra chute lateral por dentro - 2x10", class: localStorage.getItem("68") },
            { id: 69, treino: "Treino Guan Sao contra chute lateral por fora - 2x10", class: localStorage.getItem("69") },
            { id: 70, treino: "Ponto Jut Sao", class: localStorage.getItem("70") },
            { id: 71, treino: "Revisão N1 Completo - 1x10", class: localStorage.getItem("71") },
            { id: 72, treino: "Luta de um toque até o final da aula - 4x10", class: localStorage.getItem("72") },
        ];
        this.lutas = [
            { id: 73, treino: "Lutas", valor: localStorage.getItem("73") }
        ];
    }
    Nivel2_aula1Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula1Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 64].class !== "checkmark") {
            this.treinosList[id - 64].class = "checkmark";
            this.checado = this.treinosList[id - 64].class;
            localStorage.setItem(this.treinosList[id - 64].id, this.treinosList[id - 64].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 64].class = "";
            localStorage.setItem(this.treinosList[id - 64].id, this.treinosList[id - 64].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula1Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 73].valor++;
        localStorage.setItem(this.lutas[id - 73].id, this.lutas[id - 73].valor);
        if (this.lutas[id - 73].valor === 2) {
            this.toast.create({ message: this.lutas[id - 73].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula1Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 73].valor--;
                        localStorage.setItem(_this.lutas[id - 73].id, _this.lutas[id - 73].valor);
                        _this.toast.create({ message: _this.lutas[id - 73].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula1-n2\aula1-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 1</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula1-n2\aula1-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula1Page);
    return Nivel2_aula1Page;
}());

//# sourceMappingURL=aula1-n2.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula11PageModule", function() { return Nivel2_aula11PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula11_n2__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula11PageModule = /** @class */ (function () {
    function Nivel2_aula11PageModule() {
    }
    Nivel2_aula11PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula11_n2__["a" /* Nivel2_aula11Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula11_n2__["a" /* Nivel2_aula11Page */]),
            ],
        })
    ], Nivel2_aula11PageModule);
    return Nivel2_aula11PageModule;
}());

//# sourceMappingURL=aula11-n2.module.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula11Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula11Page = /** @class */ (function () {
    function Nivel2_aula11Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 151, treino: "Forma Siu Lim Tao", class: localStorage.getItem("151") },
            { id: 152, treino: "Forma pessoal Nível 1", class: localStorage.getItem("152") },
            { id: 153, treino: "Treino Uma mão controla duas - 4x10", class: localStorage.getItem("153") },
            { id: 154, treino: "Treino Intensivo contra chutes 2min/1min de descanso - 5 rounds", class: localStorage.getItem("154") },
            { id: 155, treino: "Treino Fluencia indefinida 2min/1min de descanso - 5 rounds", class: localStorage.getItem("155") },
            { id: 156, treino: "Luta contra vários oponentes - 3min x 5 rounds", class: localStorage.getItem("156") },
            { id: 157, treino: "Luta de um toque até o final da aula", class: localStorage.getItem("157") },
        ];
        this.lutas = [
            { id: 160, treino: "Lutas", valor: localStorage.getItem("160") }
        ];
    }
    Nivel2_aula11Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula11Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 151].class !== "checkmark") {
            this.treinosList[id - 151].class = "checkmark";
            this.checado = this.treinosList[id - 151].class;
            localStorage.setItem(this.treinosList[id - 151].id, this.treinosList[id - 151].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 151].class = "";
            localStorage.setItem(this.treinosList[id - 151].id, this.treinosList[id - 151].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula11Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 160].valor++;
        localStorage.setItem(this.lutas[id - 160].id, this.lutas[id - 160].valor);
        if (this.lutas[id - 160].valor === 2) {
            this.toast.create({ message: this.lutas[id - 160].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula11Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 160].valor--;
                        localStorage.setItem(_this.lutas[id - 160].id, _this.lutas[id - 160].valor);
                        _this.toast.create({ message: _this.lutas[id - 160].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula11Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula11-n2\aula11-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 11</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula11-n2\aula11-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula11Page);
    return Nivel2_aula11Page;
}());

//# sourceMappingURL=aula11-n2.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula10PageModule", function() { return Nivel2_aula10PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula10_n2__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula10PageModule = /** @class */ (function () {
    function Nivel2_aula10PageModule() {
    }
    Nivel2_aula10PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula10_n2__["a" /* Nivel2_aula10Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula10_n2__["a" /* Nivel2_aula10Page */]),
            ],
        })
    ], Nivel2_aula10PageModule);
    return Nivel2_aula10PageModule;
}());

//# sourceMappingURL=aula10-n2.module.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula10Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula10Page = /** @class */ (function () {
    function Nivel2_aula10Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 146, treino: "Forma Siu Lim Tao", class: localStorage.getItem("146") },
            { id: 147, treino: "Forma pessoas Nível 1", class: localStorage.getItem("147") },
            { id: 148, treino: "Luta de um toque, uma vez com cada aluno aptp (min 5 lutas)", class: localStorage.getItem("148") },
            { id: 149, treino: "Revisão N1 completo e N2 até A9 - 1x5 cada", class: localStorage.getItem("149") },
        ];
        this.lutas = [
            { id: 150, treino: "Lutas", valor: localStorage.getItem("150") }
        ];
    }
    Nivel2_aula10Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula10Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 146].class !== "checkmark") {
            this.treinosList[id - 146].class = "checkmark";
            this.checado = this.treinosList[id - 146].class;
            localStorage.setItem(this.treinosList[id - 146].id, this.treinosList[id - 146].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 146].class = "";
            localStorage.setItem(this.treinosList[id - 146].id, this.treinosList[id - 146].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula10Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 150].valor++;
        localStorage.setItem(this.lutas[id - 150].id, this.lutas[id - 150].valor);
        if (this.lutas[id - 150].valor === 2) {
            this.toast.create({ message: this.lutas[id - 150].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula10Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 150].valor--;
                        localStorage.setItem(_this.lutas[id - 150].id, _this.lutas[id - 150].valor);
                        _this.toast.create({ message: _this.lutas[id - 150].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula10Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula10-n2\aula10-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 10</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula10-n2\aula10-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula10Page);
    return Nivel2_aula10Page;
}());

//# sourceMappingURL=aula10-n2.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel_1PageModule", function() { return Nivel_1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivel_1__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n1_aula1_n1_aula1_n1_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n1_aula2_n1_aula2_n1_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n1_aula3_n1_aula3_n1_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n1_aula4_n1_aula4_n1_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n1_aula5_n1_aula5_n1_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n1_aula6_n1_aula6_n1_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n1_aula7_n1_aula7_n1_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n1_aula8_n1_aula8_n1_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n1_aula9_n1_aula9_n1_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n1_aula10_n1_aula10_n1_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n1_aula11_n1_aula11_n1_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aulas_n1_aula12_n1_aula12_n1_module__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var Nivel_1PageModule = /** @class */ (function () {
    function Nivel_1PageModule() {
    }
    Nivel_1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nivel_1__["a" /* Nivel_1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nivel_1__["a" /* Nivel_1Page */]),
                __WEBPACK_IMPORTED_MODULE_3__aulas_n1_aula1_n1_aula1_n1_module__["Nivel1_aula1PageModule"],
                __WEBPACK_IMPORTED_MODULE_4__aulas_n1_aula2_n1_aula2_n1_module__["Nivel1_aula2PageModule"],
                __WEBPACK_IMPORTED_MODULE_5__aulas_n1_aula3_n1_aula3_n1_module__["Nivel1_aula3PageModule"],
                __WEBPACK_IMPORTED_MODULE_6__aulas_n1_aula4_n1_aula4_n1_module__["Nivel1_aula4PageModule"],
                __WEBPACK_IMPORTED_MODULE_7__aulas_n1_aula5_n1_aula5_n1_module__["Nivel1_aula5PageModule"],
                __WEBPACK_IMPORTED_MODULE_8__aulas_n1_aula6_n1_aula6_n1_module__["Nivel1_aula6PageModule"],
                __WEBPACK_IMPORTED_MODULE_9__aulas_n1_aula7_n1_aula7_n1_module__["Nivel1_aula7PageModule"],
                __WEBPACK_IMPORTED_MODULE_10__aulas_n1_aula8_n1_aula8_n1_module__["Nivel1_aula8PageModule"],
                __WEBPACK_IMPORTED_MODULE_11__aulas_n1_aula9_n1_aula9_n1_module__["Nivel1_aula9PageModule"],
                __WEBPACK_IMPORTED_MODULE_12__aulas_n1_aula10_n1_aula10_n1_module__["Nivel1_aula10PageModule"],
                __WEBPACK_IMPORTED_MODULE_13__aulas_n1_aula11_n1_aula11_n1_module__["Nivel1_aula11PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__aulas_n1_aula12_n1_aula12_n1_module__["Nivel1_aula12PageModule"]
            ],
        })
    ], Nivel_1PageModule);
    return Nivel_1PageModule;
}());

//# sourceMappingURL=nivel-1.module.js.map

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aulas_n1_aula1_n1_aula1_n1__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n1_aula2_n1_aula2_n1__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n1_aula3_n1_aula3_n1__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n1_aula4_n1_aula4_n1__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n1_aula5_n1_aula5_n1__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n1_aula6_n1_aula6_n1__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n1_aula7_n1_aula7_n1__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n1_aula8_n1_aula8_n1__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n1_aula9_n1_aula9_n1__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n1_aula10_n1_aula10_n1__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n1_aula11_n1_aula11_n1__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n1_aula12_n1_aula12_n1__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel_1Page = /** @class */ (function () {
    function Nivel_1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aulas = [
            { aula: "Aula 01" },
            { aula: "Aula 02" },
            { aula: "Aula 03" },
            { aula: "Aula 04" },
            { aula: "Aula 05" },
            { aula: "Aula 06" },
            { aula: "Aula 07" },
            { aula: "Aula 08" },
            { aula: "Aula 09" },
            { aula: "Aula 10" },
            { aula: "Aula 11" },
            { aula: "Aula 12" },
        ];
    }
    Nivel_1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Nivel_1Page');
    };
    Nivel_1Page.prototype.itemSelected = function (aula) {
        console.log(aula.aula);
        switch (aula.aula) {
            case "Aula 01":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aulas_n1_aula1_n1_aula1_n1__["a" /* Nivel1_aula1Page */]);
                break;
            case "Aula 02":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aulas_n1_aula2_n1_aula2_n1__["a" /* Nivel1_aula2Page */]);
                break;
            case "Aula 03":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aulas_n1_aula3_n1_aula3_n1__["a" /* Nivel1_aula3Page */]);
                break;
            case "Aula 04":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aulas_n1_aula4_n1_aula4_n1__["a" /* Nivel1_aula4Page */]);
                break;
            case "Aula 05":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__aulas_n1_aula5_n1_aula5_n1__["a" /* Nivel1_aula5Page */]);
                break;
            case "Aula 06":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__aulas_n1_aula6_n1_aula6_n1__["a" /* Nivel1_aula6Page */]);
                break;
            case "Aula 07":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__aulas_n1_aula7_n1_aula7_n1__["a" /* Nivel1_aula7Page */]);
                break;
            case "Aula 08":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__aulas_n1_aula8_n1_aula8_n1__["a" /* Nivel1_aula8Page */]);
                break;
            case "Aula 09":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__aulas_n1_aula9_n1_aula9_n1__["a" /* Nivel1_aula9Page */]);
                break;
            case "Aula 10":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__aulas_n1_aula10_n1_aula10_n1__["a" /* Nivel1_aula10Page */]);
                break;
            case "Aula 11":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__aulas_n1_aula11_n1_aula11_n1__["a" /* Nivel1_aula11Page */]);
                break;
            case "Aula 12":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__aulas_n1_aula12_n1_aula12_n1__["a" /* Nivel1_aula12Page */]);
                break;
        }
    };
    Nivel_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\nivel-1.html"*/'<!--\n  Generated template for the Nivel_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nível 1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="body" padding>\n  <ion-list inset>\n    <button class="list" ion-item \n      *ngFor="let aula of aulas" \n      (click)="itemSelected(aula)">\n        {{ aula.aula }}\n    </button> \n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\nivel-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Nivel_1Page);
    return Nivel_1Page;
}());

//# sourceMappingURL=nivel-1.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel1_aula11Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel1_aula11Page = /** @class */ (function () {
    function Nivel1_aula11Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 59, treino: "Revisão N1 A10", class: localStorage.getItem("59") },
            { id: 60, treino: "Luta", class: localStorage.getItem("60") },
        ];
    }
    Nivel1_aula11Page.prototype.ionViewDidLoad = function () {
    };
    Nivel1_aula11Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 59].class !== "checkmark") {
            this.treinosList[id - 59].class = "checkmark";
            this.checado = this.treinosList[id - 59].class;
            localStorage.setItem(this.treinosList[id - 59].id, this.treinosList[id - 59].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 59].class = "";
            localStorage.setItem(this.treinosList[id - 59].id, this.treinosList[id - 59].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel1_aula11Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-1',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula11-n1\aula11-n1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 11</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-1\aulas-n1\aula11-n1\aula11-n1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel1_aula11Page);
    return Nivel1_aula11Page;
}());

//# sourceMappingURL=aula11-n1.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel1_aula11PageModule", function() { return Nivel1_aula11PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula11_n1__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel1_aula11PageModule = /** @class */ (function () {
    function Nivel1_aula11PageModule() {
    }
    Nivel1_aula11PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula11_n1__["a" /* Nivel1_aula11Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula11_n1__["a" /* Nivel1_aula11Page */]),
            ],
        })
    ], Nivel1_aula11PageModule);
    return Nivel1_aula11PageModule;
}());

//# sourceMappingURL=aula11-n1.module.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula3PageModule", function() { return Nivel2_aula3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula3_n2__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula3PageModule = /** @class */ (function () {
    function Nivel2_aula3PageModule() {
    }
    Nivel2_aula3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula3_n2__["a" /* Nivel2_aula3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula3_n2__["a" /* Nivel2_aula3Page */]),
            ],
        })
    ], Nivel2_aula3PageModule);
    return Nivel2_aula3PageModule;
}());

//# sourceMappingURL=aula3-n2.module.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula3Page = /** @class */ (function () {
    function Nivel2_aula3Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 84, treino: "Forma Siu Lim Tao", class: localStorage.getItem("84") },
            { id: 85, treino: "Ponto Biu Sao/Jut Sao - 4x10", class: localStorage.getItem("85") },
            { id: 86, treino: "Treino Biu Sao/Lap Da  - 4x10", class: localStorage.getItem("86") },
            { id: 87, treino: "Ponto Ding Sao/Palma - 4x10", class: localStorage.getItem("87") },
            { id: 88, treino: "Treino Ding Sao/Palma - 4x10", class: localStorage.getItem("88") },
            { id: 89, treino: "Revisão N2 A1 - 2x10", class: localStorage.getItem("89") },
            { id: 90, treino: "Revisão N2 A2 - 3x10", class: localStorage.getItem("90") },
            { id: 91, treino: "Revisão N1 - 1x5", class: localStorage.getItem("91") },
            { id: 92, treino: "Forma desenvolver a forma pessoal do nível 1", class: localStorage.getItem("92") },
        ];
        this.lutas = [
            { id: 93, treino: "Lutas", valor: localStorage.getItem("93") }
        ];
    }
    Nivel2_aula3Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula3Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 84].class !== "checkmark") {
            this.treinosList[id - 84].class = "checkmark";
            this.checado = this.treinosList[id - 84].class;
            localStorage.setItem(this.treinosList[id - 84].id, this.treinosList[id - 84].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 84].class = "";
            localStorage.setItem(this.treinosList[id - 84].id, this.treinosList[id - 84].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula3Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 93].valor++;
        localStorage.setItem(this.lutas[id - 93].id, this.lutas[id - 93].valor);
        if (this.lutas[id - 93].valor === 2) {
            this.toast.create({ message: this.lutas[id - 93].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula3Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 93].valor--;
                        localStorage.setItem(_this.lutas[id - 93].id, _this.lutas[id - 93].valor);
                        _this.toast.create({ message: _this.lutas[id - 93].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula3-n2\aula3-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 3</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula3-n2\aula3-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula3Page);
    return Nivel2_aula3Page;
}());

//# sourceMappingURL=aula3-n2.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula4PageModule", function() { return Nivel2_aula4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula4_n2__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula4PageModule = /** @class */ (function () {
    function Nivel2_aula4PageModule() {
    }
    Nivel2_aula4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula4_n2__["a" /* Nivel2_aula4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula4_n2__["a" /* Nivel2_aula4Page */]),
            ],
        })
    ], Nivel2_aula4PageModule);
    return Nivel2_aula4PageModule;
}());

//# sourceMappingURL=aula4-n2.module.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula4Page = /** @class */ (function () {
    function Nivel2_aula4Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 94, treino: "Forma Siu Lim Tao", class: localStorage.getItem("94") },
            { id: 95, treino: "Forma pessoal do Nível 1", class: localStorage.getItem("95") },
            { id: 96, treino: "Revisão N2 A1 - 1x10", class: localStorage.getItem("96") },
            { id: 97, treino: "Revisão N2 A2 - 2x10", class: localStorage.getItem("97") },
            { id: 98, treino: "Revisão N2 A3 - 3x10", class: localStorage.getItem("98") },
            { id: 99, treino: "Luta de um toque pelo resto da aula", class: localStorage.getItem("99") },
            { id: 100, treino: "Treino Pak, Tan Da - 4x10", class: localStorage.getItem("100") },
        ];
        this.lutas = [
            { id: 101, treino: "Lutas", valor: localStorage.getItem("101") }
        ];
    }
    Nivel2_aula4Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula4Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 94].class !== "checkmark") {
            this.treinosList[id - 94].class = "checkmark";
            this.checado = this.treinosList[id - 94].class;
            localStorage.setItem(this.treinosList[id - 94].id, this.treinosList[id - 94].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 94].class = "";
            localStorage.setItem(this.treinosList[id - 94].id, this.treinosList[id - 94].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula4Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 101].valor++;
        localStorage.setItem(this.lutas[id - 101].id, this.lutas[id - 101].valor);
        if (this.lutas[id - 101].valor === 2) {
            this.toast.create({ message: this.lutas[id - 101].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula4Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 101].valor--;
                        localStorage.setItem(_this.lutas[id - 101].id, _this.lutas[id - 101].valor);
                        _this.toast.create({ message: _this.lutas[id - 101].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula4-n2\aula4-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 4</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula4-n2\aula4-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula4Page);
    return Nivel2_aula4Page;
}());

//# sourceMappingURL=aula4-n2.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula5PageModule", function() { return Nivel2_aula5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula5_n2__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula5PageModule = /** @class */ (function () {
    function Nivel2_aula5PageModule() {
    }
    Nivel2_aula5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula5_n2__["a" /* Nivel2_aula5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula5_n2__["a" /* Nivel2_aula5Page */]),
            ],
        })
    ], Nivel2_aula5PageModule);
    return Nivel2_aula5PageModule;
}());

//# sourceMappingURL=aula5-n2.module.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula5Page = /** @class */ (function () {
    function Nivel2_aula5Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 102, treino: "Forma Siu Lim Tao", class: localStorage.getItem("102") },
            { id: 103, treino: "Forma pessoal do Nível 1", class: localStorage.getItem("103") },
            { id: 104, treino: "Ponto Pak / ko Chang - 4x10", class: localStorage.getItem("104") },
            { id: 105, treino: "Treino Pak / Ko Chang - 4x10", class: localStorage.getItem("105") },
            { id: 106, treino: "Tan / Guan - 4x10", class: localStorage.getItem("106") },
            { id: 107, treino: "Tan / Guan - 4x10", class: localStorage.getItem("107") },
            { id: 108, treino: "Fluência definida - 4 treinos a escolha, 10 repetições cada", class: localStorage.getItem("108") },
            { id: 109, treino: "Fluência indefinida - 3min/1min de descanço 3 rounds", class: localStorage.getItem("109") },
            { id: 110, treino: "Luta contra vários oponentes - 3min", class: localStorage.getItem("110") },
            { id: 111, treino: "Revisão N2 até A4 - 1x10", class: localStorage.getItem("111") },
        ];
        this.lutas = [
            { id: 112, treino: "Lutas", valor: localStorage.getItem("112") }
        ];
    }
    Nivel2_aula5Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula5Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 102].class !== "checkmark") {
            this.treinosList[id - 102].class = "checkmark";
            this.checado = this.treinosList[id - 102].class;
            localStorage.setItem(this.treinosList[id - 102].id, this.treinosList[id - 102].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 102].class = "";
            localStorage.setItem(this.treinosList[id - 102].id, this.treinosList[id - 102].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula5Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 112].valor++;
        localStorage.setItem(this.lutas[id - 112].id, this.lutas[id - 112].valor);
        if (this.lutas[id - 112].valor === 2) {
            this.toast.create({ message: this.lutas[id - 112].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula5Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 112].valor--;
                        localStorage.setItem(_this.lutas[id - 112].id, _this.lutas[id - 112].valor);
                        _this.toast.create({ message: _this.lutas[id - 112].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula5-n2\aula5-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 5</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula5-n2\aula5-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula5Page);
    return Nivel2_aula5Page;
}());

//# sourceMappingURL=aula5-n2.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula12PageModule", function() { return Nivel2_aula12PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula12_n2__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula12PageModule = /** @class */ (function () {
    function Nivel2_aula12PageModule() {
    }
    Nivel2_aula12PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula12_n2__["a" /* Nivel2_aula12Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula12_n2__["a" /* Nivel2_aula12Page */]),
            ],
        })
    ], Nivel2_aula12PageModule);
    return Nivel2_aula12PageModule;
}());

//# sourceMappingURL=aula12-n2.module.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula12Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula12Page = /** @class */ (function () {
    function Nivel2_aula12Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 161, treino: "Forma Siu Lim Tao", class: localStorage.getItem("161") },
            { id: 162, treino: "Forma pessoal do Nível 1", class: localStorage.getItem("162") },
            { id: 163, treino: "Revisão N2 A11", class: localStorage.getItem("163") },
            { id: 164, treino: "Ao chegar aqui, solicitar avaliação ao seu instrutor", class: localStorage.getItem("164") },
        ];
        this.lutas = [
            { id: 165, treino: "Lutas", valor: localStorage.getItem("165") }
        ];
    }
    Nivel2_aula12Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula12Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 161].class !== "checkmark") {
            this.treinosList[id - 161].class = "checkmark";
            this.checado = this.treinosList[id - 161].class;
            localStorage.setItem(this.treinosList[id - 161].id, this.treinosList[id - 161].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 161].class = "";
            localStorage.setItem(this.treinosList[id - 161].id, this.treinosList[id - 161].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula12Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 165].valor++;
        localStorage.setItem(this.lutas[id - 165].id, this.lutas[id - 165].valor);
        if (this.lutas[id - 165].valor === 2) {
            this.toast.create({ message: this.lutas[id - 165].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula12Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 165].valor--;
                        localStorage.setItem(_this.lutas[id - 165].id, _this.lutas[id - 165].valor);
                        _this.toast.create({ message: _this.lutas[id - 165].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula12Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula12-n2\aula12-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 12</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula12-n2\aula12-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula12Page);
    return Nivel2_aula12Page;
}());

//# sourceMappingURL=aula12-n2.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula2PageModule", function() { return Nivel2_aula2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula2_n2__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula2PageModule = /** @class */ (function () {
    function Nivel2_aula2PageModule() {
    }
    Nivel2_aula2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula2_n2__["a" /* Nivel2_aula2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula2_n2__["a" /* Nivel2_aula2Page */]),
            ],
        })
    ], Nivel2_aula2PageModule);
    return Nivel2_aula2PageModule;
}());

//# sourceMappingURL=aula2-n2.module.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula2Page = /** @class */ (function () {
    function Nivel2_aula2Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 74, treino: "Forma Siu Lim Tao", class: localStorage.getItem("74") },
            { id: 75, treino: "Ponto Lan Sao/Fak Sao- 2x10", class: localStorage.getItem("75") },
            { id: 76, treino: "Treino Fak Sao/Lap Da - 4x10", class: localStorage.getItem("76") },
            { id: 77, treino: "Treino Pak-Da com braço colado / Lap-Da contra wu-sao - 4x10", class: localStorage.getItem("77") },
            { id: 78, treino: "Treino Pak-Da com braço colado / Lan-Da contra wu-sao - 4x10", class: localStorage.getItem("78") },
            { id: 79, treino: "Ponto Fak Sao/Lan Sao/Jut Sao - 2x10", class: localStorage.getItem("79") },
            { id: 80, treino: "Lan Sao/Jut Sao contra Lap Sao - 4x10", class: localStorage.getItem("80") },
            { id: 81, treino: "Tok Sao - 4x10", class: localStorage.getItem("81") },
            { id: 82, treino: "Revisao N2 A1 - 3x10", class: localStorage.getItem("82") },
        ];
        this.lutas = [
            { id: 83, treino: "Lutas", valor: localStorage.getItem("83") }
        ];
    }
    Nivel2_aula2Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula2Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 74].class !== "checkmark") {
            this.treinosList[id - 74].class = "checkmark";
            this.checado = this.treinosList[id - 74].class;
            localStorage.setItem(this.treinosList[id - 74].id, this.treinosList[id - 74].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 74].class = "";
            localStorage.setItem(this.treinosList[id - 74].id, this.treinosList[id - 74].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula2Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 83].valor++;
        localStorage.setItem(this.lutas[id - 83].id, this.lutas[id - 83].valor);
        if (this.lutas[id - 83].valor === 2) {
            this.toast.create({ message: this.lutas[id - 83].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula2Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 83].valor--;
                        localStorage.setItem(_this.lutas[id - 83].id, _this.lutas[id - 83].valor);
                        _this.toast.create({ message: _this.lutas[id - 83].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula2-n2\aula2-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 2</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula2-n2\aula2-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula2Page);
    return Nivel2_aula2Page;
}());

//# sourceMappingURL=aula2-n2.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula6PageModule", function() { return Nivel2_aula6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula6_n2__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula6PageModule = /** @class */ (function () {
    function Nivel2_aula6PageModule() {
    }
    Nivel2_aula6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula6_n2__["a" /* Nivel2_aula6Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula6_n2__["a" /* Nivel2_aula6Page */]),
            ],
        })
    ], Nivel2_aula6PageModule);
    return Nivel2_aula6PageModule;
}());

//# sourceMappingURL=aula6-n2.module.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula6Page = /** @class */ (function () {
    function Nivel2_aula6Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 113, treino: "Forma Siu Lim Tao", class: localStorage.getItem("'113'") },
            { id: 114, treino: "Forma pessoal Nível 1", class: localStorage.getItem("114") },
            { id: 115, treino: "Ponto Pon/Tan Da - 4x10", class: localStorage.getItem("115") },
            { id: 116, treino: "Treino Pon/Tan Da - 4x10", class: localStorage.getItem("116") },
            { id: 117, treino: "Revisão N1 completo - 1x10", class: localStorage.getItem("117") },
            { id: 118, treino: "Revisão n2 até A5 - 2x10", class: localStorage.getItem("118") },
            { id: 119, treino: "Luta contra vários oponentes - 3min", class: localStorage.getItem("119") },
            { id: 120, treino: "Revisão N2 até A4 - 1x10", class: localStorage.getItem("120") },
        ];
        this.lutas = [
            { id: 121, treino: "Lutas", valor: localStorage.getItem("121") }
        ];
    }
    Nivel2_aula6Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula6Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 113].class !== "checkmark") {
            this.treinosList[id - 113].class = "checkmark";
            this.checado = this.treinosList[id - 113].class;
            localStorage.setItem(this.treinosList[id - 113].id, this.treinosList[id - 113].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 113].class = "";
            localStorage.setItem(this.treinosList[id - 113].id, this.treinosList[id - 113].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula6Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 121].valor++;
        localStorage.setItem(this.lutas[id - 121].id, this.lutas[id - 121].valor);
        if (this.lutas[id - 121].valor === 2) {
            this.toast.create({ message: this.lutas[id - 121].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula6Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 121].valor--;
                        localStorage.setItem(_this.lutas[id - 121].id, _this.lutas[id - 121].valor);
                        _this.toast.create({ message: _this.lutas[id - 121].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula6-n2\aula6-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 6</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula6-n2\aula6-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula6Page);
    return Nivel2_aula6Page;
}());

//# sourceMappingURL=aula6-n2.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula8PageModule", function() { return Nivel2_aula8PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula8_n2__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula8PageModule = /** @class */ (function () {
    function Nivel2_aula8PageModule() {
    }
    Nivel2_aula8PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula8_n2__["a" /* Nivel2_aula8Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula8_n2__["a" /* Nivel2_aula8Page */]),
            ],
        })
    ], Nivel2_aula8PageModule);
    return Nivel2_aula8PageModule;
}());

//# sourceMappingURL=aula8-n2.module.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula8Page = /** @class */ (function () {
    function Nivel2_aula8Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 132, treino: "Forma Siu Lim Tao", class: localStorage.getItem("132") },
            { id: 133, treino: "Forma pessoal Nível 1", class: localStorage.getItem("133") },
            { id: 134, treino: "Treino intensivo contra chutes 3min/1min de descanso - 3 rounds", class: localStorage.getItem("134") },
            { id: 135, treino: "Revisão N1 complento - 1x5", class: localStorage.getItem("135") },
            { id: 136, treino: "Revisão N2 até A7 - 1x10", class: localStorage.getItem("136") },
            { id: 137, treino: "Luta de um toque pelo resto da aula", class: localStorage.getItem("137") },
        ];
        this.lutas = [
            { id: 138, treino: "Lutas", valor: localStorage.getItem("138") }
        ];
    }
    Nivel2_aula8Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula8Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 132].class !== "checkmark") {
            this.treinosList[id - 132].class = "checkmark";
            this.checado = this.treinosList[id - 132].class;
            localStorage.setItem(this.treinosList[id - 132].id, this.treinosList[id - 132].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 132].class = "";
            localStorage.setItem(this.treinosList[id - 132].id, this.treinosList[id - 132].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula8Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 138].valor++;
        localStorage.setItem(this.lutas[id - 138].id, this.lutas[id - 138].valor);
        if (this.lutas[id - 138].valor === 2) {
            this.toast.create({ message: this.lutas[id - 138].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula8Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 138].valor--;
                        localStorage.setItem(_this.lutas[id - 138].id, _this.lutas[id - 138].valor);
                        _this.toast.create({ message: _this.lutas[id - 138].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula8-n2\aula8-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 8</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula8-n2\aula8-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula8Page);
    return Nivel2_aula8Page;
}());

//# sourceMappingURL=aula8-n2.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula7PageModule", function() { return Nivel2_aula7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula7_n2__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula7PageModule = /** @class */ (function () {
    function Nivel2_aula7PageModule() {
    }
    Nivel2_aula7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula7_n2__["a" /* Nivel2_aula7Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula7_n2__["a" /* Nivel2_aula7Page */]),
            ],
        })
    ], Nivel2_aula7PageModule);
    return Nivel2_aula7PageModule;
}());

//# sourceMappingURL=aula7-n2.module.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula7Page = /** @class */ (function () {
    function Nivel2_aula7Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 122, treino: "Forma Siu Lim Tao", class: localStorage.getItem("122") },
            { id: 123, treino: "Forma pessoal Nível 1", class: localStorage.getItem("123") },
            { id: 124, treino: "Ponto Tut Sao - 2x20", class: localStorage.getItem("124") },
            { id: 125, treino: "Ponto Tut Sao/Recolhe - 2x10", class: localStorage.getItem("125") },
            { id: 126, treino: "Força deslocada a frente - 4x20", class: localStorage.getItem("126") },
            { id: 127, treino: "Revisão N2 até A7 - 1x10", class: localStorage.getItem("127") },
            { id: 128, treino: "Fluência definida - 4 treinos a escolha, 10 repetições cada", class: localStorage.getItem("128") },
            { id: 129, treino: "Fluência indefinida - 3min/1min de descanço 3 rounds", class: localStorage.getItem("129") },
            { id: 130, treino: "Luta contra vários oponentes - 3min", class: localStorage.getItem("130") },
        ];
        this.lutas = [
            { id: 131, treino: "Lutas", valor: localStorage.getItem("131") }
        ];
    }
    Nivel2_aula7Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula7Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 122].class !== "checkmark") {
            this.treinosList[id - 122].class = "checkmark";
            this.checado = this.treinosList[id - 122].class;
            localStorage.setItem(this.treinosList[id - 122].id, this.treinosList[id - 122].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 122].class = "";
            localStorage.setItem(this.treinosList[id - 122].id, this.treinosList[id - 122].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula7Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 131].valor++;
        localStorage.setItem(this.lutas[id - 131].id, this.lutas[id - 131].valor);
        if (this.lutas[id - 131].valor === 2) {
            this.toast.create({ message: this.lutas[id - 131].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula7Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 131].valor--;
                        localStorage.setItem(_this.lutas[id - 131].id, _this.lutas[id - 131].valor);
                        _this.toast.create({ message: _this.lutas[id - 131].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula7-n2\aula7-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 7</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula7-n2\aula7-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula7Page);
    return Nivel2_aula7Page;
}());

//# sourceMappingURL=aula7-n2.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula10PageModule", function() { return Nivel3_aula10PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula10_n3__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula10PageModule = /** @class */ (function () {
    function Nivel3_aula10PageModule() {
    }
    Nivel3_aula10PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula10_n3__["a" /* Nivel3_aula10Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula10_n3__["a" /* Nivel3_aula10Page */]),
            ],
        })
    ], Nivel3_aula10PageModule);
    return Nivel3_aula10PageModule;
}());

//# sourceMappingURL=aula10-n3.module.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula10Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula10Page = /** @class */ (function () {
    function Nivel3_aula10Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 245, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("245") },
            { id: 246, treino: "Revisão de todos os Pontos e Treinos de repetição do Nível 3 até agora - 1x10", class: localStorage.getItem("246") },
            { id: 247, treino: "Revisão extra das aulas 8 e 9 do Nível 3 – 2x10", class: localStorage.getItem("247") },
            { id: 248, treino: "Treino de fluência indefinido – 3x3min / 1 de descanso", class: localStorage.getItem("248") },
            { id: 249, treino: "Treino intensivo contra chutes – 3x3min / 1 de descanso", class: localStorage.getItem("249") },
            { id: 250, treino: "Luta contra vários oponentes – 3x3min / 1 de descanso", class: localStorage.getItem("250") },
            { id: 251, treino: "Treino de Chi Sao livre – 3x3min / 1 de descanso", class: localStorage.getItem("251") },
        ];
        this.lutas = [
            { id: 252, treino: "Lutas", valor: localStorage.getItem("252") }
        ];
    }
    Nivel3_aula10Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula10Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 245].class !== "checkmark") {
            this.treinosList[id - 245].class = "checkmark";
            this.checado = this.treinosList[id - 245].class;
            localStorage.setItem(this.treinosList[id - 245].id, this.treinosList[id - 245].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 245].class = "";
            localStorage.setItem(this.treinosList[id - 245].id, this.treinosList[id - 245].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula10Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 252].valor++;
        localStorage.setItem(this.lutas[id - 252].id, this.lutas[id - 252].valor);
        if (this.lutas[id - 252].valor === 3) {
            this.toast.create({ message: this.lutas[id - 252].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula10Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 252].valor--;
                        localStorage.setItem(_this.lutas[id - 252].id, _this.lutas[id - 252].valor);
                        _this.toast.create({ message: _this.lutas[id - 252].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula10Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula10-n3\aula10-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 10</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula10-n3\aula10-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula10Page);
    return Nivel3_aula10Page;
}());

//# sourceMappingURL=aula10-n3.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula11PageModule", function() { return Nivel3_aula11PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula11_n3__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula11PageModule = /** @class */ (function () {
    function Nivel3_aula11PageModule() {
    }
    Nivel3_aula11PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula11_n3__["a" /* Nivel3_aula11Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula11_n3__["a" /* Nivel3_aula11Page */]),
            ],
        })
    ], Nivel3_aula11PageModule);
    return Nivel3_aula11PageModule;
}());

//# sourceMappingURL=aula11-n3.module.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula11Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula11Page = /** @class */ (function () {
    function Nivel3_aula11Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 253, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("253") },
            { id: 254, treino: "Revisão de todos os Pontos e Treinos de repetição do Nível 3 até agora - 1x10", class: localStorage.getItem("254") },
            { id: 255, treino: "Revisão extra das aulas 8 e 9 do Nível 3 – 1x20", class: localStorage.getItem("255") },
            { id: 256, treino: "Treino de Chi Sao livre – 3x3min / 1 de descanso", class: localStorage.getItem("256") },
            { id: 257, treino: "Forma – Refinar, aperfeiçoar, acrescentar e/ou retirar movimentos da forma pessoal de forma que ela resuma com perfeição tudo visto até agora, adaptado ao seu uso e estilo pessoais", class: localStorage.getItem("257") },
        ];
        this.lutas = [
            { id: 258, treino: "Lutas", valor: localStorage.getItem("258") }
        ];
    }
    Nivel3_aula11Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula11Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 253].class !== "checkmark") {
            this.treinosList[id - 253].class = "checkmark";
            this.checado = this.treinosList[id - 253].class;
            localStorage.setItem(this.treinosList[id - 253].id, this.treinosList[id - 253].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 253].class = "";
            localStorage.setItem(this.treinosList[id - 253].id, this.treinosList[id - 253].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula11Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 258].valor++;
        localStorage.setItem(this.lutas[id - 258].id, this.lutas[id - 258].valor);
        if (this.lutas[id - 258].valor === 3) {
            this.toast.create({ message: this.lutas[id - 258].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula11Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 258].valor--;
                        localStorage.setItem(_this.lutas[id - 258].id, _this.lutas[id - 258].valor);
                        _this.toast.create({ message: _this.lutas[id - 258].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula11Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula11-n3\aula11-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 11</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula11-n3\aula11-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula11Page);
    return Nivel3_aula11Page;
}());

//# sourceMappingURL=aula11-n3.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula12PageModule", function() { return Nivel3_aula12PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula12_n3__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula12PageModule = /** @class */ (function () {
    function Nivel3_aula12PageModule() {
    }
    Nivel3_aula12PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula12_n3__["a" /* Nivel3_aula12Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula12_n3__["a" /* Nivel3_aula12Page */]),
            ],
        })
    ], Nivel3_aula12PageModule);
    return Nivel3_aula12PageModule;
}());

//# sourceMappingURL=aula12-n3.module.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula12Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula12Page = /** @class */ (function () {
    function Nivel3_aula12Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 259, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("259") },
            { id: 260, treino: "Forma – Refinar, aperfeiçoar, acrescentar e/ou retirar movimentos da forma pessoal de forma que ela resuma com perfeição tudo visto até agora, adaptado ao seu uso e estilo pessoais", class: localStorage.getItem("260") },
            { id: 261, treino: "Ao chegar aqui, solicitar avaliação ao instrutor", class: localStorage.getItem("261") },
        ];
        this.lutas = [
            { id: 262, treino: "Lutas", valor: localStorage.getItem("262") }
        ];
    }
    Nivel3_aula12Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula12Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 259].class !== "checkmark") {
            this.treinosList[id - 259].class = "checkmark";
            this.checado = this.treinosList[id - 259].class;
            localStorage.setItem(this.treinosList[id - 259].id, this.treinosList[id - 259].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 259].class = "";
            localStorage.setItem(this.treinosList[id - 259].id, this.treinosList[id - 259].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula12Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 262].valor++;
        localStorage.setItem(this.lutas[id - 262].id, this.lutas[id - 262].valor);
        if (this.lutas[id - 262].valor === 3) {
            this.toast.create({ message: this.lutas[id - 262].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula12Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 262].valor--;
                        localStorage.setItem(_this.lutas[id - 262].id, _this.lutas[id - 262].valor);
                        _this.toast.create({ message: _this.lutas[id - 262].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula12Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula12-n3\aula12-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 12</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula12-n3\aula12-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula12Page);
    return Nivel3_aula12Page;
}());

//# sourceMappingURL=aula12-n3.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel2_aula9PageModule", function() { return Nivel2_aula9PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula9_n2__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel2_aula9PageModule = /** @class */ (function () {
    function Nivel2_aula9PageModule() {
    }
    Nivel2_aula9PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula9_n2__["a" /* Nivel2_aula9Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula9_n2__["a" /* Nivel2_aula9Page */]),
            ],
        })
    ], Nivel2_aula9PageModule);
    return Nivel2_aula9PageModule;
}());

//# sourceMappingURL=aula9-n2.module.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel2_aula9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel2_aula9Page = /** @class */ (function () {
    function Nivel2_aula9Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 139, treino: "Forma Siu Lim Tao", class: localStorage.getItem("139") },
            { id: 140, treino: "Forma pessoal N1", class: localStorage.getItem("140") },
            { id: 141, treino: "Revisão N2 até A8 - 1x10", class: localStorage.getItem("141") },
            { id: 142, treino: "Treino Fluência definida - 4 treinos a escolha, 10 repetições cada", class: localStorage.getItem("142") },
            { id: 143, treino: "Treino Fluência indefinida 3min/1min de descanso - 3 rounds", class: localStorage.getItem("143") },
            { id: 144, treino: "Luta contra vários oponentes - 3min", class: localStorage.getItem("144") },
        ];
        this.lutas = [
            { id: 145, treino: "Lutas", valor: localStorage.getItem("145") }
        ];
    }
    Nivel2_aula9Page.prototype.ionViewDidLoad = function () {
    };
    Nivel2_aula9Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 139].class !== "checkmark") {
            this.treinosList[id - 139].class = "checkmark";
            this.checado = this.treinosList[id - 139].class;
            localStorage.setItem(this.treinosList[id - 139].id, this.treinosList[id - 139].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 139].class = "";
            localStorage.setItem(this.treinosList[id - 139].id, this.treinosList[id - 139].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel2_aula9Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 145].valor++;
        localStorage.setItem(this.lutas[id - 145].id, this.lutas[id - 145].valor);
        if (this.lutas[id - 145].valor === 2) {
            this.toast.create({ message: this.lutas[id - 145].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel2_aula9Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 145].valor--;
                        localStorage.setItem(_this.lutas[id - 145].id, _this.lutas[id - 145].valor);
                        _this.toast.create({ message: _this.lutas[id - 145].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel2_aula9Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula9-n2\aula9-n2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 9</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>1 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>1 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/2</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\aulas-n2\aula9-n2\aula9-n2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel2_aula9Page);
    return Nivel2_aula9Page;
}());

//# sourceMappingURL=aula9-n2.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula3PageModule", function() { return Nivel3_aula3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula3_n3__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula3PageModule = /** @class */ (function () {
    function Nivel3_aula3PageModule() {
    }
    Nivel3_aula3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula3_n3__["a" /* Nivel3_aula3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula3_n3__["a" /* Nivel3_aula3Page */]),
            ],
        })
    ], Nivel3_aula3PageModule);
    return Nivel3_aula3PageModule;
}());

//# sourceMappingURL=aula3-n3.module.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula3Page = /** @class */ (function () {
    function Nivel3_aula3Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 185, treino: "Formas (as três) conforme expostas na Aula 1 do Nível 3", class: localStorage.getItem("185") },
            { id: 186, treino: "Revisão N3 A1 - 2x10", class: localStorage.getItem("186") },
            { id: 187, treino: "Ponto Biu Sao/Agarra pescoço/Cotovelada  - 4x10", class: localStorage.getItem("187") },
            { id: 188, treino: "Treino Agarra pescoço/Cotovelada contra defesa por fora - 4x10", class: localStorage.getItem("188") },
            { id: 189, treino: "Treino Agarra pescoço/Cotovelada contra defesa por dentro - 4x10", class: localStorage.getItem("189") },
            { id: 190, treino: "Ponto Pai jang (Cotovelo horizontal) - 4x10", class: localStorage.getItem("190") },
            { id: 191, treino: "Ponto Lan Sao com passo/Retornar para base - 4x10", class: localStorage.getItem("191") },
            { id: 192, treino: "Treino Lan Da - 4x10", class: localStorage.getItem("192") },
            { id: 193, treino: "Ponto Lan Sao com cintura - 4x10", class: localStorage.getItem("193") },
        ];
        this.lutas = [
            { id: 194, treino: "Lutas", valor: localStorage.getItem("194") }
        ];
    }
    Nivel3_aula3Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula3Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 185].class !== "checkmark") {
            this.treinosList[id - 185].class = "checkmark";
            this.checado = this.treinosList[id - 185].class;
            localStorage.setItem(this.treinosList[id - 185].id, this.treinosList[id - 185].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 185].class = "";
            localStorage.setItem(this.treinosList[id - 185].id, this.treinosList[id - 185].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula3Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 194].valor++;
        localStorage.setItem(this.lutas[id - 194].id, this.lutas[id - 194].valor);
        if (this.lutas[id - 194].valor === 3) {
            this.toast.create({ message: this.lutas[id - 194].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula3Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 194].valor--;
                        localStorage.setItem(_this.lutas[id - 194].id, _this.lutas[id - 194].valor);
                        _this.toast.create({ message: _this.lutas[id - 194].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula3-n3\aula3-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 3</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula3-n3\aula3-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula3Page);
    return Nivel3_aula3Page;
}());

//# sourceMappingURL=aula3-n3.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula1PageModule", function() { return Nivel3_aula1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula1_n3__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula1PageModule = /** @class */ (function () {
    function Nivel3_aula1PageModule() {
    }
    Nivel3_aula1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula1_n3__["a" /* Nivel3_aula1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula1_n3__["a" /* Nivel3_aula1Page */]),
            ],
        })
    ], Nivel3_aula1PageModule);
    return Nivel3_aula1PageModule;
}());

//# sourceMappingURL=aula1-n3.module.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula1Page = /** @class */ (function () {
    function Nivel3_aula1Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 166, treino: "Forma Siu Lim Tao - Uma repetição normal e uma com cada perna", class: localStorage.getItem("166") },
            { id: 167, treino: "Forma Pessoal -  agregar movimentos novos relativos ao nível 2 se necessário", class: localStorage.getItem("167") },
            { id: 168, treino: "Forma Chum Kiu - primeira parte", class: localStorage.getItem("168") },
            { id: 169, treino: "Ponto Relaxa/Recolhe - Método Chum Kiu - 4x10", class: localStorage.getItem("169") },
            { id: 170, treino: "Ponto Ngoi Faan sao (Defesa chicote) - 4x10", class: localStorage.getItem("170") },
            { id: 171, treino: "Treino Ngoi Faan Da (Defesa chicote) + sequência - 4x10", class: localStorage.getItem("171") },
            { id: 172, treino: "Ponto Soco/Tan Sao - 4x10", class: localStorage.getItem("172") },
            { id: 173, treino: "Treino Soco/Tan Sao - 4x10", class: localStorage.getItem("173") },
            { id: 174, treino: "Treino Soco/Huen Sao contra Tan Sao - 4x10", class: localStorage.getItem("174") },
            { id: 175, treino: "Ponto Tan/Fon Ngan Kuen - 4x10", class: localStorage.getItem("175") },
            { id: 176, treino: "Treino Tan/Fon Ngan Kuen - 4x10", class: localStorage.getItem("176") },
        ];
        this.lutas = [
            { id: 177, treino: "Lutas", valor: localStorage.getItem("177") }
        ];
    }
    Nivel3_aula1Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula1Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 166].class !== "checkmark") {
            this.treinosList[id - 166].class = "checkmark";
            this.checado = this.treinosList[id - 166].class;
            localStorage.setItem(this.treinosList[id - 166].id, this.treinosList[id - 166].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 166].class = "";
            localStorage.setItem(this.treinosList[id - 166].id, this.treinosList[id - 166].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula1Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 177].valor++;
        localStorage.setItem(this.lutas[id - 177].id, this.lutas[id - 177].valor);
        if (this.lutas[id - 177].valor === 3) {
            this.toast.create({ message: this.lutas[id - 177].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula1Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 177].valor--;
                        localStorage.setItem(_this.lutas[id - 177].id, _this.lutas[id - 177].valor);
                        _this.toast.create({ message: _this.lutas[id - 177].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula1-n3\aula1-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 1</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula1-n3\aula1-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula1Page);
    return Nivel3_aula1Page;
}());

//# sourceMappingURL=aula1-n3.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula4PageModule", function() { return Nivel3_aula4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula4_n3__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula4PageModule = /** @class */ (function () {
    function Nivel3_aula4PageModule() {
    }
    Nivel3_aula4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula4_n3__["a" /* Nivel3_aula4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula4_n3__["a" /* Nivel3_aula4Page */]),
            ],
        })
    ], Nivel3_aula4PageModule);
    return Nivel3_aula4PageModule;
}());

//# sourceMappingURL=aula4-n3.module.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula4Page = /** @class */ (function () {
    function Nivel3_aula4Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 195, treino: "Forma as três conforme exporstas na Aula 1 Nível 3", class: localStorage.getItem("195") },
            { id: 196, treino: "Revisão N3 A1 - 1x10", class: localStorage.getItem("196") },
            { id: 197, treino: "Revisão N3 A2 - 3x10", class: localStorage.getItem("197") },
            { id: 198, treino: "Ponto Tan/Fook - 4x10", class: localStorage.getItem("198") },
            { id: 199, treino: "Pon Sao/Quebra - 4x10", class: localStorage.getItem("199") },
            { id: 200, treino: "Tan Chi Sao  1 - 4x10", class: localStorage.getItem("200") },
            { id: 201, treino: "Tan Chi Sao livre - Resto da aula", class: localStorage.getItem("201") },
        ];
        this.lutas = [
            { id: 202, treino: "Lutas", valor: localStorage.getItem("202") }
        ];
    }
    Nivel3_aula4Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula4Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 195].class !== "checkmark") {
            this.treinosList[id - 195].class = "checkmark";
            this.checado = this.treinosList[id - 195].class;
            localStorage.setItem(this.treinosList[id - 195].id, this.treinosList[id - 195].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 195].class = "";
            localStorage.setItem(this.treinosList[id - 195].id, this.treinosList[id - 195].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula4Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 202].valor++;
        localStorage.setItem(this.lutas[id - 202].id, this.lutas[id - 202].valor);
        if (this.lutas[id - 202].valor === 3) {
            this.toast.create({ message: this.lutas[id - 202].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula4Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 202].valor--;
                        localStorage.setItem(_this.lutas[id - 202].id, _this.lutas[id - 202].valor);
                        _this.toast.create({ message: _this.lutas[id - 202].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula4-n3\aula4-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 4</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula4-n3\aula4-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula4Page);
    return Nivel3_aula4Page;
}());

//# sourceMappingURL=aula4-n3.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula7PageModule", function() { return Nivel3_aula7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula7_n3__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula7PageModule = /** @class */ (function () {
    function Nivel3_aula7PageModule() {
    }
    Nivel3_aula7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula7_n3__["a" /* Nivel3_aula7Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula7_n3__["a" /* Nivel3_aula7Page */]),
            ],
        })
    ], Nivel3_aula7PageModule);
    return Nivel3_aula7PageModule;
}());

//# sourceMappingURL=aula7-n3.module.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula7Page = /** @class */ (function () {
    function Nivel3_aula7Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 219, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("219") },
            { id: 220, treino: "Revisão do Nível 1, 2 e 3, Pontos e Treinos de repetição – 1x5", class: localStorage.getItem("220") },
            { id: 221, treino: "Luta de um toque 3 lutas com no mínimo 3min/1min de descanso.", class: localStorage.getItem("221") },
            { id: 222, treino: "Treino Intensivo contra chutes – 3x3min/1min descanso", class: localStorage.getItem("222") },
            { id: 223, treino: "Treino Tan Chi Sao livre - 3x3min/1min descanso", class: localStorage.getItem("223") },
            { id: 224, treino: "Treino Seung Chi Sao livre - 3x3min/1min descanso", class: localStorage.getItem("224") },
        ];
        this.lutas = [
            { id: 225, treino: "Lutas", valor: localStorage.getItem("225") }
        ];
    }
    Nivel3_aula7Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula7Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 219].class !== "checkmark") {
            this.treinosList[id - 219].class = "checkmark";
            this.checado = this.treinosList[id - 219].class;
            localStorage.setItem(this.treinosList[id - 219].id, this.treinosList[id - 219].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 219].class = "";
            localStorage.setItem(this.treinosList[id - 219].id, this.treinosList[id - 219].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula7Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 225].valor++;
        localStorage.setItem(this.lutas[id - 225].id, this.lutas[id - 225].valor);
        if (this.lutas[id - 225].valor === 3) {
            this.toast.create({ message: this.lutas[id - 225].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula7Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 225].valor--;
                        localStorage.setItem(_this.lutas[id - 225].id, _this.lutas[id - 225].valor);
                        _this.toast.create({ message: _this.lutas[id - 225].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula7-n3\aula7-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 7</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula7-n3\aula7-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula7Page);
    return Nivel3_aula7Page;
}());

//# sourceMappingURL=aula7-n3.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula6PageModule", function() { return Nivel3_aula6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula6_n3__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula6PageModule = /** @class */ (function () {
    function Nivel3_aula6PageModule() {
    }
    Nivel3_aula6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula6_n3__["a" /* Nivel3_aula6Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula6_n3__["a" /* Nivel3_aula6Page */]),
            ],
        })
    ], Nivel3_aula6PageModule);
    return Nivel3_aula6PageModule;
}());

//# sourceMappingURL=aula6-n3.module.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula6Page = /** @class */ (function () {
    function Nivel3_aula6Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 211, treino: "Forma as três conforme exporstas na Aula 1 Nível 3", class: localStorage.getItem("211") },
            { id: 212, treino: "Revisão N3 A3 - 1x10", class: localStorage.getItem("212") },
            { id: 213, treino: "Ponto Tan/Fook - 2x10", class: localStorage.getItem("213") },
            { id: 214, treino: "Treino Tan Chi Sao 1, 2 e 3 - 1x20 cada", class: localStorage.getItem("214") },
            { id: 215, treino: "Treino Seung Chi Sao sem ataques ou passos - 3x3 com 1min de descanço", class: localStorage.getItem("215") },
            { id: 216, treino: "Treino Seung Chi Sao só com passos - 3x3 com 1min de descanço", class: localStorage.getItem("216") },
            { id: 217, treino: "Treino Chi Sao livre - até o final da aula", class: localStorage.getItem("217") },
        ];
        this.lutas = [
            { id: 218, treino: "Lutas", valor: localStorage.getItem("218") }
        ];
    }
    Nivel3_aula6Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula6Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 211].class !== "checkmark") {
            this.treinosList[id - 211].class = "checkmark";
            this.checado = this.treinosList[id - 211].class;
            localStorage.setItem(this.treinosList[id - 211].id, this.treinosList[id - 211].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 211].class = "";
            localStorage.setItem(this.treinosList[id - 211].id, this.treinosList[id - 211].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula6Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 218].valor++;
        localStorage.setItem(this.lutas[id - 218].id, this.lutas[id - 218].valor);
        if (this.lutas[id - 218].valor === 3) {
            this.toast.create({ message: this.lutas[id - 218].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula6Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 218].valor--;
                        localStorage.setItem(_this.lutas[id - 218].id, _this.lutas[id - 218].valor);
                        _this.toast.create({ message: _this.lutas[id - 218].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula6-n3\aula6-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 6</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula6-n3\aula6-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula6Page);
    return Nivel3_aula6Page;
}());

//# sourceMappingURL=aula6-n3.js.map

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula8PageModule", function() { return Nivel3_aula8PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula8_n3__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula8PageModule = /** @class */ (function () {
    function Nivel3_aula8PageModule() {
    }
    Nivel3_aula8PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula8_n3__["a" /* Nivel3_aula8Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula8_n3__["a" /* Nivel3_aula8Page */]),
            ],
        })
    ], Nivel3_aula8PageModule);
    return Nivel3_aula8PageModule;
}());

//# sourceMappingURL=aula8-n3.module.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula8Page = /** @class */ (function () {
    function Nivel3_aula8Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 226, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("226") },
            { id: 227, treino: "Revisão de todos os Pontos e Treinos de repetição do Nível 3 até agora - 2x10", class: localStorage.getItem("227") },
            { id: 228, treino: "Treino Lap Sao de Pon Sao - 4x10", class: localStorage.getItem("228") },
            { id: 229, treino: "Treino Lap Sao de Tan Sao – 4x10", class: localStorage.getItem("229") },
            { id: 230, treino: "Treino Lap Sao de Wu Sao – 4x10", class: localStorage.getItem("230") },
            { id: 231, treino: "Treino de fluência indefinido – 3x3min / 1 de descanso", class: localStorage.getItem("231") },
            { id: 232, treino: "Treino intensivo contra chutes – 3x3min / 1 de descanso", class: localStorage.getItem("232") },
            { id: 233, treino: "Luta contra vários oponentes  – 3x3min / 1 de descanso", class: localStorage.getItem("233") },
            { id: 234, treino: "Treino Chi Sao livre pelo resto da aula se a aula 8 couber em uma aula só", class: localStorage.getItem("234") },
        ];
        this.lutas = [
            { id: 235, treino: "Lutas", valor: localStorage.getItem("235") }
        ];
    }
    Nivel3_aula8Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula8Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 226].class !== "checkmark") {
            this.treinosList[id - 226].class = "checkmark";
            this.checado = this.treinosList[id - 226].class;
            localStorage.setItem(this.treinosList[id - 226].id, this.treinosList[id - 226].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 226].class = "";
            localStorage.setItem(this.treinosList[id - 226].id, this.treinosList[id - 226].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula8Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 235].valor++;
        localStorage.setItem(this.lutas[id - 235].id, this.lutas[id - 235].valor);
        if (this.lutas[id - 235].valor === 3) {
            this.toast.create({ message: this.lutas[id - 235].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula8Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 235].valor--;
                        localStorage.setItem(_this.lutas[id - 235].id, _this.lutas[id - 235].valor);
                        _this.toast.create({ message: _this.lutas[id - 235].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula8-n3\aula8-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 8</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula8-n3\aula8-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula8Page);
    return Nivel3_aula8Page;
}());

//# sourceMappingURL=aula8-n3.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula9PageModule", function() { return Nivel3_aula9PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula9_n3__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula9PageModule = /** @class */ (function () {
    function Nivel3_aula9PageModule() {
    }
    Nivel3_aula9PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula9_n3__["a" /* Nivel3_aula9Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula9_n3__["a" /* Nivel3_aula9Page */]),
            ],
        })
    ], Nivel3_aula9PageModule);
    return Nivel3_aula9PageModule;
}());

//# sourceMappingURL=aula9-n3.module.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula9Page = /** @class */ (function () {
    function Nivel3_aula9Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 236, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("236") },
            { id: 237, treino: "Revisão de todos os Pontos e Treinos de repetição do Nível 3 até agora - 1x10", class: localStorage.getItem("237") },
            { id: 238, treino: "Treino – Pai Jang (Cotovelo Horizontal) X Lap Sao – 4 x 10", class: localStorage.getItem("238") },
            { id: 239, treino: "Treino – Jing Chang (Palma reta) – 2x20", class: localStorage.getItem("239") },
            { id: 240, treino: "Ponto – Pai Jang/Guang Sao/Kiu Sao – 4x10", class: localStorage.getItem("240") },
            { id: 241, treino: "Ponto – Kiu Sao/Soco – 4x10", class: localStorage.getItem("241") },
            { id: 242, treino: "Treino – Kiu Sao/Soco – 4x10", class: localStorage.getItem("242") },
            { id: 243, treino: "Ponto  – Fak Sao/Jut Sao – 4x10", class: localStorage.getItem("243") },
        ];
        this.lutas = [
            { id: 244, treino: "Lutas", valor: localStorage.getItem("244") }
        ];
    }
    Nivel3_aula9Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula9Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 236].class !== "checkmark") {
            this.treinosList[id - 236].class = "checkmark";
            this.checado = this.treinosList[id - 236].class;
            localStorage.setItem(this.treinosList[id - 236].id, this.treinosList[id - 236].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 236].class = "";
            localStorage.setItem(this.treinosList[id - 236].id, this.treinosList[id - 236].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula9Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 244].valor++;
        localStorage.setItem(this.lutas[id - 244].id, this.lutas[id - 244].valor);
        if (this.lutas[id - 244].valor === 3) {
            this.toast.create({ message: this.lutas[id - 244].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula9Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 244].valor--;
                        localStorage.setItem(_this.lutas[id - 244].id, _this.lutas[id - 244].valor);
                        _this.toast.create({ message: _this.lutas[id - 244].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula9Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula9-n3\aula9-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 9</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula9-n3\aula9-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula9Page);
    return Nivel3_aula9Page;
}());

//# sourceMappingURL=aula9-n3.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula5PageModule", function() { return Nivel3_aula5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula5_n3__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula5PageModule = /** @class */ (function () {
    function Nivel3_aula5PageModule() {
    }
    Nivel3_aula5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula5_n3__["a" /* Nivel3_aula5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula5_n3__["a" /* Nivel3_aula5Page */]),
            ],
        })
    ], Nivel3_aula5PageModule);
    return Nivel3_aula5PageModule;
}());

//# sourceMappingURL=aula5-n3.module.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula5Page = /** @class */ (function () {
    function Nivel3_aula5Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 203, treino: "Forma as três conforme exporstas na Aula 1 Nível 3", class: localStorage.getItem("203") },
            { id: 204, treino: "Revisão N3 A1 - 1x5", class: localStorage.getItem("204") },
            { id: 205, treino: "Revisão N3 A3 - 2x10", class: localStorage.getItem("205") },
            { id: 206, treino: "Tan Chi sao 1 - 4x10", class: localStorage.getItem("206") },
            { id: 207, treino: "Tan Chi Sao 2 - 4x10", class: localStorage.getItem("207") },
            { id: 208, treino: "Tan Chi Sao 3 - 4x10", class: localStorage.getItem("208") },
            { id: 209, treino: "Tan Chi Sao livre - até o final da aula", class: localStorage.getItem("209") },
        ];
        this.lutas = [
            { id: 210, treino: "Lutas", valor: localStorage.getItem("210") }
        ];
    }
    Nivel3_aula5Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula5Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 203].class !== "checkmark") {
            this.treinosList[id - 203].class = "checkmark";
            this.checado = this.treinosList[id - 203].class;
            localStorage.setItem(this.treinosList[id - 203].id, this.treinosList[id - 203].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 203].class = "";
            localStorage.setItem(this.treinosList[id - 203].id, this.treinosList[id - 203].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula5Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 210].valor++;
        localStorage.setItem(this.lutas[id - 210].id, this.lutas[id - 210].valor);
        if (this.lutas[id - 210].valor === 3) {
            this.toast.create({ message: this.lutas[id - 210].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula5Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 210].valor--;
                        localStorage.setItem(_this.lutas[id - 210].id, _this.lutas[id - 210].valor);
                        _this.toast.create({ message: _this.lutas[id - 210].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula5-n3\aula5-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 5</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula5-n3\aula5-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula5Page);
    return Nivel3_aula5Page;
}());

//# sourceMappingURL=aula5-n3.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel3_aula2PageModule", function() { return Nivel3_aula2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula2_n3__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel3_aula2PageModule = /** @class */ (function () {
    function Nivel3_aula2PageModule() {
    }
    Nivel3_aula2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula2_n3__["a" /* Nivel3_aula2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula2_n3__["a" /* Nivel3_aula2Page */]),
            ],
        })
    ], Nivel3_aula2PageModule);
    return Nivel3_aula2PageModule;
}());

//# sourceMappingURL=aula2-n3.module.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel3_aula2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel3_aula2Page = /** @class */ (function () {
    function Nivel3_aula2Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 178, treino: "Revisão Nível 1 - 1x5 completo", class: localStorage.getItem("178") },
            { id: 179, treino: "Revisão Nível 2 - 1x5 completo", class: localStorage.getItem("179") },
            { id: 180, treino: "Forma Pessoal - corrigir e aperfeiçoar sempre que possível", class: localStorage.getItem("180") },
            { id: 181, treino: "Forma Siu Lim Tao - uma repetição normal e uma com cada perna", class: localStorage.getItem("181") },
            { id: 182, treino: "Forma Chum Kiu - primeira metade", class: localStorage.getItem("182") },
            { id: 183, treino: "Revisão N3 A1 - 3x10", class: localStorage.getItem("183") },
        ];
        this.lutas = [
            { id: 184, treino: "Lutas", valor: localStorage.getItem("184") }
        ];
    }
    Nivel3_aula2Page.prototype.ionViewDidLoad = function () {
    };
    Nivel3_aula2Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 178].class !== "checkmark") {
            this.treinosList[id - 178].class = "checkmark";
            this.checado = this.treinosList[id - 178].class;
            localStorage.setItem(this.treinosList[id - 178].id, this.treinosList[id - 178].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 178].class = "";
            localStorage.setItem(this.treinosList[id - 178].id, this.treinosList[id - 178].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel3_aula2Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 184].valor++;
        localStorage.setItem(this.lutas[id - 184].id, this.lutas[id - 184].valor);
        if (this.lutas[id - 184].valor === 3) {
            this.toast.create({ message: this.lutas[id - 184].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel3_aula2Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 184].valor--;
                        localStorage.setItem(_this.lutas[id - 184].id, _this.lutas[id - 184].valor);
                        _this.toast.create({ message: _this.lutas[id - 184].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel3_aula2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula2-n3\aula2-n3.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 2</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>2 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>2 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/3</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\aulas-n3\aula2-n3\aula2-n3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel3_aula2Page);
    return Nivel3_aula2Page;
}());

//# sourceMappingURL=aula2-n3.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel_3PageModule", function() { return Nivel_3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivel_3__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n3_aula1_n3_aula1_n3_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n3_aula2_n3_aula2_n3_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n3_aula3_n3_aula3_n3_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n3_aula4_n3_aula4_n3_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n3_aula5_n3_aula5_n3_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n3_aula6_n3_aula6_n3_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n3_aula7_n3_aula7_n3_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n3_aula8_n3_aula8_n3_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n3_aula9_n3_aula9_n3_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n3_aula10_n3_aula10_n3_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n3_aula11_n3_aula11_n3_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aulas_n3_aula12_n3_aula12_n3_module__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var Nivel_3PageModule = /** @class */ (function () {
    function Nivel_3PageModule() {
    }
    Nivel_3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nivel_3__["a" /* Nivel_3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nivel_3__["a" /* Nivel_3Page */]),
                __WEBPACK_IMPORTED_MODULE_3__aulas_n3_aula1_n3_aula1_n3_module__["Nivel3_aula1PageModule"],
                __WEBPACK_IMPORTED_MODULE_4__aulas_n3_aula2_n3_aula2_n3_module__["Nivel3_aula2PageModule"],
                __WEBPACK_IMPORTED_MODULE_5__aulas_n3_aula3_n3_aula3_n3_module__["Nivel3_aula3PageModule"],
                __WEBPACK_IMPORTED_MODULE_6__aulas_n3_aula4_n3_aula4_n3_module__["Nivel3_aula4PageModule"],
                __WEBPACK_IMPORTED_MODULE_7__aulas_n3_aula5_n3_aula5_n3_module__["Nivel3_aula5PageModule"],
                __WEBPACK_IMPORTED_MODULE_8__aulas_n3_aula6_n3_aula6_n3_module__["Nivel3_aula6PageModule"],
                __WEBPACK_IMPORTED_MODULE_9__aulas_n3_aula7_n3_aula7_n3_module__["Nivel3_aula7PageModule"],
                __WEBPACK_IMPORTED_MODULE_10__aulas_n3_aula8_n3_aula8_n3_module__["Nivel3_aula8PageModule"],
                __WEBPACK_IMPORTED_MODULE_11__aulas_n3_aula9_n3_aula9_n3_module__["Nivel3_aula9PageModule"],
                __WEBPACK_IMPORTED_MODULE_12__aulas_n3_aula10_n3_aula10_n3_module__["Nivel3_aula10PageModule"],
                __WEBPACK_IMPORTED_MODULE_13__aulas_n3_aula11_n3_aula11_n3_module__["Nivel3_aula11PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__aulas_n3_aula12_n3_aula12_n3_module__["Nivel3_aula12PageModule"]
            ],
        })
    ], Nivel_3PageModule);
    return Nivel_3PageModule;
}());

//# sourceMappingURL=nivel-3.module.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel_3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aulas_n3_aula1_n3_aula1_n3__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n3_aula2_n3_aula2_n3__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n3_aula3_n3_aula3_n3__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n3_aula4_n3_aula4_n3__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n3_aula5_n3_aula5_n3__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n3_aula6_n3_aula6_n3__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n3_aula7_n3_aula7_n3__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n3_aula8_n3_aula8_n3__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n3_aula9_n3_aula9_n3__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n3_aula10_n3_aula10_n3__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n3_aula11_n3_aula11_n3__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n3_aula12_n3_aula12_n3__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel_3Page = /** @class */ (function () {
    function Nivel_3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aulas = [
            { aula: "Aula 01" },
            { aula: "Aula 02" },
            { aula: "Aula 03" },
            { aula: "Aula 04" },
            { aula: "Aula 05" },
            { aula: "Aula 06" },
            { aula: "Aula 07" },
            { aula: "Aula 08" },
            { aula: "Aula 09" },
            { aula: "Aula 10" },
            { aula: "Aula 11" },
            { aula: "Aula 12" },
        ];
    }
    Nivel_3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Nivel_1Page');
    };
    Nivel_3Page.prototype.itemSelected = function (aula) {
        console.log(aula.aula);
        switch (aula.aula) {
            case "Aula 01":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aulas_n3_aula1_n3_aula1_n3__["a" /* Nivel3_aula1Page */]);
                break;
            case "Aula 02":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aulas_n3_aula2_n3_aula2_n3__["a" /* Nivel3_aula2Page */]);
                break;
            case "Aula 03":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aulas_n3_aula3_n3_aula3_n3__["a" /* Nivel3_aula3Page */]);
                break;
            case "Aula 04":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aulas_n3_aula4_n3_aula4_n3__["a" /* Nivel3_aula4Page */]);
                break;
            case "Aula 05":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__aulas_n3_aula5_n3_aula5_n3__["a" /* Nivel3_aula5Page */]);
                break;
            case "Aula 06":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__aulas_n3_aula6_n3_aula6_n3__["a" /* Nivel3_aula6Page */]);
                break;
            case "Aula 07":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__aulas_n3_aula7_n3_aula7_n3__["a" /* Nivel3_aula7Page */]);
                break;
            case "Aula 08":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__aulas_n3_aula8_n3_aula8_n3__["a" /* Nivel3_aula8Page */]);
                break;
            case "Aula 09":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__aulas_n3_aula9_n3_aula9_n3__["a" /* Nivel3_aula9Page */]);
                break;
            case "Aula 10":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__aulas_n3_aula10_n3_aula10_n3__["a" /* Nivel3_aula10Page */]);
                break;
            case "Aula 11":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__aulas_n3_aula11_n3_aula11_n3__["a" /* Nivel3_aula11Page */]);
                break;
            case "Aula 12":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__aulas_n3_aula12_n3_aula12_n3__["a" /* Nivel3_aula12Page */]);
                break;
        }
    };
    Nivel_3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-3',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\nivel-3.html"*/'<!--\n  Generated template for the Nivel_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nível 3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="body" padding>\n  <ion-list inset>\n    <button class="listLevel" ion-item \n      *ngFor="let aula of aulas" \n      (click)="itemSelected(aula)">\n        {{ aula.aula }}\n    </button> \n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-3\nivel-3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Nivel_3Page);
    return Nivel_3Page;
}());

//# sourceMappingURL=nivel-3.js.map

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula1PageModule", function() { return Nivel4_aula1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula1_n4__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula1PageModule = /** @class */ (function () {
    function Nivel4_aula1PageModule() {
    }
    Nivel4_aula1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula1_n4__["a" /* Nivel4_aula1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula1_n4__["a" /* Nivel4_aula1Page */]),
            ],
        })
    ], Nivel4_aula1PageModule);
    return Nivel4_aula1PageModule;
}());

//# sourceMappingURL=aula1-n4.module.js.map

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula1Page = /** @class */ (function () {
    function Nivel4_aula1Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 263, treino: "Forma Siu Lim Tao – Uma repetição normal, e uma repetição com cada perna", class: localStorage.getItem("263") },
            { id: 264, treino: "Forma Chum Kiu", class: localStorage.getItem("264") },
            { id: 265, treino: "Forma Pessoal", class: localStorage.getItem("265") },
            { id: 266, treino: "Ponto Pai Jang, Ding Gerk, Kan Sao em câmera lenta - 4x10", class: localStorage.getItem("266") },
            { id: 267, treino: "Ponto Sei Dim Gerk + Lian Kuen – 4x10", class: localStorage.getItem("267") },
            { id: 268, treino: "Treino Ding Gerk Chum Kiu – 4x10", class: localStorage.getItem("268") },
            { id: 269, treino: "Treino Dang Gerk Chum Kiu – 4x10", class: localStorage.getItem("269") },
            { id: 270, treino: "Treino Jut Gerk Chum Kiu – 4x10", class: localStorage.getItem("270") },
            { id: 271, treino: "Treino Chum Sum Gerk Chum Kiu – 4x10", class: localStorage.getItem("271") },
            { id: 272, treino: "Circuito Intensivo contra chutes, fluência indefinida. 1 vez", class: localStorage.getItem("272") },
            { id: 273, treino: "Chi Sao em rounds de 3 min. e/ou Ajudar menos graduados pelo resto da aula.", class: localStorage.getItem("273") },
        ];
        this.lutas = [
            { id: 274, treino: "Lutas", valor: localStorage.getItem("274") }
        ];
    }
    Nivel4_aula1Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula1Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 263].class !== "checkmark") {
            this.treinosList[id - 263].class = "checkmark";
            this.checado = this.treinosList[id - 263].class;
            localStorage.setItem(this.treinosList[id - 263].id, this.treinosList[id - 263].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 2720, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 263].class = "";
            localStorage.setItem(this.treinosList[id - 263].id, this.treinosList[id - 263].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 2720, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula1Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 274].valor++;
        localStorage.setItem(this.lutas[id - 274].id, this.lutas[id - 274].valor);
        if (this.lutas[id - 274].valor === 4) {
            this.toast.create({ message: this.lutas[id - 274].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula1Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 274].valor--;
                        localStorage.setItem(_this.lutas[id - 274].id, _this.lutas[id - 274].valor);
                        _this.toast.create({ message: _this.lutas[id - 274].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula1-n4\aula1-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 1</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula1-n4\aula1-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula1Page);
    return Nivel4_aula1Page;
}());

//# sourceMappingURL=aula1-n4.js.map

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula11PageModule", function() { return Nivel4_aula11PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula11_n4__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula11PageModule = /** @class */ (function () {
    function Nivel4_aula11PageModule() {
    }
    Nivel4_aula11PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula11_n4__["a" /* Nivel4_aula11Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula11_n4__["a" /* Nivel4_aula11Page */]),
            ],
        })
    ], Nivel4_aula11PageModule);
    return Nivel4_aula11PageModule;
}());

//# sourceMappingURL=aula11-n4.module.js.map

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula11Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula11Page = /** @class */ (function () {
    function Nivel4_aula11Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 329, treino: "Repetir Aula 10", class: localStorage.getItem("329") },
        ];
        this.lutas = [
            { id: 330, treino: "Lutas", valor: localStorage.getItem("330") }
        ];
    }
    Nivel4_aula11Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula11Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 329].class !== "checkmark") {
            this.treinosList[id - 329].class = "checkmark";
            this.checado = this.treinosList[id - 329].class;
            localStorage.setItem(this.treinosList[id - 329].id, this.treinosList[id - 329].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 329].class = "";
            localStorage.setItem(this.treinosList[id - 329].id, this.treinosList[id - 329].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula11Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 330].valor++;
        localStorage.setItem(this.lutas[id - 330].id, this.lutas[id - 330].valor);
        if (this.lutas[id - 330].valor === 4) {
            this.toast.create({ message: this.lutas[id - 330].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula11Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 330].valor--;
                        localStorage.setItem(_this.lutas[id - 330].id, _this.lutas[id - 330].valor);
                        _this.toast.create({ message: _this.lutas[id - 330].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula11Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula11-n4\aula11-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 11</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula11-n4\aula11-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula11Page);
    return Nivel4_aula11Page;
}());

//# sourceMappingURL=aula11-n4.js.map

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula10PageModule", function() { return Nivel4_aula10PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula10_n4__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula10PageModule = /** @class */ (function () {
    function Nivel4_aula10PageModule() {
    }
    Nivel4_aula10PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula10_n4__["a" /* Nivel4_aula10Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula10_n4__["a" /* Nivel4_aula10Page */]),
            ],
        })
    ], Nivel4_aula10PageModule);
    return Nivel4_aula10PageModule;
}());

//# sourceMappingURL=aula10-n4.module.js.map

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula10Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula10Page = /** @class */ (function () {
    function Nivel4_aula10Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 322, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("322") },
            { id: 323, treino: "Fluência Indefinida – 3 rounds de 3 minutos", class: localStorage.getItem("323") },
            { id: 324, treino: "Intensivo contra chutes – 3 rounds de 3 minutos", class: localStorage.getItem("324") },
            { id: 325, treino: "Luta (quantos oponentes quiser) – 3 rounds de 3 minutos", class: localStorage.getItem("325") },
            { id: 326, treino: "Chi Sao c/ Faca – 3 rounds de 3 minutos", class: localStorage.getItem("326") },
            { id: 327, treino: "Chi Sao Pleno – 3 rounds de 3 minutos", class: localStorage.getItem("327") },
        ];
        this.lutas = [
            { id: 328, treino: "Lutas", valor: localStorage.getItem("328") }
        ];
    }
    Nivel4_aula10Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula10Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 322].class !== "checkmark") {
            this.treinosList[id - 322].class = "checkmark";
            this.checado = this.treinosList[id - 322].class;
            localStorage.setItem(this.treinosList[id - 322].id, this.treinosList[id - 322].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 322].class = "";
            localStorage.setItem(this.treinosList[id - 322].id, this.treinosList[id - 322].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula10Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 328].valor++;
        localStorage.setItem(this.lutas[id - 328].id, this.lutas[id - 328].valor);
        if (this.lutas[id - 328].valor === 4) {
            this.toast.create({ message: this.lutas[id - 328].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula10Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 328].valor--;
                        localStorage.setItem(_this.lutas[id - 328].id, _this.lutas[id - 328].valor);
                        _this.toast.create({ message: _this.lutas[id - 328].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula10Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula10-n4\aula10-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 10</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula10-n4\aula10-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula10Page);
    return Nivel4_aula10Page;
}());

//# sourceMappingURL=aula10-n4.js.map

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula2PageModule", function() { return Nivel4_aula2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula2_n4__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula2PageModule = /** @class */ (function () {
    function Nivel4_aula2PageModule() {
    }
    Nivel4_aula2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula2_n4__["a" /* Nivel4_aula2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula2_n4__["a" /* Nivel4_aula2Page */]),
            ],
        })
    ], Nivel4_aula2PageModule);
    return Nivel4_aula2PageModule;
}());

//# sourceMappingURL=aula2-n4.module.js.map

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula2Page = /** @class */ (function () {
    function Nivel4_aula2Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 275, treino: "Repetir Aula 1 – 4x8 nos treinos de repetição", class: localStorage.getItem("275") },
        ];
        this.lutas = [
            { id: 276, treino: "Lutas", valor: localStorage.getItem("276") }
        ];
    }
    Nivel4_aula2Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula2Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 275].class !== "checkmark") {
            this.treinosList[id - 275].class = "checkmark";
            this.checado = this.treinosList[id - 275].class;
            localStorage.setItem(this.treinosList[id - 275].id, this.treinosList[id - 275].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 275].class = "";
            localStorage.setItem(this.treinosList[id - 275].id, this.treinosList[id - 275].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula2Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 276].valor++;
        localStorage.setItem(this.lutas[id - 276].id, this.lutas[id - 276].valor);
        if (this.lutas[id - 276].valor === 4) {
            this.toast.create({ message: this.lutas[id - 276].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula2Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 276].valor--;
                        localStorage.setItem(_this.lutas[id - 276].id, _this.lutas[id - 276].valor);
                        _this.toast.create({ message: _this.lutas[id - 276].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula2-n4\aula2-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 2</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula2-n4\aula2-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula2Page);
    return Nivel4_aula2Page;
}());

//# sourceMappingURL=aula2-n4.js.map

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula3PageModule", function() { return Nivel4_aula3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula3_n4__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula3PageModule = /** @class */ (function () {
    function Nivel4_aula3PageModule() {
    }
    Nivel4_aula3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula3_n4__["a" /* Nivel4_aula3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula3_n4__["a" /* Nivel4_aula3Page */]),
            ],
        })
    ], Nivel4_aula3PageModule);
    return Nivel4_aula3PageModule;
}());

//# sourceMappingURL=aula3-n4.module.js.map

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula3Page = /** @class */ (function () {
    function Nivel4_aula3Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 277, treino: "Repetir Aula 1 – 3x10 nos treinos de repetição", class: localStorage.getItem("277") },
        ];
        this.lutas = [
            { id: 278, treino: "Lutas", valor: localStorage.getItem("278") }
        ];
    }
    Nivel4_aula3Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula3Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 277].class !== "checkmark") {
            this.treinosList[id - 277].class = "checkmark";
            this.checado = this.treinosList[id - 277].class;
            localStorage.setItem(this.treinosList[id - 277].id, this.treinosList[id - 277].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 277].class = "";
            localStorage.setItem(this.treinosList[id - 277].id, this.treinosList[id - 277].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula3Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 278].valor++;
        localStorage.setItem(this.lutas[id - 278].id, this.lutas[id - 278].valor);
        if (this.lutas[id - 278].valor === 4) {
            this.toast.create({ message: this.lutas[id - 278].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula3Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 278].valor--;
                        localStorage.setItem(_this.lutas[id - 278].id, _this.lutas[id - 278].valor);
                        _this.toast.create({ message: _this.lutas[id - 278].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula3-n4\aula3-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 3</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula3-n4\aula3-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula3Page);
    return Nivel4_aula3Page;
}());

//# sourceMappingURL=aula3-n4.js.map

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula4PageModule", function() { return Nivel4_aula4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula4_n4__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula4PageModule = /** @class */ (function () {
    function Nivel4_aula4PageModule() {
    }
    Nivel4_aula4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula4_n4__["a" /* Nivel4_aula4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula4_n4__["a" /* Nivel4_aula4Page */]),
            ],
        })
    ], Nivel4_aula4PageModule);
    return Nivel4_aula4PageModule;
}());

//# sourceMappingURL=aula4-n4.module.js.map

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula4Page = /** @class */ (function () {
    function Nivel4_aula4Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 279, treino: "Repetir Aula 1 – 2x10 nos treinos de repetição", class: localStorage.getItem("279") },
            { id: 280, treino: "Circuito Intensivo contra chutes, fluência indefinida. 2 vezes", class: localStorage.getItem("280") },
        ];
        this.lutas = [
            { id: 281, treino: "Lutas", valor: localStorage.getItem("281") }
        ];
    }
    Nivel4_aula4Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula4Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 279].class !== "checkmark") {
            this.treinosList[id - 279].class = "checkmark";
            this.checado = this.treinosList[id - 279].class;
            localStorage.setItem(this.treinosList[id - 279].id, this.treinosList[id - 279].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 279].class = "";
            localStorage.setItem(this.treinosList[id - 279].id, this.treinosList[id - 279].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula4Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 281].valor++;
        localStorage.setItem(this.lutas[id - 281].id, this.lutas[id - 281].valor);
        if (this.lutas[id - 281].valor === 4) {
            this.toast.create({ message: this.lutas[id - 281].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula4Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 281].valor--;
                        localStorage.setItem(_this.lutas[id - 281].id, _this.lutas[id - 281].valor);
                        _this.toast.create({ message: _this.lutas[id - 281].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula4-n4\aula4-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 4</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula4-n4\aula4-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula4Page);
    return Nivel4_aula4Page;
}());

//# sourceMappingURL=aula4-n4.js.map

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula5PageModule", function() { return Nivel4_aula5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula5_n4__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula5PageModule = /** @class */ (function () {
    function Nivel4_aula5PageModule() {
    }
    Nivel4_aula5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula5_n4__["a" /* Nivel4_aula5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula5_n4__["a" /* Nivel4_aula5Page */]),
            ],
        })
    ], Nivel4_aula5PageModule);
    return Nivel4_aula5PageModule;
}());

//# sourceMappingURL=aula5-n4.module.js.map

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula5Page = /** @class */ (function () {
    function Nivel4_aula5Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 282, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("282") },
            { id: 283, treino: "Ponto Sei Dim Gerk + Lian Kuen – 4x10", class: localStorage.getItem("283") },
            { id: 284, treino: "Ponto Biu Mah + Kan Sao – 4x10", class: localStorage.getItem("284") },
            { id: 285, treino: "Treino Kan Sao contra chutes altos laterais – 4x10", class: localStorage.getItem("285") },
            { id: 286, treino: "Treino Tan Gerk + Fluência contra Chum Sum Gerk – 4x10", class: localStorage.getItem("286") },
            { id: 287, treino: "Treino Tan Gerk + Fluência contra Chutes Laterais – 4x10", class: localStorage.getItem("287") },
            { id: 288, treino: "Treino Pon Gerk + Fluência contra Ding Gerk – 4x10", class: localStorage.getItem("288") },
            { id: 289, treino: "Chi Gerk em rounds de 3 min. e/ou Ajudar menos graduados pelo resto da aula", class: localStorage.getItem("289") },
        ];
        this.lutas = [
            { id: 290, treino: "Lutas", valor: localStorage.getItem("290") }
        ];
    }
    Nivel4_aula5Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula5Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 282].class !== "checkmark") {
            this.treinosList[id - 282].class = "checkmark";
            this.checado = this.treinosList[id - 282].class;
            localStorage.setItem(this.treinosList[id - 282].id, this.treinosList[id - 282].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 282].class = "";
            localStorage.setItem(this.treinosList[id - 282].id, this.treinosList[id - 282].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula5Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 290].valor++;
        localStorage.setItem(this.lutas[id - 290].id, this.lutas[id - 290].valor);
        if (this.lutas[id - 290].valor === 4) {
            this.toast.create({ message: this.lutas[id - 290].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula5Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 290].valor--;
                        localStorage.setItem(_this.lutas[id - 290].id, _this.lutas[id - 290].valor);
                        _this.toast.create({ message: _this.lutas[id - 290].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula5-n4\aula5-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 5</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula5-n4\aula5-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula5Page);
    return Nivel4_aula5Page;
}());

//# sourceMappingURL=aula5-n4.js.map

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula12PageModule", function() { return Nivel4_aula12PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula12_n4__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula12PageModule = /** @class */ (function () {
    function Nivel4_aula12PageModule() {
    }
    Nivel4_aula12PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula12_n4__["a" /* Nivel4_aula12Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula12_n4__["a" /* Nivel4_aula12Page */]),
            ],
        })
    ], Nivel4_aula12PageModule);
    return Nivel4_aula12PageModule;
}());

//# sourceMappingURL=aula12-n4.module.js.map

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula12Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula12Page = /** @class */ (function () {
    function Nivel4_aula12Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 4331, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("4331") },
            { id: 4332, treino: "Forma – Refinar, aperfeiçoar, acrescentar e/ou retirar movimentos da forma pessoal de forma que ela resuma com perfeição tudo visto até agora, adaptado ao seu uso e estilo pessoais", class: localStorage.getItem("4332") },
            { id: 4333, treino: "Pontos e Treinos – Refinar e aperfeiçoar os movimentos vistos desde o Nível  1 que se adaptem melhor ao seu biótipo, método de luta e preferências pessoais, bem como suas aplicações em luta e defesa pessoal", class: localStorage.getItem("4333") },
            { id: 4334, treino: "Ao chegar aqui, solicitar avaliação ao seu instrutor", class: localStorage.getItem("4334") },
        ];
        this.lutas = [
            { id: 4335, treino: "Lutas", valor: localStorage.getItem("4335") }
        ];
    }
    Nivel4_aula12Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula12Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 4331].class !== "checkmark") {
            this.treinosList[id - 4331].class = "checkmark";
            this.checado = this.treinosList[id - 4331].class;
            localStorage.setItem(this.treinosList[id - 4331].id, this.treinosList[id - 4331].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 4331].class = "";
            localStorage.setItem(this.treinosList[id - 4331].id, this.treinosList[id - 4331].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula12Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 4335].valor++;
        localStorage.setItem(this.lutas[id - 4335].id, this.lutas[id - 4335].valor);
        if (this.lutas[id - 4335].valor === 4) {
            this.toast.create({ message: this.lutas[id - 4335].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula12Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 4335].valor--;
                        localStorage.setItem(_this.lutas[id - 4335].id, _this.lutas[id - 4335].valor);
                        _this.toast.create({ message: _this.lutas[id - 4335].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula12Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula12-n4\aula12-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 12</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula12-n4\aula12-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula12Page);
    return Nivel4_aula12Page;
}());

//# sourceMappingURL=aula12-n4.js.map

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula7PageModule", function() { return Nivel4_aula7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula7_n4__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula7PageModule = /** @class */ (function () {
    function Nivel4_aula7PageModule() {
    }
    Nivel4_aula7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula7_n4__["a" /* Nivel4_aula7Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula7_n4__["a" /* Nivel4_aula7Page */]),
            ],
        })
    ], Nivel4_aula7PageModule);
    return Nivel4_aula7PageModule;
}());

//# sourceMappingURL=aula7-n4.module.js.map

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula7Page = /** @class */ (function () {
    function Nivel4_aula7Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 302, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("302") },
            { id: 303, treino: "Pontos e Treinos de repetição da Aula 6 do Nível 4 – 3x10", class: localStorage.getItem("303") },
            { id: 304, treino: "Ponto Huen Ma Jut Gerk – 4x10", class: localStorage.getItem("304") },
            { id: 305, treino: "Intensivo Contra Chutes – 3 min", class: localStorage.getItem("305") },
            { id: 306, treino: "Ponto Jut Sao, Soco – 4x10", class: localStorage.getItem("306") },
            { id: 307, treino: "Treino “Defesa e contra-ataque com mesmo braço” - 4x10", class: localStorage.getItem("307") },
            { id: 308, treino: "Treino Soco Barreira – 4x10", class: localStorage.getItem("308") },
            { id: 309, treino: "Circuito Intensivo contra chutes, fluência indefinida. 3 vez", class: localStorage.getItem("309") },
            { id: 310, treino: "Chi Sao Pleno pelo resto da aula", class: localStorage.getItem("310") },
        ];
        this.lutas = [
            { id: 311, treino: "Lutas", valor: localStorage.getItem("311") }
        ];
    }
    Nivel4_aula7Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula7Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 302].class !== "checkmark") {
            this.treinosList[id - 302].class = "checkmark";
            this.checado = this.treinosList[id - 302].class;
            localStorage.setItem(this.treinosList[id - 302].id, this.treinosList[id - 302].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 302].class = "";
            localStorage.setItem(this.treinosList[id - 302].id, this.treinosList[id - 302].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula7Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 311].valor++;
        localStorage.setItem(this.lutas[id - 311].id, this.lutas[id - 311].valor);
        if (this.lutas[id - 311].valor === 4) {
            this.toast.create({ message: this.lutas[id - 311].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula7Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 311].valor--;
                        localStorage.setItem(_this.lutas[id - 311].id, _this.lutas[id - 311].valor);
                        _this.toast.create({ message: _this.lutas[id - 311].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula7-n4\aula7-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 7</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula7-n4\aula7-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula7Page);
    return Nivel4_aula7Page;
}());

//# sourceMappingURL=aula7-n4.js.map

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula6PageModule", function() { return Nivel4_aula6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula6_n4__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula6PageModule = /** @class */ (function () {
    function Nivel4_aula6PageModule() {
    }
    Nivel4_aula6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula6_n4__["a" /* Nivel4_aula6Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula6_n4__["a" /* Nivel4_aula6Page */]),
            ],
        })
    ], Nivel4_aula6PageModule);
    return Nivel4_aula6PageModule;
}());

//# sourceMappingURL=aula6-n4.module.js.map

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula6Page = /** @class */ (function () {
    function Nivel4_aula6Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 291, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("291") },
            { id: 292, treino: "Ponto Sei Dim Gerk + Lian Kuen – 4x10", class: localStorage.getItem("292") },
            { id: 293, treino: "Ponto Kan Sao, Chaap Kuen – 4x10", class: localStorage.getItem("293") },
            { id: 294, treino: "Ponto Fak Sao, Jut Sao, Biu Sao – 4x10", class: localStorage.getItem("294") },
            { id: 295, treino: "Ponto Dai Pon Sao - 4x10", class: localStorage.getItem("295") },
            { id: 296, treino: "Treino Dai Pon Sao + Fluência contra soco baixo– 4x10", class: localStorage.getItem("296") },
            { id: 297, treino: "Ponto Man Sao 3 Ataques – 4x10", class: localStorage.getItem("297") },
            { id: 298, treino: "Treino Man Sao + Fluência contra ataques curvos na face – 4x10", class: localStorage.getItem("298") },
            { id: 299, treino: "Circuito Intensivo contra chutes, fluência indefinida. 3 vez", class: localStorage.getItem("299") },
            { id: 300, treino: "Chi Gerk - 3 rounds de 3 minutos. 1 min de descanso", class: localStorage.getItem("300") },
        ];
        this.lutas = [
            { id: 301, treino: "Lutas", valor: localStorage.getItem("301") }
        ];
    }
    Nivel4_aula6Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula6Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 291].class !== "checkmark") {
            this.treinosList[id - 291].class = "checkmark";
            this.checado = this.treinosList[id - 291].class;
            localStorage.setItem(this.treinosList[id - 291].id, this.treinosList[id - 291].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 291].class = "";
            localStorage.setItem(this.treinosList[id - 291].id, this.treinosList[id - 291].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula6Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 301].valor++;
        localStorage.setItem(this.lutas[id - 301].id, this.lutas[id - 301].valor);
        if (this.lutas[id - 301].valor === 4) {
            this.toast.create({ message: this.lutas[id - 301].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula6Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 301].valor--;
                        localStorage.setItem(_this.lutas[id - 301].id, _this.lutas[id - 301].valor);
                        _this.toast.create({ message: _this.lutas[id - 301].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula6-n4\aula6-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 6</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula6-n4\aula6-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula6Page);
    return Nivel4_aula6Page;
}());

//# sourceMappingURL=aula6-n4.js.map

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula9PageModule", function() { return Nivel4_aula9PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula9_n4__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula9PageModule = /** @class */ (function () {
    function Nivel4_aula9PageModule() {
    }
    Nivel4_aula9PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula9_n4__["a" /* Nivel4_aula9Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula9_n4__["a" /* Nivel4_aula9Page */]),
            ],
        })
    ], Nivel4_aula9PageModule);
    return Nivel4_aula9PageModule;
}());

//# sourceMappingURL=aula9-n4.module.js.map

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula9Page = /** @class */ (function () {
    function Nivel4_aula9Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 317, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("317") },
            { id: 318, treino: "Pontos e Treinos de repetição do Nível 4. 1x10", class: localStorage.getItem("318") },
            { id: 319, treino: "Circuito Intensivo contra chutes, fluência indefinida. 3 vez", class: localStorage.getItem("319") },
            { id: 320, treino: "Chi Sao Pleno pelo resto da aula", class: localStorage.getItem("320") },
        ];
        this.lutas = [
            { id: 321, treino: "Lutas", valor: localStorage.getItem("321") }
        ];
    }
    Nivel4_aula9Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula9Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 317].class !== "checkmark") {
            this.treinosList[id - 317].class = "checkmark";
            this.checado = this.treinosList[id - 317].class;
            localStorage.setItem(this.treinosList[id - 317].id, this.treinosList[id - 317].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 317].class = "";
            localStorage.setItem(this.treinosList[id - 317].id, this.treinosList[id - 317].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula9Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 321].valor++;
        localStorage.setItem(this.lutas[id - 321].id, this.lutas[id - 321].valor);
        if (this.lutas[id - 321].valor === 4) {
            this.toast.create({ message: this.lutas[id - 321].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula9Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 321].valor--;
                        localStorage.setItem(_this.lutas[id - 321].id, _this.lutas[id - 321].valor);
                        _this.toast.create({ message: _this.lutas[id - 321].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula9Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula9-n4\aula9-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 9</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula9-n4\aula9-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula9Page);
    return Nivel4_aula9Page;
}());

//# sourceMappingURL=aula9-n4.js.map

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel4_aula8PageModule", function() { return Nivel4_aula8PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula8_n4__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel4_aula8PageModule = /** @class */ (function () {
    function Nivel4_aula8PageModule() {
    }
    Nivel4_aula8PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula8_n4__["a" /* Nivel4_aula8Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula8_n4__["a" /* Nivel4_aula8Page */]),
            ],
        })
    ], Nivel4_aula8PageModule);
    return Nivel4_aula8PageModule;
}());

//# sourceMappingURL=aula8-n4.module.js.map

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel4_aula8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel4_aula8Page = /** @class */ (function () {
    function Nivel4_aula8Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 312, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("312") },
            { id: 313, treino: "Pontos e Treinos de repetição das Aulas 6 e 7 do Nível 4 – 2x10", class: localStorage.getItem("313") },
            { id: 314, treino: "Circuito Intensivo contra chutes, fluência indefinida. 3 vez", class: localStorage.getItem("314") },
            { id: 315, treino: "Chi Sao Pleno pelo resto da aula", class: localStorage.getItem("315") },
        ];
        this.lutas = [
            { id: 316, treino: "Lutas", valor: localStorage.getItem("316") }
        ];
    }
    Nivel4_aula8Page.prototype.ionViewDidLoad = function () {
    };
    Nivel4_aula8Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 312].class !== "checkmark") {
            this.treinosList[id - 312].class = "checkmark";
            this.checado = this.treinosList[id - 312].class;
            localStorage.setItem(this.treinosList[id - 312].id, this.treinosList[id - 312].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 312].class = "";
            localStorage.setItem(this.treinosList[id - 312].id, this.treinosList[id - 312].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel4_aula8Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 316].valor++;
        localStorage.setItem(this.lutas[id - 316].id, this.lutas[id - 316].valor);
        if (this.lutas[id - 316].valor === 4) {
            this.toast.create({ message: this.lutas[id - 316].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
        }
    };
    Nivel4_aula8Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 316].valor--;
                        localStorage.setItem(_this.lutas[id - 316].id, _this.lutas[id - 316].valor);
                        _this.toast.create({ message: _this.lutas[id - 316].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel4_aula8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula8-n4\aula8-n4.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 8</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>3 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>3 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/4</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\aulas-n4\aula8-n4\aula8-n4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel4_aula8Page);
    return Nivel4_aula8Page;
}());

//# sourceMappingURL=aula8-n4.js.map

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel_4PageModule", function() { return Nivel_4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivel_4__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n4_aula1_n4_aula1_n4_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n4_aula2_n4_aula2_n4_module__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n4_aula3_n4_aula3_n4_module__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n4_aula4_n4_aula4_n4_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n4_aula5_n4_aula5_n4_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n4_aula6_n4_aula6_n4_module__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n4_aula7_n4_aula7_n4_module__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n4_aula8_n4_aula8_n4_module__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n4_aula9_n4_aula9_n4_module__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n4_aula10_n4_aula10_n4_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n4_aula11_n4_aula11_n4_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aulas_n4_aula12_n4_aula12_n4_module__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var Nivel_4PageModule = /** @class */ (function () {
    function Nivel_4PageModule() {
    }
    Nivel_4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nivel_4__["a" /* Nivel_4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nivel_4__["a" /* Nivel_4Page */]),
                __WEBPACK_IMPORTED_MODULE_3__aulas_n4_aula1_n4_aula1_n4_module__["Nivel4_aula1PageModule"],
                __WEBPACK_IMPORTED_MODULE_4__aulas_n4_aula2_n4_aula2_n4_module__["Nivel4_aula2PageModule"],
                __WEBPACK_IMPORTED_MODULE_5__aulas_n4_aula3_n4_aula3_n4_module__["Nivel4_aula3PageModule"],
                __WEBPACK_IMPORTED_MODULE_6__aulas_n4_aula4_n4_aula4_n4_module__["Nivel4_aula4PageModule"],
                __WEBPACK_IMPORTED_MODULE_7__aulas_n4_aula5_n4_aula5_n4_module__["Nivel4_aula5PageModule"],
                __WEBPACK_IMPORTED_MODULE_8__aulas_n4_aula6_n4_aula6_n4_module__["Nivel4_aula6PageModule"],
                __WEBPACK_IMPORTED_MODULE_9__aulas_n4_aula7_n4_aula7_n4_module__["Nivel4_aula7PageModule"],
                __WEBPACK_IMPORTED_MODULE_10__aulas_n4_aula8_n4_aula8_n4_module__["Nivel4_aula8PageModule"],
                __WEBPACK_IMPORTED_MODULE_11__aulas_n4_aula9_n4_aula9_n4_module__["Nivel4_aula9PageModule"],
                __WEBPACK_IMPORTED_MODULE_12__aulas_n4_aula10_n4_aula10_n4_module__["Nivel4_aula10PageModule"],
                __WEBPACK_IMPORTED_MODULE_13__aulas_n4_aula11_n4_aula11_n4_module__["Nivel4_aula11PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__aulas_n4_aula12_n4_aula12_n4_module__["Nivel4_aula12PageModule"]
            ],
        })
    ], Nivel_4PageModule);
    return Nivel_4PageModule;
}());

//# sourceMappingURL=nivel-4.module.js.map

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel_4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aulas_n4_aula1_n4_aula1_n4__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n4_aula2_n4_aula2_n4__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n4_aula3_n4_aula3_n4__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n4_aula4_n4_aula4_n4__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n4_aula5_n4_aula5_n4__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n4_aula6_n4_aula6_n4__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n4_aula7_n4_aula7_n4__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n4_aula8_n4_aula8_n4__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n4_aula9_n4_aula9_n4__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n4_aula10_n4_aula10_n4__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n4_aula11_n4_aula11_n4__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n4_aula12_n4_aula12_n4__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel_4Page = /** @class */ (function () {
    function Nivel_4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aulas = [
            { aula: "Aula 01" },
            { aula: "Aula 02" },
            { aula: "Aula 03" },
            { aula: "Aula 04" },
            { aula: "Aula 05" },
            { aula: "Aula 06" },
            { aula: "Aula 07" },
            { aula: "Aula 08" },
            { aula: "Aula 09" },
            { aula: "Aula 10" },
            { aula: "Aula 11" },
            { aula: "Aula 12" },
        ];
    }
    Nivel_4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Nivel_1Page');
    };
    Nivel_4Page.prototype.itemSelected = function (aula) {
        console.log(aula.aula);
        switch (aula.aula) {
            case "Aula 01":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aulas_n4_aula1_n4_aula1_n4__["a" /* Nivel4_aula1Page */]);
                break;
            case "Aula 02":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aulas_n4_aula2_n4_aula2_n4__["a" /* Nivel4_aula2Page */]);
                break;
            case "Aula 03":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aulas_n4_aula3_n4_aula3_n4__["a" /* Nivel4_aula3Page */]);
                break;
            case "Aula 04":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aulas_n4_aula4_n4_aula4_n4__["a" /* Nivel4_aula4Page */]);
                break;
            case "Aula 05":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__aulas_n4_aula5_n4_aula5_n4__["a" /* Nivel4_aula5Page */]);
                break;
            case "Aula 06":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__aulas_n4_aula6_n4_aula6_n4__["a" /* Nivel4_aula6Page */]);
                break;
            case "Aula 07":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__aulas_n4_aula7_n4_aula7_n4__["a" /* Nivel4_aula7Page */]);
                break;
            case "Aula 08":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__aulas_n4_aula8_n4_aula8_n4__["a" /* Nivel4_aula8Page */]);
                break;
            case "Aula 09":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__aulas_n4_aula9_n4_aula9_n4__["a" /* Nivel4_aula9Page */]);
                break;
            case "Aula 10":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__aulas_n4_aula10_n4_aula10_n4__["a" /* Nivel4_aula10Page */]);
                break;
            case "Aula 11":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__aulas_n4_aula11_n4_aula11_n4__["a" /* Nivel4_aula11Page */]);
                break;
            case "Aula 12":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__aulas_n4_aula12_n4_aula12_n4__["a" /* Nivel4_aula12Page */]);
                break;
        }
    };
    Nivel_4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-4',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\nivel-4.html"*/'<!--\n  Generated template for the Nivel_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nível 4</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="body" padding>\n  <ion-list inset>\n    <button class="listLevel" ion-item \n      *ngFor="let aula of aulas" \n      (click)="itemSelected(aula)">\n        {{ aula.aula }}\n    </button> \n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-4\nivel-4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Nivel_4Page);
    return Nivel_4Page;
}());

//# sourceMappingURL=nivel-4.js.map

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula10PageModule", function() { return Nivel6_aula10PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula10_n6__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula10PageModule = /** @class */ (function () {
    function Nivel6_aula10PageModule() {
    }
    Nivel6_aula10PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula10_n6__["a" /* Nivel6_aula10Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula10_n6__["a" /* Nivel6_aula10Page */]),
            ],
        })
    ], Nivel6_aula10PageModule);
    return Nivel6_aula10PageModule;
}());

//# sourceMappingURL=aula10-n6.module.js.map

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula10Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula10Page = /** @class */ (function () {
    function Nivel6_aula10Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 384, treino: "Revisão dos Níveis 1, 2, 3, 4 - 1x5 cada Ponto e Treino", class: localStorage.getItem("384") },
            { id: 385, treino: "Revisão N6 - 1x10 cada ponto e treino", class: localStorage.getItem("385") },
        ];
    }
    Nivel6_aula10Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula10Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 384].class !== "checkmark") {
            this.treinosList[id - 384].class = "checkmark";
            this.checado = this.treinosList[id - 384].class;
            localStorage.setItem(this.treinosList[id - 384].id, this.treinosList[id - 384].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 384].class = "";
            localStorage.setItem(this.treinosList[id - 384].id, this.treinosList[id - 384].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula10Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula10-n6\aula10-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 10</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula10-n6\aula10-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula10Page);
    return Nivel6_aula10Page;
}());

//# sourceMappingURL=aula10-n6.js.map

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula11PageModule", function() { return Nivel6_aula11PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula11_n6__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula11PageModule = /** @class */ (function () {
    function Nivel6_aula11PageModule() {
    }
    Nivel6_aula11PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula11_n6__["a" /* Nivel6_aula11Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula11_n6__["a" /* Nivel6_aula11Page */]),
            ],
        })
    ], Nivel6_aula11PageModule);
    return Nivel6_aula11PageModule;
}());

//# sourceMappingURL=aula11-n6.module.js.map

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula11Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula11Page = /** @class */ (function () {
    function Nivel6_aula11Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 386, treino: "Ponto Tai Jang Atacando - 4x10", class: localStorage.getItem("386") },
            { id: 387, treino: "Treino Fluência finalizando com Tai Jang - 4x10", class: localStorage.getItem("387") },
            { id: 388, treino: "Ponto Tai Jang Defendendo - 4x10", class: localStorage.getItem("388") },
            { id: 389, treino: "Treino Tai Jang Defendendo + Fluência - 4x10", class: localStorage.getItem("389") },
            { id: 390, treino: "Treino Fluência finalizando com a cabeça - 4x10", class: localStorage.getItem("390") },
            { id: 391, treino: "Treino Intensivo Sam Bai Fa contra joelhadas - 4x10", class: localStorage.getItem("391") },
            { id: 392, treino: "Treino Reerguer o corpo - 4x10", class: localStorage.getItem("392") },
        ];
    }
    Nivel6_aula11Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula11Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 386].class !== "checkmark") {
            this.treinosList[id - 386].class = "checkmark";
            this.checado = this.treinosList[id - 386].class;
            localStorage.setItem(this.treinosList[id - 386].id, this.treinosList[id - 386].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 386].class = "";
            localStorage.setItem(this.treinosList[id - 386].id, this.treinosList[id - 386].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula11Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula11-n6\aula11-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 11</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula11-n6\aula11-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula11Page);
    return Nivel6_aula11Page;
}());

//# sourceMappingURL=aula11-n6.js.map

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula1PageModule", function() { return Nivel6_aula1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula1_n6__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula1PageModule = /** @class */ (function () {
    function Nivel6_aula1PageModule() {
    }
    Nivel6_aula1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula1_n6__["a" /* Nivel6_aula1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula1_n6__["a" /* Nivel6_aula1Page */]),
            ],
        })
    ], Nivel6_aula1PageModule);
    return Nivel6_aula1PageModule;
}());

//# sourceMappingURL=aula1-n6.module.js.map

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula1Page = /** @class */ (function () {
    function Nivel6_aula1Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 347, treino: "Ponto Huen Mah com Biu Sao - 4x10", class: localStorage.getItem("347") },
            { id: 348, treino: "Treino Huen Mah com Biu Sao + Flência - 4x10", class: localStorage.getItem("348") },
            { id: 349, treino: "Treino Ciclo Kwai Jang - 4x10", class: localStorage.getItem("349") },
            { id: 350, treino: "Treino Kwai Jang Defensivo - 4x10", class: localStorage.getItem("350") },
            { id: 351, treino: "Treino Transforma ataque em Kwai Jang - 4x10", class: localStorage.getItem("351") },
        ];
    }
    Nivel6_aula1Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula1Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 347].class !== "checkmark") {
            this.treinosList[id - 347].class = "checkmark";
            this.checado = this.treinosList[id - 347].class;
            localStorage.setItem(this.treinosList[id - 347].id, this.treinosList[id - 347].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 347].class = "";
            localStorage.setItem(this.treinosList[id - 347].id, this.treinosList[id - 347].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula1-n6\aula1-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 1</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula1-n6\aula1-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula1Page);
    return Nivel6_aula1Page;
}());

//# sourceMappingURL=aula1-n6.js.map

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula2PageModule", function() { return Nivel6_aula2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula2_n6__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula2PageModule = /** @class */ (function () {
    function Nivel6_aula2PageModule() {
    }
    Nivel6_aula2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula2_n6__["a" /* Nivel6_aula2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula2_n6__["a" /* Nivel6_aula2Page */]),
            ],
        })
    ], Nivel6_aula2PageModule);
    return Nivel6_aula2PageModule;
}());

//# sourceMappingURL=aula2-n6.module.js.map

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula2Page = /** @class */ (function () {
    function Nivel6_aula2Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 352, treino: "Ponto Kwai Jang, Biu Sao - 4x10", class: localStorage.getItem("352") },
            { id: 353, treino: "Treino Biu Sao, Lap Da contra restrição de cotovelo - 4x10", class: localStorage.getItem("353") },
            { id: 354, treino: "Ponto Kap Jang - 4x10", class: localStorage.getItem("354") },
            { id: 355, treino: "Treino kap Jang contra restrição de pulso por fora - 4x10", class: localStorage.getItem("355") },
            { id: 356, treino: "Ponto Pai Jang - 4x10", class: localStorage.getItem("356") },
            { id: 357, treino: "Fluência indefinida em distância de contovelo - 4x10", class: localStorage.getItem("357") },
        ];
    }
    Nivel6_aula2Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula2Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 352].class !== "checkmark") {
            this.treinosList[id - 352].class = "checkmark";
            this.checado = this.treinosList[id - 352].class;
            localStorage.setItem(this.treinosList[id - 352].id, this.treinosList[id - 352].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 352].class = "";
            localStorage.setItem(this.treinosList[id - 352].id, this.treinosList[id - 352].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula2-n6\aula2-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 2</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula2-n6\aula2-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula2Page);
    return Nivel6_aula2Page;
}());

//# sourceMappingURL=aula2-n6.js.map

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula3PageModule", function() { return Nivel6_aula3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula3_n6__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula3PageModule = /** @class */ (function () {
    function Nivel6_aula3PageModule() {
    }
    Nivel6_aula3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula3_n6__["a" /* Nivel6_aula3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula3_n6__["a" /* Nivel6_aula3Page */]),
            ],
        })
    ], Nivel6_aula3PageModule);
    return Nivel6_aula3PageModule;
}());

//# sourceMappingURL=aula3-n6.module.js.map

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula3Page = /** @class */ (function () {
    function Nivel6_aula3Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 358, treino: "Ponto Kan Sao - 4x10", class: localStorage.getItem("358") },
            { id: 359, treino: "Treino Tan Sao transforma em Guan Sao + Fluência - 4x10", class: localStorage.getItem("359") },
            { id: 360, treino: "Treino Kan Sao contra ataque surpresa + Fluência - 4x10", class: localStorage.getItem("360") },
            { id: 361, treino: "Treino Kan Sao contra (um, dois) + Fluência - 4x10", class: localStorage.getItem("361") },
            { id: 362, treino: "Ponto Fak Sao, Kan Sao - 4x10", class: localStorage.getItem("362") },
            { id: 363, treino: "Treino Fak Sao, Kan Sao contra (um, dois) + Fluência - 4x10", class: localStorage.getItem("363") },
        ];
    }
    Nivel6_aula3Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula3Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 358].class !== "checkmark") {
            this.treinosList[id - 358].class = "checkmark";
            this.checado = this.treinosList[id - 358].class;
            localStorage.setItem(this.treinosList[id - 358].id, this.treinosList[id - 358].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 358].class = "";
            localStorage.setItem(this.treinosList[id - 358].id, this.treinosList[id - 358].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula3-n6\aula3-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 3</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula3-n6\aula3-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula3Page);
    return Nivel6_aula3Page;
}());

//# sourceMappingURL=aula3-n6.js.map

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula12PageModule", function() { return Nivel6_aula12PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula12_n6__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula12PageModule = /** @class */ (function () {
    function Nivel6_aula12PageModule() {
    }
    Nivel6_aula12PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula12_n6__["a" /* Nivel6_aula12Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula12_n6__["a" /* Nivel6_aula12Page */]),
            ],
        })
    ], Nivel6_aula12PageModule);
    return Nivel6_aula12PageModule;
}());

//# sourceMappingURL=aula12-n6.module.js.map

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula12Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula12Page = /** @class */ (function () {
    function Nivel6_aula12Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 393, treino: "Revisão dos geral - 1x5 todos Pontos e Treinos desde o nível 1", class: localStorage.getItem("393") },
            { id: 394, treino: "Corrigir, reformular e adaptar forma pessoal", class: localStorage.getItem("394") },
        ];
    }
    Nivel6_aula12Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula12Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 393].class !== "checkmark") {
            this.treinosList[id - 393].class = "checkmark";
            this.checado = this.treinosList[id - 393].class;
            localStorage.setItem(this.treinosList[id - 393].id, this.treinosList[id - 393].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 393].class = "";
            localStorage.setItem(this.treinosList[id - 393].id, this.treinosList[id - 393].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula12Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula12-n6\aula12-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 12</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula12-n6\aula12-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula12Page);
    return Nivel6_aula12Page;
}());

//# sourceMappingURL=aula12-n6.js.map

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel_5PageModule", function() { return Nivel_5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivel_5__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel_5PageModule = /** @class */ (function () {
    function Nivel_5PageModule() {
    }
    Nivel_5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nivel_5__["a" /* Nivel_5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nivel_5__["a" /* Nivel_5Page */]),
            ],
        })
    ], Nivel_5PageModule);
    return Nivel_5PageModule;
}());

//# sourceMappingURL=nivel-5.module.js.map

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel_5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel_5Page = /** @class */ (function () {
    function Nivel_5Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 5326, treino: "Siu Lim Tao", valor: localStorage.getItem("5326") },
            { id: 5327, treino: "Siu Lim Tao Perna Esquerda", valor: localStorage.getItem("5327") },
            { id: 5328, treino: "Siu Lim Tao Perna Direita", valor: localStorage.getItem("5328") },
            { id: 5329, treino: "Chum Kiu", valor: localStorage.getItem("5329") },
            { id: 5330, treino: "Forma Pessoal", valor: localStorage.getItem("5330") },
            { id: 5331, treino: "Luta (3min)", valor: localStorage.getItem("5331") },
            { id: 5332, treino: "Luta x vários oponentes (3min)", valor: localStorage.getItem("5332") },
            { id: 5333, treino: "Luta de 1 toque", valor: localStorage.getItem("5333") },
            { id: 5334, treino: "Luta de um toque c/ faca", valor: localStorage.getItem("5334") },
            { id: 5335, treino: "Luta no canto (3min)", valor: localStorage.getItem("5335") },
            { id: 5336, treino: "Chi Sao vendando (3min)", valor: localStorage.getItem("5336") },
            { id: 5337, treino: "Chi Sao com faca (3min)", valor: localStorage.getItem("5337") },
            { id: 5338, treino: "Chi Gerk (3min)", valor: localStorage.getItem("5338") },
            { id: 5339, treino: "Fluência Indefinida (3min)", valor: localStorage.getItem("5339") },
            { id: 5340, treino: "Fluência Indefinida x faca (3min)", valor: localStorage.getItem("5340") },
            { id: 5341, treino: "Fluência Indefinida x bastão (3min)", valor: localStorage.getItem("5341") },
            { id: 5342, treino: "Intensivo contra chutes (3min)", valor: localStorage.getItem("5342") },
            { id: 5343, treino: "Controle de distância pleno (3min)", valor: localStorage.getItem("5343") },
            { id: 5344, treino: "Escapar do chão", valor: localStorage.getItem("5344") },
            { id: 5345, treino: "Pontos Pessoais", valor: localStorage.getItem("5345") },
            { id: 5346, treino: "Auxiliar colegas < N5", valor: localStorage.getItem("5346") },
        ];
    }
    Nivel_5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Nivel_1Page');
    };
    Nivel_5Page.prototype.add = function (id) {
        this.treinosList[id - 5326].valor++;
        localStorage.setItem(this.treinosList[id - 5326].id, this.treinosList[id - 5326].valor);
        if (this.treinosList[id - 5326].valor === 60) {
            this.toast.create({ message: this.treinosList[id - 5326].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel_5Page.prototype.decrement = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover um treino da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.treinosList[id - 5326].valor--;
                        localStorage.setItem(_this.treinosList[id - 5326].id, _this.treinosList[id - 5326].valor);
                        _this.toast.create({ message: _this.treinosList[id - 5326].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel_5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-5',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-5\nivel-5.html"*/'<!--\n  Generated template for the Nivel_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title>Nível 5</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="body" padding>\n  <ion-card class="list" *ngFor="let exercicio of treinosList">\n      <ion-card-content [ngClass]="exercicio.valor>59 ?\'checkmark\':\'\'">\n          \n          <ion-icon [name]="exercicio.valor>59 ?\'checkmark\':\'\'"></ion-icon>\n          <label id="treinos" for="{{exercicio.id}}"><strong> {{ exercicio.treino }} </strong></label><br>\n          \n          <label>\n            <button ion-button color="danger" (click)="decrement(exercicio.id)" \n              [disabled]="exercicio.valor>0 ?\'\':\'disabled\'"> - </button>\n            <button ion-button color="secondary" (click)="add(exercicio.id)"\n            [disabled]="exercicio.valor>59 ?\'disabled\':\'\'"> + </button>\n            <label id="contador">{{ exercicio.valor }}/60</label>\n          </label>\n\n      </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-5\nivel-5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel_5Page);
    return Nivel_5Page;
}());

//# sourceMappingURL=nivel-5.js.map

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula4PageModule", function() { return Nivel6_aula4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula4_n6__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula4PageModule = /** @class */ (function () {
    function Nivel6_aula4PageModule() {
    }
    Nivel6_aula4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula4_n6__["a" /* Nivel6_aula4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula4_n6__["a" /* Nivel6_aula4Page */]),
            ],
        })
    ], Nivel6_aula4PageModule);
    return Nivel6_aula4PageModule;
}());

//# sourceMappingURL=aula4-n6.module.js.map

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula4Page = /** @class */ (function () {
    function Nivel6_aula4Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 364, treino: "Revisão dos Níveis 1, 2, 3, 4 - Número do nível multiplicado por 5", class: localStorage.getItem("364") },
            { id: 365, treino: "Revisão N6 - 1x20 cada ponto e treino", class: localStorage.getItem("365") },
        ];
    }
    Nivel6_aula4Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula4Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 364].class !== "checkmark") {
            this.treinosList[id - 364].class = "checkmark";
            this.checado = this.treinosList[id - 364].class;
            localStorage.setItem(this.treinosList[id - 364].id, this.treinosList[id - 364].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 364].class = "";
            localStorage.setItem(this.treinosList[id - 364].id, this.treinosList[id - 364].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula4-n6\aula4-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 4</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula4-n6\aula4-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula4Page);
    return Nivel6_aula4Page;
}());

//# sourceMappingURL=aula4-n6.js.map

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula6PageModule", function() { return Nivel6_aula6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula6_n6__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula6PageModule = /** @class */ (function () {
    function Nivel6_aula6PageModule() {
    }
    Nivel6_aula6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula6_n6__["a" /* Nivel6_aula6Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula6_n6__["a" /* Nivel6_aula6Page */]),
            ],
        })
    ], Nivel6_aula6PageModule);
    return Nivel6_aula6PageModule;
}());

//# sourceMappingURL=aula6-n6.module.js.map

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula6Page = /** @class */ (function () {
    function Nivel6_aula6Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 371, treino: "Revisão dos Níveis 1, 2, 3, 4 - Número do nível multiplicado por 4", class: localStorage.getItem("371") },
            { id: 372, treino: "Revisão N6 - 1x15 cada ponto e treino", class: localStorage.getItem("372") },
        ];
    }
    Nivel6_aula6Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula6Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 371].class !== "checkmark") {
            this.treinosList[id - 371].class = "checkmark";
            this.checado = this.treinosList[id - 371].class;
            localStorage.setItem(this.treinosList[id - 371].id, this.treinosList[id - 371].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 371].class = "";
            localStorage.setItem(this.treinosList[id - 371].id, this.treinosList[id - 371].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula6-n6\aula6-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 6</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula6-n6\aula6-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula6Page);
    return Nivel6_aula6Page;
}());

//# sourceMappingURL=aula6-n6.js.map

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula7PageModule", function() { return Nivel6_aula7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula7_n6__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula7PageModule = /** @class */ (function () {
    function Nivel6_aula7PageModule() {
    }
    Nivel6_aula7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula7_n6__["a" /* Nivel6_aula7Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula7_n6__["a" /* Nivel6_aula7Page */]),
            ],
        })
    ], Nivel6_aula7PageModule);
    return Nivel6_aula7PageModule;
}());

//# sourceMappingURL=aula7-n6.module.js.map

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula7Page = /** @class */ (function () {
    function Nivel6_aula7Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 373, treino: "Ponto Biu Jee - 4x10", class: localStorage.getItem("373") },
            { id: 374, treino: "Treino Biu Jee barreira por dentro e por fora - 4x10", class: localStorage.getItem("374") },
            { id: 375, treino: "Treino Biu Da - 4x10", class: localStorage.getItem("375") },
            { id: 376, treino: "Treino Bai Jee Da - 4x10", class: localStorage.getItem("376") },
            { id: 377, treino: "Treino Bai Jee + Fluência - 4x10", class: localStorage.getItem("377") },
        ];
    }
    Nivel6_aula7Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula7Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 373].class !== "checkmark") {
            this.treinosList[id - 373].class = "checkmark";
            this.checado = this.treinosList[id - 373].class;
            localStorage.setItem(this.treinosList[id - 373].id, this.treinosList[id - 373].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 373].class = "";
            localStorage.setItem(this.treinosList[id - 373].id, this.treinosList[id - 373].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula7-n6\aula7-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 7</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula7-n6\aula7-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula7Page);
    return Nivel6_aula7Page;
}());

//# sourceMappingURL=aula7-n6.js.map

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula8PageModule", function() { return Nivel6_aula8PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula8_n6__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula8PageModule = /** @class */ (function () {
    function Nivel6_aula8PageModule() {
    }
    Nivel6_aula8PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula8_n6__["a" /* Nivel6_aula8Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula8_n6__["a" /* Nivel6_aula8Page */]),
            ],
        })
    ], Nivel6_aula8PageModule);
    return Nivel6_aula8PageModule;
}());

//# sourceMappingURL=aula8-n6.module.js.map

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula8Page = /** @class */ (function () {
    function Nivel6_aula8Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 378, treino: "Revisão dos Níveis 1, 2, 3, 4 - Número do nível multiplicado por 3", class: localStorage.getItem("378") },
            { id: 379, treino: "Revisão N6 - 1x10 cada ponto e treino", class: localStorage.getItem("379") },
        ];
    }
    Nivel6_aula8Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula8Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 378].class !== "checkmark") {
            this.treinosList[id - 378].class = "checkmark";
            this.checado = this.treinosList[id - 378].class;
            localStorage.setItem(this.treinosList[id - 378].id, this.treinosList[id - 378].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 378].class = "";
            localStorage.setItem(this.treinosList[id - 378].id, this.treinosList[id - 378].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula8-n6\aula8-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 8</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula8-n6\aula8-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula8Page);
    return Nivel6_aula8Page;
}());

//# sourceMappingURL=aula8-n6.js.map

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula9PageModule", function() { return Nivel6_aula9PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula9_n6__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula9PageModule = /** @class */ (function () {
    function Nivel6_aula9PageModule() {
    }
    Nivel6_aula9PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula9_n6__["a" /* Nivel6_aula9Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula9_n6__["a" /* Nivel6_aula9Page */]),
            ],
        })
    ], Nivel6_aula9PageModule);
    return Nivel6_aula9PageModule;
}());

//# sourceMappingURL=aula9-n6.module.js.map

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula9Page = /** @class */ (function () {
    function Nivel6_aula9Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 380, treino: "Ponto Lai Sao, Pai Kuen - 4x10", class: localStorage.getItem("380") },
            { id: 381, treino: "Treino Kiu Sao, Lai Sao no Braço + Fluência - 4x10", class: localStorage.getItem("381") },
            { id: 382, treino: "Treino Kiu Sao, Lai Sao no pescoço + Fluência - 4x10", class: localStorage.getItem("382") },
            { id: 383, treino: "Treino Fak Sao, Lai Sao + Fluência - 4x10", class: localStorage.getItem("383") },
        ];
    }
    Nivel6_aula9Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula9Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 380].class !== "checkmark") {
            this.treinosList[id - 380].class = "checkmark";
            this.checado = this.treinosList[id - 380].class;
            localStorage.setItem(this.treinosList[id - 380].id, this.treinosList[id - 380].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 380].class = "";
            localStorage.setItem(this.treinosList[id - 380].id, this.treinosList[id - 380].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula9Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula9-n6\aula9-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 9</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula9-n6\aula9-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula9Page);
    return Nivel6_aula9Page;
}());

//# sourceMappingURL=aula9-n6.js.map

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel6_aula5PageModule", function() { return Nivel6_aula5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula5_n6__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel6_aula5PageModule = /** @class */ (function () {
    function Nivel6_aula5PageModule() {
    }
    Nivel6_aula5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula5_n6__["a" /* Nivel6_aula5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula5_n6__["a" /* Nivel6_aula5Page */]),
            ],
        })
    ], Nivel6_aula5PageModule);
    return Nivel6_aula5PageModule;
}());

//# sourceMappingURL=aula5-n6.module.js.map

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel6_aula5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel6_aula5Page = /** @class */ (function () {
    function Nivel6_aula5Page(navCtrl, navParams, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.treinosList = [
            { id: 366, treino: "Ponto Fook Sao, Palma - 4x10", class: localStorage.getItem("366") },
            { id: 367, treino: "Treino Fook Sao, Palma Por dentro da guarda - 4x10", class: localStorage.getItem("367") },
            { id: 368, treino: "Treino Fook Sao, Palma Por fora da guarda - 4x10", class: localStorage.getItem("368") },
            { id: 369, treino: "Treino Huen Sao vira Pak Sao mesmo braço - 4x10", class: localStorage.getItem("369") },
            { id: 370, treino: "Treino Huen Sao vira Pak Sao conta (um, dois) - 4x10", class: localStorage.getItem("370") },
        ];
    }
    Nivel6_aula5Page.prototype.ionViewDidLoad = function () {
    };
    Nivel6_aula5Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 366].class !== "checkmark") {
            this.treinosList[id - 366].class = "checkmark";
            this.checado = this.treinosList[id - 366].class;
            localStorage.setItem(this.treinosList[id - 366].id, this.treinosList[id - 366].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 366].class = "";
            localStorage.setItem(this.treinosList[id - 366].id, this.treinosList[id - 366].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel6_aula5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula5-n6\aula5-n6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 5</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\frente\aulas-n6\aula5-n6\aula5-n6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], Nivel6_aula5Page);
    return Nivel6_aula5Page;
}());

//# sourceMappingURL=aula5-n6.js.map

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel_6PageModule", function() { return Nivel_6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivel_6__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verso_verso_module__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__frente_frente_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__frente_frente__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__verso_verso__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var Nivel_6PageModule = /** @class */ (function () {
    function Nivel_6PageModule() {
    }
    Nivel_6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nivel_6__["a" /* Nivel_6Page */],
                __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nivel_6__["a" /* Nivel_6Page */]),
                __WEBPACK_IMPORTED_MODULE_4__verso_verso_module__["Verso_PageModule"],
                __WEBPACK_IMPORTED_MODULE_5__frente_frente_module__["Frente_PageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_2__nivel_6__["a" /* Nivel_6Page */],
                __WEBPACK_IMPORTED_MODULE_6__frente_frente__["a" /* Frente_Page */],
                __WEBPACK_IMPORTED_MODULE_7__verso_verso__["a" /* Verso_Page */]
            ],
        })
    ], Nivel_6PageModule);
    return Nivel_6PageModule;
}());

//# sourceMappingURL=nivel-6.module.js.map

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel_6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel_6Page = /** @class */ (function () {
    function Nivel_6Page(navCtrl, navParams, alertCtrl, platform, statusBar, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    Nivel_6Page.prototype.ionViewDidLoad = function () {
        console.log("Nivel 6 page");
    };
    Nivel_6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-6',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\nivel-6.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Nível 6</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\nivel-6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Nivel_6Page);
    return Nivel_6Page;
}());

//# sourceMappingURL=nivel-6.js.map

/***/ }),
/* 284 */,
/* 285 */,
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frente_frente__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verso_verso__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__frente_frente__["a" /* Frente_Page */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__verso_verso__["a" /* Verso_Page */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Frente" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Verso" tabIcon="paper"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-6\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verso_PageModule", function() { return Verso_PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verso__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Verso_PageModule = /** @class */ (function () {
    function Verso_PageModule() {
    }
    Verso_PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verso__["a" /* Verso_Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verso__["a" /* Verso_Page */]),
            ],
        })
    ], Verso_PageModule);
    return Verso_PageModule;
}());

//# sourceMappingURL=verso.module.js.map

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frente_PageModule", function() { return Frente_PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frente__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n6_aula1_n6_aula1_n6_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n6_aula2_n6_aula2_n6_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n6_aula3_n6_aula3_n6_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n6_aula4_n6_aula4_n6_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n6_aula5_n6_aula5_n6_module__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n6_aula6_n6_aula6_n6_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n6_aula7_n6_aula7_n6_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n6_aula8_n6_aula8_n6_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n6_aula9_n6_aula9_n6_module__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n6_aula10_n6_aula10_n6_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n6_aula11_n6_aula11_n6_module__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aulas_n6_aula12_n6_aula12_n6_module__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var Frente_PageModule = /** @class */ (function () {
    function Frente_PageModule() {
    }
    Frente_PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__frente__["a" /* Frente_Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__frente__["a" /* Frente_Page */]),
                __WEBPACK_IMPORTED_MODULE_3__aulas_n6_aula1_n6_aula1_n6_module__["Nivel6_aula1PageModule"],
                __WEBPACK_IMPORTED_MODULE_4__aulas_n6_aula2_n6_aula2_n6_module__["Nivel6_aula2PageModule"],
                __WEBPACK_IMPORTED_MODULE_5__aulas_n6_aula3_n6_aula3_n6_module__["Nivel6_aula3PageModule"],
                __WEBPACK_IMPORTED_MODULE_6__aulas_n6_aula4_n6_aula4_n6_module__["Nivel6_aula4PageModule"],
                __WEBPACK_IMPORTED_MODULE_7__aulas_n6_aula5_n6_aula5_n6_module__["Nivel6_aula5PageModule"],
                __WEBPACK_IMPORTED_MODULE_8__aulas_n6_aula6_n6_aula6_n6_module__["Nivel6_aula6PageModule"],
                __WEBPACK_IMPORTED_MODULE_9__aulas_n6_aula7_n6_aula7_n6_module__["Nivel6_aula7PageModule"],
                __WEBPACK_IMPORTED_MODULE_10__aulas_n6_aula8_n6_aula8_n6_module__["Nivel6_aula8PageModule"],
                __WEBPACK_IMPORTED_MODULE_11__aulas_n6_aula9_n6_aula9_n6_module__["Nivel6_aula9PageModule"],
                __WEBPACK_IMPORTED_MODULE_12__aulas_n6_aula10_n6_aula10_n6_module__["Nivel6_aula10PageModule"],
                __WEBPACK_IMPORTED_MODULE_13__aulas_n6_aula11_n6_aula11_n6_module__["Nivel6_aula11PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__aulas_n6_aula12_n6_aula12_n6_module__["Nivel6_aula12PageModule"]
            ],
        })
    ], Frente_PageModule);
    return Frente_PageModule;
}());

//# sourceMappingURL=frente.module.js.map

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula1PageModule", function() { return Nivel7_aula1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula1_n7__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula1PageModule = /** @class */ (function () {
    function Nivel7_aula1PageModule() {
    }
    Nivel7_aula1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula1_n7__["a" /* Nivel7_aula1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula1_n7__["a" /* Nivel7_aula1Page */]),
            ],
        })
    ], Nivel7_aula1PageModule);
    return Nivel7_aula1PageModule;
}());

//# sourceMappingURL=aula1-n7.module.js.map

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula1Page = /** @class */ (function () {
    function Nivel7_aula1Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 465, treino: "Formas", class: localStorage.getItem("465") },
            { id: 466, treino: "Wu Sao / Lap Da (palma) - 4x10", class: localStorage.getItem("466") },
            { id: 467, treino: "Pon Sao / Tan Da (palma baixa) - 4x10", class: localStorage.getItem("467") },
            { id: 468, treino: "Kan Sao + Passo / Kan Sao Invertido + Passo - 4x10", class: localStorage.getItem("468") },
        ];
        this.lutas = [
            { id: 469, treino: "Lutas", valor: localStorage.getItem("469") }
        ];
    }
    Nivel7_aula1Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula1Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 465].class !== "checkmark") {
            this.treinosList[id - 465].class = "checkmark";
            this.checado = this.treinosList[id - 465].class;
            localStorage.setItem(this.treinosList[id - 465].id, this.treinosList[id - 465].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 465].class = "";
            localStorage.setItem(this.treinosList[id - 465].id, this.treinosList[id - 465].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula1Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 469].valor++;
        localStorage.setItem(this.lutas[id - 469].id, this.lutas[id - 469].valor);
        if (this.lutas[id - 469].valor === 7) {
            this.toast.create({ message: this.lutas[id - 469].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula1Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 469].valor--;
                        localStorage.setItem(_this.lutas[id - 469].id, _this.lutas[id - 469].valor);
                        _this.toast.create({ message: _this.lutas[id - 469].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula1-n7\aula1-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 1</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content  [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n            <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n                <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n                <label id="treinos" for="{{luta.id}}">\n\n                    <strong> {{ luta.treino }} </strong>\n\n                </label>\n\n                <br>\n\n\n\n                <label>\n\n                    <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                    <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                    <label id="contador">{{ luta.valor }}/7</label>\n\n                </label>\n\n            </ion-card-content>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula1-n7\aula1-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula1Page);
    return Nivel7_aula1Page;
}());

//# sourceMappingURL=aula1-n7.js.map

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula10PageModule", function() { return Nivel7_aula10PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula10_n7__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula10PageModule = /** @class */ (function () {
    function Nivel7_aula10PageModule() {
    }
    Nivel7_aula10PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula10_n7__["a" /* Nivel7_aula10Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula10_n7__["a" /* Nivel7_aula10Page */]),
            ],
        })
    ], Nivel7_aula10PageModule);
    return Nivel7_aula10PageModule;
}());

//# sourceMappingURL=aula10-n7.module.js.map

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula10Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula10Page = /** @class */ (function () {
    function Nivel7_aula10Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 519, treino: "Formas", class: localStorage.getItem("519") },
            { id: 520, treino: "Jut Sao / Pak Da (palma baixa) triangulando - 4x10", class: localStorage.getItem("520") },
            { id: 521, treino: "Jut Sao + Tan / Jut Guerk + Pak Sao - 4x10", class: localStorage.getItem("521") },
            { id: 522, treino: "Lap Sao duplo / Jut Guerk na perna de apoio - 4x10", class: localStorage.getItem("522") },
            { id: 523, treino: "Revisão até aula 9 - 1x10", class: localStorage.getItem("523") },
        ];
        this.lutas = [
            { id: 524, treino: "Lutas", valor: localStorage.getItem("524") }
        ];
    }
    Nivel7_aula10Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula10Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 519].class !== "checkmark") {
            this.treinosList[id - 519].class = "checkmark";
            this.checado = this.treinosList[id - 519].class;
            localStorage.setItem(this.treinosList[id - 519].id, this.treinosList[id - 519].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 519].class = "";
            localStorage.setItem(this.treinosList[id - 519].id, this.treinosList[id - 519].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula10Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 524].valor++;
        localStorage.setItem(this.lutas[id - 524].id, this.lutas[id - 524].valor);
        if (this.lutas[id - 524].valor === 7) {
            this.toast.create({ message: this.lutas[id - 524].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula10Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 524].valor--;
                        localStorage.setItem(_this.lutas[id - 524].id, _this.lutas[id - 524].valor);
                        _this.toast.create({ message: _this.lutas[id - 524].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula10Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula10-n7\aula10-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 10</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/7</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula10-n7\aula10-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula10Page);
    return Nivel7_aula10Page;
}());

//# sourceMappingURL=aula10-n7.js.map

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula12PageModule", function() { return Nivel7_aula12PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula12_n7__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula12PageModule = /** @class */ (function () {
    function Nivel7_aula12PageModule() {
    }
    Nivel7_aula12PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula12_n7__["a" /* Nivel7_aula12Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula12_n7__["a" /* Nivel7_aula12Page */]),
            ],
        })
    ], Nivel7_aula12PageModule);
    return Nivel7_aula12PageModule;
}());

//# sourceMappingURL=aula12-n7.module.js.map

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula12Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula12Page = /** @class */ (function () {
    function Nivel7_aula12Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 528, treino: "Formas", class: localStorage.getItem("528") },
            { id: 529, treino: "Repetir aula 11", class: localStorage.getItem("529") },
            { id: 530, treino: "Aprimorar forma pessoal e se estiver pronto solicitar o exame", class: localStorage.getItem("530") },
        ];
        this.lutas = [
            { id: 531, treino: "Lutas", valor: localStorage.getItem("531") }
        ];
    }
    Nivel7_aula12Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula12Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 528].class !== "checkmark") {
            this.treinosList[id - 528].class = "checkmark";
            this.checado = this.treinosList[id - 528].class;
            localStorage.setItem(this.treinosList[id - 528].id, this.treinosList[id - 528].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 528].class = "";
            localStorage.setItem(this.treinosList[id - 528].id, this.treinosList[id - 528].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula12Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 531].valor++;
        localStorage.setItem(this.lutas[id - 531].id, this.lutas[id - 531].valor);
        if (this.lutas[id - 531].valor === 7) {
            this.toast.create({ message: this.lutas[id - 531].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula12Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 531].valor--;
                        localStorage.setItem(_this.lutas[id - 531].id, _this.lutas[id - 531].valor);
                        _this.toast.create({ message: _this.lutas[id - 531].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula12Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula12-n7\aula12-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 12</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/7</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula12-n7\aula12-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula12Page);
    return Nivel7_aula12Page;
}());

//# sourceMappingURL=aula12-n7.js.map

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula11PageModule", function() { return Nivel7_aula11PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula11_n7__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula11PageModule = /** @class */ (function () {
    function Nivel7_aula11PageModule() {
    }
    Nivel7_aula11PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula11_n7__["a" /* Nivel7_aula11Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula11_n7__["a" /* Nivel7_aula11Page */]),
            ],
        })
    ], Nivel7_aula11PageModule);
    return Nivel7_aula11PageModule;
}());

//# sourceMappingURL=aula11-n7.module.js.map

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula11Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula11Page = /** @class */ (function () {
    function Nivel7_aula11Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 525, treino: "Formas", class: localStorage.getItem("525") },
            { id: 526, treino: "Revisão até aula 10 - 2x20", class: localStorage.getItem("526") },
        ];
        this.lutas = [
            { id: 527, treino: "Lutas", valor: localStorage.getItem("527") }
        ];
    }
    Nivel7_aula11Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula11Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 525].class !== "checkmark") {
            this.treinosList[id - 525].class = "checkmark";
            this.checado = this.treinosList[id - 525].class;
            localStorage.setItem(this.treinosList[id - 525].id, this.treinosList[id - 525].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 525].class = "";
            localStorage.setItem(this.treinosList[id - 525].id, this.treinosList[id - 525].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula11Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 527].valor++;
        localStorage.setItem(this.lutas[id - 527].id, this.lutas[id - 527].valor);
        if (this.lutas[id - 527].valor === 7) {
            this.toast.create({ message: this.lutas[id - 527].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula11Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 527].valor--;
                        localStorage.setItem(_this.lutas[id - 527].id, _this.lutas[id - 527].valor);
                        _this.toast.create({ message: _this.lutas[id - 527].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula11Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula11-n7\aula11-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 11</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n        <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{luta.id}}">\n\n                <strong> {{ luta.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                <label id="contador">{{ luta.valor }}/7</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula11-n7\aula11-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula11Page);
    return Nivel7_aula11Page;
}());

//# sourceMappingURL=aula11-n7.js.map

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula3PageModule", function() { return Nivel7_aula3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula3_n7__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula3PageModule = /** @class */ (function () {
    function Nivel7_aula3PageModule() {
    }
    Nivel7_aula3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula3_n7__["a" /* Nivel7_aula3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula3_n7__["a" /* Nivel7_aula3Page */]),
            ],
        })
    ], Nivel7_aula3PageModule);
    return Nivel7_aula3PageModule;
}());

//# sourceMappingURL=aula3-n7.module.js.map

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula3Page = /** @class */ (function () {
    function Nivel7_aula3Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 476, treino: "Formas", class: localStorage.getItem("476") },
            { id: 477, treino: "Took Sao / Jut Sao - 4x10", class: localStorage.getItem("477") },
            { id: 478, treino: "Guan Sao invertido (toque baixo) - 4x10", class: localStorage.getItem("478") },
            { id: 479, treino: "Pak / Fak Da na costela - 4x10", class: localStorage.getItem("479") },
            { id: 480, treino: "Huen Sao interno / Palma Baixa", class: localStorage.getItem("480") },
            { id: 481, treino: "Revisão aula 1 - 2x10", class: localStorage.getItem("481") },
            { id: 482, treino: "Revisao aula 2 - 3x10", class: localStorage.getItem("482") },
        ];
        this.lutas = [
            { id: 483, treino: "Lutas", valor: localStorage.getItem("483") }
        ];
    }
    Nivel7_aula3Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula3Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 476].class !== "checkmark") {
            this.treinosList[id - 476].class = "checkmark";
            this.checado = this.treinosList[id - 476].class;
            localStorage.setItem(this.treinosList[id - 476].id, this.treinosList[id - 476].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 476].class = "";
            localStorage.setItem(this.treinosList[id - 476].id, this.treinosList[id - 476].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula3Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 483].valor++;
        localStorage.setItem(this.lutas[id - 483].id, this.lutas[id - 483].valor);
        if (this.lutas[id - 483].valor === 7) {
            this.toast.create({ message: this.lutas[id - 483].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula3Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 483].valor--;
                        localStorage.setItem(_this.lutas[id - 483].id, _this.lutas[id - 483].valor);
                        _this.toast.create({ message: _this.lutas[id - 483].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula3-n7\aula3-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 3</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content  [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n            <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n                <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n                <label id="treinos" for="{{luta.id}}">\n\n                    <strong> {{ luta.treino }} </strong>\n\n                </label>\n\n                <br>\n\n\n\n                <label>\n\n                    <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                    <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                    <label id="contador">{{ luta.valor }}/7</label>\n\n                </label>\n\n            </ion-card-content>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula3-n7\aula3-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula3Page);
    return Nivel7_aula3Page;
}());

//# sourceMappingURL=aula3-n7.js.map

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula4PageModule", function() { return Nivel7_aula4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula4_n7__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula4PageModule = /** @class */ (function () {
    function Nivel7_aula4PageModule() {
    }
    Nivel7_aula4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula4_n7__["a" /* Nivel7_aula4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula4_n7__["a" /* Nivel7_aula4Page */]),
            ],
        })
    ], Nivel7_aula4PageModule);
    return Nivel7_aula4PageModule;
}());

//# sourceMappingURL=aula4-n7.module.js.map

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula4Page = /** @class */ (function () {
    function Nivel7_aula4Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 484, treino: "Formas", class: localStorage.getItem("484") },
            { id: 485, treino: "Huen Sao externo / Palma baixa - 4x10", class: localStorage.getItem("485") },
            { id: 486, treino: "Tan / Fook alternando nas guardas - 4x10", class: localStorage.getItem("486") },
            { id: 487, treino: "Pon / Tan Da - 4x10", class: localStorage.getItem("487") },
            { id: 488, treino: "Revisão aula 1 - 1x10", class: localStorage.getItem("488") },
            { id: 489, treino: "Revisão aula 2 - 2x10", class: localStorage.getItem("489") },
            { id: 490, treino: "Revisao aula 3 - 3x10", class: localStorage.getItem("490") },
        ];
        this.lutas = [
            { id: 491, treino: "Lutas", valor: localStorage.getItem("491") }
        ];
    }
    Nivel7_aula4Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula4Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 484].class !== "checkmark") {
            this.treinosList[id - 484].class = "checkmark";
            this.checado = this.treinosList[id - 484].class;
            localStorage.setItem(this.treinosList[id - 484].id, this.treinosList[id - 484].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 484].class = "";
            localStorage.setItem(this.treinosList[id - 484].id, this.treinosList[id - 484].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula4Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 491].valor++;
        localStorage.setItem(this.lutas[id - 491].id, this.lutas[id - 491].valor);
        if (this.lutas[id - 491].valor === 7) {
            this.toast.create({ message: this.lutas[id - 491].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula4Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 491].valor--;
                        localStorage.setItem(_this.lutas[id - 491].id, _this.lutas[id - 491].valor);
                        _this.toast.create({ message: _this.lutas[id - 491].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula4-n7\aula4-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 4</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content  [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n            <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n                <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n                <label id="treinos" for="{{luta.id}}">\n\n                    <strong> {{ luta.treino }} </strong>\n\n                </label>\n\n                <br>\n\n\n\n                <label>\n\n                    <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                    <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                    <label id="contador">{{ luta.valor }}/7</label>\n\n                </label>\n\n            </ion-card-content>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula4-n7\aula4-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula4Page);
    return Nivel7_aula4Page;
}());

//# sourceMappingURL=aula4-n7.js.map

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula2PageModule", function() { return Nivel7_aula2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula2_n7__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula2PageModule = /** @class */ (function () {
    function Nivel7_aula2PageModule() {
    }
    Nivel7_aula2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula2_n7__["a" /* Nivel7_aula2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula2_n7__["a" /* Nivel7_aula2Page */]),
            ],
        })
    ], Nivel7_aula2PageModule);
    return Nivel7_aula2PageModule;
}());

//# sourceMappingURL=aula2-n7.module.js.map

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula2Page = /** @class */ (function () {
    function Nivel7_aula2Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 470, treino: "Formas", class: localStorage.getItem("470") },
            { id: 471, treino: "Kan Sao, Fook/Tan, Lap Da - 4x10", class: localStorage.getItem("471") },
            { id: 472, treino: "Pak Sao Girando a cintura - 4x10", class: localStorage.getItem("472") },
            { id: 473, treino: "Fook Sao transforma Fak Da, Fook Da (soco baixo) - 4x10", class: localStorage.getItem("473") },
            { id: 474, treino: "Revisão aula 1 - 3x10", class: localStorage.getItem("474") },
        ];
        this.lutas = [
            { id: 475, treino: "Lutas", valor: localStorage.getItem("475") }
        ];
    }
    Nivel7_aula2Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula2Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 470].class !== "checkmark") {
            this.treinosList[id - 470].class = "checkmark";
            this.checado = this.treinosList[id - 470].class;
            localStorage.setItem(this.treinosList[id - 470].id, this.treinosList[id - 470].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 470].class = "";
            localStorage.setItem(this.treinosList[id - 470].id, this.treinosList[id - 470].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula2Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 475].valor++;
        localStorage.setItem(this.lutas[id - 475].id, this.lutas[id - 475].valor);
        if (this.lutas[id - 475].valor === 7) {
            this.toast.create({ message: this.lutas[id - 475].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula2Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 475].valor--;
                        localStorage.setItem(_this.lutas[id - 475].id, _this.lutas[id - 475].valor);
                        _this.toast.create({ message: _this.lutas[id - 475].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula2-n7\aula2-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 2</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content  [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n            <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n                <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n                <label id="treinos" for="{{luta.id}}">\n\n                    <strong> {{ luta.treino }} </strong>\n\n                </label>\n\n                <br>\n\n\n\n                <label>\n\n                    <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                    <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                    <label id="contador">{{ luta.valor }}/7</label>\n\n                </label>\n\n            </ion-card-content>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula2-n7\aula2-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula2Page);
    return Nivel7_aula2Page;
}());

//# sourceMappingURL=aula2-n7.js.map

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula5PageModule", function() { return Nivel7_aula5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula5_n7__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula5PageModule = /** @class */ (function () {
    function Nivel7_aula5PageModule() {
    }
    Nivel7_aula5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula5_n7__["a" /* Nivel7_aula5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula5_n7__["a" /* Nivel7_aula5Page */]),
            ],
        })
    ], Nivel7_aula5PageModule);
    return Nivel7_aula5PageModule;
}());

//# sourceMappingURL=aula5-n7.module.js.map

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula5Page = /** @class */ (function () {
    function Nivel7_aula5Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 492, treino: "Formas", class: localStorage.getItem("492") },
            { id: 493, treino: "Revisão da aula 1 até a aula 4 - 2x10", class: localStorage.getItem("493") },
        ];
        this.lutas = [
            { id: 494, treino: "Lutas", valor: localStorage.getItem("494") }
        ];
    }
    Nivel7_aula5Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula5Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 492].class !== "checkmark") {
            this.treinosList[id - 492].class = "checkmark";
            this.checado = this.treinosList[id - 492].class;
            localStorage.setItem(this.treinosList[id - 492].id, this.treinosList[id - 492].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 492].class = "";
            localStorage.setItem(this.treinosList[id - 492].id, this.treinosList[id - 492].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula5Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 494].valor++;
        localStorage.setItem(this.lutas[id - 494].id, this.lutas[id - 494].valor);
        if (this.lutas[id - 494].valor === 7) {
            this.toast.create({ message: this.lutas[id - 494].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula5Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 494].valor--;
                        localStorage.setItem(_this.lutas[id - 494].id, _this.lutas[id - 494].valor);
                        _this.toast.create({ message: _this.lutas[id - 494].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula5-n7\aula5-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 5</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content  [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n            <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n                <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n                <label id="treinos" for="{{luta.id}}">\n\n                    <strong> {{ luta.treino }} </strong>\n\n                </label>\n\n                <br>\n\n\n\n                <label>\n\n                    <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                    <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                    <label id="contador">{{ luta.valor }}/7</label>\n\n                </label>\n\n            </ion-card-content>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula5-n7\aula5-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula5Page);
    return Nivel7_aula5Page;
}());

//# sourceMappingURL=aula5-n7.js.map

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula8PageModule", function() { return Nivel7_aula8PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula8_n7__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula8PageModule = /** @class */ (function () {
    function Nivel7_aula8PageModule() {
    }
    Nivel7_aula8PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula8_n7__["a" /* Nivel7_aula8Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula8_n7__["a" /* Nivel7_aula8Page */]),
            ],
        })
    ], Nivel7_aula8PageModule);
    return Nivel7_aula8PageModule;
}());

//# sourceMappingURL=aula8-n7.module.js.map

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula8Page = /** @class */ (function () {
    function Nivel7_aula8Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 507, treino: "Formas", class: localStorage.getItem("507") },
            { id: 508, treino: "Kan Sao boneco de madeira (estático) - 4x10", class: localStorage.getItem("508") },
            { id: 509, treino: "Tan + Fak Da / Fok Da (palma) - 4x10", class: localStorage.getItem("509") },
            { id: 510, treino: "Lai Sao / Jut Gerk na base - 4x10", class: localStorage.getItem("510") },
            { id: 511, treino: "Revisão até aula 7 - 1x5", class: localStorage.getItem("511") },
        ];
        this.lutas = [
            { id: 512, treino: "Lutas", valor: localStorage.getItem("512") }
        ];
    }
    Nivel7_aula8Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula8Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 507].class !== "checkmark") {
            this.treinosList[id - 507].class = "checkmark";
            this.checado = this.treinosList[id - 507].class;
            localStorage.setItem(this.treinosList[id - 507].id, this.treinosList[id - 507].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 507].class = "";
            localStorage.setItem(this.treinosList[id - 507].id, this.treinosList[id - 507].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula8Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 512].valor++;
        localStorage.setItem(this.lutas[id - 512].id, this.lutas[id - 512].valor);
        if (this.lutas[id - 512].valor === 7) {
            this.toast.create({ message: this.lutas[id - 512].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula8Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 512].valor--;
                        localStorage.setItem(_this.lutas[id - 512].id, _this.lutas[id - 512].valor);
                        _this.toast.create({ message: _this.lutas[id - 512].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula8-n7\aula8-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 8</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content  [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n            <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n                <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n                <label id="treinos" for="{{luta.id}}">\n\n                    <strong> {{ luta.treino }} </strong>\n\n                </label>\n\n                <br>\n\n\n\n                <label>\n\n                    <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                    <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                    <label id="contador">{{ luta.valor }}/7</label>\n\n                </label>\n\n            </ion-card-content>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula8-n7\aula8-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula8Page);
    return Nivel7_aula8Page;
}());

//# sourceMappingURL=aula8-n7.js.map

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula6PageModule", function() { return Nivel7_aula6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula6_n7__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula6PageModule = /** @class */ (function () {
    function Nivel7_aula6PageModule() {
    }
    Nivel7_aula6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula6_n7__["a" /* Nivel7_aula6Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula6_n7__["a" /* Nivel7_aula6Page */]),
            ],
        })
    ], Nivel7_aula6PageModule);
    return Nivel7_aula6PageModule;
}());

//# sourceMappingURL=aula6-n7.module.js.map

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula6Page = /** @class */ (function () {
    function Nivel7_aula6Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 495, treino: "Formas", class: localStorage.getItem("495") },
            { id: 496, treino: "Bai Jee - 4x10", class: localStorage.getItem("496") },
            { id: 497, treino: "Bai Jee + Pon Da (palma baixa) Invertido - 4x10", class: localStorage.getItem("497") },
            { id: 498, treino: "Kan Sao invertido + Po Pai Chang(1) - 4x10", class: localStorage.getItem("498") },
            { id: 499, treino: "Repetir aula 5 1x10", class: localStorage.getItem("499") },
        ];
        this.lutas = [
            { id: 500, treino: "Lutas", valor: localStorage.getItem("500") }
        ];
    }
    Nivel7_aula6Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula6Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 495].class !== "checkmark") {
            this.treinosList[id - 495].class = "checkmark";
            this.checado = this.treinosList[id - 495].class;
            localStorage.setItem(this.treinosList[id - 495].id, this.treinosList[id - 495].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 495].class = "";
            localStorage.setItem(this.treinosList[id - 495].id, this.treinosList[id - 495].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula6Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 500].valor++;
        localStorage.setItem(this.lutas[id - 500].id, this.lutas[id - 500].valor);
        if (this.lutas[id - 500].valor === 7) {
            this.toast.create({ message: this.lutas[id - 500].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula6Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 500].valor--;
                        localStorage.setItem(_this.lutas[id - 500].id, _this.lutas[id - 500].valor);
                        _this.toast.create({ message: _this.lutas[id - 500].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula6-n7\aula6-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 6</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content  [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n            <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n                <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n                <label id="treinos" for="{{luta.id}}">\n\n                    <strong> {{ luta.treino }} </strong>\n\n                </label>\n\n                <br>\n\n\n\n                <label>\n\n                    <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                    <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                    <label id="contador">{{ luta.valor }}/7</label>\n\n                </label>\n\n            </ion-card-content>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula6-n7\aula6-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula6Page);
    return Nivel7_aula6Page;
}());

//# sourceMappingURL=aula6-n7.js.map

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrenteN_7PageModule", function() { return FrenteN_7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frente_n7__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n7_aula1_n7_aula1_n7_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n7_aula2_n7_aula2_n7_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n7_aula3_n7_aula3_n7_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n7_aula4_n7_aula4_n7_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n7_aula5_n7_aula5_n7_module__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n7_aula6_n7_aula6_n7_module__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n7_aula7_n7_aula7_n7_module__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n7_aula8_n7_aula8_n7_module__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n7_aula9_n7_aula9_n7_module__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n7_aula10_n7_aula10_n7_module__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n7_aula11_n7_aula11_n7_module__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aulas_n7_aula12_n7_aula12_n7_module__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var FrenteN_7PageModule = /** @class */ (function () {
    function FrenteN_7PageModule() {
    }
    FrenteN_7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__frente_n7__["a" /* FrenteN_7Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__frente_n7__["a" /* FrenteN_7Page */]),
                __WEBPACK_IMPORTED_MODULE_3__aulas_n7_aula1_n7_aula1_n7_module__["Nivel7_aula1PageModule"],
                __WEBPACK_IMPORTED_MODULE_4__aulas_n7_aula2_n7_aula2_n7_module__["Nivel7_aula2PageModule"],
                __WEBPACK_IMPORTED_MODULE_5__aulas_n7_aula3_n7_aula3_n7_module__["Nivel7_aula3PageModule"],
                __WEBPACK_IMPORTED_MODULE_6__aulas_n7_aula4_n7_aula4_n7_module__["Nivel7_aula4PageModule"],
                __WEBPACK_IMPORTED_MODULE_7__aulas_n7_aula5_n7_aula5_n7_module__["Nivel7_aula5PageModule"],
                __WEBPACK_IMPORTED_MODULE_8__aulas_n7_aula6_n7_aula6_n7_module__["Nivel7_aula6PageModule"],
                __WEBPACK_IMPORTED_MODULE_9__aulas_n7_aula7_n7_aula7_n7_module__["Nivel7_aula7PageModule"],
                __WEBPACK_IMPORTED_MODULE_10__aulas_n7_aula8_n7_aula8_n7_module__["Nivel7_aula8PageModule"],
                __WEBPACK_IMPORTED_MODULE_11__aulas_n7_aula9_n7_aula9_n7_module__["Nivel7_aula9PageModule"],
                __WEBPACK_IMPORTED_MODULE_12__aulas_n7_aula10_n7_aula10_n7_module__["Nivel7_aula10PageModule"],
                __WEBPACK_IMPORTED_MODULE_13__aulas_n7_aula11_n7_aula11_n7_module__["Nivel7_aula11PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__aulas_n7_aula12_n7_aula12_n7_module__["Nivel7_aula12PageModule"]
            ],
        })
    ], FrenteN_7PageModule);
    return FrenteN_7PageModule;
}());

//# sourceMappingURL=frente-n7.module.js.map

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrenteN_7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aulas_n7_aula1_n7_aula1_n7__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n7_aula2_n7_aula2_n7__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n7_aula3_n7_aula3_n7__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n7_aula4_n7_aula4_n7__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n7_aula5_n7_aula5_n7__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n7_aula6_n7_aula6_n7__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n7_aula7_n7_aula7_n7__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n7_aula8_n7_aula8_n7__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n7_aula9_n7_aula9_n7__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n7_aula10_n7_aula10_n7__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n7_aula11_n7_aula11_n7__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n7_aula12_n7_aula12_n7__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FrenteN_7Page = /** @class */ (function () {
    function FrenteN_7Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aulas = [
            { aula: "Aula 01" },
            { aula: "Aula 02" },
            { aula: "Aula 03" },
            { aula: "Aula 04" },
            { aula: "Aula 05" },
            { aula: "Aula 06" },
            { aula: "Aula 07" },
            { aula: "Aula 08" },
            { aula: "Aula 09" },
            { aula: "Aula 10" },
            { aula: "Aula 11" },
            { aula: "Aula 12" },
        ];
    }
    FrenteN_7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Nivel_1Page');
    };
    FrenteN_7Page.prototype.itemSelected = function (aula) {
        console.log(aula.aula);
        switch (aula.aula) {
            case "Aula 01":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aulas_n7_aula1_n7_aula1_n7__["a" /* Nivel7_aula1Page */]);
                break;
            case "Aula 02":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aulas_n7_aula2_n7_aula2_n7__["a" /* Nivel7_aula2Page */]);
                break;
            case "Aula 03":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aulas_n7_aula3_n7_aula3_n7__["a" /* Nivel7_aula3Page */]);
                break;
            case "Aula 04":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aulas_n7_aula4_n7_aula4_n7__["a" /* Nivel7_aula4Page */]);
                break;
            case "Aula 05":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__aulas_n7_aula5_n7_aula5_n7__["a" /* Nivel7_aula5Page */]);
                break;
            case "Aula 06":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__aulas_n7_aula6_n7_aula6_n7__["a" /* Nivel7_aula6Page */]);
                break;
            case "Aula 07":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__aulas_n7_aula7_n7_aula7_n7__["a" /* Nivel7_aula7Page */]);
                break;
            case "Aula 08":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__aulas_n7_aula8_n7_aula8_n7__["a" /* Nivel7_aula8Page */]);
                break;
            case "Aula 09":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__aulas_n7_aula9_n7_aula9_n7__["a" /* Nivel7_aula9Page */]);
                break;
            case "Aula 10":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__aulas_n7_aula10_n7_aula10_n7__["a" /* Nivel7_aula10Page */]);
                break;
            case "Aula 11":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__aulas_n7_aula11_n7_aula11_n7__["a" /* Nivel7_aula11Page */]);
                break;
            case "Aula 12":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__aulas_n7_aula12_n7_aula12_n7__["a" /* Nivel7_aula12Page */]);
                break;
        }
    };
    FrenteN_7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\frente-n7.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Nível 7</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-list inset>\n\n      <button class="list" ion-item \n\n        *ngFor="let aula of aulas" \n\n        (click)="itemSelected(aula)">\n\n          {{ aula.aula }}\n\n      </button> \n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\frente-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FrenteN_7Page);
    return FrenteN_7Page;
}());

//# sourceMappingURL=frente-n7.js.map

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula7Page = /** @class */ (function () {
    function Nivel7_aula7Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 501, treino: "Formas", class: localStorage.getItem("501") },
            { id: 502, treino: "Pon Sao / Po Pai Chang por dentro(2) - 4x10", class: localStorage.getItem("502") },
            { id: 503, treino: "Kan Sao / Po Pai Chang(3) - 4x10", class: localStorage.getItem("503") },
            { id: 504, treino: "Kan Sao / Po Pai (por fora) Chang(4) - 4x10", class: localStorage.getItem("504") },
            { id: 505, treino: "Revisão até aula 6 - 1x10", class: localStorage.getItem("505") },
        ];
        this.lutas = [
            { id: 506, treino: "Lutas", valor: localStorage.getItem("506") }
        ];
    }
    Nivel7_aula7Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula7Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 501].class !== "checkmark") {
            this.treinosList[id - 501].class = "checkmark";
            this.checado = this.treinosList[id - 501].class;
            localStorage.setItem(this.treinosList[id - 501].id, this.treinosList[id - 501].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 501].class = "";
            localStorage.setItem(this.treinosList[id - 501].id, this.treinosList[id - 501].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula7Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 506].valor++;
        localStorage.setItem(this.lutas[id - 506].id, this.lutas[id - 506].valor);
        if (this.lutas[id - 506].valor === 7) {
            this.toast.create({ message: this.lutas[id - 506].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula7Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 506].valor--;
                        localStorage.setItem(_this.lutas[id - 506].id, _this.lutas[id - 506].valor);
                        _this.toast.create({ message: _this.lutas[id - 506].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula7-n7\aula7-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 7</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content  [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n            <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n                <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n                <label id="treinos" for="{{luta.id}}">\n\n                    <strong> {{ luta.treino }} </strong>\n\n                </label>\n\n                <br>\n\n\n\n                <label>\n\n                    <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                    <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                    <label id="contador">{{ luta.valor }}/7</label>\n\n                </label>\n\n            </ion-card-content>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula7-n7\aula7-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula7Page);
    return Nivel7_aula7Page;
}());

//# sourceMappingURL=aula7-n7.js.map

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel7_aula9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel7_aula9Page = /** @class */ (function () {
    function Nivel7_aula9Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 513, treino: "Formas", class: localStorage.getItem("513") },
            { id: 514, treino: "Kan Sao invertido alternando - 4x10", class: localStorage.getItem("514") },
            { id: 515, treino: "Guan Sao invertido / Tan Sao palma - 4x10", class: localStorage.getItem("515") },
            { id: 516, treino: "San Ding Gerk - 4x10", class: localStorage.getItem("516") },
            { id: 517, treino: "Revisão até aula 8 - 1x10", class: localStorage.getItem("517") },
        ];
        this.lutas = [
            { id: 518, treino: "Lutas", valor: localStorage.getItem("518") }
        ];
    }
    Nivel7_aula9Page.prototype.ionViewDidLoad = function () {
    };
    Nivel7_aula9Page.prototype.salvar = function (id) {
        if (this.treinosList[id - 513].class !== "checkmark") {
            this.treinosList[id - 513].class = "checkmark";
            this.checado = this.treinosList[id - 513].class;
            localStorage.setItem(this.treinosList[id - 513].id, this.treinosList[id - 513].class);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        else {
            this.treinosList[id - 513].class = "";
            localStorage.setItem(this.treinosList[id - 513].id, this.treinosList[id - 513].class);
            this.checado = localStorage.getItem(id);
            this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
        }
        return this.treinosList;
    };
    Nivel7_aula9Page.prototype.incrementLutas = function (id) {
        this.lutas[id - 518].valor++;
        localStorage.setItem(this.lutas[id - 518].id, this.lutas[id - 518].valor);
        if (this.lutas[id - 518].valor === 7) {
            this.toast.create({ message: this.lutas[id - 518].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Nivel7_aula9Page.prototype.decrementLutas = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover uma luta da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.lutas[id - 518].valor--;
                        localStorage.setItem(_this.lutas[id - 518].id, _this.lutas[id - 518].valor);
                        _this.toast.create({ message: _this.lutas[id - 518].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Nivel7_aula9Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-frente-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula9-n7\aula9-n7.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Aula 9</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n    <ion-card class="list" *ngFor="let exercicio of treinosList">\n\n        <ion-card-content  [ngClass]="exercicio.class">\n\n            <input type="checkbox" id="{{exercicio.id}}" name="active" (click)="salvar(exercicio.id)">\n\n            <ion-icon [name]="exercicio.class"></ion-icon>\n\n            <label for="{{exercicio.id}}"> {{ exercicio.treino }} </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="list" *ngFor="let luta of lutas">\n\n            <ion-card-content [ngClass]="luta.valor>6 ?\'checkmark\':\'\'">\n\n                <ion-icon [name]="luta.valor>6 ?\'checkmark\':\'\'"></ion-icon>\n\n                <label id="treinos" for="{{luta.id}}">\n\n                    <strong> {{ luta.treino }} </strong>\n\n                </label>\n\n                <br>\n\n\n\n                <label>\n\n                    <button ion-button color="danger" (click)="decrementLutas(luta.id)" [disabled]="luta.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                    <button ion-button color="secondary" (click)="incrementLutas(luta.id)"> + </button>\n\n                    <label id="contador">{{ luta.valor }}/7</label>\n\n                </label>\n\n            </ion-card-content>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\frente\aulas-n7\aula9-n7\aula9-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Nivel7_aula9Page);
    return Nivel7_aula9Page;
}());

//# sourceMappingURL=aula9-n7.js.map

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula7PageModule", function() { return Nivel7_aula7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula7_n7__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula7PageModule = /** @class */ (function () {
    function Nivel7_aula7PageModule() {
    }
    Nivel7_aula7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula7_n7__["a" /* Nivel7_aula7Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula7_n7__["a" /* Nivel7_aula7Page */]),
            ],
        })
    ], Nivel7_aula7PageModule);
    return Nivel7_aula7PageModule;
}());

//# sourceMappingURL=aula7-n7.module.js.map

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel7_aula9PageModule", function() { return Nivel7_aula9PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula9_n7__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nivel7_aula9PageModule = /** @class */ (function () {
    function Nivel7_aula9PageModule() {
    }
    Nivel7_aula9PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aula9_n7__["a" /* Nivel7_aula9Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula9_n7__["a" /* Nivel7_aula9Page */]),
            ],
        })
    ], Nivel7_aula9PageModule);
    return Nivel7_aula9PageModule;
}());

//# sourceMappingURL=aula9-n7.module.js.map

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel_7PageModule", function() { return Nivel_7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivel_7__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frente_frente_n7_module__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabls__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__verso_verso_n7_module__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Nivel_7PageModule = /** @class */ (function () {
    function Nivel_7PageModule() {
    }
    Nivel_7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nivel_7__["a" /* Nivel_7Page */],
                __WEBPACK_IMPORTED_MODULE_4__tabs_tabls__["a" /* TabsN_7Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nivel_7__["a" /* Nivel_7Page */]),
                __WEBPACK_IMPORTED_MODULE_3__frente_frente_n7_module__["FrenteN_7PageModule"],
                __WEBPACK_IMPORTED_MODULE_5__verso_verso_n7_module__["VersoN_7PageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__tabs_tabls__["a" /* TabsN_7Page */]
            ],
        })
    ], Nivel_7PageModule);
    return Nivel_7PageModule;
}());

//# sourceMappingURL=nivel-7.module.js.map

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel_7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabls__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel_7Page = /** @class */ (function () {
    function Nivel_7Page(navCtrl, navParams, platform, statusBar, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__tabs_tabls__["a" /* TabsN_7Page */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    Nivel_7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Nivel_1Page');
    };
    Nivel_7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\nivel-7.html"*/'<!--\n  Generated template for the Nivel_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nível 7</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\nivel-7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Nivel_7Page);
    return Nivel_7Page;
}());

//# sourceMappingURL=nivel-7.js.map

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsN_7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frente_frente_n7__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verso_verso_n7__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsN_7Page = /** @class */ (function () {
    function TabsN_7Page() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__frente_frente_n7__["a" /* FrenteN_7Page */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__verso_verso_n7__["a" /* VersoN_7Page */];
    }
    TabsN_7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\tabs\tabs-n7.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Frente" tabIcon="paper"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Verso" tabIcon="paper"></ion-tab>\n\n  </ion-tabs>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\tabs\tabs-n7.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsN_7Page);
    return TabsN_7Page;
}());

//# sourceMappingURL=tabls.js.map

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersoN_7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VersoN_7Page = /** @class */ (function () {
    function VersoN_7Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.aulasImpares = [
            { id: 532, treino: "Boneco de Madeira Livre - 3min", valor: localStorage.getItem("532") },
            { id: 533, treino: "Fluencia Indefinida - 3 min", valor: localStorage.getItem("533") },
            { id: 534, treino: "Intensivo contra Faca - 3min", valor: localStorage.getItem("534") },
            { id: 535, treino: "Chi Sao - 3min", valor: localStorage.getItem("535") },
            { id: 536, treino: "Luta contra Vários Oponentes - 3min", valor: localStorage.getItem("536") },
        ];
        this.aulasPares = [
            { id: 537, treino: "Boneco de Madeira Livre - 3min", valor: localStorage.getItem("537") },
            { id: 538, treino: "Intensivo contra Chutes - 3 min", valor: localStorage.getItem("538") },
            { id: 539, treino: "Intensivo contra Bastão - 3min", valor: localStorage.getItem("539") },
            { id: 540, treino: "Chi Gerk ", valor: localStorage.getItem("540") },
            { id: 541, treino: "Luta com Faca - 3min", valor: localStorage.getItem("541") },
        ];
    }
    VersoN_7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Verso_Page');
    };
    VersoN_7Page.prototype.incrementAulasImpares = function (id) {
        this.aulasImpares[id - 532].valor++;
        localStorage.setItem(this.aulasImpares[id - 532].id, this.aulasImpares[id - 532].valor);
        if (this.aulasImpares[id - 532].valor === 6) {
            this.toast.create({ message: this.aulasImpares[id - 532].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    VersoN_7Page.prototype.decrementAulasImpares = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover um treino da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.aulasImpares[id - 532].valor--;
                        localStorage.setItem(_this.aulasImpares[id - 532].id, _this.aulasImpares[id - 532].valor);
                        _this.toast.create({ message: _this.aulasImpares[id - 532].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    VersoN_7Page.prototype.incrementAulasPares = function (id) {
        this.aulasPares[id - 537].valor++;
        localStorage.setItem(this.aulasPares[id - 537].id, this.aulasPares[id - 537].valor);
        if (this.aulasPares[id - 537].valor === 6) {
            this.toast.create({ message: this.aulasPares[id - 537].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    VersoN_7Page.prototype.decrementAulasPares = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover um treino da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.aulasPares[id - 537].valor--;
                        localStorage.setItem(_this.aulasPares[id - 537].id, _this.aulasPares[id - 537].valor);
                        _this.toast.create({ message: _this.aulasPares[id - 537].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    VersoN_7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verso-n7',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\verso\verso-n7.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Nível 7</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="body" padding>\n\n        <ion-card class="conteudo">\n\n            <ion-card-header>\n\n                <strong>Nas Aulas Ímpares</strong>\n\n            </ion-card-header>\n\n            <ion-card class="list" *ngFor="let impar of aulasImpares">\n\n\n\n                <ion-card-content [ngClass]="impar.valor>5 ?\'checkmark\':\'\'">\n\n                    <ion-icon [name]="impar.valor>5 ?\'checkmark\':\'\'"></ion-icon>\n\n                    <label id="treinos" for="{{impar.treino}}">\n\n                        <strong> {{ impar.treino }} </strong>\n\n                    </label>\n\n                    <br>\n\n\n\n                    <label>\n\n                        <button ion-button color="danger" (click)="decrementAulasImpares(impar.id)" [disabled]="impar.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                        <button ion-button color="secondary" (click)="incrementAulasImpares(impar.id)"> + </button>\n\n                        <label id="contador">{{ impar.valor }}/6</label>\n\n                    </label>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-card>\n\n\n\n        <ion-card class="conteudo">\n\n            <ion-card-header>\n\n                <strong>Nas Aulas Pares</strong>\n\n            </ion-card-header>\n\n            <ion-card class="list" *ngFor="let par of aulasPares">\n\n                <ion-card-content [ngClass]="par.valor>5 ?\'checkmark\':\'\'">\n\n                    <ion-icon [name]="par.valor>5 ?\'checkmark\':\'\'"></ion-icon>\n\n                    <label id="treinos" for="{{par.treino}}">\n\n                        <strong> {{ par.treino }} </strong>\n\n                    </label>\n\n                    <br>\n\n\n\n                    <label>\n\n                        <button ion-button color="danger" (click)="decrementAulasPares(par.id)" [disabled]="par.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                        <button ion-button color="secondary" (click)="incrementAulasPares(par.id)"> + </button>\n\n                        <label id="contador">{{ par.valor }}/6</label>\n\n                    </label>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-7\verso\verso-n7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], VersoN_7Page);
    return VersoN_7Page;
}());

//# sourceMappingURL=verso-n7.js.map

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersoN_7PageModule", function() { return VersoN_7PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verso_n7__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VersoN_7PageModule = /** @class */ (function () {
    function VersoN_7PageModule() {
    }
    VersoN_7PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verso_n7__["a" /* VersoN_7Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verso_n7__["a" /* VersoN_7Page */]),
            ],
        })
    ], VersoN_7PageModule);
    return VersoN_7PageModule;
}());

//# sourceMappingURL=verso-n7.module.js.map

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fase_1PageModule", function() { return Fase_1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fase_1__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Fase_1PageModule = /** @class */ (function () {
    function Fase_1PageModule() {
    }
    Fase_1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fase_1__["a" /* Fase_1Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fase_1__["a" /* Fase_1Page */]),
            ],
        })
    ], Fase_1PageModule);
    return Fase_1PageModule;
}());

//# sourceMappingURL=fase-1.module.js.map

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fase_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Fase_1Page = /** @class */ (function () {
    function Fase_1Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 542, treino: "Siu lim Tao, Chum Kiu. Biu Jee, Forma Pessoal e Mook Yan Jang", valor: localStorage.getItem("542") },
            { id: 543, treino: "Passo E-D em Mah Bo iniciando com a perna frontal - 40x cada lado", valor: localStorage.getItem("543") },
            { id: 544, treino: "Jin Kuen em Mah Bo 4F/4T - 10x cada lado", valor: localStorage.getItem("544") },
            { id: 545, treino: "Número 7 - 40x cada lado", valor: localStorage.getItem("545") },
            { id: 546, treino: "Luta 1x1 - 3min", valor: localStorage.getItem("546") },
            { id: 547, treino: "Avança e recua em Mah Bo - 40x cada lado", valor: localStorage.getItem("547") },
            { id: 548, treino: "Passo E-D em Mah Bo iniciando com a perna de trás - 40x cada lado", valor: localStorage.getItem("548") },
            { id: 549, treino: "Din Kuen em Gong Bo / recuar em Mah Bo - 40x cada lado", valor: localStorage.getItem("549") },
            { id: 550, treino: "Torcer bastão cima/baixo - 40x cada lado", valor: localStorage.getItem("550") },
            { id: 551, treino: "Luta Faca vs Faca - Melhor de três", valor: localStorage.getItem("551") },
        ];
    }
    Fase_1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Verso_Page');
    };
    Fase_1Page.prototype.incrementTreinosList = function (id) {
        this.treinosList[id - 542].valor++;
        localStorage.setItem(this.treinosList[id - 542].id, this.treinosList[id - 542].valor);
        if (this.treinosList[id - 542].valor === 12) {
            this.toast.create({ message: this.treinosList[id - 542].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Fase_1Page.prototype.decrementTreinosList = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover um treino da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.treinosList[id - 542].valor--;
                        localStorage.setItem(_this.treinosList[id - 542].id, _this.treinosList[id - 542].valor);
                        _this.toast.create({ message: _this.treinosList[id - 542].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Fase_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-8',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-8\fase-1\fase-1.html"*/'<ion-header>\n\n\n\n    <ion-navbar no-border-bottom>\n\n        <ion-title>Nível 8</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="body">\n\n    <ion-card class="list" *ngFor="let treino of treinosList">\n\n\n\n        <ion-card-content [ngClass]="treino.valor>11 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="treino.valor>11 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{treino.treino}}">\n\n                <strong> {{ treino.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementTreinosList(treino.id)" [disabled]="treino.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementTreinosList(treino.id)"> + </button>\n\n                <label id="contador">{{ treino.valor }}/12</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-8\fase-1\fase-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Fase_1Page);
    return Fase_1Page;
}());

//# sourceMappingURL=fase-1.js.map

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fase_3PageModule", function() { return Fase_3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fase_3__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Fase_3PageModule = /** @class */ (function () {
    function Fase_3PageModule() {
    }
    Fase_3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fase_3__["a" /* Fase_3Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fase_3__["a" /* Fase_3Page */]),
            ],
        })
    ], Fase_3PageModule);
    return Fase_3PageModule;
}());

//# sourceMappingURL=fase-3.module.js.map

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fase_3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Fase_3Page = /** @class */ (function () {
    function Fase_3Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 666, treino: "Siu lim Tao, Chum Kiu. Biu Jee, Forma Pessoal e Mook Yan Jang", valor: localStorage.getItem("666") },
            { id: 667, treino: "Treino Jut Kwan / Tai Kwan - 40x cada lado cada papel", valor: localStorage.getItem("667") },
            { id: 668, treino: "Treino Jut Kwan / Tai Kwan - 10x cada lado cada papel", valor: localStorage.getItem("668") },
            { id: 669, treino: "Chi Kwan - Rounds de 3min", valor: localStorage.getItem("669") },
            { id: 670, treino: "Luta 1x1 - 3min", valor: localStorage.getItem("670") },
            { id: 671, treino: "Look Dim Boon Kwan", valor: localStorage.getItem("671") },
            { id: 672, treino: "Treino Tan Kwan Dentro/Fora - 40x cada lado cada papel", valor: localStorage.getItem("672") },
            { id: 673, treino: "Treino Tan Kwan Dentro/Fora - 40x cada lado cada papel", valor: localStorage.getItem("673") },
            { id: 674, treino: "Luta Bastão vs Bastão - melhor de 3", valor: localStorage.getItem("674") },
            { id: 675, treino: "Luta Faca vs Faca - melhor de 3", valor: localStorage.getItem("675") },
        ];
    }
    Fase_3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Verso_Page');
    };
    Fase_3Page.prototype.incrementTreinosList = function (id) {
        this.treinosList[id - 666].valor++;
        localStorage.setItem(this.treinosList[id - 666].id, this.treinosList[id - 666].valor);
        if (this.treinosList[id - 666].valor === 12) {
            this.toast.create({ message: this.treinosList[id - 666].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Fase_3Page.prototype.decrementTreinosList = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover um treino da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.treinosList[id - 666].valor--;
                        localStorage.setItem(_this.treinosList[id - 666].id, _this.treinosList[id - 666].valor);
                        _this.toast.create({ message: _this.treinosList[id - 666].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Fase_3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-8',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-8\fase-3\fase-3.html"*/'<ion-header>\n\n\n\n    <ion-navbar no-border-bottom>\n\n        <ion-title>Nível 8</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="body">\n\n    <ion-card class="list" *ngFor="let treino of treinosList">\n\n\n\n        <ion-card-content [ngClass]="treino.valor>11 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="treino.valor>11 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{treino.treino}}">\n\n                <strong> {{ treino.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementTreinosList(treino.id)" [disabled]="treino.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementTreinosList(treino.id)"> + </button>\n\n                <label id="contador">{{ treino.valor }}/12</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-8\fase-3\fase-3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Fase_3Page);
    return Fase_3Page;
}());

//# sourceMappingURL=fase-3.js.map

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fase_2PageModule", function() { return Fase_2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fase_2__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Fase_2PageModule = /** @class */ (function () {
    function Fase_2PageModule() {
    }
    Fase_2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fase_2__["a" /* Fase_2Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fase_2__["a" /* Fase_2Page */]),
            ],
        })
    ], Fase_2PageModule);
    return Fase_2PageModule;
}());

//# sourceMappingURL=fase-2.module.js.map

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fase_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Fase_2Page = /** @class */ (function () {
    function Fase_2Page(navCtrl, navParams, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.treinosList = [
            { id: 552, treino: "Siu lim Tao, Chum Kiu. Biu Jee, Forma Pessoal e Mook Yan Jang", valor: localStorage.getItem("552") },
            { id: 553, treino: "Número 7 - 40x cada lado", valor: localStorage.getItem("553") },
            { id: 554, treino: "Biu Kwan em Mah Bo 4F/4T - 10x cada lado", valor: localStorage.getItem("554") },
            { id: 555, treino: "Jut Kwan / Tai Kwan - 40x cada lado", valor: localStorage.getItem("555") },
            { id: 556, treino: "Lau Soi - 40x cada lado", valor: localStorage.getItem("556") },
            { id: 557, treino: "Dai Biu Kwan - 40x cada lado", valor: localStorage.getItem("557") },
            { id: 558, treino: "Luta 1x1 - 3min", valor: localStorage.getItem("558") },
            { id: 559, treino: "Look Dim Boon Kwan", valor: localStorage.getItem("559") },
            { id: 560, treino: "Torcer Bastão cima/baixo - 40x cada lado", valor: localStorage.getItem("560") },
            { id: 561, treino: "Biu Kwan em Gong Bo / Tai Kwan em Mah Bo - 40x cada lado", valor: localStorage.getItem("561") },
            { id: 562, treino: "Tan Kwan dentro/fora - 40x cada lado", valor: localStorage.getItem("562") },
            { id: 563, treino: "Lan Kwan - 40x cada lado", valor: localStorage.getItem("563") },
            { id: 564, treino: "Bloqueia/Ataca 4 pontos - 10x cada lado", valor: localStorage.getItem("564") },
            { id: 565, treino: "Luta Faca vs Faca - melhor de três", valor: localStorage.getItem("565") },
        ];
    }
    Fase_2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Verso_Page');
    };
    Fase_2Page.prototype.incrementTreinosList = function (id) {
        this.treinosList[id - 552].valor++;
        localStorage.setItem(this.treinosList[id - 552].id, this.treinosList[id - 552].valor);
        if (this.treinosList[id - 552].valor === 12) {
            this.toast.create({ message: this.treinosList[id - 552].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
        }
    };
    Fase_2Page.prototype.decrementTreinosList = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Remover',
            message: "Tem certeza que deseja remover um treino da lista?",
            buttons: [
                {
                    text: 'Não',
                    handler: function (data) {
                        _this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
                    }
                },
                {
                    text: 'Sim',
                    handler: function (data) {
                        _this.treinosList[id - 552].valor--;
                        localStorage.setItem(_this.treinosList[id - 552].id, _this.treinosList[id - 552].valor);
                        _this.toast.create({ message: _this.treinosList[id - 552].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
                    }
                }
            ]
        });
        prompt.present();
    };
    Fase_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-8',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-8\fase-2\fase-2.html"*/'<ion-header>\n\n\n\n    <ion-navbar no-border-bottom>\n\n        <ion-title>Nível 8</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="body">\n\n    <ion-card class="list" *ngFor="let treino of treinosList">\n\n\n\n        <ion-card-content [ngClass]="treino.valor>11 ?\'checkmark\':\'\'">\n\n            <ion-icon [name]="treino.valor>11 ?\'checkmark\':\'\'"></ion-icon>\n\n            <label id="treinos" for="{{treino.treino}}">\n\n                <strong> {{ treino.treino }} </strong>\n\n            </label>\n\n            <br>\n\n\n\n            <label>\n\n                <button ion-button color="danger" (click)="decrementTreinosList(treino.id)" [disabled]="treino.valor>0 ?\'\':\'disabled\'"> - </button>\n\n                <button ion-button color="secondary" (click)="incrementTreinosList(treino.id)"> + </button>\n\n                <label id="contador">{{ treino.valor }}/12</label>\n\n            </label>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-8\fase-2\fase-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Fase_2Page);
    return Fase_2Page;
}());

//# sourceMappingURL=fase-2.js.map

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel_2PageModule", function() { return Nivel_2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivel_2__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n2_aula1_n2_aula1_n2_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n2_aula2_n2_aula2_n2_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n2_aula3_n2_aula3_n2_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n2_aula4_n2_aula4_n2_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n2_aula5_n2_aula5_n2_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n2_aula6_n2_aula6_n2_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n2_aula7_n2_aula7_n2_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n2_aula8_n2_aula8_n2_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n2_aula9_n2_aula9_n2_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n2_aula10_n2_aula10_n2_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n2_aula11_n2_aula11_n2_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aulas_n2_aula12_n2_aula12_n2_module__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var Nivel_2PageModule = /** @class */ (function () {
    function Nivel_2PageModule() {
    }
    Nivel_2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nivel_2__["a" /* Nivel_2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nivel_2__["a" /* Nivel_2Page */]),
                __WEBPACK_IMPORTED_MODULE_3__aulas_n2_aula1_n2_aula1_n2_module__["Nivel2_aula1PageModule"],
                __WEBPACK_IMPORTED_MODULE_4__aulas_n2_aula2_n2_aula2_n2_module__["Nivel2_aula2PageModule"],
                __WEBPACK_IMPORTED_MODULE_5__aulas_n2_aula3_n2_aula3_n2_module__["Nivel2_aula3PageModule"],
                __WEBPACK_IMPORTED_MODULE_6__aulas_n2_aula4_n2_aula4_n2_module__["Nivel2_aula4PageModule"],
                __WEBPACK_IMPORTED_MODULE_7__aulas_n2_aula5_n2_aula5_n2_module__["Nivel2_aula5PageModule"],
                __WEBPACK_IMPORTED_MODULE_8__aulas_n2_aula6_n2_aula6_n2_module__["Nivel2_aula6PageModule"],
                __WEBPACK_IMPORTED_MODULE_9__aulas_n2_aula7_n2_aula7_n2_module__["Nivel2_aula7PageModule"],
                __WEBPACK_IMPORTED_MODULE_10__aulas_n2_aula8_n2_aula8_n2_module__["Nivel2_aula8PageModule"],
                __WEBPACK_IMPORTED_MODULE_11__aulas_n2_aula9_n2_aula9_n2_module__["Nivel2_aula9PageModule"],
                __WEBPACK_IMPORTED_MODULE_12__aulas_n2_aula10_n2_aula10_n2_module__["Nivel2_aula10PageModule"],
                __WEBPACK_IMPORTED_MODULE_13__aulas_n2_aula11_n2_aula11_n2_module__["Nivel2_aula11PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__aulas_n2_aula12_n2_aula12_n2_module__["Nivel2_aula12PageModule"]
            ],
        })
    ], Nivel_2PageModule);
    return Nivel_2PageModule;
}());

//# sourceMappingURL=nivel-2.module.js.map

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aulas_n2_aula1_n2_aula1_n2__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aulas_n2_aula2_n2_aula2_n2__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aulas_n2_aula3_n2_aula3_n2__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aulas_n2_aula4_n2_aula4_n2__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aulas_n2_aula5_n2_aula5_n2__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aulas_n2_aula6_n2_aula6_n2__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aulas_n2_aula7_n2_aula7_n2__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aulas_n2_aula8_n2_aula8_n2__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aulas_n2_aula9_n2_aula9_n2__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aulas_n2_aula10_n2_aula10_n2__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aulas_n2_aula11_n2_aula11_n2__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aulas_n2_aula12_n2_aula12_n2__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel_2Page = /** @class */ (function () {
    function Nivel_2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aulas = [
            { aula: "Aula 01" },
            { aula: "Aula 02" },
            { aula: "Aula 03" },
            { aula: "Aula 04" },
            { aula: "Aula 05" },
            { aula: "Aula 06" },
            { aula: "Aula 07" },
            { aula: "Aula 08" },
            { aula: "Aula 09" },
            { aula: "Aula 10" },
            { aula: "Aula 11" },
            { aula: "Aula 12" },
        ];
    }
    Nivel_2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Nivel_1Page');
    };
    Nivel_2Page.prototype.itemSelected = function (aula) {
        console.log(aula.aula);
        switch (aula.aula) {
            case "Aula 01":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aulas_n2_aula1_n2_aula1_n2__["a" /* Nivel2_aula1Page */]);
                break;
            case "Aula 02":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aulas_n2_aula2_n2_aula2_n2__["a" /* Nivel2_aula2Page */]);
                break;
            case "Aula 03":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aulas_n2_aula3_n2_aula3_n2__["a" /* Nivel2_aula3Page */]);
                break;
            case "Aula 04":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aulas_n2_aula4_n2_aula4_n2__["a" /* Nivel2_aula4Page */]);
                break;
            case "Aula 05":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__aulas_n2_aula5_n2_aula5_n2__["a" /* Nivel2_aula5Page */]);
                break;
            case "Aula 06":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__aulas_n2_aula6_n2_aula6_n2__["a" /* Nivel2_aula6Page */]);
                break;
            case "Aula 07":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__aulas_n2_aula7_n2_aula7_n2__["a" /* Nivel2_aula7Page */]);
                break;
            case "Aula 08":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__aulas_n2_aula8_n2_aula8_n2__["a" /* Nivel2_aula8Page */]);
                break;
            case "Aula 09":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__aulas_n2_aula9_n2_aula9_n2__["a" /* Nivel2_aula9Page */]);
                break;
            case "Aula 10":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__aulas_n2_aula10_n2_aula10_n2__["a" /* Nivel2_aula10Page */]);
                break;
            case "Aula 11":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__aulas_n2_aula11_n2_aula11_n2__["a" /* Nivel2_aula11Page */]);
                break;
            case "Aula 12":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__aulas_n2_aula12_n2_aula12_n2__["a" /* Nivel2_aula12Page */]);
                break;
        }
    };
    Nivel_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-2',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\nivel-2.html"*/'<!--\n  Generated template for the Nivel_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nível 2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="body" padding>\n  <ion-list inset>\n    <button class="list" ion-item \n      *ngFor="let aula of aulas" \n      (click)="itemSelected(aula)">\n        {{ aula.aula }}\n    </button> \n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-2\nivel-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Nivel_2Page);
    return Nivel_2Page;
}());

//# sourceMappingURL=nivel-2.js.map

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nivel_8PageModule", function() { return Nivel_8PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivel_8__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_n8__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fase_1_fase_1_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fase_2_fase_2_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fase_3_fase_3_module__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Nivel_8PageModule = /** @class */ (function () {
    function Nivel_8PageModule() {
    }
    Nivel_8PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nivel_8__["a" /* Nivel_8Page */],
                __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_n8__["a" /* TabsN_8Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nivel_8__["a" /* Nivel_8Page */]),
                __WEBPACK_IMPORTED_MODULE_4__fase_1_fase_1_module__["Fase_1PageModule"],
                __WEBPACK_IMPORTED_MODULE_5__fase_2_fase_2_module__["Fase_2PageModule"],
                __WEBPACK_IMPORTED_MODULE_6__fase_3_fase_3_module__["Fase_3PageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_n8__["a" /* TabsN_8Page */]
            ],
        })
    ], Nivel_8PageModule);
    return Nivel_8PageModule;
}());

//# sourceMappingURL=nivel-8.module.js.map

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nivel_8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs_n8__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nivel_8Page = /** @class */ (function () {
    function Nivel_8Page(navCtrl, navParams, platform, statusBar, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs_n8__["a" /* TabsN_8Page */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    Nivel_8Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Nivel_1Page');
    };
    Nivel_8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel-8',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-8\nivel-8.html"*/'<!--\n  Generated template for the Nivel_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nível 8</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-8\nivel-8.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Nivel_8Page);
    return Nivel_8Page;
}());

//# sourceMappingURL=nivel-8.js.map

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsN_8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fase_1_fase_1__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fase_2_fase_2__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fase_3_fase_3__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsN_8Page = /** @class */ (function () {
    function TabsN_8Page() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__fase_1_fase_1__["a" /* Fase_1Page */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__fase_2_fase_2__["a" /* Fase_2Page */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__fase_3_fase_3__["a" /* Fase_3Page */];
    }
    TabsN_8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-8\tabs\tabs-n8.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Fase 1" tabIcon="list-box"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Fase 2" tabIcon="list-box"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Fase 3" tabIcon="list-box"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\nivel-8\tabs\tabs-n8.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsN_8Page);
    return TabsN_8Page;
}());

//# sourceMappingURL=tabs-n8.js.map

/***/ }),
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivel_1_nivel_1__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nivel_2_nivel_2__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nivel_3_nivel_3__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nivel_4_nivel_4__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nivel_5_nivel_5__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nivel_6_nivel_6__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nivel_7_nivel_7__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nivel_8_nivel_8__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.niveis = [
            { nivel: "Nível 1" },
            { nivel: "Nível 2" },
            { nivel: "Nível 3" },
            { nivel: "Nível 4" },
            { nivel: "Nível 5" },
            { nivel: "Nível 6" },
            { nivel: "Nível 7" },
            { nivel: "Nível 8" }
        ];
    }
    HomePage.prototype.itemSelected = function (nivel) {
        switch (nivel.nivel) {
            case "Nível 1":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nivel_1_nivel_1__["a" /* Nivel_1Page */]);
                break;
            case "Nível 2":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__nivel_2_nivel_2__["a" /* Nivel_2Page */]);
                break;
            case "Nível 3":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__nivel_3_nivel_3__["a" /* Nivel_3Page */]);
                break;
            case "Nível 4":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__nivel_4_nivel_4__["a" /* Nivel_4Page */]);
                break;
            case "Nível 5":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__nivel_5_nivel_5__["a" /* Nivel_5Page */]);
                break;
            case "Nível 6":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__nivel_6_nivel_6__["a" /* Nivel_6Page */]);
                break;
            case "Nível 7":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__nivel_7_nivel_7__["a" /* Nivel_7Page */]);
                break;
            case "Nível 8":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__nivel_8_nivel_8__["a" /* Nivel_8Page */]);
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Treinos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="body" padding >\n  <ion-list inset >\n    <button class="listLevel" ion-item \n      *ngFor="let nivel of niveis" \n      (click)="itemSelected(nivel)">\n        {{ nivel.nivel }}\n    </button> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(394);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_nivel_1_nivel_1_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_nivel_2_nivel_2_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_nivel_3_nivel_3_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nivel_4_nivel_4_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nivel_5_nivel_5_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_nivel_6_nivel_6_module__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_nivel_7_nivel_7_module__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_nivel_8_nivel_8_module__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula10-n1/aula10-n1.module#Nivel1_aula10PageModule', name: 'Nivel1_aula10Page', segment: 'aula10-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula12-n1/aula12-n1.module#Nivel1_aula12PageModule', name: 'Nivel1_aula12Page', segment: 'aula12-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula3-n1/aula3-n1.module#Nivel1_aula3PageModule', name: 'Nivel1_aula3Page', segment: 'aula3-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula2-n1/aula2-n1.module#Nivel1_aula2PageModule', name: 'Nivel1_aula2Page', segment: 'aula2-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula4-n1/aula4-n1.module#Nivel1_aula4PageModule', name: 'Nivel1_aula4Page', segment: 'aula4-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula5-n1/aula5-n1.module#Nivel1_aula5PageModule', name: 'Nivel1_aula5Page', segment: 'aula5-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula6-n1/aula6-n1.module#Nivel1_aula6PageModule', name: 'Nivel1_aula6Page', segment: 'aula6-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula1-n1/aula1-n1.module#Nivel1_aula1PageModule', name: 'Nivel1_aula1Page', segment: 'aula1-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula9-n1/aula9-n1.module#Nivel1_aula9PageModule', name: 'Nivel1_aula9Page', segment: 'aula9-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula8-n1/aula8-n1.module#Nivel1_aula8PageModule', name: 'Nivel1_aula8Page', segment: 'aula8-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula7-n1/aula7-n1.module#Nivel1_aula7PageModule', name: 'Nivel1_aula7Page', segment: 'aula7-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula1-n2/aula1-n2.module#Nivel2_aula1PageModule', name: 'Nivel2_aula1Page', segment: 'aula1-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula11-n2/aula11-n2.module#Nivel2_aula11PageModule', name: 'Nivel2_aula11Page', segment: 'aula11-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula10-n2/aula10-n2.module#Nivel2_aula10PageModule', name: 'Nivel2_aula10Page', segment: 'aula10-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/nivel-1.module#Nivel_1PageModule', name: 'Nivel_1Page', segment: 'nivel-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula3-n2/aula3-n2.module#Nivel2_aula3PageModule', name: 'Nivel2_aula3Page', segment: 'aula3-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula4-n2/aula4-n2.module#Nivel2_aula4PageModule', name: 'Nivel2_aula4Page', segment: 'aula4-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula5-n2/aula5-n2.module#Nivel2_aula5PageModule', name: 'Nivel2_aula5Page', segment: 'aula5-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula12-n2/aula12-n2.module#Nivel2_aula12PageModule', name: 'Nivel2_aula12Page', segment: 'aula12-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula2-n2/aula2-n2.module#Nivel2_aula2PageModule', name: 'Nivel2_aula2Page', segment: 'aula2-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula6-n2/aula6-n2.module#Nivel2_aula6PageModule', name: 'Nivel2_aula6Page', segment: 'aula6-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula8-n2/aula8-n2.module#Nivel2_aula8PageModule', name: 'Nivel2_aula8Page', segment: 'aula8-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula7-n2/aula7-n2.module#Nivel2_aula7PageModule', name: 'Nivel2_aula7Page', segment: 'aula7-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula10-n3/aula10-n3.module#Nivel3_aula10PageModule', name: 'Nivel3_aula10Page', segment: 'aula10-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula11-n3/aula11-n3.module#Nivel3_aula11PageModule', name: 'Nivel3_aula11Page', segment: 'aula11-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula12-n3/aula12-n3.module#Nivel3_aula12PageModule', name: 'Nivel3_aula12Page', segment: 'aula12-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/aulas-n2/aula9-n2/aula9-n2.module#Nivel2_aula9PageModule', name: 'Nivel2_aula9Page', segment: 'aula9-n2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-1/aulas-n1/aula11-n1/aula11-n1.module#Nivel1_aula11PageModule', name: 'Nivel1_aula11Page', segment: 'aula11-n1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula3-n3/aula3-n3.module#Nivel3_aula3PageModule', name: 'Nivel3_aula3Page', segment: 'aula3-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula1-n3/aula1-n3.module#Nivel3_aula1PageModule', name: 'Nivel3_aula1Page', segment: 'aula1-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula4-n3/aula4-n3.module#Nivel3_aula4PageModule', name: 'Nivel3_aula4Page', segment: 'aula4-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula7-n3/aula7-n3.module#Nivel3_aula7PageModule', name: 'Nivel3_aula7Page', segment: 'aula7-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula6-n3/aula6-n3.module#Nivel3_aula6PageModule', name: 'Nivel3_aula6Page', segment: 'aula6-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula8-n3/aula8-n3.module#Nivel3_aula8PageModule', name: 'Nivel3_aula8Page', segment: 'aula8-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula9-n3/aula9-n3.module#Nivel3_aula9PageModule', name: 'Nivel3_aula9Page', segment: 'aula9-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula5-n3/aula5-n3.module#Nivel3_aula5PageModule', name: 'Nivel3_aula5Page', segment: 'aula5-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/aulas-n3/aula2-n3/aula2-n3.module#Nivel3_aula2PageModule', name: 'Nivel3_aula2Page', segment: 'aula2-n3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-3/nivel-3.module#Nivel_3PageModule', name: 'Nivel_3Page', segment: 'nivel-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula1-n4/aula1-n4.module#Nivel4_aula1PageModule', name: 'Nivel4_aula1Page', segment: 'aula1-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula11-n4/aula11-n4.module#Nivel4_aula11PageModule', name: 'Nivel4_aula11Page', segment: 'aula11-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula10-n4/aula10-n4.module#Nivel4_aula10PageModule', name: 'Nivel4_aula10Page', segment: 'aula10-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula2-n4/aula2-n4.module#Nivel4_aula2PageModule', name: 'Nivel4_aula2Page', segment: 'aula2-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula3-n4/aula3-n4.module#Nivel4_aula3PageModule', name: 'Nivel4_aula3Page', segment: 'aula3-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula4-n4/aula4-n4.module#Nivel4_aula4PageModule', name: 'Nivel4_aula4Page', segment: 'aula4-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula5-n4/aula5-n4.module#Nivel4_aula5PageModule', name: 'Nivel4_aula5Page', segment: 'aula5-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula12-n4/aula12-n4.module#Nivel4_aula12PageModule', name: 'Nivel4_aula12Page', segment: 'aula12-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula7-n4/aula7-n4.module#Nivel4_aula7PageModule', name: 'Nivel4_aula7Page', segment: 'aula7-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula6-n4/aula6-n4.module#Nivel4_aula6PageModule', name: 'Nivel4_aula6Page', segment: 'aula6-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula9-n4/aula9-n4.module#Nivel4_aula9PageModule', name: 'Nivel4_aula9Page', segment: 'aula9-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/aulas-n4/aula8-n4/aula8-n4.module#Nivel4_aula8PageModule', name: 'Nivel4_aula8Page', segment: 'aula8-n4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-4/nivel-4.module#Nivel_4PageModule', name: 'Nivel_4Page', segment: 'nivel-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula10-n6/aula10-n6.module#Nivel6_aula10PageModule', name: 'Nivel6_aula10Page', segment: 'aula10-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula11-n6/aula11-n6.module#Nivel6_aula11PageModule', name: 'Nivel6_aula11Page', segment: 'aula11-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula1-n6/aula1-n6.module#Nivel6_aula1PageModule', name: 'Nivel6_aula1Page', segment: 'aula1-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula2-n6/aula2-n6.module#Nivel6_aula2PageModule', name: 'Nivel6_aula2Page', segment: 'aula2-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula3-n6/aula3-n6.module#Nivel6_aula3PageModule', name: 'Nivel6_aula3Page', segment: 'aula3-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula12-n6/aula12-n6.module#Nivel6_aula12PageModule', name: 'Nivel6_aula12Page', segment: 'aula12-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-5/nivel-5.module#Nivel_5PageModule', name: 'Nivel_5Page', segment: 'nivel-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula4-n6/aula4-n6.module#Nivel6_aula4PageModule', name: 'Nivel6_aula4Page', segment: 'aula4-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula6-n6/aula6-n6.module#Nivel6_aula6PageModule', name: 'Nivel6_aula6Page', segment: 'aula6-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula7-n6/aula7-n6.module#Nivel6_aula7PageModule', name: 'Nivel6_aula7Page', segment: 'aula7-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula8-n6/aula8-n6.module#Nivel6_aula8PageModule', name: 'Nivel6_aula8Page', segment: 'aula8-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula9-n6/aula9-n6.module#Nivel6_aula9PageModule', name: 'Nivel6_aula9Page', segment: 'aula9-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/aulas-n6/aula5-n6/aula5-n6.module#Nivel6_aula5PageModule', name: 'Nivel6_aula5Page', segment: 'aula5-n6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/nivel-6.module#Nivel_6PageModule', name: 'Nivel_6Page', segment: 'nivel-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula1-n7/aula1-n7.module#Nivel7_aula1PageModule', name: 'Nivel7_aula1Page', segment: 'aula1-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/frente/frente.module#Frente_PageModule', name: 'Frente_Page', segment: 'frente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula10-n7/aula10-n7.module#Nivel7_aula10PageModule', name: 'Nivel7_aula10Page', segment: 'aula10-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula12-n7/aula12-n7.module#Nivel7_aula12PageModule', name: 'Nivel7_aula12Page', segment: 'aula12-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula11-n7/aula11-n7.module#Nivel7_aula11PageModule', name: 'Nivel7_aula11Page', segment: 'aula11-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula3-n7/aula3-n7.module#Nivel7_aula3PageModule', name: 'Nivel7_aula3Page', segment: 'aula3-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula4-n7/aula4-n7.module#Nivel7_aula4PageModule', name: 'Nivel7_aula4Page', segment: 'aula4-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula2-n7/aula2-n7.module#Nivel7_aula2PageModule', name: 'Nivel7_aula2Page', segment: 'aula2-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula5-n7/aula5-n7.module#Nivel7_aula5PageModule', name: 'Nivel7_aula5Page', segment: 'aula5-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-6/verso/verso.module#Verso_PageModule', name: 'Verso_Page', segment: 'verso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula8-n7/aula8-n7.module#Nivel7_aula8PageModule', name: 'Nivel7_aula8Page', segment: 'aula8-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula6-n7/aula6-n7.module#Nivel7_aula6PageModule', name: 'Nivel7_aula6Page', segment: 'aula6-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/frente-n7.module#FrenteN_7PageModule', name: 'FrenteN_7Page', segment: 'frente-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/nivel-7.module#Nivel_7PageModule', name: 'Nivel_7Page', segment: 'nivel-7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-8/fase-1/fase-1.module#Fase_1PageModule', name: 'Fase_1Page', segment: 'fase-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula7-n7/aula7-n7.module#Nivel7_aula7PageModule', name: 'Nivel7_aula7Page', segment: 'aula7-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/frente/aulas-n7/aula9-n7/aula9-n7.module#Nivel7_aula9PageModule', name: 'Nivel7_aula9Page', segment: 'aula9-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-8/fase-3/fase-3.module#Fase_3PageModule', name: 'Fase_3Page', segment: 'fase-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-8/fase-2/fase-2.module#Fase_2PageModule', name: 'Fase_2Page', segment: 'fase-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-7/verso/verso-n7.module#VersoN_7PageModule', name: 'VersoN_7Page', segment: 'verso-n7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-2/nivel-2.module#Nivel_2PageModule', name: 'Nivel_2Page', segment: 'nivel-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel-8/nivel-8.module#Nivel_8PageModule', name: 'Nivel_8Page', segment: 'nivel-8', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_nivel_1_nivel_1_module__["Nivel_1PageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_nivel_2_nivel_2_module__["Nivel_2PageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_nivel_3_nivel_3_module__["Nivel_3PageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_nivel_4_nivel_4_module__["Nivel_4PageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_nivel_5_nivel_5_module__["Nivel_5PageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_nivel_6_nivel_6_module__["Nivel_6PageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_nivel_7_nivel_7_module__["Nivel_7PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_nivel_8_nivel_8_module__["Nivel_8PageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="header-1">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Jeferson\Desktop\Jeferson\Projetos\FDT-App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })
]),[371]);
//# sourceMappingURL=main.js.map