<template>
  <v-row justify="center">
    <v-col cols="12">
      <!-- <h1 class="display-2 font-weight-bold mb-3 text-center">
          Get Started!
        </h1> -->
      <welcome action="signup"></welcome>
    </v-col>
    <v-col cols="12" md="4" class="text-center">
      <v-form @submit.prevent="register">
        <v-text-field
          outlined
          label="Name"
          placeholder="Enter Name"
          v-model="name"
          :error-messages="nameErrors"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          outlined
          label="Email"
          placeholder="Enter Email"
          v-model="email"
          :error-messages="emailErrors"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          outlined
          label="Password"
          placeholder="Enter Password"
          v-model="password"
          type="password"
          autocomplete="off"
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-btn
          :disabled="$v.$invalid || loading"
          type="submit"
          :loading="loading"
          >Register</v-btn
        >
      </v-form>
      <p class="mt-3">
        Already have an account?
        <router-link to="/login" replace>Login</router-link>
      </p>
    </v-col>
  </v-row>
</template>

<script>
import { auth, rtdb } from "../db";
import { required, minLength, email } from "vuelidate/lib/validators";
import Welcome from "../components/UnAuth/Welcome.vue";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      loading: false,
    };
  },
  components: {
    Welcome,
  },
  validations: {
    name: {
      required,
      minLength: minLength(6),
    },
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
    register() {
      this.$v.$touch();
      if (this.$v.$invalid || this.loading) return;
      this.loading = true;
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.name,
            })
            .then(() => {
              const user = data.user;
              const userData = {
                uid: user.uid,
                displayName: user.displayName,
              };
              rtdb.ref("users/" + user.uid).set(userData);
            });
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Name is required");
      !this.$v.name.minLength &&
        errors.push("Name must be at least 6 characters long");
      return errors;
    },
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
