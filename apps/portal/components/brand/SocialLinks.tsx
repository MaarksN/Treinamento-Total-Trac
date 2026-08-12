import { Globe, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/Tooltip";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";

// Dados reais extraídos de totaltrac.com.br (fornecidos pelo usuário).
const links = [
  { label: "Site oficial", href: "https://www.totaltrac.com.br/", icon: Globe },
  { label: "Instagram", href: "https://www.instagram.com/totaltracoficial/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/totaltracoficial", icon: LinkedinIcon },
  { label: "Facebook", href: "https://www.facebook.com/totaltracoficial", icon: FacebookIcon },
  { label: "YouTube", href: "https://www.youtube.com/@totaltracoficial", icon: YoutubeIcon },
  { label: "WhatsApp Comercial: (16) 99183-9108", href: "https://api.whatsapp.com/send?phone=5516991839108", icon: MessageCircle },
  { label: "comercial@totaltrac.com.br", href: "mailto:comercial@totaltrac.com.br", icon: Mail },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map((l) => (
        <Tooltip key={l.label} content={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:scale-110 hover:border-atlas-orange hover:text-atlas-orange"
          >
            <l.icon size={16} />
          </a>
        </Tooltip>
      ))}
    </div>
  );
}

export function ContactAddress({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs text-muted", className)}>
      Rua Machado de Assis, 654 — Ribeirão Preto / SP
    </p>
  );
}
