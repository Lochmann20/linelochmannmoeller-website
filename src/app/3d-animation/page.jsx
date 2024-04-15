
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
                <Link href={"/hand-drawn"} prefetch={false}>
                Hand Drawn
                </Link>
            </li>

            <li >
                <Link  href={"/2d-animation"} prefetch={false}>
                   / 2D Animation
                </Link>
            </li>

            <li>
                <Link className='font-extrabold' href={"/3d-animation"} prefetch={false}>
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
                <h2>Red Wine</h2>
                <p>The Wine snack is a 3D Animation build and painted in 3D Blender</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>Coffee House</h2>
                <p>The Coffee House is a 3D Animation build and painted in 3D Blender</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>Blue</h2>
                <p>Blue is a 3D Animation build and painted in 3D Blender</p>
                <hr />
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </article>

        <article>
            <div>
                <h2>Meta Human</h2>
                <p>This Meta Human is build using xxxx and costumed in xxxx</p>
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
















