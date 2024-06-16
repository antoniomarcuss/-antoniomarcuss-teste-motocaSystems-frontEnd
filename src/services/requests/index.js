import { httpClient } from "../axios";
const MODULE = "motos";
export class RequestsServices {
  static async find() {
    return await httpClient.get(MODULE);
  }
  static async findById(id) {
    return await httpClient.get(`${MODULE}/${id}`);
  }
  static async create(data) {
    return await httpClient.post(MODULE, data);
  }

  static async update(id, data) {
    return await httpClient.put(`${MODULE}/${id}`, data);
  }

  static async delete(id) {
    return await httpClient.delete(`${MODULE}/${id}`);
  }
  static async getStatus() {
    return await httpClient.get(`status`);
  }
}
