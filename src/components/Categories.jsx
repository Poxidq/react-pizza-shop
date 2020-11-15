import React, { useState } from "react";

const Categories = React.memo(function Categories({ items, onClickItem }) { //React.memo(func) делает поверхностное сравнение изменений пропсов
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => {
            onSelectItem(null);
          }}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={activeItem === index ? "active" : ""}
                onClick={() => {
                  onSelectItem(index);
                }}
                key={`${item}__${index}`}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;
