import { IController, IRes } from "../interfaces/IController";

export class ListLeadsController implements IController {
  async handle(): Promise<IRes> {
    return {
      statusCode: 200,
      body: {
        leads: [
          { id: "1", name: "John Doe" },
          { id: "2", name: "Chloe" },
          { id: "3", name: "Dean" },
        ],
      },
    };
  }
}
