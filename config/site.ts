import { SiteConfig } from "@/types/siteConfig";
import { BsFacebook, BsGithub, BsLine } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const OPEN_SOURCE_URL = 'https://github.com/rratchapol'

const baseSiteConfig = {
  name: "Landing page boilerplate",
  description:
    "A free, open-source, and powerful landing page boilerplate, ideal for various projects, enabling you to create a landing page in under an hour.",
  url: "https://landingpage.weijunext.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["landing page boilerplate", "landing page template", "awesome landing page", "next.js landing page"],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
      twitter: 'https://twitter.com/weijunext',
    }
  ],
  creator: '@weijunext',
  openSourceURL: 'https://github.com/rratchapol',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsFacebook },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: BsLine }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:weijunext@gmail.com", icon: MdEmail },
    { name: 'github', href: "https://github.com/weijunext/", icon: BsGithub },
    { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsFacebook },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: BsLine }
  ],
  footerProducts: [
    // { url: 'https://weijunext.com/', name: 'J实验室' },
    // { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    // { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    // { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    // { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    // { url: 'https://githubbio.com', name: 'Github Bio Generator' },
    // { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
