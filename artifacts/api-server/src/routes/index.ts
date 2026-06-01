import { Router, type IRouter } from "express";
import healthRouter from "./health";
import enquiriesRouter from "./enquiries";
import contactsRouter from "./contacts";

const router: IRouter = Router();

router.use(healthRouter);
router.use(enquiriesRouter);
router.use(contactsRouter);

export default router;
