'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import type { ContentPillar } from '@/sanity/lib/types'

export default function BlogFilters({
  pillars,
}: {
  pillars: ContentPillar[]
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activePillar = searchParams.get('pillar')

  function handleFilter(slug: string | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (slug) {
      params.set('pillar', slug)
    } else {
      params.delete('pillar')
    }
    const query = params.toString()
    router.push(query ? `?${query}` : '/learn/blog', { scroll: false })
  }

  const baseStyle: React.CSSProperties = {
    borderRadius: '9999px',
    padding: '0.375rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginTop: '1.5rem',
      }}
    >
      <button
        onClick={() => handleFilter(null)}
        style={{
          ...baseStyle,
          backgroundColor: !activePillar ? 'var(--earth)' : 'var(--beige-bg)',
          color: !activePillar ? 'var(--white)' : 'var(--text-dark)',
        }}
        onMouseEnter={(e) => {
          if (activePillar)
            e.currentTarget.style.backgroundColor = 'var(--border-beige)'
        }}
        onMouseLeave={(e) => {
          if (activePillar)
            e.currentTarget.style.backgroundColor = 'var(--beige-bg)'
        }}
      >
        All
      </button>

      {pillars.map((pillar) => {
        const isActive = activePillar === pillar.slug.current
        return (
          <button
            key={pillar._id}
            onClick={() => handleFilter(pillar.slug.current)}
            style={{
              ...baseStyle,
              backgroundColor: isActive
                ? pillar.color || 'var(--earth)'
                : 'var(--beige-bg)',
              color: isActive ? 'var(--white)' : 'var(--text-dark)',
            }}
            onMouseEnter={(e) => {
              if (!isActive)
                e.currentTarget.style.backgroundColor = 'var(--border-beige)'
            }}
            onMouseLeave={(e) => {
              if (!isActive)
                e.currentTarget.style.backgroundColor = 'var(--beige-bg)'
            }}
          >
            {pillar.title}
          </button>
        )
      })}
    </div>
  )
}
