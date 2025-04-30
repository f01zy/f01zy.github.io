"use client"

import { useAppSelector } from "@/hooks/selector.hook";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiHome, FiUser, FiMail } from "react-icons/fi";
import ThemeButton from "../ToggleTheme";

const Navigation = () => {
  const tabs = [
    {
      id: "home",
      icon: <FiHome className="w-5 h-5" />,
      link: "/",
    },
    {
      id: "about",
      icon: <FiUser className="w-5 h-5" />,
      link: "/about",
    },
    {
      id: "contact",
      icon: <FiMail className="w-5 h-5" />,
      link: "/contact",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const pathname = usePathname();
  const isAboutTyping = useAppSelector(s => s.utils.isAboutTyping);

  useEffect(() => {
    setActiveTab(tabs.find(tab => tab.link == pathname)!.id);
  }, [pathname]);

  return (
    <div className={`relative z-[1] w-full h-[13vh] flex justify-center items-center transition-opacity duration-300 ease-linear ${isAboutTyping ? "opacity-0" : "opacity-100"
      }`}>
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative flex items-center justify-center w-full bg-white/80 dark:bg-gray-800/80 rounded-full shadow-xl backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50">
          <AnimatePresence>
            <motion.div
              className="absolute !top-0 left-0 w-12 h-12 rounded-full bg-gray-600 bg-opacity-20"
              animate={{
                x: tabs.findIndex(t => t.id === activeTab) * 48,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            />
          </AnimatePresence>

          <div className="relative flex items-center justify-between w-full">
            {tabs.map((tab) => (
              <Link href={tab.link} key={tab.id} className="flex-1 flex justify-center">
                <motion.button
                  className="relative flex items-center justify-center w-12 h-12 rounded-full transition-colors"
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon}
                </motion.button>
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
      <ThemeButton className="absolute right-5" />
    </div>
  );
};

export default Navigation;