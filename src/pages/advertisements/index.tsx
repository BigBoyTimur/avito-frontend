import { useState } from "react";
import Controls from "../../components/controls";
import AdvertismentsList from "../../components/advertisments-list";

function Advertisments() {
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  return (
    <>
      <Controls
        perPage={perPage}
        setPerPage={setPerPage}
        page={page}
        setPage={setPage}
      />
      <AdvertismentsList perPage={perPage} page={page} setPage={setPage} />
    </>
  );
}

export default Advertisments;
