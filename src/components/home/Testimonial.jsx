import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    content:
      "I was struggling to highlight my achievements until I found this tool. The AI suggestions were incredibly helpful, and I landed my dream job at Google within a month!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Michael Rodriguez",
    role: "Marketing Director",
    company: "Spotify",
    content:
      "The templates are beautiful and professional. I received compliments from every recruiter I met. This tool paid for itself a hundred times over.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "Meta",
    content:
      "As someone who hates writing about myself, the AI-powered content generation was a game-changer. It captured my experience perfectly and professionally.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    company: "Amazon",
    content:
      "The ATS optimization feature alone is worth it. I finally started getting callbacks after months of silence. Highly recommend to anyone job hunting!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    name: "Jessica Taylor",
    role: "UX Designer",
    company: "Apple",
    content:
      "I've tried other resume builders, but none come close to this. The attention to design details and the smart suggestions make it stand out from the rest.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
];

// --------------------- Testimonial Card ---------------------
const TestimonialCard = ({ testimonial, isCenter }) => {
  return (
    <motion.div
      layout
      className={`relative rounded-3xl p-8  transition-all duration-500 ${
        isCenter
          ? "bg-card border-2 border-primary/20 shadow-2xl scale-105 z-10"
          : "bg-card/50 border border-border/50 opacity-60 scale-95"
      }`}
    >
      {isCenter && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-200 via-transparent to-accent/5" />
      )}

      <div className="relative z-10 ">
        {/* Quote icon */}
        <div className="absolute -top-4 -left-2">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isCenter ? "gradient-bg-green-400" : "bg-muted"
            }`}
          >
            <Quote
              className={`w-5 h-5 ${
                isCenter
                  ? "text-purple-300-foreground"
                  : "text-muted-foreground"
              }`}
            />
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-6 pt-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <p
          className={`text-lg leading-relaxed mb-8 ${
            isCenter ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-14 h-14 rounded-2xl object-cover"
            />
            {isCenter && (
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">
              {testimonial.name}
            </h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role} at{" "}
              <span className="text-primary font-medium">
                {testimonial.company}
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --------------------- Main Testimonial Component ---------------------
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [testimonials[prev], testimonials[currentIndex], testimonials[next]];
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Floating shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute bg-gradient-to-t from-green-500 to-purple-400 top-20 left-10 w-20 h-20 border border-primary/20 rounded-2xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-16 h-16 border border-accent/20 rounded-full"
      />

      <div className="container px-4 relative z-10">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
            Don't Take Our Word
            <span className="gradient-text block text-transparent bg-clip-text bg-gradient-to-t from-green-500 to-purple-400">
              Hear From Them
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of professionals who transformed their careers with
            our AI resume builder.
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {getVisibleTestimonials().map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              isCenter={index === 1}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden max-w-md mx-auto">
          <TestimonialCard
            testimonial={testimonials[currentIndex]}
            isCenter={true}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full w-12 h-12 border-2 hover:border-primary hover:bg-primary/5"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full w-12 h-12 border-2 hover:border-primary hover:bg-primary/5"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
