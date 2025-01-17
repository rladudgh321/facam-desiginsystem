import { ListProps } from "./types";
import { UnorderedList } from "./UnorderedList";
import { OrderedList } from "./OrderedList";
import { forwardRef, Ref } from "react";

const List = (
  props: ListProps,
  ref: Ref<HTMLOListElement>,
) => {
  const { variant = "unordered", ...rest } = props;

  if (variant === "unordered") {
    return (
      <UnorderedList {...rest} ref={ref} />
    );
  }

    return <OrderedList {...rest} ref={ref} />;
};

const _List = forwardRef(List);
export { _List as List };