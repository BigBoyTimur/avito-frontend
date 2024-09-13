import React from "react";
import { Advertisment } from "../../app/types";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

function AdvertismentCard({
  id,
  name,
  price,
  views,
  likes,
  imageUrl,
  className,
}: Advertisment & { className?: string }) {
  return (
    <Link to={`/advertisments/${id}`} className={className}>
      <Card key={id} className="bg-blue-900">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{name}</h4>
          <small className="text-default-500">{price} ₽</small>
          <small className="text-default-500">{views} просмотров</small>
          <small className="text-default-500">{likes} лайков</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          {imageUrl ? (
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={imageUrl}
              width={270}
              height={270}
            />
          ) : (
            <div className="w-[270px] h-[270px] flex items-center justify-center">
              Нет картинки
            </div>
          )}
        </CardBody>
      </Card>
    </Link>
  );
}

export default AdvertismentCard;
