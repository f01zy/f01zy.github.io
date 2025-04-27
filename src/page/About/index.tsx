"use client";

import Typing from "@/components/UI/Typing";
import { about } from "@/config";
import { useAppSelector } from "@/hooks/selector.hook";

const About = () => {
  const isAboutTyping = useAppSelector(s => s.utils.isAboutTyping);

  return <div className="w-full h-full flex items-center justify-center">
    <div className="w-2/3">
      {!isAboutTyping && (
        <>
          <Typing
            typeText={about}
            speed={35}
            isSkip={true}
          />
        </>
      )}
    </div>
  </div>
}

export default About;