module("CommonJS: Modules 1.1.1 - same domain", {
  setup: function() {
    if (localStorage) {
      localStorage.clear();
    }
    Inject.reset();
    require.setModuleRoot("http://localhost:4000/tests/requires/modules-1.1.1");
  },
  teardown: function() {
    if (localStorage) {
      localStorage.clear();
    }
  }
});

asyncTest("run program.js", 5, function() {
  require.run("program");
});



module("CommonJS: Modules 1.1.1 - different domain", {
  setup: function() {
    if (localStorage) {
      localStorage.clear();
    }
    Inject.reset();
    require.setModuleRoot("http://localhost:4001/tests/requires/modules-1.1.1");
    require.setCrossDomain("http://localhost:4000/relay.html",
                           "http://localhost:4001/relay.html");
  },
  teardown: function() {
    if (localStorage) {
      localStorage.clear();
    }
  }
});

asyncTest("run program.js", 5, function() {
  require.run("program");
});
