import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function UltraLanding() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const headline = "AI-Powered Title Verification System";

  /* ================= Typing Effect ================= */

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(headline.slice(0, i));
      i++;
      if (i > headline.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  /* ================= MongoDB Fetch ================= */

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:5000/api/features");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  /* ================= Animations ================= */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ===== Mesh Gradient Background ===== */}

      <motion.div
        className="absolute w-[600px] h-[600px] bg-indigo-600 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 100, -100], y: [0, -100, 100] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -100, 100], y: [0, 100, -100] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      {/* ===== Content Wrapper ===== */}

      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto">

        {/* ===== Hero Section ===== */}

        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="text-center mb-20"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text"
          >
            {text}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-slate-400 text-lg"
          >
            Semantic similarity detection & regulatory compliance engine
          </motion.p>
        </motion.div>

        {/* ===== Grid Section ===== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-60 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 animate-pulse"
                  />
                ))
            : data.map((itemData, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="relative p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition duration-300"
                >
                  <div className="absolute inset-0 rounded-xl border border-white/10 shadow-inner shadow-white/5"></div>

                  <Sparkles className="text-cyan-400 mb-4" size={28} />

                  <h3 className="text-xl font-semibold mb-3">
                    {itemData.title}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {itemData.description}
                  </p>
                </motion.div>
              ))}
        </motion.div>
      </div>
    </div>
  );
}