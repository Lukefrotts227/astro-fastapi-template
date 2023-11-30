# astro-fastapi-template
This template is designed for building applications with an Astro frontend and a FastAPI backend. It comes pre-configured with React, Tailwind CSS, react-router-dom, and Axios for the Astro part, and a basic FastAPI setup.
## Why This?
We are using fastapi as it allows for building apis in the python programming language. It is easier to setup then django and it designed for building apis. We combine it with Astro a framework that allows for creating apps in a variety of frameworks.
## Getting started
### Astro
1. navigate to the my-app directory
2. to install dependencies run `npm install`
3. this comes setup with react, tailwind, react-router-dom and axios
4. feel free to add more with `npx astro add ...` or `npm install ...`
### fastapi
1. navigate to the api directory
2. we have to get the virtual enviorment setup
3. run `python -m venv venv` to generate the virtual enviorment
4. to activate the enviorment we run the following command
5. Depending on what command line you use run:

   bash
   ```bash
   source venv/bin/activate
   ```
   cmd
   ```cmd
   .\venv\Scripts\activate.bat
   ```
   powershell
   ```powershell
   ./venv/Scripts/activate.ps1
   ```
6. run `pip install -r requirements.txt` to install the dependencies
7. feel free to use `pip install ...` to install more python libraries
## In development
### Astro
1. run `npm run build` to prepare the app
2. run `npm run dev` to start the development server
### fastapi
1. naturally your venv needs to be activated for this to work
2. fastapi does not come with a builtin runtime like flask and django so we use uvicorn
3. to start the development server run `uvicorn main:app --reload`

  
