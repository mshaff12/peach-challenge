import { Container, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import styles from "../App.module.css";

interface MovieSearchProps {
  onSearch: (query: string) => void;
}

const MovieSearch = ({ onSearch }: MovieSearchProps) => {
  return (
    <Container>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, { resetForm }) => {
          onSearch(values.query);
          resetForm();
        }}
      >
        {() => (
          <Form className={styles["movie-search-form"]}>
            <Field
              name="query"
              as={TextField}
              label="Search"
              variant="outlined"
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MovieSearch;
