import Image from 'next/image'

export const imagesRight = [
  //row1
  {
    src: 'tech/data-viz/HIGHCHARTS.svg',
    row: 'row-start-1',
    col: 'col-start-2',
    y: '',
    x: '-translate-x-[80%]',
    scale: '',
    categories: ['data viz'],
    info: {
      title: 'Highcharts',
      description:
        'Highcharts is a charting library that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="Highcharts"
          src="tech/data-viz/HIGHCHARTS.svg"
          alt="Highcharts"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/data-viz/TRADINGVIEW.svg',
    row: 'row-start-1',
    col: 'col-start-3',
    y: '',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['data viz'],
    info: {
      title: 'TradingView',
      description:
        'TradingView is a charting library that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="TradingView"
          src="tech/data-viz/TRADINGVIEW.svg"
          alt="TradingView"
          width={20}
          height={20}
        />
      ]
    }
  },
  //row2
  {
    src: 'tech/apps/VUEJS.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-4',
    x: '-translate-x-1',
    scale: '',
    categories: ['apps'],
    info: {
      title: 'Vue.js',
      description: 'Vue.js is a progressive JavaScript framework for building user interfaces.',
      tech: [<Image key="Vue.js" src="tech/apps/VUEJS.svg" alt="Vue.js" width={20} height={20} />]
    }
  },
  {
    src: 'tech/data-viz/ECHARTS.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1.5',
    x: '-translate-x-1.5',
    scale: '',
    categories: ['data viz'],
    info: {
      title: 'ECharts',
      description:
        'ECharts is a charting library that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="ECharts" src="tech/data-viz/ECHARTS.svg" alt="ECharts" width={20} height={20} />
      ]
    }
  },
  {
    src: 'tech/data-viz/D3.svg',
    row: 'row-start-2',
    col: '',
    y: '-translate-y-2',
    x: 'translate-x-1',
    scale: '',
    categories: ['data viz'],
    info: {
      title: 'D3',
      description:
        'D3 is a charting library that allows you to create interactive charts and graphs.',
      tech: [<Image key="D3" src="tech/data-viz/D3.svg" alt="D3" width={20} height={20} />]
    }
  },
  //row3
  {
    src: 'tech/apps/TYPESCRIPT.svg',
    row: 'row-start-3',
    col: 'col-start-2',
    y: 'translate-y-2.5',
    x: '-translate-x-[70%]',
    scale: '',
    categories: ['apps'],
    info: {
      title: 'TypeScript',
      description:
        'TypeScript is a programming language that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="TypeScript"
          src="tech/apps/TYPESCRIPT.svg"
          alt="TypeScript"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/data-viz/CHART.JS.svg',
    row: 'row-start-3',
    col: 'col-start-3',
    y: '',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['data viz'],
    info: {
      title: 'Chart.js',
      description:
        'Chart.js is a charting library that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="Chart.js"
          src="tech/data-viz/CHART.JS.svg"
          alt="Chart.js"
          width={20}
          height={20}
        />
      ]
    }
  },
  //row4
  {
    src: 'tech/apps/TAILWIND.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-4',
    x: 'translate-x-1',
    scale: '',
    categories: ['apps'],
    info: {
      title: 'Tailwind',
      description:
        'Tailwind is a CSS framework that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="Tailwind" src="tech/apps/TAILWIND.svg" alt="Tailwind" width={20} height={20} />
      ]
    }
  },
  {
    src: 'tech/apps/NODEJS.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-1.5',
    x: 'translate-x-1.5',
    scale: '',
    categories: ['apps'],
    info: {
      title: 'Node.js',
      description:
        'Node.js is a JavaScript runtime that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="Node.js" src="tech/apps/NODEJS.svg" alt="Node.js" width={20} height={20} />
      ]
    }
  },
  {
    src: 'tech/apps/EXPRESSJS.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-2',
    x: 'translate-x-1',
    scale: '',
    categories: ['apps'],
    info: {
      title: 'Express.js',
      description:
        'Express.js is a web application framework that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="Express.js"
          src="tech/apps/EXPRESSJS.svg"
          alt="Express.js"
          width={20}
          height={20}
        />
      ]
    }
  },
  //row5
  {
    src: 'tech/apps/EXPO.svg',
    row: 'row-start-5',
    col: 'col-start-2',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['apps'],
    info: {
      title: 'Expo',
      description: 'Expo is a framework that allows you to create interactive charts and graphs.',
      tech: [<Image key="Expo" src="tech/apps/EXPO.svg" alt="Expo" width={20} height={20} />]
    }
  },
  {
    src: 'tech/apps/IOS.svg',
    row: 'row-start-5',
    col: 'col-start-3',
    y: 'translate-y-1',
    x: '-translate-x-[30%]',
    scale: '',
    categories: ['apps'],
    info: {
      title: 'iOS',
      description:
        'iOS is a mobile operating system that allows you to create interactive charts and graphs.',
      tech: [<Image key="iOS" src="tech/apps/IOS.svg" alt="iOS" width={20} height={20} />]
    }
  },
  //row6
  {
    src: 'tech/apps/REACT-NATIVE.svg',
    row: 'row-start-6',
    col: 'col-start-2',
    y: 'translate-y-3',
    x: '-translate-x-[60%]',
    scale: '',
    categories: ['apps'],
    info: {
      title: 'React Native',
      description:
        'React Native is a framework that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="React Native"
          src="tech/apps/REACT-NATIVE.svg"
          alt="React Native"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/apps/ANDROID.svg',
    row: 'row-start-6',
    col: 'col-start-3',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['apps'],
    info: {
      title: 'Android',
      description:
        'Android is a mobile operating system that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="Android" src="tech/apps/ANDROID.svg" alt="Android" width={20} height={20} />
      ]
    }
  }
]

