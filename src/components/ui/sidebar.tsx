'use client'
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/_sidebar";
import { icons } from "@tabler/icons-react";
import { div, label } from "framer-motion/client";
import { useState } from "react";
import {
    IconBrandTabler,
    IconFishHook
  } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

export default function ASidebar() {
    const links = [
        {
          label:"useState",
          href:"/useState",
          icon: (
            <IconBrandTabler/>
          ),
        },
        {
          label:"useReducer",
          href:"/useReducer",
          icon:(<IconBrandTabler/>),
        },
        {
          label:"useEffect",
          href:"/useEffect",
          icon: (<IconBrandTabler/>),
        },
        {
          label:"useLayoutEffect",
          href:"/useLayoutEffect",
          icon: (<IconBrandTabler/>),
        },
        {
          label:"useRef",
          href:"/useRef",
          icon:(<IconBrandTabler/>),
        },
        {
          label:"useImperativeHandle",
          href:"/useImperativeHandle",
          icon: (<IconBrandTabler/>)
        },
        {
          label:"useContext",
          href:"/useContext",
          icon: (<IconBrandTabler/>)
        },
        {
          label:"useMemo",
          href:"/useMemo",
          icon: (<IconBrandTabler/>)
        },
        {
          label:"useCallback",
          href:"/useCallback",
          icon: (<IconBrandTabler/>)
        },

      ]

      const [open, setOpen] = useState(false);
      return (
        
        <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
                <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {open? <Logo/>: <LogoIcon/>}
                    <div className="flex flex-col gap-2 mt-8">
                        {links.map((link, idx) => (
                            <SidebarLink key={idx} link={link}/>
                        ))}
                    </div>
                </div>
                <div>
                    <SidebarLink
                    link={{
                        label:"vishnu vardhan",
                        href:"#",
                        icon:(
                            <Image
                            src="/vishnu.jpg"
                            className="h-8 w-8 flex-shrink-0 rounded-full"
                            width={50}
                            height={50}
                            alt=""
                            />
                        )
                    }}
                    />
                </div>
            </SidebarBody>
        </Sidebar>
      )


      
}

export const Logo = () => {
    return(
        <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm  py-1 relative z-20"
        >
          <IconFishHook stroke={5} />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-lg text-black dark:text-white whitespace-pre"
      >
        Hooks
      </motion.span>  
        </Link>
    )
}


export const LogoIcon = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm  py-1 relative z-20"
      >
        <IconFishHook stroke={5} />
      </Link>
    );
};