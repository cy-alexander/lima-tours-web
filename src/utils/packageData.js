import imgCultural from '../images/paquetecultural.jpg';
import imgNocturno from '../images/paquetenocturno.png';
import imgLujo from '../images/paquetelujo.jpg';

export const packagesData = [
    {
        id: "cultural",
        title: "Turismo Cultural",
        description: "Descubre el misterio y la grandeza de la Catedral de Lima bajo la magia de la noche. Recorre este majestuoso templo iluminado, donde cada rincón guarda siglos de historia y arte colonial.",
        category: "cultural",
        price: 595,
        duration: "3 días",
        maxCapacity: 4,
        route: "/tourism/cultural",
        image: imgCultural,
        alt: "Imagen de Turismo Cultural",
        featured: true,
        active: true
    },
    {
        id: "nocturnal",
        title: "Turismo Nocturno",
        description: "Déjate maravillar por la magia de la noche en el impresionante Parque de las Aguas de Lima. Un espectáculo de fuentes, luces y colores te espera en el circuito acuático más grande del Perú.",
        category: "nocturnal",
        price: 615,
        duration: "3 días",
        maxCapacity: 5,
        route: "/tourism/nocturnal",
        image: imgNocturno,
        alt: "Imagen de Turismo Nocturno",
        featured: true,
        active: true
    },
    {
        id: "luxury",
        title: "Turismo de Lujo",
        description: "Vive una noche inolvidable en Larcomar, el icónico centro de entretenimiento y lujo frente al majestuoso océano Pacífico. Disfruta de una cena gourmet con vista al mar.",
        category: "luxury",
        price: 695,
        duration: "4 días",
        maxCapacity: 4,
        route: "/tourism/luxury",
        image: imgLujo,
        alt: "Imagen de Turismo de Lujo",
        featured: true,
        active: true
    }
];

// Función helper para obtener paquete por ID
export const getPackageById = (packageId) => {
    return packagesData.find(pkg => pkg.id === packageId);
};

// Función helper para obtener precio de paquete
export const getPackagePrice = (packageId) => {
    const pkg = getPackageById(packageId);
    return pkg ? pkg.price : 0;
};