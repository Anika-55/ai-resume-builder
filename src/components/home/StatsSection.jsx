import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { number: 500000, suffix: "+", label: "Resumes Created", prefix: "" },
  { number: 95, suffix: "%", label: "Success Rate", prefix: "" },
  { number: 120, suffix: "+", label: "Countries Served", prefix: "" },
  { number: 4.9, suffix: "/5", label: "User Rating", prefix: "" },
];

// ---------------- Animated Number ----------------
const AnimatedNumber = ({ target, suffix, prefix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="gradient-text">
      {prefix}
      {target >= 1000
        ? `${Math.floor(count / 1000)}K`
        : count % 1 === 0
        ? Math.floor(count)
        : count.toFixed(1)}
      {suffix}
    </span>
  );
};

// ---------------- Stats Section ----------------
const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-5" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-12 md:p-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of thousands of job seekers who have landed their
              dream jobs with our AI-powered resume builder.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-purple-600">
                  <AnimatedNumber
                    target={stat.number}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
