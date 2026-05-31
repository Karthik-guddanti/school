import { motion } from "framer-motion";
import { Music, Palette, Trophy, Users } from "lucide-react";
import img1 from "@/assets/gallery-4.png"; // cultural
import img2 from "@/assets/gallery-2.png"; // sports
import img3 from "@/assets/campus-1.png"; // courtyard
import img4 from "@/assets/campus-2.png"; // music

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

export default function CampusLife() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Campus Life</h1>
          <p className="text-xl text-muted-foreground">
            Education extends far beyond the classroom walls. Experience the vibrant culture and holistic development opportunities at Nirmala School.
          </p>
        </motion.div>

        {/* Feature Sections */}
        <div className="space-y-32">
          {/* Arts & Culture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src={img1 || 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80'} alt="Arts and Culture" className="w-full h-full object-cover" />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Palette className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Arts & Cultural Expressions</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in nurturing creativity. Our comprehensive arts program includes visual arts, classical and contemporary dance, and theatrical performances. Students are encouraged to express themselves and appreciate diverse cultural heritage through annual festivals and inter-school competitions.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Sports */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Trophy className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Sports & Athletics</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Physical fitness is integral to student well-being. Our expansive sports grounds host football, basketball, cricket, and athletics. Expert coaches train students in teamwork, discipline, and sportsmanship, leading our teams to frequent victories in regional tournaments.
                </p>
              </div>
            </FadeUp>
            <FadeUp className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src={img2 || 'https://images.unsplash.com/photo-1574629810360-7efbb6b0ac5e?auto=format&fit=crop&q=80'} alt="Sports" className="w-full h-full object-cover" />
              </div>
            </FadeUp>
          </div>

          {/* Music */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src={img4 || 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80'} alt="Music" className="w-full h-full object-cover" />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Music className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Music & Performing Arts</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our dedicated music studios provide students the opportunity to learn both classical and modern instruments. The school choir and band regularly perform at events, fostering a deep appreciation for rhythm and harmony.
                </p>
              </div>
            </FadeUp>
          </div>

           {/* Student Leadership */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp delay={0.2} className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Student Leadership & Clubs</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through the Student Council and various specialized clubs (Science, Eco, Debate, and Literature), students learn the essence of leadership, responsibility, and civic duty, preparing them for roles in the wider community.
                </p>
              </div>
            </FadeUp>
            <FadeUp className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src={img3 || 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80'} alt="Student Leadership" className="w-full h-full object-cover" />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}