import { Select, Label, ListBox } from "@heroui/react";

import { SortBy } from "@/types";

const sortData: { value: SortBy; label: string }[] = [
  {
    value: "popularity.asc",
    label: "Less Popular"
  },
  {
    value: "popularity.desc",
    label: "Most Popular"
  }
];

type MovieSortSelectProps = {
  selectedSort: SortBy;
  setSelectedSort: (value: SortBy) => void;
};

export const MovieSortSelect = ({
  selectedSort,
  setSelectedSort
}: MovieSortSelectProps) => {
  return (
    <Select
      className="max-w-[170px]"
      value={selectedSort}
      onChange={(value) => setSelectedSort(value as SortBy)}
    >
      <Label>Sort By</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {sortData.map((sort) => (
            <ListBox.Item
              id={sort.value}
              key={sort.value}
              textValue={sort.label}
            >
              {sort.label}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
};
