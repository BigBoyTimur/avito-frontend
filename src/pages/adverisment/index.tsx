import { useNavigate, useParams } from "react-router-dom";
import { useGetAdvertismentByIdQuery } from "../../app/services/advertisementsApi";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import { IoMdArrowBack } from "react-icons/io";
import AdvertismentModal from "../../components/adverisment-modal";

function Advertisment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();


  const {
    data: advertisment,
    isSuccess,
    error,
  } = useGetAdvertismentByIdQuery({ id: id || "" });

  return isSuccess && advertisment ? (
    <div className="flex pt-20 justify-center items-center">
      <Card key={id} className="w-[800px] h-min">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="py-4 w-full flex justify-between items-center">
            <IoMdArrowBack
              onClick={() => navigate(-1)}
              className="cursor-pointer hover:fill-blue-400"
            />
            <Button onClick={() => onOpen()}>Изменить</Button>
          </div>
          <h4 className="font-bold text-3xl mb-5">{advertisment.name}</h4>
          <small className="text-default-500 text-xl">
            {advertisment.price} ₽
          </small>
          <small className="text-default-500 text-xl">
            {advertisment.views} просмотров
          </small>
          <small className="text-default-500 text-xl">
            {advertisment.likes} лайков
          </small>
          <small className="text-default-500 text-xl">
            {advertisment.likes} лайков
          </small>
          <small className="text-default-500 text-xl">
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
        <CardBody className="flex items-center overflow-visible">
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
      <AdvertismentModal
        isOpen={isOpen}
        onClose={onClose}
        type="change"
        name={advertisment.name}
        imageUrl={advertisment.imageUrl}
        price={advertisment.price}
        description={advertisment.description}
        id={id}
      />
    </div>
  ) : (
    <div className="flex justify-center">
      <Spinner />
    </div>
  );
}

export default Advertisment;
