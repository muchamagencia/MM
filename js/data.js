// Actor and Actress Database (40 talents)
const talents = [
    {
        id: 1,
        name: "Carlos Martínez",
        category: "actor",
        age: 28,
        gender: "masculino",
        origin: "españa",
        skills: ["drama", "cine", "televisión"],
        description: "Actor versátil con experiencia en cine y televisión"
    },
    {
        id: 2,
        name: "Laura García",
        category: "actriz",
        age: 25,
        gender: "femenino",
        origin: "españa",
        skills: ["comedia", "drama", "doblaje"],
        description: "Actriz talentosa con formación en interpretación profesional"
    },
    {
        id: 3,
        name: "Miguel Rodríguez",
        category: "cara-nueva",
        age: 22,
        gender: "masculino",
        origin: "españa",
        skills: ["actuación", "modelaje"],
        description: "Talento emergente con gran potencial"
    },
    {
        id: 4,
        name: "Elena López",
        category: "actriz",
        age: 31,
        gender: "femenino",
        origin: "españa",
        skills: ["drama", "cine"],
        description: "Actriz experimentada con trayectoria en cine europeo"
    },
    {
        id: 5,
        name: "Javier Sánchez",
        category: "actor",
        age: 35,
        gender: "masculino",
        origin: "españa",
        skills: ["drama", "acción"],
        description: "Actor profesional especializado en películas de acción"
    },
    {
        id: 6,
        name: "Sofía Ramírez",
        category: "infantil",
        age: 12,
        gender: "femenino",
        origin: "españa",
        skills: ["actuación infantil", "doblaje"],
        description: "Joven talento con experiencia en proyectos infantiles"
    },
    {
        id: 7,
        name: "Pablo Fernández",
        category: "actor",
        age: 40,
        gender: "masculino",
        origin: "españa",
        skills: ["drama", "televisión", "teatro"],
        description: "Actor veterano con amplia experiencia en todos los medios"
    },
    {
        id: 8,
        name: "Inmaculada Díaz",
        category: "actriz",
        age: 29,
        gender: "femenino",
        origin: "españa",
        skills: ["drama", "comedia"],
        description: "Actriz versátil con talento para géneros diversos"
    },
    {
        id: 9,
        name: "Lucas Torres",
        category: "cara-nueva",
        age: 21,
        gender: "masculino",
        origin: "latinoamérica",
        skills: ["actuación", "danza"],
        description: "Talento joven de Latinoamérica con grandes habilidades"
    },
    {
        id: 10,
        name: "Valeria Moreno",
        category: "internacional",
        age: 26,
        gender: "femenino",
        origin: "latinoamérica",
        skills: ["drama", "acción"],
        description: "Actriz internacional con experiencia en producciones globales"
    },
    {
        id: 11,
        name: "Andres López",
        category: "actor",
        age: 33,
        gender: "masculino",
        origin: "españa",
        skills: ["comedia", "dramático"],
        description: "Comediante talentoso con experiencia en televisión"
    },
    {
        id: 12,
        name: "Marta Gómez",
        category: "actriz",
        age: 38,
        gender: "femenino",
        origin: "españa",
        skills: ["drama intenso", "cine artístico"],
        description: "Actriz premiada del cine español e internacional"
    },
    {
        id: 13,
        name: "Diego Ruiz",
        category: "infantil",
        age: 10,
        gender: "masculino",
        origin: "españa",
        skills: ["actuación infantil"],
        description: "Niño actor con mucha energía y talento natural"
    },
    {
        id: 14,
        name: "Alejandra Vega",
        category: "cara-nueva",
        age: 23,
        gender: "femenino",
        origin: "españa",
        skills: ["actuación", "modelaje", "doblaje"],
        description: "Joven actriz en inicio de carrera con gran potencial"
    },
    {
        id: 15,
        name: "Ricardo Peña",
        category: "actor",
        age: 45,
        gender: "masculino",
        origin: "españa",
        skills: ["drama profundo", "teatro clásico"],
        description: "Actor consagrado con amplia carrera artística"
    },
    {
        id: 16,
        name: "Cristina Navarro",
        category: "actriz",
        age: 27,
        gender: "femenino",
        origin: "españa",
        skills: ["acción", "drama"],
        description: "Actriz especializada en películas de acción y aventura"
    },
    {
        id: 17,
        name: "Fernando Iglesias",
        category: "internacional",
        age: 32,
        gender: "masculino",
        origin: "europa",
        skills: ["drama", "idiomas múltiples"],
        description: "Actor europeo con experiencia en producciones internacionales"
    },
    {
        id: 18,
        name: "Isabella Romano",
        category: "actriz",
        age: 24,
        gender: "femenino",
        origin: "internacional",
        skills: ["drama", "musicales"],
        description: "Actriz internacional con habilidades en musicales"
    },
    {
        id: 19,
        name: "Marcos Soto",
        category: "cara-nueva",
        age: 20,
        gender: "masculino",
        origin: "latinoamérica",
        skills: ["actuación contemporánea"],
        description: "Joven talento latinoamericano con estilo moderno"
    },
    {
        id: 20,
        name: "Paula Herrera",
        category: "actriz",
        age: 30,
        gender: "femenino",
        origin: "españa",
        skills: ["drama", "películas independientes"],
        description: "Actriz del cine independiente español"
    },
    {
        id: 21,
        name: "Roberto Castro",
        category: "actor",
        age: 48,
        gender: "masculino",
        origin: "españa",
        skills: ["papeles secundarios impactantes", "veterano"],
        description: "Actor veterano con roles memorables en cine"
    },
    {
        id: 22,
        name: "Natalia Campos",
        category: "infantil",
        age: 14,
        gender: "femenino",
        origin: "españa",
        skills: ["actuación infantil", "canto"],
        description: "Joven actriz y cantante con proyectos exitosos"
    },
    {
        id: 23,
        name: "Santiago Morales",
        category: "actor",
        age: 26,
        gender: "masculino",
        origin: "españa",
        skills: ["modelaje", "actuación comercial"],
        description: "Actor y modelo con experiencia en publicidad"
    },
    {
        id: 24,
        name: "Victoria Sáenz",
        category: "actriz",
        age: 36,
        gender: "femenino",
        origin: "españa",
        skills: ["drama psicológico", "series"],
        description: "Actriz de series de televisión con gran presencia"
    },
    {
        id: 25,
        name: "Óscar Delgado",
        category: "cara-nueva",
        age: 22,
        gender: "masculino",
        origin: "españa",
        skills: ["actuación versátil"],
        description: "Talento emergente con formación integral"
    },
    {
        id: 26,
        name: "Gabriela Flores",
        category: "internacional",
        age: 28,
        gender: "femenino",
        origin: "latinoamérica",
        skills: ["películas internacionales", "idiomas"],
        description: "Actriz latinoamericana con proyectos globales"
    },
    {
        id: 27,
        name: "Guillermo Vásquez",
        category: "actor",
        age: 37,
        gender: "masculino",
        origin: "españa",
        skills: ["acción", "aventura"],
        description: "Actor especializado en géneros de acción"
    },
    {
        id: 28,
        name: "Constanza Ruiz",
        category: "actriz",
        age: 25,
        gender: "femenino",
        origin: "españa",
        skills: ["dramatizado", "cine indie"],
        description: "Actriz del cine independiente español"
    },
    {
        id: 29,
        name: "Adrian Mendez",
        category: "infantil",
        age: 11,
        gender: "masculino",
        origin: "españa",
        skills: ["actuación infantil", "deportes"],
        description: "Niño actor atlético y carismático"
    },
    {
        id: 30,
        name: "Luciana Pérez",
        category: "cara-nueva",
        age: 21,
        gender: "femenino",
        origin: "latinoamérica",
        skills: ["actuación moderna", "danza"],
        description: "Talento joven latinoamericano con buenos movimientos"
    },
    {
        id: 31,
        name: "Enrique Molina",
        category: "actor",
        age: 50,
        gender: "masculino",
        origin: "españa",
        skills: ["papeles mayores", "autoridad"],
        description: "Actor senior con presencia y carisma"
    },
    {
        id: 32,
        name: "Daniela Serra",
        category: "actriz",
        age: 32,
        gender: "femenino",
        origin: "españa",
        skills: ["drama familiar", "series"],
        description: "Actriz de series familiares y comerciales"
    },
    {
        id: 33,
        name: "Marco Antonio López",
        category: "internacional",
        age: 35,
        gender: "masculino",
        origin: "latinoamérica",
        skills: ["películas internacionales", "acción"],
        description: "Actor latinoamericano en producciones globales"
    },
    {
        id: 34,
        name: "Sofía Martínez",
        category: "infantil",
        age: 13,
        gender: "femenino",
        origin: "españa",
        skills: ["actuación infantil", "emociones"],
        description: "Joven actriz con intensidad emocional"
    },
    {
        id: 35,
        name: "Tomás García",
        category: "cara-nueva",
        age: 23,
        gender: "masculino",
        origin: "españa",
        skills: ["actuación dramática"],
        description: "Joven actor con formación en drama"
    },
    {
        id: 36,
        name: "Belén Cortés",
        category: "actriz",
        age: 29,
        gender: "femenino",
        origin: "españa",
        skills: ["cine comercial", "publicidad"],
        description: "Actriz versátil en cine comercial"
    },
    {
        id: 37,
        name: "David Nieto",
        category: "actor",
        age: 31,
        gender: "masculino",
        origin: "españa",
        skills: ["drama", "cine de autor"],
        description: "Actor de cine de autor con sensibilidad artística"
    },
    {
        id: 38,
        name: "Verónica Silva",
        category: "actriz",
        age: 34,
        gender: "femenino",
        origin: "españa",
        skills: ["drama intenso", "thrillers"],
        description: "Actriz especializada en thrillers y drama intenso"
    },
    {
        id: 39,
        name: "Francisco Ramos",
        category: "internacional",
        age: 40,
        gender: "masculino",
        origin: "europa",
        skills: ["películas europeas", "clásicas"],
        description: "Actor europeo en producciones clásicas"
    },
    {
        id: 40,
        name: "Mariana Quintero",
        category: "cara-nueva",
        age: 20,
        gender: "femenino",
        origin: "latinoamérica",
        skills: ["actuación", "presencia escénica"],
        description: "Talento latinoamericano con fuerte presencia"
    }
];