import React from "react";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "../../common/Header/index";
import { toPopularMovies, toMoviePage, toPeople } from "./routes";
import PopularMovies from "../../features/movies/MovieList/PopularMovies";
import MoviePage from "../../features/movies/MoviePage";
import PeopleList from "../../features/people/PeopleList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Routes>
          <Route path={toPopularMovies} element={<PopularMovies />} />
          <Route path={toMoviePage} element={<MoviePage />} />
          <Route path={toPeople} element={<PeopleList />} />
          <Route
            path={"*"}
            element={<Navigate replace to="/popularmovies" />}
          />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
