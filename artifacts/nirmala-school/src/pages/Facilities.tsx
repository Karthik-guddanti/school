import { motion } from "framer-motion";
import { MonitorPlay, Microscope, Book, Dumbbell, Bus, ShieldCheck } from "lucide-react";
import imgSmart from "@/assets/facility-smart-class.png";
import imgComp from "@/assets/facility-computer-lab.png";
import imgLib from "@/assets/facility-library.png";
import imgSports from "@/assets/facility-sports.png";

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

const facilities = [
  {
    title: "Smart Classrooms",
    desc: "Interactive digital boards and multimedia setups in every classroom to make learning visual and engaging.",
    icon: MonitorPlay,
    img: imgSmart
  },
  {
    title: "Advanced Labs",
    desc: "State-of-the-art Computer and Science labs equipped with the latest technology for hands-on experiments.",
    icon: Microscope,
    img: imgComp
  },
  {
    title: "Spacious Library",
    desc: "A vast collection of books, journals, and digital resources in a quiet, aesthetically pleasing reading environment.",
    icon: Book,
    img: imgLib
  },
  {
    title: "Sports Grounds",
    desc: "Extensive outdoor fields and indoor courts for a variety of sports, promoting physical health and team spirit.",
    icon: Dumbbell,
    img: imgSports
  },
  {
    title: "Safe Transport",
    desc: "A fleet of well-maintained buses covering major routes with GPS tracking and trained staff.",
    icon: Bus,
    img: null
  },
  {
    title: "Campus Security",
    desc: "24/7 CCTV surveillance, strict entry protocols, and trained security personnel ensuring a safe environment.",
    icon: ShieldCheck,
    img: null
  }
];

export default function Facilities() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Our Facilities</h1>
          <p className="text-xl text-muted-foreground">
            A conducive environment is crucial for effective learning. Our modern infrastructure provides students with everything they need to excel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                {fac.img ? (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={fac.img} alt={fac.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                ) : (
                  <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                    <fac.icon className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <fac.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-foreground">{fac.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{fac.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}