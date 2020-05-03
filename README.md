# vue-persist-scroll

### Introduction
I've added a mixin that will help to persist the page data when user clicks backward and forward button in browser
 

### Development Setup

    git clone https://github.com/chans-me/vue-persist-scroll.git
    cd vue-persist-scroll
    npm install
    npm run dev

### Example:

    If a page data needs to be persisted, the add all the api calls in initializeData() method instead of created hook
    
    Then add the mixin 
    
    import  persistScroll  from  '../mixins/persistScroll';
    
    inside vue component instance add the imported mixin
    
    mixins: [persistScroll],

### Working behaviour:
When user click on any route, The component will mount based on the route. If the url is no triggered from 'forward' or 'backward' action in browser. It records the scroll event of the page and call the initializeData() method form mixin, this will trigger all the api calls and sets the data to the page.

Whe  user leaves the page and moved to different page. The state of page is captured in local state. If the user again comes back to the same page. It will not call the initializeData() method. It only revert the data from state and set back to current page. The scroll position also persist in this case 