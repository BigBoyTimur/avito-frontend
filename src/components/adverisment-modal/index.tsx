import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useAddAdvertismentMutation } from "../../app/services/advertisementsApi";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function AdvertismentModal({ isOpen, onClose }: Props) {
  const [addAdvertisment, { isLoading } ] = useAddAdvertismentMutation()

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 1,
    createdAt: (new Date()).toISOString(),
    views: 0,
    likes: 0,
    imageUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await addAdvertisment(formData)
    onClose()
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
                <Input
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
                  value={'' + formData.price}
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
                  isLoading={isLoading}
                  color="primary"
                >
                  Добавить товар
                </Button>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button onPress={onClose}>
                Закрыть
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default AdvertismentModal;
