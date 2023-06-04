// import social media images
import Github from '../assets/Social Icons/Github.svg'
import LinkedIn from '../assets/Social Icons/LinkedIn.svg'
import Twitter from '../assets/Social Icons/Twitter.svg'

const Footer = () => {
  return (
    <footer className="bg-dark-gray flex mx-auto px-6 py-5 justify-between">
        <div>
            <h1 className="font-serif text-white">Johnathan Specter</h1>
        </div>
        <div className="flex justify-between">
            <img src={Twitter} alt="Twitter" className="h-6 mx-2" />
            <img src={LinkedIn} alt="LinkedIn" className="h-6 mx-2" />
            <img src={Github} alt="Github" className="h-6 mx-2" />
        </div>
    </footer>
  )
}

export default Footer