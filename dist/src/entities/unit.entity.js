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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const client_entity_1 = __importDefault(require("./client.entity"));
const serviceOrder_entity_1 = __importDefault(require("./serviceOrder.entity"));
let Unit = class Unit {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Unit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unit.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unit.prototype, "st_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unit.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], Unit.prototype, "voltage", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], Unit.prototype, "cable_meter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unit.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => client_entity_1.default, (client) => client.units, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", client_entity_1.default)
], Unit.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => serviceOrder_entity_1.default, (serviceOrder) => serviceOrder.unit, {
        eager: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Unit.prototype, "service_order", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Unit.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Unit.prototype, "updated_at", void 0);
Unit = __decorate([
    (0, typeorm_1.Entity)("units")
], Unit);
exports.default = Unit;
