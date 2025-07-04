import { motion } from 'framer-motion';
import { ArrowDownToLine, CodeXml, Palette, Rocket, UsersRound } from 'lucide-react';
import { Button } from '../styles/UI';

export const AboutSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const aboutCard = [
    {
      Icon: CodeXml,
      title: 'Front-End Skills',
      detail: 'I build responsive, accessible, and clean UIs using HTML, CSS, and JavaScript. Every line of code is written with user experience in mind'
    },
    {
      Icon: Palette,
      title: 'Eye for Design',
      detail: 'I focus on clean layouts, thoughtful typography, and visual balance to create interfaces that are both functional and beautiful.'
    },
    {
      Icon: Rocket,
      title: 'Growth Mindset',
      detail: 'Every project is a chance to learn something new. I continuously sharpen my skills and stay updated with the latest web trends.'
    },
    {
      Icon: UsersRound,
      title: 'Collaboration Ready',
      detail: 'I thrive in collaborative environments and value clear communication, feedback, and shared goals in every build.'
    },
  ];

  return (
    <section id="about" className="p-2 bg-base-300">
      <div className="section-container">
        <h2 className="section-title">Behind The <span className="text-primary">Code</span></h2>
        <p className="section-description mb-10 md:mb-20">A brief introduction highlighting my background, skills, and passions as a web developer</p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="space-y-3">
            <h2 className="text-center text-base-content font-bold max-w-xs mx-auto">
              Web Developer Focused on Clean Code & Smart Design
            </h2>
            <p className="section-description">
              Driven by curiosity and a love for clean, functional design, I specialize in crafting responsive websites and dynamic user experiences.
              My journey into web development began with a strong foundation in IT and has evolved into a deep commitment to building thoughtful, intuitive digital solutions.
              <br></br><br></br> I’m constantly exploring new technologies and best practices to sharpen my skills and stay ahead in this fast-paced field.
              Whether I’m fine-tuning front-end interfaces or diving into JavaScript logic, I bring energy, focus, and a problem-solving mindset to every line of code.
            </p>
            <Button
              href='/Alfarero_CV.pdf'
              target="_blank"
              className='w-fit bg-primary text-white mx-auto mt-10 '>
              Download CV
              <ArrowDownToLine />
            </Button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-start items-start gap-2"
          >
            {aboutCard.map(({ Icon, title, detail }, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                className="max-w-[450px] mx-auto bg-primary/20 rounded-full p-3 flex items-center gap-3 shadow-lg"
              >
                <div className="p-3 rounded-full bg-primary flex items-center justify-center">
                  <Icon className="text-white size-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm text-base-content font-bold">{title}</h3>
                  <p className="text-base-content/60 text-sm/4">{detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </div>
    </section>
  );
};