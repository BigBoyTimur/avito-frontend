import { Button, Select, SelectItem, useDisclosure } from '@nextui-org/react'
import React from 'react'
import { useLazyGetAdvertismentsQuery } from '../../app/services/advertisementsApi'
import AdvertismentModal from '../adverisment-modal'

type Props = {
  perPage: number
  setPerPage: (limit: number) => void
  page: number
  setPage: (page: number) => void
}


function Controls({ perPage, setPerPage, page, setPage }: Props) {
  const [triggerGetAdvertismentsQuery] = useLazyGetAdvertismentsQuery()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>	) => {
    setPerPage(Number(event.target.value))
    setPage(1)
    triggerGetAdvertismentsQuery({perPage: Number(event.target.value), page})
  }

  const handleClose = async () => {
    await triggerGetAdvertismentsQuery({perPage: perPage, page})
    onClose()
  }

  return (
    <>
      <div className='my-10'>
        <Select
          label="Количества объявлений"
          onChange={handleChange}
          defaultSelectedKeys={['10']}
        >
          <SelectItem
            key={'8'}
            value={8}
          >
            8
          </SelectItem>
          <SelectItem
            key={'10'}
            value={10}
          >
            10
          </SelectItem>
          <SelectItem
            key={'12'}
            value={12}
          >
            12
          </SelectItem>
        </Select>
        <Button
          onClick={() => onOpen()}
        >
          Добавить объявления
        </Button>
      </div>
      <AdvertismentModal type='add' isOpen={isOpen} onClose={handleClose} />
    </>
  )
}

export default Controls