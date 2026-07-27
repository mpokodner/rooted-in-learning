'use client'

/**
 * Embedded Sanity Studio — accessible at /studio
 * This route lives outside the (main) group so it renders
 * without the site header/footer chrome.
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export default function StudioPage() {
  return <NextStudio config={config} />
}
