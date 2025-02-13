# Meetus VR Frontend Task

This is a Next.js project for the Meetus VR frontend task. The project includes user authentication and protected routes.

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/meetus-vr-frontend-task.git
cd meetus-vr-frontend-task
```

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication

The application uses cookies to store the authentication token. The `index.js` file checks for the token and redirects the user to the dashboard if logged in, or to the login page if not.

## Protected Routes

Protected routes are defined in the `_app.js` file. The `ProtectedRoute` component is used to wrap protected pages and ensure that only authenticated users can access them.

## Deployment

To deploy the project, you can use Vercel (the creators of Next.js) or any other hosting provider that supports Node.js applications.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

This project is licensed under the MIT License.
