document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const resetPasswordForm = document.getElementById('reset-password-form');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            window.location.href = 'index.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            console.log("Login form submitted");
            console.log("Email:", email);
            console.log("Password:", password);

            if (email && password) {
                console.log("Redirecting to todo-list.html");
                window.location.href = 'todo-list.html';
            } else {
                alert("Please enter both email and password");
            }
        });
    }

    if (resetPasswordForm) {
        resetPasswordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newPassword = document.getElementById('new-password').value;
            const confirmNewPassword = document.getElementById('confirm-new-password').value;

            if (newPassword !== confirmNewPassword) {
                alert("New passwords do not match!");
                return;
            }
            alert("Password reset successful!");
        });
    }

    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    if (addTodoButton && todoList) {
        addTodoButton.addEventListener('click', () => {
            const newTodo = document.getElementById('new-todo').value;
            if (newTodo.trim()) {
                const li = document.createElement('li');
                li.textContent = newTodo;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    todoList.removeChild(li);
                });

                li.appendChild(deleteButton);
                todoList.appendChild(li);

                document.getElementById('new-todo').value = '';
            }
        });
    }
});
