const NAV = document.querySelector("nav")
const LINE = NAV.querySelector(".line")
const LINKS_ELEMENTS = NAV.querySelector("ul").children
const CONTACT = document.querySelector(".contact")
const LINKS = []
const LINKS_WIDTH = []
const TIME = undefined
const TIME_ELEMENT = document.querySelector(".time")
const CONTAINER = document.querySelector(".container")
const SOCIAL_ELEMENTS = CONTACT.querySelectorAll(".social")
const POSTS = []
const POST = document.querySelector(".post")
const JSON_MASTER_KEY = "$2a$10$uhWxn5QOaQAPTPkDm1Hzuu5oWhUs9GP5OOn5K/5GjM1/NQdBr1.Xy"
const TIME_API_KEY = ""
const LOADER = document.querySelector(".loader")
const BLOG = document.querySelector(".blog")

const DISCORD = "https://discordapp.com/users/858285755658666034"
const TELEGRAM = "https://t.me/aminov_ali"
const GITHUB = "https://github.com/f01zy"
const SOCIAL = [
  { label: "discord", link: DISCORD },
  { label: "telegram", link: TELEGRAM },
  { label: "github", link: GITHUB }
]

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
  LOADER.classList.remove("none-opacity")

  // const TIME = await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=${TIME_API_KEY}&location=Moscow`, {
  //   method: "GET",
  // })
  //   .then(res => res.json())
  //   .then(res => res.datetime.split(" ")[1])

  const POSTS = await fetch("https://api.jsonbin.io/v3/b/665afd71acd3cb34a8511098", {
    headers: {
      "X-Master-Key": JSON_MASTER_KEY
    }
  })
    .then(res => res.json())
    .then(res => res.record.posts)

  for (let i = 0; i < POSTS.length; i++) {
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    const post = POSTS[i]

    h3.innerHTML = post.name
    p.innerHTML = post.content
    div.append(h3, p)

    div.addEventListener("click", event => {
      POST.querySelector("h3").innerHTML = h3.innerHTML
      POST.querySelector("p").innerHTML = p.innerHTML
      showElement(".post")

      POST.querySelector(".close").addEventListener("click", event => {
        hideElement(".post")
      })
    })

    BLOG.appendChild(div)
  }

  // startClock(TIME, TIME_ELEMENT)

  for (let i = 0; i < SOCIAL_ELEMENTS.length; i++) {
    SOCIAL_ELEMENTS[i].setAttribute("href", SOCIAL[i].link)
    SOCIAL_ELEMENTS[i].innerHTML = SOCIAL[i].label
  }

  LOADER.classList.add("none-opacity")
  setTimeout(() => CONTAINER.classList.remove("none-opacity"), 500)

  const font = "18px Barlow";

  for (const children of LINKS_ELEMENTS) {
    LINKS.push(children.innerHTML)
    LINKS_WIDTH.push(getTextWidth(children.innerHTML, font))
  }

  let index = 0;
  LINE.style.width = `${getTextWidth(LINKS[index], font)}px`
  LINE.style.left = "0px"

  for (let i = 0; i < LINKS_ELEMENTS.length; i++) {
    const children = LINKS_ELEMENTS[i]

    children.addEventListener("click", event => {
      const audio = new Audio()
      audio.src = "./click.mp3"
      audio.play()
      index = i;
      for (let i = 0; i < LINKS.length; i++) {
        if (i === index) continue
        hideElement(`.${LINKS[i].toLowerCase()}`)
      }
      let left = 0;
      for (let i = 0; i < index; i++) {
        left += LINKS_WIDTH[i]
        left += 15
      }
      LINE.style.width = `${getTextWidth(LINKS[index], font)}px`
      LINE.style.left = `${left}px`
      setTimeout(() => {
        showElement(`.${LINKS[index].toLowerCase()}`)
      }, 1000)
    })
  }

  showElement(".about")
})