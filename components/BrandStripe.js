const highlights = [
  "Abuja, Nigeria",
  "Est. 2021",
  "30+ Celebrations Curated",
  "85% Client Referrals",
  "Creative Director-Led",
  "Thoughtfully Designed for Each Couple",
];

export default function BrandStripe() {
  return (
    <aside
      aria-label="Havilah Florals Decor at a glance"
      className="group overflow-hidden border-y border-white/10 bg-[#5F327B] py-4 text-white sm:py-[1.125rem]"
    >
      <div className="brand-stripe-track flex w-max items-center group-hover:[animation-play-state:paused]">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            aria-hidden={groupIndex === 1}
            className="flex shrink-0 items-center"
          >
            {highlights.map((highlight) => (
              <div key={highlight} className="flex shrink-0 items-center">
                <span
                  aria-hidden="true"
                  className="mx-4 text-[0.55rem] text-white/45 sm:mx-6"
                >
                  ◆
                </span>
                <span className="whitespace-nowrap text-[0.7rem] font-medium uppercase leading-relaxed tracking-[0.16em] text-white/95 sm:text-xs sm:tracking-[0.18em]">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
