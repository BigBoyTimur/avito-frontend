import {
  useGetAdvertismentsQuery,
  useLazyGetAdvertismentsQuery,
} from "../../app/services/advertisementsApi";
import AdvertismentCard from "../advertisment-card";
import GridContainer from "../grid-container";
import Pagination from "../pagination";
import HorizontalCenteredSpinned from "../horizontal-centered-spinner";
import ErrorMessage from "../error-message";
import { useEffect } from "react";

type Props = {
  perPage: number;
  page: number;
  setPage: (page: number) => void;
};

function AdvertismentsList({ perPage, page, setPage }: Props) {
  const { data, isSuccess, isError } = useGetAdvertismentsQuery({
    perPage: perPage,
    page: page,
  });
  const [triggerGetAdvertismentsQuery] = useLazyGetAdvertismentsQuery();

  const handlePageChange = (page: number | null) => {
    if (page === null) {
      return;
    }
    setPage(page);
    triggerGetAdvertismentsQuery({ perPage: perPage, page: page });
  };

  useEffect(() => { // для того, чтобы при изменении товара изменения были видны на главной странице
    triggerGetAdvertismentsQuery({ perPage: perPage, page: page })
  })
  
  if (isError) {
    return (
      <div>
        <ErrorMessage>Возникла ошибка</ErrorMessage>
      </div>
    );
  }

  return isSuccess ? (
    <div className="flex flex-col items-center">
      <GridContainer>
        {data.data.map((advertisment) => (
          <AdvertismentCard
            id={advertisment.id}
            name={advertisment.name}
            price={advertisment.price}
            createdAt={advertisment.createdAt}
            views={advertisment.views}
            likes={advertisment.likes}
            imageUrl={advertisment.imageUrl}
          />
        ))}
      </GridContainer>
      <Pagination data={data} handlePageChange={handlePageChange} page={page} />
    </div>
  ) : (
    <HorizontalCenteredSpinned />
  );
}

export default AdvertismentsList;
