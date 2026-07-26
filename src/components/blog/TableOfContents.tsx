'use client'

import { useEffect, useState } from 'react'

export interface Heading {
  id: string
  text: string
  level: 2 | 3
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -80% 0px' },
    )

    for (const heading of headings) {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="bp-toc" aria-label="Table of contents">
      <p className="bp-toc-title">In this article</p>
      <ul className="bp-toc-list">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`bp-toc-link ${activeId === h.id ? 'bp-toc-link--active' : ''}`}
              style={h.level === 3 ? { paddingLeft: '1.25rem' } : undefined}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
