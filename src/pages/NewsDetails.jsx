import React, { useEffect, useState } from "react";
import { useApp } from "../utils/Context";
import { useParams } from "react-router-dom";
import s from "../style/newsDetails_style.module.css";
export default function NewsDetails() {
  const { get_data, globalState } = useApp();
  const [detailsNews, setDetailsNew] = useState(null);
  const { title } = useParams();
  const updateNews = async (params) => {
    try {
      await get_data();
      const filteredNews = globalState.articles.filter(
        (item) => item.title === params
      );
      filteredNews.length > 0
        ? setDetailsNew(filteredNews[0])
        : console.error(`News whith title ${params} not found`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateNews(title);
  }, []);
  if (!detailsNews) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.div_container}>
      <div className={s.div_info}>
        <img src={detailsNews.urlToImage} alt="news img" />
        <h1>{detailsNews.title}</h1>
      </div>
      <p>{detailsNews.content}</p>
    </div>
  );
}
