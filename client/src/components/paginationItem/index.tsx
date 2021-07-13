import { FC } from "react";
import { Container } from "../../styledComponents/paginationItem";
import { useDispatch } from "react-redux";
import { paginationActions } from "../../redux/slices/pagination";

interface PaginationITemProps {
  page: number;
  currPage: number;
}

const PaginationItem: FC<PaginationITemProps> = ({
  page,
  currPage,
}): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <>
      <Container
        className={`mx-2  ${currPage === page && "bg-light"}`}
        onClick={() => {
          dispatch(paginationActions.specificPage(page));
        }}
      >
        {page}
      </Container>
    </>
  );
};

export default PaginationItem;
