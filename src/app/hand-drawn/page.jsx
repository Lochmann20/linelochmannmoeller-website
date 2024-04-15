
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
                <Link className='font-extrabold' href={"/hand-drawn"} prefetch={false}>
                Hand Drawn
                </Link>
            </li>

            <li >
                <Link href={"/2d-animation"} prefetch={false}>
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
                <h2>Picha</h2>
                <p>Picha is a xxxx</p>
                <hr />
            </div>

            <div>
                <img src="/png/Picha.png" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>David</h2>
                <p>David is a xxx</p>
                <hr />
            </div>

            <div>
                <img src="/png/david.png" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>Pink Sonic</h2>
                <p>Sonic is a xxx</p>
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
















