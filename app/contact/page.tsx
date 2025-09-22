import FlipLink from "@/components/FlipLink";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between px-6 md:px-20 py-10">
      {/* Top Section */}
      <div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold">
          Contact me
        </h1>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-10">
          {/* Left Column */}
          <div className="space-y-6 text-base sm:text-lg">
            <p>
              Manhattan, New York <br />
              2023
            </p>
            <div>
              <p className="font-semibold">Office hours</p>
              <p>
                Monday – Friday <br />
                11 AM – 2 PM
              </p>
            </div>
          </div>

          {/* Right Column - Google Map */}
          <div className="w-full h-60 bg-black sm:h-72 md:h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.917494176448!2d-73.98715568459396!3d40.74881707932762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a0f3ff%3A0xbaa1d9e0a77e4c3b!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1694445872980!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="grid gap-8 md:grid-cols-3 items-start md:items-center mt-20 border-t border-gray-700 pt-8 text-sm">
        {/* Column 1 */}
        <div className="space-y-2">
          <p className="font-bold text-2xl sm:text-3xl">coffeon@studio.com</p>
          <p>
            Manhattan, New York <br />
            2025
          </p>
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          <p>(+48) 762 864 075</p>
          <p>
            Office hours <br />
            Monday – Friday 11 AM – 2 PM
          </p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-3 md:items-end text-center md:text-right">
          <a href="#" className="hover:underline">
            Work with us
          </a>
          <div className="flex justify-center md:justify-end gap-4 text-lg sm:text-xl">
            <FlipLink href="#">Behance</FlipLink>
            <FlipLink href="#">Instagram</FlipLink>
            <FlipLink href="#">LinkedIn</FlipLink>
          </div>
          <p className="text-xs text-gray-400">Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}
