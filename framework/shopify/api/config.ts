import fetchApi from "./../utils/fetch-api";
import { ApiConfig } from './../../common/types/api';

class Config {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  apiUrl: "http:localhost:4000/graphql",
  fetch: fetchApi,
});

export const getConfig = () => {
  return configWrapper.getConfig();
};
