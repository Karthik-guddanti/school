import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, CalendarDays } from "lucide-react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Admissions() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Admissions</h1>
          <p className="text-xl text-muted-foreground">
            Join the Nirmala School community. We are currently accepting applications for the upcoming academic year.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-5xl mx-auto mb-24">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Admission Process Timeline</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Submit Enquiry", desc: "Fill out the online enquiry form below.", icon: FileText },
              { step: "02", title: "Campus Visit", desc: "Schedule a tour to see our facilities.", icon: CalendarDays },
              { step: "03", title: "Interaction", desc: "Meet with the principal and academic coordinators.", icon: CheckCircle2 },
              { step: "04", title: "Enrollment", desc: "Submit required documents and fee payment.", icon: CheckCircle2 }
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center relative overflow-hidden group hover:border-primary transition-colors h-full">
                  <div className="text-6xl font-serif font-bold text-muted/30 absolute -top-4 -right-4 transition-transform group-hover:scale-110">{s.step}</div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4 relative z-10">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 relative z-10">{s.title}</h3>
                  <p className="text-sm text-muted-foreground relative z-10">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-24">
          {/* Eligibility & Documents */}
          <div className="space-y-12">
            <FadeUp>
              <h2 className="font-serif text-3xl font-bold mb-6">Eligibility</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span>Age criteria strictly follows government regulations for respective grades.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span>Admission is granted based on vacancies and previous academic records.</span>
                </li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-serif text-3xl font-bold mb-6">Documents Required</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-secondary shrink-0" />
                  <span>Birth Certificate (Original & Photocopy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-secondary shrink-0" />
                  <span>Aadhaar Cards of Student and Parents</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-secondary shrink-0" />
                  <span>Transfer Certificate (TC) from previous school</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-secondary shrink-0" />
                  <span>Recent Passport Size Photographs (4 copies)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-secondary shrink-0" />
                  <span>Previous Year Mark Sheet / Report Card</span>
                </li>
              </ul>
            </FadeUp>
          </div>

          {/* Form */}
          <FadeUp delay={0.2}>
            <div className="bg-card p-8 rounded-3xl border border-border shadow-xl">
              <h3 className="font-serif text-2xl font-bold mb-6">Admission Enquiry Form</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Parent/Guardian Name</label>
                    <Input placeholder="Enter your name" className="bg-background rounded-lg h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Student Name</label>
                    <Input placeholder="Enter child's name" className="bg-background rounded-lg h-12" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" className="bg-background rounded-lg h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="Enter your email" className="bg-background rounded-lg h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Grade Applying For</label>
                  <Input placeholder="e.g., Class V" className="bg-background rounded-lg h-12" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Any specific questions?</label>
                  <Textarea placeholder="How can we help you?" className="bg-background min-h-[120px] rounded-xl" />
                </div>

                <Button className="w-full h-14 text-base rounded-full font-semibold shadow-md">Submit Enquiry</Button>
              </form>
            </div>
          </FadeUp>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-lg hover:text-primary">What is the student-to-teacher ratio?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  We maintain a low student-to-teacher ratio of 25:1 to ensure that each child receives personalized attention and guidance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold text-lg hover:text-primary">Do you provide transportation facilities?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Yes, we offer safe and reliable transportation facilities covering major routes in and around Atmakur, Mangalagiri, and Guntur. All buses are equipped with GPS tracking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold text-lg hover:text-primary">How can parents track their child's progress?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  We conduct regular Parent-Teacher Meetings (PTMs) and provide access to a digital portal where parents can track attendance, grades, and daily activities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-bold text-lg hover:text-primary">Are there extracurricular activities available?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Absolutely. We have a robust extracurricular program including various sports, arts, music, dance, and academic clubs designed for holistic development.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}