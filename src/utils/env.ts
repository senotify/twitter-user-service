import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "test", "production", "staging"] }),
  MONGO_URI: str(),
});

export default env;
