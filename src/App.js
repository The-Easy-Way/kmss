import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Story from './components/Story';
import SingleStory from './components/SingleStory';



function App() {
  return (
      <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/blog/:slug" element={<SinglePost />}/>
            <Route exact path="/blog" element={<Post />}/>
            <Route exact path="/stories/:slug" element={<SingleStory />}/>
            <Route exact path="/stories" element={<Story />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          {/* <NotFound/> */}
          <Footer/>

      </Router>
  );
}


export default App;
