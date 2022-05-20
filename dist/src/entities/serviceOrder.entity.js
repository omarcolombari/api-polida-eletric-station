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
const serviceType_entity_1 = __importDefault(require("./serviceType.entity"));
const unit_entity_1 = __importDefault(require("./unit.entity"));
const user_entity_1 = __importDefault(require("./user.entity"));
let ServiceOrder = class ServiceOrder {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ServiceOrder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.default, (user) => user.service_order),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.default)
], ServiceOrder.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => serviceType_entity_1.default, (serviceType) => serviceType.service_order),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", serviceType_entity_1.default)
], ServiceOrder.prototype, "service_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => unit_entity_1.default, (unit) => unit.service_order, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", unit_entity_1.default)
], ServiceOrder.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceOrder.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ServiceOrder.prototype, "reschedule", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceOrder.prototype, "unitId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceOrder.prototype, "serviceTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceOrder.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ServiceOrder.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ServiceOrder.prototype, "updated_at", void 0);
ServiceOrder = __decorate([
    (0, typeorm_1.Entity)("service_order")
], ServiceOrder);
exports.default = ServiceOrder;
