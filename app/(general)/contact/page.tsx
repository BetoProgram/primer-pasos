import type { Metadata } from "next"

export const metadata:Metadata = {
  title: 'SEO Contactos',
  description: 'SEO de Contacto',
  keywords:['About page','Juan Bonilla','informacion de contactos','...']
}

export default function ContactPage() {
  return (
    <div>
        <span className="text-5xl">Contact</span>
    </div>
  )
}
