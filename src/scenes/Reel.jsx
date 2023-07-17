import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useState } from "react";
import { Carousel } from "@material-tailwind/react";


const Reel = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const baseReelUrl = "https://player.vimeo.com/video/337672245?h=2a6521c685&title=0&byline=0&portrait=0"
  return (
    <section id="reel" className="pt-10 pb-48">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-belanosima font-semibold text-4xl mb-5">
            Demo <span className="text-red">Reel</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>

      {/* VIMEO IFRAME */}
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
      <div className="relative pt-[56.25%] mt-16">
        {isAboveLarge ? (
          <iframe className="absolute inset-0 w-full h-full px-32" id="reel_vid" src={baseReelUrl} frameborder="0" allowfullscreen></iframe>
        ) : (
          <iframe className="absolute inset-0 w-full h-full" id="reel_vid" src={baseReelUrl} frameborder="0" allowfullscreen></iframe>
        )}
      </div>
      </motion.div>

      <LineGradient width="w-full opacity-25" />

      {/* BREAKDOWN TITLE */}
      <div className="flex flex-col items-center mt-16">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <p className="font-belanosima font-semibold text-2xl mb-5">
          Shot Breakdown
        </p>
      </motion.div>
      </div>

      {/* BREAKDOWNS */}
      <div className="flex flex-col items-center mt-16">

        {isAboveLarge ? (
        <Carousel className="rounded-xl">

        <div className="flex flex-row gap-4 mx-20 mb-20">

          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/1.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/2.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/3.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THISTLE ONE</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/artella.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Key Lighting & Shading</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/4.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">Like & Follow</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/fands.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shading & Comp</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/5.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">Like & Follow</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/fands.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shading & Comp</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/6.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting & Comp</p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-row gap-4 mx-20 mb-20">

          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/7.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting & Comp</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/8.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting & Comp</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/9.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting & Comp</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/10.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">DETECTIVE PIKACHU</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/technicolor.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/11.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">DETECTIVE PIKACHU</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/technicolor.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/12.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting & Comp</p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-row gap-4 mx-20 mb-20">

          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/13.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">RON'S GONE WRONG</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/dneg.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/14.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">RON'S GONE WRONG</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/dneg.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/15.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting & Comp</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/16.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">FAST & FURIOUS 9</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/dneg.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/17.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting & Comp</p>
            </div>
          </div>
          <div class="bg-light-blue rounded-xl max-w-xs">
            <img className="rounded-t-xl" src="./assets/reel_breakdown/18.jpg" alt="" />
            <div className="flex flex-col items-center p-5">
              <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
              <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
              <LineGradient width="w-full opacity-25" />
              <p className="mt-5">Shot Lighting & Comp</p>
            </div>
          </div>
          
        </div>

        </Carousel>
        ) : (
          <Carousel className="rounded-xl">
  

            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/1.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/2.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/3.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THISTLE ONE</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/artella.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Key Lighting & Shading</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/4.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">Like & Follow</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/fands.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shading & Comp</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/5.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">Like & Follow</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/fands.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shading & Comp</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/6.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting & Comp</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/7.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting & Comp</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/8.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting & Comp</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/9.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting & Comp</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/10.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">DETECTIVE PIKACHU</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/technicolor.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/11.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">DETECTIVE PIKACHU</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/technicolor.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/12.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting & Comp</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/13.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">RON'S GONE WRONG</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/dneg.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/14.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">RON'S GONE WRONG</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/dneg.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/15.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting & Comp</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/16.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">FAST & FURIOUS 9</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/dneg.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/17.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting & Comp</p>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center m-10">
            <div class="bg-light-blue rounded-xl max-w-xs">
              <img className="rounded-t-xl" src="./assets/reel_breakdown/18.jpg" alt="" />
              <div className="flex flex-col items-center p-5">
                <h4 className="font-bold text-gray-400">THE SEABEAST</h4>
                <img className="m-5 w-1/2 rounded-md" src="./assets/studio_images/spi.png" />
                <LineGradient width="w-full opacity-25" />
                <p className="mt-5">Shot Lighting & Comp</p>
              </div>
            </div>
            </div>
  
          </Carousel>
        )}


      </div>

    </section>
  );
};

export default Reel;