export const imagesLeft = [
  //row1
  {
    src: 'tech/ai/LLAMA3.svg',
    row: 'row-start-1',
    col: 'col-start-2',
    y: 'translate-y-2',
    x: '',
    scale: '',
    categories: ['ai_text'],
    info: {
      title: 'LLama3',
      description:
        'LLama3 is a language model that allows you to create interactive charts and graphs.',
      tech: [<Image key="LLama3" src="tech/ai/LLAMA3.svg" alt="LLama3" width={20} height={20} />]
    }
  },
  //row2
  {
    src: 'tech/ai/HUGGINGFACE.svg',
    row: 'row-start-2',
    col: 'col-start-1',
    y: 'translate-y-2',
    x: 'translate-x-[50%]',
    scale: '',
    categories: ['ai_vision'],
    info: {
      title: 'HuggingFace',
      description:
        'HuggingFace is a language model that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="HuggingFace"
          src="tech/ai/HUGGINGFACE.svg"
          alt="HuggingFace"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/ai/ANTROPHIC.svg',
    row: 'row-start-2',
    col: 'col-start-3',
    y: 'translate-y-1.5',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['ai_text'],
    info: {
      title: 'Anthropic',
      description:
        'Anthropic is a language model that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="Anthropic" src="tech/ai/ANTROPHIC.svg" alt="Anthropic" width={20} height={20} />
      ]
    }
  },
  //row3
  {
    src: 'tech/ai/TENSORFLOW.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-[50%]',
    scale: '',
    categories: ['ai_native'],
    info: {
      title: 'TensorFlow',
      description:
        'TensorFlow is a machine learning library that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="TensorFlow"
          src="tech/ai/TENSORFLOW.svg"
          alt="TensorFlow"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/ai/GPT.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-2.5',
    x: '-translate-x-1',
    scale: '',
    categories: ['ai_text'],
    info: {
      title: 'GPT',
      description:
        'GPT is a language model that allows you to create interactive charts and graphs.',
      tech: [<Image key="GPT" src="tech/ai/GPT.svg" alt="GPT" width={20} height={20} />]
    }
  },
  //row4
  {
    src: 'tech/ai/PYTORCH.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-4',
    x: '-translate-x-[100%]',
    scale: '',
    categories: ['ai_native'],
    info: {
      title: 'PyTorch',
      description:
        'PyTorch is a machine learning library that allows you to create interactive charts and graphs.',
      tech: [<Image key="PyTorch" src="tech/ai/PYTORCH.svg" alt="PyTorch" width={20} height={20} />]
    }
  },
  {
    src: 'tech/ai/STABILITYAI.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-1.5',
    x: '-translate-x-[50%]',
    scale: 'scale-125',
    categories: ['ai_vision'],
    info: {
      title: 'StabilityAI',
      description:
        'StabilityAI is a machine learning library that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="StabilityAI"
          src="tech/ai/STABILITYAI.svg"
          alt="StabilityAI"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/ai/RUNPOD.svg',
    row: 'row-start-4',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-3',
    scale: 'scale-150',
    categories: ['ai_vision'],
    info: {
      title: 'RunPod',
      description:
        'RunPod is a machine learning library that allows you to create interactive charts and graphs.',
      tech: [<Image key="RunPod" src="tech/ai/RUNPOD.svg" alt="RunPod" width={20} height={20} />]
    }
  },
  //row5
  {
    src: 'tech/ai/KERAS.svg',
    row: 'row-start-5',
    col: '',
    y: 'translate-y-5',
    x: '-translate-x-[50%]',
    scale: 'scale-75',
    categories: ['ai_native'],
    info: {
      title: 'Keras',
      description:
        'Keras is a machine learning library that allows you to create interactive charts and graphs.',
      tech: [<Image key="Keras" src="tech/ai/KERAS.svg" alt="Keras" width={20} height={20} />]
    }
  },
  {
    src: 'tech/ai/VOICECLONING.svg',
    row: 'row-start-5',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-[30%]',
    scale: '',
    categories: ['ai_voice'],
    info: {
      title: 'VoiceCloning',
      description:
        'VoiceCloning is a voice model that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="VoiceCloning"
          src="tech/ai/VOICECLONING.svg"
          alt="VoiceCloning"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/ai/COMFYUI.svg',
    row: 'row-start-5',
    col: '',
    y: 'translate-y-3',
    x: 'translate-x-[30%]',
    scale: '',
    categories: ['ai_vision'],
    info: {
      title: 'ComfyUI',
      description:
        'ComfyUI is a UI for machine learning that allows you to create interactive charts and graphs.',
      tech: [<Image key="ComfyUI" src="tech/ai/COMFYUI.svg" alt="ComfyUI" width={20} height={20} />]
    }
  },
  //row6
  {
    src: 'tech/ai/REPLICATE.svg',
    row: 'row-start-6',
    col: '',
    y: 'translate-y-4',
    x: 'translate-x-[50%]',
    scale: 'scale-75',
    categories: ['ai_vision'],
    info: {
      title: 'Replicate',
      description:
        'Replicate is a machine learning library that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="Replicate" src="tech/ai/REPLICATE.svg" alt="Replicate" width={20} height={20} />
      ]
    }
  },
  {
    src: 'tech/ai/ELEVENLABS.svg',
    row: 'row-start-6',
    col: '',
    y: 'translate-y-3',
    x: 'translate-x-[50%]',
    scale: 'scale-125',
    categories: ['ai_voice'],
    info: {
      title: 'ElevenLabs',
      description:
        'ElevenLabs is a voice model that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="ElevenLabs"
          src="tech/ai/ELEVENLABS.svg"
          alt="ElevenLabs"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/ai/LAMBDALABS.svg',
    row: 'row-start-6',
    col: '',
    y: 'translate-y-3',
    x: 'translate-x-[80%]',
    scale: 'scale-125',
    categories: ['ai_vision'],
    info: {
      title: 'LambdaLabs',
      description:
        'LambdaLabs is a machine learning library that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="LambdaLabs"
          src="tech/ai/LAMBDALABS.svg"
          alt="LambdaLabs"
          width={20}
          height={20}
        />
      ]
    }
  },
  //row7
  {
    src: 'tech/ai/SKLEARN.svg',
    row: 'row-start-7',
    col: 'col-start-2',
    y: 'translate-y-3',
    x: '-translate-x-[20%]',
    scale: '',
    categories: ['ai_native'],
    info: {
      title: 'Sklearn',
      description:
        'Sklearn is a machine learning library that allows you to create interactive charts and graphs.',
      tech: [<Image key="Sklearn" src="tech/ai/SKLEARN.svg" alt="Sklearn" width={20} height={20} />]
    }
  },
  {
    src: 'tech/ai/MURFAI.svg',
    row: 'row-start-7',
    col: 'col-start-3',
    y: 'translate-y-4',
    x: '-translate-x-[20%]',
    scale: '',
    categories: ['ai_voice'],
    info: {
      title: 'MurfAI',
      description:
        'MurfAI is a voice model that allows you to create interactive charts and graphs.',
      tech: [<Image key="MurfAI" src="tech/ai/MURFAI.svg" alt="MurfAI" width={20} height={20} />]
    }
  }
]

export const imagesTop = [
  //row1
  {
    src: 'tech/data/SNOWFLAKE.svg',
    row: 'row-start-1',
    y: '',
    x: '',
    scale: '',
    categories: ['data'],
    info: {
      title: 'Snowflake',
      description:
        'Snowflake is a data warehouse that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="Snowflake"
          src="tech/data/SNOWFLAKE.svg"
          alt="Snowflake"
          width={20}
          height={20}
        />
      ]
    }
  },
  //row2
  {
    src: 'tech/data/FIREBASE.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-5',
    scale: '',
    categories: ['data'],
    info: {
      title: 'Firebase',
      description:
        'Firebase is a data warehouse that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="Firebase" src="tech/data/FIREBASE.svg" alt="Firebase" width={20} height={20} />
      ]
    }
  },
  {
    src: 'tech/data/TIMESCALE.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-2',
    x: '-translate-x-5',
    scale: '',
    categories: ['data'],
    info: {
      title: 'Timescale',
      description:
        'Timescale is a data warehouse that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="Timescale"
          src="tech/data/TIMESCALE.svg"
          alt="Timescale"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/data/GRAFANA.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1.5',
    x: '-translate-x-5',
    scale: '',
    categories: ['data'],
    info: {
      title: 'Grafana',
      description:
        'Grafana is a data visualization tool that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="Grafana" src="tech/data/GRAFANA.svg" alt="Grafana" width={20} height={20} />
      ]
    }
  },
  //row3
  {
    src: 'tech/data/POSTGRES.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-4',
    x: '',
    scale: '',
    categories: ['data'],
    info: {
      title: 'Postgres',
      description:
        'Postgres is a database that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="Postgres" src="tech/data/POSTGRES.svg" alt="Postgres" width={20} height={20} />
      ]
    }
  },
  {
    src: 'tech/data/REDIS.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-2',
    x: '',
    scale: '',
    categories: ['data'],
    info: {
      title: 'Redis',
      description: 'Redis is a database that allows you to create interactive charts and graphs.',
      tech: [<Image key="Redis" src="tech/data/REDIS.svg" alt="Redis" width={20} height={20} />]
    }
  },
  {
    src: 'tech/data/RABBITMQ.svg',
    row: 'row-start-3',
    col: '',
    y: 'translate-y-1',
    x: 'translate-x-3',
    scale: '',
    categories: ['data'],
    info: {
      title: 'RabbitMQ',
      description:
        'RabbitMQ is a message broker that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="RabbitMQ" src="tech/data/RABBITMQ.svg" alt="RabbitMQ" width={20} height={20} />
      ]
    }
  }
]

