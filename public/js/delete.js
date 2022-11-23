const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete project');
      }
    }
  };

  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', delButtonHandler));