
import Link from 'next/link';
import React from 'react';

export default async function Header() {

  return (
    <>
    <h1 className=" text-white">Projects</h1>
    <hr />

    <nav className=" text-white p-2">
        <ul className="flex gap-2">
        <li >
                <Link href={"/hand-drawn"} prefetch={false}>
                Hand Drawn
                </Link>
            </li>

            <li >
                <Link href={"/2d-animation"} prefetch={false}>
                   / 2D Animation
                </Link>
            </li>

            <li>
                <Link  href={"/3d-animation"} prefetch={false}>
                    / 3D Animation
                </Link>
            </li>

            <li>
                <Link className='font-extrabold' href={"/web-sites"} prefetch={false}>
                     / Web Sites
                </Link>
            </li>
        </ul>
    </nav>
    
    <main className=" text-white">
        <article>
            <div>
                <h2>Vild Mad</h2>
                <p>A website for children, which encourages them to learn, bye getting there attension.</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>VAHL WOOD</h2>
                <p>Web site was Developed and Design by me and my three others from my team, in Second Semester. We decided to redesign an existing site for Vahl Wood.</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>CA</h2>
                <p>A redesign for CA, Developed by the same team from Vahl Wood</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>To Do Task </h2>
                <p>A To Do List created by using Javascript</p>
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


