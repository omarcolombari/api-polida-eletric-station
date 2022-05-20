"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitsController = void 0;
const createUnit_service_1 = __importDefault(require("../services/units/createUnit.service"));
const deleteUnit_service_1 = __importDefault(require("../services/units/deleteUnit.service"));
const updateUnit_service_1 = __importDefault(require("../services/units/updateUnit.service"));
class UnitsController {
    static store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { street, st_number, district, voltage, cable_meter, clientId } = req.body;
            const newUnit = yield (0, createUnit_service_1.default)({
                street,
                st_number,
                district,
                voltage,
                cable_meter,
                clientId
            });
            return res.status(201).json(newUnit);
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { unit_id } = req.params;
            const { street, st_number, district, voltage, cable_meter } = req.body;
            const updateUnit = yield (0, updateUnit_service_1.default)(unit_id, {
                street,
                st_number,
                district,
                voltage,
                cable_meter,
            });
            res.status(200).json(updateUnit);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { unit_id } = req.params;
            const deletedUnit = yield (0, deleteUnit_service_1.default)(unit_id);
            return res.status(200).json({ message: "Unit deleted." });
        });
    }
}
exports.UnitsController = UnitsController;
