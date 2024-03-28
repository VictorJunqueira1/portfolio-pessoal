import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Project, projects } from "@/app/utils/projects";

type Props = {
  name: string;
  image: string;
  technologies: string[];
  description?: string;
  link: string;
  techIndex: number
}

export function DrawerComponent({ name, description, image, technologies, link, techIndex }: Props) {
  const renderTechnologies = () => {
    const lastItemOfArray = projects[techIndex].technologies.length - 1
    const techsArray =  projects[techIndex].technologies
    let finalResult = ""   
    
    for(let tech = 0; tech <= lastItemOfArray; tech++){
      if(tech === (lastItemOfArray - 1)){
        finalResult += techsArray[tech] + " e "
      } else if (tech === lastItemOfArray) {
        finalResult += techsArray[tech] + "."
      } else {
        finalResult += techsArray[tech] + ", "
      }
    }
    return finalResult;
  }
  // {projects.map((element, index) => {
  //   return (
  //     renderTechnologies(index)
  //   )
  // })}

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="text-white bg-black border-neutral-700 absolute hover:text-white -bottom-14 hover:bg-neutral-900 border-2 transition-all duration-300" aria-label={`Mostrar detalhes do projeto ${name}`}>
          Mostrar Projeto
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-black bg-neutral-950 text-white dark:text-white border-green-500 md:w-2/4 h-1/2 w-full flex justify-center items-center mx-auto">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-3xl text-center">{name}</DrawerTitle>
            <DrawerDescription className="text-center font-semibold text-lg">
              Feito com: {renderTechnologies()}
            </DrawerDescription>
            <DrawerDescription className="text-center font-semibold">{description}</DrawerDescription>
            <DrawerDescription className="mt-4">
              <img src={image} alt={name} className="w-full object-cover" />
            </DrawerDescription>
            {link && (
              <DrawerDescription className="text-center">
                <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg underline text-blue-500 hover:text-blue-700" title={`Visite o projeto ${name}`}>
                  Visitar Projeto
                </a>
              </DrawerDescription>
            )}
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
