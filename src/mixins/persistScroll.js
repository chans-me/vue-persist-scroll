let persistScroll = {
  methods: {
    setScroll() {
      sessionStorage.setItem(`${this.$route.name}ScrollPos`, window.pageYOffset);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.setScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.setScroll);
  },
  created() {
    if (window.history && window.history.pushState) {
      var self = this;
      window.onpopstate = function() {
        var hashLocation = location.hash;
        var hashSplit = hashLocation.split("#!/");
        var hashName = hashSplit[1];
  
        if (hashName !== '') {
          var hash = window.location.hash;
          if (hash === '') {
            window.scrollTo(0, sessionStorage.getItem(`${self.$route.name}ScrollPos`) || 0);
          }
        }
      };
    }
  }
};

export default persistScroll;