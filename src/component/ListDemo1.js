import { useState } from "react";

function ListDemo1() {
  let addCity = "addCity";
  let list = ["Delhi", "UP", "UK", "Andhra", "Telengena"];
  let [city, setCity] = useState("");
  let [cityValuePresent, setCityValuePresent] = useState(true);
  let [cityList, setCityList] = useState(list);

  let cityChangeHandler = (e) => {
    setCity(e.target.value);
  };

  let cityEnterHandler = (e) => {
    if (e.keyCode === 13) {
      console.log(city);
      submit();
    }
  };

  let submit = () => {
    if (!city) {
      setCityValuePresent(false);
      return;
    } else {
      setCityValuePresent(true);
    }
    let newList = [city, ...cityList];
    setCityList(newList);
    setCity("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={city}
          placeholder="enter city"
          onChange={cityChangeHandler}
          onKeyUp={cityEnterHandler}
        />
        <input type="button" value={addCity} onClick={submit} />
      </div>
      {!cityValuePresent && <div>Enter city to save</div>}

      <h2>City List</h2>
      {cityList.map((item, index) => (
        <h4 key={index}>
          {index + 1}. {item}
        </h4>
      ))}
    </div>
  );
}

export default ListDemo1;
