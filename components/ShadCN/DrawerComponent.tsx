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
import { Project } from "@/app/utils/projects";

export function DrawerComponent({ name, description, image, technologies, link }: Project) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="text-black" aria-label={`Mostrar detalhes do projeto ${name}`}>
          Mostrar Projeto
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-black bg-neutral-950 text-white dark:text-white border-green-500 w-2/4 h-1/2 flex justify-center items-center mx-auto">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-3xl text-center">{name}</DrawerTitle>
            <DrawerDescription className="text-center font-semibold text-lg">
              {Array.isArray(technologies) ? technologies.join(', ') : technologies}
            </DrawerDescription>
            <DrawerDescription className="text-center font-semibold">{description}</DrawerDescription>
            <DrawerDescription className="mt-4">
              <img src={image} alt={name} className="w-full object-cover" style={{ maxHeight: '500px' }} />
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
