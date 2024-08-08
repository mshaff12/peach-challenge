import { Field, Form, Formik } from "formik";
import { Button, TextField, Container } from '@mui/material';
import styles from '../App.module.css';

interface MovieSearchProps {
  onSearch: (query: string) => void;
}

const MovieSearch = ({ onSearch }: MovieSearchProps) => {
  return (
    <Container>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { resetForm }) => {
          onSearch(values.query);
          resetForm();
        }}
      >
        {() => (
          <Form className={styles['movie-search-form']}>
            <Field
              name="query"
              as={TextField}
              label="Search"
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MovieSearch;
