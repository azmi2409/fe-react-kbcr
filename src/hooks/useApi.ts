import PocketBase from "pocketbase";
import config from "../config";
import { BaseAuthStore } from "pocketbase";

export class AuthStore extends BaseAuthStore {
  record: any;

  saveRecord(record: any, token: string) {
    this.record = record;
    const obj = {
      token,
      user: record,
    };
    localStorage.setItem(config.apiKey, JSON.stringify(obj));
  }

  clear() {
    this.record = null;
    super.clear();
    localStorage.removeItem(config.apiKey);
  }
}

const useApi = () => {
  const pb = new PocketBase(config.apiUrl, new AuthStore());
  return pb;
};

export default useApi;
