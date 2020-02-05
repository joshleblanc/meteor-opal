// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-opal.js.
import { name as packageName } from "meteor/meteor-opal";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-opal - example', function (test) {
  test.equal(packageName, "meteor-opal");
});
