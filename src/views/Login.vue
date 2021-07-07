<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3 text-center">
          Get Started!
        </h1>
        <h6 class="text-center font-weight-bold text-h6">Login</h6>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-text-field
          label="Email"
          placeholder="Enter Email"
          v-model="email"
          :error-messages="emailErrors"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          @keyup.enter="() => $refs.password.focus()"
        ></v-text-field>
        <v-text-field
          label="Password"
          placeholder="Enter Password"
          ref="password"
          v-model="password"
          type="password"
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
          @keyup.enter="login"
        ></v-text-field>
        <v-btn
          color="success"
          :disabled="$v.$invalid || loading"
          @click="login"
          :loading="loading"
          >Login</v-btn
        >
        <p class="mt-3">
          Does't have an account?
          <router-link to="/register">Register</router-link>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth } from "../db";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    email: {
      required,
      email,
    },
  },
  methods: {
    login() {
      if (this.$v.$invalid || this.loading) return;
      this.loading = true;
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("Email is required");
      !this.$v.email.email && errors.push("Enter a valid email");
      return errors;
    },
  },
};
</script>
