import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "No credit card required",
  "Free forever plan available",
  "Export to PDF & DOCX",
  "ATS-optimized templates",
];

const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden text-green-700 bg-gradient-to-t from-green-400 to-purple-600"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-bg opacity-90" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Gradient Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-black bg-clip-text bg-gradient-to-t from-green-400 to-purple-600" />
            <span className="text-sm font-medium text-white">
              Start your journey today
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-transparent text-white">
            Ready to Build Your
            <span className="block">Winning Resume?</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Join over 500,000 professionals who have already transformed their
            careers with our AI-powered resume builder.
          </p>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm text-white"
              >
                <CheckCircle className="w-4 h-4 text-white" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl group shadow-2xl"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-gray hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              See Examples
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
