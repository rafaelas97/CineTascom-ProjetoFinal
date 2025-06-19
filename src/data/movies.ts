export interface Movie{
    id: number;
    title: string;
    description:string;
    caption: string;
    poster: string;
    banner?: string;
    times: string[];
}

export const movies: Movie[] = [
    {
        id:1,
        title: "Shrek 2",
        caption: "Shrek e Fiona são intimados a receberem a benção dos pais dela no reino Tão Tão Distante.",
        description: "Após se casar com a Princesa Fiona (Cameron Diaz), Shrek (Mike Myers) vive feliz em seu pântano. Ao retornar de sua lua-de-mel Fiona recebe uma carta de seus pais, que não sabem que ela agora é um ogro, convidando-a para um jantar juntamente com seu grande amor, na intenção de conhecê-lo.",
        poster:"/posters/filme1.jpg" ,
        banner: "/posters/bannerDestaque.jpg",
        times: ["14:00", "17:00", "20:00"]
    },
    {
        id: 2,
        title: "Forrest Gump - O Contador de Histórias",
        caption: "A vida é como uma caixa de chocolates...",
        description:"Mesmo sendo ingênuo, Forrest Gump nunca se sentiu desfavorecido. Graças ao apoio da mãe, ele teve uma vida normal. Seja no campo de futebol como um astro do esporte, lutando no Vietnã ou como capitão de um barco de pesca de camarão, Forrest inspira a todos com seu otimismo. Mas a pessoa que Forrest mais ama pode ser a mais difícil de salvar: seu amor de infância, a doce Jenny.",
        poster: "/posters/filme2.webp",
        times: ["15:00", "18:00", "21:00"]
  },
  {
    id: 3,
    title: "Lilo & Stitch",
    caption: " Live Action - Aventura, Comédia, Família, Ficção Científica",
    description: "Live-action do famoso clássico de animação da Disney, Lilo & Stitch conta a história da amizade entre uma jovem menina humana e um alienígena fugitivo que parece um cachorro. Stitch (Chris Sanders), o experimento 626, é um extraterrestre expressivo que é adotado como animal de estimação por Lilo (Maia Kealoha), uma imaginativa e rebelde garota havaiana, e juntos eles descobrem o significado de família. O jeito extrovertido de Lilo mais do que corresponde à energia caótica do pequeno monstro peludo e impulsivo que está sendo caçado pelos agentes da Federação Galáctica Unida. A amizade incomum entre os dois provoca uma série de confusões e problemas até com a assistente social que cuida de Lilo, observando seu bem-estar ao lado da irmã Nani, sua tutora legal desde a morte dos pais.",
    poster:"/posters/filme3.jpg" ,
    times:  ["14:30", "15:45", "17:00", "18:00", "21:00"],
  },
  {
    id: 4,
    title: "Premonição 6: Laços de Sangue",
    caption: " Terror, Suspense",
    description: "Atormentada por um pesadelo violento e recorrente, uma estudante universitária volta para casa em busca da única pessoa que pode ser capaz de quebrar o ciclo de morte e salvar sua família do terrível destino que inevitavelmente os aguarda.",
    poster:"/posters/filme4.jpg" ,
    times:  ["17:45", "18:20", "19:45", "21:00"],
  },
   {
    id: 5,
    title: "Como Treinar o seu Dragão",
    caption: "Live Action - Ação, Aventura, Fantasia",
    description: "Na ilha de Berk, um garoto viking chamado Soluço desafia a tradição ao fazer amizade com o dragão Banguela. No entanto, quando uma ameaça surge, a amizade de Soluço com Banguela se torna a chave para forjar um novo futuro.",
    poster:"/posters/filme5.webp" ,
    times: ["15:00", "18:00", "21:00"],
  }

];