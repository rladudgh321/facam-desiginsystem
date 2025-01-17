import { ListItemProps } from "./types";
import { Text } from "../typography";
import { forwardRef, Ref } from "react";

const ListItem = (props: ListItemProps, ref: Ref<HTMLLIElement>) => {

  return <Text {...props} ref={ref} as="li" />;
}

const _ListItem = forwardRef(ListItem)
export { _ListItem as ListItem }