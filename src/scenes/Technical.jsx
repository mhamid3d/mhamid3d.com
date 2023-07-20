import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Carousel } from "@material-tailwind/react";

import StorageIcon from '@mui/icons-material/Storage';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import CodeIcon from '@mui/icons-material/Code';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import LinkIcon from '@mui/icons-material/Link';


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
      <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
      >
      <div className="flex justify-center mt-16 md:gap-16">
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/django.png" />
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/postgres.png" />
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/python.png" />
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/usd.png" />
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/cpp.png" />
        <img className="max-h-[3rem] md:max-h-[4rem] px-1 md:px-6 object-cover rounded-xl" src="./assets/tech_stack/qt.png" />
      </div>
      </motion.div>

      <div className="flex flex-col justify-between mt-32 gap-8">
        {/* Pipeline Database Design */}
        <div className="flex flex-wrap md:flex-nowrap justify-start gap-8">
          <div className="md:w-1/2 flex flex-col items-start gap-4">
            <h4 className="font-semibold text-xl mt-8"><span><StorageIcon className="mr-2 opacity-75 align-sub" /></span>Database Schema Design</h4>
            <LineGradient width="w-1/3" />
            <p>
              Creating low-level database schema designs with efficient abstraction, tailored for VFX & CG Production.
              Schema and implementation examples:
            </p>
            <img className="mt-4 rounded-lg" src="./assets/tech_slides/model_example.png"/>
          </div>
          <img className="md:w-1/2 mt-4 rounded-lg" src="./assets/tech_slides/models_overview.png"/>
        </div>
        <LineGradient width="w-full" />
        {/* Rest API */}
        <div className="flex flex-wrap md:flex-nowrap justify-start gap-8">
          <div className="md:w-1/2 flex flex-col items-start gap-4">
            <h4 className="font-semibold text-xl mt-8"><span><LeakAddIcon className="mr-2 opacity-75 align-sub" /></span>REST API Development</h4>
            <LineGradient width="w-1/3" />
            <p>
              Constructing a sophisticated and secure REST API to appropriatly serve central data to users in production.
              This includes properly serializing bi-directional data, managing user permissions per-studio/per-show,
              configuring filtered searches from client interface, and much more.
            </p>
          </div>
          <img className="md:w-1/2 mt-4 rounded-lg" src="./assets/tech_slides/endpoints.png"/>
        </div>
        <LineGradient width="w-full" />
        {/* Client Side Python ORM */}
        <div className="flex flex-wrap md:flex-nowrap justify-start gap-8">
          <div className="md:w-1/2 flex flex-col items-start gap-4">
            <h4 className="font-semibold text-xl mt-8"><span><CodeIcon className="mr-2 opacity-75 align-sub" /></span>User-End ORM Python Client</h4>
            <LineGradient width="w-1/3" />
            <p>
              Providing a python API for users and technical directors to interact with the API and Database. Allowing users to query, publish, edit, and delete production assets.
            </p>
          </div>
          <img className="md:w-1/2 mt-4 rounded-lg" src="./assets/tech_slides/client_orm.png"/>
        </div>
        <LineGradient width="w-full" />
        {/* User Interface */}
        <div className="flex flex-col items-start gap-4">
          <h4 className="font-semibold text-xl mt-8"><span><ScreenshotMonitorIcon className="mr-2 opacity-75 align-sub" /></span>Modern QT User Interfaces</h4>
          <LineGradient width="w-1/3" />
          <p>
            Designing modern and resource efficient QT user interfaces for ease of access and sensible navigation within the pipeline.
          </p>
          {/* <div className="flex flex-wrap md:flex-nowrap justify-start gap-4"> */}
          <img className="md:w-[70%] mt-4 rounded-lg" src="./assets/tech_slides/ui.jpg"/>
          <img className="md:w-[70%] mt-4 rounded-lg" src="./assets/tech_slides/ui2.jpg"/>
          {/* </div> */}
        </div>
        <LineGradient width="w-full" />
        {/* Asset URI - USD AR 2.0 */}
        <div className="flex flex-wrap md:flex-nowrap justify-start gap-8">
          <div className="md:w-1/2 flex flex-col items-start gap-4">
            <h4 className="font-semibold text-xl mt-8"><span><LinkIcon className="mr-2 opacity-75 align-sub" /></span>Asset URI - USD AR 2.0</h4>
            <LineGradient width="w-1/3" />
            <p>
              URI implementation for to produce modular and agnostic file paths. USD AR 2.0 support.
            </p>
            <img className="mt-4 rounded-lg" src="./assets/tech_slides/uri_resolve.png"/>
          </div>
          <img className="md:w-1/2 mt-4 rounded-lg" src="./assets/tech_slides/usd_uri.png"/>
        </div>
      </div>


    </section>
  );
};

export default TechnicalWork;
