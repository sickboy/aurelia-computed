System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime",
      "es7.decorators"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "aurelia-computed/*": "dist/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "aurelia-binding": "github:aurelia/binding@0.6.0",
    "aurelia-logging": "github:aurelia/logging@0.4.0",
    "babel": "npm:babel-core@5.2.13",
    "babel-runtime": "npm:babel-runtime@5.2.13",
    "core-js": "npm:core-js@0.9.6",
    "github:aurelia/binding@0.6.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.7.0",
      "aurelia-metadata": "github:aurelia/metadata@0.5.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.4.0",
      "core-js": "npm:core-js@0.9.6"
    },
    "github:aurelia/dependency-injection@0.7.0": {
      "aurelia-logging": "github:aurelia/logging@0.4.0",
      "aurelia-metadata": "github:aurelia/metadata@0.5.0",
      "core-js": "npm:core-js@0.9.6"
    },
    "github:aurelia/metadata@0.5.0": {
      "core-js": "npm:core-js@0.9.6"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.9.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

