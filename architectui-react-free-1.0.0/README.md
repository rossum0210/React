# React UI for DPIF Python tool

- Dated : 04-10-2020
- Author :  Deepa G Pillai
- Updated 14-10-2020

Install the latest version of npm. This will be useful when running all the build commands. Run the following in a command line, either your IDE's Terminal window or in a Windows Command Prompt.

                                                            
    npm install --global npm@latest
                                                            
                                                        
Install the app dependencies by running the following command in the command line inside the folder root where you have unzipped the theme package archive.


    npm install
                                                        
After npm finishes installing the modules from package.json you can go ahead and start the application. To do so, run the command below.

You can also use yarn to install dependencies instead of npm.


    npm run start
                                                        
After the comand finished, you should see a Compiled successfully! message in  terminal window. Also, a web server service will be started in the browser: http://localhost:3000

### Production Build

To create a production optimised build run the command below:


    npm run build
    