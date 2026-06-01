
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/components/theme-provider";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Campus Life", path: "/campus-life" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Faculty", path: "/faculty" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  const showSolidNavbar = isScrolled || location !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showSolidNavbar
          ? "bg-background/90 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 relative group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-xl group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl leading-tight ${showSolidNavbar ? "text-foreground" : "text-white drop-shadow-md"}`}>
                Nirmala School
              </span>
              <span className={`text-[10px] uppercase tracking-widest font-medium ${showSolidNavbar ? "text-muted-foreground" : "text-white/80 drop-shadow-sm"}`}>
                CBSE & State Board
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex items-center gap-1 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border ${showSolidNavbar ? "shadow-sm" : "border-white/20 text-white"}`}>
              {NAV_LINKS.slice(0, 5).map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors hover:text-primary ${
                    location === link.path ? "text-primary bg-primary/10" : showSolidNavbar ? "text-foreground" : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="relative group px-3 py-1.5">
                <span className={`text-sm font-medium flex items-center gap-1 cursor-pointer transition-colors hover:text-primary ${showSolidNavbar ? "text-foreground" : "text-white"}`}>
                  More <ChevronDown className="w-3 h-3" />
                </span>
                <div className="absolute top-full right-0 mt-2 w-48 bg-background border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right scale-95 group-hover:scale-100 flex flex-col p-2">
                  {NAV_LINKS.slice(5).map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${showSolidNavbar ? "" : "text-white hover:bg-white/20"}`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button asChild className="rounded-full font-semibold px-6 shadow-md hover:shadow-lg transition-all" variant={showSolidNavbar ? "default" : "secondary"}>
              <Link href="/admissions">Admissions</Link>
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-4 lg:hidden z-50">
            <Button
              variant="ghost"
              size="icon"
              className={showSolidNavbar || isMobileMenuOpen ? "text-foreground" : "text-white"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={showSolidNavbar || isMobileMenuOpen ? "text-foreground" : "text-white"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-all duration-300 lg:hidden flex flex-col justify-center ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 p-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl font-serif tracking-wide ${
                location === link.path ? "text-primary font-bold" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="mt-4 rounded-full px-8 py-6 text-lg w-full max-w-[200px]">
            <Link href="/admissions" onClick={() => setIsMobileMenuOpen(false)}>Apply Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}