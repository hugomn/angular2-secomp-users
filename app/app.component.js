"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var USERS = [
    { id: 11, name: 'Joaozinho' },
    { id: 12, name: 'Pedro' },
    { id: 13, name: 'Marcelo' },
    { id: 14, name: 'Gabriela' },
    { id: 15, name: 'Paulinho' },
    { id: 16, name: 'Maria' },
    { id: 17, name: 'Bruna' },
    { id: 18, name: 'Júlia' },
    { id: 19, name: 'Celso' },
    { id: 20, name: 'Juca' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Cadastro de usuários - II Secomp';
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Usu\u00E1rios</h2>\n    <ul class=\"users\">\n      <li *ngFor=\"let user of users\"\n        [class.selected]=\"user === selectedUser\"\n        (click)=\"onSelect(user)\">\n        <span class=\"badge\">{{user.id}}</span> {{user.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedUser\">\n      <h2>Detalhes do usu\u00E1rio {{selectedUser.name}}!</h2>\n      <div><label>id: </label>{{selectedUser.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedUser.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .users {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .users li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .users li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .users li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .users .text {\n    position: relative;\n    top: -3px;\n  }\n  .users .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map