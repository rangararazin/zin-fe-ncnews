import { Button, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SortIcon from "@mui/icons-material/Sort";

export const Sortby = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const [newSortValue, setNewSortValue] = useState(sort_by);
  const [newOrderValue, setNewOrderValue] = useState(order);

  return (
    <form method="GET" className="form-sort">
      <InputLabel id="sort-by">Sort By</InputLabel>
      <Select
        labelId="sort-by"
        name="sort_by"
        id="select-sortby"
        size="small"
        value={newSortValue ? newSortValue : "created_at"}
        onChange={(e) => {
          setNewSortValue(e.target.value);
        }}
      >
        <MenuItem value="created_at">Created On</MenuItem>
        <MenuItem value="comment_count">Comment Count</MenuItem>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="votes">Votes</MenuItem>
        <MenuItem value="author">Author</MenuItem>
      </Select>

      <InputLabel id="order-by">Order By</InputLabel>
      <Select
        labelId="order-by"
        name="order"
        id="select-order"
        size="small"
        value={newOrderValue ? newOrderValue : "desc"}
        onChange={(e) => {
          setNewOrderValue(e.target.value);
        }}
      >
        <MenuItem value="desc">Descending</MenuItem>
        <MenuItem value="asc">Ascending</MenuItem>
      </Select>

      <Button id="sort-button" variant="contained" type="submit">
        <SortIcon fontSize="small" />
      </Button>
    </form>
  );
};
