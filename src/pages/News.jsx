import React, { useEffect, useState } from "react";
import { useApp } from "../utils/Context";
import { Link } from "react-router-dom";
import s from "../style/news_style.module.css";
const News = () => {
  const { get_data, globalState } = useApp();
  const [inputValue, setInputValue] = useState("");
  const fetchData = async () => {
    try {
      await get_data(inputValue);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function handleInputChage(e) {
    setInputValue(e.target.value);
  }
  function onFormSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  return (
    <div className={s.container}>
      <h1>Top news for you</h1>
      <div className={s.div_form}>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="What you want?"
            value={inputValue}
            onChange={handleInputChage}
          />
          <button>Знайти</button>
        </form>
      </div>

      <div className={s.div_content}>
        {globalState.articles?.map((newsItem) => {
          return (
            <Link to={`${newsItem.title}`}>
              <div className={s.div_item} key={newsItem.id}>
                <img src={newsItem.urlToImage} alt="" />
                <h3>{newsItem.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default News;
