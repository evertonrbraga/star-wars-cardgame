import React, { Component } from "react";
import ScrollBar from "react-perfect-scrollbar";

import api from "./services/api";
import Card from "./components/Card";
import { GlobalStyles, AppContainer, ContentContainer } from "./styles";
import logo from "./assets/starwars-logo.svg";
import catwars from "./assets/cat-wars.webp";

export default class App extends Component {
  state = {
    apiData: null,
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
    const res = await api.get(`/people/?page=${page}`);
    await this.setState({
      apiData: res.data.results
    });
    this.state.apiData.forEach((character, i) => {
      this.requestInside(character.homeworld, character.starships, i);
    });
  };

  requestInside = async (homeworldReq, starshipsReq, i) => {
    const homeworld = await api.get(homeworldReq);
    const apiData = [...this.state.apiData];
    apiData[i].homeworld = homeworld.data;
    this.setState({
      apiData
    });
    if (starshipsReq) {
      const arr = [];
      starshipsReq.map(async url => {
        const starships = await api.get(url);
        arr.push(starships.data);
      });
      const apiData = [...this.state.apiData];
      apiData[i].starships = arr;
      this.setState({ apiData });
    }
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
            <div className="header">
              <img
                className="logo"
                onClick={() => this.setState({ page: 1 })}
                src={logo}
                alt="Star Wars Logo"
              />
              <img className="gif" src={catwars} alt="Star Wars Logo" />
            </div>
            <div className="main-wrapper">
              {apiData
                ? apiData.map((character, i) => {
                    return (
                      <div key={i}>
                        <Card
                          image={`${page - 1}${i}-character.jpg`}
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
            <button disabled={page === 9} onClick={this.handleClick}>
              Next
            </button>
          </div>
        </footer>
      </AppContainer>
    );
  }
}
