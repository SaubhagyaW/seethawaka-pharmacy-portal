
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Logo size="lg" />
            <span className="pharmacy-title text-xl">
              Seethawaka Pharmacy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-pharmacy-600 relative",
                  location.pathname === link.path
                    ? "text-pharmacy-600 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-pharmacy-600"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass absolute top-full left-0 w-full animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-base font-medium py-2 px-4 rounded-md transition-colors",
                    location.pathname === link.path
                      ? "bg-pharmacy-100 text-pharmacy-600"
                      : "text-foreground hover:bg-gray-100"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-[72px]">
        <div className="animate-fade-in">{children}</div>
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo size="md" />
                <span className="pharmacy-title text-lg">
                  Seethawaka Pharmacy
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Providing quality healthcare products and services to our community with care and precision.
              </p>
            </div>
            <div className="md:text-right">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                Quick Links
              </h3>
              <div className="flex flex-col space-y-2 md:items-end">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-600 hover:text-pharmacy-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Seethawaka Pharmacy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
