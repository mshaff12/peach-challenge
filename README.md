# PEACHFLIX Movie Library Application

## Overview

PEACHFLIX is a simple movie library application developed as a take-home exercise. The application allows users to search for movies, view detailed information about selected movies, and manage a personal list of favorite movies. This project uses React, TypeScript, and Material-UI for the frontend, and fetches movie data from the OMDB API.

## Features

- **Search Movies**: Users can search for movies by their title.
- **View Movie Details**: Users can click on a movie to view more detailed information, including the title, description, release date, rating, and poster.
- **Favorites List**: Users can add or remove movies from their personal favorites list, stored in local storage.

## Technical Choices

- **React**: Chosen for its component-based architecture and state management capabilities.
- **TypeScript**: Used for type safety and better code maintainability.
- **Material-UI**: Utilized for consistent and responsive UI components.
- **Formik**: Used for managing the movie search form.
- **OMDB API**: Used as the source of movie data.

## Code Structure

- `App.tsx`: The main component that handles the view switching between movies and favorites, and manages the state.
- `MovieSearch.tsx`: A component for the search bar, implemented with Formik.
- `MovieList.tsx`: A component that displays a list of movies based on the search query.
- `MovieItem.tsx`: A component that displays individual movie items in the list.
- `MovieDetails.tsx`: A component that shows detailed information about a selected movie.
- `MovieFavorites.tsx`: A component that displays the list of favorite movies.
- `api.ts`: Contains functions for fetching data from the OMDB API.
- `types.ts`: Defines TypeScript interfaces for movie data.

## Areas for Improvement

Given more time, the following improvements could be made:

- **Yup Validation**: Add Yup validation to the Formik form in `MovieSearch` to ensure proper input handling and validation.
- **Styling Enhancements**: Refine the styling to closely match the provided Figma designs, for a more polished and visually appealing UI.
- **Error Handling**: Improve error handling to provide better feedback to users in case of API errors or network issues.
- **Testing**: Add unit tests and integration tests to ensure the reliability and correctness of the application.
