import { useState } from "react"
import Controls from "../../components/controls"
import AdvertismentsList from "../../components/advertisments-list"
import { useLazyGetAdvertismentsQuery } from "../../app/services/advertisementsApi"

function Advertisments() {
  const [perPage, setPerPage] = useState(10)
  const [page, setPages] = useState(1)

  return (
    <>
      <Controls setLimit={ setPerPage } page={page} />
      <AdvertismentsList perPage={perPage} page={page} />

    </>
  )
}

export default Advertisments