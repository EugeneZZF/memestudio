// import { Route , Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Running from './components/Running';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Main from './components/Main/Main';
import Video from './components/Main/Video';



function App() {

  const { t, i18n} = useTranslation();
  const [language, setLanguages] = useState(true);
  const [activeButtonId, setActiveButtonId] = useState(null);

  const handleButtonClick_1 = (id) => {
    setActiveButtonId(id);
  };

  const changeLanguage = (language) =>{
    i18n.changeLanguage(language);
  };
  function changeLanguage_func(){
    setLanguages(!language);
    console.log(language)
  }
  const handleButtonClick = () => {
    changeLanguage_func();
    if(language != true){
      changeLanguage("ru");
    }
    else{
      changeLanguage("en");
    }
  };

  return (
    <>
      <Header language={language } t={t} changeLanguage_func={changeLanguage_func} changeLanguage={changeLanguage}
      activeButtonId={activeButtonId} setActiveButtonId={setActiveButtonId} handleButtonClick_1={handleButtonClick_1}
      ></Header>
      <Running></Running>
      <Main t={t} activeButtonId={activeButtonId} setActiveButtonId={setActiveButtonId} handleButtonClick={handleButtonClick_1}></Main>
      
    </>
  );
}

export default App;
