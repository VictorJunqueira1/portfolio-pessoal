import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Project } from "@/app/utils/projects"



export function DrawerComponent({name, description, image, technologies}: Project) {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="text-black">Mostrar Conhecimentos</Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-black bg-white text-black dark:text-white dark:border-neutral-800 border-white">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{name}</DrawerTitle>
            <DrawerDescription>{technologies}</DrawerDescription>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  )
}