'use client';
import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl pt-10 pb-12">
      <hr className="w-full h-px mx-auto mb-8 bg-neutral-200 dark:bg-stone-800 border-0" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
            Hubbaka Ghoyati
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Full Stack Developer | Golang, Node.js, Next.js &amp; Cloud Infra
          </p>
          <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 mt-1.5">
            <HiOutlineLocationMarker className="text-teal-500" />
            Jakarta, Indonesia
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-300">
            <a
              href="mailto:hubbaka.ghoyati456@gmail.com"
              aria-label="Email Hubbaka"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-stone-800 hover:text-teal-600 dark:hover:text-teal-400 transition"
            >
              <AiOutlineMail size={22} />
            </a>
            <a
              href="https://wa.me/6282127030325"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Hubbaka"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-stone-800 hover:text-emerald-500 transition"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://github.com/hubbaka"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Hubbaka"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-stone-800 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <AiOutlineGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/hubbaka-g-638b04112/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Hubbaka"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-stone-800 hover:text-blue-600 transition"
            >
              <AiOutlineLinkedin size={22} />
            </a>
          </div>

          <div className="text-xs text-neutral-400 dark:text-neutral-500">
            © {new Date().getFullYear()} Hubbaka Ghoyati.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
