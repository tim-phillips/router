import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  React.useEffect(() => {
    console.log('Home MOUNT')
    return () => {
      console.log('Home UNmount')
    }
  })
  
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
    </div>
  )
}
