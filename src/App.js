import React, { useState } from "react";
import "./App.css";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import axios from "axios";
import Loader from "./Components/Loader/Loader";
import Modal from "./Components/Modal/Modal";

function App() {
  const key = "15591781-785a03c118f12007382b46528";

  const [search, setSearch] = useState("");
  const [imgArr, setImgArr] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [picture, setPicture] = useState("");

  

  const searchPicture = async (page) => {
    setLoader(true);
    try {
      const img = await axios.get(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImgArr([...imgArr, ...img.data.hits]);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
      scrollPage();
      
    }
  };

  const searchData = (e) => {
    if (e.target.value !== search) {
      setImgArr([]);
      setPageNumber(1);
    }
    setSearch(e.target.value);
    
  };

  const addPage = async (e) => {
    e.preventDefault();
    const newPage = pageNumber + 1;
    setPageNumber(newPage);
    searchPicture(newPage);
  };

  const addPictureToPage = (e) => {
    e.preventDefault();
    searchPicture(pageNumber);
    e.target.value = ""
    document.getElementById('request_field').reset()    
  }; 

  const scrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const largeImageURL = (url) => {
    setPicture(url);
    setModal(true);
  };

  const closeModal = (e) => {
    setModal(false);
  };

  

  return (
    <>
      <Searchbar searchData={searchData} addPictureToPage={addPictureToPage} />
      {loader && <Loader />}
      {error && <p>Loading has problem</p>}

      {!loader && !error && (
        <ImageGallery imgArr={imgArr} largeImageURL={largeImageURL} />
      )}

      {imgArr.length > 0 && <Button addPage={addPage} />}

      {modal && <Modal picture={picture} closeModal={closeModal} />}
    </>
  );
}

export default App;
