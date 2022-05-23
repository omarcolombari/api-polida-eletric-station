import { Request, Response } from "express";
import CreateClientService from "../services/clients/CreateClient.service";
import DeleteClientService from "../services/clients/DeleteClient.service";
import ListClientService from "../services/clients/ListClient.service";
import ListOneClientService from "../services/clients/ListOneClient.service";

export default class ClientController {
  static async store(req: Request, res: Response) {
    const { name, contact } = req.body;
    const createClient = new CreateClientService();
    const client = await createClient.execute({
      contact,
      name,
    });

    return res.status(201).json(client);
  }
  static async index(req: Request, res: Response) {
    const listClients = new ListClientService();
    const clients = await listClients.execute();
    return res.json(clients);
  }
  static async show(req: Request, res: Response) {
    const { client_id } = req.params;
    const client = new ListOneClientService();
    const listedClient = await client.execute({
      id: client_id,
    });

    return res.json(listedClient);
  }
  static async delete(req: Request, res: Response) {
    const { client_id } = req.params;
    const client = new DeleteClientService();

    await client.execute({
      id: client_id,
    });

    return res.status(204).json();
  }
}
