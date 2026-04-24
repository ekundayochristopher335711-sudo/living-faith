import { motion } from "framer-motion";
import { MessageCircle, Instagram, Music, Youtube } from "lucide-react";
import logoImg from "@/assets/logo.png";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Give", href: "#giving" },
  { label: "Prayer", href: "#prayer" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/2348129374001", icon: MessageCircle },
  { name: "Instagram", href: "https://instagram.com/livingfaithchurch", icon: Instagram },
  { name: "TikTok", href: "https://tiktok.com/@livingfaithchurch", icon: Music },
  { name: "YouTube", href: "https://youtube.com/@livingfaithchurch", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Logo" className="w-10 h-10 object-contain" />
              <div>
                <span className="font-heading font-bold text-sm text-foreground block">Living Faith Church</span>
                <span className="font-body font-bold text-[10px] text-muted-foreground tracking-wider uppercase">Winners Chapel Iworoko</span>
              </div>
            </div>
            <p className="font-body font-bold text-sm text-muted-foreground leading-relaxed">
              A commission dedicated to the liberation of mankind through the preaching of the word of faith.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body font-bold text-xs text-muted-foreground hover:text-red-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-card glass-card-hover rounded-lg flex items-center justify-center text-muted-foreground hover:text-red-600 transition-colors"
                    aria-label={platform.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
            <p className="font-body font-bold text-xs text-muted-foreground mt-4">
              Follow us for daily devotionals, updates, and live services.
            </p>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="text-center">
          <p className="font-body font-bold text-xs tracking-[0.2em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} Living Faith Church — Winners Chapel Iworoko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
