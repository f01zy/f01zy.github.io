"use client"

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Contact = () => {
  const code = `
    const contacts: Record<string, string | string[]> = {
      \tgithub: "https://github.com/f01zy",
      \ttelegram: "https://t.me/aminov_ali",
      \tdiscord: "https://discord.com/users/858285755658666034",
      \temail: [
      \t\t"016aminovali@gmail.com",
      \t\t"aminovali015@icloud.com"
      \t]
      };

      const social: Record<string, string> = {
      \tleetcode: "https://leetcode.com/u/f01zy/",
      \tanilist: "https://anilist.co/user/f01zy/"
    };
  `

  return <div>
    <div style={{ width: "90vw" }}>
      <SyntaxHighlighter
        language="typescript"
        style={a11yDark}
        customStyle={{
          background: "transparent",
          backdropFilter: "blur(200px)",
          border: "1px solid #fff",
          padding: "15px",
          borderRadius: "8px",
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