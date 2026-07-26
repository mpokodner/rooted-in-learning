'use client'

import { useState } from 'react'

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const fullUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${url}`
    : url

  function handleCopy() {
    navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bp-share">
      <span className="bp-share-label">Share this article</span>
      <div className="bp-share-buttons">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bp-share-btn bp-share-btn--linkedin"
          aria-label="Share on LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.2 8.3h4.56V24H.2zM8.34 8.3h4.37v2.15h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.91h-4.56v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8.34z" />
          </svg>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bp-share-btn bp-share-btn--x"
          aria-label="Share on X"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <button
          onClick={handleCopy}
          className="bp-share-btn bp-share-btn--copy"
          aria-label={copied ? 'Copied!' : 'Copy link'}
        >
          {copied ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
