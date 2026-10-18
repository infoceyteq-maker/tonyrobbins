import { Linkedin } from "lucide-react";
import type { SocialLink } from "@/lib/contact-data";

/** Renders a brand glyph: simple-icons path, Lucide LinkedIn, or a letterform. */
export default function BrandIcon({
  social,
  className = "h-5 w-5",
}: {
  social: SocialLink;
  className?: string;
}) {
  if (social.icon) {
    return (
      <svg
        role="img"
        aria-label={`${social.name} logo`}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
      >
        <path d={social.icon.path} />
      </svg>
    );
  }
  if (social.useLucideLinkedin) {
    return <Linkedin className={className} aria-hidden="true" />;
  }
  return (
    <span
      aria-hidden="true"
      className="font-serif text-xl font-bold leading-none"
    >
      {social.letter ?? social.name.charAt(0)}
    </span>
  );
}
