import { motion } from "framer-motion";
import { useState } from "react";
import DepartmentForm from "./DepartmentForm";

const departments = [
  { name: "Choir / Music", desc: "Leading worship through powerful praise and adoration", icon: "🎵" },
  { name: "Ushering", desc: "Welcoming and guiding worshippers with grace", icon: "🤝" },
  { name: "Children's Church", desc: "Nurturing the next generation in faith", icon: "👶" },
  { name: "Media / Tech", desc: "Amplifying the gospel through technology", icon: "📺" },
  { name: "Protocol", desc: "Ensuring decorum and orderliness in service", icon: "🛡️" },
  { name: "Prayer Band", desc: "Interceding for the church and nations", icon: "🙏" },
  { name: "Youth Ministry", desc: "Empowering young people for kingdom impact", icon: "⚡" },
  { name: "Welfare", desc: "Caring for the needs of the congregation", icon: "❤️" },
];

export default function DepartmentsSection() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const handleDeptClick = (deptName: string) => {
    setSelectedDept(deptName);
    setFormOpen(true);
  };
  return (
    <section id="departments" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">Get Involved</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">
            OUR <span className="text-gradient-gold">DEPARTMENTS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => handleDeptClick(dept.name)}
              className="glass-card glass-card-hover p-6 rounded-xl cursor-pointer group"
            >
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-300">{dept.icon}</span>
              <h3 className="font-heading text-base text-foreground group-hover:text-gold transition-colors duration-300">
                {dept.name}
              </h3>
              <p className="font-body text-xs text-muted-foreground mt-2 leading-relaxed">{dept.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <DepartmentForm open={formOpen} department={selectedDept} onOpenChange={setFormOpen} />
    </section>
  );
}
