import React, { useState, useEffect, useContext, use } from "react";

import api from "../../services/api";
import Card from "../../components/Card";
import { PageContext } from "../../theme-context";
import { GlobalStyles, AppContainer, ContentContainer } from "./styles";

const App = () => {
  const [apiData, setApiData] = useState(null);
  const [page, setPage] = useContext(PageContext);

  const requestApi = async (page) => {
    const res = await api.get(`/characters/?_page=${page}`);
    await setApiData(res.data);
  };

  useEffect(() => {
    requestApi(page);
  }, [page]);

  const handleClick = (e) => {
    const text = e.target.innerHTML;
    return text === "Previous" ? setPage(page - 1) : setPage(page + 1);
  };

  return (
    <AppContainer apiData={apiData}>
      <GlobalStyles />
      <ContentContainer>
        <div className="main-wrapper">
          {apiData
            ? apiData.map((character, i) => {
                return (
                  <div key={`character${i}`}>
                    <Card page={page} character={character} />
                  </div>
                );
              })
            : null}
        </div>
      </ContentContainer>
      <footer>
        <div className="button-container">
          <button disabled={page === 1} onClick={handleClick}>
            Previous
          </button>
          <button disabled={page === 5} onClick={handleClick}>
            Next
          </button>
        </div>
      </footer>
    </AppContainer>
  );
};

export default App;
