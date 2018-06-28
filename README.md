# Angular - Electron Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

This project demostractes how Electron and Angular can work together and communicate each other via IPC.

It is good to started quickly with learning and prototyping in Angular.

## Prerequisites

Node.js and npm are essential to Angular development. Get it now (https://docs.npmjs.com/getting-started/installing-node) if it's not already installed on your machine.

Once you have installed Node.js, clone the repository. if you are new to git, check out the <a href='https://help.github.com/articles/cloning-a-repository/'>guide to cloning a repository</a>.

<b>Clone the repository</b>
<code>
git clone https://github.com/jitsthr/angular-electron
</code>

<b>Go into the repository</b>
<code>
$ cd angular-electron
</code>

<b>Install the dependencies and run</b>
<code>
$ npm install && npm start
</code>

## Install Missing Modules

to install within your project directory

<code>npm-install-missing</code>

to install globally

<code>npm install -g npm-install-missing</code>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run as an native desktop app

You can run this angular app as an native desktop app with the following command.

<code>npm run electron-build</code>

## About the application

It is an basic angular based desktop native app that has below functionalities.

<ul>
  <li>desktop native app using Electron</li>
  <li>Custome Menu design</li>
  <li>Popup window on about</li>
  <li>Angular routing based on menu click.</li>
  <li>Basic operation like Listing, Create, Edit, Delete in angular</li>
  <li>Main process communicate with render process via IPC (Electron to Angular)</li>
  <li>Searching name</li>
  <li>Master Detail component</li>
  <li>Angular services</li>
  <li>mimics communication with a remote data server by using the In-memory Web API module</li>
  </ul>

<b>Dashboard menu navigation</b>
![screenshort](https://user-images.githubusercontent.com/5098424/42028560-38242bc4-7aea-11e8-96d7-521e0e2e3dda.png)

<b>Heroes menu navigation</b>
![screenshort](https://user-images.githubusercontent.com/5098424/42028959-8d191a12-7aeb-11e8-83d6-673c4466f754.png)

<b>About menu popup</b>
![screenshort](https://user-images.githubusercontent.com/5098424/42029007-b953a76e-7aeb-11e8-870c-942a3d7b9fdb.png)


Enjoy Coding!
