import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img-container",
        start: "40% center",
        end: "+=100 center",
        scrub: 1.5,
      },
    });

    tl.from(".m1", {
      y: 100,
    });
    tl.from(
      ".m2",
      {
        y: 300,
      },
      0
    );
    tl.from(
      ".girl",
      {
        y: 1500,
      },
      0
    );
    tl.from(
      ".sun",
      {
        y: 2000,
      },
      0
    );
    tl.from(
      ".floor",
      {
        y: 50,
      },
      0
    );
    tl.from(
      ".tree",
      {
        y: 400,
      },
      0
    );
    tl.from(
      ".bush",
      {
        y: 300,
      },
      0
    );
  });

  return (
    <section className="w-screen h-screen bg-[#ede0d4]">
      <main>
        <div className="w-screen h-screen center">
          <h1 className="text-5xl font-bold uppercase">Scroll</h1>
        </div>
        <div className="w-screen h-screen overflow-hidden relative img-container">
          <div className="absolute bottom-0 z-10 left-[25vw] flex items-end w-fit">
            <img
              src="/img/bushed.svg"
              className="absolute bush bottom-0 left-[95px]"
            />
            <img
              src="/img/tree.svg"
              alt="tree"
              className="relative tree z-20"
            />
          </div>

          <img
            src="/img/mountain1.svg"
            alt="mountain1"
            className="absolute m1 bottom-0 left-0"
          />
          <img
            src="/img/mountaintwo.svg"
            alt="mountaintwo"
            className="absolute z-20 m2 bottom-0 right-0"
          />
          <img
            src="/img/girl.svg"
            alt="girl"
            className="absolute girl bottom-0 left-[50%]"
          />
          <img
            src="/img/sun.svg"
            alt="sun"
            className="absolute sun top-32 right-96"
          />
          <img
            src="/img/floor.svg"
            alt="floor"
            className="absolute floor left-[20vw] -bottom-10"
          />
        </div>
        <div className="w-screen h-screen center">
          <h1 className="text-5xl font-bold uppercase">Scroll</h1>
        </div>
      </main>
    </section>
  );
};

export default App;
