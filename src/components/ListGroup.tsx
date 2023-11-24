import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //we destructured the `props` into its components so we can just use `items` everywhere instead of `props.items`

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); //useState returns an array of 2 elements 1. the variable 2. the updater function ; here -1 is the initialised value

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Error 404: No items found</p>}{" "}
      {/*same as {items.length === 0 ? <p>Error 404: No items found</p> : null}*/}
      <ul className="list-group">
        {items.map(
          (
            item,
            index //we can give a 2nd parameter to our map to get the index
          ) => (
            <li
              className={
                selectedIndex === index
                  ? `list-group-item active`
                  : `list-group-item`
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li> //this expression is not allowed in the middle of a JSX markup, that's why we wrapped it in {}. In JSX we can only use HTML elements or other react components
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
