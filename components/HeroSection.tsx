'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import {
  HiArrowDown,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 pt-24 pb-12 sm:pt-32 sm:pb-20 md:flex-row md:space-x-8 md:text-left md:pt-40 md:pb-24">
        <div className="md:w-2/5 flex justify-center">
          <div className="relative">
            <Image
              src="/hubbaka.webp"
              alt="Hubbaka Ghoyati"
              width={280}
              height={280}
              priority
              className="rounded-full shadow-2xl ring-4 ring-teal-500/30 object-cover aspect-square"
            />
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-3/5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 mb-3">
            <HiOutlineLocationMarker className="text-teal-600 dark:text-teal-400" />
            Jakarta, Indonesia
          </div>

          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-900 dark:text-neutral-50">
            Hubbaka Ghoyati
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-teal-600 dark:text-teal-400">
            Full Stack Developer
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg mt-4 mb-6 leading-relaxed">
            Sebagai <strong>Full-Stack Engineer</strong> yang adaptif dan
            komunikatif, saya memiliki pengalaman merancang dan mengembangkan
            perangkat lunak secara <em>end-to-end</em> untuk berkontribusi dalam
            memenuhi kebutuhan operasional serta bisnis perusahaan. Nyaman dan
            antusias berkolaborasi dalam tim untuk memecahkan tantangan teknis
            maupun non-teknis.
          </p>

          <div className="flex flex-wrap gap-2.5 text-sm text-neutral-600 dark:text-neutral-300 mb-6 justify-center md:justify-start">
            <a
              href="mailto:hubbaka.ghoyati456@gmail.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-300 dark:border-stone-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors"
            >
              <HiOutlineMail className="text-lg text-teal-600 dark:text-teal-400" />
              hubbaka.ghoyati456@gmail.com
            </a>
            <a
              href="https://wa.me/6282127030325"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-300 dark:border-stone-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
            >
              <FaWhatsapp className="text-lg text-emerald-500" />
              082127030325
            </a>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="experience"
              className="cursor-pointer text-white font-semibold px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all text-sm sm:text-base"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Work Experience
            </Link>
            <Link
              to="accomplishments"
              className="cursor-pointer text-neutral-800 dark:text-neutral-100 font-semibold px-6 py-3 bg-neutral-100 dark:bg-stone-800 border border-neutral-300 dark:border-stone-700 hover:bg-neutral-200 dark:hover:bg-stone-700 rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all text-sm sm:text-base"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Key Accomplishments
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-4">
        <Link
          to="accomplishments"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="cursor-pointer text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          aria-label="Scroll to Key Accomplishments"
        >
          <HiArrowDown size={32} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
