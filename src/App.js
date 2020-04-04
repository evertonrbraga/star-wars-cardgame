import React, { Component } from "react";
import api from "./services/api";
import Card from "./components/Card";
import { AppContainer, GlobalStyles } from "./styles";
import luke from "./assets/00-luke.jpg";

export default class App extends Component {
  state = {
    apiData: null,
    homeworldBtn: "clicked",
    starshipsBtn: "",
  };

  async componentDidMount() {
    const res = await api.get("/people");
    await this.setState({
      apiData: res.data.results,
    });
    this.state.apiData.map((character, i) => {
      this.requestInside(character.homeworld, character.starships, i);
    });
  }

  requestInside = async (homeworldReq, starshipsReq, i) => {
    const homeworld = await api.get(homeworldReq);
    const apiData = [...this.state.apiData];
    apiData[i].homeworld = homeworld.data;
    this.setState({
      apiData,
    });
    if (starshipsReq) {
      const arr = [];
      starshipsReq.map(async (url) => {
        const starships = await api.get(url);
        arr.push(starships.data);
      });
      const apiData = [...this.state.apiData];
      apiData[i].starships = arr;
      this.setState({ apiData });
    }
  };

  handleClick = (name) => {
    name === "homeworld"
      ? this.setState({ homeworldBtn: "clicked", starshipsBtn: "" })
      : this.setState({ homeworldBtn: "", starshipsBtn: "clicked" });
  };

  render() {
    const { apiData, homeworldBtn, starshipsBtn } = this.state;
    return (
      <AppContainer>
        {apiData
          ? apiData.map((character) => {
              return (
                <>
                  <GlobalStyles />
                  <Card
                    image={luke}
                    name={character.name}
                    gender={character.gender}
                    height={character.height}
                    mass={character.mass}
                    click={this.handleClick}
                    homeworldBtn={homeworldBtn}
                    starshipBtn={starshipsBtn}
                    // homeworldName={homeworld.name}
                    // homeworldClimate={homeworld.climate}
                    // homeworldPopulation={homeworld.population}
                  />
                </>
              );
            })
          : null}
      </AppContainer>
    );
  }
}
