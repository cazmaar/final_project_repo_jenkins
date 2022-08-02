import pg from "pg";

import { connectionString } from "../config.js";
const pool = new pg.Pool({
  connectionString:"postgres://kazo:korede@159.65.62.220:5007",
});

export default pool;
