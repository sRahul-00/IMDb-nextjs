'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

export default  function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{setMounted(true)},[]);
    
    const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div>
        {mounted && currentTheme === 'dark' ? <MdLightMode onClick={() => setTheme('light')} className="text-xl cursor-pointer hover:text-amber-700" /> : <BsMoonStarsFill onClick={() => setTheme('dark')} className="text-xl cursor-pointer hover:text-amber-700" />}
    </div>
  )
}
