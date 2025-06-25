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
        caption: " Infantil/Comédia ",
        description: "Após se casar com a Princesa Fiona (Cameron Diaz), Shrek (Mike Myers) vive feliz em seu pântano. Ao retornar de sua lua-de-mel Fiona recebe uma carta de seus pais, que não sabem que ela agora é um ogro, convidando-a para um jantar juntamente com seu grande amor, na intenção de conhecê-lo.",
        poster:"/posters/filme1.jpg" ,
        banner: "/posters/bannerDestaque.jpg",
        times: ["14:00", "17:00", "20:00"]
    },
    {
        id: 2,
        title: "Forrest Gump - O Contador de Histórias",
        caption: " Comédia/Romance ",
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
  },
  {
    id: 6,
    title: "O Lar das Crianças Peculiares",
    caption: " Aventura, Família, Fantasia",
    description: "O Lar das Crianças Peculiares acompanha a história do jovem Jake (Asa Butterfield) que, depois de uma tragédia familiar: a estranha morte de seu avô Abe (Terence Stamp), resolve conhecer melhor o passado e a vida do pai de seu pai. As pistas e os mistérios deixados por seu avô levam Jake para o País de Gales onde, ao chegar, encontra uma mansão em ruínas, que foi atingida por um míssil durante a Segunda Guerra Mundial. Ao investigar a área, Jake descobre que na casa há uma fenda temporal onde a severa, mas carinhosa, Senhorita Peregrine (Eva Green) vive e protege várias crianças dotadas de poderes especiais. Ele adentra um mundo mágico e secreto no qual Emma (Ella Purnell) pode levitar, Olive (Lauren McCrostie) controla o fogo e Millard (Cameron King) é invisível, dentre um punhado de outros jovens com habilidades extraordinárias. A vida de todos eles, porém, é colocada em risco e só lhes resta se unir para proteger a relação incrível que construíram. A aventura e a fantasia retratadas em O Lar das Crianças Peculiares são adaptadas por Tim Burton do livro homônimo de Ransom Riggs.",
    poster:"/posters/filme9.jpg" ,
    times: ["18:00", "19:45", "20:30", "21:15"],
  },
  {
    id: 7,
    title: "Missão: Impossível - O Acerto Final",
    caption: " Ação, Espionagem, Suspense",
    description: "Ethan Hunt (interpretado por Tom Cruise) e sua equipe da IMF embarcam em uma missão perigosa e de vingança para recuperar uma nova arma que ameaça toda a humanidade e enfrentar o maior vilão de seu passado.",
    poster:"/posters/filme10.jpg" ,
    times:  ["17:45", "18:20", "19:45", "21:00"],
  }

];