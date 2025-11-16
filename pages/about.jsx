import Head from "next/head";
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <Head>
                <title>About Us | Lorem Ipsum Company</title>
            </Head>

            <section className="relative w-screen min-h-[60vh] py-20 px-4 sm:px-16 bg-white flex flex-col items-center justify-center z-10">
                
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-center"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    About Us
                </motion.h1>

                <p className="max-w-4xl text-lg text-neutralDark mb-8">
                    <span className="font-semibold">Prime Engineering</span> lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan tincidunt velit, vitae mattis lorem mattis id. Integer viverra, nunc in vehicula dictum, neque urna suscipit velit, vitae pulvinar urna massa sed turpis.
                </p>

                <div className="max-w-4xl text-neutralDark text-base space-y-6 text-justify">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a ante id elit facilisis euismod. Integer fermentum, nisi vel condimentum suscipit, tortor nisl mattis quam, sed laoreet lacus ex sit amet arcu.
                    </p>
                    <p>
                        Suspendisse potenti. Sed ac nunc vel ligula vulputate luctus. Mauris cursus tortor non sapien pretium, et condimentum ipsum vehicula. Quisque faucibus libero ac lectus interdum elementum.
                    </p>
                    <p>
                        Etiam porttitor augue vel turpis feugiat vulputate. Duis id risus velit. Vivamus commodo ultricies facilisis. Nullam eget arcu vulputate, dictum velit a, interdum ipsum.
                    </p>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-8 w-full max-w-4xl">
                    <div className="flex-1 bg-neutral-100 rounded-xl shadow p-6">
                        <h2 className="text-primary text-2xl font-semibold mb-2">Our Mission</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non mauris sit amet augue laoreet dapibus nec sed urna.
                        </p>
                    </div>

                    <div className="flex-1 bg-neutral-100 rounded-xl shadow p-6">
                        <h2 className="text-primary text-2xl font-semibold mb-2">Our Vision</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus orci eu varius eleifend. Duis efficitur id ligula quis viverra.
                        </p>
                    </div>
                </div>

                <div className="mt-12 w-full max-w-4xl bg-neutral-100 rounded-xl shadow p-6">
                    <h2 className="text-primary text-2xl font-semibold mb-4">Registration Details</h2>
                    <ul className="text-neutralDark list-disc list-inside space-y-2">
                        <li><strong>Legal Name:</strong> Lorem Ipsum Company</li>
                        <li><strong>Company Registration #:</strong> 00000000</li>
                        <li><strong>Status:</strong> Active</li>
                        <li><strong>Corporate Office:</strong> 123 Placeholder Street, Example City, Country</li>
                        <li><strong>Contact:</strong> +0000000000 | example@email.com</li>
                    </ul>
                </div>

            </section>
        </>
    );
};

export default About;
