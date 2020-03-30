### Dependencies
- Must have node and npm installed. Visit https://nodejs.org/ for installation.
- May or May not have typescript installed globally. ( npm install -g typescript)


### Clone the repository to your local

https://github.com/anandhaprakash-gartner/wdio-applitools.git

### Add your browserstack and applitools keys in wdio.config.ts file before running

```
const bstackUserName = '';
const bstackPassword =  '';
const applitoolsKey= '';

```

### Setup

1. Install packages 
```
npm install
```

#### Optional Parameters/Arguments to be passed to the test;  

`--browserName (default: chrome)`
 
#### Running a Single Spec 

Browserstack: 
```
npm run test -- --browserName chrome
```
