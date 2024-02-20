import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  database_url: process.env.database_url,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
