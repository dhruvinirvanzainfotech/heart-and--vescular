import { useState, useEffect, useRef } from "react";
import { Building2, Heart, Clock3 } from "lucide-react";

const stats = [
  {
    icon: Building2,
    count: 250,
    suffix: "+",
    label: "Advanced Surgeries",
  },
  {
    icon: Heart,
    count: 5000,
    suffix: "+",
    label: "Happy Patients",
  },
  {
    icon: Clock3,
    count: 5,
    suffix: "+",
    label: "Years of Experience",
  },
];

function useCount(end, ref, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);

    const el = ref.current;
    if (!el) return;

    let id;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        let current = 0;
        const steps = 60;
        const increment = end / steps;

        id = setInterval(() => {
          current += increment;

          if (current >= end) {
            setCount(end);
            clearInterval(id);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearInterval(id);
    };
  }, [end, ref, duration]);

  return count;
}

function StatCard({ stat, sectionRef }) {
  const count = useCount(stat.count, sectionRef);
  const Icon = stat.icon;

  return (
    <div className="w-full max-w-[320px] flex flex-col items-center text-center px-8 py-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:-translate-y-2 transition-all duration-500 shadow-lg">
      <Icon className="w-14 h-14 mb-4 text-cyan-300" />

      <h3 className="text-white text-4xl md:text-5xl font-bold mb-3">
        {count}
        {stat.suffix}
      </h3>

      <p className="text-white text-lg font-semibold">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-5 bg-gradient-to-br from-cyan-900 via-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              sectionRef={sectionRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}