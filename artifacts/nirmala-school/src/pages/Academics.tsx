import { motion } from "framer-motion";
import { BookOpen, Award, CheckCircle2, Star, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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

export default function Academics() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" /> Academic Excellence
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Dual Board Curriculum</h1>
          <p className="text-xl text-muted-foreground">
            Empowering students with a choice between CBSE and State Board pathways, ensuring a tailored educational journey.
          </p>
        </motion.div>

        {/* Dual Boards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
          <FadeUp>
            <div className="p-8 md:p-12 bg-card rounded-3xl border border-border shadow-xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
              <h2 className="font-serif text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">CBSE</span>
                Central Board
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                The CBSE curriculum offers a robust, nationally recognized framework that fosters critical thinking and prepares students for all-India competitive examinations.
              </p>
              <ul className="space-y-4 mb-8">
                {['Standardized syllabus across India', 'Focus on STEM and problem-solving', 'Continuous Comprehensive Evaluation (CCE)', 'Preparation for JEE, NEET, etc.'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="p-8 md:p-12 bg-card rounded-3xl border border-border shadow-xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10" />
              <h2 className="font-serif text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-sm">State</span>
                State Board
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                The State Board curriculum balances modern educational needs with a strong foundation in regional language, culture, and local competitive readiness.
              </p>
              <ul className="space-y-4 mb-8">
                {['Deep integration of regional culture', 'Strong foundational language skills', 'State-level examination focus', 'Accessible and comprehensive syllabus'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* Teaching Methodology */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Our Teaching Methodology</h2>
            <p className="text-xl text-muted-foreground">Moving beyond rote learning to foster genuine understanding and application.</p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {[
            { icon: Target, title: "Experiential Learning", desc: "Hands-on projects, laboratory experiments, and field trips that bring textbook concepts to life." },
            { icon: Users, title: "Collaborative Approach", desc: "Group discussions and peer learning to build teamwork and communication skills." },
            { icon: Star, title: "Personalized Attention", desc: "Small class sizes allowing teachers to identify and nurture individual student strengths." }
          ].map((method, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="p-8 bg-card border border-border rounded-2xl text-center h-full hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-foreground">{method.title}</h3>
                <p className="text-muted-foreground">{method.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA */}
        <FadeUp>
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary/10">
            <h2 className="font-serif text-3xl font-bold mb-4">Ready to start the journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">Join our academic community and give your child the foundation they deserve.</p>
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-semibold shadow-md hover:shadow-lg">
              <Link href="/admissions">Begin Admissions Process</Link>
            </Button>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}