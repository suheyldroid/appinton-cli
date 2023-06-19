import { AxiosInstance } from "axios";

export function routes(api: AxiosInstance) {
  return {
    async publish(data: FormData) {
      try {
        const response = await api.post("widget-clusters", data);
        return {
          status: {
            code: response.status,
            text: response.statusText,
            ok: response.status.toString().startsWith("2"),
          },
          data: response.data,
        };
      } catch (err: any) {
        return {
          status: {
            code: 0,
            text: "",
            ok: false,
          },
          data: null,
        };
      }
    },
    async update(id: string, data: FormData) {
      try {
        const response = await api.post(`widget-clusters/${id}/upgrade`, data);
        return {
          status: {
            code: response.status,
            text: response.statusText,
            ok: response.status.toString().startsWith("2"),
          },
          data: response.data,
        };
      } catch (err: any) {
        return {
          status: {
            code: 0,
            text: "",
            ok: false,
          },
          data: null,
        };
      }
    },
  };
}
