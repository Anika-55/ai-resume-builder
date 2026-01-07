import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wand2, FileCheck, Palette, Clock, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI-Powered Writing",
    description:
      "Our AI analyzes your experience and generates compelling, personalized content that highlights your strengths.",
  },
  {
    icon: FileCheck,
    title: "ATS Optimization",
    description:
      "Every resume is optimized to pass Applicant Tracking Systems, ensuring your application reaches human recruiters.",
  },
  {
    icon: Palette,
    title: "Professional Templates",
    description:
      "Choose from dozens of modern, recruiter-approved templates designed for every industry and role.",
  },
  {
    icon: Clock,
    title: "Build in Minutes",
    description:
      "Create a polished, professional resume in under 10 minutes with our streamlined process.",
  },
  {
    icon: Globe,
    title: "Multiple Formats",
    description:
      "Export your resume as PDF, DOCX, or share via a unique link. Perfect for any application.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data is encrypted and never shared. Delete your information anytime with one click.",
  },
];

// ---------------- Feature Card ----------------
const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glass-card rounded-2xl p-8 hover-lift"
    >
      {/* Background gradient hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-green-700 bg-gradient-to-t from-green-400 to-purple-600">
          <feature.icon className="w-7 h-7" color="currentColor" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

// ---------------- Features Section ----------------
const FeaturesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Top & bottom decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Everything You Need to
            <span className="gradient-text block text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-purple-600">
              Land Your Dream Job
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful tools designed to make your job search easier and more
            effective.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
