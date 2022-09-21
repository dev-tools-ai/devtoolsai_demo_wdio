# devtoolsai_demo_playwright
Sample code for using SmartDriver with WDIO 

# What it does
This example contains two tests:
 - one will enter username into Github login, this demonstrates the ability to ingest an element from an existing test case with xpath for instance
 - one will use findByAI and prompt you to locate the searchbox, this demonstrates the way you can design test cases without selectors.

# Running

Install the dependencies
```
npm install
```

Put your api key into the .env file (otherwise you will see an error)
```
DEVTOOLSAI_API_KEY="<<get your api key at dev-tools.ai>>"
DEVTOOLSAI_INTERACTIVE=TRUE # or FALSE
```

Run the tests
```
npx wdio run ./wdio.conf.js
```
