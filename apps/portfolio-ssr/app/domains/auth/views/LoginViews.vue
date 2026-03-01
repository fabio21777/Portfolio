<script setup>
import { ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import { object, string } from 'yup';
import AuthAPI from '../api/auth';

// Definir o esquema de validação
const schema = object({
  email: string().required('Email é obrigatório').email('Email inválido'),
  password: string().required('Senha é obrigatória').min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

// Usar useForm para gerenciar o formulário
const { handleSubmit } = useForm({
  validationSchema: schema,
});

// Usar useField para gerenciar os campos
const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');
const checked = ref(false);

// Função para lidar com o envio do formulário
const onSubmit = handleSubmit((values) => {
  const loginData = {
    email: values.email,
    password: values.password,
  };
  AuthAPI.login(loginData);
  
});
</script>

<template>
    <div class="background flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
        <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
            <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
          <div class="text-center mb-8">
            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">
              Bem vindo
            </div>
            <span class="text-surface-600 dark:text-surface-200 font-medium"> 
              Faça login para continuar
            </span>
          </div>

          <form @submit="onSubmit">
            <div>
              <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
              <InputText id="email1" type="text" placeholder="Email address" class="w-full md:w-[30rem] mb-2" style="padding: 1rem" v-model="email" />
              <span class="text-red-500 text-sm block mt-1">{{ emailError }}</span>

              <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Senha</label>
              <Password 
                id="password1" 
                v-model="password" 
                placeholder="Senha" 
                :toggleMask="true" class="w-full mb-2" 
                inputClass="w-full" 
                :inputStyle="{ padding: '1rem' }"
                promptLabel="Digite uma senha" weakLabel="Senha muito fraca, tente algo mais seguro" mediumLabel="Senha ok, mas pode ser melhor" strongLabel="Ótima senha!">
              </Password>
              <span class="text-red-500 text-sm block mt-1">{{ passwordError }}</span>

              <div class="flex items-center justify-between mb-8 gap-8">
                <div class="flex items-center">
                  <Checkbox v-model="checked" inputId="Remember" name="Remember" value="Lembra senha" />
                  <label for="Remember" class="ml-2"> Lembra senha </label>
                </div>
                <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</a>
              </div>
              <Button type="submit" label="Entrar" class="w-full p-4 text-xl"></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-red-500 {
  font-size: 0.875rem; /* Define o tamanho do texto de erro como menor */
}
.background{
  background-image: url('/asserts/background.png');
}
</style>