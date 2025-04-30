const Background = () => {
  return <div className="fixed w-screen h-screen -z-[1]">
    <div className="absolute inset-0">
      <div className="absolute top-10 left-20 h-80 w-80 rounded-full bg-sky-200 opacity-60 blur-[100px] dark:bg-purple-500 dark:opacity-20 will-change-transform"></div>
      <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full bg-cyan-200 opacity-60 blur-[100px] dark:bg-indigo-500 dark:opacity-30 will-change-transform"></div>
    </div>
  </div>
}

export default Background;