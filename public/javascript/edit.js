const postId = document.querySelector('input[name="post-id"]').value;

// async function to send form input to post comment endpoint / route on submit event
const editFormHandler = async function (event) {
    event.preventDefault();

    // get form values for POST to endpoint
    const postId = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    // send update request to endpoint
    await fetch(`api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    document.location.replace('/dashboard');
};

// listen for click on delete button and request post be deleted via endpoint
const deleteClickHandler = async function () {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });
};


document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);

document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);