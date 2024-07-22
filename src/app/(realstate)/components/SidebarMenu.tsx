import { LogsIcon } from "lucide-react";
import CustomLink from "./CustomLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SidebarMenu = () => {
  return (
    <aside
      id="sidebar"
      className="fixed bg-red-500 border hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border  bg-primary-foreground pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-primary-foreground divide-y space-y-1">
            <ul className="space-y-2 pb-2    ">
              <div className="  text-center uppercase border p-1 text-blue-600">
                Residencial altiplano
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    <LogsIcon /> Logistica
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-1">
                    <CustomLink />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    <LogsIcon /> Logistica
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-1">
                    <CustomLink />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    <LogsIcon /> Logistica
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-1">
                    <CustomLink />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    <LogsIcon /> Logistica
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-1">
                    <CustomLink />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    <LogsIcon /> Logistica
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-1">
                    <CustomLink />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarMenu;
