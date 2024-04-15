
import Link from 'next/link';
import React from 'react';

export default async function Header() {

  return (
    <>
    <h1 className=" text-white">Projects</h1>
    <hr />

    <nav className="bg-black text-white p-2">
        <ul className="flex gap-2">
            <li >
                <Link  href={"/hand-drawn"} prefetch={false}>
                Hand Drawn
                </Link>
            </li>

            <li >
                <Link className='font-extrabold' href={"/2d-animation"} prefetch={false}>
                   / 2D Animation
                </Link>
            </li>

            <li>
                <Link href={"/3d-animation"} prefetch={false}>
                    / 3D Animation
                </Link>
            </li>

            <li>
                <Link href={"/web-sites"} prefetch={false}>
                     / Web Sites
                </Link>
            </li>
        </ul>
    </nav>

    <main className='text-white'>
    <article>
            <div>
                <h2>Ashoka</h2>
                <p>Ashoka is a 2D Animation drawn in hand in procreate</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>Tony Stark</h2>
                <p>Tony Stark is a 2D Animation drawn in hand in procreate</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>Marilyn Monroe</h2>
                <p>Monroe is a 2D Animation drawn in hand in procreate</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>Black Widow</h2>
                <p>Widow is a 2D Animation drawn in hand in procreate</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>Monster</h2>
                <p>Monster is a 2D Animation drawn in hand in procreate</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>
    </main>
    </>
  );
}

















// "use client"
// import Image from "next/image";
// import {useState} from "react";



// export default function Experience() {
    
//   return (
//     <main className=" text-white">
//     <div>
//         <h1>Projects</h1>
//         <hr />
//     </div>
//     </main>
//   );
// }
