import Link from 'next/link';
import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © {new Date().getFullYear()} Hubbaka Ghoyati
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <Link
            href="https://github.com/hubbaka"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              size={30}
              className="hover:-translate-y-1 transition cursor-pointer"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hubbaka-g-638b04112/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              size={30}
              className="hover:-translate-y-1 transition cursor-pointer"
            />
          </Link>
          <Link href="#" rel="noreferrer" target="_blank">
            <AiOutlineInstagram
              size={30}
              className="hover:-translate-y-1 transition cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
