const nav = document.querySelector("nav")
const line = nav.querySelector(".line")
const linksElements = nav.querySelector("ul").children
const contact = document.querySelector(".contact")
const links = []
const linksWidth = []
const timeElement = document.querySelector(".time")
const container = document.querySelector(".container")
const socialElements = contact.querySelectorAll(".social")
const posts = []
const postElement = document.querySelector(".post")
const content = postElement.querySelector(".content")
const loader = document.querySelector(".loader")
const blog = document.querySelector(".blog")
const projectsContainer = document.querySelector(".projects")

const discord = "https://discordapp.com/users/858285755658666034"
const telegram = "https://t.me/aminov_ali"
const github = "https://github.com/f01zy"
const social = [
  { label: "discord", link: discord },
  { label: "telegram", link: telegram },
  { label: "github", link: github }
]

const tagsColors = {
  "paused": "red"
}

const getHTMLFromMarkdown = (text) => {
  const converter = new showdown.Converter()
  return converter.makeHtml(text)
}

const formatTime = (time) => {
  return time < 10 ? "0" + time : time;
}

const startClock = (time, element) => {
  let hours = Number(time.split(":")[0])
  let minutes = Number(time.split(":")[1])
  let seconds = Number(time.split(":")[2])
  element.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`

  setInterval(() => {
    seconds++

    if (seconds >= 60) {
      seconds = 0;
      minutes++;

      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    element.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
  }, 1000)
}

const getTextWidth = (text, font) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

const hideElement = element => {
  const el = document.querySelector(element);
  el.style.opacity = "0";
  el.style.visibility = "hidden";
  el.style.transform = "translateY(-10px)"
  setTimeout(() => {
    el.classList.add("none")
  }, 1000)
}

const showElement = element => {
  const el = document.querySelector(element);
  el.classList.remove("none")
  setTimeout(() => {
    el.style.visibility = "visible";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)"
  }, 100)
}

window.addEventListener("load", async event => {
  loader.classList.remove("none-opacity")

  const audio = new Audio()
  audio.src = "./public/click.mp3"
  audio.preload = "auto"

  const posts = await fetch("https://api.jsonbin.io/v3/b/669aca6dacd3cb34a8687e31")
    .then(res => res.json())
    .then(res => res.record.posts)

  const currentTime = new Date()
  const options = { timeZone: "UTC", timeZoneName: "short" }
  const utcOffset = 4
  const time = new Date(currentTime.getTime() + utcOffset * 60 * 60 * 1000).toLocaleString("ru-RU", options)
  const timeArray = time.split(",")[1].trim().split(":")
  const hours = parseInt(timeArray[0])
  const minutes = parseInt(timeArray[1])
  const seconds = parseInt(timeArray[2])

  startClock(`${hours}:${minutes}:${seconds}`, timeElement)

  for (let i = 0; i < posts.length; i++) {
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const h4 = document.createElement("h4")
    const post = posts[i]

    h3.innerHTML = post.name
    h4.innerHTML = post.date
    div.append(h3, h4)

    div.addEventListener("click", event => {
      postElement.querySelector("h3").innerHTML = h3.innerHTML
      content.innerHTML = getHTMLFromMarkdown(post.content)
      showElement(".post")

      postElement.querySelector(".close").addEventListener("click", event => {
        hideElement(".post")
      })
    })

    blog.appendChild(div)
  }

  const projects = await fetch("https://api.jsonbin.io/v3/b/678b0c18e41b4d34e4793557")
    .then(res => res.json())
    .then(res => res.record.projects)

  for (const project of projects) {
    const div = document.createElement("div")
    const div2 = document.createElement("div")
    const img = document.createElement("img")
    const a = document.createElement("a")
    const p = document.createElement("p")
    const h4 = document.createElement("h4")

    img.src = project.images[0]
    a.innerHTML = project.name
    a.href = project.github[0]
    h4.innerHTML = project.status
    h4.style.border = `2px solid ${tagsColors[project.status]}`
    h4.style.color = tagsColors[project.status]
    p.innerHTML = project.description

    div2.append(a, h4)
    div.append(div2, p)
    projectsContainer.append(div)
  }

  for (let i = 0; i < socialElements.length; i++) {
    socialElements[i].setAttribute("href", social[i].link)
  }

  loader.classList.add("none-opacity")
  setTimeout(() => container.classList.remove("none-opacity"), 500)

  const font = "18px Barlow";

  for (const children of linksElements) {
    links.push(children.innerHTML)
    linksWidth.push(getTextWidth(children.innerHTML, font))
  }

  let index = 0;
  line.style.width = `${getTextWidth(links[index], font)}px`
  line.style.left = "0px"

  for (let i = 0; i < linksElements.length; i++) {
    const children = linksElements[i]

    children.addEventListener("click", event => {
      audio.play()
      index = i;
      for (let i = 0; i < links.length; i++) {
        if (i === index) continue
        hideElement(`.${links[i].toLowerCase()}`)
      }
      let left = 0;
      for (let i = 0; i < index; i++) {
        left += linksWidth[i]
        left += 15
      }
      line.style.width = `${getTextWidth(links[index], font)}px`
      line.style.left = `${left}px`
      setTimeout(() => {
        showElement(`.${links[index].toLowerCase()}`)
      }, 1000)
    })
  }

  showElement(".about")
})