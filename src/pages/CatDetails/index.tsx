import { useState, useCallback, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import SLButton from "../../shared/components/Button";
import { getCatDetails } from "../../store/slicers/cats";

import { AppDispatch } from "../../store";
import { ICatImages } from "../../shared/models/Interfaces/cat";

import { PAGE, LIMIT_COUNT } from "./constants";

interface IParams {
  id: string;
}

const CatDetails = () => {
  const [catImages, setCatImages] = useState<ICatImages[]>([]);
  const [page, setPage] = useState(PAGE);

  const { id } = useParams<IParams>();

  const dispatch = useDispatch<AppDispatch & any>();

  const getUserDetails = useCallback(async () => {
    const { meta, payload } = await dispatch(
      getCatDetails({ id, page, limit: LIMIT_COUNT })
    );

    if (meta.requestStatus !== "fulfilled") {
      // todo show fail error
      return;
    }

    setCatImages(payload);
  }, [dispatch, id, page]);

  const showMore = () => {
    setPage(page + PAGE);
  };

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  return (
    <Fragment>
      {catImages?.map((cat) => (
        <img
          key={cat.url}
          src={cat.url}
          height={cat.height}
          width={cat.width}
          alt="cat"
        />
      ))}
      <SLButton clickHandler={showMore} variant="contained">
        Show more
      </SLButton>
    </Fragment>
  );
};

export default CatDetails;
