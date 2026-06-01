import { Router } from "express";
import { CreateContactMessageBody } from "@workspace/api-zod";
import { db, contactMessages } from "@workspace/db";

const router = Router();

router.post("/contact-messages", async (req, res, next) => {
  try {
    const validated = CreateContactMessageBody.parse(req.body);
    const [inserted] = await db.insert(contactMessages).values({
      fullName: validated.fullName,
      email: validated.email,
      phone: validated.phone,
      message: validated.message,
    }).returning();
    res.status(201).json(inserted);
  } catch (error) {
    next(error);
  }
});

export default router;
