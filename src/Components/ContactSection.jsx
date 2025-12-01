import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import cowImg from "../assets/cow.png";
import grassImg from "../assets/grass.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUs = () => {
  // Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  // **Web3Forms Submission**
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("access_key", "bac70c0c-7344-4e73-a7db-4cfe77b88236");
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");

        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("❌ Something went wrong!");
      }
    } catch (error) {
      setResult("❌ Error sending message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-[90vh] bg-[#e9f5e9] relative py-10 ">
      <img
        src={grassImg}
        alt="grass"
        className="absolute md:-bottom-50 -bottom-12 left-0 w-full h-auto z-0"
      />

      <img
        src={cowImg}
        alt="cow"
        className="absolute md:-left-5 md:bottom-50 top-0 -left-7 w-48 md:w-64 lg:w-80 select-none"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-semibold text-black mb-3"
          style={{ fontFamily: "Berkshire Swash" }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-gray-700 mb-8 mt-15 md:mt-0 "
          style={{ fontFamily: "poppies" }}
        >
          Distributors & retailers are welcome.<br/> Minimum order details on
          request.
        </motion.p>

        {/* FORM START */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-black/70 p-6 rounded-lg shadow-2xl shadow-green-900/40"
          style={{ fontFamily: "inter" }}
        >
          <TextField
            label="Enter Your Name"
            variant="filled"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{ style: { background: "white" } }}
          />

          <TextField
            label="Enter Your Phone Number"
            variant="filled"
            fullWidth
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{ style: { background: "white" } }}
          />

          <TextField
            label="Enter Your Email"
            variant="filled"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ style: { background: "white" } }}
          />

          <TextField
            label="Type Your Message here"
            multiline
            required
            rows={4}
            variant="filled"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            InputProps={{ style: { background: "white" } }}
          />

          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ backgroundColor: "green" }}
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </motion.div>

          {/* Result Message */}
          {result && (
            <p className="text-white text-center mt-3 font-semibold">
              {result}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
