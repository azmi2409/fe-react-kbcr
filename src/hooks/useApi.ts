import PocketBase from "pocketbase";
import config from "../config";
import { BaseAuthStore } from "pocketbase";

export class AuthStore extends BaseAuthStore {
  record: any;

  saveRecord(record: any) {
    this.record = record;
  }

  clear() {
    this.record = null;
    super.clear();
  }
}

const useApi = () => {
  const pb = new PocketBase(config.apiUrl, new AuthStore());
  return pb;
};

export default useApi;
