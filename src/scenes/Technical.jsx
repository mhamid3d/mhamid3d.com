import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Carousel } from "@material-tailwind/react";


const TechnicalWork = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="technical work" className="pt-10 pb-48">
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
            Technical <span className="text-red">Work</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

      </div>
      
      {/* PIPELINE TITLE */}
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
            Full-Stack CG Pipeline Development
        </p>
      </motion.div>
      </div>

      {/* TECH STACK ICONS */}
      <div className="flex justify-center mt-16 md:gap-16">
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/django.png" />
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/postgres.png" />
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/python.png" />
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/usd.png" />
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/cpp.png" />
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/qt.png" />
      </div>

      {/* PIPELINE TITLE */}
      <div className="flex flex-col items-center mt-16">
        <p className="font-semibold text-xl mb-5">
            Pipeline Backend
        </p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-center mt-16 gap-8">
        <div className="md:w-1/2 flex flex-col items-center">
          <h4 className="font-semibold mt-8">Django Model Breakdown</h4>
          <img className="mt-4 rounded-lg" src="./assets/tech_slides/models_overview.png"/>
        </div>
        <div className="md:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mt-8">REST API Endpoints</h4>
            <img className="mt-4 rounded-lg" src="./assets/tech_slides/endpoints.png"/>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mt-8">API Response Data</h4>
            <img className="mt-4 rounded-lg" src="./assets/tech_slides/api_response.png"/>
          </div>
        </div>
      </div>


    </section>
  );
};

export default TechnicalWork;
