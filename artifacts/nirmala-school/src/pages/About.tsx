import { motion } from "framer-motion";
import headerImg from "@/assets/about-header.png";
import principalImg from "@/assets/principal.png";

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

export default function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">About Nirmala School</h1>
          <p className="text-xl text-muted-foreground">Discover our history, mission, and the core values that drive our educational philosophy.</p>
        </motion.div>
        
        <FadeUp>
          <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-24 relative shadow-2xl">
             <img src={headerImg || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'} alt="Campus Header" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
               <p className="text-white font-serif text-2xl md:text-4xl max-w-3xl drop-shadow-md">"Education is not the learning of facts, but the training of the mind to think."</p>
             </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
          <FadeUp>
            <div className="p-10 bg-card rounded-3xl border-t-4 border-primary shadow-lg h-full">
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be a premier educational institution that nurtures lifelong learners, instills moral values, and empowers students to become responsible global citizens equipped to thrive in a rapidly changing world.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="p-10 bg-card rounded-3xl border-t-4 border-secondary shadow-lg h-full">
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide a dynamic, inclusive, and stimulating learning environment that blends academic rigor with holistic development, fostering intellectual curiosity, creativity, and compassionate character.
              </p>
            </div>
          </FadeUp>
        </div>
        
        <div className="max-w-4xl mx-auto mb-24">
          <FadeUp>
            <h2 className="font-serif text-4xl font-bold text-center mb-16">Leadership Philosophy</h2>
          </FadeUp>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <FadeUp>
              <div className="w-64 h-64 shrink-0 rounded-full overflow-hidden shadow-xl border-4 border-background relative z-10">
                <img src={principalImg || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80'} alt="Principal" className="w-full h-full object-cover" />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-muted/50 p-8 rounded-3xl relative">
                <div className="absolute -left-4 -top-4 text-6xl text-primary/20 font-serif">"</div>
                <p className="text-lg text-foreground italic mb-6 relative z-10">
                  At Nirmala School, we believe that every child possesses unique potential. Our role as educators is not just to impart knowledge, but to act as facilitators who guide students on their journey of self-discovery. We are committed to creating an environment where excellence is not an act, but a habit.
                </p>
                <div className="font-bold text-foreground">Dr. Anjali Sharma</div>
                <div className="text-sm text-primary">Principal</div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}