import express, { type Express } from "express";
import cors from "cors";
import { pinoHttp } from "pino-http";
import { ZodError } from "zod";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: any) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: any) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// Global Error Handler Middleware
app.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof ZodError) {
    res.status(400).json({
      error: "Bad Request",
      message: "Validation failed",
      details: err.errors,
    });
    return;
  }

  logger.error(err, "Unhandled error during request processing");

  res.status(err.status || err.statusCode || 500).json({
    error: "Internal Server Error",
    message: err.message || "An unexpected error occurred",
  });
});

export default app;
