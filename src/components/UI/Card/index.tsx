import { CSSProperties, FC, MouseEvent, ReactNode, useRef, useState } from "react";

interface Props {
  children: ReactNode
  style?: CSSProperties
  className?: string
  maxTilt?: number
}

const Card: FC<Props> = ({
  children,
  className = "",
  maxTilt = 15,
  style
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = ((y - centerY) / centerY) * maxTilt
    const tiltY = ((centerX - x) / centerX) * maxTilt

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return <div
    ref={cardRef}
    className={`relative transition-transform duration-500 ease-out ${className}`}
    style={{
      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      ...style
    }}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
  >
    {children}
  </div>
}

export default Card;