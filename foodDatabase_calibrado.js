// DATABASE DE ALIMENTOS v2.2 - DR. CARLOS EDITION
// Base calibrada para Bodybuilding Enhanced
const foodDatabase = {
    // ==================== CARBOIDRATOS ====================
    // Arroz e Cereais
    "arroz": { c: 28.1, p: 2.5, f: 0.2, kcal: 129, unit: "Arroz Branco (Cozido) - 100g", approx: { colher: 25, escumadeira: 80, xicara: 150 } },
    "arroz branco": { c: 28.1, p: 2.5, f: 0.2, kcal: 129, unit: "Arroz Branco (Cozido) - 100g", approx: { colher: 25, escumadeira: 80 } },
    "arroz integral": { c: 25.8, p: 2.6, f: 1.0, kcal: 123, unit: "Arroz Integral (Cozido) - 100g", approx: { colher: 25, escumadeira: 80 } },
    
    // Aveia
    "aveia": { c: 66.6, p: 13.9, f: 8.5, kcal: 394, unit: "Aveia em Flocos - 100g", approx: { colher: 15, xicara: 80 } },
    "aveia colher": { c: 10, p: 2.1, f: 1.3, kcal: 59, unit: "Aveia (1 Colher Sopa) - 15g", approx: { colher: 15 } },
    "1 colher aveia": { c: 10, p: 2.1, f: 1.3, kcal: 59, unit: "Aveia (1 Colher Sopa) - 15g", approx: { colher: 15 } },
    
    // Tubérculos
    "batata": { c: 20.1, p: 1.7, f: 0.1, kcal: 86, unit: "Batata Inglesa (Cozida) - 100g", approx: { colher: 30, unidade: 150 } },
    "batata inglesa": { c: 20.1, p: 1.7, f: 0.1, kcal: 86, unit: "Batata Inglesa (Cozida) - 100g", approx: { colher: 30, unidade: 150 } },
    "batata doce": { c: 23.9, p: 1.3, f: 0.3, kcal: 103, unit: "Batata Doce (Cozida) - 100g", approx: { colher: 30, unidade: 150, rodelas: 40 } },
    "mandioca": { c: 30.1, p: 0.6, f: 0.3, kcal: 125, unit: "Mandioca/Aipim (Cozida) - 100g", approx: { pedaco: 100, colher: 40 } },
    "aipim": { c: 30.1, p: 0.6, f: 0.3, kcal: 125, unit: "Mandioca/Aipim (Cozida) - 100g", approx: { pedaco: 100, colher: 40 } },
    
    // Pães
    "pao": { c: 29, p: 4.5, f: 0.5, kcal: 135, unit: "Pão Francês (1 Unidade) - 50g", approx: { unidade: 50 } },
    "pão": { c: 29, p: 4.5, f: 0.5, kcal: 135, unit: "Pão Francês (1 Unidade) - 50g", approx: { unidade: 50 } },
    "pao frances": { c: 29, p: 4.5, f: 0.5, kcal: 135, unit: "Pão Francês (1 Unidade) - 50g", approx: { unidade: 50 } },
    "pao de forma": { c: 11, p: 2.1, f: 0.9, kcal: 62, unit: "Pão de Forma (1 Fatia) - 25g", approx: { fatia: 25 } },
    "pão de forma": { c: 11, p: 2.1, f: 0.9, kcal: 62, unit: "Pão de Forma (1 Fatia) - 25g", approx: { fatia: 25 } },
    "tapioca": { c: 60, p: 0, f: 0, kcal: 240, unit: "Tapioca (Goma Pronta) - 100g", approx: { colher: 20, crepe: 100 } },
    
    // Macarrão (mantendo da base antiga)
    "macarrao": { c: 30, p: 5, f: 1, kcal: 157, unit: "Macarrão (Cozido) - 100g", approx: { escumadeira: 90, pegador: 100, prato: 250 } },
    "macarrão": { c: 30, p: 5, f: 1, kcal: 157, unit: "Macarrão (Cozido) - 100g", approx: { escumadeira: 90, pegador: 100 } },
    
    // ==================== PROTEÍNAS ====================
    // Frango
    "frango": { c: 0, p: 32.0, f: 2.5, kcal: 159, unit: "Peito de Frango (Grelhado) - 100g", approx: { bife: 120, file: 120, pedaco: 100, colher: 30 } },
    "peito de frango": { c: 0, p: 32.0, f: 2.5, kcal: 159, unit: "Peito de Frango (Grelhado) - 100g", approx: { bife: 120, file: 120, pedaco: 100 } },
    "frango grelhado": { c: 0, p: 32.0, f: 2.5, kcal: 159, unit: "Peito de Frango (Grelhado) - 100g", approx: { bife: 120, file: 120 } },
    "frango desfiado": { c: 0, p: 31.0, f: 3.0, kcal: 151, unit: "Peito de Frango (Cozido/Desfiado) - 100g", approx: { colher: 30, xicara: 140 } },
    "frango cozido": { c: 0, p: 31.0, f: 3.0, kcal: 151, unit: "Peito de Frango (Cozido/Desfiado) - 100g", approx: { colher: 30, xicara: 140 } },
    
    // Carnes Bovinas
    "carne": { c: 0, p: 35.9, f: 7.3, kcal: 219, unit: "Patinho Moído (Refogado) - 100g", approx: { colher: 30, bife: 100, pedaco: 100 } },
    "patinho": { c: 0, p: 35.9, f: 7.3, kcal: 219, unit: "Patinho Moído (Refogado) - 100g", approx: { colher: 30, bife: 100 } },
    "carne moida": { c: 0, p: 35.9, f: 7.3, kcal: 219, unit: "Patinho Moído (Refogado) - 100g", approx: { colher: 30, bife: 100 } },
    "bife": { c: 0, p: 31.9, f: 11.6, kcal: 241, unit: "Bife Alcatra/Contra (Grelhado) - 100g", approx: { unidade: 120, medio: 120, grande: 180 } },
    "alcatra": { c: 0, p: 31.9, f: 11.6, kcal: 241, unit: "Bife Alcatra/Contra (Grelhado) - 100g", approx: { bife: 120, pedaco: 100 } },
    "contra file": { c: 0, p: 32, f: 11, kcal: 240, unit: "Bife Alcatra/Contra (Grelhado) - 100g", approx: { bife: 120, pedaco: 100 } },
    "filé mignon": { c: 0, p: 32, f: 8, kcal: 200, unit: "Filé Mignon (Grelhado) - 100g", approx: { bife: 120, medalhao: 80 } },
    "file mignon": { c: 0, p: 32, f: 8, kcal: 200, unit: "Filé Mignon (Grelhado) - 100g", approx: { bife: 120, medalhao: 80 } },
    
    // Peixes
    "tilapia": { c: 0, p: 24, f: 2.0, kcal: 115, unit: "Tilápia (Grelhada) - 100g", approx: { file: 120, pedaco: 100 } },
    "tilápia": { c: 0, p: 24, f: 2.0, kcal: 115, unit: "Tilápia (Grelhada) - 100g", approx: { file: 120, pedaco: 100 } },
    "file de tilapia": { c: 0, p: 24, f: 2.0, kcal: 115, unit: "Tilápia (Grelhada) - 100g", approx: { file: 120, pedaco: 100 } },
    "filé de tilápia": { c: 0, p: 24, f: 2.0, kcal: 115, unit: "Tilápia (Grelhada) - 100g", approx: { file: 120, pedaco: 100 } },
    "salmao": { c: 0, p: 24, f: 13, kcal: 220, unit: "Salmão (Grelhado) - 100g", approx: { file: 120, posta: 150, pedaco: 100 } },
    "salmão": { c: 0, p: 24, f: 13, kcal: 220, unit: "Salmão (Grelhado) - 100g", approx: { file: 120, posta: 150, pedaco: 100 } },
    "atum": { c: 0, p: 30, f: 1, kcal: 132, unit: "Atum (Conserva em Água) - 100g", approx: { lata: 140, colher: 30 } },
    
    // Ovos
    "ovo": { c: 0.4, p: 6.3, f: 5.0, kcal: 72, unit: "Ovo Inteiro (1 Grande) - 50g", approx: { unidade: 50 } },
    "1 ovo": { c: 0.4, p: 6.3, f: 5.0, kcal: 72, unit: "Ovo Inteiro (1 Grande) - 50g", approx: { unidade: 50 } },
    "ovo grande": { c: 0.4, p: 6.3, f: 5.0, kcal: 72, unit: "Ovo Inteiro (1 Grande) - 50g", approx: { unidade: 50 } },
    "clara": { c: 0.2, p: 3.6, f: 0, kcal: 17, unit: "Clara de Ovo (1 Unidade) - 35g", approx: { unidade: 35 } },
    "claras": { c: 1, p: 11, f: 0, kcal: 50, unit: "Clara Pasteurizada (Líquida) - 100g", approx: { xicara: 240, colher: 15 } },
    "clara liquida": { c: 1, p: 11, f: 0, kcal: 50, unit: "Clara Pasteurizada (Líquida) - 100g", approx: { xicara: 240 } },
    "clara pasteurizada": { c: 1, p: 11, f: 0, kcal: 50, unit: "Clara Pasteurizada (Líquida) - 100g", approx: { xicara: 240 } },
    "gema": { c: 0.6, p: 3, f: 5, kcal: 55, unit: "Gema de Ovo - 17g", approx: { unidade: 17 } },
    
    // Suplementos - CALIBRADO DR. CARLOS
    "whey": { c: 4.0, p: 17, f: 1.2, kcal: 120, unit: "Whey MK Concentrado 56% (1 Scoop) - 30g", approx: { scoop: 30, dose: 30, colher: 15 } },
    "whey mk": { c: 4.0, p: 17, f: 1.2, kcal: 120, unit: "Whey MK Concentrado 56% (1 Scoop) - 30g", approx: { scoop: 30, dose: 30 } },
    "whey concentrado": { c: 4.0, p: 17, f: 1.2, kcal: 120, unit: "Whey MK Concentrado 56% (1 Scoop) - 30g", approx: { scoop: 30, dose: 30 } },
    "whey padrao": { c: 2.5, p: 24, f: 1.0, kcal: 115, unit: "Whey Padrão 80% (1 Scoop) - 30g", approx: { scoop: 30, dose: 30 } },
    "whey isolado": { c: 2.5, p: 24, f: 1.0, kcal: 115, unit: "Whey Padrão 80% (1 Scoop) - 30g", approx: { scoop: 30, dose: 30 } },
    "1 scoop whey": { c: 4.0, p: 17, f: 1.2, kcal: 120, unit: "Whey MK Concentrado 56% (1 Scoop) - 30g", approx: { scoop: 30 } },
    "creatina": { c: 0, p: 0, f: 0, kcal: 0, unit: "Creatina - 5g", approx: { colher: 5 } },
    
    // Queijos (mantendo os mais usados)
    "queijo": { c: 2, p: 25, f: 30, kcal: 400, unit: "Queijo Mussarela - 100g", approx: { fatia: 20, pedaco: 30 } },
    "mussarela": { c: 2, p: 25, f: 30, kcal: 400, unit: "Queijo Mussarela - 100g", approx: { fatia: 20, pedaco: 30 } },
    "queijo cottage": { c: 3, p: 11, f: 4, kcal: 98, unit: "Queijo Cottage - 100g", approx: { colher: 30, pote: 200 } },
    "cottage": { c: 3, p: 11, f: 4, kcal: 98, unit: "Queijo Cottage - 100g", approx: { colher: 30, pote: 200 } },
    
    // Leite e Iogurte
    "leite": { c: 5, p: 3.2, f: 3.5, kcal: 61, unit: "Leite Integral - 100g", approx: { copo: 200, xicara: 240 } },
    "leite desnatado": { c: 5, p: 3.4, f: 0.2, kcal: 35, unit: "Leite Desnatado - 100g", approx: { copo: 200, xicara: 240 } },
    "iogurte": { c: 4, p: 3.5, f: 3, kcal: 61, unit: "Iogurte Natural - 100g", approx: { pote: 170, colher: 30 } },
    "iogurte grego": { c: 4, p: 9, f: 5, kcal: 97, unit: "Iogurte Grego - 100g", approx: { pote: 170, colher: 30 } },
    
    // ==================== LEGUMINOSAS ====================
    "feijao": { c: 13.6, p: 4.8, f: 0.5, kcal: 76, unit: "Feijão Carioca (Cozido/Caldo) - 100g", approx: { colher: 20, concha: 140 } },
    "feijão": { c: 13.6, p: 4.8, f: 0.5, kcal: 76, unit: "Feijão Carioca (Cozido/Caldo) - 100g", approx: { colher: 20, concha: 140 } },
    "feijao carioca": { c: 13.6, p: 4.8, f: 0.5, kcal: 76, unit: "Feijão Carioca (Cozido/Caldo) - 100g", approx: { colher: 20, concha: 140 } },
    "1 concha feijao": { c: 19, p: 6.7, f: 0.7, kcal: 106, unit: "Feijão (1 Concha) - 140g", approx: { concha: 140 } },
    "concha de feijao": { c: 19, p: 6.7, f: 0.7, kcal: 106, unit: "Feijão (1 Concha) - 140g", approx: { concha: 140 } },
    "feijao preto": { c: 14, p: 4.5, f: 0.5, kcal: 77, unit: "Feijão Preto (Cozido) - 100g", approx: { colher: 20, concha: 140 } },
    
    // ==================== FRUTAS ====================
    "maca": { c: 19.1, p: 0.3, f: 0.2, kcal: 72, unit: "Maçã Fuji (1 Média) - 130g", approx: { unidade: 130, media: 130 } },
    "maçã": { c: 19.1, p: 0.3, f: 0.2, kcal: 72, unit: "Maçã Fuji (1 Média) - 130g", approx: { unidade: 130, media: 130 } },
    "1 maca": { c: 19.1, p: 0.3, f: 0.2, kcal: 72, unit: "Maçã Fuji (1 Média) - 130g", approx: { unidade: 130 } },
    "maca 100g": { c: 14, p: 0.3, f: 0.2, kcal: 52, unit: "Maçã - 100g", approx: { pedaco: 100 } },
    "banana": { c: 18, p: 0.9, f: 0.2, kcal: 68, unit: "Banana Prata (1 Média) - 70g", approx: { unidade: 70, media: 70 } },
    "1 banana": { c: 18, p: 0.9, f: 0.2, kcal: 68, unit: "Banana Prata (1 Média) - 70g", approx: { unidade: 70 } },
    "banana prata": { c: 18, p: 0.9, f: 0.2, kcal: 68, unit: "Banana Prata (1 Média) - 70g", approx: { unidade: 70 } },
    "pessego": { c: 10, p: 0.9, f: 0.3, kcal: 39, unit: "Pêssego (1 Médio) - 100g", approx: { unidade: 100 } },
    "pêssego": { c: 10, p: 0.9, f: 0.3, kcal: 39, unit: "Pêssego (1 Médio) - 100g", approx: { unidade: 100 } },
    "1 pessego": { c: 10, p: 0.9, f: 0.3, kcal: 39, unit: "Pêssego (1 Médio) - 100g", approx: { unidade: 100 } },
    "mamao": { c: 15, p: 0.8, f: 0.2, kcal: 60, unit: "Mamão Papaya (Meio) - 140g", approx: { fatia: 100, colher: 40, meio: 140 } },
    "mamão": { c: 15, p: 0.8, f: 0.2, kcal: 60, unit: "Mamão Papaya (Meio) - 140g", approx: { fatia: 100, colher: 40, meio: 140 } },
    "meio mamao": { c: 15, p: 0.8, f: 0.2, kcal: 60, unit: "Mamão Papaya (Meio) - 140g", approx: { meio: 140 } },
    
    // Outras frutas comuns (mantendo da base antiga)
    "morango": { c: 8, p: 0.7, f: 0.3, kcal: 32, unit: "Morango - 100g", approx: { unidade: 15, xicara: 150 } },
    "abacate": { c: 9, p: 2, f: 15, kcal: 160, unit: "Abacate - 100g", approx: { colher: 30, unidade: 200 } },
    "melancia": { c: 8, p: 0.6, f: 0.2, kcal: 30, unit: "Melancia - 100g", approx: { fatia: 200, pedaco: 100 } },
    "laranja": { c: 12, p: 0.9, f: 0.1, kcal: 47, unit: "Laranja - 100g", approx: { unidade: 130, media: 130 } },
    
    // ==================== GORDURAS ====================
    "azeite": { c: 0, p: 0, f: 13.5, kcal: 119, unit: "Azeite de Oliva (1 Colher Sopa) - 13ml", approx: { colher: 13, fio: 5 } },
    "1 colher azeite": { c: 0, p: 0, f: 13.5, kcal: 119, unit: "Azeite de Oliva (1 Colher Sopa) - 13ml", approx: { colher: 13 } },
    "azeite colher": { c: 0, p: 0, f: 13.5, kcal: 119, unit: "Azeite de Oliva (1 Colher Sopa) - 13ml", approx: { colher: 13 } },
    "manteiga": { c: 0, p: 0, f: 4.1, kcal: 37, unit: "Manteiga (Ponta de Faca) - 5g", approx: { ponta: 5, colher: 10 } },
    "ponta de faca manteiga": { c: 0, p: 0, f: 4.1, kcal: 37, unit: "Manteiga (Ponta de Faca) - 5g", approx: { ponta: 5 } },
    "pasta de amendoim": { c: 3, p: 4, f: 8, kcal: 90, unit: "Pasta de Amendoim (1 Colher) - 15g", approx: { colher: 15 } },
    "pasta amendoim": { c: 3, p: 4, f: 8, kcal: 90, unit: "Pasta de Amendoim (1 Colher) - 15g", approx: { colher: 15 } },
    "1 colher pasta amendoim": { c: 3, p: 4, f: 8, kcal: 90, unit: "Pasta de Amendoim (1 Colher) - 15g", approx: { colher: 15 } },
    
    // Óleo (100g para cálculos)
    "oleo": { c: 0, p: 0, f: 100, kcal: 884, unit: "Óleo de Cozinha - 100g", approx: { colher: 12, fio: 5 } },
    "óleo": { c: 0, p: 0, f: 100, kcal: 884, unit: "Óleo de Cozinha - 100g", approx: { colher: 12, fio: 5 } },
    
    // ==================== VEGETAIS (Baixa Caloria - Mantendo alguns) ====================
    "brocolis": { c: 7, p: 2.8, f: 0.4, kcal: 34, unit: "Brócolis (Cozido) - 100g", approx: { ramo: 50, colher: 30 } },
    "brócolis": { c: 7, p: 2.8, f: 0.4, kcal: 34, unit: "Brócolis (Cozido) - 100g", approx: { ramo: 50, colher: 30 } },
    "couve": { c: 9, p: 4.3, f: 0.9, kcal: 49, unit: "Couve (Crua) - 100g", approx: { folha: 30, colher: 20 } },
    "alface": { c: 2.9, p: 1.4, f: 0.2, kcal: 15, unit: "Alface - 100g", approx: { folha: 20, prato: 50 } },
    "tomate": { c: 3.9, p: 0.9, f: 0.2, kcal: 18, unit: "Tomate - 100g", approx: { unidade: 100, rodela: 20 } },
    "cenoura": { c: 10, p: 0.9, f: 0.2, kcal: 41, unit: "Cenoura (Crua) - 100g", approx: { unidade: 80, rodela: 10 } },
    "abobrinha": { c: 3.1, p: 1.2, f: 0.3, kcal: 17, unit: "Abobrinha (Cozida) - 100g", approx: { unidade: 150, rodela: 20 } },
    
    // ==================== BEBIDAS ====================
    "cafe": { c: 0, p: 0.1, f: 0, kcal: 2, unit: "Café (Sem Açúcar) - 100g", approx: { xicara: 50, colher: 15 } },
    "café": { c: 0, p: 0.1, f: 0, kcal: 2, unit: "Café (Sem Açúcar) - 100g", approx: { xicara: 50, colher: 15 } },
    "agua de coco": { c: 3.7, p: 0.7, f: 0.2, kcal: 19, unit: "Água de Coco - 100g", approx: { copo: 200, caixinha: 330 } },
    "água de coco": { c: 3.7, p: 0.7, f: 0.2, kcal: 19, unit: "Água de Coco - 100g", approx: { copo: 200, caixinha: 330 } },
    "monster": { c: 2, p: 0, f: 0, kcal: 10, unit: "Monster Zero (Lata) - 100g", approx: { lata: 1, unidade: 1 } },
    "monster zero": { c: 2, p: 0, f: 0, kcal: 10, unit: "Monster Zero (Lata) - 100g", approx: { lata: 1, unidade: 1 } },
    "refrigerante zero": { c: 0, p: 0, f: 0, kcal: 0, unit: "Refrigerante Zero - 100g", approx: { copo: 200, lata: 350 } }
};





