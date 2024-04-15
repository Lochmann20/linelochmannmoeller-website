
import Link from 'next/link';
import React from 'react';

export default async function Header() {

  return (
    <nav className="bg-black text-white p-2">
        <ul className="flex gap-2">
            <li>
                <Link href={"/home"} prefetch={false}>
                    Home
                </Link>
            </li>

            <li>
                <Link href={"/about"} prefetch={false}>
                    About
                </Link>
            </li>

            <li>
                <Link href={"/experience"} prefetch={false}>
                    Experience
                </Link>
            </li>

            <li>
                <Link href={"/hand-drawn"} prefetch={false}>
                    Projects
                </Link>
            </li>

            <li>
                <Link href={"/CV.pdf"} download prefetch={false}>
                    Download CV
                </Link>
            </li>

            <li>
                <Link href={"mailto:linemoller1907@gmail.com"} prefetch={false}>
                    Gmail
                </Link>
            </li>

            <li>
                <Link href={"https://www.linkedin.com/in/line-m%C3%B8ller-a5311a257/"} prefetch={false}>
                    LinkedIn
                </Link>
            </li>
            
            <li>
                <Link href={"https://app.netlify.com/teams/lochmann20/overview"} prefetch={false}>
                    Netlify
                </Link>
            </li>

            <li>
                <Link href={"https://github.com/Lochmann20"} prefetch={false}>
                    Github
                </Link>
            </li>
        </ul>
    </nav>
  );
}






