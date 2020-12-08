// async function to send form input to post endpoint / route on submit event
const newFormHandler = async function (event) {
    event.preventDefault();

    // get form values for POST to endpoint
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    const token = localStorage.getItem("token");
    await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    });

    document.location.replace("/dashboard");
};

document.querySelector("#new-post-form").addEventListener("submit", newFormHandler);