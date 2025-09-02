import { useState } from "react";

// index из песочницы не менял, потому что его в репозитории этом нет.

// Универсальный компонент для всех блоков
export const Block = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

// Компоненты для обратной совместимости
export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => (
  <Block mouseEnterCallbak={mouseEnterCallbak}>
    <img src={imgSrc} alt={imgAlt} />
  </Block>
);

export const Block2 = ({ mouseEnterCallbak, content }) => (
  <Block mouseEnterCallbak={mouseEnterCallbak}>
    <p>{content}</p>
  </Block>
);

export const Block3 = ({ mouseEnterCallbak, userData }) => (
  <Block mouseEnterCallbak={mouseEnterCallbak}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </Block>
);
