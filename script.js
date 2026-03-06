const drawPixelArt = () => {
    // Карта кольорів: символи відповідають кольорам
    const colors = {
        ' ': 'transparent', // Пусто
        'B': '#000000',    // Чорний (контур)
        'O': '#FF8C00',    // Помаранчевий (тіло)
        'W': '#FFFFFF',    // Білий (очі/живіт)
        'P': '#FFC0CB',    // Рожевий (вушка/ніс)
        'G': '#32CD32'     // Зелений (очі)
    };

    // Схема кота (12x10 пікселів)
    const cat = [
        "  B     B   ",
        " B P B B P B ",
        " B O O O O B ",
        "B O G O G O B",
        "B O O P O O B",
        " B O O O O B ",
        "  B O W O B  ",
        "   B O O B   ",
        "    B B B    ",
        "     B B     "
    ];

    console.log("%c Pixel Cat! 🐈", "font-weight: bold; font-size: 20px; color: #FF8C00;");

    cat.forEach(row => {
        let styleArray = [];
        let rowString = "";

        for (let char of row) {
            rowString += "%c  "; // Два пробіли для створення квадрата
            styleArray.push(`background: ${colors[char] || 'transparent'}; padding: 1px;`);
        }

        console.log(rowString, ...styleArray);
    });
};

drawPixelArt();
