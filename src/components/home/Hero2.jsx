import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Sparkles, Zap, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "../../components/ui/button";

const Hero2 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Modern grid pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)/0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent)/0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="70%"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="100%"
          y1="20%"
          x2="0%"
          y2="80%"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
      </svg>

      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 px-4 py-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-foreground">
                  AI-Powered Resume Builder
                </span>
                <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  NEW
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]"
              >
                <span className="block">Your Career,</span>
                <span className="relative">
                  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-purple-600">
                    Supercharged
                  </span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <motion.path
                      d="M0 6 Q 50 0, 100 6 T 200 6"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
              >
                Create stunning, ATS-optimized resumes in minutes with the power
                of AI. Stand out from the crowd and land your dream job.
              </motion.p>

              {/* Feature list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              >
                {["ATS-Optimized", "AI Writing", "50+ Templates"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="gradient-bg text-primary-foreground px-8 py-6 text-lg font-semibold rounded-2xl group relative overflow-hidden"
                  onClick={() => {
                    if (loading) return;

                    if (user) {
                      navigate("/app");
                    } else {
                      navigate("/auth?state=login");
                    }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%", skewX: "-15deg" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <Zap className="w-5 h-5 mr-2 bg-white text-black" />
                  Start Free Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-secondary group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, hsl(${
                          200 + i * 20
                        } 70% 60%), hsl(${220 + i * 20} 80% 50%))`,
                      }}
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="ml-1 font-semibold text-foreground">
                      4.9
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    from 50K+ happy users
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right side - 3D Resume Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block perspective-1000"
            >
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -left-8 glass-card rounded-2xl p-4 shadow-xl z-20 "
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-foreground text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-purple-600">
                      AI Enhanced
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Optimized for ATS
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 shadow-xl z-20 "
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-sm text-foreground">
                    Resume Score: 95%
                  </span>
                </div>
              </motion.div>

              {/* Main resume card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border/50 "
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Browser dots */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 h-6 bg-muted rounded-lg ml-4" />
                </div>

                {/* Resume content skeleton */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-20 h-20 rounded-2xl gradient-bg"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="h-6 bg-foreground/10 rounded-lg w-3/4" />
                      <div className="h-4 bg-primary/20 rounded w-1/2" />
                      <div className="h-3 bg-muted rounded w-2/3" />
                    </div>
                  </div>

                  {/* Sections */}
                  <div className="space-y-4">
                    <div className="h-5 bg-primary/10 rounded w-1/3" />
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded w-full" />
                      <div className="h-3 bg-muted rounded w-5/6" />
                      <div className="h-3 bg-muted rounded w-4/5" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-5 bg-primary/10 rounded w-1/4" />
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          className="h-6 bg-primary/20 rounded-full px-3"
                          style={{ width: `${60 + i * 10}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero2;
