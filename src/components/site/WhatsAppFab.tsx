import { SITE, waLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi! I'd like to book a stay at Sugriva's Kingdom.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${SITE.whatsappDisplay}`}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M19.1 17.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3 2.9 1.1 2.9.8 3.5.7.5-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM16 4C9.4 4 4 9.4 4 16c0 2.4.7 4.6 1.9 6.5L4 28l5.7-1.8c1.8 1 3.9 1.6 6.3 1.6 6.6 0 12-5.4 12-12S22.6 4 16 4zm0 21.8c-2 0-3.9-.6-5.5-1.6l-.4-.2-3.4 1.1 1.1-3.3-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.7 0-5.6 4.5-10.1 10.1-10.1 5.6 0 10.1 4.5 10.1 10.1.1 5.6-4.4 10.1-10 10.1z"/>
      </svg>
      <span className="absolute right-16 hidden md:block whitespace-nowrap rounded-full bg-foreground/90 px-3 py-1.5 text-xs text-background opacity-0 group-hover:opacity-100">Book on WhatsApp</span>
    </a>
  );
}