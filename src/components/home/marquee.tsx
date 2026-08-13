export function Marquee() {
  const items = [
    "NOIRÉ",
    "Luxury Contemporary",
    "Designed in Paris",
    "Tailored for You",
  ];

  return (
    <div className="relative overflow-hidden border-y border-border py-6 bg-secondary">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <span
                key={index}
                className="mx-8 text-heading text-2xl md:text-3xl font-medium tracking-wider"
              >
                {item}
                <span className="ml-8 text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
