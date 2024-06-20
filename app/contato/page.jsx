"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(11) 95605-0770"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ftiepo20@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Endereço",
    description: "Av. Diogo de Azevedo 22"
  }
]


const Contato = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.3, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Vamos trabalhar juntos!</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae sunt id veniam iusto?</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Primeiro Nome" />
                <Input type="lastname" placeholder="Último Nome" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Número" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione o serviço</SelectLabel>
                    <SelectItem value="est">Web development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Escreva sua mensagem aqui." />
              {/* btn */}
              <Button size="md" className="max-w-40">Enviar mensagem</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contato;
