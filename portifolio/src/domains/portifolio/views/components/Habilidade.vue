<script setup lang="ts">


const vueSkills = [
  'Vue 3',
  'Vue 2',
  'Pinia',
  'Vue Router',
  'Composition API',
  'primevue',
  'element-plus'
];

const angularSkills = [
  'Angular 12+',
  'RxJS',
  'NgRx',
  'Angular Material',
  'PrimeNG'
];

const reactSkills = [
  'React',
  'React Hooks',
  'React Router',
  'Redux',
  'Context API'
];

const javaSkills = [
  "Spring Boot",
  "Spring Data JPA",
  "Spring Security",
  "Spring Cloud",
  "Spring WebFlux",
  "Hibernate",
  "JPA/JDBC",
  "RESTful APIs",
  "Swagger/OpenAPI",
  "JUnit/Mockito",
  "JWT/OAuth2",
  "Maven/Gradle",
  "S3 (Simple Storage Service)",
  "Redis",
  "Docker",
  "Apache Camel",
  "Apache POI"
];

const goSkills = [
  "Go (Golang)",
  "Gin Framework",
  "GORM (ORM)",
  "PostgreSQL",
  "Redis",
  "RESTful APIs",
  "Swagger",
  "JWT",
  "Go Testing",
  "Testify",
  "Docker"
];

const pythonSkills = [
  "Python",
  "Django",
  "Django REST Framework",
  "PostgreSQL",
  "Django ORM",
  "Redis",
  "Django Auth",
  "JWT / OAuth2",
  "Django TestCase",
  "Pytest",
  "Pip",
  "Virtualenv / venv"
];

const awsSkills = [
  "EC2 (Elastic Compute Cloud)",
  "S3 (Simple Storage Service)",
  "RDS (Relational Database Service)",
  "Route 53 (DNS e Registro de Domínio)",
  "CloudFront (CDN)",
  "Elastic Beanstalk (PaaS)",
  "CloudWatch (Monitoramento)"
];

</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Título principal com destaque -->
    <h2 class="text-3xl md:text-4xl font-bold text-primary-600 mb-2 tracking-tight">Habilidades</h2>

    <!-- Subtítulo com estilo complementar -->
    <p class="text-lg text-gray-600 mb-8 max-w-2xl">Tecnologias e frameworks com os quais tenho experiência</p>

    <!-- Container para os ícones das tecnologias -->
    <div class="">
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>
            <div class="flex items-center">
              <i class="pi pi-desktop mr-2"></i>
              <span class="font-semibold">Frontend</span>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Vue -->
              <div
                class="p-4 rounded-lg shadow-md surface-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-green-500">
                <div class="flex items-center mb-3">
                  <i class="pi pi-check-circle text-green-500 text-xl mr-2"></i>
                  <h3 class="text-xl font-medium m-0">Vue.js</h3>
                </div>

                <ul class="mt-3 space-y-2">
                  <li v-for="skill in vueSkills" class="flex items-center">
                    <i class="pi pi-check text-green-500 mr-2"></i>
                    <span>{{ skill }}</span>
                  </li>
                </ul>
              </div>

              <!-- Angular -->
              <div
                class="p-4 rounded-lg shadow-md surface-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-red-500">
                <div class="flex items-center mb-3">
                  <i class="pi pi-check-circle text-red-500 text-xl mr-2"></i>
                  <h3 class="text-xl font-medium m-0">Angular</h3>
                </div>

                <ul class="mt-3 space-y-2">
                  <li v-for="skill in angularSkills" class="flex items-center">
                    <i class="pi pi-check text-red-500 mr-2"></i>
                    <span>{{ skill }}</span>
                  </li>
                </ul>
              </div>

              <!-- React -->
              <div
                class="p-4 rounded-lg shadow-md surface-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-blue-500">
                <div class="flex items-center mb-3">
                  <i class="pi pi-check-circle text-blue-500 text-xl mr-2"></i>
                  <h3 class="text-xl font-medium m-0">React</h3>
                </div>

                <ul class="mt-3 space-y-2">
                  <li v-for="skill in reactSkills" class="flex items-center">
                    <i class="pi pi-check text-blue-500 mr-2"></i>
                    <span>{{skill}}</span>
                  </li>

                </ul>
              </div>

            </div>

          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>
            <div class="flex items-center">
              <i class="pi pi-server mr-2"></i>
              <span class="font-semibold">Backend</span>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!--          Java          -->
              <!-- Java/Spring Boot Card para adicionar à seção Backend do seu Accordion -->
              <div
                class="p-4 rounded-lg shadow-md surface-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-blue-700">
                <div class="flex items-center mb-3">
                  <i class="pi pi-check-circle text-blue-700 text-xl mr-2"></i>
                  <h3 class="text-xl font-medium m-0">Java / Spring Boot</h3>
                </div>

                <ul class="mt-3 space-y-2">
                  <!-- Spring Framework e Componentes -->
                  <li v-for="skills in javaSkills" class="flex items-center">
                    <i class="pi pi-check text-blue-700 mr-2"></i>
                    <span>{{skills}}</span>
                  </li>
                </ul>
              </div>

              <!--   GO/GIN       -->
              <div
                class="p-4 rounded-lg shadow-md surface-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-cyan-500">
                <div class="flex items-center mb-3">
                  <i class="pi pi-check-circle text-cyan-500 text-xl mr-2"></i>
                  <h3 class="text-xl font-medium m-0">Go / Gin</h3>
                </div>

                <ul class="mt-3 space-y-2">
                  <!-- Core e Frameworks -->
                  <li v-for="skill in goSkills" class="flex items-center">
                    <i class="pi pi-check text-cyan-500 mr-2"></i>
                    <span>{{skill}}</span>
                  </li>
                </ul>
              </div>
              <!--        Python/Django-->

              <div
                class="p-4 rounded-lg shadow-md surface-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-green-600">
                <div class="flex items-center mb-3">
                  <i class="pi pi-check-circle text-green-600 text-xl mr-2"></i>
                  <h3 class="text-xl font-medium m-0">Python / Django</h3>
                </div>

                <ul class="mt-3 space-y-2">
                  <!-- Core e Frameworks -->
                  <li v-for="skill in pythonSkills" class="flex items-center">
                    <i class="pi pi-check text-green-600 mr-2"></i>
                    <span>{{skill}}</span>
                  </li>
                </ul>
              </div>

            </div>


          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>
            <div class="flex items-center">
              <i class="pi pi-cog mr-2"></i>
              <span class="font-semibold">DevOps & Ferramentas</span>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                class="p-4 rounded-lg shadow-md surface-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-orange-400">
                <div class="flex items-center mb-3">
                  <i class="pi pi-check-circle text-orange-400 text-xl mr-2"></i>
                  <h3 class="text-xl font-medium m-0">AWS Cloud</h3>
                </div>

                <ul class="mt-3 space-y-2">
                  <!-- Computação -->
                  <li v-for="skill in awsSkills" class="flex items-center">
                    <i class="pi pi-check text-orange-400 mr-2"></i>
                    <span>{{skill}}</span>
                  </li>
                </ul>
              </div>
            </div>

          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>


</template>

<style scoped>

</style>
