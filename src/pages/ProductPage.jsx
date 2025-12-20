import React from "react";
import { motion } from "framer-motion";
import samaranKulfi from "../assets/product_img/productKulfi.webp";
import samaranPaneer from "../assets/product_img/productPanner.webp";
import banner from "/samaran_banner.webp";
import { Helmet } from "react-helmet";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Samaran Kulfi",
      image: samaranKulfi,
      description:
        "Samaran குல்ஃபி என்பது உண்மையான பசும்பாலில் இருந்து தயாரிக்கப்படும் பாரம்பரிய குல்ஃபி ஐஸ்கிரீம். அனுபவிக்கும் ஒவ்வொரு சுவைப்பிலும் மென்மையான தணிவு மற்றும் இயற்கையான பால் மணம் உணரலாம்.",

      nutrition: [
        { label: "Energy", value: "201" },
        { label: "Fat", value: "3.0 g" },
        { label: "Protein", value: "1.1" },
        { label: "Carbohydrate", value: "35.6" },
        { label: "Calcium", value: "45.1" },
      ],
    },

    {
      id: 2,
      name: "Samaran Paneer",
      image: samaranPaneer,
      description:
        "Samaran பனீர் என்பது மென்மையான அமைப்பு கொண்ட, உயர்தரமான பனீர். உண்மையான பால் மணம் மற்றும் இயற்கையான சுவை அதன் சிறப்பு. சத்தான புரதம் நிறைந்ததால் தினசரி உணவுக்கு சிறந்த தேர்வு.",
      nutrition: [
        { label: "Energy", value: "265" },
        { label: "Fat", value: "21 g" },
        { label: "Protein", value: "18 g" },
        { label: "Carbohydrate", value: "3 g" },
        { label: "Calcium", value: "208 mg" },
      ],
    },
  ];

  const bannerSlide = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <Helmet>
        <title>
          Samaran Products | Kulfi & Paneer – Pure Dairy Products in Ilayangudi
        </title>

        <meta
          name="description"
          content="Samaran Foods Ilayangudi offers pure and hygienic dairy products including traditional kulfi and fresh paneer. Made from real milk with authentic taste and trusted quality."
        />

        <meta
          name="keywords"
          content="dairy products, kulfi, paneer, ghee, curd, milk products, best milk company, ilayangudi, samaran foods, samaran kulfi, samaran paneer, dairy products in ilayangudi"
        />
        {/* Language */}
        <meta httpEquiv="Content-Language" content="en, ta" />

        <meta
          property="og:title"
          content="Samaran Foods Products – Pure Dairy Products"
        />
        <meta
          property="og:description"
          content="Traditional kulfi and fresh paneer made with pure milk and modern hygiene at Samaran Foods, Ilayangudi."
        />
        <meta
          property="og:image"
          content="https://samaranfoods.com/samaran_banner.webp"
        />
        <meta property="og:url" content="https://samaranfoods.com/products" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Samaran Foods" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Samaran Foods Products – Pure Dairy Products"
        />
        <meta
          name="twitter:description"
          content="Traditional kulfi and fresh paneer made with pure milk and modern hygiene at Samaran Foods, Ilayangudi."
        />
        <meta
          name="twitter:image"
          content="https://samaranfoods.com/samaran_banner.webp"
        />
        <meta name="twitter:url" content="https://samaranfoods.com/products" />
        <meta name="twitter:site" content="@NKulfi4677" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Collection Page Schema */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Samaran Foods Products",
      "url": "https://samaranfoods.com/products"
    }
    `}
        </script>

        <script type="application/ld+json">
          {`
    {
      "@context": "https://www.schema.org",
      "@type": "CollectionPage",
      "name": "Samaran Kulfi",
      "image": "https://samaranfoods.com/samaran_banner.webp",
      "description": "Traditional fresh kulfi made from pure milk.",
      "brand": {
        "@type": "Brand",
        "name": "Samaran Foods"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://samaranfoods.com/products",
        "priceCurrency": "INR",
        "price": "60",
        "availability": "https://schema.org/InStock"
      }
    }
    `}
        </script>

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Samaran Paneer",
      "image": "https://samaranfoods.com/samaran_banner.webp",
      "description": "Hygienic fresh paneer made from pure milk.",
      "brand": {
        "@type": "Brand",
        "name": "Samaran Foods"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://samaranfoods.com/products",
        "priceCurrency": "INR",
        "price": "100",
        "availability": "https://schema.org/InStock"
      }
    }
    `}
        </script>

        {/* canonical Tag */}
        <link rel="canonical" href="https://samaranfoods.com/products" />
      </Helmet>
      <div className="w-full bg-white py-16 px-2 md:px-10 mt-10 ">
        <motion.div
          className="w-full md:h-130 h-50 mb-10"
          variants={bannerSlide}
          initial="hidden"
          animate="show"
        >
          <img
            src={banner}
            title="Samaran Product Banner"
            className="h-full w-full rounded-3xl"
            alt="samaran banner"
            loading="lazy"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col-reverse gap-20 md:px-16 px-6 ">
          {products.map((item, index) => (
            <div
              key={item.id}
              className={`grid md:grid-cols-2 gap-10 items-center`}
            >
              {/* Left — Product Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`flex justify-center
  order-2
  ${index % 2 === 0 ? "md:order-2" : "md:order-1"}
`}
              >
                <img
                  src={item.image}
                  title={item.name}
                  alt={item.name}
                  loading="lazy"
                  className="w-[320px] md:w-[550px]
    aspect-16/11
    drop-shadow-xl
    rounded-2xl"
                />
              </motion.div>

              {/* Right — Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`order-1
  ${index % 2 === 0 ? "md:order-1" : "md:order-2"}
`}
              >
                <h2
                  className="text-3xl md:text-5xl  text-[#1D3C6A]"
                  style={{ fontFamily: "Berkshire Swash" }}
                >
                  {item.name}
                </h2>

                <p
                  className="text-gray-700 mt-4 leading-relaxed"
                  style={{ fontFamily: "Catamaran" }}
                >
                  {item.description}
                </p>

                <h3
                  className="text-2xl font-semibold text-[#1D3C6A] mt-8 mb-4"
                  style={{ fontFamily: "inter" }}
                >
                  Energy
                </h3>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table
                    className="w-full border border-gray-300 text-left"
                    style={{ fontFamily: "inter" }}
                  >
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-3 border border-gray-300 text-gray-700">
                          NUTRITIONAL INFORMATION
                        </th>
                        <th className="p-3 border border-gray-300 text-gray-700">
                          per 100g (Approx.)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.nutrition.map((nutri, index) => (
                        <tr key={index}>
                          <td className="p-3 border">{nutri.label}</td>
                          <td className="p-3 border">{nutri.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
