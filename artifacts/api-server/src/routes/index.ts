import { Router, type IRouter } from "express";
import enquiriesRouter from "./enquiries";
import contactsRouter from "./contacts";

const router: IRouter = Router();

router.use(enquiriesRouter);
router.use(contactsRouter);

export default router;
