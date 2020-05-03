import _ from 'lodash';
let persistScroll = {
  data() {
    return {
      backClicked: false,
    }
  },
  methods: {
    setScroll() {
      this.$root.state[`${this.$route.name}ScrollPos`] = window.pageYOffset;
    },
    restoreData() {
      if (this.$root.state[`${this.$route.name}PageData`]) {
        Object.assign(this.$data, {});
        Object.assign(this.$data, this.$root.state[`${this.$route.name}PageData`]);
      } else {
        if (this.initializeData) this.initializeData()
      }
    },
    setData() {
      if (!this.backClicked) {
        if (this.initializeData) this.initializeData()
      } else {
        this.restoreData();
        this.backClicked = false;
      }
    }
  },
  watch: {
    backClicked(value) {
      if (value) this.debounceFunc();
    }
  },
  updated() {
    window.scrollTo(0, this.$root.state[`${this.$route.name}ScrollPos`] || 0);
  },
  mounted() {
    window.addEventListener('scroll', this.setScroll);
  },
  beforeRouteLeave (to, from, next) {
    this.$root.state[`${this.$route.name}PageData`] = Object.assign({}, this.$data);
    window.removeEventListener('scroll', this.setScroll);
    next();
  },
  created() {
    var self = this;
    this.debounceFunc = _.debounce(this.setData, 200);
    this.debounceFunc();
    if (window.history && window.history.pushState) {
      window.onpopstate = function() {
        var hashLocation = location.hash;
        var hashSplit = hashLocation.split("#!/");
        var hashName = hashSplit[1];
  
        if (hashName !== '') {
          var hash = window.location.hash;
          if (hash === '') {
            self.backClicked = true;
          }
        }
      };
    }
  }
};

export default persistScroll;