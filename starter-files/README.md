This repository is using ReactJS, TypeScript and TailwindCSS. It also runs on node 18 (see .nvmrc) and has a formatter - prettier. If you're running this for the first time - please ensure you have nvm (node version manager).

## How To Run

If you don't have nvm installed, run the following command:
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
After you got nvm installed on your machine, run `nvm i` and then `nvm use` (to have the correct nodeJs version)

Once you have the correct node version, run `npm i` to get all the required dependencies installed

After everything is installed, run `npm run start` and navigate to http://localhost:3000

## API Calls

Please Note: The OpenWeather API is using an API Key. In the repository you fill find a `.env.example` file which you need to copy/save as `.env` and paste the value of your API key (which you can get when you register on the OpenWeather API website).
