import System.Random (randomRIO)

-- Função principal que inicia o jogo
main :: IO ()
main = do
    putStrLn "Bem-vindo ao Jogo da Memória!"
    cartas <- embaralharCartas gerarCartas
    jogar cartas []

-- Função para gerar as cartas em pares
gerarCartas :: [String]
gerarCartas = ["A", "B", "C", "D", "E", "F", "G", "H"]

-- Embaralha as cartas
embaralharCartas :: [a] -> IO [a]
embaralharCartas cartas = do
    let cartasDuplicadas = cartas ++ cartas  -- Duplicar para criar pares
    embaralhar cartasDuplicadas

-- Função que embaralha uma lista de forma aleatória
embaralhar :: [a] -> IO [a]
embaralhar [] = return []
embaralhar cartas = do
    i <- randomRIO (0, length cartas - 1)
    let (antes, carta : depois) = splitAt i cartas
    cartasEmbaralhadas <- embaralhar (antes ++ depois)
    return (carta : cartasEmbaralhadas)

-- Função que processa o jogo
jogar :: [String] -> [(Int, String)] -> IO ()
jogar cartas abertas = do
    mostrarTabuleiro cartas abertas
    putStrLn "Escolha duas cartas (números separados por espaço entre 1 e 16): "
    escolha <- getLine
    let numerosEscolhidos = words escolha
    if length numerosEscolhidos /= 2
    then do
        putStrLn "Escolha dois números separados por espaço."
        jogar cartas abertas
    else do
        let [c1, c2] = map read numerosEscolhidos :: [Int]
        if c1 < 1 || c1 > length cartas || c2 < 1 || c2 > length cartas
        then do
            putStrLn "Índices fora do alcance. Escolha números válidos."
            jogar cartas abertas
        else if c1 == c2
        then do
            putStrLn "Você deve escolher duas cartas diferentes!"
            jogar cartas abertas
        else do
            let carta1 = cartas !! (c1 - 1)
            let carta2 = cartas !! (c2 - 1)
            if carta1 == carta2
            then do
                putStrLn "Você encontrou um par!"
                let novasAbertas = (c1, carta1) : (c2, carta2) : abertas
                if length novasAbertas == length cartas
                then putStrLn "Parabéns, você venceu!"
                else jogar cartas novasAbertas
            else do
                putStrLn "As cartas não são iguais."
                jogar cartas abertas

-- Função para exibir o tabuleiro
mostrarTabuleiro :: [String] -> [(Int, String)] -> IO ()
mostrarTabuleiro cartas abertas = do
    putStrLn "Tabuleiro atual:"
    let display = [if any ((== (i + 1)) . fst) abertas
                   then snd (head (filter ((== (i + 1)) . fst) abertas))
                   else "X" | i <- [0..length cartas - 1]]
    putStrLn $ unwords display
    putStrLn ""
