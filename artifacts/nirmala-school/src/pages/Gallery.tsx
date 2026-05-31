import { motion } from "framer-motion";
import img1 from "@/assets/gallery-1.png";
import img2 from "@/assets/gallery-2.png";
import img3 from "@/assets/gallery-3.png";
import img4 from "@/assets/gallery-4.png";
import img5 from "@/assets/gallery-5.png";
import img6 from "@/assets/gallery-6.png";

const images = [
  { src: img1, alt: "Students on campus", category: "Campus" },
  { src: img2, alt: "Sports field action", category: "Sports" },
  { src: img3, alt: "Smart classroom", category: "Academics" },
  { src: img4, alt: "Cultural stage performance", category: "Events" },
  { src: img5, alt: "Science lab experiment", category: "Academics" },
  { src: img6, alt: "Spacious sunny library", category: "Facilities" },
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-16 min-h-screen container px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Gallery</h1>
        <p className="text-xl text-muted-foreground">
          A visual journey through moments at Nirmala School.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
          >
            <img 
              src={img.src || `https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80`} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">{img.category}</span>
                <p className="text-white font-medium">{img.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}