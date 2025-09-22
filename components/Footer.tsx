"use client";

import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import FlipLink from "./FlipLink";

gsap.registerPlugin(useGSAP);

export default function Footer() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".coffeeon-glow",
        { opacity: 0.35, scale: 0.95 },
        {
          opacity: 0.6,
          scale: 1.05,
          repeat: -1,
          yoyo: true,
          duration: 2.2,
          ease: "power1.inOut",
        }
      );
    },
    { scope }
  );

  const indexLinks = ["Home", "About", "Shop", "Learn", "FAQ"];
  const socialLinks = ["Instagram", "Facebook", "Tiktok", "Linkedin"];
  const infoEmail = "hello@ethicallifeworld.com";

  return (
    <footer
      ref={scope}
      className="relative overflow-hidden bg-slate-800 text-slate-400"
    >
      {/* Oversized background wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-4 select-none text-[20vw] sm:text-[17vw] leading-none font-black tracking-tight text-slate-100/10 text-center"
      >
        coffeeon
      </div>

      <div className="relative pt-75 pb-12 sm:pb-0">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.2fr] lg:gap-16">
          {/* Headline */}
          <div className="col-span-1 relative flex items-center justify-center md:justify-start">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl text-center md:text-left">
              Kinder world with{" "}
              <span className="text-slate-700">Ethical Life.</span>
            </h2>
          </div>

          {/* Product image with glow */}
          <div className="relative order-first row-span-2 -mt-6 md:order-none lg:mt-0 flex justify-center">
            <div className="coffeeon-glow absolute inset-0 m-auto h-[250px] w-[250px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(130,255,130,0.45),rgba(0,0,0,0))] blur-2xl" />
            <div className="relative w-[200px] sm:w-[280px] lg:w-[380px]">
              <Image
                src="/machine.png"
                alt="Ethical Life Machine"
                width={480}
                height={460}
                priority
                className="rounded-2xl shadow-2xl ring-1 ring-black/5 w-full h-auto"
              />
            </div>
          </div>

          {/* Link columns */}
          <div className="col-span-1 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 text-center sm:text-left">
            {/* Index */}
            <div>
              <div className="text-sm font-semibold text-slate-100">Index</div>
              <ul className="mt-3 space-y-2">
                {indexLinks.map((label) => (
                  <li key={label}>
                    <FlipLink href="#" className="text-base sm:text-lg text-slate-300">
                      {label}
                    </FlipLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <div className="text-sm font-semibold text-slate-100">Social</div>
              <ul className="mt-3 space-y-2">
                {socialLinks.map((label) => (
                  <li key={label}>
                    <FlipLink href="#" className="text-base sm:text-lg text-slate-300">
                      {label}
                    </FlipLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div className="col-span-2 sm:col-span-1">
              <div className="text-sm font-semibold text-slate-100">Info</div>
              <ul className="mt-3 space-y-2">
                <li>
                  <FlipLink
                    href={`mailto:${infoEmail}`}
                    className="text-base sm:text-lg text-slate-300 break-words"
                  >
                    {infoEmail}
                  </FlipLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200/20 mt-12 ">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              © {new Date().getFullYear()} CoffeeOn
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <FlipLink href="#">Privacy Policy</FlipLink>
              <FlipLink href="#">Terms of Service</FlipLink>
            </div>
            <div className="text-slate-500 text-center md:text-right">
              Site by CoffeeOn
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
