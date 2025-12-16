import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../Components/ContactForm";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Samaran Foods | Dairy Products in Ilayangudi</title>

        <meta
          name="description"
          content="Get in touch with Samaran Foods, Ilayangudi – leading provider of pure dairy products including kulfi, paneer, ghee, and milk. Contact us via phone or email for orders and inquiries."
        />

        <meta
          name="keywords"
          content="Samaran Foods contact, dairy products Ilayangudi, kulfi, paneer, ghee, milk, Samaran Foods email, Samaran Foods phone number"
        />
        {/* Language */}
        <meta http-equiv="Content-Language" content="en" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Samaran Foods – Trusted Dairy Brand"
        />
        <meta
          property="og:description"
          content="Reach out to Samaran Foods for fresh and hygienic dairy products in Ilayangudi, Tamil Nadu. Call or email for more information."
        />
        <meta
          property="og:image"
          content="https://www.samaranfoods.com/samaranLogo.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Samaran Foods" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Samaran Foods – Trusted Dairy Brand"
        />
        <meta
          name="twitter:description"
          content="Reach out to Samaran Foods for fresh and hygienic dairy products in Ilayangudi, Tamil Nadu. Call or email for more information."
        />
        <meta
          name="twitter:image"
          content="https://samaranfoods.com/samaranLogo.png"
        />
        <meta name="twitter:url" content="https://samaranfoods.com/contact" />
        <meta name="twitter:site" content="@NKulfi4677" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {`
{
  "@context": "https://www.schema.org",
  "@type": "LocalBusiness",
  "name": "Samaran Foods",
  "image": "https://samaranfoods.com/samaranLogo.png",
  "telephone": "+91-9629340194",
  "email": "nammasamarankulfi@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ilayangudi",
    "addressRegion": "Tamil Nadu",
    "postalCode": "630702",
    "addressCountry": "IN"
  },
  "url": "https://samaranfoods.com/contact",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61565219919689",
    "https://www.instagram.com/nammasamaranfood?igsh=MWVhb2ozeWJzdTZoYg=="
  ],
  "openingHours": "Mo-Su 09:00-18:00"
}
`}
        </script>
        {/* canonical Tag */}
        <link rel="canonical" href="https://www.samaranfoods.com/contact" />
      </Helmet>
      <div
        className="w-full relative pt-32 pb-20 px-6 md:px-20"
        style={{ fontFamily: "poppins" }}
      >
        {/* CONTENT */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 relative  z-10">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <img
              src="/samaranLogo.webp"
              alt="Samaran Logo"
              className="w-48 mb-4 rounded-2xl"
            />

            <h1 className="sr-only">
              Contact Samaran Foods – Pure Dairy Products in Ilayangudi
            </h1>

            <h2
              className="text-xl font-semibold uppercase"
              style={{ fontFamily: "inter" }}
            >
              Samaran Foods Industries – Ilayangudi, Tamil Nadu
            </h2>

            <p className="flex items-start gap-2 text-gray-700 text-sm md:text-md">
              <MapPin className="mt-1" />
              <strong>Address:</strong>Samaran Food Industries <br />
              Ilayangudi, Sivaganga District,
              <br /> Tamil Nadu – 630702
            </p>

            <p className="flex items-center gap-2 text-gray-700 text-sm md:text-md">
              <Phone />
              <strong>Phone:</strong>9629340194, 8489701768
            </p>

            <p className="flex items-center gap-2 text-gray-700 text-sm md:text-md">
              <Mail /> <strong>Email:</strong>nammasamarankulfi@gmail.com
            </p>
            <p className="text-gray-600 text-sm md:text-md">
              Contact us for fresh and hygienic <strong>dairy products</strong>{" "}
              including
              <strong> kulfi</strong>, <strong>paneer</strong> and
              <strong> milk</strong>. We are committed to providing high-quality
              products with authentic taste.
            </p>
          </motion.div>

          {/* RIGHT SECTION */}

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
