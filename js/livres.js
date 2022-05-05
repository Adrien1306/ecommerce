//Objet livre servant de BDD
const livres = [
    {
        id: 0,
        category: "jeunesse",
        name: "Gaston grognon",
        image: "https://images-na.ssl-images-amazon.com/images/I/515f1rYDovL._SX494_BO1,204,203,200_.jpg",
        description: "Gaston le chimpanzé s'est levé de très mauvaise humeur, sans raison particulière. Le soleil est trop radieux, les bananes trop douces, le ciel trop bleu. Et tout le monde semble d'accord sur un point : c'est tellement dommage de faire la tête par une si belle journée ! Marabout, Lémurien, Serpent, chacun y va de son petit conseil pour encourager leur ami à se détendre, à sourire et à s'amuser... ce qui a le don d'énerver encore plus Gaston. Et si la solution, c'était de le laisser être grognon ?",
        price: 13.90,
        quantity: 3
    },
    {
        id: 1,
        category: "bd",
        name: "Astérix et le Griffon",
        image: "https://m.media-amazon.com/images/I/81eysnEGo7L._AC_UY218_.jpg",
        description: "Mi-aigle, mi-lion, énigmatique à souhait, le Griffon sera l’objet de ce grand voyage !",
        price: 5.90,
        quantity: 4
    },
    {
        id: 2,
        category: "roman",
        name: "Ravage",
        image: "https://images-na.ssl-images-amazon.com/images/I/41UjcJet3VL._SX302_BO1,204,203,200_.jpg",
        description: "Vous ne savez pas ce qui est arrivé ? Tous les moteurs d'avions se sont arrêtés hier à la même heure, juste au moment où le courant flanchait partout. Tous ceux qui s'étaient mis en descente pour atterrir sur la terrasse sont tombés comme une grêle.",
        price: 8.70,
        quantity: 10
    },
    {
        id: 3,
        category: "jeunesse",
        name: "Qu'y a-t-il dans ta couche ?",
        image: "https://images-na.ssl-images-amazon.com/images/I/51zUWexyqHL._SX486_BO1,204,203,200_.jpg",
        description: "Bébé Souris est un bébé, et comme tous les bébés, elle porte une couche ! Très curieuse lorsqu'elle rencontre ses amis, bébé Lapin, bébé Chèvre, bébé Chien, bébé Vache, bébé Cheval, qui comme elle, portent une couche, elle ne peut s'empêcher de demander à chacun :  Dis-moi, qu'y a-t-il dans ta couche ??? Ainsi, tour à tour, chacun se plie à sa demande et dévoile ses oeuvres !! Enfin, quand les animaux demandent à voir ce qu'il y a dans sa couche, Bébé Souris est ravie de leur montrer qu'il n'y a rien... car elle est propre et va sur le pot pour faire ses besoins. La scène finale montre tous les animaux, assis chacun sur un pot.",
        price: 12.90,
        quantity: 2
    },
    {
        id: 4,
        category: "bd",
        name: "Batman : Imposter",
        image: "https://images-na.ssl-images-amazon.com/images/I/51mJ-JyYknL._SX328_BO1,204,203,200_.jpg",
        description: "Cela fait trois ans que Bruce Wayne a endossé le costume de Batman afin de faire de Gotham une ville plus sûre et moins corrompue. À force de sacrifices et de persévérance, il a presque atteint son but. Mais quand un imposteur adopte son déguisement afin d'assassiner d'anciens criminels, c'est toute la police de Gotham qui se met à ses trousses, notamment l'inspectrice Blair Wong, déterminée à découvrir la véritable identité du justicier !",
        price: 18.00,
        quantity: 4
    },
    {
        id: 5,
        category: "roman",
        name: "Dune",
        image: "https://images-na.ssl-images-amazon.com/images/I/41LvpQah31S._SX303_BO1,204,203,200_.jpg",
        description: "Il n'y a pas, dans tout l'Empire, de planète plus inhospitalière que Dune. Partout, des sables à perte de vue. Une seule richesse : l'épice de longue vie, née du désert, et que tout l'univers convoite.",
        price: 11.95,
        quantity: 4
    }
]
