//TODO: 영화 검색창이나, 메인 페이지에서 영화를 누르면 해당 영화의 상세페이지로 들어가도록 구현
//현재는 api가 작동되는지 확인용으로 만들어 놓았고, 우선적으로 searchMovie 컴포넌트를 먼저 구현하였다.

import React, { useEffect, useState } from 'react';

//KMBD 인증키 = 777KP7DH9KI1K831H458
//KMDB 기본요청 URL = https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2
//영화 듄의 영화코드 movieSeq=54111

const MovieDetail = () => {
  const [loading, setLoading] = useState(true);
  const [MovieDetail, setMovieDetail] = useState([]);

  const getMovieDetaile = async () => {
    //내부 await로 패치를 기다려서 promise 객체를 받고 프로미스 객체를 json()로 json으로 변환될 때까지 기다린다.
    const json = await (
      await fetch(
        'https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=777KP7DH9KI1K831H458&movieSeq=54111'
      )
    ).json();
    console.log(json);
  };

  useEffect(() => {
    getMovieDetaile();
  }, []);
};

export default MovieDetail;
