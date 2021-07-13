import { Container } from "../../styledComponents/pagination";
import PaginationItem from "../paginationItem";
import { useSelector, useDispatch } from "react-redux";
import { paginationActions } from "../../redux/slices/pagination";
import { RootState } from "../../redux/index";
import { FC } from "react";

interface PaginationProps {
  next: string;
  prev: string;
  fetchMore: any;
}

const Pagination: FC<PaginationProps> = ({
  next,
  prev,
  fetchMore,
}): JSX.Element => {
  const dispatch = useDispatch();

  const page = useSelector((state: RootState) => state.paginationReducer.page);
  return (
    <Container className="d-flex align-items-center">
      {page > 1 && prev !== null && (
        <span
          className="fw-bold h5 d-flex align-items-center  mt-2"
          onClick={() => {
            dispatch(paginationActions.prevState(null));
          }}
        >
          {"<"}
        </span>
      )}

      {page > 2 && (
        <>
          {" "}
          <PaginationItem page={1} currPage={page} /> <span>....</span>
        </>
      )}
      {page > 1 && <PaginationItem page={page - 1} currPage={page} />}
      <PaginationItem page={page} currPage={page} />
      <PaginationItem page={page + 1} currPage={page} />
      {next !== null && (
        <span
          className="fw-bold h5 d-flex align-items-center  mt-2"
          onClick={() => {
            dispatch(paginationActions.nextPage(null));
          }}
        >
          {">"}
        </span>
      )}
    </Container>
  );
};

export default Pagination;
