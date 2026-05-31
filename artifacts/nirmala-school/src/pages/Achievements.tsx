import { motion } from "framer-motion";
import { User, Award, BookOpen, Star } from "lucide-react";

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

const achievements = [
  {
    title: "100% Board Results",
    category: "Academics",
    year: "2023-24",
    desc: "Consistent 100% pass rate in CBSE and State Board examinations with over 40% students scoring distinctions.",
    icon: BookOpen
  },
  {
    title: "State Level Sports Champions",
    category: "Sports",
    year: "2023",
    desc: "Winners of the Under-16 State Athletics Championship and runners-up in regional basketball.",
    icon: Award
  },
  {
    title: "National Science Olympiad",
    category: "Competitions",
    year: "2024",
    desc: "Three students ranked in the top 100 nationally in the recent Science Olympiad.",
    icon: Star
  },
  {
    title: "Alumni Success",
    category: "Alumni",
    year: "Ongoing",
    desc: "Our alumni continue to secure placements in top national institutes including IITs, NITs, and prestigious medical colleges.",
    icon: User
  }
];

export default function Achievements() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Hall of Fame</h1>
          <p className="text-xl text-muted-foreground">
            Celebrating the dedication, hard work, and outstanding successes of our students and institution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-card p-8 rounded-3xl border border-border shadow-md hover:shadow-xl transition-all h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <item.icon className="w-24 h-24 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">{item.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}