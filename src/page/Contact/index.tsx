"use client";

import useTheme from "@/hooks/theme.hook";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styles from "@/page/Contact/styles.module.scss"

const Contact = () => {
  const { theme } = useTheme()

  const code = `const contacts: Record<string, string> = {\n\tgithub: "https://github.com/f01zy",\n\ttelegram: "https://t.me/aminov_ali",\n\tdiscord: "https://discord.com/users/858285755658666034"\n};`

  return <div className={`w-full h-full flex items-center justify-center ${styles.contact}`}>
    <div className={styles.code}>
      <SyntaxHighlighter
        language="typescript"
        style={a11yDark}
        customStyle={{
          padding: "20px",
          background: "none",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
          border: "2px solid #444",
          fontSize: "15px",
        }}
        showLineNumbers={true}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  </div>
};

export default Contact;