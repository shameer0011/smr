import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  add_Forms,
  delete_Forms,
  get_form,
  update_Forms,
} from "../Redux/Action/FormAction";

export const FormsValid = () => {
  const [form, setForm] = useState({});
  const [updateId, setupdateId] = useState(null);

  const SelectForm = useSelector((state) => state.form_store.forms);
  const EditForm = useSelector((state) => state.form_store.updated_form);

  useEffect(() => {
    setForm(EditForm);
  }, [EditForm]);

  const dispatch = useDispatch();

  const { handleSubmit, register, reset, errors } = useForm();

  const DeleteHandler = (id) => {
    dispatch(delete_Forms(id));
  };

  const EditHandler = (id) => {
    setupdateId(id);
    dispatch(get_form(id));
  };

  const onSubmit = (values) => {
    if (updateId !== null) {
      dispatch(update_Forms(updateId, values));
      setupdateId(null);
    } else {
      dispatch(add_Forms(form)); //in change handler values..or values
      setForm({});
    }
    reset();
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <Container style={{ marginTop: 25, marginBottom: 25 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs sm={2} />
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                inputRef={register({ required: true })}
                error={errors.name ? true : false}
                size="medium"
                name="name"
                label="Name"
                variant="outlined"
                value={form.name}
                onChange={changeHandler}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                inputRef={register({ required: true })}
                error={errors.place ? true : false}
                size="medium"
                name="place"
                label="place"
                variant="outlined"
                value={form.place}
                onChange={changeHandler}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs sm={2} />
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                inputRef={register({ required: true })}
                error={errors.state ? true : false}
                size="medium"
                name="state"
                label="State"
                value={form.state}
                onChange={changeHandler}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                inputRef={register({ required: true })}
                error={errors.city ? true : false}
                size="medium"
                name="city"
                label="City"
                variant="outlined"
                value={form.city}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs sm={2} />

            {updateId !== null ? (
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Update
              </Button>
            ) : (
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Save
              </Button>
            )}
          </Grid>
        </form>
      </Container>

      <h2>
        {SelectForm.map((item, index) => (
          <div key={index}>
            <p>
              {item.name}
              {item.place}
              {item.city}
              {item.state}
            </p>
            <button onClick={() => DeleteHandler(index)}>Delete</button>
            <button onClick={() => EditHandler(index)}>Edit</button>
          </div>
        ))}
      </h2>
    </div>
  );
};
