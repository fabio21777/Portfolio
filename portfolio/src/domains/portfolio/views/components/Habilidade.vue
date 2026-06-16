<script setup lang="ts">
import SkillCard from '@/domains/portfolio/views/components/SkillCard.vue'

interface SkillGroup {
  title: string
  skills: string[]
  accent: string
}

const iaSkills: SkillGroup[] = [
  {
    title: 'Frameworks & Orquestração',
    accent: 'purple-500',
    skills: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'Dify']
  },
  {
    title: 'Vector & Retrieval',
    accent: 'purple-500',
    skills: [
      'Weaviate',
      'pgvector',
      'Pinecone',
      'Qdrant',
      'MCP (Model Context Protocol)',
      'Function calling / Tool use',
      'RAG (Retrieval Augmented Generation)'
    ]
  },
  {
    title: 'Modelos & Harnesses',
    accent: 'purple-500',
    skills: [
      'GLM',
      'Claude (Anthropic)',
      'Kimi (Moonshot)',
      'OpenAI (GPT)',
      'OpenCode',
      'Claude Code',
      'Ollama',
      'LiteLLM'
    ]
  },
  {
    title: 'Agentica & Multimodal',
    accent: 'purple-500',
    skills: [
      'Context injection',
      'Skill injection (sob demanda)',
      'Context window management',
      'Subagentes',
      'Handoffs',
      'Agentes adversariais',
      'Agent loops',
      'Prompt engineering / ReAct / CoT',
      'Guardrails / Evaluations',
      'Streaming de tokens',
      'Vision (multimodal)',
      'Spring Boot + AI'
    ]
  }
]

const frontendSkills: SkillGroup[] = [
  {
    title: 'Vue.js',
    accent: 'green-500',
    skills: ['Vue 3', 'Vue 2', 'Pinia', 'Vue Router', 'Composition API', 'primevue', 'element-plus']
  },
  {
    title: 'Angular',
    accent: 'red-500',
    skills: ['Angular 12+', 'RxJS', 'NgRx', 'Angular Material', 'PrimeNG']
  },
  {
    title: 'React',
    accent: 'blue-500',
    skills: ['React', 'React Hooks', 'React Router', 'Redux', 'Context API']
  }
]

const backendSkills: SkillGroup[] = [
  {
    title: 'Java / Spring Boot',
    accent: 'blue-700',
    skills: [
      'Spring Boot',
      'Spring Data JPA',
      'Spring Security',
      'Spring Cloud',
      'Spring WebFlux',
      'Hibernate',
      'JPA/JDBC',
      'RESTful APIs',
      'Swagger/OpenAPI',
      'JUnit/Mockito',
      'JWT/OAuth2',
      'Maven/Gradle',
      'S3 (Simple Storage Service)',
      'Redis',
      'Docker',
      'Apache Camel',
      'Apache POI'
    ]
  },
  {
    title: 'Go / Gin',
    accent: 'cyan-500',
    skills: [
      'Go (Golang)',
      'Gin Framework',
      'GORM (ORM)',
      'PostgreSQL',
      'Redis',
      'RESTful APIs',
      'Swagger',
      'JWT',
      'Go Testing',
      'Testify',
      'Docker'
    ]
  },
  {
    title: 'Python / Django',
    accent: 'green-600',
    skills: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Django ORM',
      'Redis',
      'Django Auth',
      'JWT / OAuth2',
      'Django TestCase',
      'Pytest',
      'Pip',
      'Virtualenv / venv'
    ]
  }
]

const devopsSkills: SkillGroup[] = [
  {
    title: 'AWS Cloud',
    accent: 'orange-400',
    skills: [
      'EC2 (Elastic Compute Cloud)',
      'S3 (Simple Storage Service)',
      'RDS (Relational Database Service)',
      'Route 53 (DNS e Registro de Domínio)',
      'CloudFront (CDN)',
      'Elastic Beanstalk (PaaS)',
      'CloudWatch (Monitoramento)'
    ]
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Título principal com destaque -->
    <h2 class="text-3xl md:text-4xl font-bold text-primary-600 text-center mb-2 tracking-tight">Habilidades</h2>

    <!-- Subtítulo com estilo complementar -->
    <p class="text-lg mb-8 text-center text-primary-600">Tecnologias e frameworks com os quais tenho experiência</p>

    <!-- Container para os ícones das tecnologias -->
    <div class="">
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>
            <div class="flex items-center">
              <i class="pi pi-sparkles mr-2"></i>
              <span class="font-semibold">IA & Agentes</span>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillCard
                v-for="group in iaSkills"
                :key="group.title"
                :title="group.title"
                :skills="group.skills"
                :accent="group.accent" />
            </div>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>
            <div class="flex items-center">
              <i class="pi pi-desktop mr-2"></i>
              <span class="font-semibold">Frontend</span>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkillCard
                v-for="group in frontendSkills"
                :key="group.title"
                :title="group.title"
                :skills="group.skills"
                :accent="group.accent" />
            </div>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>
            <div class="flex items-center">
              <i class="pi pi-server mr-2"></i>
              <span class="font-semibold">Backend</span>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkillCard
                v-for="group in backendSkills"
                :key="group.title"
                :title="group.title"
                :skills="group.skills"
                :accent="group.accent" />
            </div>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="3">
          <AccordionHeader>
            <div class="flex items-center">
              <i class="pi pi-cog mr-2"></i>
              <span class="font-semibold">DevOps & Ferramentas</span>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkillCard
                v-for="group in devopsSkills"
                :key="group.title"
                :title="group.title"
                :skills="group.skills"
                :accent="group.accent" />
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
</template>

<style scoped>

</style>
