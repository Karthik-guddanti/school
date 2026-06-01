import { Router } from "express";
import { CreateEnquiryBody } from "@workspace/api-zod";
import { db, enquiries } from "@workspace/db";

const router = Router();

router.post("/enquiries", async (req, res, next) => {
  try {
    const validated = CreateEnquiryBody.parse(req.body);
    const [inserted] = await db.insert(enquiries).values({
      parentName: validated.parentName,
      studentName: validated.studentName,
      phone: validated.phone,
      email: validated.email,
      grade: validated.grade,
      message: validated.message ?? null,
    }).returning();
    res.status(201).json(inserted);
  } catch (error) {
    next(error);
  }
});

export default router;
