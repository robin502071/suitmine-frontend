import React from 'react';
import blogimg from '../../images/robert/blog/blogimg.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BlogList() {
  const [pageNow, setPageNow] = useState(1)
  // let offset = 0;
  // const handleScroll = (e) => {
  //   // console.log('hi');
  //   console.log('top', e.target.documentElement.scrollTop);
  //   console.log('win', window.innerHeight);
  //   console.log('height', e.target.documentElement.scrollHeight);
  //   if (
  //     window.innerHeight + e.target.documentElement.scrollTop + 1 >=
  //     e.target.documentElement.scrollHeight
  //   ) {
  //     // console.log('在視窗最底部');
  //     dataGet();
  //   }
  // };

  // 撈資料
  const [dataGet, setDataGet] = useState([]);
  useEffect(() => {
    let dataGet = async () => {
      // http://localhost:3001/stocks/2330?page=1
      // http://localhost:3001/api/auth/checkIsLogin
      let response = await axios.get(
        // `https://pokeapi.co/api/v2/pokemon?limit=20`
        `http://localhost:3001/api/blogs`
      );
      // console.log(response.data.results);
      // 抓出title和images的資料
      let allData = response.data.blogs.map((value) => {
        return {
          title: value.title,
          images: value.images,
          content: value.content,
          create_time: value.create_time,
          id: value.id,
        };
      });
      // console.log('所有data要的', allData);
      // console.log('將資料拆借', allData[0].content);

      setDataGet(allData);
      // console.log(stringToHtml.__html[0].title);
      // console.log(allData[0].content);
    };
    dataGet();
    // offset += 6;
    // window.addEventListener('scroll', handleScroll);
  }, []);

  // 存資料
  // const [pokemon, setPokemon] = useState([])

  // 將html資料轉換成樣式
  // const stringToHtml = {
  //   __html: dataGet[0].content,
  // };
  // console.log('將html資料轉換成樣式',stringToHtml);
  // console.log('轉換後文字~',stringToHtml.__html[0])

  return (
    <>
      <div className="card-group">
        <div className="row justify-content-center g-3 align-items-start">
          <h2>SUITMINE BLOG</h2>
          {dataGet.map((value, index) => {
            return (
              <>
                <div className="col-lg-4 col-md-4 col-12 d-flex">
                  <div className="card blog-card shadow cursor-pointer">
                    {/* <a href="#/"> */}
                    <Link
                      to={`/text-editor-print/${value.id}`}
                      className="d-block"
                    >
                      <img
                        src={value.images}
                        className="card-img-top"
                        alt="..."
                      />
                      {/* <h6 className="text-white position-absolute ">
                          
                        </h6> */}
                      {/* </a> */}
                    </Link>
                    <div className="card-body text-start">
                      <h5 className="card-title">
                        {/* <a
                            className="text-dark text-decoration-none"
                            href="#/"
                          > */}
                        {value.title}
                        {/* </a> */}
                      </h5>
                      {/* <div className="card-text mt-4">
                          <div
                            dangerouslySetInnerHTML={{ __html: value.content }}
                          />
                        </div> */}
                      {/* <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p> */}
                      <p className="card-text mt-3">
                        <small className="text-muted">
                          {value.create_time}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <div className="col-12 text-center">
            <nav>
              <ul className="pager">
                <li className="pager__item pager__item--prev">
                  <a className="pager__link" href="#/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="#33313C"
                          d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>

                {/* 創造一個依照pageTotal長度的陣列，來呈現目前的分頁元件項目 */}
                {/* 切換分頁都是在設定pageNow狀態而已 */}

                {Array(8)
                  .fill(1)
                  .map((v, i) => {
                    return (
                      <li
                        className={`pager__item ${
                          i + 1 === pageNow ? 'active' : ''
                        }`}
                        key={i}
                      >
                        <a
                          className="pager__link fs-6"
                          href="#/"
                          onClick={() => {
                            setPageNow(i + 1);
                          }}
                        >
                          {i + 1}
                        </a>
                      </li>
                    );
                  })}

                <li className="pager__item pager__item--next">
                  <a className="pager__link" href="#/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="#33313C"
                          d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* ---------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
}

export default BlogList;
