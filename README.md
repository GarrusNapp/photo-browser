# Description
A application that displays list of pictures from unsplash.com API, uses react + redux/redux-thunk with react-bootstrap for UI.

See demo - https://garrusnapp.github.io/photo-browser/

### user stories:
1. Allows user to search for pictures from different categories

2. Searched categories are stored, so user can check them again as long as application is running.

3. User can sort pictures by likes count and creation date.

4. User can mark picture as favorited


# Installation & running

1. `npm install`
2. `npm start`


# Issues

- react-infinite-scroller lib must be patched according to this https://github.com/CassetteRocks/react-infinite-scroller/pull/142 . I've left it in node_modules on purpose.

- Bad server requests not handled.
