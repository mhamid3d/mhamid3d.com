import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Carousel } from "@material-tailwind/react";


const CreativeWork = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="creative work" className="pt-10 pb-48">
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
            Creative <span className="text-red">Work</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

      </div>
      
      {/* FILMOGRAPHY TITLE */}
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
            Production Lighting & Compositing
        </p>
      </motion.div>
      </div>

      
      {isAboveLarge ? (
      <div>

      {/* FILMOGRAPHY ROW 1 */}
      <div className="md:flex md:justify-between mt-16">

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >

          <div className="flex flex-col items-center">
            <img className="rounded-xl w-3/4 aspect-[11/16]" src="https://m.media-amazon.com/images/M/MV5BMTgwYmQ1MmUtZjhjMS00M2E2LTg4NGMtN2EyZTZkNmMzMWMyXkEyXkFqcGdeQXVyMTMzOTQyOTk1._V1_.jpg" alt="Wish (2023) Poster"></img>
            <h4 className="mt-5 font-bold">
                Wish (2023)
            </h4>
          </div>

        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex flex-col items-center">
            <img className="rounded-xl w-3/4 aspect-[11/16]" src="https://m.media-amazon.com/images/M/MV5BZjM2ZjIxNzEtOGNhNy00NTFjLWIxYjMtZTE5ODMyYTE3MTI4XkEyXkFqcGdeQXVyMTU5ODM0Nzcw._V1_.jpg" alt="Across The Spider-Verse (2023) Poster"></img>
            <h4 className="mt-5 font-bold">
                Across The Spider-Verse (2023)
            </h4>
          </div>

        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex flex-col items-center">
            <img className="rounded-xl w-3/4 aspect-[11/16]" src="https://m.media-amazon.com/images/M/MV5BNzAyODFiYTAtNGYzYy00NTlkLTg0NDQtMDlkOTEyMjdmMzcyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg" alt="The Seabeast (2022) Poster"></img>
            <h4 className="mt-5 font-bold">
            The Seabeast (2022)
            </h4>
          </div>

        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex flex-col items-center">
            <img className="rounded-xl w-3/4 aspect-[11/16]" src="https://m.media-amazon.com/images/M/MV5BMmE4MjE4OGYtMDExMy00MWZlLWIwYTMtYzUzMGNmYjk0MTVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX743_.jpg" alt="Ron's Gone Wrong (2021) Poster"></img>
            <h4 className="mt-5 font-bold">
            Ron's Gone Wrong (2021)
            </h4>
          </div>

        </motion.div>

      </div>

      {/* FILMOGRAPHY ROW 2 */}
      <div className="md:flex md:justify-between mt-16">

      <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >

          <div className="flex flex-col items-center">
            <img className="rounded-xl w-3/4 aspect-[11/16]" src="https://m.media-amazon.com/images/M/MV5BYmRiYTM3ZGMtNzA1Yy00OWQ1LWE2ZGEtZTRiYzYyZDZjYWYwXkEyXkFqcGdeQXVyMjMwODE4ODI@._V1_FMjpg_UX1000_.jpg" alt="100% Wolf (2020) Poster"></img>
            <h4 className="mt-5 font-bold">
            100% Wolf (2020)
            </h4>
          </div>

      </motion.div>

      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex flex-col items-center">
          <img className="rounded-xl w-3/4 aspect-[11/16]" src="https://m.media-amazon.com/images/M/MV5BMGQ2ZDg3YjEtMGUxOC00YWYwLTg1Y2MtZjMyZTdjYTc3NmQ3XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX505_.jpg" alt="Dolittle (2020) Poster"></img>
          <h4 className="mt-5 font-bold">
          Dolittle (2020)
          </h4>
        </div>

      </motion.div>

      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex flex-col items-center">
          <img className="rounded-xl w-3/4 aspect-[11/16]" src="https://m.media-amazon.com/images/M/MV5BN2Y3OTcxZTktMTA3ZC00YjQ4LTg0ZGYtNTE3M2YyYTYwMDMyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX1184_.jpg" alt="Pokémon Detective Pikachu (2019) Poster"></img>
          <h4 className="mt-5 font-bold">
          Pokémon Detective Pikachu (2019)
          </h4>
        </div>

      </motion.div>

      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex flex-col items-center">
          <img className="rounded-xl w-3/4 aspect-[11/16]" src="https://m.media-amazon.com/images/M/MV5BYWFjNGQxZjItOTgxNy00NjhkLWFkZGQtOWVjNzJlYWNhM2NmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1012_.jpg" alt="Wonder Woman 1984 (2020) Poster"></img>
          <h4 className="mt-5 font-bold">
          Wonder Woman 1984 (2020)
          </h4>
        </div>

      </motion.div>

      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex flex-col items-center">
          <img className="rounded-xl w-3/4 aspect-[11/16]" src="https://m.media-amazon.com/images/M/MV5BMjM5MDk2NDIxMF5BMl5BanBnXkFtZTgwNjU5NDk3NTM@._V1_FMjpg_UX1000_.jpg" alt="The Predator (2018) Poster"></img>
          <h4 className="mt-5 font-bold">
          The Predator (2018)
          </h4>
        </div>

      </motion.div>

      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex flex-col items-center">
          <img className="rounded-xl w-3/4 aspect-[11/16]" src="https://m.media-amazon.com/images/M/MV5BMzRmZDliMGYtNTcxMS00NzU1LTk1ZjgtNjZiNTIyZDUyYTBhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX790_.jpg" alt="Aquaman (2018) Poster"></img>
          <h4 className="mt-5 font-bold">
          Aquaman (2018)
          </h4>
        </div>

      </motion.div>

      </div>
      </div>) : (<div>
      {/* FILMOGRAPHY CAROUSEL */}
      <div className="md:flex md:justify-between mt-16">
        <Carousel className="rounded-xl ">

        <div className="flex flex-col items-center">
          <img
          className="rounded-xl w-3/4 aspect-[11/16]"
          src="https://m.media-amazon.com/images/M/MV5BMTgwYmQ1MmUtZjhjMS00M2E2LTg4NGMtN2EyZTZkNmMzMWMyXkEyXkFqcGdeQXVyMTMzOTQyOTk1._V1_.jpg"
          alt="Wish (2023) Poster"
          />
        </div>

        <div className="flex flex-col items-center">
          <img
          className="rounded-xl w-3/4 aspect-[11/16]"
          src="https://m.media-amazon.com/images/M/MV5BZjM2ZjIxNzEtOGNhNy00NTFjLWIxYjMtZTE5ODMyYTE3MTI4XkEyXkFqcGdeQXVyMTU5ODM0Nzcw._V1_.jpg"
          alt="Across The Spider-Verse (2023)"
          />
        </div>

        <div className="flex flex-col items-center">
          <img
          className="rounded-xl w-3/4 aspect-[11/16]"
          src="https://m.media-amazon.com/images/M/MV5BNzAyODFiYTAtNGYzYy00NTlkLTg0NDQtMDlkOTEyMjdmMzcyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg"
          alt="The Seabeast (2022)"
          />
        </div>

        <div className="flex flex-col items-center">
          <img
          className="rounded-xl w-3/4 aspect-[11/16]"
          src="https://m.media-amazon.com/images/M/MV5BMmE4MjE4OGYtMDExMy00MWZlLWIwYTMtYzUzMGNmYjk0MTVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX743_.jpg"
          alt="Ron's Gone Wrong (2021)"
          />
        </div>

        <div className="flex flex-col items-center">
          <img
          className="rounded-xl w-3/4 aspect-[11/16]"
          src="https://m.media-amazon.com/images/M/MV5BYmRiYTM3ZGMtNzA1Yy00OWQ1LWE2ZGEtZTRiYzYyZDZjYWYwXkEyXkFqcGdeQXVyMjMwODE4ODI@._V1_FMjpg_UX1000_.jpg"
          alt="100% Wolf (2020)"
          />
        </div>

        <div className="flex flex-col items-center">
          <img
          className="rounded-xl w-3/4 aspect-[11/16]"
          src="https://m.media-amazon.com/images/M/MV5BMGQ2ZDg3YjEtMGUxOC00YWYwLTg1Y2MtZjMyZTdjYTc3NmQ3XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX505_.jpg"
          alt="Dolittle (2020)"
          />
        </div>

        <div className="flex flex-col items-center">
          <img
          className="rounded-xl w-3/4 aspect-[11/16]"
          src="https://m.media-amazon.com/images/M/MV5BN2Y3OTcxZTktMTA3ZC00YjQ4LTg0ZGYtNTE3M2YyYTYwMDMyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX1184_.jpg"
          alt="Pokémon Detective Pikachu (2019)"
          />
        </div>

        <div className="flex flex-col items-center">
          <img
          className="rounded-xl w-3/4 aspect-[11/16]"
          src="https://m.media-amazon.com/images/M/MV5BMjM5MDk2NDIxMF5BMl5BanBnXkFtZTgwNjU5NDk3NTM@._V1_FMjpg_UX1000_.jpg"
          alt="The Predator (2018)"
          />
        </div>

        <div className="flex flex-col items-center">
          <img
          className="rounded-xl w-3/4 aspect-[11/16]"
          src="https://m.media-amazon.com/images/M/MV5BYWFjNGQxZjItOTgxNy00NjhkLWFkZGQtOWVjNzJlYWNhM2NmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1012_.jpg"
          alt="Wonder Woman 1984 (2020)"
          />
        </div>
        
        <div className="flex flex-col items-center">
          <img
          className="rounded-xl w-3/4 aspect-[11/16]"
          src="https://m.media-amazon.com/images/M/MV5BMzRmZDliMGYtNTcxMS00NzU1LTk1ZjgtNjZiNTIyZDUyYTBhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX790_.jpg"
          alt="Aquaman (2018)"
          />
        </div>
        
        </Carousel>
      </div>
      </div>)}

      {/* SEE MORE BTN */}
      <div className="flex flex-col items-center mt-32">
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
      <a
        className="hover:opacity-50 transition duration-500 rounded-sm border border-light-blue w-full h-full flex items-center justify-center p-3"
        href="https://www.imdb.com/name/nm10376670"
        target="_blank"
        rel="noreferrer"
      >
        SEE FULL FILMOGRAPHY
      </a>
        </motion.div>
      </div>

      <LineGradient width="w-full mt-16 opacity-25" />

      {/* PERSONAL SHORT FILMS TITLE */}
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
          Personal Short Films
        </p>
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
          <iframe className="absolute inset-0 w-full h-full px-32" src="https://player.vimeo.com/video/343899153?h=66adebc231" frameborder="0" allowfullscreen></iframe>
        ) : (
          <iframe className="absolute inset-0 w-full h-full" src="https://player.vimeo.com/video/343899153?h=66adebc231" frameborder="0" allowfullscreen></iframe>
        )}
      </div>
      </motion.div>

      <LineGradient width="w-full mt-16 opacity-25" />

      {/* PERSONAL CG ARTWORK TITLE */}
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
            Personal CG Artwork
          </p>
        </motion.div>
      </div>

      {isAboveLarge ? (
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

          <div class="flex flex-col items-center mt-16">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/2 flex-wrap">
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="./assets/personal_art/legobus.png" />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="./assets/personal_art/muc.png" />
          </div>
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="./assets/personal_art/heli.png" />
          </div>
        </div>
        <div class="flex w-1/2 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="./assets/personal_art/gb.png" />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="./assets/personal_art/lumber.png" />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="./assets/personal_art/cargo.png" />
          </div>
        </div>
      </div>
    </div>

      </motion.div>
      ) : (
        <div>
                {/* PERSONAL CG ARTWORK CAROUSEL */}
      <div className="md:flex md:justify-between mt-16">
        <Carousel className="rounded-xl ">

        <div className="flex flex-col items-center">
        <img
        className="rounded-xl"
        src="./assets/personal_art/gb.png"
        />
        </div>
        
        <div className="flex flex-col items-center">
        <img
        className="rounded-xl"
        src="./assets/personal_art/heli.png"
        />
        </div>
        
        <div className="flex flex-col items-center">
        <img
        className="rounded-xl"
        src="./assets/personal_art/lumber.png"
        />
        </div>
        
        <div className="flex flex-col items-center">
        <img
        className="rounded-xl"
        src="./assets/personal_art/cargo.png"
        />
        </div>
        
        <div className="flex flex-col items-center">
        <img
        className="rounded-xl"
        src="./assets/personal_art/legobus.png"
        />
        </div>
        
        <div className="flex flex-col items-center">
        <img
        className="rounded-xl"
        src="./assets/personal_art/muc.png"
        />
        </div>

        
        </Carousel>
      </div>
        </div>
      )}


    </section>
  );
};

export default CreativeWork;
