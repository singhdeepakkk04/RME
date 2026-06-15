import { PROOF } from "../data/site";

export default function Marquee() {
  const items = [...PROOF, ...PROOF]; // duplicated for seamless loop
  return (
    <section className="border-y border-hair bg-black/[0.015] py-7">
      <div className="container-site">
        <p className="mb-5 text-center text-xs uppercase tracking-[0.18em] text-faint">
          Speaks the protocols your tools already use
        </p>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {items.map((name, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-base font-semibold text-ash/70 transition-colors hover:text-chalk"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
