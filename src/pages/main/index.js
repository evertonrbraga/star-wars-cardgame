import React, { Component } from "react";
import ScrollBar from "react-perfect-scrollbar";

import api from "../../services/api";
import Card from "../../components/Card";
import { GlobalStyles, AppContainer, ContentContainer } from "./styles";

export default class App extends Component {
  state = {
    apiData: "",
    page: 1
  };

  componentDidMount() {
    this.requestApi();
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.requestApi();
    }
  }

  requestApi = async () => {
    const { page } = this.state;
    const res = await api.get(`/characters/?_page=${page}`);
    await this.setState({
      apiData: res.data
    });
  };

  handleClick = e => {
    const text = e.target.innerHTML;
    return text === "Previous"
      ? this.setState(prevState => {
          return {
            page: prevState.page - 1
          };
        })
      : this.setState(prevState => {
          return {
            page: prevState.page + 1
          };
        });
  };

  render() {
    const { apiData, page } = this.state;
    return (
      <AppContainer apiData={apiData}>
        <GlobalStyles />
        <ScrollBar>
          <ContentContainer>
            <div className="main-wrapper">
              {apiData
                ? apiData.map((character, i) => {
                    return (
                      <div key={`character${i}`}>
                        <Card
                          image={character.image}
                          page={page}
                          character={character}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          </ContentContainer>
        </ScrollBar>
        <footer>
          <div className="button-container">
            <button disabled={page === 1} onClick={this.handleClick}>
              Previous
            </button>
            <button disabled={page === 5} onClick={this.handleClick}>
              Next
            </button>
          </div>
        </footer>
      </AppContainer>
    );
  }
}
