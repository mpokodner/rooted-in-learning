'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import type { ContentPillar } from '@/sanity/lib/types'

const resourceTypes = [
  { value: null, label: 'All' },
  { value: 'video', label: '🎬 Videos' },
  { value: 'howto', label: '📋 How-To' },
  { value: 'download', label: '📥 Downloads' },
  { value: 'review', label: '⭐ Reviews' },
]

export default function ToolkitFilters({
  pillars,
}: {
  pillars: ContentPillar[]
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeType = searchParams.get('type')
  const activePillar = searchParams.get('pillar')

  function updateParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    const query = params.toString()
    router.push(query ? `?${query}` : '/learn/teacher-toolkit', { scroll: false })
  }

  const btnBase: React.CSSProperties = {
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'background-color 0.2s ease, color 0.2s ease',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
      {/* Row 1 — Resource type */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {resourceTypes.map((rt) => {
          const isActive = activeType === rt.value || (!activeType && !rt.value)
          return (
            <button
              key={rt.label}
              onClick={() => updateParam('type', rt.value)}
              style={{
                ...btnBase,
                padding: '0.375rem 1rem',
                fontSize: '0.875rem',
                backgroundColor: isActive ? 'var(--earth)' : 'var(--beige-bg)',
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
              {rt.label}
            </button>
          )
        })}
      </div>

      {/* Row 2 — Content pillars */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
        <button
          onClick={() => updateParam('pillar', null)}
          style={{
            ...btnBase,
            padding: '0.25rem 0.75rem',
            fontSize: '0.75rem',
            backgroundColor: !activePillar
              ? 'var(--text-black)'
              : 'var(--beige-bg)',
            color: !activePillar ? 'var(--white)' : 'var(--text-muted)',
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
          All Topics
        </button>
        {pillars.map((pillar) => {
          const isActive = activePillar === pillar.slug.current
          return (
            <button
              key={pillar._id}
              onClick={() => updateParam('pillar', pillar.slug.current)}
              style={{
                ...btnBase,
                padding: '0.25rem 0.75rem',
                fontSize: '0.75rem',
                backgroundColor: isActive
                  ? pillar.color || 'var(--earth)'
                  : 'var(--beige-bg)',
                color: isActive ? 'var(--white)' : 'var(--text-muted)',
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
    </div>
  )
}
