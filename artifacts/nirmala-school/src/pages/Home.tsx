import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Heart, Shield, Sparkles, Trophy, CheckCircle2, Star, Quote, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.png";
import facilitySmartClass from "@/assets/facility-smart-class.png";
import facilityComputerLab from "@/assets/facility-computer-lab.png";
import facilityLibrary from "@/assets/facility-library.png";
import facilitySports from "@/assets/facility-sports.png";
import campus1 from "@/assets/campus-1.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <motion.div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: `url(${heroImg || 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80'})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex flex-wrap justify-center gap-2"
          >
            {['Academic Excellence', 'Character Development', 'Future Readiness', 'Safe Campus', 'Smart Learning'].map((pill, i) => (
              <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-wide">
                {pill}
              </span>
            ))}
          </motion.div>

          <motion.h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white max-w-5xl leading-[1.1] tracking-tight mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Knowledge Meets Character, <br className="hidden lg:block"/>
            <span className="text-primary/90">Excellence Meets Opportunity.</span>
          </motion.h1>

          <motion.p 
            className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mb-10 font-light leading-relaxed drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Providing quality CBSE and State Board education through academic excellence, values, innovation, and holistic development.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-semibold shadow-xl hover:scale-105 transition-all w-full sm:w-auto text-primary-foreground bg-primary hover:bg-primary/90">
              <Link href="/admissions">Admissions Open</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-md w-full sm:w-auto">
              <Link href="/contact">Schedule Campus Visit</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. About Nirmala School */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">About Our School</div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  A Legacy of Excellence in <span className="text-primary italic">Education</span>.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Located in the heart of Atmakur, Mangalagiri, Nirmala School has been a beacon of educational excellence for decades. We pride ourselves on offering a unique dual-board curriculum, seamlessly blending the rigorous standards of the CBSE framework with the deep-rooted cultural context of the State Board.
                </p>
                <div className="pt-4">
                  <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/80 text-lg font-semibold group">
                    <Link href="/about">
                      Discover Our History <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-primary/20 flex flex-col items-center justify-center p-8 text-center group">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-500">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Nirmala School Campus</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">Establishing a foundation of wisdom, values, and academic distinction since inception.</p>
                </div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
                <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="bg-card p-10 rounded-3xl border-t-4 border-primary shadow-lg h-full">
                <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be a premier educational institution that nurtures lifelong learners, instills moral values, and empowers students to become responsible global citizens equipped to thrive in a rapidly changing world.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-card p-10 rounded-3xl border-t-4 border-secondary shadow-lg h-full">
                <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide a dynamic, inclusive, and stimulating learning environment that blends academic rigor with holistic development, fostering intellectual curiosity, creativity, and compassionate character.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. Stats / Highlights */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 text-center">
            {[
              { number: "25+", label: "Years of Excellence", icon: Trophy },
              { number: "1500+", label: "Students Enrolled", icon: BookOpen },
              { number: "85+", label: "Qualified Teachers", icon: Heart },
              { number: "100%", label: "Academic Results", icon: Sparkles },
              { number: "50+", label: "Sports Achievements", icon: Shield },
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Why Choose Nirmala?</h2>
              <p className="text-muted-foreground text-lg">We provide a holistic environment where students thrive academically, physically, and emotionally.</p>
            </FadeUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "CBSE Curriculum", desc: "Rigorous national framework preparing students for competitive exams." },
              { title: "State Board Excellence", desc: "Deeply rooted syllabus focusing on regional context and foundations." },
              { title: "Smart Classrooms", desc: "Digital boards and modern tech integrated into daily learning." },
              { title: "Digital Learning", desc: "Seamless integration of technology in curriculum delivery." },
              { title: "Experienced Faculty", desc: "Passionate educators with years of pedagogical expertise." },
              { title: "Safe Environment", desc: "24/7 CCTV, secure campus, and strict safety protocols." },
              { title: "Sports Programs", desc: "Extensive facilities for athletics, team sports, and physical fitness." },
              { title: "Individual Attention", desc: "Low student-to-teacher ratio ensuring no child is left behind." }
            ].map((feature, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="p-6 bg-card rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Academic Programs (Dual Board) */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Academic Programs</h2>
              <p className="text-muted-foreground">Tailored educational pathways to suit your child's aspirations.</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="group relative overflow-hidden rounded-3xl bg-card border-t-4 border-primary shadow-lg hover:shadow-xl transition-all">
                <div className="p-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">CBSE Curriculum</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    A robust, nationally recognized curriculum designed to foster critical thinking, analytical skills, and prepare students for all-India competitive examinations.
                  </p>
                  <Button asChild className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/academics">Explore CBSE Program</Link>
                  </Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="group relative overflow-hidden rounded-3xl bg-card border-t-4 border-secondary shadow-lg hover:shadow-xl transition-all">
                <div className="p-10">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">State Board</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    A comprehensive curriculum that balances modern educational needs with a strong foundation in regional language, culture, and state-level competitive readiness.
                  </p>
                  <Button asChild className="w-full rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/academics">Explore State Board Program</Link>
                  </Button>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 7. Facilities Showcase */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Facilities Showcase</h2>
              <p className="text-muted-foreground text-lg">World-class infrastructure designed to foster academic and extracurricular excellence.</p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { title: "Smart Classrooms", img: facilitySmartClass },
               { title: "Computer Labs", img: facilityComputerLab },
               { title: "Science Labs", img: gallery5 },
               { title: "Library", img: facilityLibrary },
               { title: "Sports Grounds", img: facilitySports },
               { title: "Transport", img: null },
               { title: "Activity Rooms", img: null },
               { title: "CCTV Security", img: null }
             ].map((fac, i) => (
               <FadeUp key={i} delay={i * 0.05} className="group relative aspect-square rounded-2xl overflow-hidden bg-muted">
                 {fac.img ? (
                   <img src={fac.img} alt={fac.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-serif text-2xl font-bold text-center p-4 leading-tight">{fac.title}</div>
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                   <h3 className="text-white font-bold text-lg">{fac.title}</h3>
                 </div>
               </FadeUp>
             ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/facilities">View All Facilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Campus Life */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  Vibrant <span className="text-primary italic">Campus Life</span>.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Beyond academics, our campus is buzzing with activities that shape well-rounded personalities. From sports and arts to music, dance, cultural celebrations, competitions, and student clubs, every day is an opportunity to discover new passions.
                </p>
                <Button asChild className="rounded-full mt-4">
                  <Link href="/campus-life">Discover Campus Life <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src={campus1 || 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80'} alt="Campus Life" className="w-full h-full object-cover" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 9. Student Achievements */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Celebrating Excellence</h2>
              <p className="text-muted-foreground text-lg">Our students consistently set new benchmarks in academics and co-curricular activities.</p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "State Toppers", desc: "Three of our students ranked in the top 10 in the recent State Board examinations.", icon: Trophy },
              { title: "National Sports", desc: "Our under-16 football team reached the semi-finals of the National School Games.", icon: Star },
              { title: "Science Olympiad", desc: "Gold medals secured in the International Mathematics and Science Olympiads.", icon: Award }
            ].map((ach, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-all h-full text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <ach.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-foreground">{ach.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{ach.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/achievements">View All Achievements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Parent Testimonials */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">What Parents Say</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", role: "Parent of Class VIII student", quote: "The dual board option gave us exactly what we needed. The school's focus on overall character development is truly commendable." },
              { name: "Priya M.", role: "Parent of Class X student", quote: "Excellent faculty and state-of-the-art facilities. My daughter has grown so much in her confidence since joining Nirmala School." },
              { name: "Dr. K. Reddy", role: "Parent of Class V student", quote: "The balance between academics and extracurriculars is perfect. The teachers really care about the individual progress of each child." }
            ].map((testimonial, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-8 bg-background rounded-3xl border border-border shadow-sm h-full relative">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                  <div className="flex gap-1 mb-6 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Gallery Preview */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Glimpses of Nirmala</h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, i) => (
               <FadeUp key={i} delay={i * 0.1} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                 <img src={img || 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80'} alt="Gallery image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               </FadeUp>
             ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 12. News & Events */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Latest Updates</h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Annual Sports Meet 2024", date: "Oct 15, 2024", img: gallery2 },
              { title: "Science Exhibition Winners", date: "Sep 28, 2024", img: gallery5 },
              { title: "Cultural Fest 'Tarang'", date: "Aug 10, 2024", img: gallery4 }
            ].map((news, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-all h-full">
                  <div className="aspect-video overflow-hidden">
                    <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-medium text-primary mb-2 block">{news.date}</span>
                    <h3 className="font-serif font-bold text-xl mb-4 group-hover:text-primary transition-colors">{news.title}</h3>
                    <Button variant="link" className="p-0 text-foreground group-hover:text-primary transition-colors">
                      Read more <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Admissions CTA Section */}
      <section className="py-32 relative overflow-hidden bg-primary/5">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Admissions Open</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Shape your child's future. Join our diverse community of learners and discover a world of opportunities at Nirmala School.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-semibold w-full sm:w-auto shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/admissions">Apply for Admission</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-semibold w-full sm:w-auto">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}