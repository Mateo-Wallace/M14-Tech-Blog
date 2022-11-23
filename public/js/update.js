const postFormHandler = async function (event) {
    event.preventDefault();
    const post_idString = document.querySelector('#post-id').innerHTML;
    const id = +post_idString
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-body').value;

    if (content && title) {
        const response = await fetch(`/api/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
          } else {
            alert('Failed to update post');
          }
    }
};

document.querySelector('#new-post-form').addEventListener("click", postFormHandler);