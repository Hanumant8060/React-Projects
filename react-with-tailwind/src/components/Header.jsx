 import logo from '../assets/logo.png';
//  import classes from '../header.module.css';
 import {styled} from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  & img{
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }
  & h1 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.4em;
  text-align: center;
  text-transform: uppercase;
  color: #9a3412;
  font-family: 'Pacifico', cursive;
  margin: 0;
  }

  & p{
  text-align: center;
  color: #a39191;
  margin: 0;
  }

  @media (min-width: 768px) {

    margin-bottom: 4rem;

   & h1 {
    font-size: 2.25rem;
  }
    & img{
    &:hover{
      transform: scale(1.05);
      transition: transform 0.3s ease-in-out;}}
}
 `

export default function Header() {
  return (
    // <HeaderContainer>
    //   <img src={logo} alt="A canvas" />
    //   <h1>ReactArt</h1>
    //   <p>A community of artists and art-lovers.</p>
    // </HeaderContainer>
       <header className="flex flex-col items-center justify-center mt-8 mb-16">
      <img src={logo} className='w-44 h-44 object-contain mb-8' alt="A canvas" />
      <h1 className="font-title text-4xl font-semibold text-center uppercase text-amber-900">ReactArt</h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
