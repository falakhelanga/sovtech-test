import { Wrapper, Container } from "./styledComponents";
import { useQuery } from "@apollo/client";
import Loader from "../../components/loader/index";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/index";
import { HOME_WORLD } from "../../graphql/queries/index";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconBtn } from "../../styledComponents/search";
import { useHistory } from "react-router-dom";
const DetailsPage = (): JSX.Element => {
  const history = useHistory();
  const { name, homeworld, gender, mass, height } = useSelector(
    (state: RootState) => state.detailsReducer
  );
  const { loading, data } = useQuery(HOME_WORLD, {
    variables: { url: homeworld },
  });

  const nam = data?.Homeworld.name;
  const rotation_period = data?.Homeworld.rotation_period;
  const orbital_period = data?.Homeworld.orbital_period;
  const diameter = data?.Homeworld.diameter;
  const climate = data?.Homeworld.climate;
  const terrain = data?.Homeworld.terrain;
  const surface_water = data?.Homeworld.surface_water;
  const population = data?.Homeworld.population;
  const residents = data?.Homeworld.residents;
  const films = data?.Homeworld.films;

  return (
    <>
      <IconBtn
        onClick={() => {
          history.goBack();
        }}
      >
        <ArrowBackIcon className="text-white" />
      </IconBtn>
      {loading && <Loader />}
      <Wrapper className=" pt-4 container  ">
        <div className="row w-100 justify-content-center text-center ">
          {!loading && (
            <Container className="p-4 col-sm-12 col-md-8 col-lg-6">
              <h1 className="fw-bold text-capitalize text-center">
                {name && name}
              </h1>
              <div className="mt-4">
                <p className="text-capitalize fw-bold h6">
                  gender : <span>{gender}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  mass : <span>{mass}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  height : <span>{height}</span>
                </p>
                <p className="text-capitalize h3 fw-bold mt-4">home world</p>
                <p className="text-capitalize fw-bold h6 mt-4">
                  name : <span>{nam}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  rotation period : <span>{rotation_period}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  orbital period : <span>{orbital_period}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  diameter : <span>{diameter}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  climate : <span>{climate}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  terrain : <span>{terrain}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  surface water : <span>{surface_water}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  population : <span>{population}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  residents : <span>{residents.length}</span>
                </p>
                <p className="text-capitalize h6 fw-bold">
                  films : <span>{films.lenght}</span>
                </p>
              </div>
            </Container>
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default DetailsPage;