export const imagesBottom = [
  //row1
  {
    src: 'tech/devops/AWS.svg',
    row: 'row-start-1',
    col: '',
    y: 'translate-y-2',
    x: '',
    scale: '',
    categories: ['devops'],
    info: {
      title: 'AWS',
      description:
        'AWS is a cloud platform that allows you to create interactive charts and graphs.',
      tech: [<Image key="AWS" src="tech/devops/AWS.svg" alt="AWS" width={20} height={20} />]
    }
  },
  {
    src: 'tech/devops/KUBERNETES.svg',
    row: 'row-start-1',
    col: '',
    y: '',
    x: '',
    scale: '',
    categories: ['devops'],
    info: {
      title: 'Kubernetes',
      description:
        'Kubernetes is a container orchestration platform that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="Kubernetes"
          src="tech/devops/KUBERNETES.svg"
          alt="Kubernetes"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/devops/DOCKER.svg',
    row: 'row-start-1',
    col: '',
    y: 'translate-y-1',
    x: '',
    scale: '',
    categories: ['devops'],
    info: {
      title: 'Docker',
      description:
        'Docker is a containerization platform that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="Docker" src="tech/devops/DOCKER.svg" alt="Docker" width={20} height={20} />
      ]
    }
  },
  //row2
  {
    src: 'tech/devops/GCP.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-4',
    x: '',
    scale: '',
    categories: ['devops'],
    info: {
      title: 'GCP',
      description:
        'GCP is a cloud platform that allows you to create interactive charts and graphs.',
      tech: [<Image key="GCP" src="tech/devops/GCP.svg" alt="GCP" width={20} height={20} />]
    }
  },
  {
    src: 'tech/devops/TERRAFORM.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-2',
    x: '',
    scale: '',
    categories: ['devops'],
    info: {
      title: 'Terraform',
      description: 'Terraform is a tool that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="Terraform"
          src="tech/devops/TERRAFORM.svg"
          alt="Terraform"
          width={20}
          height={20}
        />
      ]
    }
  },
  {
    src: 'tech/devops/ANSIBLE.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1',
    x: '',
    scale: '',
    categories: ['devops'],
    info: {
      title: 'Ansible',
      description: 'Ansible is a tool that allows you to create interactive charts and graphs.',
      tech: [
        <Image key="Ansible" src="tech/devops/ANSIBLE.svg" alt="Ansible" width={20} height={20} />
      ]
    }
  },
  {
    src: 'tech/devops/PUPPETEER.svg',
    row: 'row-start-2',
    col: '',
    y: 'translate-y-1',
    x: '',
    scale: '',
    categories: ['devops'],
    info: {
      title: 'Puppeteer',
      description: 'Puppeteer is a tool that allows you to create interactive charts and graphs.',
      tech: [
        <Image
          key="Puppeteer"
          src="tech/devops/PUPPETEER.svg"
          alt="Puppeteer"
          width={20}
          height={20}
        />
      ]
    }
  },
  //row3
  {
    src: 'tech/devops/MONIT.svg',
    row: 'row-start-3',
    col: 'col-start-3',
    y: 'translate-y-2',
    x: '-translate-x-4',
    scale: '',
    categories: ['devops'],
    info: {
      title: 'Monit',
      description: 'Monit is a tool that allows you to create interactive charts and graphs.',
      tech: [<Image key="Monit" src="tech/devops/MONIT.svg" alt="Monit" width={20} height={20} />]
    }
  },
  {
    src: 'tech/devops/TOR.svg',
    row: 'row-start-3',
    col: 'col-start-4',
    y: 'translate-y-2',
    x: '-translate-x-5',
    scale: '',
    categories: ['devops'],
    info: {
      title: 'Tor',
      description: 'Tor is a tool that allows you to create interactive charts and graphs.',
      tech: [<Image key="Tor" src="tech/devops/TOR.svg" alt="Tor" width={20} height={20} />]
    }
  }
]
