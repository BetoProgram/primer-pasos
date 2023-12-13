import type { Metadata } from "next"

export const metadata:Metadata = {
  title: 'Pagina de precios',
  description: 'Pagina donde se muestran los precios',
  keywords:['Precios Page','Juan Bonilla','informacion de productos','productos frutas']
}

export default function PricingPage() {
  return (
    <div>
        <span className="text-5xl">Pricing</span>
    </div>
  )
}
