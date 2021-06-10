import mongoose from "mongoose";
import config from "config";
import log from "../logger";

const connect = () => {
  const dbURI = config.get("dbURI") as string;

  return mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Database connected!");
    })
    .catch((err) => {
      log.error("DB Error", err);
      process.exit(1);
    });
};

export default connect;
