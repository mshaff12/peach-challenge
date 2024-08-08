import { Field, Form, Formik } from "formik";
import { Button, TextField, Container } from '@mui/material';
import { styled } from '@mui/system';

interface MovieSearchProps {
  onSearch: (query: string) => void;
}

const StyledForm = styled(Form)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginLeft: theme.spacing(2),
  }));

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
              <StyledForm>
                <Field
                  name="query"
                  as={TextField}
                  label="Search"
                  variant="outlined"
                />
                <Button type="submit" variant="contained" color="primary">
                  Search
                </Button>
              </StyledForm>
            )}
          </Formik>
        </Container>
      );
};

export default MovieSearch;
