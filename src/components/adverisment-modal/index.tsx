import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import {
  useAddAdvertismentMutation,
  useLazyGetAdvertismentByIdQuery,
  useLazyGetAdvertismentsQuery,
  useUpdateAdvertismentMutation,
} from "../../app/services/advertisementsApi";
import ErrorMessage from "../error-message";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  type: "add" | "change";
  name?: string;
  imageUrl?: string;
  price?: number;
  description?: string;
  id?: string;
};

function AdvertismentModal({
  isOpen,
  onClose,
  type,
  name,
  imageUrl,
  price,
  description,
  id,
}: Props) {
  const [addAdvertisment, { isLoading: isAddAdvLoading, error: addError }] =
    useAddAdvertismentMutation();
  const [
    updateAdvertisment,
    { isLoading: isUpdateAdLoading, error: updateError },
  ] = useUpdateAdvertismentMutation();
  const [triggerGetAdvertismentByIdQuery] = useLazyGetAdvertismentByIdQuery();

  const [formData, setFormData] = useState({
    name: name || "",
    description: description || "",
    price: price || 1,
    createdAt: new Date().toISOString(),
    views: 0,
    likes: 0,
    imageUrl: imageUrl || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === "add") {
      await addAdvertisment(formData);
    } else if (type === "change" && id) {
      const updatedData = {
        name: formData.name,
        imageUrl: formData.imageUrl,
        price: formData.price,
        description: formData.description,
      };
      await updateAdvertisment({ id: id, updatedData });
      await triggerGetAdvertismentByIdQuery({ id });
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Добавить товар</ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <Input
                  placeholder="Название товара"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  placeholder="Описание товара"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="number"
                  placeholder="Цена"
                  name="price"
                  value={"" + formData.price}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="URL изображения"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  isLoading={isAddAdvLoading || isUpdateAdLoading}
                  color="primary"
                >
                  {type === "add" ? "Добавить товар" : "Изменить товар"}
                </Button>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button onPress={onClose}>Закрыть</Button>
              {(addError || updateError) && (
                <ErrorMessage>Возникла ошибка</ErrorMessage>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default AdvertismentModal;
