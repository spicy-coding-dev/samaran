import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, TextField } from "@mui/material";

const ContactForm = () => {
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
    formData.append("access_key", "32fe1743-590e-4b48-9cb8-b3eddec98878");
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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
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
          InputLabelProps={{
            style: { fontFamily: "inter" },
          }}
        />

        <TextField
          label="Enter Your Phone Number"
          variant="filled"
          fullWidth
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          InputProps={{ style: { background: "white" } }}
          InputLabelProps={{
            style: { fontFamily: "inter" },
          }}
        />

        <TextField
          label="Enter Your Email"
          variant="filled"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ style: { background: "white" } }}
          InputLabelProps={{
            style: { fontFamily: "inter" },
          }}
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
          InputLabelProps={{
            style: { fontFamily: "inter" },
          }}
        />

        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ backgroundColor: "green" }}
            style={{ fontFamily: "inter" }}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </motion.div>

        {/* Result Message */}
        {result && (
          <p className="text-white text-center mt-3 font-semibold">{result}</p>
        )}
      </motion.form>
  );
};

export default ContactForm;
