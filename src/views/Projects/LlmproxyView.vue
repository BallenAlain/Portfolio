<script setup lang="ts">
import ProjectLearnMore from '@/components/Projects/ProjectLearnMore.vue';

const data = [
  {
    "header":"Project Overview",
    "body" : 'LLM Proxy is the result of what first started out as a capstone project turned into a startup we named <span style="color: var(--alainblue);">rout3</span>. LLM Proxy is our startup\'s main tool that simplifies the use of multiple LLMs acting as a proxy between LLM providers and a developer\'s application. The tool includes 2 different types of prompt routing:<ul><li><span style="color: var(--alainblue);">Elo Routing</span> - optimizing responses </li><li><span style="color: var(--alainblue);">Cost Routing</span> - selecting the most cost-effective model</li></ul>The main goal of LLM Proxy is to provide a low-code solution for developer\'s to integrate LLMs in their application. LLM Proxy is uploaded to PyPi and is open-source.'
  },
  {
    "header":"How We Built It",
    "body" : '<p>We value <em style="color:var(--alainblue)">simplicity</em>. To achieve this we\'ve implemented the following design choices:</p><ol><li><h3 style="color:var(--alainblue);">Abstraction:</h3><ul><li><span style="color:var(--alainblue)">Routing Logic</span>: As mentioned earlier we\'ve implemented two routing types that accepts prompts and routes them to one or more LLM providers.&nbsp;</li><li><span style="color:var(--alainblue)">Unified Interface</span>: We\'ve exposed a common API to remove the differences between different LLMs using the main <code>LLM Proxy </code>class</li></ul></li><li><h3 style="color:var(--alainblue">Configuration-driven behaviour:</h3><ul><li><span style="color:var(--alainblue)">YAML Configuration</span>: Configuration settings are read from a YAML while which define parameters for choosing models and adding support for newer models, providing API keys, setting routing type, and provider-specific settings.</li></ul></li><li><h3 style="color:var(--alainblue">Modular Design:</h3><ul><li><span style="color:var(--alainblue)">Support for Additional Providers</span>: Our modular design makes it easier for us to provide support for new providers by attaching new modules</li><li><span style="color:var(--alainblue)">Provide Addtional Routing Types</span>: Similar to adding additional providers, we\'ve made it easier to implement new routing strategies</li></ul></li></ol>'
  },
  {
    "header":"Challenges Faced",
    "body" : 'The biggest hurdle we faced during development was to find a solution to allow communication between each LLM provider and the LLM Proxy despite differences in the interface. We decided to use the <span style="color: var(--alainblue)">Adapter</span> design pattern where each model class acts as an adapter to communicate with the LLM Proxy client. Each adapter class will manage API requests, responses, error handling, and cost estimation. Adapter classes will have common attributes that include: <li><code>prompt: str</code></li><li><code>model: str</code></li><li><code>temperature: float</code></li><li><code>api_key: str</code></li><li><code>max_output_tokens: int</code></li><li><code>timeout: int</code></li>'
  },
  {
    "header":"Lessons Learned",
    "body" : '<li>The inner workings of LLM models</li><li>Tokenization of prompts to help determine usage cost for each model</li><li>Prompts need to be tailored to each LLM</li><li>LLM endpoints are not always reliable, having a fallback is necessary</li>'
  },
  {
    "header":"What's Next?",
    "body" : 'Expanding support for additional providers and newly released models, enhancing models by providing context, implementing a security layer for prompt filtering, enabling compatibility with multimodal models, and developing a general-purpose routing system.'
  },
  {
    "header":"Link",
    "body" : 'See the <a href="https://github.com/llm-proxy/llm-proxy" style="text-decoration: none;">GitHub repository</a><br>Check out the package on <a href="https://pypi.org/project/proxyllm/" style="text-decoration: none;">PyPi</a>'
  },
]
</script>

<template>
  <div class="container">
    <ProjectLearnMore :data="data" />
  </div>
</template>
