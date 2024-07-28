import { PanelsTopLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function selectProjectItem() {
  return (
    <Link href="/project" className="flex items-center gap-2">
    <PanelsTopLeft className="w-6 h-6 mr-1" />
    <h1 className="font-bold text-lg">Brand</h1>
  </Link>
  )
}
