import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Zap, Target, TrendingUp } from "lucide-react";

const BannerSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Cpu, label: "AI-Powered" },
    { icon: Zap, label: "Lightning Fast" },
    { icon: Target, label: "ATS-Optimized" },
    { icon: TrendingUp, label: "Career Growth" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 relative overflow-hidden bg-foreground"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer bg-[length:200%_100%]" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                <item.icon className="w-6 h-6 text-background" />
              </div>
              <span className="text-lg font-semibold text-background">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling text banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-background/30 text-2xl font-display font-bold"
              >
                BUILD • OPTIMIZE • SUCCEED • GROW •
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;
