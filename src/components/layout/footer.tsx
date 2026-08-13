import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { brandConfig } from "@/config/brand";

export function Footer() {
  return (
    <footer className="border-t border-border mt-section">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="text-heading text-2xl font-medium tracking-widest"
            >
              {brandConfig.logo.text}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {brandConfig.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              {Object.entries(brandConfig.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  {key}
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((section) => (
            <div key={section.title} className="md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{brandConfig.contact.email}</li>
              <li>{brandConfig.contact.phone}</li>
              <li>{brandConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {brandConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
