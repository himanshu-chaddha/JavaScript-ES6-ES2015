var obj = {
  value: 0,
  increment: function() {
    var that = this;
    setTimeout(() => {
      that.value++;
      console.log(that.value);
    }, 1000);
  }
};
obj.increment();
