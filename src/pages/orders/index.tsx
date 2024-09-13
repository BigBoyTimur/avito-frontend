import { Accordion, AccordionItem, Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { useGetOrdersQuery } from "../../app/services/ordersApi"

function Orders() {
  const { data, isSuccess, isError } = useGetOrdersQuery()

  if (isError) {
    return null
  }

  return (
    isSuccess ?
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map(order => <Card key={order.id}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Заказ</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p>Кол-во товартов: {order.items.length}</p>
              <p>{order.finishedAt && `Заказ завершен: ${order.finishedAt}`}</p>
              <Accordion variant="splitted">
                <AccordionItem key={order.id} title="Посмотреть все товары">
                {order.items.map(item =>     
                  <Card key={item.id} className="bg-blue-900">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <h4 className="font-bold text-large">{item.name}</h4>
                      <small className="text-default-500">{item.price} ₽</small>
                      <small className="text-default-500">{item.views} просмотров</small> 
                      <small className="text-default-500">{item.likes} лайков</small> 
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      {item.imageUrl ? <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={item.imageUrl}
                        width={270}
                        height={270}
                      /> : <div className="w-[270px] h-[270px] flex items-center justify-center">Нет картинки</div>}
                    </CardBody>
                  </Card>
                )}
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>)}
      </div>
     : <div>Loading</div>
  )
}

export default Orders