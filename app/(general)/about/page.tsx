import type { Metadata } from "next"

export const metadata:Metadata = {
  title: 'SEO Title',
  description: 'SEO Juan',
  keywords:['About page','Juan Bonilla','informacion de pedos','...']
}

export default function AboutPage() {
  return (
    <div>
        <span className="text-sm">
          <h2>About</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus facere iste animi alias doloribus quos minus pariatur. Exercitationem sunt quos culpa corporis necessitatibus adipisci officia sed reiciendis laborum possimus.
          </p>
        </span>
    </div>
  )
}
