import React from "react";
import Country from "./Country";

import { v4 as uuidv4 } from "uuid";
import style from "./countries.module.css";

const Countries = ({ Countries, onRemoveCountry }) => {
  return (
    <section className={style.countries}>
      {Countries.map((country, index) => {
        const countryList = { country, id: uuidv4() };
        return (
          <Country
            {...countryList}
            onRemoveCountry={onRemoveCountry}
            key={index}
          />
        );
        // <Country country={country, id: uuidv4() } key={index} />
      })}
    </section>
  );
};

export default Countries;
