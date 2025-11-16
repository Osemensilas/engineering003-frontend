import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Image from "next/image";


export default function Home() {

  const [expandedImg, setExpandedImg] = useState(null);
  const [openNav, setOpenNav] = useState(false);

  const works = [
    { src: "/work1.jpeg", alt: "2 X 1MVA transformers installed at NPDC, Benin City" },
    { src: "/work2.jpg", alt: "Installation of PVC pipes on several projects" },
    { src: "/work3.jpeg", alt: "Metering system for 33KV supply line"},
    { src: "/work4.jpeg", alt: "4 X 650KVA generators installed with termination of supply cable"},
    { src: "/work5.jpg", alt: "800A gear switch installed for Auditorium building, NPDC, Benin City"},
    { src: "/work6.jpeg", alt: "33KV ABB HT panel installed and commissioned with two outgoing"},
  ];


  const missionVisionCards = [
    {
      title: "Our Mission",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nisl eu justo finibus, nec tincidunt nunc porttitor. Nulla facilisi. Mauris gravida elit ac mi aliquet, sed tempus velit laoreet.",
    },
    {
      title: "Our Vision",
      content:
        "Vivamus venenatis mauris vel elit interdum, at condimentum augue volutpat. Phasellus ac sem vel dui pulvinar dictum. Aliquam vehicula sapien nec lectus malesuada, ut cursus leo viverra. Pellentesque habitant morbi tristique.",
    },
  ];

  const [mvIndex, setMvIndex] = useState(0);

  useEffect(() => {
    const mvInterval = setInterval(() => {
      setMvIndex((prev) => (prev + 1) % missionVisionCards.length);
    }, 15000);
    return () => clearInterval(mvInterval);
  }, []);

  const [formVisible, setFormVisible] = useState("w-screen h-screen px-2 fixed top-0 left-0 z-100 hidden after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");

  const seeForm = () => {
      setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");
  };

  const cancelForm = () => {
      setFormVisible("w-screen h-screen px-2 fixed top-0 left-0 z-20 hidden after:top-[0] after:left-[0] after:w-screen after:h-screen after:absolute after:content-[''] after:bg-black after:opacity-[0.4]");
  };

  return (
    <>
    <Head>
      <title>Home Page | Enermill Power Limited</title>
    </Head>
    <section id="home-hero" className="home-hero">
      <Header />
      <div className="hero-background">
        <Image src="/hero1.jpg" fill className="object-fill" alt="hero image" />
      </div>
      <div className="mid-hero">
        <h2 className="text-3xl sm:text-6xl text-neutralLight font-bold">Prime Engineering</h2>
        <p className="text-neutralLight text-base text-center sm:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button onClick={seeForm} className="bg-primary text-base text-neutralLight py-3 px-12 rounded-full">Contact Us</button>
      </div>
    </section>
    <section id="booking" className={formVisible}>
        <div className="w-full flex items-center justify-end" style={{ height: '60px' }}>
            <div onClick={cancelForm} className="relative cursor-pointer z-30" style={{ width: '40px', height: '40px' }}>
                <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-neutralLight rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-neutralLight -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
            </div>
        </div>
        <div className="w-full flex items-center justify-center z-[999]" style={{ height: 'calc(100vh - 60px)' }}>
            <ContactForm />
        </div>
    </section>
    <section className="w-screen h-max py-[50px] relative z-10 bg-transparent px-[10px] sm:px-[40px]">
      <h2 className="text-center text-accent text-3xl sm:text-5xl mb-4">Why we should be your</h2>
      <h2 className="text-center text-accent text-3xl sm:text-5xl mb-10">Top Choice</h2>
      <p className="text-accent text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
      <div className="w-full h-max flex items-center justify-center mt-20">
        <Link className="px-10 py-4 border-[2px] border-primary hover:border-none bg-transparent hover:bg-primary rounded-full text-primary hover:text-offBlack transition-all duration-300 ease-in-out" href={"/about"}>Learn More</Link>
      </div>
    </section>
    <section className="w-screen h-max py-[50px] bg-white px-[40px] flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
      {/* Left: About Us Text */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-offBlack text-4xl font-bold mb-20">About Us</h2>
        <p className="text-neutralDark text-lg text-justify mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, lorem et vulputate pulvinar, nisl orci porttitor augue, id ultrices lectus lorem vel risus. Integer sodales, purus a convallis faucibus, ipsum elit tincidunt tortor, vitae interdum sem justo et purus. Curabitur euismod, odio a molestie pharetra, neque augue faucibus lectus, non dapibus nibh augue non magna. Sed tristique, arcu non gravida vulputate, mauris libero ultricies massa, a ultrices velit augue sit amet mi. Vivamus non orci nec sapien mattis facilisis. Nullam in magna at sapien aliquam ultricies. Praesent consequat, mi non tincidunt congue, sapien urna bibendum lorem, vel tristique tortor magna sed nunc.
        </p>
        <div className="h-max w-max">
          <Link 
            href="/about"
            className="px-8 py-3 border-2 border-primary bg-transparent hover:bg-primary rounded-full text-primary hover:text-offBlack transition-all duration-300"
          >
            Read More About Us
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        <img 
          src="/about.jpg" 
          alt="About Enermill Power Limited" 
          className="rounded-xl shadow-lg w-full max-w-md object-cover"
        />
      </div>
    </section>
    <section className="w-screen h-max py-[50px] bg-transparent px-[40px] flex flex-col items-center justify-center relative z-10">
      <h2 className="text-accent text-4xl font-bold mb-10 text-center">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">

        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Lorem Ipsum Dolor</h3>
          <p className="text-neutralDark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius arcu sed nunc congue, ut ornare nibh cursus. Cras a dui in purus sollicitudin ultrices.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Sit Amet Consectetur</h3>
          <p className="text-neutralDark">
            Integer eget leo at odio egestas porttitor. Etiam molestie malesuada risus, quis luctus lorem vehicula non. Aenean mattis augue vitae gravida vulputate.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Adipiscing Elit Nulla</h3>
          <p className="text-neutralDark">
            Suspendisse potenti. Praesent sit amet urna placerat, iaculis ipsum sed, consequat sapien. Sed vitae lacus id velit gravida placerat sed ut est.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-primary text-2xl font-semibold mb-4">Curabitur Vitae Nunc</h3>
          <p className="text-neutralDark">
            Pellentesque aliquet elit eu massa tempus, eu dictum neque semper. Donec id sollicitudin leo. Vivamus nec lorem ut lorem sodales suscipit quis at arcu.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300 col-span-1 md:col-span-2 md:mx-auto md:w-1/2">
          <h3 className="text-primary text-2xl font-semibold mb-4">Fusce Ultrices Magna</h3>
          <p className="text-neutralDark">
            Nullam euismod sem non aliquam interdum. Suspendisse non odio quam. Donec finibus, urna vitae tempus pharetra, nisl massa convallis lorem, vitae posuere nibh lacus id risus.
          </p>
        </div>

      </div>
    </section>

    <section
      className="project w-screen py-20 flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/new-project.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-primary/70 pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </h2>

        <p className="text-white text-lg mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies
          purus a semper varius. Sed vehicula velit id nulla interdum, eget
          consectetur lacus eleifend. Pellentesque tempor, arcu vel rhoncus
          ullamcorper, est risus auctor risus, id fringilla odio lorem id turpis.
        </p>

        <button
          onClick={seeForm}
          className="px-8 py-3 bg-transparent hover:bg-primary text-primary border-[2px] border-primary hover:border-transparent hover:text-neutralDark font-semibold rounded-full shadow transition"
        >
          Lorem Ipsum
        </button>
      </div>
    </section>

    <section className="w-screen h-max py-[70px] bg-white px-[40px] flex flex-col items-center justify-center relative z-10">
      <div className="w-full max-w-xl mx-auto">
        <div className="relative">
          {missionVisionCards.map((card, idx) =>
            idx === mvIndex ? (
              <div
                key={card.title}
                className="bg-primary text-white rounded-xl shadow-lg p-10 flex flex-col items-center justify-center transition-all duration-700"
              >
                <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                <p className="text-lg text-center">{card.content}</p>
              </div>
            ) : null
          )}
          {/* Optional: Add manual navigation */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <button
              aria-label="Previous"
              className="text-primary bg-white rounded-full shadow p-2 text-2xl"
              onClick={() =>
                setMvIndex((prev) =>
                  prev === 0 ? missionVisionCards.length - 1 : prev - 1
                )
              }
            >
              ‹
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <button
              aria-label="Next"
              className="text-primary bg-white rounded-full shadow p-2 text-2xl"
              onClick={() =>
                setMvIndex((prev) => (prev + 1) % missionVisionCards.length)
              }
            >
              ›
            </button>
          </div>
        </div>
        {/* Dots indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {missionVisionCards.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === mvIndex ? "bg-primary" : "bg-gray-300"
                } inline-block`}
            ></span>
          ))}
        </div>
      </div>
    </section>
    <section className="w-screen py-20 px-4 relative z-10 sm:px-16 bg-neutralDark flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Client Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">

        <div className="bg-white rounded-xl shadow p-8 flex flex-col">
          <p className="text-lg text-neutralDark mb-4 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae leo ut tellus luctus aliquam. Integer sit amet elit vel est commodo fringilla a sed turpis."
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <div>
              <div className="font-semibold text-primary">Emily Carter</div>
              <div className="text-sm text-gray-500">Vancouver, Canada</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-8 flex flex-col">
          <p className="text-lg text-neutralDark mb-4 italic">
            "Sed euismod magna non tortor luctus bibendum. Curabitur aliquam augue quis risus varius, sed semper metus tincidunt. Suspendisse vulputate velit quis augue posuere."
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <div>
              <div className="font-semibold text-primary">Liam Anderson</div>
              <div className="text-sm text-gray-500">Oslo, Norway</div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section className="w-screen h-max py-[70px] bg-white px-[40px] flex flex-col items-center justify-center relative z-10">
      <h2 className="text-offBlack text-4xl font-bold mb-10 text-center">Our Clients</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl items-center justify-items-center">
        <img src="/meetvertical.png" alt="Client 1" className="h-20 object-contain" />
        <h2 className="text-xl font-bold text-purple-500">FALHUM INVESTMENT</h2>
        <img src="/convergees.png" alt="Client 3" className="h-20 object-contain" />
        <img src="/kumbit.png" alt="Client 4" className="h-20 object-contain" />
        {/* Add more client logos as needed */}
      </div>
    </section>
    </>
  );
}
