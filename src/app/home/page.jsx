export const dynamic = "force-dynamic"; //SSR
// export const dynamic = "force-static"; //SSG


export const metadata = {
  title: "Fronpage",
  description: "Description",
};

// denne function genererer nyt img for hver gang browseren bliver reloaded
// https fetcher billeder fra message i data'en ned som gør billederne bliver vist i browseren
export default function Home() {

  return (
  <main className=" text-white">
    <h1>FRONT END WEB DESIGNER & DEVELOPER</h1>

    <hr className="color-white" />
    <div className="md:flex mx-auto">
      <h3>5 Mounths</h3>
      <p>3D Blender & ZBrush</p>
    </div>

    <hr className="color-white" />
    <div className="md:flex mx-auto">
      <h3>9 Mounths</h3>
      <p>OnSite Manager / Sitemanagement</p>
    </div>

    <hr className="color-white" />
    <div className="md:flex mx-auto">
      <h3>1.5 Years</h3>
      <p>Ai, Ps, CSS, Javascript, HTML & Astro</p>
    </div>
  </main>
  );
}
