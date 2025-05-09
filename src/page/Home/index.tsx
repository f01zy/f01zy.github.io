"use client"

import Button from "@/components/UI/Button";
import Typing from "@/components/UI/Typing";
import { avatar } from "@/config";
import { useAppSelector } from "@/hooks/selector.hook";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "@/page/Home/styles.module.scss";

const Home = () => {
  const [step, setStep] = useState<number>(0)
  const isAboutTyping = useAppSelector(s => s.utils.isAboutTyping)
  const speed = 80

  return <div className={styles.home}>
    <Image src={avatar} alt="Avatar" width={200} height={200} quality={100} priority />
    <div className={styles.container}>
      <div>
        {
          !isAboutTyping && step >= 0 && <Typing
            typeText="f01zy"
            speed={speed}
            callback={() => setStep(1)}
          />
        }
        {
          !isAboutTyping && step >= 1 && <Typing
            typeText="Aminov Ali"
            speed={speed}
            callback={() => setStep(2)}
          />
        }
        {
          !isAboutTyping && step >= 2 && <Typing
            typeText="Young programmer from Russia."
            speed={speed}
            callback={() => setStep(3)}
          />
        }
      </div>
      <Button className={`text-lg ${step >= 3 ? "opacity-100" : "opacity-0"}`}>
        <Link href={"/contact"}>Let"s talk.</Link>
      </Button>
    </div>
  </div>
}

export default Home;