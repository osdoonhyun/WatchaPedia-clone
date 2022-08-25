//TODO: 일단 검색창에서 영화제목을 검색하면 관련 영화를 표시하도록 만들기

import React, { useState } from 'react';

//KMBD 인증키 ServiceKey= 777KP7DH9KI1K831H458
//KMDB 기본요청 URL = https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2

const SearchMovies = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [movieList, setMovieList] = useState([]);

  const onGetMovies = async (event) => {
    event.preventDefault();
    const json = await (
      await fetch(
        `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=777KP7DH9KI1K831H458&title=${title}&detail=Y`
      )
    ).json();
    console.log(json);
    console.log(json.Data[0].Result);
    const movieSeqAndTitleArray = json.Data[0].Result.map((x) => {
      let rectifyTitle = x.title;
      rectifyTitle = rectifyTitle.replace(/\!HS/g, '');
      rectifyTitle = rectifyTitle.replace(/\!HE/g, '');
      rectifyTitle = rectifyTitle.replace(/^\s+|\s+$/g, '');
      rectifyTitle = rectifyTitle.replace(/ +/g, ' ');

      return {
        movieSeq: x.movieSeq,
        title: rectifyTitle,
        posterUrl: x.posters.split('|')[0],
        stilUrl: x.stlls.split('|')[0],
        prodYear: x.prodYear,
        nation: x.nation,
        genre: x.genre,
      };
    });
    setMovieList(movieSeqAndTitleArray);
  };

  const onChange = (event) => {
    let value = event.target.value;
    setTitle(value);
  };

  const onClick = () => {
    console.log('클릭되어 해당 영화 상세 페이지로 이동합니다.');
  };

  return (
    <>
      <form>
        <input type='text' placeholder='제목을 입력하세요' value={title} onChange={onChange} />
        <button onClick={onGetMovies}>검색</button>
      </form>
      <div>
        <form>
          {movieList.map((m) => (
            // <button key={m.movieSeq}>{m.title}</button>
            <div onClick={onClick} key={m.movieSeq}>
              <div>
                <img src={m.posterUrl} alt='포스터 사진' width='160' height='233' />
              </div>
              <div>{m.title}</div>
              <div>
                {m.prodYear}·{m.nation}
              </div>
              <div>{m.genre}</div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

/* 버튼 태그는 기본적으로 타입이 submit이라 onClick 속성을 줘도 onSubmit 속성으로 작동한다.
onSubmit을 주면 event.preventDefault();이 있다하더라고 새로고침이 되어버리니
버튼 태그는 반드시 onClick을 사용하고 event.preventDefault();로 새로고침을 막도록 한다.

둘의 차이
onClick은 엔터로 못들어가는 대신 새로고침이 기본이 아니며,
onSubmit은 엔터로 들어갈 수 있는 대신 새로고침이 기본이라서
event.preventDefault(); 를 사용해서 기본 동작을 막아주어야 한다.*/

export default SearchMovies;
