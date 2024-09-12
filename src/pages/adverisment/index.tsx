import { useParams } from "react-router-dom";
import { useGetAdvertismentByIdQuery } from "../../app/services/advertisementsApi";
import { Card, CardBody, CardHeader, Image, Spinner } from "@nextui-org/react";

function Advertisment() {
  const { id } = useParams();

  const {
    data: advertisment,
    isSuccess,
    error,
  } = useGetAdvertismentByIdQuery({ id: id || "" });

  return isSuccess && advertisment ? (
    <div className="flex justify-center">
      <Card key={id} className="w-[300px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{advertisment.name}</h4>
          <small className="text-default-500">{advertisment.price} ₽</small>
          <small className="text-default-500">
            {advertisment.views} просмотров
          </small>
          <small className="text-default-500">
            {advertisment.likes} лайков
          </small>
          <small className="text-default-500">
            {advertisment.likes} лайков
          </small>
          <small className="text-default-500">
            Дата создания:{" "}
            {new Date(advertisment.createdAt).toLocaleString("ru-RU", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          {advertisment.imageUrl ? (
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={advertisment.imageUrl}
            />
          ) : (
            <div className="flex items-center justify-center">Нет картинки</div>
          )}
          <p className="mt-2">{advertisment.description}</p>
        </CardBody>
      </Card>
    </div>
  ) : (
    <div className="flex justify-center">
      <Spinner />
    </div>
  );
}

export default Advertisment;
