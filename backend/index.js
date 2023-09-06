import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { PORT } from "./config.js";

const app = express();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });
