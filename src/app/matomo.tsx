"use client"

import { trackAppRouter } from "@socialgouv/matomo-next"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

export default function MatomoAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!MATOMO_URL || !MATOMO_SITE_ID) return

    trackAppRouter({
      url: MATOMO_URL,
      siteId: MATOMO_SITE_ID,
      pathname,
      searchParams,
    })
  }, [pathname, searchParams])

  return null
}
