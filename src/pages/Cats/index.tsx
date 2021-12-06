import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { List, ListItem } from "@mui/material";
import { ICat } from "../../shared/models/Interfaces/cat";

import { getCats } from "../../store/slicers/cats";

import { AppDispatch } from "../../store";

interface ICatsProps {
  closeSidebar: () => void;
}

const Cats = ({ closeSidebar }: ICatsProps): JSX.Element => {
  const [cats, setCats] = useState<ICat[]>([]);
  const dispatch = useDispatch<AppDispatch & any>();

  const handleGetCats = useCallback(async () => {
    const { meta, payload } = await dispatch(getCats());
    if (meta.requestStatus !== "fulfilled") {
      // todo show fail error
      return;
    }

    setCats(payload);
  }, [dispatch]);

  useEffect(() => {
    handleGetCats();
  }, [handleGetCats]);

  return (
    <List component="nav">
      {cats.map((cat) => (
        <ListItem
          button
          component={Link}
          key={cat.id}
          to={`/cats/${cat.id}`}
          onClick={closeSidebar}
        >
          {cat.name}
        </ListItem>
      ))}
    </List>
  );
};

export default Cats;
