import PocketBase from "pocketbase";
import config from "../config";
import { LocalAuthStore } from "pocketbase";

const useApi = () => {
  const pb = new PocketBase(config.apiUrl, new LocalAuthStore(config.apiKey));
  return pb;
};

export default useApi;
