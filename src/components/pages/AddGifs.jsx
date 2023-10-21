import React from 'react'





    

export const AddGifs = () => {

  const InsertForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      url: ''
    })
    }


const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/search/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Data inserted successfully!', response.data);
      // Clear the form after successful submission
      setFormData({
        title: '',
        url: ''
      });
    } catch (error) {
      console.error('Error inserting data:', error);
    }
}

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Title:
      <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
    </label>
    <label>
      URL:
      <input type="text" name="url" value={formData.url} onChange={handleInputChange} />
    </label>
    <button type="submit">Submit</button>
  </form>
  )
}
