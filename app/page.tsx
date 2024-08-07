import { EyeIcon, FootprintsIcon, SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

//SERVER COMPONENTS
const Home = async () => {
  //chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/*header*/}
      <Header />

      {/*div abaixo do header*/}
      <div className="p-5">
        {/*nome e data*/}
        <h2 className="text-xl font-bold">Olá,Leticia!</h2>
        <p>Quarta-Feira, 07 de agosto</p>

        {/*barra de busca*/}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* icones de busca */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt="cabelo" />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" width={16} height={16} alt="barba" />
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamento.svg"
              width={16}
              height={16}
              alt="acabamento"
            />
            Acabamento
          </Button>

          <Button className="gap-2" variant="secondary">
            <FootprintsIcon size={16} />
            Pezinho
          </Button>

          <Button className="gap-2" variant="secondary">
            <EyeIcon size={16} />
            sobrancelha
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt="cabelo" />
            Cabelo
          </Button>
        </div>

        {/*banner*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/Banner Pizza.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/*agendamento*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        {/*barbearias recomendadas*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* barbearias populares*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card className="px-5 py-6">
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
