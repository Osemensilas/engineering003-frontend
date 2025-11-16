import Link from "next/link";

const Footer = () => {
    return ( 
        <>
        <footer className="w-screen bg-neutralDark text-white py-16 px-8 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

                {/* Logo and description */}
                <div className="flex-1 flex flex-col items-center md:items-start">
                    <img src="/placeholder-logo.png" alt="Company Logo" className="h-[50px] w-[100px] mb-4" />
                    <p className="text-gray-300 mb-4 max-w-xs text-center md:text-left">
                        Lorem Ipsum Company – delivering excellence through innovation, reliability, and expertise.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fa fa-facebook text-xl text-primary"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <i className="fa fa-whatsapp text-xl text-primary"></i>
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 flex flex-col items-center md:items-start">
                    <h4 className="font-bold mb-4 text-lg">Navigation</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/" className="hover:text-primary">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-primary">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div className="flex-1">
                    <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
                    <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="px-4 py-2 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            className="px-4 py-2 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            rows={3}
                            className="px-4 py-2 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-primary text-offBlack font-semibold py-2 rounded hover:bg-opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>

            <div className="text-center text-gray-400 mt-12 text-sm">
                &copy; {new Date().getFullYear()} Lorem Ipsum Company. All rights reserved.
            </div>
        </footer>
        </>
     );
}

export default Footer;
