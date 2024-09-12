import { Card, CardBody, CardHeader, Image, Spinner } from "@nextui-org/react"
import { useGetAdvertismentsQuery } from "../../app/services/advertisementsApi"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


type Props = {
  perPage: number
  page: number
}

function AdvertismentsList({ perPage, page }: Props) {
  const { data, isSuccess, isError } = useGetAdvertismentsQuery({perPage: perPage, page: page})
  
  console.log(data)

  if (isError) {
    return <div>Возникла ошибка</div>
  }

  return (
    isSuccess ? <div> <div className="flex flex-wrap gap-3 justify-center pb-10">
      {data.data.map(advertisment => (
          <Card key={advertisment.id}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{advertisment.name}</h4>
              <small className="text-default-500">{advertisment.price} ₽</small>
              <small className="text-default-500">{advertisment.views} просмотров</small> 
              <small className="text-default-500">{advertisment.likes} лайков</small> 
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              {advertisment.imageUrl ? <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
                height={270}
              /> : <div className="w-[270px] h-[270px] flex items-center justify-center">Нет картинки</div>}
            </CardBody>
          </Card>
      ))}
    </div>
      <div className="flex items-center justify-center">
        <FaAngleLeft /><span>{page}</span><FaAngleRight />
      </div>
    </div> : <div className="flex justify-center"><Spinner /></div>
  )
}

export default AdvertismentsList