import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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

const faculty = [
  { name: "Dr. Anjali Sharma", role: "Principal", exp: "20+ years", dept: "Administration" },
  { name: "Mr. Rajesh Kumar", role: "Head of Science", exp: "15 years", dept: "Science" },
  { name: "Mrs. Sunita Reddy", role: "Senior Math Educator", exp: "12 years", dept: "Mathematics" },
  { name: "Mr. Vikram Singh", role: "Sports Director", exp: "10 years", dept: "Physical Education" },
  { name: "Ms. Priya Desai", role: "English Faculty", exp: "8 years", dept: "Languages" },
  { name: "Mrs. Lakshmi V.", role: "Social Studies Educator", exp: "14 years", dept: "Humanities" },
];

export default function Faculty() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Our Educators</h1>
          <p className="text-xl text-muted-foreground">
            Meet the passionate, experienced, and highly qualified individuals who guide our students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-card border border-border p-6 rounded-3xl text-center hover:shadow-lg transition-all group">
                <div className="w-24 h-24 mx-auto bg-muted rounded-full mb-6 overflow-hidden border-4 border-background shadow-md">
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                     <GraduationCap className="w-10 h-10 text-primary/40" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                  <span className="bg-muted px-2 py-1 rounded">{member.dept}</span>
                  <span className="bg-muted px-2 py-1 rounded">{member.exp}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}