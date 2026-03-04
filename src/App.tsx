import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

function App() {

  const [textFrase, setTextFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frase: ['Não importa o quão devagar você vá, desde que você não pare.',
        'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
        'Acredite em si mesmo e todo o resto virá naturalmente.',
        'O único lugar onde o sucesso vem antes do trabalho é no dicionário.',
        'A motivação é o que te faz começar. O hábito é o que te mantém indo.']
    },
    {
      id: 2,
      nome: 'Bom dia',
      frase: ['Bom dia! Que seu dia seja tão brilhante quanto o sol e tão alegre quanto um sorriso.',
        'Acorde com determinação, vá para a cama com satisfação. Bom dia!',
        'Cada manhã é uma nova oportunidade para ser feliz. Bom dia!',
        'Que seu dia seja repleto de coisas boas e momentos felizes. Bom dia!',
        'Bom dia! Que hoje seja o início de algo maravilhoso.']
    },
    {
      id: 3,
      nome: 'Bem estar',
      frase: ['Cuide do seu corpo, é o único lugar que você tem para viver.',
        'A saúde é a maior riqueza.',
        'O bem-estar é um estado de equilíbrio entre o corpo, a mente e o espírito.',
        'A felicidade é a melhor forma de saúde.',
        'O autocuidado é um ato de amor próprio.']
    }

  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)

  }

  function gerarFrase() {
    const randomIndex = Math.floor(Math.random() * allFrases[categoriaSelecionada].frase.length)
    setTextFrase(allFrases[categoriaSelecionada].frase[randomIndex])
  }


  return (
    <div className='container'>
      <img className='logo' src={logo} alt="Logo" />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button 
            key={item.id} 
            className='category-button'
            style={{ 
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }} 
              onClick={() => handleSwitchCategory(index)}
            >
            {item.nome}
          </button>
        ))}

      </section>

      <button  onClick={() => gerarFrase()} className='button-frase'>Gerar Frase</button>

      {textFrase !== '' && (
        <p className='texto-frase'>{textFrase}</p>
      )}
    </div>
  )
}

export default App
