"use client" //torna a pagina um client component (com interação / JavaScript)

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  //copiar o numero do telefone quando clicar
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso!")
  }

  return (
    <div className="flex justify-between" key={phone}>
      {/* esquerda */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>

      {/* direita */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
