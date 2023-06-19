import Axios, { AxiosInstance } from "axios";
import { routes } from "./routes";

export class Api {
  private baseUrl: string = "http://localhost:3000/api";
  readonly instance: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.instance = Axios.create({
      baseURL: this.baseUrl,
    });
  }

  get routes() {
    return routes(this.instance);
  }
}

export default new Api("http://test-api.appinton.com/api");
