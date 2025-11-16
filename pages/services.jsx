import Head from "next/head";
import { motion } from "framer-motion";

const services = [
  {
    title: "Lorem Ipsum Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel magna non neque posuere cursus nec ac ipsum.",
    icon: "fa fa-cogs",
  },
  {
    title: "Dolor Sit Construction",
    description:
      "Suspendisse potenti. Cras malesuada, nisl vel facilisis egestas, magna nulla suscipit arcu, et blandit ipsum mauris vitae nulla.",
    icon: "fa fa-gear",
  },
  {
    title: "Amet Operation & Maintenance",
    description:
      "Pellentesque sed mi felis. Phasellus at augue eget leo porta tincidunt non vitae ligula. Integer sit amet augue velit.",
    icon: "fa fa-wrench",
  },
  {
    title: "Consectetur Consultancy",
    description:
      "Aliquam interdum urna vitae lorem vehicula, eget facilisis lacus congue. Vivamus pharetra orci ut leo lacinia dictum.",
    icon: "fa fa-clipboard",
  },
  {
    title: "Adipiscing Optimization",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sodales, urna nec facilisis luctus.",
    icon: "fa fa-lightbulb-o",
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services | Lorem Ipsum Company</title>
      </Head>

      <section className="relative z-10 w-screen min-h-[60vh] py-20 px-4 sm:px-16 bg-white flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Our Services
        </motion.h1>

        <p className="max-w-3xl text-lg text-neutralDark mb-12 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
          lacus eu justo viverra euismod. Morbi ultricies sapien sit amet arcu
          tincidunt, ut egestas eros commodo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-neutral-100 rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className={`${service.icon} text-3xl`}></i>
              </div>

              <h3 className="text-primary text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-neutralDark">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
