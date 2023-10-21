import axios from 'axios';
import { useState } from 'react';

export const GifGridItem = ( {title, url, id}) => {
  const [items, setItems] = useState([]); 

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/items/${id}`)
      .then(response => {
        console.log(response.data.message);
        // setItems(prevItems => prevItems.filter(item => item.id !== id));
        window.location.reload();
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };


  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#000000',
    paddingBottom: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none'
};

  const downloadGif = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();

    const url2 = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url2; // Use url2 here
    a.download = `${title}.gif`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url2);
};


  return (
    
    <div className="card" sx={{margin:2}}>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
        <button style={buttonStyle} sx={{ paddingBottom: 2 }} onClick={() => downloadGif(url)}> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg> Descargar </button> 
        <button style={buttonStyle} sx={{ paddingBottom: 2 }} onClick={() => handleDelete(id)}>Delete</button> 
        
    </div>
    
  )
}
