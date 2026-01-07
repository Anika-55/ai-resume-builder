import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Wand2, Download, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Enter Your Details",
    description:
      "Add your work experience, education, and skills. Our smart form makes it quick and easy.",
  },
  {
    number: "02",
    icon: Wand2,
    title: "AI Enhancement",
    description:
      "Our AI transforms your input into powerful, impactful bullet points and summaries.",
  },
  {
    number: "03",
    icon: Download,
    title: "Customize & Export",
    description:
      "Choose a template, make final tweaks, and download in your preferred format.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Land Interviews",
    description:
      "Apply with confidence knowing your resume is optimized for success.",
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/10" />
      <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/10" />

      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Four Simple Steps to
            <span className="gradient-text block">Your Perfect Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our streamlined process gets you from zero to job-ready in minutes.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-24 left-8 right-8 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step number & icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 shadow-lg
                                  bg-gradient-to-t from-green-400 to-purple-600
                                  group-hover:scale-110 transition-transform duration-300"
                  >
                    {/* Gradient icon */}
                    <step.icon className="w-8 h-8 text-green-800 bg-clip-text bg-gradient-to-t from-green-400 to-purple-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 lg:-right-6 text-6xl font-display font-bold text-primary/10 select-none">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
