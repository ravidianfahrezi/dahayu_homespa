import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
  once = true
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true
    }
    return false
  })

  useEffect(() => {
    // Jika sudah visible (misal dari preferensi reduced-motion), tidak perlu observe lagi
    if (isVisible && once) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(node)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once, isVisible])

  const transformClass =
    direction === 'up'
      ? isVisible
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0'
      : isVisible
      ? 'opacity-100'
      : 'opacity-0'

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${transformClass} ${className}`}
    >
      {children}
    </div>
  )
}
