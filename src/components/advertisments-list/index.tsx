import { Card, CardBody, CardHeader, Image, Spinner } from "@nextui-org/react"
import { useGetAdvertismentsQuery, useLazyGetAdvertismentsQuery } from "../../app/services/advertisementsApi"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


type Props = {
  perPage: number
  page: number
  setPage: (page: number) => void
}

function AdvertismentsList({ perPage, page, setPage }: Props) {
  const { data, isSuccess, isError } = useGetAdvertismentsQuery({perPage: perPage, page: page})
  const [ triggerGetAdvertismentsQuery ] = useLazyGetAdvertismentsQuery()

  const handlePageChange = (page: number | null) => {
    if (page === null) {
      return;
    }
    setPage(page)
    triggerGetAdvertismentsQuery({perPage: perPage, page: page})
  }

  if (isError) {
    return <div>Возникла ошибка</div>
  }

  return (
    isSuccess ? <div> <div className="flex flex-wrap gap-3 justify-center pb-10">
      {data.data.map(advertisment => (
        <Link to={`advertisments/${advertisment.id}`}>
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
                src={advertisment.imageUrl}
                width={270}
                height={270}
              /> : <div className="w-[270px] h-[270px] flex items-center justify-center">Нет картинки</div>}
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
      <div className="flex items-center justify-center">
        <FaAngleLeft className={`${data.prev ? 'fill-blue-400 cursor-pointer' : 'fill-gray-700'}`} onClick={() => handlePageChange(data.prev)}/><span>{page}</span><FaAngleRight className={`${data.next ? 'fill-blue-400 cursor-pointer' : 'fill-gray-700'}` } onClick={() => handlePageChange(data.next)} />
      </div>
    </div> : <div className="flex justify-center"><Spinner /></div>
  )
}

export default AdvertismentsList