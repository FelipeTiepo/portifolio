"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaNodeJs,
  FaSass,
  FaReact,
  FaFigma
} from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

//about data
const about = {
  title: "Sobre mim",
  description: "Desde que entrei no mundo da programação, tenho dedicado cada dia ao estudo e aprimoramento, ansioso pela minha primeira grande oportunidade. Ao longo dos últimos três anos, venho construindo e executando uma variedade de projetos para empresas como freelancer, com o objetivo de aprender e me desenvolver na área. Estou confiante de que estou pronto para contribuir de forma significativa à sua equipe de programadores, trazendo minha paixão e experiência para impulsionar os projetos e alcançar os objetivos em conjunto. Atualmente cursando o 6º semestre de Sistemas da Informação na FIAP, com disponibilidade para estágio e integral dentro da área de tecnologia.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Felipe Coelho Tiepo"
    },
    {
      fieldName: "Número",
      fieldValue: "(11) 95605-0770"
    },
    {
      fieldName: "Experiência",
      fieldValue: "3+ Anos"
    },
    {
      fieldName: "Linkedin",
      fieldValue: "https://www.linkedin.com/in/felipetiepo"
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro"
    },
    {
      fieldName: "Email",
      fieldValue: "ftiepo20@gmail.com"
    },
    {
      fieldName: "FreeLancer",
      fieldValue: "Disponível"
    },
    {
      fieldName: "Línguas",
      fieldValue: "Português, Inglês, Espanhol"
    },
  ]
}
//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha experiência",
  description: "Empresas que já trabalhei e ganhei experiência.",
  items: [
    {
      company: "Empresas",
      position: "FreeLancer",
      duration: "2023 - Presente"
    },
    {
      company: "Ideal English School",
      position: "Auxiliar administrativo",
      duration: "2024 - 2024"
    },
    {
      company: "Alonso imóveis",
      position: "Corretor imobiliário",
      duration: "2023 - 2024"
    },
    {
      company: "Lindt",
      position: "Atendente e sistemas de venda",
      duration: "2023 - 2023"
    },
    {
      company: "Cacau Show",
      position: "Atendente",
      duration: "2022 - 2022"
    },

  ]
}

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Minha educação",
  description: "Todos meus ensinos, cursos e escolas que participei.",
  items: [
    {
      institution: "FIAP",
      degree: "Bacharelado em Sistemas de informação",
      duration: "2022 - Cursando"
    },
    {
      institution: "Nano courses FIAP",
      degree: "Responsive Web Development",
      duration: "60 Horas"
    },
    {
      institution: "Nano courses FIAP",
      degree: "Front end",
      duration: "60 Horas"
    },
    {
      institution: "Alura",
      degree: "Sass e CSS aprofundando estilos",
      duration: "60 Horas"
    },
    {
      institution: "Alura",
      degree: "Git e Github",
      duration: "42 Horas"
    },
    {
      institution: "Alura",
      degree: "Curso de Figma",
      duration: "48 Horas"
    },
    {
      institution: "Alura",
      degree: "User experience (UX)",
      duration: "62 Horas"
    },
    {
      institution: "Nano courses FIAP",
      degree: "Java: programação orientada a objetos",
      duration: "72 Horas"
    },
    {
      institution: "Alura",
      degree: "JavaScript: para aplicações web",
      duration: "72 Horas"
    },
    {
      institution: "Nano courses FIAP",
      degree: "Java fundamentos",
      duration: "80 Horas"
    },
    {
      institution: "Alura",
      degree: "HTML e CSS: para projetos web",
      duration: "80 Horas"
    },
    {
      institution: "Senac",
      degree: "Pacote Office",
      duration: "360 Horas"
    },
    {
      institution: "Wizard",
      degree: "Curso de inglês",
      duration: "2017 - 2022"
    },

  ]
}

//skills data
const skills = {
  title: "Minhas habilidades",
  description: "Habilidades que desenvolvi em mais de 3 anos na área.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML"
    },
    {
      icon: <FaCss3 />,
      name: "CSS"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <FaJava />,
      name: "Java"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css"
    },
    {
      icon: <FaSass />,
      name: "SASS"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resumo = () => {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.3, duration: 0.3, ease: "easeIn" }
    }}

    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experiência</TabsTrigger>
          <TabsTrigger value="education">Educação</TabsTrigger>
          <TabsTrigger value="skills">Habilidades</TabsTrigger>
          <TabsTrigger value="about">Sobre mim</TabsTrigger>
        </TabsList>
        {/* content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1m">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* education */}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1m">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
          {/* about me */}
          <TabsContent value="about" className="w-full ">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
};

export default Resumo;