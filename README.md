# BlogHub - Next.js Blog Dashboard  

A blog dashboard built with Next.js, TypeScript, Material-UI, and RTK Query. It allows users to manage blog posts efficiently with infinite scrolling, server-side rendering (SSG), and dynamic routing.


## Tech Stack  
- **Framework**: Next.js (App Router)  
- **State Management**: Redux Toolkit & RTK Query  
- **Styling**: Material-UI  
- **Language**: TypeScript  


## Features  
✅ Infinite scrolling 

✅ Static Site Generation (SSG) for the blog list page (default behavior in Next.js App Router)

✅ Dynamic routing for individual blog post

✅ Client-Side Rendering (CSR) with RTK Query for fetching individual blog posts dynamically 

✅ Simple UI with Material-UI

✅ API calls managed using RTK Query 
 
✅ Responsive design with MUI


## Installation & Setup  
1. Clone the repository:  
   ```sh
   git clone https://github.com/jaiatearth/blog-dashboard.git
   cd blog-dahsboard

2. ```sh
   yarn install
   npx next dev --turbo


## API Integration
The project uses **RTK Query** to fetch posts from a REST API.  
**Base URL**: `https://jsonplaceholder.typicode.com/`  


## Folder Structure 
📂 src

┣ 📂 app # Next.js app router directory

┣ 📂 app/components # Reusable UI components

┣ 📂 redux # RTK Query API & store

┣ 📂 styles # Global styles & MUI theme

┣ 📜 types.ts # TypeScript interfaces

┣ 📜 README.md # Project documentation


## **Deployment**  
To deploy the project, use Vercel:  
```sh
yarn build
yarn start
```
