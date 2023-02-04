# EasyJsonDB

Quick example about JsonDB

## Setup

- `npm install -g json-server`
- `json-server --watch back-end/database.json --port=8001`
- Assuming you use `VSCode` and `LiveServer`, use `LiveServer` to open the `index.html` in your favorite browser.

## Notes

`LiveServer` starts observing the root of your current `VSCode` workspace (directories and files). 

If anything change, it will reload the page.

So in this case, if you open `VSCode` under the directory `EasyJsonDB`, since the `database.json` will change, the page will reload.

If you open `VSCode` under the directory `front-end`, `LiveServer` won't see the `database.json`.

To see the update, you'll either have to :
- Reload manually
- Add some code to refresh the list.

Have Fun!