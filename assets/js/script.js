$(document).ready(function () {
    // Mapeamento das posições de cada palavra (linha, coluna)
    const wordMap = {
        'sorvete': [
            [1, 2], // (L,C)S 
            [2, 2], // O 
            [3, 2], // R
            [4, 2], // V
            [5, 2], // E
            [6, 2], // T
            [7, 2]  // E
        ],
        'bombom': [
            [2, 1], // B 
            [2, 2], // O
            [2, 3], // M
            [2, 4], // B
            [2, 5], // O
            [2, 6]  // M
        ],
        'biscoito': [
            [2, 4], // B
            [3, 4], // I
            [4, 4], // S
            [5, 4], // C
            [6, 4], // O
            [7, 4], // I
            [8, 4], // T
            [9, 4]  // O
        ],
        'lanche': [
            [6, 5], // L
            [6, 6], // A
            [6, 7], // N 
            [6, 8], // C 
            [6, 9], // H
            [6, 10] // E
        ],
        'torta': [
            [8, 4], // T
            [8, 5], // O
            [8, 6], // R
            [8, 7], // T
            [8, 8]  // A
        ],
        'pudim': [
            [0, 8], // P 
            [1, 8], // U
            [2, 8], // D
            [3, 8], // I
            [4, 8]  // M
        ],
        'pastel': [
            [2, 10], // P
            [3, 10], // A
            [4, 10], // S
            [5, 10], // T
            [6, 10], // E
            [7, 10]  // L
        ],
        'bolo': [
            [7, 8],  // B
            [7, 9],  // O
            [7, 10], // L 
            [7, 11]  // O
        ],
        'doce': [
            [9, 3], // D
            [9, 4], // O
            [9, 5], // C
            [9, 6]  // E
        ],
        'balas': [
            [7, 8],  // B
            [8, 8],  // A
            [9, 8],  // L
            [10, 8], // A
            [11, 8]  // S
        ]
    };

    // Função para destacar uma palavra
    function highlightWord(word) {
        // Remove destaque anterior
        $('.highlight').removeClass('highlight');
        
        // Destaca as células da nova palavra
        wordMap[word].forEach(pos => {
            const [row, col] = pos;
            $(`.tab tr:eq(${row}) td:eq(${col})`).addClass('highlight');
        });
    }

    // Clicar em uma imagem destaca a palavra
    $('[class*="word-"]').click(function (e) {
        e.stopPropagation(); // Impede que o evento chegue ao document
        
        const wordClass = $(this).attr('class').split(' ').find(c => c.startsWith('word-'));
        const word = wordClass.split('-')[1];
        highlightWord(word);
    });

    // Clicar na tabela (mas não em uma letra) mantém o destaque atual
    $('.tab').click(function (e) {
        e.stopPropagation();
    });

    // Clicar em qualquer lugar fora da tabela remove o destaque
    $(document).click(function () {
        $('.highlight').removeClass('highlight');
    });

    // Impede que cliques nos itens do container removam o destaque
    $('.container').click(function (e) {
        e.stopPropagation();
    });
});