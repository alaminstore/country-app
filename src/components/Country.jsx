import React from "react";
import style from "./country.module.css";

const Country = (props) => {
  const { name, flags, population, area, capital } = props.country;
  return (
    <article className={style.country}>
      <div>
        <img src={flags.svg} alt={name.common} className={style.flag} />
        <h4>Name:{name.common}</h4>
        <h4>Population:{population}</h4>
        <h4>Area:{area}</h4>
        <h4>Capital:{capital}</h4>
      </div>
    </article>
  );
};

export default Country;
