import { OptionType } from "@/common/UI/select/SelectApp";
import { IMainFilterParams } from "@/common/constants/filter";
import { SearchItem } from ".";
import { NextImage } from "../../NextImage";

interface IProps {
  onChange: (payload: string) => void;
  value: string;
  props: Omit<IMainFilterParams, "key">;
}

export const SelectSearch = ({ props: { iconB, iconW, list, title }, value, onChange }: IProps) => {
  const handelChangeValueSearch = (item: OptionType) => () => {
    if (item.value !== value) {
      onChange(item.value);
      // setActiveSelect(false);
    }
  };

  const getOptions = () => {
    if (Array.isArray(list)) {
      return [...list, { label: "Очистить", value: "" }].filter((option) => option.value !== value);
    }
  };

  return (
    <SearchItem iconW={iconW} value={value} title={title}>
      {getOptions()?.map((item) => (
        <li key={item.value} onClick={handelChangeValueSearch(item)}>
          <div>
            <NextImage info={iconB} $width={24} $height={24} objectFit="contain" />
          </div>
          {item.label}
        </li>
      ))}
    </SearchItem>
  );
};
