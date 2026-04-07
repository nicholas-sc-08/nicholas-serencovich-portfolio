import { image } from "framer-motion/client";

export const pt = {
    sectionOne: {
        title: "Olá, sou o Nicholas S. Carvalho",
        subtitle: "Transformando ideias em aplicações robustas e escaláveis. Especialista em ecossistemas modernos com Next.js e arquiteturas eficientes em Java Spring Boot.",
        cta: "Ver projetos"
    },
    sectionTwo: {
        title: "Um pouco sobre minha jornada",
        paragraphOne: "Minha história com a tecnologia não começou em um laboratório de ponta, mas em Worcester (MA, EUA), e se consolidou nas salas de aula de escola pública em Florianópolis. Aos 14 anos, tive meu primeiro estalo intelectual ao observar a lógica por trás do 'Dino Game' do Chrome. Enquanto muitos viam apenas um passatempo, eu vi um sistema de eventos e estados. Ali nasceu meu propósito: eu não queria apenas consumir tecnologia, eu queria construí-la.",
        paragraphTwo: "Em 2023, o projeto Floripa Mais Tech abriu as portas para o meu primeiro contato real com programação. Conquistei uma bolsa integral no SENAI, na turma 'Codificando o Futuro', onde mergulhei no ecossistema Full Stack. Essa dedicação me rendeu o reconhecimento como Estudante Referência e os prêmios de Melhor Situação de Aprendizagem e Melhor Projeto de 2025/1 com o FLY, um e-commerce focado em sustentabilidade.",
        paragraphThree: "Entendendo que a boa engenharia separa amadores de profissionais, expandi meu stack de forma autodidata para o ecossistema Java e Spring Boot. Foquei em padrões de alta confiabilidade, aplicando Clean Architecture, SOLID e princípios ACID, além de garantir a integridade de sistemas com testes em JUnit 5 e Mockito.",
        paragraphFour: "Hoje, transito entre a robustez do backend e a fluidez do frontend moderno com Next.js e TypeScript. Para mim, a Ciência da Computação é a arte de resolver problemas através de abstrações elegantes. Vindo da escola pública e conquistando meu espaço através do código, aprendi que a sorte não é um fator de engenharia."
    },
    sectionThree: {
        title: "Projetos",
        projects: [{
            title: "Fly - Circular",
            image: "https://github.com/nicholas-sc-08/Projeto-SA-3a-Modulo-SENAI/raw/main/Imagens%20do%20README/Banner%20Fly.png",
            description: "O Fly é um aplicativo inovador que nasceu com o propósito de dar mais visibilidade aos brechós e facilitar a vida dos consumidores apaixonados pela moda sustentável. A plataforma permite que os usuários encontre brechós e através deles descubram peças únicas, tornando possível fazer compras de forma prática e eficiente. A ideia do Fly surgiu da experiência pessoal de um dos membros do nosso grupo de desenvolvedores. Sua mãe é dona de um brechó e, diariamente, enfrenta o desafio de alcançar novos clientes e tornar seu negócio mais conhecido. Essa realidade nos motivou a criar uma solução tecnológica que beneficie tanto pequenos empreendedores quanto consumidores que buscam alternativas mais acessíveis e ecológicas no mundo da moda. Com isso, estamos desenvolvendo o Fly, um aplicativo pensado para conectar brechós a um público maior, incentivando o consumo consciente e valorizando peças cheias de história. Acreditamos que, com essa iniciativa, poderemos transformar a forma como as pessoas descobrem e interagem com o universo dos brechós.",
            technologies: [
                {
                    image: "/icons/next.svg",
                    alt: "next"
                },
                {
                    image: "/icons/nodejs.svg"
                },
                {
                    image: "/icons/express.svg",
                    alt: "ex"
                },
                {
                    image: "/icons/mongodb.svg",
                    alt: "mongodb"
                },
                {
                    image: "/icons/docker.svg",
                    alt: "docker"
                },
                {
                    image: "/icons/axios.svg",
                    alt: "axios"
                },
                {
                    image: "/icons/javascript.svg",
                    alt: "javascript"
                },
                {
                    image: "/icons/typescript.svg",
                    alt: "typescript"
                },
                {
                    image: "/icons/jwt.svg"
                },
                {
                    image: "/icons/stripe.svg"
                }
            ]
        },
        {
            title: "Island",
            description: "Quem, então, pode mostrar a verdadeira Ilha da Magia? Um guia turístico? Nós temos uma ideia muito melhor: Nosso querido Tainho! Um aventureiro entusiasmado que adora planejar jornadas semanais para turistas com o intuito de mostrar o melhor da ilha da magia: praias, trilhas, restaurantes locais… A verdadeira cultura manezinha! Com essa atitude do Tainho, criamos um ciclo de sucesso: conectamos os turistas a uma experiência inesquecível explorando trilhas autênticas e praias escondidas enquanto impulsionamos a economia local, levando movimento direto aos bares e restaurantes que merecem ser descobertos. Chega de superlotação! O Tainho é um estrategista que planeja as suas jornadas, diluindo o fluxo de pessoas de forma inteligente. Isso não só garante a tranquilidade da sua experiência, como contribui ativamente para a organização e a limpeza de toda a Ilha. Mas atenção: O Tainho é super emotivo! Se você ignorar as jornadas que ele planejou, ele vai ficar chateado e você pode acabar de volta na praia lotada que ele tentou evitar. Portanto, agrade o Tainho e prepare-se para a aventura!",
            image: "https://github.com/nicholas-sc-08/island-web/raw/main/public/IslandBanner.png",
            technologies: [
                {
                    image: "/icons/next.svg",
                    alt: "next"
                },
                {
                    image: "/icons/nodejs.svg",
                    alt: "nodejs"
                },
                {
                    image: "/icons/express.svg",
                    alt: "ex"
                },
                {
                    image: "/icons/postgresql.svg",
                    alt: "postgresql"
                },
                {
                    image: "/icons/prisma.svg",
                    alt: "prisma"
                },
                {
                    image: "/icons/docker.svg",
                    alt: "docker"
                },
                {
                    image: "/icons/shadcn.svg",
                    alt: "shadcn"
                },
                {
                    image: "/icons/tailwindcss.svg",
                    alt: "tailwind"
                },
                {
                    image: "/icons/jwt.svg",
                    alt: "jwt"
                }
            ]
        },
        {
            title: "VortexPay",
            description: "O 𝗩𝗼𝗿𝘁𝗲𝘅𝗣𝗮𝘆 é uma API de ecossistema bancário de alto desempenho, projetada para processar as operações core de uma fintech moderna. Inspirado na robustez de instituições como o 𝗕𝗮𝗻𝗰𝗼 𝗜𝗻𝘁𝗲𝗿, o projeto atua como o motor transacional central, orquestrando fluxos que vão desde a segurança de acesso até a liquidação atômica de ativos.",
            image: "https://github.com/nicholas-sc-08/vortexpay-api/raw/main/vortexpay_banner.png",
            technologies: [
                {
                    image: "/icons/next.svg",
                    alt: "next"
                },
                {
                    image: "icons/redux.svg",
                    alt: "redux"
                },
                {
                    image: "/icons/shadcn.svg",
                    alt: "shadcn"
                },
                {
                    image: "/icons/tailwindcss.svg",
                    alt: "tailwind"
                },
                {
                    image: "/icons/java.svg",
                    alt: "java"
                },
                {
                    image: "/icons/spring.svg",
                    alt: "spring"
                },
                {
                    image: "/icons/maven.svg",
                    alt: "maven"
                },
                {
                    image: "/icons/junit.svg",
                    alt: "junit"
                },
                {
                    image: "/icons/docker.svg",
                    alt: "docker"
                },
                {
                    image: "/icons/kubernetes.svg",
                    alt: "kubernetes"
                },
                {
                    image: "/icons/jwt.svg",
                    alt: "jwt"
                }
            ]
        },
        {
            title: "Empreendimentos Catarinenses",
            description: "Esta aplicação é um protótipo de sistema CRUD (Create, Read, Update, Delete) desenvolvido para apoiar a organização e manutenção de dados sobre o ecossistema empreendedor de Santa Catarina. A solução permite gerenciar informações cruciais sobre empresas e seus responsáveis, categorizando-as por segmentos de atuação e municípios do estado. O projeto foi construído com foco em alta disponibilidade, escalabilidade e manutenibilidade, utilizando uma arquitetura robusta baseada em camadas e seguindo as melhores práticas de desenvolvimento de software moderno.",
            image: "/sctec.png",
            technologies: [
                {
                    image: "/icons/java.svg"
                }
            ]
        },
        {
            title: "Alextur Floripa",
            description: "A Alextur Floripa redefine o conceito de transporte executivo, posicionando-se como o parceiro estratégico ideal para a sua empresa. Mais do que conectar pontos, nossa missão é oferecer uma extensão da excelência do seu negócio em cada trajeto. Especializados em transfers e traslados premium, aliamos uma frota moderna a uma equipe de profissionais rigorosamente selecionados. O resultado? Uma experiência de deslocamento pautada pela pontualidade britânica, segurança absoluta e o conforto necessário para que o seu único foco seja o sucesso. Com a Alextur, o transporte deixa de ser uma preocupação logística e se torna um diferencial competitivo para a sua marca.",
            image: "/alextur.jpg",
            technologies: [
                {
                    image: "/icons/vitejs.svg",
                    alt: "vite"
                },
                {
                    image: "/icons/react.svg",
                    alt: "react"
                },
                {
                    image: "/icons/javascript.svg",
                    alt: "javascript"
                },
                {
                    image: "/icons/css3.svg",
                    alt: "css"
                },

            ]
        }
        ]
    },
    codeCard: {
        name: "nome",
        local: "local",
        age: "idade",
        project: "Projeto",
        projects: "Projetos"
    },
    header: {
        name: "Nicholas",
        navLinks: ["Sobre mim", "Projetos"],
        language: "Português",
    }
}