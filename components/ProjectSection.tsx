'use client';
import React from 'react';
import Image from 'next/image';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import SlideUp from './SlideUp';

interface ProjectItem {
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  links?: {
    label: string;
    url: string;
    type: 'play' | 'apple' | 'web';
  }[];
}

const projects: ProjectItem[] = [
  {
    name: 'Prima Super Apps (HRIS Multi-Tenant)',
    category: 'Enterprise HRIS & Mobile Ecosystem',
    description:
      'Aplikasi HRIS multi-tenant (iOS & Android) mengelola ±50.000 pekerja mandiri, menggantikan sistem berbayar senilai ±Rp 1,2 M/tahun. Mencakup modul Presensi Geolocation & Foto, Overtime, Slip Gaji, Patroli QR Code, Live Tracking Driver, serta Web Admin multi-tenant dengan SSO dan RBAC.',
    image: '/1.png',
    tags: [
      'Golang (Fiber)',
      'Next.js',
      'PostgreSQL Cluster',
      'Redis',
      'RabbitMQ',
      'Docker',
      'Kubernetes',
    ],
    links: [
      {
        label: 'Google Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.pkss.app&hl=id',
        type: 'play',
      },
      {
        label: 'Apple App Store',
        url: 'https://apps.apple.com/id/app/prima-super-apps/id6474478418',
        type: 'apple',
      },
    ],
  },
  {
    name: 'Fleet Management & Driver Tracking',
    category: 'IoT, Logistics & Vehicle Telematics',
    description:
      'Platform pemantauan armada operasional kendaraan dan penugasan pengemudi real-time. Berhasil memangkas biaya operasional kendaraan hingga 40% dengan fitur visualisasi riwayat rute, konsumsi bahan bakar, pengingat pajak kendaraan, dan aplikasi Android Head Unit.',
    image: '/2.png',
    tags: [
      'Node.js (TypeScript)',
      'Next.js',
      'Flutter',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
      'Docker',
    ],
    links: [
      {
        label: 'Kunjungi Website',
        url: 'https://fleet.pkss.co.id/',
        type: 'web',
      },
    ],
  },
  {
    name: 'Contact Center & Ticket Management',
    category: 'Customer Support & Ticketing Engine',
    description:
      'Platform monitoring dan eskalasi tiket pengaduan pelanggan berbasis batasan SLA (Service Level Agreement). Dilengkapi dashboard performa agen dan analitik resolusi tiket terintegrasi SSO Prima Super Apps.',
    image: '/1.png',
    tags: [
      'Node.js (TypeScript)',
      'Next.js',
      'PostgreSQL',
      'Docker',
      'Nginx',
      'SLA Workflow',
    ],
    links: [
      {
        label: 'Kunjungi Dashboard',
        url: 'https://dashboardcontactbri.pkss.co.id/',
        type: 'web',
      },
    ],
  },
  {
    name: 'Prima Academy (Online Examination Engine)',
    category: 'Knowledge Process Outsourcing & Assessment',
    description:
      'Sistem sertifikasi dan asesmen kompetensi pekerja yang andal menangani lonjakan beban ±5.000 concurrent users per sesi ujian online serentak. Fitur bank soal tersinkronisasi, analitik instan, dan generator sertifikat digital otomatis.',
    image: '/2.png',
    tags: [
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'High Concurrency',
      'RabbitMQ',
    ],
  },
  {
    name: 'Digital Office (E-Office & Memo)',
    category: 'Internal Workflow Automation',
    description:
      'Sistem persuratan dinas, nota dinas, perjalanan dinas, dan pengarsipan digital terintegrasi. Mengimplementasikan Role-Based Access Control (RBAC) dan workflow berjenjang Maker-Checker-Signer (MCS).',
    image: '/1.png',
    tags: [
      'Next.js',
      'Node.js',
      'RBAC',
      'MCS Approval Flow',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    name: 'Influencer Engagement Analytics',
    category: 'Social Media & NLP Analytics',
    description:
      'Platform analitik Key Opinion Leader (KOL) yang mengonsumsi data Instagram (Meta Graph API), TikTok, dan X/Twitter. Menghitung valuasi kampanye dan analisis sentimen audiens menggunakan Natural Language Processing (NLP NLTK).',
    image: '/2.png',
    tags: [
      'Python (Flask)',
      'React.js',
      'NLP (NLTK)',
      'Meta Graph API',
      'Docker',
      'MySQL',
    ],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="pt-20 pb-20">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Featured Work
        </span>
        <h2 className="font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-50 tracking-tight mt-1">
          Projects &amp; Systems
        </h2>
        <div className="w-12 h-1 mx-auto my-3 bg-teal-500 rounded-full" />
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
          Produk dan sistem skala enterprise yang telah dirancang, dideploy, dan
          digunakan secara aktif di lingkungan produksi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="h-full">
              <SlideUp offset="-100px 0px -100px 0px">
                <div className="h-full flex flex-col justify-between bg-white dark:bg-stone-800/80 rounded-2xl border border-neutral-200 dark:border-stone-700 shadow-sm hover:shadow-md transition-all p-6">
                  <div>
                    <div className="relative w-full h-48 mb-5 overflow-hidden rounded-xl bg-neutral-100 dark:bg-stone-900">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-stone-900/80 text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2.5 py-1 rounded-md font-mono bg-neutral-100 dark:bg-stone-700/80 text-neutral-700 dark:text-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.links && project.links.length > 0 && (
                    <div className="pt-4 border-t border-neutral-100 dark:border-stone-700/60 flex flex-wrap gap-2.5">
                      {project.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/60 transition"
                        >
                          {link.type === 'play' && <FaGooglePlay size={13} />}
                          {link.type === 'apple' && <FaApple size={14} />}
                          {link.type === 'web' && (
                            <HiOutlineExternalLink size={14} />
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
