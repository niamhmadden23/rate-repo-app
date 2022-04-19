import React from "react";
import { Button, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import * as yup from "yup";

export const SignInForm = ({ onSubmit }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ margin: 15 }}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          title="Sign in"
          onPress={onSubmit}
          style={{ margin: 10, padding: 10 }}
        />
      </View>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(
      8,
      "Password is too short - should be a minimum of 8 characters long."
    ),
});

const SignIn = () => {
  const onSubmit = async (values) => {
    const { username, password } = values;
  };
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
