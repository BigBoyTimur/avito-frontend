import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'
import { useLazyGetAdvertismentsQuery } from '../../app/services/advertisementsApi'

type Props = {
  setLimit: (limit: number) => void
  page: number
}


function Controls({ setLimit, page }: Props) {
  const [triggerGetAdvertismentsQuery] = useLazyGetAdvertismentsQuery()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>	) => {
    setLimit(Number(event.target.value))
    triggerGetAdvertismentsQuery({perPage: Number(event.target.value), page})
  }

  return (
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
    </div>
  )
}

export default Controls