import { Request, Response } from "express";
import createUnitService from "../services/units/createUnit.service";
import deleteUnitService from "../services/units/deleteUnit.service";
import updateUnitService from "../services/units/updateUnit.service";

export class UnitsController {
  static async store(req: Request, res: Response) {
    const { street, st_number, district, voltage, cable_meter } = req.body;

    try {
      const newUnit = await createUnitService({
        street,
        st_number,
        district,
        voltage,
        cable_meter,
      });

      return res.status(201).json(newUnit);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  static async update(req: Request, res: Response) {
    const { unit_id } = req.params;
    const { street, st_number, district, voltage, cable_meter } = req.body;

    try {
      const updateUnit = await updateUnitService(unit_id, {
        street,
        st_number,
        district,
        voltage,
        cable_meter,
      });
      res.status(200).json(updateUnit);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  static async delete(req: Request, res: Response) {
    const { unit_id } = req.params;

    try {
      const deletedUnit = await deleteUnitService(unit_id);

      return res.status(200).json({ message: "Unit deleted." });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          error: err.name,
          message: err.message,
        });
      }
    }
  }
}
