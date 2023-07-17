import React, { useEffect, useState } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import { getProjects } from './apis/post';

const App = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const handleFetchProject = async _ => {
      const response = await getProjects()
      setProjects(response?.data?.data || [])
    }
    handleFetchProject()
  }, [])

  

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work projects={projects} />
      <Contact />
      <div className='h-[50px]' />
    </div>
  );
};

export default App;
