import PocketBase from "pocketbase";
import config from "../config";

const useApi = () => {
  const pb = new PocketBase(config.apiUrl);

  return pb;
};

export default useApi;
